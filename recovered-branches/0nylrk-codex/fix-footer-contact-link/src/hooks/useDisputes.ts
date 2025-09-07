<<<<<<< HEAD
<<<<<<< HEAD
=======
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

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",

import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes";

import { toast } from "sonner";
export function useDisputes() {};
  const { user } = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([]),

  const [error, setError] = useState<string | null>(null);
  const fetchDisputes = async () => {
    if (!user) {

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

=======
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes";
import { toast } from "sonner";
export function useDisputes() {
  const { user } = useAuth($2);
  const [disputes, setDisputes] = useState<Dispute[]>([]),
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),

  const [error, setError] = useState<string | null>(null);
  const fetchDisputes = async () => {
    if (!user) {
      setIsLoading($2);
      return
    }
    try {
      setIsLoading($2);
      const { data, error: fetchError} = await supabase
        .from("disputes")
        .select(`
          *,
          project: projects(
=======
<<<<<<< HEAD
=======
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

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",

import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes";

<<<<<<< HEAD
import { toast } from "sonner";
export function useDisputes() {};
  const { user } = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([]),
=======
<<<<<<< HEAD
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
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes";
import { toast } from "sonner";
export function useDisputes() {
  const { user } = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([]),
  const [isLoading, setIsLoading] = useState(true);
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes",
import { toast } from "sonner",
export function useDisputes() {
  const { user } = useAuth(),
  const [disputes, setDisputes] = useState<Dispute[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const [error, setError] = useState<string | null>(null);
  const fetchDisputes = async () => {
    if (!user) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          *;
          project: projects (
            scope_summary;
            job_id;
            client_id;
            talent_id;
<<<<<<< HEAD

      setIsLoading(true),

=======
<<<<<<< HEAD

      setIsLoading(true),
=======
      setIsLoading(false),
      return
    }
    try {
      setIsLoading(true);
      setIsLoading(true),
      
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const { data, error: fetchError } = await supabase

        .from("disputes")
        .select(`
          *,
          project:projects(
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            scope_summary,
            job_id,
            client_id,
            talent_id,
<<<<<<< HEAD
            job:jobs(title)

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
>>>>>>> origin/chore/fix-lint-and-merge

    } finally {

      setIsLoading (false);
    }
  }

<<<<<<< HEAD
=======
;

      // Transform data if needed
      const transformedData = data.map((dispute: any) => ({

        ...dispute,
        client_profile: dispute.client_profile?.client_profile,
        talent_profile: dispute.talent_profile?.talent_profile,
        project: {}
          ...dispute.project'
          title: dispute.project?.job?.title |'Untitled Project'

>>>>>>> origin/chore/fix-lint-and-merge
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

<<<<<<< HEAD
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
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

      })),
      
      setDisputes(transformedData as Dispute[]),
      setError(null)
<<<<<<< HEAD

=======
    } catch (err: any) {"
      console.error("Error fetching disputes:", err),"
      setError("Failed to fetch disputes: " + err.message),

      toast.error("Failed to fetch disputes")
    } finally {}

      setIsLoading(false)
>>>>>>> origin/chore/fix-lint-and-merge
    }

  },

  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {
    try {
<<<<<<< HEAD

=======
      const { data, error } = await supabase
        .from("disputes")

        .select(`
          *,
          project:projects(
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
            job: jobs(title)
=======
            job:jobs(title)
<<<<<<< HEAD
          )
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url));
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
=======

<<<<<<< HEAD
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))

        `)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            scope_summary,
            job_id,
            client_id,
            talent_id,
<<<<<<< HEAD
            job:jobs(title)

          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single();
      if (error) throw error;

          ),
<<<<<<< HEAD

=======
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))`
        `)"
        .eq("id", disputeId)
>>>>>>> origin/chore/fix-lint-and-merge
        .single(),
      
