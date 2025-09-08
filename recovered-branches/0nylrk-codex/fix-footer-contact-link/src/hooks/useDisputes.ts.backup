
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const [error, setError] = useState<string | null>(null);
  const fetchDisputes = async () => {
    if (!user) {


<<<<<<< HEAD
=======
      setIsLoading(false);
      return
    }
    try {

import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { use_auth } from '@/hooks / use_auth';
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from '@/types / disputes';
import { toast } from './sonner';
export /**
 * use_disputes - Function description
 */
function use_disputes() {
  const { user } = use_auth ();
  const [disputes, set_disputes] = useState < Dispute[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  const fetch_disputes = async () => {
    // Check condition
if ( {) {
  $2
}
      setIsLoading (false);
      return;
    }
    try {
      setIsLoading (true);
;
      const { data, error: fetch_error } = await supabase;
        .from ("disputes");
        .select (`;

>>>>>>> origin/cursor/delete-old-data-records-6bba
          *;
          project: projects (
            scope_summary;
            job_id;
            client_id;
            talent_id;
<<<<<<< HEAD

      setIsLoading(false),
      return
    }
    try {
      setIsLoading(true);
      setIsLoading(true),
      
=======


      setIsLoading(true),
>>>>>>> origin/cursor/delete-old-data-records-6bba

      const { data, error: fetchError } = await supabase

        .from("disputes")
        .select(`
          *,
          project:projects(
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            scope_summary,
            job_id,
            client_id,
            talent_id,
<<<<<<< HEAD

            job:jobs(title)


=======
            job:jobs(title)

          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))

        `)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
<<<<<<< HEAD

        .order("created_at", { ascending: false }),
      
      if (fetchError) throw fetchError,
=======
        .order("created_at", { ascending: false }),
      
      if (fetchError) throw fetchError,

      // Transform data if needed
      const transformedData = data && data.map((dispute: any) => ({
            job:jobs (title)),
          client_profile:projects ! projects_client_id_fkey (client_profile:profiles ! projects_client_id_fkey (display_name, avatar_url));
          talent_profile:projects ! projects_talent_id_fkey (talent_profile:profiles ! projects_talent_id_fkey (display_name, avatar_url));
        `);
        .order ("created_at", { ascending: false });
;
      // Check condition
if (throw fetch_error) {
  $2
}
      // Transform data if needed;
      const transformed_data = data.map ((dispute: any) => ({
        ...dispute;
        client_profile: dispute && dispute.client_profile?.client_profile;
        talent_profile: dispute && dispute.talent_profile?.talent_profile;
        project: {

          ...dispute && dispute.project,
          title: dispute && dispute.project?.job?.title || 'Untitled Project'

        }

      console && console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err && err.message),
      toast && toast.error("Failed to fetch disputes")

    } finally {

      setIsLoading (false);
    }
  }


            job: jobs(title)
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .order($2);
      if (fetchError) throw fetchError,
      
      // Transform data if needed
      const transformedData = $2;
        client_profile: dispute.client_profile?.client_profile,
        talent_profile: dispute.talent_profile?.talent_profile,
        project: {
          ...dispute.project
          title: dispute.project?.job?.title |'Untitled Project'
        }
      })),
      
      setDisputes($2);
      setError(null)
    } catch (err: any) {
      console.error($2);
      setError($2);
      toast.error("Failed to fetch disputes")
    } finally {
      setIsLoading(false)
    }
  },

  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {
    try {
      const { data, error } = await supabase
        .from("disputes")
        .select(`
          *,
          project: projects(
            scope_summary,
            job_id,
            client_id,
            talent_id,

            job: jobs(title)
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single($2);
      if (error) throw error,
      
      return {
        ...data,
        client_profile: data.client_profile?.client_profile,
        talent_profile: data.talent_profile?.talent_profile,
        project: {
          ...data.project
          title: data.project?.job?.title |'Untitled Project'
        }
      } as Dispute
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return null
    }
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba

            job:jobs (title)),
          client_profile:projects ! projects_client_id_fkey (client_profile:profiles ! projects_client_id_fkey (display_name, avatar_url));
          talent_profile:projects ! projects_talent_id_fkey (talent_profile:profiles ! projects_talent_id_fkey (display_name, avatar_url));
        `);
        .order ("created_at", { ascending: false });
;
      // Check condition
if (throw fetch_error) {
  $2
}
      // Transform data if needed;
      const transformed_data = data.map ((dispute: any) => ({
        ...dispute;
        client_profile: dispute && dispute.client_profile?.client_profile;
        talent_profile: dispute && dispute.talent_profile?.talent_profile;
        project: {
          ...dispute && dispute.project,
          title: dispute && dispute.project?.job?.title || 'Untitled Project'
        }

<<<<<<< HEAD
;

      // Transform data if needed
      const transformedData = data.map((dispute: any) => ({

        ...dispute,
        client_profile: dispute.client_profile?.client_profile,
        talent_profile: dispute.talent_profile?.talent_profile,
        project: {}
          ...dispute.project'
          title: dispute.project?.job?.title |'Untitled Project'


        }

        client_profile: dispute && dispute.client_profile?.client_profile;
        talent_profile: dispute && dispute.talent_profile?.talent_profile;
        project: {

          ...dispute && dispute.project,
          title: dispute && dispute.project?.job?.title || 'Untitled Project'

        }

      console && console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err && err.message),
      toast && toast.error("Failed to fetch disputes")

      }));
      setDisputes(transformedData as Dispute[]);
      setError(null)


    } finally {
      setIsLoading (false);
    }
  }


=======
      console && console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err && err.message),
      toast && toast.error("Failed to fetch disputes")

    } finally {

      setIsLoading (false);
    }
  }


    try {

      const { data, error } = await supabase;
        .from ("disputes");

        .select (`;
          *;
          project: projects (
>>>>>>> origin/cursor/delete-old-data-records-6bba
            scope_summary;
            job_id;
            client_id;
            talent_id;
            job:jobs (title)),
          client_profile:projects ! projects_client_id_fkey (client_profile:profiles ! projects_client_id_fkey (display_name, avatar_url));
          talent_profile:projects ! projects_talent_id_fkey (talent_profile:profiles ! projects_talent_id_fkey (display_name, avatar_url));`
        `);"
        .eq ("id", dispute_id);
        .single ();
;
      // Check condition;
if (throw error) {}
  $2;
}


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      })),
      
      setDisputes(transformedData as Dispute[]),
      setError(null)

<<<<<<< HEAD
    } catch (err: any) {"
      console.error("Error fetching disputes:", err),"
      setError("Failed to fetch disputes: " + err.message),

=======
      toast.error("Failed to fetch disputes")
    } finally {}

      setIsLoading(false)
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

  },


<<<<<<< HEAD


  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {
    try {

      const { data, error } = await supabase
        .from("disputes")

        .select(`
          *,
          project:projects(

=======
  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {
    try {

>>>>>>> origin/cursor/delete-old-data-records-6bba
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job:jobs(title)
<<<<<<< HEAD



=======
          )
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url));
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single();
      if (error) throw error;
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
>>>>>>> origin/cursor/delete-old-data-records-6bba
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single();
      if (error) throw error;

          ),

<<<<<<< HEAD
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))`
        `)"
        .eq("id", disputeId)

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .single(),
      
      if (error) throw error,

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      return {
        ...data;
        client_profile: data && data.client_profile?.client_profile;
        talent_profile: data && data.talent_profile?.talent_profile;
        project: {
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        }
      } as Dispute
    } catch (err: any) {

          ...data && data.project,
          title: data && data.project?.job?.title || 'Untitled Project'

<<<<<<< HEAD


=======

          ...data.project,
          title: data.project?.job?.title || 'Untitled Project';
        }
      } as Dispute;
    } catch (err: any) {


        }
      } as Dispute;
    } catch (err: any) {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  const createDispute = async (disputeData: {}
    project_id: string,
    milestone_id?: string,
    reason_code: string,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    description: string;
  }): Promise<Dispute | null> => {}
    if (!user) {"
      toast && toast.error("You must be logged in to create a dispute");

      return null
    }
    try {
      const { data, error } = await supabase
        .from("disputes")
        .insert({
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      return null;
    }
    try {}
      const { data, error } = await supabase"
        .from("disputes")
        .insert({}
      "
      toast && toast.success("Dispute submitted successfully");

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .single();
      if (error) throw error;
      toast.success("Dispute submitted successfully");

<<<<<<< HEAD
=======
          ...disputeData,
          raised_by: user.id
        })
        .select()

>>>>>>> origin/cursor/delete-old-data-records-6bba
      fetchDisputes(), // Refresh the list
      return data as Dispute
    } catch (err: any) {
      console && console.error("Error creating dispute:", err);
      toast && toast.error("Failed to submit dispute");
      return null

  },

  }
  },

