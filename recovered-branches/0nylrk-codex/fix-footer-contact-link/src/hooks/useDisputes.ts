
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes",
import { toast } from "sonner",
=======
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from &quot;@/types/disputes&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useDisputes() {
  const { user } = useAuth(),
  const [disputes, setDisputes] = useState<Dispute[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  const fetchDisputes = async () => {
    if (!user) {
      setIsLoading(false),
      return
    }

    try {
      setIsLoading(true),
      
      const { data, error: fetchError } = await supabase
        .from(&quot;disputes&quot;)
=======

export function useDisputes() {_const { user} = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const _fetchDisputes = async () => {_if (!user) {
      setIsLoading(false);
      return;}

    try {_setIsLoading(true);
      
      const { data, _error: fetchError} = await supabase
        .from("disputes")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
<<<<<<< HEAD
        .order("created_at", { ascending: false }),
=======
        .order(&quot;created_at&quot;, { ascending: false });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        .order("created_at", {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (fetchError) throw fetchError,
      
      // Transform data if needed
<<<<<<< HEAD
      const transformedData = data.map((dispute: any) => ({
        ...dispute,
        client_profile: dispute.client_profile?.client_profile,
        talent_profile: dispute.talent_profile?.talent_profile,
        project: {
          ...dispute.project,
          title: dispute.project?.job?.title || 'Untitled Project'
        }
      })),
      
      setDisputes(transformedData as Dispute[]),
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching disputes:", err),
      setError("Failed to fetch disputes: " + err.message),
      toast.error("Failed to fetch disputes")
=======
      console.error(&quot;Error fetching disputes:&quot;, err);
      setError(&quot;Failed to fetch disputes: &quot; + err.message);
      toast.error(&quot;Failed to fetch disputes&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {
    try {
      const { data, error } = await supabase
        .from(&quot;disputes&quot;)
=======
      const _transformedData = data.map(_(dispute: unknown) => ({_...dispute, _client_profile: dispute.client_profile?.client_profile, _talent_profile: dispute.talent_profile?.talent_profile, _project: {
          ...dispute.project, _title: dispute.project?.job?.title || 'Untitled Project'}
      }));
      
      setDisputes(transformedData as Dispute[]);
      setError(null);
    } catch (err: unknown) {_setError("Failed to fetch disputes: " + err.message);
      toast.error("Failed to fetch disputes");} finally {_setIsLoading(false);}
  };

  const _getDisputeById = async (disputeId: string): Promise<Dispute | null> => {_try {
      const { data, _error} = await supabase
        .from("disputes")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
        .eq("id", disputeId)
        .single(),
=======
        .eq(&quot;id&quot;, disputeId)
        .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      if (error) throw error,
      
<<<<<<< HEAD
      return {
        ...data,
        client_profile: data.client_profile?.client_profile,
        talent_profile: data.talent_profile?.talent_profile,
        project: {
          ...data.project,
          title: data.project?.job?.title || 'Untitled Project'
        }
      } as Dispute
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching dispute:", err),
      toast.error("Failed to fetch dispute details"),
      return null
=======
      console.error(&quot;Error fetching dispute:&quot;, err);
      toast.error(&quot;Failed to fetch dispute details&quot;);
      return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const createDispute = async (disputeData: { 
    project_id: string,
    milestone_id?: string,
    reason_code: string,
    description: string
  }): Promise<Dispute | null> => {
    if (!user) {
<<<<<<< HEAD
      toast.error("You must be logged in to create a dispute"),
      return null
=======
      toast.error(&quot;You must be logged in to create a dispute&quot;);
      return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    try {
      const { data, error } = await supabase
        .from(&quot;disputes&quot;)
        .insert({
          ...disputeData,
          raised_by: user.id
        })
=======
      return {_...data, _client_profile: data.client_profile?.client_profile, _talent_profile: data.talent_profile?.talent_profile, _project: {
          ...data.project, _title: data.project?.job?.title || 'Untitled Project'}
      } as Dispute;
    } catch (err: unknown) {_toast.error("Failed to fetch dispute details");
      return null;}
  };

  const _createDispute = async (disputeData: {_project_id: string;
    milestone_id?: string;
    reason_code: string;
    description: string;}): Promise<Dispute | null> => {_if (!user) {
      toast.error("You must be logged in to create a dispute");
      return null;}

    try {_const { data, _error} = await supabase
        .from("disputes")
        .insert({_...disputeData, _raised_by: user.id})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .select()
        .single(),

      if (error) throw error,
      
<<<<<<< HEAD
      toast.success("Dispute submitted successfully"),
      fetchDisputes(), // Refresh the list
=======
      toast.success(&quot;Dispute submitted successfully&quot;);
      fetchDisputes(); // Refresh the list
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
<<<<<<< HEAD
      return data as Dispute
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error creating dispute:", err),
      toast.error("Failed to submit dispute"),
      return null
=======
      console.error(&quot;Error creating dispute:&quot;, err);
      toast.error(&quot;Failed to submit dispute&quot;);
      return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from(&quot;disputes&quot;)
        .update({ status })
<<<<<<< HEAD
        .eq("id", disputeId),
=======
        .eq(&quot;id&quot;, disputeId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      return data as Dispute;
    } catch (err: unknown) {_toast.error("Failed to submit dispute");
      return null;}
  };

  const _updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {_try {
      const { error} = await supabase
        .from("disputes")
        .update({_status})
        .eq("id", disputeId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
      // Update local state
      setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId ? {_...dispute, _status} : dispute
        )
      ),
      
<<<<<<< HEAD
      toast.success(`Dispute status updated to ${status}`),
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error updating dispute status:", err),
      toast.error("Failed to update dispute status"),
      return false
=======
      console.error(&quot;Error updating dispute status:&quot;, err);
      toast.error(&quot;Failed to update dispute status&quot;);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
      toast.success(`Dispute status updated to ${_status}`);
      return true;
    } catch (err: unknown) {_toast.error("Failed to update dispute status");
      return false;}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _resolveDispute = async (
    disputeId: string, 
<<<<<<< HEAD
    resolution: { summary: string, resolution_type: string }
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
<<<<<<< HEAD
        .eq("id", disputeId),
=======
        .eq(&quot;id&quot;, disputeId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    resolution: {_summary: string; resolution_type: string;}
  ): Promise<boolean> => {_try {
      const { error} = await supabase
        .from("disputes")
        .update({_status: 'resolved', _resolved_at: new Date().toISOString(), _resolution_summary: resolution.summary, _resolution_type: resolution.resolution_type})
        .eq("id", disputeId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
      // Update local state
      setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId 
            ? {_...dispute, _status: 'resolved', _resolved_at: new Date().toISOString(), _resolution_summary: resolution.summary, _resolution_type: resolution.resolution_type as any} 
            : dispute
        )
      ),
      
<<<<<<< HEAD
      toast.success("Dispute resolved successfully"),
      return true
    } catch (err: any) {
      console.error("Error resolving dispute:", err),
      toast.error("Failed to resolve dispute"),
      return false
=======
      toast.success(&quot;Dispute resolved successfully&quot;);
      return true;
<<<<<<< HEAD
    } catch (err: any) {
      console.error(&quot;Error resolving dispute:&quot;, err);
      toast.error(&quot;Failed to resolve dispute&quot;);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
    try {
      const { data, error } = await supabase
        .from(&quot;dispute_messages&quot;)
=======
    } catch (err: unknown) {_toast.error("Failed to resolve dispute");
      return false;}
  };

  const _getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {_try {
      const { data, _error} = await supabase
        .from("dispute_messages")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .select(`
          *,
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url)
        `)
<<<<<<< HEAD
        .eq("dispute_id", disputeId)
<<<<<<< HEAD
        .order("created_at", { ascending: true }),
=======
        .eq(&quot;dispute_id&quot;, disputeId)
        .order(&quot;created_at&quot;, { ascending: true });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        .order("created_at", {_ascending: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
<<<<<<< HEAD
      return data as DisputeMessage[]
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching dispute messages:", err),
      toast.error("Failed to fetch messages"),
      return []
=======
      console.error(&quot;Error fetching dispute messages:&quot;, err);
      toast.error(&quot;Failed to fetch messages&quot;);
      return [];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
<<<<<<< HEAD
      toast.error("You must be logged in to send a message"),
      return false
=======
      toast.error(&quot;You must be logged in to send a message&quot;);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    try {
      const { error } = await supabase
        .from(&quot;dispute_messages&quot;)
        .insert({
          dispute_id: disputeId,
          user_id: user.id,
          message,
          is_admin_note: isAdminNote
        }),
=======
      return data as DisputeMessage[];
    } catch (err: unknown) {_toast.error("Failed to fetch messages");
      return [];}
  };

  const _addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {_if (!user) {
      toast.error("You must be logged in to send a message");
      return false;}

    try {_const { error} = await supabase
        .from("dispute_messages")
        .insert({_dispute_id: disputeId, _user_id: user.id, _message, _is_admin_note: isAdminNote});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
<<<<<<< HEAD
      toast.success("Message sent successfully"),
      return true
    } catch (err: any) {
      console.error("Error sending message:", err),
      toast.error("Failed to send message"),
      return false
=======
      toast.success(&quot;Message sent successfully&quot;);
      return true;
<<<<<<< HEAD
    } catch (err: any) {
      console.error(&quot;Error sending message:&quot;, err);
      toast.error(&quot;Failed to send message&quot;);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  // Fetch disputes when component mounts or user changes
  useEffect(() => {
    if (user) {
      fetchDisputes()
    }
  }, [user]),

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
  }
=======
    } catch (err: unknown) {_toast.error("Failed to send message");
      return false;}
  };

  // Fetch disputes when component mounts or user changes
  useEffect__(() => {_if (user) {
      fetchDisputes();}
  }, [user]);

  return {_disputes, _isLoading, _error, _refetch: fetchDisputes, _getDisputeById, _createDispute, _updateDisputeStatus, _resolveDispute, _getDisputeMessages, _addDisputeMessage};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
