import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {Project, ProjectStatus} from "@/types/projects";
import {toast} from "sonner";
export function useProjects() {;
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD
=======
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",

import { Project, ProjectStatus } from "@/types/projects";

<<<<<<< HEAD
import { toast } from "sonner";
export function useProjects() {};
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]),
=======
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {Project, ProjectStatus} from "@/types/projects";
import {toast} from "sonner";
export function useProjects() {;
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",

import { Project, ProjectStatus } from "@/types/projects";

import { toast } from "sonner";
<<<<<<< HEAD
export function useProjects() {};
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]),
=======
export function useProjects() {
<<<<<<< HEAD
  const { user } = useAuth($2);
=======
  const { user } = useAuth();
>>>>>>> merged-prs-20250907-203621
  const [projects, setProjects] = useState<Project[]>([]),
  const [isLoading, setIsLoading] = useState(true);
import { Project, ProjectStatus } from "@/types/projects",
import { toast } from "sonner",
export function useProjects() {
  const { user } = useAuth(),
  const [projects, setProjects] = useState<Project[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const [error, setError] = useState<string | null>(null);
  const fetchProjects = async () => {
    if (!user) {
<<<<<<< HEAD

      setIsLoading(false);
      return
    }
    try {

      setIsLoading(true),

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

      setIsLoading(true),
      


      setIsLoading(false),
      return
    }
    try {
      setIsLoading(true);
      setIsLoading(true),
      
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setIsLoading(false);
      return
    }
    try {

      setIsLoading(true),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Build the query based on user type

      // For clients, get projects they created
      // For talents, get projects they're hired for
      let query = supabase

        .from("projects")
<<<<<<< HEAD
=======
<<<<<<< HEAD
        .select($2);
          talent_profile:profiles!talent_id($2);
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order($2);
      if (user.userType === "jobSeeker" || user.userType === "creator") {
        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" || user.userType === "buyer") {
        query = query.eq("client_id", user.id)
      }
      
      const { data, error: fetchError} = await query,
      
      if (fetchError) throw fetchError,
      
      // Transform the data to match our project types
      const transformedData = $2;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      "
      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {"
        query = query && query.eq("talent_id", user && user.id)"
      } else if (user && user.userType === "employer" || user && user.userType === "buyer") {"
        query = query && query.eq("client_id", user && user.id)

<<<<<<< HEAD
=======
=======
        .select(`
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
        query = query && query.eq("talent_id", user && user.id)
      } else if (user && user.userType === "employer" || user && user.userType === "buyer") {
        query = query && query.eq("client_id", user && user.id)

<<<<<<< HEAD
if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
        query = query && query.eq("talent_id", user && user.id)
      } else if (user && user.userType === "employer" || user && user.userType === "buyer") {
        query = query && query.eq("client_id", user && user.id)
      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;

          *;
          job:jobs(title, description);
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url: avatar_url)
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order("created_at", { ascending: false });
      if (user.userType === "jobSeeker" |user.userType === "creator") {
=======
      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)`
        `)"
        .order("created_at", { ascending: false }),
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" |user.userType === "buyer") {
        query = query.eq("client_id", user.id)
      }
<<<<<<< HEAD

      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
=======
<<<<<<< HEAD
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
=======

<<<<<<< HEAD
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
<<<<<<< HEAD
      // Transform the data to match our project types
      const transformedData = data.map((project: any) => ({
        ...project,
>>>>>>> merged-prs-20250907-203621
        talent_profile: project.talent_profile ? {
          ...project.talent_profile
          full_name: project.talent_profile.display_name
        } : undefined
<<<<<<< HEAD
      })),
      
      setProjects($2);
      setError(null)
    } catch (err: any) {
      console.error($2);
      setError($2);
=======
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      // Transform the data to match our project types
      const transformedData = data.map((project: any) => ({
        ...project,
        talent_profile: project.talent_profile ? {
          ...project.talent_profile
          full_name: project.talent_profile.display_name
        } : undefined

      // Transform the data to match our project types

      const transformedData = data && data.map((project: any) => ({
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { use_auth } from '@/hooks / use_auth';
import { Project, ProjectStatus } from '@/types / projects';

import { toast } from './sonner';
export /**;
 * use_projects - Function description;
 */
function use_projects() {}
  const { user } = use_auth ();
  const [projects, set_projects] = useState < Project[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  const fetch_projects = async () => {}
    // Check condition;
if ( {) {}
  $2;
}
      setIsLoading (false);
      return;
    }
    try {}
      setIsLoading (true);
;
      // Build the query based on user type;
      // For clients, get projects they created;'
      // For talents, get projects they're hired for;
      let query = supabase;"
        .from ("projects");`
        .select (`;
          *;
          job:jobs (title, description);
          talent_profile:profiles ! talent_id (display_name:display_name, professional_title:bio, profile_picture_url: avatar_url),
          client_profile:profiles ! client_id (display_name, avatar_url);`
        `);"
        .order ("created_at", { ascending: false });
;
      // Check condition;
if ( {) {}
  $2;
}"
        query = query.eq ("talent_id", user.id);
      } else // Check condition;
if ( {) {}
  $2;
}"
        query = query.eq ("client_id", user.id);
      }
      const { data, error: fetch_error } = await query;
;
      // Check condition;
if (throw fetch_error) {}
  $2;
}
      // Transform the data to match our project types;
<<<<<<< HEAD
      const transformed_data = data.map ((project: any) => ({}
        ...project;

        talent_profile: project && project.talent_profile ? {
          ...project && project.talent_profile,
          full_name: project && project.talent_profile.display_name

        } : undefined
=======
<<<<<<< HEAD
      const transformed_data = data.map ((project: any) => ({}
=======
      const transformed_data = data.map ((project: any) => ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        ...project;
        talent_profile: project && project.talent_profile ? {
          ...project && project.talent_profile,
          full_name: project && project.talent_profile.display_name
        } : undefined
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      setIsLoading (false);
    }
  }

;

        talent_profile: project && project.talent_profile ? {
          ...project && project.talent_profile,
          full_name: project && project.talent_profile.display_name
        } : undefined

      }));
      setProjects(transformedData as Project[]);
      setError(null)
    } catch (err: any) {

      console.error ("Error fetching projects:", err);
      set_error ("Failed to fetch projects: " + err.message),
      toast.error ("Failed to fetch projects");
    } finally {
      setIsLoading (false);
    }
  }

<<<<<<< HEAD
=======
=======
      }));
      setProjects(transformedData as Project[]);
      setError(null)
    } catch (err: any) {
;
  const getProjectById = async (project_id: string): Promise < Project | null> => {
    try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const { data, error } = await supabase;
        .from ("projects");

        .select (`;
          *;
<<<<<<< HEAD

=======
<<<<<<< HEAD
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects: " + err.message)
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      })),
      
      setProjects(transformedData as Project[]),
      setError(null)
    } catch (err: any) {"
      console.error("Error fetching projects:", err),"
      setError("Failed to fetch projects: " + err.message),
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast.error("Failed to fetch projects")
    } finally {}

      setIsLoading(false)
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
  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from("projects")
<<<<<<< HEAD
        .select(`

=======
<<<<<<< HEAD
        .select($2);
          talent_profile:profiles!talent_id($2);
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single($2);
      if (error) throw error,
=======
        .select(`
<<<<<<< HEAD
          *;
          job:jobs(title, description);
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url: avatar_url)
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single();
      if (error) throw error;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)`
        `)"
        .eq("id", projectId)
        .single(),
      
      if (error) throw error,
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      
<<<<<<< HEAD
=======


      // Transform the data to match our project types
      const transformedProject = {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          job:jobs (title, description);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          talent_profile:profiles ! talent_id (display_name:display_name, professional_title:bio, profile_picture_url: avatar_url),
          client_profile:profiles ! client_id (display_name, avatar_url);`
        `);"
        .eq ("id", project_id);
        .single ();
;
      // Check condition;
if (throw error) {}
  $2;
}
      // Transform the data to match our project types;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        ...data;

        } : undefined;
      }

