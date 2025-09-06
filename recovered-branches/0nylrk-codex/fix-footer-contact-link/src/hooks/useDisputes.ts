
<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {Dispute, DisputeMessage, DisputeAttachment, DisputeStatus} from "@/types/disputes";
import {toast} from "sonner";
export function useDisputes() {;
  const { user } = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes";
=======
import { useState, useEffect } from "react","
import { supabase } from "@/integrations/supabase/client","
import { useAuth } from "@/hooks/useAuth",";
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "sonner";
export function useDisputes() {};
  const { user } = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([]),
  const [isLoading, setIsLoading] = useState(true);"
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes","
import { toast } from "sonner",
export function useDisputes() {}
  const { user } = useAuth(),
  const [disputes, setDisputes] = useState<Dispute[]>([]),
  const [isLoading, setIsLoading] = useState(true),
<<<<<<< HEAD
<<<<<<< HEAD
  const [error, setError] = useState<string | null>(null),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const [error, setError] = useState<string | null>(null);
  const fetchDisputes = async () => {
    if (!user) {
<<<<<<< HEAD
<<<<<<< HEAD
      setIsLoading(false);
      return
    }
    try {

<<<<<<< HEAD
=======
      setIsLoading(true);
      setIsLoading(true),
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
;
;
  const [error, setError] = useState<string | null>(null);
  const fetchDisputes = async () => {}
    if (!user) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          *;
          project: projects (
            scope_summary;
            job_id;
            client_id;
            talent_id;

<<<<<<< HEAD

      setIsLoading(true),
      

=======
      setIsLoading(false),
      return
    }
    try {
      setIsLoading(true);
      setIsLoading(true),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const { data, error: fetchError } = await supabase
=======
      const { data, error: fetchError } = await supabase"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .from("disputes")
        .select(`
          *,
          project:projects(
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job:jobs(title)

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
          )
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url));
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
=======
  const [error, setError] = useState<string | null>(null),          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        `)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;        ...dispute;
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
=======
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))`
        `)"
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;

            job:jobs (title)),
          client_profile:projects ! projects_client_id_fkey (client_profile:profiles ! projects_client_id_fkey (display_name, avatar_url));
          talent_profile:projects ! projects_talent_id_fkey (talent_profile:profiles ! projects_talent_id_fkey (display_name, avatar_url));`
        `);"
        .order ("created_at", { ascending: false });
;
      // Check condition;
if (throw fetch_error) {}
  $2;
}
      // Transform data if needed;
      const transformed_data = data.map ((dispute: any) => ({}
        ...dispute;
        client_profile: dispute && dispute.client_profile?.client_profile;
        talent_profile: dispute && dispute.talent_profile?.talent_profile;
        project: {}
    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsLoading (false);
    }
  }

;
<<<<<<< HEAD
  const getDisputeById = async (dispute_id: string): Promise < Dispute | null> => {
<<<<<<< HEAD

=======
          ...dispute && dispute.project,
          title: dispute && dispute.project?.job?.title || 'Untitled Project'
        }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Transform data if needed
      const transformedData = data.map((dispute: any) => ({
=======
  const getDisputeById = async (dispute_id: string): Promise < Dispute | null> => {}
          ...dispute && dispute.project,
          title: dispute && dispute.project?.job?.title || 'Untitled Project'
        }
      // Transform data if needed;
      const transformedData = data.map((dispute: any) => ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        ...dispute,
        client_profile: dispute.client_profile?.client_profile,
        talent_profile: dispute.talent_profile?.talent_profile,
        project: {}
          ...dispute.project'
          title: dispute.project?.job?.title |'Untitled Project'
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        }
<<<<<<< HEAD

        ...dispute;
=======
  const [error, setError] = useState<string | null>(null),          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;        ...dispute;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        client_profile: dispute && dispute.client_profile?.client_profile;
        talent_profile: dispute && dispute.talent_profile?.talent_profile;
        project: {

          ...dispute && dispute.project,
          title: dispute && dispute.project?.job?.title || 'Untitled Project'

        }

      console && console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err && err.message),
      toast && toast.error("Failed to fetch disputes")
<<<<<<< HEAD

=======
=======
    } finally {
      setIsLoading (false);
    }
  }

;
  const getDisputeById = async (dispute_id: string): Promise < Dispute | null> => {
        }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }));
      setDisputes(transformedData as Dispute[]);
      setError(null)
<<<<<<< HEAD
    } catch (err: any) {
;
  const getDisputeById = async (dispute_id: string): Promise < Dispute | null> => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        }
      }));
      setDisputes(transformedData as Dispute[]);
      setError(null)
    } catch (err: any) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD

;
  const getDisputeById = async (dispute_id: string): Promise < Dispute | null> => {

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      const { data, error } = await supabase;
        .from ("disputes");
=======
    } catch (err: any) {}
    try {}
      const { data, error } = await supabase;"
        .from ("disputes");`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .select (`;
          *;
          project: projects (
            scope_summary;
            job_id;
            client_id;
            talent_id;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
      console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err.message)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      })),
      
      setDisputes(transformedData as Dispute[]),
      setError(null)
    } catch (err: any) {"
      console.error("Error fetching disputes:", err),"
      setError("Failed to fetch disputes: " + err.message),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.error("Failed to fetch disputes")
    } finally {}
      setIsLoading(false)
    }

  },


<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {
    try {
      const { data, error } = await supabase
        .from("disputes")
=======

  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {}
    try {}
      const { data, error } = await supabase"
        .from("disputes")`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .select(`
          *,
          project:projects(
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job:jobs(title)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
          )
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url));
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single();
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))`
        `)"
        .eq("id", disputeId)
        .single(),
      
      if (error) throw error,
      

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      return {
        ...data;
        client_profile: data && data.client_profile?.client_profile;
        talent_profile: data && data.talent_profile?.talent_profile;
        project: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      return {
        ...data,
        client_profile: data.client_profile?.client_profile,
        talent_profile: data.talent_profile?.talent_profile,
        project: {
          ...data.project
          title: data.project?.job?.title |'Untitled Project'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        }
      } as Dispute
    } catch (err: any) {
          ...data && data.project,
          title: data && data.project?.job?.title || 'Untitled Project'

=======          ...data.project,
          title: data.project?.job?.title || 'Untitled Project';
        }
      } as Dispute;
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
  }
  const createDispute = async (disputeData: {
    project_id: string;
    milestone_id?: string;
    reason_code: string
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


      return {}
        ...data;
        client_profile: data && data.client_profile?.client_profile;
        talent_profile: data && data.talent_profile?.talent_profile;
        project: {}
          ...data && data.project,'
          title: data && data.project?.job?.title || 'Untitled Project'


          ...data.project,'
          title: data.project?.job?.title || 'Untitled Project';

        }
      } as Dispute;
    } catch (err: any) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        }
      } as Dispute;
    } catch (err: any) {}
  },

  const createDispute = async (disputeData: {}
    project_id: string,
    milestone_id?: string,
    reason_code: string,
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    description: string;
  }): Promise<Dispute | null> => {}
    if (!user) {"
      toast && toast.error("You must be logged in to create a dispute");



      return null;
    }
    try {}
      const { data, error } = await supabase"
        .from("disputes")
        .insert({}
      "
      toast && toast.success("Dispute submitted successfully");


<<<<<<< HEAD
<<<<<<< HEAD
=======
          ...disputeData,
          raised_by: user.id
        })
        .select()
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        .single();
      if (error) throw error;
      toast.success("Dispute submitted successfully");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      
      toast && toast.success("Dispute submitted successfully");

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      
      toast && toast.success("Dispute submitted successfully");

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .single(),

      if (error) throw error,
      "
      toast.success("Dispute submitted successfully"),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      toast && toast.success("Dispute submitted successfully");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      fetchDisputes(), // Refresh the list
      return data as Dispute
    } catch (err: any) {
      console && console.error("Error creating dispute:", err);
      toast && toast.error("Failed to submit dispute");
      return null
<<<<<<< HEAD
<<<<<<< HEAD
    }
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD


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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({ status })
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
        .eq("id", disputeId);
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



      fetchDisputes(), // Refresh the list;
      return data as Dispute;
    } catch (err: any) {"
      console && console.error("Error creating dispute:", err);"
      toast && toast.error("Failed to submit dispute");
      return null;
    }



  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {}
    try {}
      const { error } = await supabase"
        .from("disputes")
        .update({ status })
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .eq("id", disputeId),
      
      if (error) throw error,
      

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      // Update local state

=======
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setDisputes(prevDisputes => 
        prevDisputes && prevDisputes.map(dispute => 
          dispute && dispute.id === disputeId ? { ...dispute, status } : dispute;
        )
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      );
      `
      toast && toast.success(`Dispute status updated to ${status}`);


      ),
      `
      toast.success(`Dispute status updated to ${status}`),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return true
