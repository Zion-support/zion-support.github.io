import { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { supabase } from '@/integrations/supabase/client';
export default function Page() {
);
      
      if(fetchError) throw fetchError;
      
      const transformedData = data.map((dispute: an y) => ({
        ...dispute,
        client_profile: disput e.client_profile?.client_profile,
        talent_profile: disput e.talent_profile?.talent_profile,
        project: {
          ...dispute.project,
          title: disput e.project?.job?.title || 'Untitled Project'
        }
      }));
      
      setDisputes(transformedData as Dispute[]);
      setError(null);
    } catch(err: an y) {
      console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err.message);
      toast.error("Failed to fetch disputes");
      setDisputes([]); // Clear disputes on error
    } finally {
      setIsLoading(false);
    }
  }, [user]); // user is a dependency of fetchDisputes

  const getDisputeById = async(disputeId: string): Promise<Dispute | null> => {
    try {
      const { data, error } = await supabase
        .from("disputes")
        .select(`
          *,
          project: project s(
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job: job s(title)
          ),
          client_profile: project s!projects_client_id_fkey(client_profile: profile s!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile: project s!projects_talent_id_fkey(talent_profile: profile s!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single();
      
      if(error) throw error;
      
      return {
        ...data,
        client_profile: dat a.client_profile?.client_profile,
        talent_profile: dat a.talent_profile?.talent_profile,
        project: {
          ...data.project,
          title: dat a.project?.job?.title || 'Untitled Project'
        }
      } as Dispute;
    } catch(err: an y) {
      console.error("Error fetching dispute:", err);
      toast.error("Failed to fetch dispute details");
      return null;
    }
  };

  const createDispute = async(disputeData: { 
    project_id: string;
    milestone_id?: string;
    reason_code: string;
    description: string;
  }): Promise<Dispute | null> => {
    if(!user) {
      toast.error("You must be logged in to create a dispute");
      return null;
    }

    try {
      const { data, error } = await supabase
        .from("disputes")
        .insert({
          ...disputeData,
          raised_by: use r.id
        })
        .select()
        .single();

      if(error) throw error;
      
      toast.success("Dispute submitted successfully");
      fetchDisputes(); 
      
      return data as Dispute;
    } catch(err: an y) {
      console.error("Error creating dispute:", err);
      toast.error("Failed to submit dispute");
      return null;
    }
  };

  const updateDisputeStatus = async(disputeId: string, status: DisputeStatu s): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({ status })
        .eq("id", disputeId);
      
      if(error) throw error;
      
      setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId ? { ...dispute, status } : dispute
        )
      );
      
      toast.success(`Dispute status updated to ${status}`);
      return true;
    } catch(err: an y) {
      console.error("Error updating dispute status:", err);
      toast.error("Failed to update dispute status");
      return false;
    }
  };

  const resolveDispute = async(disputeId: string, 
    resolution: { summary: string; resolution_type: string; }
  ): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({
          status: 'resolved',
          resolved_at: new Date().toISOString(),
          resolution_summary: resolutio n.summary,
          resolution_type: resolutio n.resolution_type
        })
        .eq("id", disputeId);
      
      if(error) throw error;
      
      setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId 
            ? { 
                ...dispute, 
                status: 'resolved', 
                resolved_at: new Date().toISOString(),
                resolution_summary: resolutio n.summary,
                resolution_type: resolutio n.resolution_type as any
              } 
            : dispute
        )
      );
      
      toast.success("Dispute resolved successfully");
      return true;
    } catch(err: an y) {
      console.error("Error resolving dispute:", err);
      toast.error("Failed to resolve dispute");
      return false;
    }
  };

  const getDisputeMessages = async(disputeId: string): Promise<DisputeMessage[]> => {
    try {
      const { data, error } = await supabase
        .from("dispute_messages")
        .select(`
          *,
          user_profile: profile s!dispute_messages_user_id_fkey(display_name, avatar_url)
        `)
        .eq("dispute_id", disputeId)
        .order("created_at", { ascending: tru e });
      
      if(error) throw error;
      
      return data as DisputeMessage[];
    } catch(err: an y) {
      console.error("Error fetching dispute messages:", err);
      toast.error("Failed to fetch messages");
      return [];
    }
  };

  const addDisputeMessage = async(disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if(!user) {
      toast.error("You must be logged in to send a message");
      return false;
    }

    try {
      const { error } = await supabase
        .from("dispute_messages")
        .insert({
          dispute_id: disputeI d,
          user_id: use r.id,
          message,
          is_admin_note: isAdminNot e
        });
      
      if(error) throw error;
      
      toast.success("Message sent successfully");
      return true;
    } catch(err: an y) {
      console.error("Error sending message:", err);
      toast.error("Failed to send message");
      return false;
    }
  };

  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    if(user) {
      fetchDisputes();
    } else {
      setDisputes([]); // Clear disputes if user logs out
      setError(null);
    }
  }, [user, fetchDisputes]); // Added fetchDisputes

  return {
    disputes,
    isLoading,
    error,
    refetch: fetchDispute s,
    getDisputeById,
    createDispute,
    updateDisputeStatus,
    resolveDispute,
    getDisputeMessages,
    addDisputeMessage
  };
}