<<<<<<< HEAD
      toast && toast.error("Failed to fetch project details");
      return null;
    }

=======
=======
      const transformed_project = {
        ...data;
        talent_profile: data && data.talent_profile ? {
          ...data && data.talent_profile,
          full_name: data && data.talent_profile.display_name
        } : undefined
      }
        } : undefined

      },
>>>>>>> merged-prs-20250907-203621
      

      return transformedProject as Project
    } catch (err: any) {
      console && console.error("Error fetching project:", err);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast && toast.error("Failed to fetch project details");
      return null;
    }

  }
  },

<<<<<<< HEAD
=======


<<<<<<< HEAD
      // Transform the data to match our project types
      const transformedProject = {
        ...data,
        talent_profile: data.talent_profile ? {
          ...data.talent_profile
          full_name: data.talent_profile.display_name
        } : undefined
      }
      },
      
      return transformedProject as Project
    } catch (err: any) {
      console.error("Error fetching project:", err),
      toast.error("Failed to fetch project details"),
      return null
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })
<<<<<<< HEAD
<<<<<<< HEAD
=======
        .eq($2);
      if (error) throw error,
      
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          full_name: data && data.talent_profile.display_name  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
        .from("projects")
        .update({ status })      return true
=======

<<<<<<< HEAD
        .eq("id", projectId),
      
      if (error) throw error,
