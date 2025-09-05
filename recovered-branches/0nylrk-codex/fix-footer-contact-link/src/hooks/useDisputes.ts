
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes",
import { toast } from "sonner",export function useDisputes() {
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

export function useDisputes() {const { user} = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDisputes = async () => {if (!user) {
      setIsLoading(false);
      return}

    try {setIsLoading(true);
      
      const { data, error: fetchError} = await supabase
        .from("disputes")
        .select(`
          *,
          project: projects(
            scopesummary,
            jobid,
            clientid,
            talentid,
            job:jobs(title)
          ),
          clientprofile:projects!projectsclient_id_fkey(clientprofile:profiles!projectsclient_id_fkey(displayname, avatarurl)),
          talentprofile:projects!projectstalent_id_fkey(talentprofile:profiles!projectstalent_id_fkey(displayname, avatarurl))
        `)
        .order("createdat", { ascending: false }),        .order("createdat", {ascending: false});
      
      if (fetchError) throw fetchError,
      
      // Transform data if needed,
const transformedData = data.map((dispute: any) => ({
        ...dispute,
        clientprofile: dispute.clientprofile?.clientprofile,
        talentprofile: dispute.talentprofile?.talentprofile,
        project: {
          ...dispute.project,
          title: dispute.project?.job?.title || 'Untitled Project'
        }
      })),
      
      setDisputes(transformedData as Dispute[]),
      setError(null)
    } catch (err: any) {
      console.error("Error fetching disputes:", err),
      setError("Failed to fetch disputes: " + err.message),
      toast.error("Failed to fetch disputes")    } finally {
      setIsLoading(false)
    }
  },

  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {
    try {
      const { data, error } = await supabase
        .from(&quot;disputes&quot;)
      const transformedData = data.map(_(dispute: unknown) => ({_...dispute, client_profile: dispute.clientprofile?.clientprofile, talent_profile: dispute.talentprofile?.talentprofile, project: {
          ...dispute.project, title: dispute.project?.job?.title || 'Untitled Project'}
      }));
      
      setDisputes(transformedData as Dispute[]);
      setError(null)
    } catch (err: unknown) {setError("Failed to fetch disputes: " + err.message);
      toast.error("Failed to fetch disputes")} finally {setIsLoading(false)}
  };

  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {try {
      const { data, error} = await supabase
        .from("disputes")
        .select(`
          *,
          project: projects(
            scopesummary,
            jobid,
            clientid,
            talentid,
            job:jobs(title)
          ),
          clientprofile:projects!projectsclient_id_fkey(clientprofile:profiles!projectsclient_id_fkey(displayname, avatarurl)),
          talentprofile:projects!projectstalent_id_fkey(talentprofile:profiles!projectstalent_id_fkey(displayname, avatarurl))
        `)
        .eq("id", disputeId)
        .single(),      
      if (error) throw error,
      
      return {
        ...data,
        clientprofile: data.clientprofile?.clientprofile,
        talentprofile: data.talentprofile?.talentprofile,
        project: {
          ...data.project,
          title: data.project?.job?.title || 'Untitled Project'
        }
      } as Dispute
    } catch (err: any) {
      console.error("Error fetching dispute:", err),
      toast.error("Failed to fetch dispute details"),
      return null    }
  },

  const createDispute = async (disputeData: { 
    projectid: string,
    milestoneid?: string,
    reasoncode: string,
    description: string
  }): Promise<Dispute | null> => {
    if (!user) {
      toast.error("You must be logged in to create a dispute"),
      return null    }

    try {
      const { data, error } = await supabase
        .from(&quot;disputes&quot;)
        .insert({
          ...disputeData,
          raisedby: user.id
        })
      return {_...data, client_profile: data.clientprofile?.clientprofile, talent_profile: data.talentprofile?.talentprofile, project: {
          ...data.project, title: data.project?.job?.title || 'Untitled Project'}
      } as Dispute
    } catch (err: unknown) {toast.error("Failed to fetch dispute details");
      return null}
  };

  const createDispute = async (disputeData: {project_id: string,
    milestoneid?: string;
    reasoncode: string,
    description: string}): Promise<Dispute | null> => {if (!user) {
      toast.error("You must be logged in to create a dispute");
      return null}

    try {const { data, error} = await supabase
        .from("disputes")
        .insert({_...disputeData, raised_by: user.id})
        .select()
        .single(),

      if (error) throw error,
      
      toast.success("Dispute submitted successfully"),
      fetchDisputes(), // Refresh the list,
return data as Dispute
    } catch (err: any) {
      console.error("Error creating dispute:", err),
      toast.error("Failed to submit dispute"),
      return null    }
  },

  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from(&quot;disputes&quot;)
        .update({ status })
        .eq("id", disputeId),      return data as Dispute
    } catch (err: unknown) {toast.error("Failed to submit dispute");
      return null}
  };

  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {try {
      const { error} = await supabase
        .from("disputes")
        .update({status})
        .eq("id", disputeId);
      
      if (error) throw error,
      
      // Update local state,
setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId ? {_...dispute, status} : dispute
        )
      ),
      
      toast.success(`Dispute status updated to ${status}`),
      return true
    } catch (err: any) {
      console.error("Error updating dispute status:", err),
      toast.error("Failed to update dispute status"),
      return false    }
  },
      toast.success(`Dispute status updated to ${status}`);
      return true
    } catch (err: unknown) {toast.error("Failed to update dispute status");
      return false}
  };

  const resolveDispute = async (
    disputeId: string, 
    resolution: { summary: string, resolutiontype: string }
  ): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from(&quot;disputes&quot;)
        .update({
          status: 'resolved',
          resolvedat: new Date().toISOString(),
          resolutionsummary: resolution.summary,
          resolutiontype: resolution.resolutiontype
        })
        .eq("id", disputeId),    resolution: {summary: string, resolutiontype: string}
  ): Promise<boolean> => {try {
      const { error} = await supabase
        .from("disputes")
        .update({status: 'resolved', resolved_at: new Date().toISOString(), resolution_summary: resolution.summary, resolution_type: resolution.resolutiontype})
        .eq("id", disputeId);
      
      if (error) throw error,
      
      // Update local state,
setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId 
            ? {_...dispute, status: 'resolved', resolved_at: new Date().toISOString(), resolution_summary: resolution.summary, resolution_type: resolution.resolutiontype as any} 
            : dispute
        )
      ),
      
      toast.success("Dispute resolved successfully"),
      return true
    } catch (err: any) {
      console.error("Error resolving dispute:", err),
      toast.error("Failed to resolve dispute"),
      return false    }
  },

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
    try {
      const { data, error } = await supabase
        .from(&quot;disputemessages&quot;)
    } catch (err: unknown) {toast.error("Failed to resolve dispute");
      return false}
  };

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {try {
      const { data, error} = await supabase
        .from("disputemessages")
        .select(`
          *,
          userprofile:profiles!disputemessages_user_id_fkey(displayname, avatarurl)
        `)
        .eq("disputeid", disputeId)
        .order("createdat", { ascending: true }),        .order("createdat", {ascending: true});
      
      if (error) throw error,
      
      return data as DisputeMessage[]
    } catch (err: any) {
      console.error("Error fetching dispute messages:", err),
      toast.error("Failed to fetch messages"),
      return []    }
  },

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast.error("You must be logged in to send a message"),
      return false    }

    try {
      const { error } = await supabase
        .from(&quot;disputemessages&quot;)
        .insert({
          disputeid: disputeId,
          userid: user.id,
          message,
          isadmin_note: isAdminNote
        }),
      return data as DisputeMessage[]
    } catch (err: unknown) {toast.error("Failed to fetch messages");
      return []}
  };

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {if (!user) {
      toast.error("You must be logged in to send a message");
      return false}

    try {const { error} = await supabase
        .from("disputemessages")
        .insert({dispute_id: disputeId, user_id: user.id, message, is_admin_note: isAdminNote});
      
      if (error) throw error,
      
      toast.success("Message sent successfully"),
      return true
    } catch (err: any) {
      console.error("Error sending message:", err),
      toast.error("Failed to send message"),
      return false    }
  },

  // Fetch disputes when component mounts or user changes,
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
    } catch (err: unknown) {toast.error("Failed to send message");
      return false}
  };

  // Fetch disputes when component mounts or user changes,
useEffect_(() => {if (user) {
      fetchDisputes()}
  }, [user]);

  return {disputes, isLoading, error, refetch: fetchDisputes, getDisputeById, createDispute, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage}
}
