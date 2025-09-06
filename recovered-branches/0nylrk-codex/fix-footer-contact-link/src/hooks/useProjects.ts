<<<<<<< HEAD



<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Project, ProjectStatus } from "@/types/projects";
import { toast } from "sonner";
export function useProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]),
  const [isLoading, setIsLoading] = useState(true);
import { Project, ProjectStatus } from "@/types/projects",
import { toast } from "sonner",
export function useProjects() {
  const { user } = useAuth(),
  const [projects, setProjects] = useState<Project[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======




>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  const [error, setError] = useState<string | null>(null);
  const fetchProjects = async () => {
    if (!user) {
<<<<<<< HEAD
<<<<<<< HEAD
      setIsLoading(false);
      return
    }
    try {

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      setIsLoading(true),
      


<<<<<<< HEAD
=======
      setIsLoading(false),
      return
    }
    try {
      setIsLoading(true);
      setIsLoading(true),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Build the query based on user type
      // For clients, get projects they created
      // For talents, get projects they're hired for
      let query = supabase
        .from("projects")
        .select(`
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      
      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
        query = query && query.eq("talent_id", user && user.id)
      } else if (user && user.userType === "employer" || user && user.userType === "buyer") {
        query = query && query.eq("client_id", user && user.id)

<<<<<<< HEAD
      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
=======

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order("created_at", { ascending: false }),
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" |user.userType === "buyer") {
        query = query.eq("client_id", user.id)
      }
<<<<<<< HEAD
<<<<<<< HEAD

=======
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
<<<<<<< HEAD
=======
      // Transform the data to match our project types
      const transformedData = data.map((project: any) => ({
        ...project,
        talent_profile: project.talent_profile ? {
          ...project.talent_profile
          full_name: project.talent_profile.display_name
        } : undefined
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Transform the data to match our project types
      const transformedData = data && data.map((project: any) => ({
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { use_auth } from '@/hooks / use_auth';
import { Project, ProjectStatus } from '@/types / projects';
import { toast } from './sonner';
export /**
 * use_projects - Function description
 */
function use_projects() {
  const { user } = use_auth ();
  const [projects, set_projects] = useState < Project[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  const fetch_projects = async () => {
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
      // Build the query based on user type;
      // For clients, get projects they created;
      // For talents, get projects they're hired for;
      let query = supabase;
        .from ("projects");
        .select (`;
          *;
          job:jobs (title, description);
          talent_profile:profiles ! talent_id (display_name:display_name, professional_title:bio, profile_picture_url: avatar_url),
          client_profile:profiles ! client_id (display_name, avatar_url);
        `);
        .order ("created_at", { ascending: false });
;
      // Check condition
if ( {) {
  $2
}
        query = query.eq ("talent_id", user.id);
      } else // Check condition
if ( {) {
  $2
}
        query = query.eq ("client_id", user.id);
      }
      const { data, error: fetch_error } = await query;
;
      // Check condition
if (throw fetch_error) {
  $2
}
      // Transform the data to match our project types;
      const transformed_data = data.map ((project: any) => ({
        ...project;
<<<<<<< HEAD
<<<<<<< HEAD

        talent_profile: project && project.talent_profile ? {
          ...project && project.talent_profile,
          full_name: project && project.talent_profile.display_name

        } : undefined

      console && console.error("Error fetching projects:", err);
      setError("Failed to fetch projects: " + err && err.message),
      toast && toast.error("Failed to fetch projects")

=======
          ...project.talent_profile,
          full_name: project.talent_profile.display_name;
        } : undefined;
      }));
;
      set_projects (transformed_data as Project[]);
      set_error (null);
    } catch (err: any) {
      console.error ("Error fetching projects:", err);
      set_error ("Failed to fetch projects: " + err.message),
      toast.error ("Failed to fetch projects");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsLoading (false);
    }
  }

;
  const getProjectById = async (project_id: string): Promise < Project | null> => {

=======
        talent_profile: project && project.talent_profile ? {
          ...project && project.talent_profile,
          full_name: project && project.talent_profile.display_name
        } : undefined
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }));
      setProjects(transformedData as Project[]);
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
;
  const getProjectById = async (project_id: string): Promise < Project | null> => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      console.error ("Error fetching projects:", err);
      set_error ("Failed to fetch projects: " + err.message),
      toast.error ("Failed to fetch projects");
    } finally {
      setIsLoading (false);
    }
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {
      const { data, error } = await supabase;
        .from ("projects");
        .select (`;
          *;
<<<<<<< HEAD
<<<<<<< HEAD


=======
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects: " + err.message)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      })),
      
      setProjects(transformedData as Project[]),
      setError(null)
    } catch (err: any) {
      console.error("Error fetching projects:", err),
      setError("Failed to fetch projects: " + err.message),
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      toast.error("Failed to fetch projects")
    } finally {
      setIsLoading(false)
    }

  },


<<<<<<< HEAD
=======
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select(`
<<<<<<< HEAD

=======
          *;
          job:jobs(title, description);
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url: avatar_url)
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single();
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single(),
      
      if (error) throw error,
      
<<<<<<< HEAD


      // Transform the data to match our project types
      const transformedProject = {
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          job:jobs (title, description);
          talent_profile:profiles ! talent_id (display_name:display_name, professional_title:bio, profile_picture_url: avatar_url),
          client_profile:profiles ! client_id (display_name, avatar_url);
        `);
        .eq ("id", project_id);
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      // Transform the data to match our project types;
      const transformed_project = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        ...data;
<<<<<<< HEAD

        talent_profile: data && data.talent_profile ? {
          ...data && data.talent_profile,
          full_name: data && data.talent_profile.display_name

=======
        talent_profile: data && data.talent_profile ? {
          ...data && data.talent_profile,
          full_name: data && data.talent_profile.display_name
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        ...data;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        } : undefined
      }
      return transformedProject as Project
    } catch (err: any) {
      console && console.error("Error fetching project:", err);
      toast && toast.error("Failed to fetch project details");
      return null
    }
<<<<<<< HEAD


  },



<<<<<<< HEAD
=======
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
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })
<<<<<<< HEAD