=======
<<<<<<< HEAD
        .eq("id", projectId);
      if (error) throw error;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq("id", projectId),
      
      if (error) throw error,
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
        .eq("id", projectId);
      if (error) throw error;
      // Update the local state
      setProjects(prev => 
        prev && prev.map(project => project && project.id === projectId ? { ...project, status } : project)
      );
      toast && toast.success(`Project status updated to ${status}`);

=======


      // Update the local state
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      setProjects(prev => 
        prev && prev.map(project => project && project.id === projectId ? { ...project, status } : project)
      );
      `
      toast && toast.success(`Project status updated to ${status}`);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      ),
      `
      toast.success(`Project status updated to ${status}`),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return true

>>>>>>> origin/chore/fix-lint-and-merge
    } catch (err: any) {
      console && console.error("Error updating project status:", err);
      toast && toast.error("Failed to update project status");
      return false

<<<<<<< HEAD
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Project, ProjectStatus } from "@/types/projects",;
import { toast } from "sonner",;
;
export function useProjects() {;
  const { user } = useAuth(),;
  const [projects, setProjects] = useState<Project[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
;
  const fetchProjects = async () => {;
    if (!user) {;
      setIsLoading(false),;
      return,;
    }
;
    try {;
      setIsLoading(true),;
      ;
      // Build the query based on user type;
      // For clients, get projects they created;
      // For talents, get projects they're hired for;
      let query = supabase;
        .from("projects");
        .select(`;
          *,;
          job:jobs(title, description),;
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),;
          client_profile:profiles!client_id(display_name, avatar_url);
        `);
        .order("created_at", { ascending:false }),;
      ;
      if (user.userType === "jobSeeker" || user.userType === "creator") {;
        query = query.eq("talent_id", user.id),;
      } else if (user.userType === "employer" || user.userType === "buyer") {;
        query = query.eq("client_id", user.id),;
      }
      ;
      const { data, error:fetchError } = await query,;
      ;
      if (fetchError) throw fetchError,;
      ;
      // Transform the data to match our project types;
      const transformedData = data.map((project:any) => ({;
        ...project,;
        talent_profile:project.talent_profile ? {;
          ...project.talent_profile,;
          full_name:project.talent_profile.display_name;
        } undefined;
      })),;
      ;
      setProjects(transformedData as Project[]),;
      setError(null),;
    } catch (err:any) {;
      console.error("Error fetching projects:", err),;
      setError("Failed to fetch projects:" + err.message),;
      toast.error("Failed to fetch projects");
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const getProjectById = async (projectId:string):Promise<Project | null> => {;
    try {;
      const { data, error } = await supabase;
        .from("projects");
        .select(`;
          *,;
          job:jobs(title, description),;
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),;
          client_profile:profiles!client_id(display_name, avatar_url);
        `);
        .eq("id", projectId);
        .single(),;
      ;
      if (error) throw error,;
      ;
      // Transform the data to match our project types;
      const transformedProject = {;
        ...data,;
        talent_profile:data.talent_profile ? {;
          ...data.talent_profile,;
          full_name:data.talent_profile.display_name;
        } undefined;
      },;
      ;
      return transformedProject as Project,;
    } catch (err:any) {;
      console.error("Error fetching project:", err),;
      toast.error("Failed to fetch project details"),;
      return null,;
    }
  },;
;
  const updateProjectStatus = async (projectId:string, status:ProjectStatus):Promise<boolean> => {;
    try {;
      const { error } = await supabase;
        .from("projects");
        .update({ status });
        .eq("id", projectId),;
      ;
      if (error) throw error,;
      ;
      // Update the local state;
      setProjects(prev => ;
        prev.map(project => project.id === projectId ? { ...project, status } project);
      ),;
      ;
      toast.success(`Project status updated to ${status}`),;
      return true,;
    } catch (err:any) {;
      console.error("Error updating project status:", err),;
      toast.error("Failed to update project status"),;
      return false,;
    }
=======
          ...data.talent_profile,
          full_name: data.talent_profile.display_name;
        } : undefined;
      }
;
      return transformed_project as Project;
    } catch (err: any) {
      console.error ("Error fetching project:", err);
      toast.error ("Failed to fetch project details");

}
      // Update the local state;
      set_projects (prev =>;
        prev.map (project => project.id === project_id ? { ...project, status } : project));

      toast.error ("Failed to update project status");
      return false;
<<<<<<< HEAD
    }
  }