=======
            job: jobs(title)
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single($2);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
  const createDispute = $2;
    milestone_id?: string,
    reason_code: string,
    description: string}): Promise<Dispute | null> => {
    if (!user) {
      toast.error($2);
=======
        .order("created_at", { ascending: false }),
      
      if (fetchError) throw fetchError,
<<<<<<< HEAD

      // Transform data if needed
      const transformedData = data && data.map((dispute: any) => ({
=======
      
<<<<<<< HEAD
=======


      // Transform data if needed
      const transformedData = data && data.map((dispute: any) => ({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

      console && console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err && err.message),
      toast && toast.error("Failed to fetch disputes")
>>>>>>> origin/chore/fix-lint-and-merge

    } finally {

      setIsLoading (false);
    }
  }

<<<<<<< HEAD
=======
;

      // Transform data if needed
      const transformedData = data.map((dispute: any) => ({

        ...dispute,
        client_profile: dispute.client_profile?.client_profile,
        talent_profile: dispute.talent_profile?.talent_profile,
        project: {}
          ...dispute.project'
          title: dispute.project?.job?.title |'Untitled Project'

>>>>>>> origin/chore/fix-lint-and-merge
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

<<<<<<< HEAD
=======
    } finally {
      setIsLoading (false);
    }
  }

=======
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
;
  const getDisputeById = async (dispute_id: string): Promise < Dispute | null> => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {

      const { data, error } = await supabase;
        .from ("disputes");

        .select (`;
          *;
          project: projects (
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
      console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err.message)
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      })),
      
      setDisputes(transformedData as Dispute[]),
      setError(null)
<<<<<<< HEAD

=======
    } catch (err: any) {"
      console.error("Error fetching disputes:", err),"
      setError("Failed to fetch disputes: " + err.message),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast.error("Failed to fetch disputes")
    } finally {}

      setIsLoading(false)
>>>>>>> origin/chore/fix-lint-and-merge
    }

  },

<<<<<<< HEAD
=======

<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {
    try {
<<<<<<< HEAD

=======
      const { data, error } = await supabase
        .from("disputes")

        .select(`
          *,
          project:projects(
>>>>>>> origin/chore/fix-lint-and-merge
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job:jobs(title)
<<<<<<< HEAD
          )
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url));
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single();
      if (error) throw error;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single();
      if (error) throw error;

          ),
<<<<<<< HEAD

=======
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))`
        `)"
        .eq("id", disputeId)
>>>>>>> origin/chore/fix-lint-and-merge
        .single(),
      
      if (error) throw error,
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
  ): Promise < boolean> => {
    }
    try {
      }
      const { error } = await supabase;

      // Update local state;
      setDisputes(prevDisputes =>;
        prevDisputes.map(dispute =>;
          dispute.id === disputeId ? { ...dispute, status } : dispute;
        );

      return false;
    }
  },
  const resolveDispute = async (;

  ): Promise<boolean> => {
    }
    try {

    }
  const getDisputeMessages = async ("disputeId": string): Promise<DisputeMessage[]> => {
=======
<<<<<<< HEAD
=======
=======
      
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return {
        ...data;
        client_profile: data && data.client_profile?.client_profile;
        talent_profile: data && data.talent_profile?.talent_profile;
        project: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
      console.error("Error fetching dispute:", err),
      toast.error("Failed to fetch dispute details"),
      return null
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        }
      } as Dispute
    } catch (err: any) {

          ...data && data.project,
          title: data && data.project?.job?.title || 'Untitled Project'

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          ...data && data.project,
          title: data && data.project?.job?.title || 'Untitled Project'
          ...data.project,
          title: data.project?.job?.title || 'Untitled Project';
        }
      } as Dispute;
    } catch (err: any) {
  }
  const createDispute = async (disputeData: {
    project_id: string;
    milestone_id?: string;
    reason_code: string
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          ...data.project,
          title: data.project?.job?.title || 'Untitled Project';
        }
      } as Dispute;
    } catch (err: any) {

<<<<<<< HEAD
        }
      } as Dispute;
    } catch (err: any) {}
