
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from &quot;@/types/disputes&quot;;
import { toast } from &quot;sonner&quot;;

export function useDisputes() {
  const { user } = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDisputes = async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      
      const { data, error: fetchError } = await supabase
        .from(&quot;disputes&quot;)
        .select(`
          *,
          project:projects(
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job:jobs(title)
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .order(&quot;created_at&quot;, { ascending: false });
      
      if (fetchError) throw fetchError;
      
      // Transform data if needed
      const transformedData = data.map((dispute: any) => ({
        ...dispute,
        client_profile: dispute.client_profile?.client_profile,
        talent_profile: dispute.talent_profile?.talent_profile,
        project: {
          ...dispute.project,
          title: dispute.project?.job?.title || 'Untitled Project'
        }
      }));
      
      setDisputes(transformedData as Dispute[]);
      setError(null);
    } catch (err: any) {
      console.error(&quot;Error fetching disputes:&quot;, err);
      setError(&quot;Failed to fetch disputes: &quot; + err.message);
      toast.error(&quot;Failed to fetch disputes&quot;);
    } finally {
      setIsLoading(false);
    }
  };

  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {
    try {
      const { data, error } = await supabase
        .from(&quot;disputes&quot;)
        .select(`
          *,
          project:projects(
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job:jobs(title)
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq(&quot;id&quot;, disputeId)
        .single();
      
      if (error) throw error;
      
      return {
        ...data,
        client_profile: data.client_profile?.client_profile,
        talent_profile: data.talent_profile?.talent_profile,
        project: {
          ...data.project,
          title: data.project?.job?.title || 'Untitled Project'
        }
      } as Dispute;
    } catch (err: any) {
      console.error(&quot;Error fetching dispute:&quot;, err);
      toast.error(&quot;Failed to fetch dispute details&quot;);
      return null;
    }
  };

  const createDispute = async (disputeData: { 
    project_id: string;
    milestone_id?: string;
    reason_code: string;
    description: string;
  }): Promise<Dispute | null> => {
    if (!user) {
      toast.error(&quot;You must be logged in to create a dispute&quot;);
      return null;
    }

    try {
      const { data, error } = await supabase
        .from(&quot;disputes&quot;)
        .insert({
          ...disputeData,
          raised_by: user.id
        })
        .select()
        .single();

      if (error) throw error;
      
      toast.success(&quot;Dispute submitted successfully&quot;);
      fetchDisputes(); // Refresh the list
      
      return data as Dispute;
    } catch (err: any) {
      console.error(&quot;Error creating dispute:&quot;, err);
      toast.error(&quot;Failed to submit dispute&quot;);
      return null;
    }
  };

  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from(&quot;disputes&quot;)
        .update({ status })
        .eq(&quot;id&quot;, disputeId);
      
      if (error) throw error;
      
      // Update local state
      setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId ? { ...dispute, status } : dispute
        )
      );
      
      toast.success(`Dispute status updated to ${status}`);
      return true;
    } catch (err: any) {
      console.error(&quot;Error updating dispute status:&quot;, err);
      toast.error(&quot;Failed to update dispute status&quot;);
      return false;
    }
  };

  const resolveDispute = async (
    disputeId: string, 
    resolution: { summary: string; resolution_type: string; }
  ): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from(&quot;disputes&quot;)
        .update({
          status: 'resolved',
          resolved_at: new Date().toISOString(),
          resolution_summary: resolution.summary,
          resolution_type: resolution.resolution_type
        })
        .eq(&quot;id&quot;, disputeId);
      
      if (error) throw error;
      
      // Update local state
      setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId 
            ? { 
                ...dispute, 
                status: 'resolved', 
                resolved_at: new Date().toISOString(),
                resolution_summary: resolution.summary,
                resolution_type: resolution.resolution_type as any
              } 
            : dispute
        )
      );
      
      toast.success(&quot;Dispute resolved successfully&quot;);
      return true;
    } catch (err: any) {
      console.error(&quot;Error resolving dispute:&quot;, err);
      toast.error(&quot;Failed to resolve dispute&quot;);
      return false;
    }
  };

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
    try {
      const { data, error } = await supabase
        .from(&quot;dispute_messages&quot;)
        .select(`
          *,
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url)
        `)
        .eq(&quot;dispute_id&quot;, disputeId)
        .order(&quot;created_at&quot;, { ascending: true });
      
      if (error) throw error;
      
      return data as DisputeMessage[];
    } catch (err: any) {
      console.error(&quot;Error fetching dispute messages:&quot;, err);
      toast.error(&quot;Failed to fetch messages&quot;);
      return [];
    }
  };

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast.error(&quot;You must be logged in to send a message&quot;);
      return false;
    }

    try {
      const { error } = await supabase
        .from(&quot;dispute_messages&quot;)
        .insert({
          dispute_id: disputeId,
          user_id: user.id,
          message,
          is_admin_note: isAdminNote
        });
      
      if (error) throw error;
      
      toast.success(&quot;Message sent successfully&quot;);
      return true;
    } catch (err: any) {
      console.error(&quot;Error sending message:&quot;, err);
      toast.error(&quot;Failed to send message&quot;);
      return false;
    }
  };

  // Fetch disputes when component mounts or user changes
  useEffect(() => {
    if (user) {
      fetchDisputes();
    }
  }, [user]);

  return {
    disputes,
    isLoading,
    error,
    refetch: fetchDisputes,
    getDisputeById,
    createDispute,
    updateDisputeStatus,
    resolveDispute,
    getDisputeMessages,
    addDisputeMessage
  };
}