<<<<<<< HEAD

=======
        .eq("id", projectId);
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .eq("id", projectId),
      
      if (error) throw error,
      
<<<<<<< HEAD


      // Update the local state

=======
        .eq("id", projectId);
      if (error) throw error;
      // Update the local state
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setProjects(prev => 
        prev && prev.map(project => project && project.id === projectId ? { ...project, status } : project)
      );
      
      toast && toast.success(`Project status updated to ${status}`);
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      ),
      
      toast.success(`Project status updated to ${status}`),

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return true
    } catch (err: any) {
      console && console.error("Error updating project status:", err);
      toast && toast.error("Failed to update project status");
      return false
<<<<<<< HEAD

<<<<<<< HEAD
          ...data.talent_profile,
          full_name: data.talent_profile.display_name;
        } : undefined;
      }
;
      return transformed_project as Project;
    } catch (err: any) {
      console.error ("Error fetching project:", err);
      toast.error ("Failed to fetch project details");
      return null;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
  }
;
  const updateProjectStatus = async (project_id: string, status: ProjectStatus): Promise < boolean> => {
    try {
      const { error } = await supabase;
        .from ("projects");
        .update ({ status });
        .eq ("id", project_id);
;
      // Check condition
if (throw error) {
  $2
}
      // Update the local state;
      set_projects (prev =>;
        prev.map (project => project.id === project_id ? { ...project, status } : project));
;
      toast.success (`Project status updated to ${status}`);
      return true;
    } catch (err: any) {
      console.error ("Error updating project status:", err);
      toast.error ("Failed to update project status");
      return false;
    }
  }
;
  // Fetch projects when component mounts or user changes;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      fetch_projects ();
    }
  }, [user]);
;
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return {
    projects;
    is_loading;
    error;
<<<<<<< HEAD

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

<<<<<<< HEAD
=======

=======
    updateProjectStatus
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Project, ProjectStatus } from "@/types/projects",;
import { toast } from "sonner",;
export function useProjects() {;
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
        .order("created_at", { ascending: false }),;
      if (user.userType === "jobSeeker" || user.userType === "creator") {;
        query = query.eq("talent_id", user.id);
      } else if (user.userType === "employer" || user.userType === "buyer") {;
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
    } catch (err: any) {;
      console.error("Error fetching projects:", err),;
      setError("Failed to fetch projects: " + err.message),;
      toast.error("Failed to fetch projects");
    } finally {;
      setIsLoading(false);
    }
  },;
  const getProjectById = async (projectId: string): Promise<Project | null> => {;
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
    } catch (err: any) {;
      console.error("Error fetching project:", err),;
      toast.error("Failed to fetch project details"),;
      return null;
    }
  },;
  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {;
    try {;
      const { error } = await supabase;
        .from("projects");
        .update({ status });
        .eq("id", projectId),;
      if (error) throw error,;
      // Update the local state;
      setProjects(prev =>;
        prev.map(project => project.id === projectId ? { ...project, status } : project);
      ),;
      toast.success(`Project status updated to ${status}`),;
      return true;
    } catch (err: any) {;
      console.error("Error updating project status:", err),;
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
}