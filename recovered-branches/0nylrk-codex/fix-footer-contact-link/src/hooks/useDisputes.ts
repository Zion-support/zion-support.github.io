<<<<<<< HEAD



<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  const [error, setError] = useState<string | null>(null);
  const fetchDisputes = async () => {
    if (!user) {
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
          )
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url));
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .order("created_at", { ascending: false }),
      
      if (fetchError) throw fetchError,
      
<<<<<<< HEAD


      // Transform data if needed
      const transformedData = data && data.map((dispute: any) => ({
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        ...dispute;
        client_profile: dispute && dispute.client_profile?.client_profile;
        talent_profile: dispute && dispute.talent_profile?.talent_profile;
        project: {
<<<<<<< HEAD

          ...dispute && dispute.project,
          title: dispute && dispute.project?.job?.title || 'Untitled Project'

        }

      console && console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err && err.message),
      toast && toast.error("Failed to fetch disputes")

=======
          ...dispute.project,
          title: dispute.project?.job?.title || 'Untitled Project';
        }
      }));
;
      set_disputes (transformed_data as Dispute[]);
      set_error (null);
    } catch (err: any) {
      console.error ("Error fetching disputes:", err);
      set_error ("Failed to fetch disputes: " + err.message),
      toast.error ("Failed to fetch disputes");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsLoading (false);
    }
  }

;
  const getDisputeById = async (dispute_id: string): Promise < Dispute | null> => {

=======
          ...dispute && dispute.project,
          title: dispute && dispute.project?.job?.title || 'Untitled Project'
        }
      // Transform data if needed
      const transformedData = data.map((dispute: any) => ({
        ...dispute,
        client_profile: dispute.client_profile?.client_profile,
        talent_profile: dispute.talent_profile?.talent_profile,
        project: {
          ...dispute.project
          title: dispute.project?.job?.title |'Untitled Project'
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        }
      }));
      setDisputes(transformedData as Dispute[]);
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
;
  const getDisputeById = async (dispute_id: string): Promise < Dispute | null> => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        }
      }));
      setDisputes(transformedData as Dispute[]);
      setError(null)
    } catch (err: any) {
    } finally {
      setIsLoading (false);
    }
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {
      const { data, error } = await supabase;
        .from ("disputes");
        .select (`;
          *;
          project: projects (
            scope_summary;
            job_id;
            client_id;
            talent_id;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            job:jobs (title)),
          client_profile:projects ! projects_client_id_fkey (client_profile:profiles ! projects_client_id_fkey (display_name, avatar_url));
          talent_profile:projects ! projects_talent_id_fkey (talent_profile:profiles ! projects_talent_id_fkey (display_name, avatar_url));
        `);
        .eq ("id", dispute_id);
        .single ();
;
      // Check condition
if (throw error) {
  $2
}

<<<<<<< HEAD
=======

=======
      console.error("Error fetching disputes:", err);
      setError("Failed to fetch disputes: " + err.message)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      })),
      
      setDisputes(transformedData as Dispute[]),
      setError(null)
    } catch (err: any) {
      console.error("Error fetching disputes:", err),
      setError("Failed to fetch disputes: " + err.message),
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      toast.error("Failed to fetch disputes")
    } finally {
      setIsLoading(false)
    }

  },


<<<<<<< HEAD
=======
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single(),
      
      if (error) throw error,
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return {
        ...data;
        client_profile: data && data.client_profile?.client_profile;
        talent_profile: data && data.talent_profile?.talent_profile;
        project: {
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
        }
      } as Dispute
    } catch (err: any) {
      console.error("Error fetching dispute:", err),
      toast.error("Failed to fetch dispute details"),
      return null
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          ...data && data.project,
          title: data && data.project?.job?.title || 'Untitled Project'

<<<<<<< HEAD
=======
=======
          ...data && data.project,
          title: data && data.project?.job?.title || 'Untitled Project'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          ...data.project,
          title: data.project?.job?.title || 'Untitled Project';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }
      } as Dispute;
    } catch (err: any) {
<<<<<<< HEAD


=======
  }
  const createDispute = async (disputeData: {
    project_id: string;
    milestone_id?: string;
    reason_code: string
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        }
      } as Dispute
    } catch (err: any) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },

  const createDispute = async (disputeData: { 
    project_id: string,
    milestone_id?: string,
    reason_code: string,
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    description: string
  }): Promise<Dispute | null> => {
    if (!user) {
      toast && toast.error("You must be logged in to create a dispute");
<<<<<<< HEAD
=======
    description: string
  }): Promise<Dispute | null> => {
    if (!user) {
      toast.error("You must be logged in to create a dispute"),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return null
    }
    try {
      const { data, error } = await supabase
        .from("disputes")
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD
          ...disputeData;
          raised_by: user && user.id
        })
        .select()
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      
      toast && toast.success("Dispute submitted successfully");