=======
    }      return true
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }      return true
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } catch (err: any) {
      console && console.error("Error updating dispute status:", err);
      toast && toast.error("Failed to update dispute status");
      return false
    }
  }
  const resolveDispute = async (
<<<<<<< HEAD
<<<<<<< HEAD
    disputeId: string
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      console.error ("Error fetching dispute:", err);
      toast.error ("Failed to fetch dispute details");

    disputeId: string, 

<<<<<<< HEAD
=======
=======
      // Update local state
      setDisputes(prevDisputes =>
        prevDisputes.map(dispute =>
          dispute.id === disputeId ? { ...dispute, status } : dispute
        )
      );
      toast.success(`Dispute status updated to ${status}`);
      ),
      
      toast.success(`Dispute status updated to ${status}`),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes",;
=======



      return true;
    } catch (err: any) {"
      console && console.error("Error updating dispute status:", err);"
      toast && toast.error("Failed to update dispute status");
      return false;
    }
  }
  const resolveDispute = async (
    disputeId: string;
"
import { useState, useEffect } from "react",;"
import { supabase } from "@/integrations/supabase/client",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
      const { data, error: fetchError } = await supabase;"
        .from("disputes");`
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
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url));`
        `);"
        .order("created_at", { ascending: false }),;
      if (fetchError) throw fetchError,;
      // Transform data if needed;
      const transformedData = data.map((dispute: any) => ({;
        ...dispute,;
        client_profile: dispute.client_profile?.client_profile,;
        talent_profile: dispute.talent_profile?.talent_profile,;
        project: {;
          ...dispute.project,;'
          title: dispute.project?.job?.title || 'Untitled Project';
        }
      })),;
      setDisputes(transformedData as Dispute[]),;
      setError(null);
    } catch (err: any) {;"
      console.error("Error fetching disputes:", err),;"
      setError("Failed to fetch disputes: " + err.message),;"
      toast.error("Failed to fetch disputes");
    } finally {;
      setIsLoading(false);
    }
  },;
  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {;
    try {;
      const { data, error } = await supabase;"
        .from("disputes");`
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
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url));`
        `);"
        .eq("id", disputeId);
        .single(),;
      if (error) throw error,;
      return {;
        ...data,;
        client_profile: data.client_profile?.client_profile,;
        talent_profile: data.talent_profile?.talent_profile,;
        project: {;
          ...data.project,;'
          title: data.project?.job?.title || 'Untitled Project';
        }
      } as Dispute;
    } catch (err: any) {;"
      console.error("Error fetching dispute:", err),;"
      toast.error("Failed to fetch dispute details"),;

      return null;
    }
  }
;
  const create_dispute = async (dispute_data: {}
    project_id: string;
    milestone_id?: string;
    reason_code: string,
    description: string;
  }): Promise < Dispute | null> => {}
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("You must be logged in to create a dispute");
      return null;
    }
    try {}
      const { data, error } = await supabase;"
        .from ("disputes");
        .insert ({}
          ...dispute_data;
          raised_by: user.id;
        });
        .select ();
        .single ();
;
      // Check condition;
if (throw error) {}
  $2;
}"
      toast.success ("Dispute submitted successfully");
      fetch_disputes (), // Refresh the list;
      return data as Dispute;
    } catch (err: any) {"
      console.error ("Error creating dispute:", err);"
      toast.error ("Failed to submit dispute");
      return null;
    }
  }
;
  const updateDisputeStatus = async (dispute_id: string, status: DisputeStatus): Promise < boolean> => {}
    try {}
      const { error } = await supabase;"
        .from ("disputes");
        .update ({ status });"
        .eq ("id", dispute_id);
;
      // Check condition;
if (throw error) {}
  $2;
}
      // Update local state;
      set_disputes (prev_disputes =>;
        prev_disputes.map (dispute =>;
          dispute.id === dispute_id ? { ...dispute, status } : dispute));