<<<<<<< HEAD



=======
      fetchDisputes(), // Refresh the list
      return data as Dispute
    } catch (err: any) {
      console.error("Error creating dispute:", err),
      toast.error("Failed to submit dispute"),
      return null
    }
  }
  },

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({ status })
<<<<<<< HEAD



=======
        .eq($2);
      if (error) throw error,
      
        .eq("id", disputeId),
      
      if (error) throw error,
      
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state
        .eq("id", disputeId),
      
      if (error) throw error,

>>>>>>> origin/cursor/delete-old-data-records-6bba
      setDisputes(prevDisputes => 
        prevDisputes && prevDisputes.map(dispute => 
          dispute && dispute.id === disputeId ? { ...dispute, status } : dispute;
        )

<<<<<<< HEAD
      );
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      toast && toast.success(`Dispute status updated to ${status}`);

      ),

      return true

    } catch (err: any) {
      console && console.error("Error updating dispute status:", err);
      toast && toast.error("Failed to update dispute status");
      return false

<<<<<<< HEAD
    }
  }
  const resolveDispute = async (
    disputeId: string

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.error ("Error fetching dispute:", err);
      toast.error ("Failed to fetch dispute details");

    disputeId: string, 


<<<<<<< HEAD

=======
      return true
    } catch (err: any) {
      console.error("Error updating dispute status:", err),
      toast.error("Failed to update dispute status"),
      return false
    }
  }
  const resolveDispute = async (
    disputeId: string
    disputeId: string, 


>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes",;

import { toast } from "sonner",;
export function useDisputes() { return null; }

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

        .order("created_at", { ascending: false }),;
      if (fetchError) throw fetchError,;
      // Transform data if needed;
      const transformedData = data.map((dispute: any) => ({;
        ...dispute,;
        client_profile: dispute.client_profile?.client_profile,;
        talent_profile: dispute.talent_profile?.talent_profile,;
        project: {;

          title: dispute.project?.job?.title || 'Untitled Project';
        }
      })),;
      setDisputes(transformedData as Dispute[]),;
      setError(null);

      toast.error("Failed to fetch disputes");
    } finally {;
      setIsLoading(false);
    }
  },;
  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {;
    try {;

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

        .eq("id", disputeId);
        .single(),;
      if (error) throw error,;
      return {;
        ...data,;
        client_profile: data.client_profile?.client_profile,;
        talent_profile: data.talent_profile?.talent_profile,;
        project: {;

      toast.error("Failed to fetch dispute details"),;


<<<<<<< HEAD
      return null;
    }
  }
;

    project_id: string;
    milestone_id?: string;
    reason_code: string,
    description: string;

          ...dispute_data;
          raised_by: user.id;
        });
        .select ();
        .single ();