;
  // Fetch projects when component mounts or user changes;

}
      fetch_projects ();
    }
  }, [user]);
;

  const { user } = useAuth(),;
  const [projects, setProjects] = useState<Project[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const fetchProjects = async () => {;
    if (!user) {;
      setIsLoading(false),;
      return;
    }
;
    try {;
      setIsLoading(true),;
      // Build the query based on user type;

        .select(`;
          *,;
          job:jobs(title, description),;
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),;

        query = query.eq("client_id", user.id);
      }
;
      const { data, error: fetchError } = await query,;
      if (fetchError) throw fetchError,;
      // Transform the data to match our project types;
      const transformedData = data.map((project: any) => ({;
        ...project,;
        talent_profile: project.talent_profile ? {;
          ...project.talent_profile,;
          full_name: project.talent_profile.display_name;
        } : undefined;
      })),;
      setProjects(transformedData as Project[]),;
      setError(null);

      toast.error("Failed to fetch projects");
    } finally {;
      setIsLoading(false);
    }
  },;
  const getProjectById = async (projectId: string): Promise<Project | null> => {;
    try {;

        .select(`;
          *,;
          job:jobs(title, description),;
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),;

        .eq("id", projectId);
        .single(),;
      if (error) throw error,;
      // Transform the data to match our project types;
      const transformedProject = {;
        ...data,;
        talent_profile: data.talent_profile ? {;
          ...data.talent_profile,;
          full_name: data.talent_profile.display_name;
        } : undefined;
      },;
      return transformedProject as Project;

      toast.error("Failed to fetch project details"),;
      return null;
    }
  },;
  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {;
    try {;

        .eq("id", projectId),;
      if (error) throw error,;
      // Update the local state;
      setProjects(prev =>;
        prev.map(project => project.id === projectId ? { ...project, status } : project);

      toast.error("Failed to update project status"),;
      return false;
    }
  },;
  // Fetch projects when component mounts or user changes;
  useEffect(() => {;
    if (user) {;
      fetchProjects();
    }
  }, [user]),;
=======
    }
  }
;
  // Fetch projects when component mounts or user changes;

}
      fetch_projects ();
    }
  }, [user]);
