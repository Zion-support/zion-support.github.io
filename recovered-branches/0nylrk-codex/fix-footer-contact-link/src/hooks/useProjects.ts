


<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const [error, setError] = useState<string | null>(null);
  const fetchProjects = async () => {
    if (!user) {
<<<<<<< HEAD
<<<<<<< HEAD

      setIsLoading(true),
      


      setIsLoading(false),
=======
      setIsLoading(false);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return
    }
    try {
      setIsLoading(true);
      setIsLoading(true),
      
<<<<<<< HEAD
=======
      setIsLoading(false);
      return
    }
    try {


      setIsLoading(true),
      


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Build the query based on user type
      // For clients, get projects they created
      // For talents, get projects they're hired for
      let query = supabase
        .from("projects")
        .select(`
<<<<<<< HEAD
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          *;
          job:jobs(title, description);
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url: avatar_url)
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order("created_at", { ascending: false });
      if (user.userType === "jobSeeker" |user.userType === "creator") {
<<<<<<< HEAD
=======
      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order("created_at", { ascending: false }),
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" |user.userType === "buyer") {
        query = query.eq("client_id", user.id)
      }
<<<<<<< HEAD
<<<<<<< HEAD
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Transform the data to match our project types
      const transformedData = data.map((project: any) => ({
        ...project,
        talent_profile: project.talent_profile ? {
          ...project.talent_profile
          full_name: project.talent_profile.display_name
        } : undefined
<<<<<<< HEAD
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
        talent_profile: project && project.talent_profile ? {
          ...project && project.talent_profile,
          full_name: project && project.talent_profile.display_name
        } : undefined
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }));
      setProjects(transformedData as Project[]);
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
;
  const getProjectById = async (project_id: string): Promise < Project | null> => {
    try {
      const { data, error } = await supabase;
        .from ("projects");
        .select (`;
          *;
<<<<<<< HEAD
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects: " + err.message)
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects: " + err.message)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      })),
      
      setProjects(transformedData as Project[]),
      setError(null)
    } catch (err: any) {
      console.error("Error fetching projects:", err),
      setError("Failed to fetch projects: " + err.message),
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast.error("Failed to fetch projects")
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD

  },


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select(`
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          *;
          job:jobs(title, description);
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url: avatar_url)
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single();
      if (error) throw error;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single(),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
=======


      // Transform the data to match our project types
      const transformedProject = {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      // Transform the data to match our project types
      const transformedProject = {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        ...data;
        talent_profile: data && data.talent_profile ? {
          ...data && data.talent_profile,
          full_name: data && data.talent_profile.display_name
        } : undefined
      }
        } : undefined

      },
      

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        ...data;

        talent_profile: data && data.talent_profile ? {
          ...data && data.talent_profile,
          full_name: data && data.talent_profile.display_name

        } : undefined
      }
      },
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return transformedProject as Project
    } catch (err: any) {
      console && console.error("Error fetching project:", err);
      toast && toast.error("Failed to fetch project details");
      return null
    }
<<<<<<< HEAD


  },



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
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })
<<<<<<< HEAD

<<<<<<< HEAD
        .eq("id", projectId);
      if (error) throw error;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .eq("id", projectId);
      if (error) throw error;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .eq("id", projectId),
      
      if (error) throw error,
      
<<<<<<< HEAD
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

      setProjects(prev => 
        prev && prev.map(project => project && project.id === projectId ? { ...project, status } : project)
      );
      
      toast && toast.success(`Project status updated to ${status}`);

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ),
      
      toast.success(`Project status updated to ${status}`),

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      // Update the local state
      setProjects(prev =>
        prev.map(project => project.id === projectId ? { ...project, status } : project)
      );
      toast.success(`Project status updated to ${status}`);
      ),
      
      toast.success(`Project status updated to ${status}`),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return true
    } catch (err: any) {
      console && console.error("Error updating project status:", err);
      toast && toast.error("Failed to update project status");
      return false
<<<<<<< HEAD

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
      return null;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return {
    projects;
    is_loading;
    error;

<<<<<<< HEAD
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

    updateProjectStatus
=======
    refetch: fetch_projects;
    getProjectById,
    updateProjectStatus;

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    updateProjectStatus
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}