;

      toast.error ("Failed to submit dispute");
      return null;
    }
  }
;

}
      // Update local state;
      set_disputes (prev_disputes =>;
        prev_disputes.map (dispute =>;
          dispute.id === dispute_id ? { ...dispute, status } : dispute));

      toast.error ("Failed to update dispute status");
      return false;
    }

    resolution: { summary: string, resolution_type: string }
  ): Promise < boolean> => {}
    try {}
          resolution_summary: resolution && resolution.summary,

    resolution: { summary: string, resolution_type: string }
  ): Promise < boolean> => {

=======
    resolution: { summary: string, resolution_type: string }
  ): Promise < boolean> => {
    try {

          resolution_summary: resolution && resolution.summary,
          resolution_type: resolution && resolution.resolution_type

  }
;
  const resolve_dispute = async (
    dispute_id: string,
    resolution: { summary: string, resolution_type: string }
  ): Promise < boolean> => {
    try {
      const { error } = await supabase;
        .from ("disputes");
        .update ({
          status: 'resolved';
          resolution_summary: resolution && resolution.summary,
          resolution_type: resolution && resolution.resolution_type
      return null;
    }
  },;
  const createDispute = async (disputeData: {;
    project_id: string,;
    milestone_id?: string,;
    reason_code: string,;
    description: string;
  }): Promise<Dispute | null> => {;
    if (!user) {;
      toast.error("You must be logged in to create a dispute"),;
      return null;
    }
;
    try {;
      const { data, error } = await supabase;
        .from("disputes");
        .insert({;
          ...disputeData,;
          raised_by: user.id;
        });
        .select();
        .single(),;
      if (error) throw error,;
      toast.success("Dispute submitted successfully"),;
      fetchDisputes(), // Refresh the list;
      return data as Dispute;
    } catch (err: any) {;
      console.error("Error creating dispute:", err),;
      toast.error("Failed to submit dispute"),;
      return null;
    }
  },;
  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {;
    try {;
      const { error } = await supabase;
        .from("disputes");
        .update({ status });
        .eq("id", disputeId),;
      if (error) throw error,;
      // Update local state;
      setDisputes(prevDisputes =>;
        prevDisputes.map(dispute =>;
          dispute.id === disputeId ? { ...dispute, status } : dispute;
        );
      ),;
      toast.success(`Dispute status updated to ${status}`),;
      return true;
    } catch (err: any) {;
      console.error("Error updating dispute status:", err),;
      toast.error("Failed to update dispute status"),;
      return false;
    }
  },;
  const resolveDispute = async (;
    disputeId: string,;
    resolution: { summary: string, resolution_type: string }
  ): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({
          status: 'resolved';
          resolved_at: new Date().toISOString();
          resolution_summary: resolution.summary
          resolution_type: resolution.resolution_type
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {
      const { error } = await supabase
        .from("disputes")
        .update({
<<<<<<< HEAD

          status: 'resolved';
          resolved_at: new Date().toISOString();
          resolution_summary: resolution.summary
          resolution_type: resolution.resolution_type

  }

;
  const resolve_dispute = async (
    dispute_id: string,
    resolution: { summary: string, resolution_type: string }
  ): Promise < boolean> => {}
    try {}
      const { error } = await supabase;"
        .from ("disputes");
        .update ({'
          status: 'resolved';


=======
          status: 'resolved',
          resolved_at: new Date().toISOString($2);
          resolution_summary: resolution.summary,
          resolution_type: resolution.resolution_type
        })
        .eq($2);
      if (error) throw error,
      
      // Update local state
      setDisputes(prevDisputes = $2;
                status: 'resolved', 
                resolved_at: new Date().toISOString($2);
                resolution_summary: resolution.summary,
                resolution_type: resolution.resolution_type as any
              }
            : dispute
        )
      ),
      
      toast.success($2);
      return true
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return false
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
        })
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state
<<<<<<< HEAD


      const { error } = await supabase
        .from("disputes")
        .update({


=======
      setDisputes(prevDisputes =>
        prevDisputes.map(dispute =>
          dispute.id === disputeId
            ? {
                ...dispute
                status: 'resolved'
                resolved_at: new Date().toISOString();
                resolution_summary: resolution.summary
>>>>>>> origin/cursor/delete-old-data-records-6bba
          status: 'resolved',
          resolved_at: new Date().toISOString(),
          resolution_summary: resolution.summary,
          resolution_type: resolution.resolution_type;
        })"
        .eq("id", disputeId),
      
      if (error) throw error,
      
      // Update local state;
      setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId;
            ? {}
                ...dispute, '
                status: 'resolved', 
                resolved_at: new Date().toISOString(),
                resolution_summary: resolution.summary,
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                resolution_type: resolution.resolution_type as any

              }
            : dispute;
        )
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setDisputes(prevDisputes => 
        prevDisputes && prevDisputes.map(dispute => 
          dispute && dispute.id === disputeId;
            ? {}
                ...dispute, '
                status: 'resolved', 
                resolved_at: new Date().toISOString();
                resolution_summary: resolution && resolution.summary,
                resolution_type: resolution && resolution.resolution_type as any;
              } 
            : dispute;
        )
      );

<<<<<<< HEAD

=======
      "
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast && toast.success("Dispute resolved successfully");

      ),
      "
      toast.success("Dispute resolved successfully"),

      return true

    } catch (err: any) {
      console && console.error("Error resolving dispute:", err);
      toast && toast.error("Failed to resolve dispute");
      return false
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
      );
      toast.success("Dispute resolved successfully");
      ),
      
      toast.success("Dispute resolved successfully"),
      return true
    } catch (err: any) {
      console.error("Error resolving dispute:", err),
      toast.error("Failed to resolve dispute"),
      return false
    }
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
    try {

=======
        .order($2);
      if (error) throw error,
      
      return data as DisputeMessage[]
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return []
    }
  },

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast.error($2);
      return false
    }
    try {
      const { error } = await supabase
        .from("dispute_messages")
        .insert($2);
      if (error) throw error,
      
      toast.success($2);

  },

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {

    try {
      const { data, error } = await supabase;

    }
        .order("created_at", { ascending: true }),
      
      if (error) throw error,


      return data as DisputeMessage[]
    } catch (err: any) {"
      console && console.error("Error fetching dispute messages:", err);"
      toast && toast.error("Failed to fetch messages");
      return []
    }

        .order("created_at", { ascending: true }),
      
      if (error) throw error,

      return data as DisputeMessage[]
    } catch (err: any) {
      console && console.error("Error fetching dispute messages:", err);
      toast && toast.error("Failed to fetch messages");
      return []
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!user) {
      toast && toast.error("You must be logged in to send a message");

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast.error("You must be logged in to send a message"),

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast && toast.error("You must be logged in to send a message");
<<<<<<< HEAD


      return false

    }

    try {}
      const { error } = await supabase"
        .from("dispute_messages")
