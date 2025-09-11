



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  const [error, setError] = useState<string | null>(null);
  const fetchDisputes = async () => {
    if (!user) {
      setIsLoading(false);
      return
    }
    try {
      setIsLoading(true);
      setIsLoading(true),
      
      const { data, error: fetchError } = await supabase
        .from("disputes")
        .select(`
          *,
          project:projects(
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job:jobs(title)
          )
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url));
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .order("created_at", { ascending: false }),
      
      if (fetchError) throw fetchError,
      
      // Transform data if needed
      const transformedData = data.map((dispute: any) => ({
        ...dispute,
        client_profile: dispute.client_profile?.client_profile,
        talent_profile: dispute.talent_profile?.talent_profile,
        project: {
          ...dispute.project
          title: dispute.project?.job?.title |'Untitled Project'
        }
      }));
      setDisputes(transformedData as Dispute[]);
      setError(null)
    } catch (err: any) {
      console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err.message)
      })),
      
      setDisputes(transformedData as Dispute[]),
      setError(null)
    } catch (err: any) {
      console.error("Error fetching disputes:", err),
      setError("Failed to fetch disputes: " + err.message),
      toast.error("Failed to fetch disputes")
    } finally {
      setIsLoading(false)
    }
  }
  },

  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {
    try {
      const { data, error } = await supabase
        .from("disputes")
        .select(`
          *,
          project:projects(
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job:jobs(title)
          )
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url));
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single();
      if (error) throw error;
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single(),
      
      if (error) throw error,
      
      return {
        ...data;
        client_profile: data && data.client_profile?.client_profile;
        talent_profile: data && data.talent_profile?.talent_profile;
        project: {
          ...data.project
          title: data.project?.job?.title |'Untitled Project'
        }
      } as Dispute
    } catch (err: any) {
      console.error("Error fetching dispute:", err),
      toast.error("Failed to fetch dispute details"),
      return null
    }
  }
  const createDispute = async (disputeData: {
    project_id: string;
    milestone_id?: string;
    reason_code: string
  },

  const createDispute = async (disputeData: { 
    project_id: string,
    milestone_id?: string,
    reason_code: string,
    description: string
  }): Promise<Dispute | null> => {
    if (!user) {
      toast && toast.error("You must be logged in to create a dispute");
      return null
    }
    try {
      const { data, error } = await supabase
        .from("disputes")
        .insert({
          ...disputeData;
          raised_by: user && user.id
        })
        .select()
        .single();
      if (error) throw error;
      toast.success("Dispute submitted successfully");
        .single(),

      if (error) throw error,
      
      toast.success("Dispute submitted successfully"),
      fetchDisputes(), // Refresh the list
      return data as Dispute
    } catch (err: any) {
      console && console.error("Error creating dispute:", err);
      toast && toast.error("Failed to submit dispute");
      return null
    }
  }
  },

  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({ status })
        .eq("id", disputeId);
      if (error) throw error;
        .eq("id", disputeId),
      
      if (error) throw error,
      
      // Update local state

      setDisputes(prevDisputes => 
        prevDisputes && prevDisputes.map(dispute => 
          dispute && dispute.id === disputeId ? { ...dispute, status } : dispute
        )
      );
      toast.success(`Dispute status updated to ${status}`);
      ),
      
      toast.success(`Dispute status updated to ${status}`),
      return true
    } catch (err: any) {
      console && console.error("Error updating dispute status:", err);
      toast && toast.error("Failed to update dispute status");
      return false

      console.error ("Error fetching dispute:", err);
      toast.error ("Failed to fetch dispute details");
=======

    disputeId: string, 

=======
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes",;
import { toast } from "sonner",;
export function useDisputes() {;
  const { user } = useAuth(),;
  const [disputes, setDisputes] = useState<Dispute[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const fetchDisputes = async () => {;
    if (!user) {;
      setIsLoading(false),;
      return;
    }
;
    try {;
      setIsLoading(true),;
      const { data, error: fetchError } = await supabase;
        .from("disputes");
        .select(`;
          *,;
          project:projects(;
            scope_summary,;
            job_id,;
            client_id,;
            talent_id,;
            job:jobs(title);
          ),;
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),;
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url));
        `);
        .order("created_at", { ascending: false }),;
      if (fetchError) throw fetchError,;
      // Transform data if needed;
      const transformedData = data.map((dispute: any) => ({;
        ...dispute,;
        client_profile: dispute.client_profile?.client_profile,;
        talent_profile: dispute.talent_profile?.talent_profile,;
        project: {;
          ...dispute.project,;
          title: dispute.project?.job?.title || 'Untitled Project';
        }
      })),;
      setDisputes(transformedData as Dispute[]),;
      setError(null);
    } catch (err: any) {;
      console.error("Error fetching disputes:", err),;
      setError("Failed to fetch disputes: " + err.message),;
      toast.error("Failed to fetch disputes");
    } finally {;
      setIsLoading(false);
    }
  },;
  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {;
    try {;
      const { data, error } = await supabase;
        .from("disputes");
        .select(`;
          *,;
          project:projects(;
            scope_summary,;
            job_id,;
            client_id,;
            talent_id,;
            job:jobs(title);
          ),;
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),;
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url));
        `);
        .eq("id", disputeId);
        .single(),;
      if (error) throw error,;
      return {;
        ...data,;
        client_profile: data.client_profile?.client_profile,;
        talent_profile: data.talent_profile?.talent_profile,;
        project: {;
          ...data.project,;
          title: data.project?.job?.title || 'Untitled Project';
        }
      } as Dispute;
    } catch (err: any) {;
      console.error("Error fetching dispute:", err),;
      toast.error("Failed to fetch dispute details"),;

      return null;
    }
  }
;
  const create_dispute = async (dispute_data: {
    project_id: string;
    milestone_id?: string;
    reason_code: string,
    description: string;
  }): Promise < Dispute | null> => {
    // Check condition
if ( {) {
  $2
}
      toast.error ("You must be logged in to create a dispute");
      return null;
    }
    try {
      const { data, error } = await supabase;
        .from ("disputes");
        .insert ({
          ...dispute_data;
          raised_by: user.id;
        });
        .select ();
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      toast.success ("Dispute submitted successfully");
      fetch_disputes (), // Refresh the list;
      return data as Dispute;
    } catch (err: any) {
      console.error ("Error creating dispute:", err);
      toast.error ("Failed to submit dispute");
      return null;
    }
  }
;
  const updateDisputeStatus = async (dispute_id: string, status: DisputeStatus): Promise < boolean> => {
    try {
      const { error } = await supabase;
        .from ("disputes");
        .update ({ status });
        .eq ("id", dispute_id);
;
      // Check condition
if (throw error) {
  $2
}
      // Update local state;
      set_disputes (prev_disputes =>;
        prev_disputes.map (dispute =>;
          dispute.id === dispute_id ? { ...dispute, status } : dispute));
;
      toast.success (`Dispute status updated to ${status}`);
      return true;
    } catch (err: any) {
      console.error ("Error updating dispute status:", err);
      toast.error ("Failed to update dispute status");
      return false;
    }

  },;
  const resolveDispute = async (;
    disputeId: string,;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    resolution: { summary: string, resolution_type: string }
  ): Promise < boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({
          status: 'resolved';
          resolved_at: new Date().toISOString();
          resolution_summary: resolution.summary
          resolution_type: resolution.resolution_type
        })
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state
      setDisputes(prevDisputes =>
        prevDisputes.map(dispute =>
          dispute.id === disputeId
            ? {
                ...dispute
                status: 'resolved'
                resolved_at: new Date().toISOString();
                resolution_summary: resolution.summary
          status: 'resolved',
          resolved_at: new Date().toISOString(),
          resolution_summary: resolution.summary,
          resolution_type: resolution.resolution_type
        })
        .eq("id", disputeId),
      
      if (error) throw error,
      
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
      toast.success("Dispute resolved successfully");
      ),
      
      toast.success("Dispute resolved successfully"),
      return true
    } catch (err: any) {
      console && console.error("Error resolving dispute:", err);
      toast && toast.error("Failed to resolve dispute");
      return false
    }
  }
  },

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
    try {
      const { data, error } = await supabase
        .from("dispute_messages")
        .select(`
          *,
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url)
        `)
        .eq("dispute_id", disputeId)
        .order("created_at", { ascending: true });
      if (error) throw error;
        .order("created_at", { ascending: true }),
      
      if (error) throw error,
      
      return data as DisputeMessage[]
    } catch (err: any) {
      console && console.error("Error fetching dispute messages:", err);
      toast && toast.error("Failed to fetch messages");
      return []
    }
  }
  },

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast && toast.error("You must be logged in to send a message");
      return false
    }
    try {
      const { error } = await supabase
        .from("dispute_messages")
        .insert({
          dispute_id: disputeId;
          user_id: user.id;
          message
          is_admin_note: isAdminNote
        });
      if (error) throw error;
      toast.success("Message sent successfully");
          dispute_id: disputeId,
          user_id: user.id,
          message,
          is_admin_note: isAdminNote
        }),
      
      if (error) throw error,
      
      toast.success("Message sent successfully"),
      return true
    } catch (err: any) {
      console && console.error("Error sending message:", err);
      toast && toast.error("Failed to send message");
      return false
    }
  }