=======
<<<<<<< HEAD
        }
      } as Dispute;
    } catch (err: any) {}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },

  const createDispute = async (disputeData: {}
    project_id: string,
    milestone_id?: string,
    reason_code: string,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    description: string
  }): Promise<Dispute | null> => {
    if (!user) {
      toast.error("You must be logged in to create a dispute"),
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    description: string;
  }): Promise<Dispute | null> => {}
    if (!user) {"
      toast && toast.error("You must be logged in to create a dispute");
<<<<<<< HEAD

      return null;
    }
    try {}
      const { data, error } = await supabase"
        .from("disputes")
        .insert({}
      "
      toast && toast.success("Dispute submitted successfully");

        .single();
      if (error) throw error;
      toast.success("Dispute submitted successfully");

        .single(),

      if (error) throw error,
      "
      toast.success("Dispute submitted successfully"),

      fetchDisputes(), // Refresh the list
      return data as Dispute
    } catch (err: any) {
      console && console.error("Error creating dispute:", err);
      toast && toast.error("Failed to submit dispute");
      return null

  },

  }
  },

  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({ status })

        .eq("id", disputeId),
      
      if (error) throw error,

      setDisputes(prevDisputes => 
        prevDisputes && prevDisputes.map(dispute => 
          dispute && dispute.id === disputeId ? { ...dispute, status } : dispute;
        )

      toast && toast.success(`Dispute status updated to ${status}`);

      ),

      return true

    } catch (err: any) {
      console && console.error("Error updating dispute status:", err);
      toast && toast.error("Failed to update dispute status");
      return false

    }
  }
  const resolveDispute = async (

      console.error ("Error fetching dispute:", err);
      toast.error ("Failed to fetch dispute details");

    disputeId: string, 

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
    try {
      const { error } = await supabase
        .from("disputes")
        .update({
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

        })
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state

      const { error } = await supabase
        .from("disputes")
        .update({

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

                resolution_type: resolution.resolution_type as any

              }
            : dispute;
        )

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

      return true

    } catch (err: any) {
      console && console.error("Error resolving dispute:", err);
      toast && toast.error("Failed to resolve dispute");
      return false
>>>>>>> origin/chore/fix-lint-and-merge
    }

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
    try {
<<<<<<< HEAD
=======
      const { data, error } = await supabase
        .from("dispute_messages")
        .select(`
          *,
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url)
        `)
        .eq("dispute_id", disputeId)
>>>>>>> origin/chore/fix-lint-and-merge

  },

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
    try {
      const { data, error } = await supabase;
<<<<<<< HEAD

    }
=======
        .from ("dispute_messages");
        .select (`;
          *;

        .order("created_at", { ascending: true });
      if (error) throw error;

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

  },

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
>>>>>>> origin/chore/fix-lint-and-merge
    if (!user) {
      toast && toast.error("You must be logged in to send a message");

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast.error("You must be logged in to send a message"),

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast && toast.error("You must be logged in to send a message");
      return false

    }
<<<<<<< HEAD
    try {

=======
    try {}
      const { error } = await supabase"
        .from("dispute_messages")

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

      return true
    } catch (err: any) {
      console && console.error("Error sending message:", err);
      toast && toast.error("Failed to send message");
      return false

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
>>>>>>> origin/chore/fix-lint-and-merge
      // Update local state;
      setDisputes(prevDisputes =>;
        prevDisputes.map(dispute =>;
          dispute.id === disputeId;
<<<<<<< HEAD

      return false;
    }
  },
  // Fetch disputes when component mounts or user changes;

=======
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
>>>>>>> origin/chore/fix-lint-and-merge
    resolveDispute;
    getDisputeMessages;
    addDisputeMessage;

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      return null
    }
    try {
      const { data, error } = await supabase
        .from("disputes")
        .insert({
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          ...disputeData;
          raised_by: user && user.id
        })
        .select()
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      return null;
    }
    try {}
      const { data, error } = await supabase"
        .from("disputes")
        .insert({}
      "
      toast && toast.success("Dispute submitted successfully");

<<<<<<< HEAD
        .single();
      if (error) throw error;
      toast.success("Dispute submitted successfully");
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          ...disputeData,
          raised_by: user.id
        })
        .select()
<<<<<<< HEAD
        .single($2);
      if (error) throw error,
      
      toast.success($2);
      fetchDisputes(), // Refresh the list
      
      return data as Dispute
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return null
    }
  },

=======
        .single();
      if (error) throw error;
      toast.success("Dispute submitted successfully");
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .single(),

      if (error) throw error,
      "
      toast.success("Dispute submitted successfully"),
<<<<<<< HEAD
      toast && toast.success("Dispute submitted successfully");
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      fetchDisputes(), // Refresh the list
      return data as Dispute
    } catch (err: any) {
      console.error("Error creating dispute:", err),
      toast.error("Failed to submit dispute"),
      return null
    }
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({ status })
<<<<<<< HEAD
        .eq($2);
      if (error) throw error,
      
=======

<<<<<<< HEAD
        .eq("id", disputeId),
      
      if (error) throw error,
=======
<<<<<<< HEAD
        .eq("id", disputeId);
      if (error) throw error;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq("id", disputeId),
      
      if (error) throw error,
      
<<<<<<< HEAD
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state
=======


      // Update local state
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setDisputes(prevDisputes => 
        prevDisputes && prevDisputes.map(dispute => 
          dispute && dispute.id === disputeId ? { ...dispute, status } : dispute;
        )
<<<<<<< HEAD

=======
      );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
    }
  }
  const resolveDispute = async (
    disputeId: string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      console.error ("Error fetching dispute:", err);
      toast.error ("Failed to fetch dispute details");

    disputeId: string, 

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      // Update local state
      setDisputes(prevDisputes =>
        prevDisputes.map(dispute =>
          dispute.id === disputeId ? { ...dispute, status } : dispute
        )
<<<<<<< HEAD
      ),
      
      toast.success($2);
      return true
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return false
    }
  },

  const resolveDispute = $2;
    resolution: { summary: string, resolution_type: string}
  ): Promise<boolean> => {
=======
      );
      toast.success(`Dispute status updated to ${status}`);
      ),
      
      toast.success(`Dispute status updated to ${status}`),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
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
>>>>>>> merged-prs-20250907-203621
    try {
      const { error } = await supabase
        .from("disputes")
        .update({
<<<<<<< HEAD
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
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        })
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state
<<<<<<< HEAD
      setDisputes(prevDisputes =>
        prevDisputes.map(dispute =>
          dispute.id === disputeId
            ? {
                ...dispute
                status: 'resolved'
                resolved_at: new Date().toISOString();
                resolution_summary: resolution.summary
=======

      const { error } = await supabase
        .from("disputes")
        .update({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                resolution_type: resolution.resolution_type as any

              }
            : dispute;
        )
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      "
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast && toast.success("Dispute resolved successfully");

      ),
      "
      toast.success("Dispute resolved successfully"),

      return true

    } catch (err: any) {
      console && console.error("Error resolving dispute:", err);
      toast && toast.error("Failed to resolve dispute");
      return false
>>>>>>> origin/chore/fix-lint-and-merge
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
>>>>>>> merged-prs-20250907-203621
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
=======

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
    try {
<<<<<<< HEAD
=======
      const { data, error } = await supabase
        .from("dispute_messages")
        .select(`
          *,
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url)
        `)
        .eq("dispute_id", disputeId)
>>>>>>> origin/chore/fix-lint-and-merge

  },

  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
<<<<<<< HEAD
=======
          resolved_at: new Date ().toISOString ();
          resolution_summary: resolution.summary,
          resolution_type: resolution.resolution_type;
        });
        .eq ("id", dispute_id);
;
      // Check condition
if (throw error) {
  $2
}
      // Update local state;
      set_disputes (prev_disputes =>;
        prev_disputes.map (dispute =>;
          dispute.id === dispute_id;
            ? {
                ...dispute,
                status: 'resolved',
                resolved_at: new Date ().toISOString ();
                resolution_summary: resolution.summary,
                resolution_type: resolution.resolution_type as any;
              }
            : dispute));
;
      toast.success ("Dispute resolved successfully");
      return true;
    } catch (err: any) {
      console.error ("Error resolving dispute:", err);
      toast.error ("Failed to resolve dispute");
      return false;
    }
  }
;
  const getDisputeMessages = async (dispute_id: string): Promise < DisputeMessage[]> => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {
      const { data, error } = await supabase;
<<<<<<< HEAD

    }
=======
        .from ("dispute_messages");
        .select (`;
          *;
<<<<<<< HEAD
        .order("created_at", { ascending: true });
      if (error) throw error;
=======

        .order("created_at", { ascending: true });
      if (error) throw error;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .order("created_at", { ascending: true }),
      
      if (error) throw error,
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
>>>>>>> origin/chore/fix-lint-and-merge
    if (!user) {
      toast && toast.error("You must be logged in to send a message");

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast.error("You must be logged in to send a message"),

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast && toast.error("You must be logged in to send a message");
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return false

    }
<<<<<<< HEAD
    try {

=======
    try {}
      const { error } = await supabase"
        .from("dispute_messages")
<<<<<<< HEAD
=======
        .insert({
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======
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

<<<<<<< HEAD
          dispute_id: disputeId;
          user_id: user.id;
          message
          is_admin_note: isAdminNote
        });
      if (error) throw error;
      toast.success("Message sent successfully");
=======
      
      toast && toast.success("Message sent successfully");

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          dispute_id: disputeId,
          user_id: user.id,
          message,
          is_admin_note: isAdminNote
        }),
      
      if (error) throw error,
      
      toast.success("Message sent successfully"),