;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return {
    projects;
    is_loading;
    error;

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      // Update the local state
      setProjects(prev =>
        prev.map(project => project.id === projectId ? { ...project, status } : project)
      );
      toast.success(`Project status updated to ${status}`);
      ),
      
      toast.success(`Project status updated to ${status}`),
      return true
    } catch (err: any) {
      console.error("Error updating project status:", err),
      toast.error("Failed to update project status"),
      return false
    }
  }
  // Fetch projects when component mounts or user changes
  useEffect(() => {
    if (user) {
      fetchProjects()
    }
  }, [user]);
  return {
    projects;
    isLoading;
    error;
    refetch: fetchProjects;
    getProjectById

    updateProjectStatus
=======
    refetch: fetch_projects;
    getProjectById,
    updateProjectStatus;

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Project, ProjectStatus } from "@/types/projects",;
import { toast } from "sonner",;
export function useProjects() {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { user } = useAuth(),;
  const [projects, setProjects] = useState<Project[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const fetchProjects = async () => {;
    if (!user) {;
      setIsLoading(false),;
      return;
    }
;
    try {;
      setIsLoading(true),;
      // Build the query based on user type;

        .select(`;
          *,;
          job:jobs(title, description),;
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),;

        query = query.eq("client_id", user.id);
      }
;
      const { data, error: fetchError } = await query,;
      if (fetchError) throw fetchError,;
      // Transform the data to match our project types;
      const transformedData = data.map((project: any) => ({;
        ...project,;
        talent_profile: project.talent_profile ? {;
          ...project.talent_profile,;
          full_name: project.talent_profile.display_name;
        } : undefined;
      })),;
      setProjects(transformedData as Project[]),;
      setError(null);

      toast.error("Failed to fetch projects");
    } finally {;
      setIsLoading(false);
    }
  },;
  const getProjectById = async (projectId: string): Promise<Project | null> => {;
    try {;

        .select(`;
          *,;
          job:jobs(title, description),;
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),;

        .eq("id", projectId);
        .single(),;
      if (error) throw error,;
      // Transform the data to match our project types;
      const transformedProject = {;
        ...data,;
        talent_profile: data.talent_profile ? {;
          ...data.talent_profile,;
          full_name: data.talent_profile.display_name;
        } : undefined;
      },;
      return transformedProject as Project;

      toast.error("Failed to fetch project details"),;
      return null;
    }
  },;
  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {;
    try {;

        .eq("id", projectId),;
      if (error) throw error,;
      // Update the local state;
      setProjects(prev =>;
        prev.map(project => project.id === projectId ? { ...project, status } : project);

      toast.error("Failed to update project status"),;
      return false;
    }
  },;
  // Fetch projects when component mounts or user changes;
  useEffect(() => {;
    if (user) {;
      fetchProjects();
    }
  }, [user]),;
  return {;
    projects,;
    isLoading,;
    error,;
    refetch: fetchProjects;
    getProjectById;
    updateProjectStatus;
<<<<<<< HEAD
    refetch: fetch_projects;
    getProjectById,
    updateProjectStatus;
  }
  },;
;
  // Fetch projects when component mounts or user changes;
  useEffect(() => {;
    if (user) {;
      fetchProjects(),;
    }
  }, [user]),;
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return {;
    projects,;
    isLoading,;
    error,;
<<<<<<< HEAD
    refetch: fetchProjects;
    getProjectById;
    updateProjectStatus;

=======
    refetch:fetchProjects,;
    getProjectById,;
    updateProjectStatus;
  },; export function useProjects () {
  const {
  user 
}= useAuth ();
const [projects, setProjects] = useState<Project[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
const fetchProjects = async () => {
  if (!user) {
  setIsLoading (false);
return 
}try {
  setIsLoading (true);
//Build the query based on user type //For clients, get projects they created //For talents, get projects they're hired for let query = supabase .from ("projects") 
}const {
  data, error: fetchError 
}= await query;
//Transform the data to match our project types 
}finally {
  setIsLoading (false) 
}
};
const getProjectById = async (projectId: string) : Promise<Project | null> => {
  try {
  const {
  data, error 
}= await supabase .from ("projects") job: jobs (title, description);
talent profile:profiles!talent id (display name:display name, professional title:bio, profile picture url:avatar url);
client profile:profiles!client id (display name, avatar url) `) if (error) throw error;
//Transform the data to match our project types 
}
};
const updateProjectStatus = async (projectId: string, status: ProjectStatus) : Promise<boolean> => {
  try {
  const {
  error 
}= await supabase .from ("projects") .update ({
  status 
}) //Update the local state setProjects (prev => 
}
};
// Fetch projects when component mounts or user changes useEffect ( () => {
  if (user) {
  fetchProjects () 
}
}, [user]);
return {
  projects;
isLoading;
error;
refetch: fetchProjects;
getProjectById;
updateProjectStatus 
}
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },;
;
  // Fetch projects when component mounts or user changes;
  useEffect(() => {;
    if (user) {;
      fetchProjects(),;
    }
  }, [user]),;
;
  return {;
    projects,;
    isLoading,;
    error,;
    refetch:fetchProjects,;
    getProjectById,;
    updateProjectStatus;
  },; export function useProjects () {
  const {
  user 
}= useAuth ();
const [projects, setProjects] = useState<Project[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
const fetchProjects = async () => {
  if (!user) {
  setIsLoading (false);
return 
}try {
  setIsLoading (true);
//Build the query based on user type //For clients, get projects they created //For talents, get projects they're hired for let query = supabase .from ("projects") 
}const {
  data, error: fetchError 
}= await query;
//Transform the data to match our project types 
}finally {
  setIsLoading (false) 
}
};
const getProjectById = async (projectId: string) : Promise<Project | null> => {
  try {
  const {
  data, error 
}= await supabase .from ("projects") job: jobs (title, description);
talent profile:profiles!talent id (display name:display name, professional title:bio, profile picture url:avatar url);
client profile:profiles!client id (display name, avatar url) `) if (error) throw error;
//Transform the data to match our project types 
}
};
const updateProjectStatus = async (projectId: string, status: ProjectStatus) : Promise<boolean> => {
  try {
  const {
  error 
}= await supabase .from ("projects") .update ({
  status 
}) //Update the local state setProjects (prev => 
}
};
// Fetch projects when component mounts or user changes useEffect ( () => {
  if (user) {
  fetchProjects () 
}
}, [user]);
return {
  projects;
isLoading;
error;
refetch: fetchProjects;
getProjectById;
updateProjectStatus 
}

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }

}