;`
      toast.success (`Dispute status updated to ${status}`);
      return true;
    } catch (err: any) {"
      console.error ("Error updating dispute status:", err);"
      toast.error ("Failed to update dispute status");
      return false;
    }

<<<<<<< HEAD
  },;
  const resolveDispute = async (;
    disputeId: string,;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    resolution: { summary: string, resolution_type: string }
  ): Promise < boolean> => {}
    try {}
          resolution_summary: resolution && resolution.summary,
<<<<<<< HEAD
          resolution_type: resolution && resolution.resolution_type

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
          resolution_type: resolution && resolution.resolution_type;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
=======
    disputeId: string  ): Promise < boolean> => {
    try {  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    disputeId: string  ): Promise < boolean> => {
    try {  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
          resolution_summary: resolution && resolution.summary,
          resolution_type: resolution && resolution.resolution_type
      return null;
    }
  },;
  const createDispute = async (disputeData: {;
    project_id: string,;
    milestone_id?: string,;
    reason_code: string,,
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        })
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const { error } = await supabase
        .from("disputes")
        .update({

<<<<<<< HEAD
=======
=======
      setDisputes(prevDisputes =>
        prevDisputes.map(dispute =>
          dispute.id === disputeId
            ? {
                ...dispute
                status: 'resolved'
                resolved_at: new Date().toISOString();
                resolution_summary: resolution.summary
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

        })"
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state;
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                resolution_type: resolution.resolution_type as any
=======

                resolution_type: resolution.resolution_type as any;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              }
            : dispute;
        )
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
      "
      toast && toast.success("Dispute resolved successfully");


      ),
      "
      toast.success("Dispute resolved successfully"),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return true
=======
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state      return true
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state      return true
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } catch (err: any) {
      console && console.error("Error resolving dispute:", err);
      toast && toast.error("Failed to resolve dispute");
      return false
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
    try {
      const { data, error } = await supabase
        .from("dispute_messages")
        .select(`
          *,
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url)
        `)
        .eq("dispute_id", disputeId)
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  },

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {    try {
      const { data, error } = await supabase;
        .from ("dispute_messages");
        .select (`;
          *;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        .order("created_at", { ascending: true });
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



      return true;
    } catch (err: any) {"
      console && console.error("Error resolving dispute:", err);"
      toast && toast.error("Failed to resolve dispute");
      return false;
    }
  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {}
    try {}
    try {}
      const { data, error } = await supabase;"
        .from ("dispute_messages");`
        .select (`;
          *;


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .order("created_at", { ascending: true }),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      return data as DisputeMessage[]
    } catch (err: any) {"
      console && console.error("Error fetching dispute messages:", err);"
      toast && toast.error("Failed to fetch messages");
      return []
    }


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  },

<<<<<<< HEAD
  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast && toast.error("You must be logged in to send a message");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      return data as DisputeMessage[]
    } catch (err: any) {
      console.error("Error fetching dispute messages:", err),
      toast.error("Failed to fetch messages"),
      return []
    }
  }
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast.error("You must be logged in to send a message"),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast && toast.error("You must be logged in to send a message");
      return false
=======


  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {}
    if (!user) {"
      toast && toast.error("You must be logged in to send a message");


  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {}
    if (!user) {"
      toast && toast.error("You must be logged in to send a message");

      return false;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
    try {}
      const { error } = await supabase"
        .from("dispute_messages")
<<<<<<< HEAD
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          user_profile:profiles ! dispute_messages_user_id_fkey (display_name, avatar_url);
        `);
        .eq ("dispute_id", dispute_id);
=======
        .insert({}
          user_profile:profiles ! dispute_messages_user_id_fkey (display_name, avatar_url);`
        `);"
        .eq ("dispute_id", dispute_id);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  const addDisputeMessage = async (dispute_id: string, message: string, isAdminNote = false): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("You must be logged in to send a message");
      return false;
    }
    try {}
      const { error } = await supabase;"
        .from ("dispute_messages");
        .insert ({}
          dispute_id: dispute_id;

          user_id: user.id;
          message;
          user_id: user && user.id;
          message,


          dispute_id: disputeId,
          user_id: user.id,
          message,
          is_admin_note: isAdminNote;
        }),
      
      if (error) throw error,
      "
      toast.success("Message sent successfully"),

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      toast && toast.success("Message sent successfully");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return true
    } catch (err: any) {
      console && console.error("Error sending message:", err);
      toast && toast.error("Failed to send message");
      return false
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


      return true;
    } catch (err: any) {"
      console && console.error("Error sending message:", err);"
      toast && toast.error("Failed to send message");
      return false;
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
<<<<<<< HEAD
=======
;
  // Fetch disputes when component mounts or user changes;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



  return {}
    disputes;
    is_loading;
    error;
    refetch: fetch_disputes;
    getDisputeById;
    create_dispute;
    updateDisputeStatus;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    resolve_dispute;
    getDisputeMessages,
    addDisputeMessage;




<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    addDisputeMessage
  }
}
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ): Promise<boolean> => {;
=======
          user_id: user.id;
          message  ): Promise<boolean> => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          user_id: user.id;
          message  ): Promise<boolean> => {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
      // Update local state;
      setDisputes(prevDisputes =>;
        prevDisputes.map(dispute =>;
          dispute.id === disputeId;
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
    resolveDispute;
    getDisputeMessages;
    addDisputeMessage;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
}
;  }
}  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
<<<<<<< HEAD
  }
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  }
}
;

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
