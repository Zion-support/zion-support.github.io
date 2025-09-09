
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes";
import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';

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
        .from("disputes")
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
        .order("created_at", { ascending: false });
      
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
      setError(null);,
} catch(err: unknown) {};
} finally {};
}
  }, [user]); // user is a dependency of fetchDisputes;

  const getDisputeById = async(disputeId: string): Promise<Dispute | null> => {};
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
        .single();

      if(error) throw error;
      ;
      return {};
}
      } as Dispute;,
} catch(err: unknown) {};
}
  };

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
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single();

      if(error) throw error;

      toast.success("Dispute submitted successfully");
      fetchDisputes(); // Refresh the list
      
      return data as Dispute;
    } catch (err: any) {
      logErrorToProduction('Error creating dispute:', { data: err });
      toast.error("Failed to submit dispute");
      return null;
    }
  };
;
  const updateDisputeStatus = async(disputeId: string, status: DisputeStatus): Promise<boolean> => {};
      const { error } = await supabase;
        .from("disputes");
        .update({ status });
        .eq("id", disputeId);

      if(error) throw error;

      setDisputes(prevDisputes => ;
        prevDisputes.map(dispute => ;
          dispute.id === disputeId ? { ...dispute, status } : dispute;
        );
      );

      toast.success(`Dispute status updated to ${status}`);
      return true;,
} catch(err: unknown) {};
}
  };
;
  const resolveDispute = async(disputeId: string, ;
    resolution: { summary: string; resolution_type: string; }
  ): Promise<boolean> => {};
      const { error } = await supabase;
        .from("disputes");
        .update({};
});
        .eq("id", disputeId);

      if(error) throw error;

      setDisputes(prevDisputes => ;
        prevDisputes.map(dispute => ;
          dispute.id === disputeId ;
            ? {};
} ;
            : dispute;
        );
      );

      toast.success("Dispute resolved successfully");
      return true;,
} catch(err: unknown) {};
}
  };
;
  const getDisputeMessages = async(disputeId: string): Promise<DisputeMessage[]> => {};
      const { data, error } = await supabase;
        .from("dispute_messages");
        .select(`;
          *,;
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url);
        `);
        .eq("dispute_id", disputeId);
        .order("created_at", { ascending: true });

      if(error) throw error;
      ;
      return data as DisputeMessage[];,
} catch(err: unknown) {};
}
  };
;
  const addDisputeMessage = async(disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {};
}
;
    try {};
      const { error } = await supabase;
        .from("dispute_messages");
        .insert({};
});
      ;
      if(error) throw error;

      toast.success("Message sent successfully");
      return true;,
} catch(err: unknown) {};
}
  };
;
  useEffect(() => {};
}, []);
    if(user) {};
} else {};
}
  }, [user, fetchDisputes]); // Added fetchDisputes;

  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({ status })
        .eq("id", disputeId);
      
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
      logErrorToProduction('Error updating dispute status:', { data: err });
      toast.error("Failed to update dispute status");
      return false;
    }
  };

  const resolveDispute = async (
    disputeId: string, 
    resolution: { summary: string; resolution_type: string; }
  ): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({
          status: 'resolved',
          resolved_at: new Date().toISOString(),
          resolution_summary: resolution.summary,
          resolution_type: resolution.resolution_type
        })
        .eq("id", disputeId);
      
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
      
      toast.success("Dispute resolved successfully");
      return true;
    } catch (err: any) {
      logErrorToProduction('Error resolving dispute:', { data: err });
      toast.error("Failed to resolve dispute");
      return false;
    }
  };

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
      
      return data as DisputeMessage[];
    } catch (err: any) {
      logErrorToProduction('Error fetching dispute messages:', { data: err });
      toast.error("Failed to fetch messages");
      return [];
    }
  };

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast.error("You must be logged in to send a message");
      return false;
    }

    try {
      const { error } = await supabase
        .from("dispute_messages")
        .insert({
          dispute_id: disputeId,
          user_id: user.id,
          message,
          is_admin_note: isAdminNote
        });
      
      if (error) throw error;
      
      toast.success("Message sent successfully");
      return true;
    } catch (err: any) {
      logErrorToProduction('Error sending message:', { data: err });
      toast.error("Failed to send message");
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