<<<<<<< HEAD
=======
          ...disputeData,
          raised_by: user.id
        })
        .select()
        .single();
      if (error) throw error;
      toast.success("Dispute submitted successfully");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .single(),

      if (error) throw error,
      
      toast.success("Dispute submitted successfully"),
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      toast && toast.success("Dispute submitted successfully");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      fetchDisputes(), // Refresh the list
      return data as Dispute
    } catch (err: any) {
      console && console.error("Error creating dispute:", err);
      toast && toast.error("Failed to submit dispute");
      return null
    }
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
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("disputes")
        .update({ status })
<<<<<<< HEAD

<<<<<<< HEAD

=======
        .eq("id", disputeId);
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .eq("id", disputeId),
      
      if (error) throw error,
      
<<<<<<< HEAD


      // Update local state

=======
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setDisputes(prevDisputes => 
        prevDisputes && prevDisputes.map(dispute => 
          dispute && dispute.id === disputeId ? { ...dispute, status } : dispute
        )
      );
      
      toast && toast.success(`Dispute status updated to ${status}`);
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      ),
      
      toast.success(`Dispute status updated to ${status}`),

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return true
    } catch (err: any) {
      console && console.error("Error updating dispute status:", err);
      toast && toast.error("Failed to update dispute status");
      return false
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
  }
  const resolveDispute = async (
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

  },;
  const resolveDispute = async (;
    disputeId: string,;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    resolution: { summary: string, resolution_type: string }
  ): Promise < boolean> => {
    try {

          resolution_summary: resolution && resolution.summary,
          resolution_type: resolution && resolution.resolution_type

<<<<<<< HEAD
=======
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        })
        .eq("id", disputeId);
      if (error) throw error;
      // Update local state
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                resolution_type: resolution.resolution_type as any
              }
            : dispute
        )
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setDisputes(prevDisputes => 
        prevDisputes && prevDisputes.map(dispute => 
          dispute && dispute.id === disputeId 
            ? { 
                ...dispute, 
                status: 'resolved', 
                resolved_at: new Date().toISOString();
                resolution_summary: resolution && resolution.summary,
                resolution_type: resolution && resolution.resolution_type as any
              } 
            : dispute
        )
      );
      
      toast && toast.success("Dispute resolved successfully");
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      ),
      
      toast.success("Dispute resolved successfully"),

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return true
    } catch (err: any) {
      console && console.error("Error resolving dispute:", err);
      toast && toast.error("Failed to resolve dispute");
      return false
    }
  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
    try {
<<<<<<< HEAD
      const { data, error } = await supabase
        .from("dispute_messages")
        .select(`
          *,
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url)
        `)
        .eq("dispute_id", disputeId)


  },



  const getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    try {
      const { data, error } = await supabase;
        .from ("dispute_messages");
        .select (`;
          *;
<<<<<<< HEAD


=======
        .order("created_at", { ascending: true });
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        .order("created_at", { ascending: true }),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return data as DisputeMessage[]
    } catch (err: any) {
      console && console.error("Error fetching dispute messages:", err);
      toast && toast.error("Failed to fetch messages");
      return []
    }
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  },



  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast && toast.error("You must be logged in to send a message");
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

  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast.error("You must be logged in to send a message"),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {
    if (!user) {
      toast && toast.error("You must be logged in to send a message");
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return false
    }
    try {
      const { error } = await supabase
        .from("dispute_messages")
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          user_profile:profiles ! dispute_messages_user_id_fkey (display_name, avatar_url);
        `);
        .eq ("dispute_id", dispute_id);
        .order ("created_at", { ascending: true });
;
      // Check condition
if (throw error) {
  $2
}
      return data as DisputeMessage[];
    } catch (err: any) {
      console.error ("Error fetching dispute messages:", err);
      toast.error ("Failed to fetch messages");
      return [];
    }
  }
;
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          user_id: user.id;
          message
=======
          user_id: user && user.id;
          message,

<<<<<<< HEAD
      
      toast && toast.success("Message sent successfully");

=======

=======
          dispute_id: disputeId;
          user_id: user.id;
          message
          is_admin_note: isAdminNote
        });
      if (error) throw error;
      toast.success("Message sent successfully");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          dispute_id: disputeId,
          user_id: user.id,
          message,
          is_admin_note: isAdminNote
        }),
      
      if (error) throw error,
      
      toast.success("Message sent successfully"),
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      toast && toast.success("Message sent successfully");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return true
    } catch (err: any) {
      console && console.error("Error sending message:", err);
      toast && toast.error("Failed to send message");
      return false
<<<<<<< HEAD
<<<<<<< HEAD

          is_admin_note: isAdminNote;
        });
;
      // Check condition
if (throw error) {
  $2
}
      toast.success ("Message sent successfully");
      return true;
    } catch (err: any) {
      console.error ("Error sending message:", err);
      toast.error ("Failed to send message");
      return false;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return {
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    resolve_dispute;
    getDisputeMessages,
    addDisputeMessage;

<<<<<<< HEAD
=======


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