;
  // Fetch disputes when component mounts or user changes;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      fetch_disputes ();
    }
  }, [user]);
;

  return {
    disputes;
    is_loading;
    error;
    refetch: fetch_disputes;
    getDisputeById;
    create_dispute;
    updateDisputeStatus;

    resolve_dispute;
    getDisputeMessages,
    addDisputeMessage;

=======


=======
  ): Promise<boolean> => {;
    try {;
      const { error } = await supabase;
        .from("disputes");
        .update({;
          status: 'resolved',;
          resolved_at: new Date().toISOString(),;
          resolution_summary: resolution.summary,;
          resolution_type: resolution.resolution_type;
        });
        .eq("id", disputeId),;
      if (error) throw error,;
      // Update local state;
      setDisputes(prevDisputes =>;
        prevDisputes.map(dispute =>;
          dispute.id === disputeId;
            ? {;
                ...dispute,;
                status: 'resolved',;
                resolved_at: new Date().toISOString(),;
                resolution_summary: resolution.summary,;
                resolution_type: resolution.resolution_type as any;
              } ;
            : dispute;
        );
      ),;
      toast.success("Dispute resolved successfully"),;
      return true;
    } catch (err: any) {;
      console.error("Error resolving dispute:", err),;
      toast.error("Failed to resolve dispute"),;
      return false;
    }
  },;
  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {;
    try {;
      const { data, error } = await supabase;
        .from("dispute_messages");
        .select(`;
          *,;
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url);
        `);
        .eq("dispute_id", disputeId);
        .order("created_at", { ascending: true }),;
      if (error) throw error,;
      return data as DisputeMessage[];
    } catch (err: any) {;
      console.error("Error fetching dispute messages:", err),;
      toast.error("Failed to fetch messages"),;
      return [];
    }
  },;
  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {;
    if (!user) {;
      toast.error("You must be logged in to send a message"),;
      return false;
    }
;
    try {;
      const { error } = await supabase;
        .from("dispute_messages");
        .insert({;
          dispute_id: disputeId,;
          user_id: user.id,;
          message,;
          is_admin_note: isAdminNote;
        }),;
      if (error) throw error,;
      toast.success("Message sent successfully"),;
      return true;
    } catch (err: any) {;
      console.error("Error sending message:", err),;
      toast.error("Failed to send message"),;
      return false;
    }
  },;
  // Fetch disputes when component mounts or user changes;
  useEffect(() => {;
    if (user) {;
      fetchDisputes();
    }
  }, [user]),;
  return {;
    disputes,;
    isLoading,;
    error,;
    refetch: fetchDisputes,;
    getDisputeById,;
    createDispute,;
    updateDisputeStatus,;
    resolveDispute;
    getDisputeMessages;
    addDisputeMessage;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
;