=======
      return data as DisputeMessage[]
    } catch (err: any) {
      console.error("Error fetching dispute messages:", err),
      toast.error("Failed to fetch messages"),
      return []
    }
  }
  },

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast.error("You must be logged in to send a message"),
      return false

    }
    try {

>>>>>>> origin/cursor/delete-old-data-records-6bba

          user_profile:profiles ! dispute_messages_user_id_fkey (display_name, avatar_url);
        `);
        .eq ("dispute_id", dispute_id);

        .order ("created_at", { ascending: true });
;
      // Check condition;
if (throw error) {}
  $2;
}
      return data as DisputeMessage[];
    } catch (err: any) {"
      console.error ("Error fetching dispute messages:", err);"

      toast.error ("Failed to fetch messages");
      return [];
    }
  }
;

<<<<<<< HEAD
  const addDisputeMessage = async (dispute_id: string, message: string, isAdminNote = false): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      toast.error ("You must be logged in to send a message");
      return false;
    }
    try {
      const { error } = await supabase;
        .from ("dispute_messages");
        .insert ({
          dispute_id: dispute_id;
          user_id: user.id;
          message
          user_id: user && user.id;
          message,



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      return true
    } catch (err: any) {
      console && console.error("Error sending message:", err);
      toast && toast.error("Failed to send message");
      return false


<<<<<<< HEAD

=======
      return true;
    } catch (err: any) {"
      console && console.error("Error sending message:", err);"
      toast && toast.error("Failed to send message");
      return false;
    }

  }

}
;


  return {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    disputes;
    is_loading;
    error;
    refetch: fetch_disputes;
    getDisputeById;
    create_dispute;
    updateDisputeStatus;


<<<<<<< HEAD
    resolve_dispute;
    getDisputeMessages,
    addDisputeMessage;


=======
      return true
    } catch (err: any) {
      console.error("Error sending message:", err),
      toast.error("Failed to send message"),
      return false
    }
  }
  // Fetch disputes when component mounts or user changes
  useEffect(() => {
    if (user) {
      fetchDisputes()
    }
  }, [user]);
  return {
    disputes;
    isLoading;
    error;
    refetch: fetchDisputes;
    getDisputeById;
    createDispute;
    updateDisputeStatus;
    resolveDispute;
    getDisputeMessages

    addDisputeMessage
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ): Promise<boolean> => {;

    try {;
      const { error } = await supabase;"
        .from("disputes");
        .update({;'
          status: 'resolved',;
          resolved_at: new Date().toISOString(),;
          resolution_summary: resolution.summary,;
          resolution_type: resolution.resolution_type;
        });"
        .eq("id", disputeId),;
      if (error) throw error,;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Update local state;
      setDisputes(prevDisputes =>;
        prevDisputes.map(dispute =>;
          dispute.id === disputeId;

<<<<<<< HEAD
            ? {;
                ...dispute,;'
                status: 'resolved',;
                resolved_at: new Date().toISOString(),;
                resolution_summary: resolution.summary,;
                resolution_type: resolution.resolution_type as any;
              } ;
            : dispute;
        );
      ),;"
      toast.success("Dispute resolved successfully"),;
      return true;
    } catch (err: any) {;"
      console.error("Error resolving dispute:", err),;"
      toast.error("Failed to resolve dispute"),;
      return false;
    }
  },;
  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {;
    try {;
      const { data, error } = await supabase;"
        .from("dispute_messages");`
        .select(`;
          *,;
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url);`
        `);"
        .eq("dispute_id", disputeId);"
        .order("created_at", { ascending: true }),;
      if (error) throw error,;
      return data as DisputeMessage[];
    } catch (err: any) {;"
      console.error("Error fetching dispute messages:", err),;"
      toast.error("Failed to fetch messages"),;
      return [];
    }
  },;
  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {;
    if (!user) {;"
      toast.error("You must be logged in to send a message"),;
      return false;
    }
;
    try {;
      const { error } = await supabase;"
        .from("dispute_messages");
        .insert({;
          dispute_id: disputeId,;
          user_id: user.id,;
          message,;
          is_admin_note: isAdminNote;
        }),;
      if (error) throw error,;"
      toast.success("Message sent successfully"),;
      return true;
    } catch (err: any) {;"
      console.error("Error sending message:", err),;"
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
=======
      return false;
    }
  },
  // Fetch disputes when component mounts or user changes;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    resolveDispute;
    getDisputeMessages;
    addDisputeMessage;


  }
}
<<<<<<< HEAD
=======
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    resolve_dispute;
    getDisputeMessages,
    addDisputeMessage;
  }
  },;
;
  const resolveDispute = async (;
    disputeId:string, ;
    resolution:{ summary:string, resolution_type:string }
  ):Promise<boolean> => {;
    try {;
      const { error } = await supabase;
        .from("disputes");
        .update({;
          status:'resolved',;
          resolved_at:new Date().toISOString(),;
          resolution_summary:resolution.summary,;
          resolution_type:resolution.resolution_type;
        });
        .eq("id", disputeId),;
      ;
      if (error) throw error,;
      ;
      // Update local state;
      setDisputes(prevDisputes => ;
        prevDisputes.map(dispute => ;
          dispute.id === disputeId ;
            ? { ;
                ...dispute, ;
                status:'resolved', ;
                resolved_at:new Date().toISOString(),;
                resolution_summary:resolution.summary,;
                resolution_type:resolution.resolution_type as any;
              } dispute;
        );
      ),;
      ;
      toast.success("Dispute resolved successfully"),;
      return true,;
    } catch (err:any) {;
      console.error("Error resolving dispute:", err),;
      toast.error("Failed to resolve dispute"),;
      return false,;
    }
  },;
;
  const getDisputeMessages = async (disputeId:string):Promise<DisputeMessage[]> => {;
    try {;
      const { data, error } = await supabase;
        .from("dispute_messages");
        .select(`;
          *,;
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url);
        `);
        .eq("dispute_id", disputeId);
        .order("created_at", { ascending:true }),;
      ;
      if (error) throw error,;
      ;
      return data as DisputeMessage[],;
    } catch (err:any) {;
      console.error("Error fetching dispute messages:", err),;
      toast.error("Failed to fetch messages"),;
      return [],;
    }
  },;
;
  const addDisputeMessage = async (disputeId:string, message:string, isAdminNote = false):Promise<boolean> => {;
    if (!user) {;
      toast.error("You must be logged in to send a message"),;
      return false,;
    }
;
    try {;
      const { error } = await supabase;
        .from("dispute_messages");
        .insert({;
          dispute_id:disputeId,;
          user_id:user.id,;
          message,;
          is_admin_note:isAdminNote;
        }),;
      ;
      if (error) throw error,;
      ;
      toast.success("Message sent successfully"),;
      return true,;
    } catch (err:any) {;
      console.error("Error sending message:", err),;
      toast.error("Failed to send message"),;
      return false,;
    }
  },;
;
  // Fetch disputes when component mounts or user changes;
  useEffect(() => {;
    if (user) {;
      fetchDisputes(),;
    }
  }, [user]),;
;
  return {;
    disputes,;
    isLoading,;
    error,;
    refetch:fetchDisputes,;
    getDisputeById,;
    createDispute,;
    updateDisputeStatus,;
    resolveDispute,;
    getDisputeMessages,;
    addDisputeMessage;
  },; export function useDisputes () {
  const {
  user 
}= useAuth ();
const [disputes, setDisputes] = useState<Dispute[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
const fetchDisputes = async () => {
  if (!user) {
  setIsLoading (false);
return 
}try {
  setIsLoading (true);
const {
  data, error: fetchError 
}= await supabase .from ("disputes") project: projects (scope summary;
job id;
client id;
talent id;
job:jobs (title) );
client profile:projects!projects client id fkey (client profile:profiles!projects client id fkey (display name, avatar url) );
talent profile:projects!projects talent id fkey (talent profile:profiles!projects talent id fkey (display name, avatar url) ) `) //Transform data if needed 
}finally {
  setIsLoading (false) 
}
};
const getDisputeById = async (disputeId: string) : Promise<Dispute | null> => {
  try {
  const {
  data, error 
}= await supabase .from ("disputes") project: projects (scope summary;
job id;
client id;
talent id;
job:jobs (title) );
client profile:projects!projects client id fkey (client profile:profiles!projects client id fkey (display name, avatar url) );
talent profile:projects!projects talent id fkey (talent profile:profiles!projects talent id fkey (display name, avatar url) ) `) if (error) throw error;
}
};
const createDispute = async (disputeData: {
  project id: string;
milestone id?: string;
reason code: string;
description: string 
}) : Promise<Dispute | null> => {
  if (!user) {
  
}try {
  const {
  data, error 
}= await supabase .from ("disputes") .insert ({
  ...disputeData;
raised by: user.id 
}) if (error) throw error;
}
};
const updateDisputeStatus = async (disputeId: string, status: DisputeStatus) : Promise<boolean> => {
  try {
  const {
  error 
}= await supabase .from ("disputes") .update ({
  status 
}) //Update local state setDisputes (prevDisputes => prevDisputes.map (dispute => dispute.id === disputeId ? {
  ...dispute, status 
}: dispute) );
}
};
//Update local state setDisputes (prevDisputes => prevDisputes.map (dispute => dispute.id === disputeId ? {
  ...dispute, status: 'resolved', resolved at: new Date () .toISOString (), resolution summary: resolution.summary, resolution type: resolution.resolution type as any 
}: dispute) );
}
};
const getDisputeMessages = async (disputeId: string) : Promise<DisputeMessage[]> => {
  try {
  const {
  data, error 
}= await supabase .from ("dispute messages") user profile:profiles!dispute messages user id fkey (display name, avatar url) `) 
}
};
const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false) : Promise<boolean> => {
  if (!user) {
  
}try {
  const {
  error 
}= await supabase .from ("dispute messages") .insert ({
  dispute id: disputeId;
user id: user.id;
message;
is admin note: isAdminNote 
});
}
};
// Fetch disputes when component mounts or user changes useEffect ( () => {
  if (user) {
  fetchDisputes () 
}
}, [user]);
return {
  disputes;
isLoading;
error;
refetch: fetchDisputes;
getDisputeById;
createDispute;
updateDisputeStatus;
resolveDispute;
getDisputeMessages;
addDisputeMessage 
}
}
  }
}
<<<<<<< HEAD

  }
}



=======
  }
}  }
}  }
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