<<<<<<< HEAD
      toast && toast.success("Message sent successfully");
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return true
    } catch (err: any) {
      console && console.error("Error sending message:", err);
      toast && toast.error("Failed to send message");
      return false

<<<<<<< HEAD
=======
<<<<<<< HEAD

import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Dispute, DisputeMessage, DisputeAttachment, DisputeStatus } from "@/types/disputes",;
import { toast } from "sonner",;
;
export function useDisputes() {;
  const { user } = useAuth(),;
  const [disputes, setDisputes] = useState<Dispute[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
;
  const fetchDisputes = async () => {;
    if (!user) {;
      setIsLoading(false),;
      return,;
    }
;
    try {;
      setIsLoading(true),;
      ;
      const { data, error:fetchError } = await supabase;
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
        .order("created_at", { ascending:false }),;
      ;
      if (fetchError) throw fetchError,;
      ;
      // Transform data if needed;
      const transformedData = data.map((dispute:any) => ({;
        ...dispute,;
        client_profile:dispute.client_profile?.client_profile,;
        talent_profile:dispute.talent_profile?.talent_profile,;
        project:{;
          ...dispute.project,;
          title:dispute.project?.job?.title || 'Untitled Project';
        }
      })),;
      ;
      setDisputes(transformedData as Dispute[]),;
      setError(null),;
    } catch (err:any) {;
      console.error("Error fetching disputes:", err),;
      setError("Failed to fetch disputes:" + err.message),;
      toast.error("Failed to fetch disputes");
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const getDisputeById = async (disputeId:string):Promise<Dispute | null> => {;
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
      ;
      if (error) throw error,;
      ;
      return {;
        ...data,;
        client_profile:data.client_profile?.client_profile,;
        talent_profile:data.talent_profile?.talent_profile,;
        project:{;
          ...data.project,;
          title:data.project?.job?.title || 'Untitled Project';
        }
      } as Dispute,;
    } catch (err:any) {;
      console.error("Error fetching dispute:", err),;
      toast.error("Failed to fetch dispute details"),;
      return null,;
    }
  },;
;
  const createDispute = async (disputeData:{ ;
    project_id:string,;
    milestone_id?:string,;
    reason_code:string,;
    description:string;
  }):Promise<Dispute | null> => {;
    if (!user) {;
      toast.error("You must be logged in to create a dispute"),;
      return null,;
    }
;
    try {;
      const { data, error } = await supabase;
        .from("disputes");
        .insert({;
          ...disputeData,;
          raised_by:user.id;
        });
        .select();
        .single(),;
;
      if (error) throw error,;
      ;
      toast.success("Dispute submitted successfully"),;
      fetchDisputes(), // Refresh the list;
      ;
      return data as Dispute,;
    } catch (err:any) {;
      console.error("Error creating dispute:", err),;
      toast.error("Failed to submit dispute"),;
      return null,;
    }
  },;
;
  const updateDisputeStatus = async (disputeId:string, status:DisputeStatus):Promise<boolean> => {;
    try {;
      const { error } = await supabase;
        .from("disputes");
        .update({ status });
        .eq("id", disputeId),;
      ;
      if (error) throw error,;
      ;
      // Update local state;
      setDisputes(prevDisputes => ;
        prevDisputes.map(dispute => ;
          dispute.id === disputeId ? { ...dispute, status } dispute;
        );
      ),;
      ;
      toast.success(`Dispute status updated to ${status}`),;
      return true,;
    } catch (err:any) {;
      console.error("Error updating dispute status:", err),;
      toast.error("Failed to update dispute status"),;
      return false,;
    }
=======
          is_admin_note: isAdminNote;
        });
;
      // Check condition
if (throw error) {
  $2
}
      toast.success ("Message sent successfully");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return true;
    } catch (err: any) {"
      console && console.error("Error sending message:", err);"
      toast && toast.error("Failed to send message");
      return false;
    }

  }

}
;

<<<<<<< HEAD
  return {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    disputes;
    is_loading;
    error;
    refetch: fetch_disputes;
    getDisputeById;
    create_dispute;
    updateDisputeStatus;

<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
}
=======
    resolve_dispute;
    getDisputeMessages,
    addDisputeMessage;

<<<<<<< HEAD
=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
      // Update local state;
      setDisputes(prevDisputes =>;
        prevDisputes.map(dispute =>;
          dispute.id === disputeId;
<<<<<<< HEAD

      return false;
    }
  },
  // Fetch disputes when component mounts or user changes;

=======
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
>>>>>>> origin/chore/fix-lint-and-merge
    resolveDispute;
    getDisputeMessages;
    addDisputeMessage;

<<<<<<< HEAD
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
=======
  }
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
}  }
}  }
}
=======
;
  }
}
;
  }
}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  }
}
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
;
  }
}
;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
