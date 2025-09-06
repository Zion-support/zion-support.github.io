<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Project, ProjectStatus } from "@/types/projects";
=======

import { useState, useEffect } from "react","
import { supabase } from "@/integrations/supabase/client","
import { useAuth } from "@/hooks/useAuth",";
import { Project, ProjectStatus } from "@/types/projects";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "sonner";
export function useProjects() {};
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]),
  const [isLoading, setIsLoading] = useState(true);"
import { Project, ProjectStatus } from "@/types/projects","
import { toast } from "sonner",
export function useProjects() {}
  const { user } = useAuth(),
  const [projects, setProjects] = useState<Project[]>([]),
  const [isLoading, setIsLoading] = useState(true),
<<<<<<< HEAD
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
=======
  const [error, setError] = useState<string | null>(null),




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const [error, setError] = useState<string | null>(null);
  const fetchProjects = async () => {
    if (!user) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading(false);
      return
    }
    try {

<<<<<<< HEAD
=======
<<<<<<< HEAD
      setIsLoading(true);
      setIsLoading(true),
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
;
;
  const [error, setError] = useState<string | null>(null);
  const fetchProjects = async () => {}
    if (!user) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading(true),
      


<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Build the query based on user type
=======
  const [error, setError] = useState<string | null>(null),      // Build the query based on user type
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [error, setError] = useState<string | null>(null),      // Build the query based on user type
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      // Build the query based on user type
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // For clients, get projects they created
      // For talents, get projects they're hired for
      let query = supabase
=======



      // Build the query based on user type;
      // For clients, get projects they created;
      // For talents, get projects they're hired for;
      let query = supabase"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .from("projects")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .select(`
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      "
      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {"
        query = query && query.eq("talent_id", user && user.id)"
      } else if (user && user.userType === "employer" || user && user.userType === "buyer") {"
        query = query && query.eq("client_id", user && user.id)


          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)`
        `)"
        .order("created_at", { ascending: false }),
<<<<<<< HEAD
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" |user.userType === "buyer") {
        query = query.eq("client_id", user.id)
      }
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      "
      if (user.userType === "jobSeeker" || user.userType === "creator") {}
"
        query = query.eq("talent_id", user.id)"
      } else if (user.userType === "employer" |user.userType === "buyer") {"
        query = query.eq("client_id", user.id)
      }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Transform the data to match our project types
      const transformedData = data.map((project: any) => ({
        ...project,
        talent_profile: project.talent_profile ? {
          ...project.talent_profile
          full_name: project.talent_profile.display_name
        } : undefined
<<<<<<< HEAD

      // Transform the data to match our project types
      const transformedData = data && data.map((project: any) => ({
        ...project;
=======
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Transform the data to match our project types
=======
        .select(`        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" |user.userType === "buyer") {
        query = query.eq("client_id", user.id)
      }      // Transform the data to match our project types
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .select(`        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" |user.userType === "buyer") {
        query = query.eq("client_id", user.id)
      }      // Transform the data to match our project types
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        .select(`

      
      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
        query = query && query.eq("talent_id", user && user.id)
      } else if (user && user.userType === "employer" || user && user.userType === "buyer") {
        query = query && query.eq("client_id", user && user.id)

      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order("created_at", { ascending: false }),
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {

        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" |user.userType === "buyer") {
        query = query.eq("client_id", user.id)
      }

      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      

      // Transform the data to match our project types
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const transformedData = data && data.map((project: any) => ({
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { use_auth } from '@/hooks / use_auth';
import { Project, ProjectStatus } from '@/types / projects';
=======




      // Transform the data to match our project types;
      const transformedData = data && data.map((project: any) => ({'
import { useState, useEffect } from './react';'
import { supabase } from '@/integrations / supabase / client';'
import { use_auth } from '@/hooks / use_auth';'
import { Project, ProjectStatus } from '@/types / projects';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
      const transformed_data = data.map ((project: any) => ({}
        ...project;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        talent_profile: project && project.talent_profile ? {
          ...project && project.talent_profile,
          full_name: project && project.talent_profile.display_name

        } : undefined
<<<<<<< HEAD
=======

      console && console.error("Error fetching projects:", err);
      setError("Failed to fetch projects: " + err && err.message),
      toast && toast.error("Failed to fetch projects")

    } finally {
=======

    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsLoading (false);
    }
  }

;
<<<<<<< HEAD
  const getProjectById = async (project_id: string): Promise < Project | null> => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        talent_profile: project && project.talent_profile ? {
          ...project && project.talent_profile,
          full_name: project && project.talent_profile.display_name
        } : undefined
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }));
      setProjects(transformedData as Project[]);
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD
;
  const getProjectById = async (project_id: string): Promise < Project | null> => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
;
  const getProjectById = async (project_id: string): Promise < Project | null> => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      console.error ("Error fetching projects:", err);
      set_error ("Failed to fetch projects: " + err.message),
      toast.error ("Failed to fetch projects");
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    try {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const { data, error } = await supabase;
        .from ("projects");
=======
  const getProjectById = async (project_id: string): Promise < Project | null> => {}
        talent_profile: project && project.talent_profile ? {}
          ...project && project.talent_profile,
          full_name: project && project.talent_profile.display_name;
        } : undefined;
      }));
      setProjects(transformedData as Project[]);
      setError(null)
    } catch (err: any) {}
    try {}
      const { data, error } = await supabase;"
        .from ("projects");`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .select (`;
          *;


      })),
      
      setProjects(transformedData as Project[]),
      setError(null)
    } catch (err: any) {"
      console.error("Error fetching projects:", err),"
      setError("Failed to fetch projects: " + err.message),
<<<<<<< HEAD
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
      toast.error("Failed to fetch projects")
    } finally {}
=======

      toast.error("Failed to fetch projects")
    } finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading(false)
    }

  },


<<<<<<< HEAD
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select(`
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const getProjectById = async (projectId: string): Promise<Project | null> => {}
    try {}
      const { data, error } = await supabase"
        .from("projects")`
        .select(`

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)`
        `)"
        .eq("id", projectId)
        .single(),
      
      if (error) throw error,
      

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      }
      },
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      // Transform the data to match our project types
      const transformedProject = {          job:jobs (title, description);
=======
          job:jobs (title, description);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      // Transform the data to match our project types
      const transformedProject = {
          job:jobs (title, description);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      const transformed_project = {
        ...data;

        talent_profile: data && data.talent_profile ? {
          ...data && data.talent_profile,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          full_name: data && data.talent_profile.display_name
=======
      const transformed_project = {}
        ...data;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        ...data;

        } : undefined;
      }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return transformedProject as Project
    } catch (err: any) {
      console && console.error("Error fetching project:", err);
=======
      return transformedProject as Project;
    } catch (err: any) {"
      console && console.error("Error fetching project:", err);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast && toast.error("Failed to fetch project details");
      return null;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
      // Update the local state
      setProjects(prev =>
        prev.map(project => project.id === projectId ? { ...project, status } : project)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
        .eq("id", projectId);
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {}
    try {}
      const { error } = await supabase"
        .from("projects")
        .update({ status })
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .eq("id", projectId),
      
      if (error) throw error,
      

      setProjects(prev => 
        prev && prev.map(project => project && project.id === projectId ? { ...project, status } : project)
      );
      `
      toast && toast.success(`Project status updated to ${status}`);


      ),
      `
      toast.success(`Project status updated to ${status}`),

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
          full_name: data && data.talent_profile.display_name  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })      return true
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          full_name: data && data.talent_profile.display_name  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })      return true
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          full_name: data && data.talent_profile.display_name

        ...data;
        } : undefined
      }
      return transformedProject as Project
    } catch (err: any) {
      console && console.error("Error fetching project:", err);
      toast && toast.error("Failed to fetch project details");
      return null
    }


  },



  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })


        .eq("id", projectId),
      
      if (error) throw error,
      


      // Update the local state

      setProjects(prev => 
        prev && prev.map(project => project && project.id === projectId ? { ...project, status } : project)
      );
      
      toast && toast.success(`Project status updated to ${status}`);


      ),
      
      toast.success(`Project status updated to ${status}`),

      return true
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } catch (err: any) {
      console && console.error("Error updating project status:", err);
      toast && toast.error("Failed to update project status");
      return false
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          ...data.talent_profile,
          full_name: data.talent_profile.display_name;
        } : undefined;
      }
;
      return transformed_project as Project;
    } catch (err: any) {
      console.error ("Error fetching project:", err);
      toast.error ("Failed to fetch project details");
<<<<<<< HEAD
      return null;  return {
=======



      return true;
    } catch (err: any) {"
      console && console.error("Error updating project status:", err);"
      toast && toast.error("Failed to update project status");
      return false;
    }
  }
;
  const updateProjectStatus = async (project_id: string, status: ProjectStatus): Promise < boolean> => {}
    try {}
      const { error } = await supabase;"
        .from ("projects");
        .update ({ status });"
        .eq ("id", project_id);
;
      // Check condition;
if (throw error) {}
  $2;
=======
      return null;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
      // Update the local state;
      set_projects (prev =>;
        prev.map (project => project.id === project_id ? { ...project, status } : project));
<<<<<<< HEAD
;`
      toast.success (`Project status updated to ${status}`);
      return true;
    } catch (err: any) {"
      console.error ("Error updating project status:", err);"
=======
;
      toast.success (`Project status updated to ${status}`);
      return true;
    } catch (err: any) {
      console.error ("Error updating project status:", err);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error ("Failed to update project status");
      return false;
    }
  }
;
  // Fetch projects when component mounts or user changes;
<<<<<<< HEAD
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
=======
  useEffect (() => {
    // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
      fetch_projects ();
    }
  }, [user]);
;

<<<<<<< HEAD


  return {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    projects;
    is_loading;
<<<<<<< HEAD
<<<<<<< HEAD
    error;
"
import { useState, useEffect } from "react",;"
import { supabase } from "@/integrations/supabase/client",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Project, ProjectStatus } from "@/types/projects",;"
import { toast } from "sonner",;
export function useProjects() { return null; }
=======
  return {
    projects;
    is_loading;
    error;

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

import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Project, ProjectStatus } from "@/types/projects",;
import { toast } from "sonner",;
export function useProjects() {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      // For clients, get projects they created;'
      // For talents, get projects they're hired for;
      let query = supabase;"
        .from("projects");`
=======
      // For clients, get projects they created;
      // For talents, get projects they're hired for;
      let query = supabase;
        .from("projects");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .select(`;
          *,;
          job:jobs(title, description),;
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),;
<<<<<<< HEAD
          client_profile:profiles!client_id(display_name, avatar_url);`
        `);"
        .order("created_at", { ascending: false }),;"
      if (user.userType === "jobSeeker" || user.userType === "creator") {;"
        query = query.eq("talent_id", user.id);"
      } else if (user.userType === "employer" || user.userType === "buyer") {;"
=======
          client_profile:profiles!client_id(display_name, avatar_url);
        `);
        .order("created_at", { ascending: false }),;
      if (user.userType === "jobSeeker" || user.userType === "creator") {;
        query = query.eq("talent_id", user.id);
      } else if (user.userType === "employer" || user.userType === "buyer") {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    } catch (err: any) {;"
      console.error("Error fetching projects:", err),;"
      setError("Failed to fetch projects: " + err.message),;"
=======
    } catch (err: any) {;
      console.error("Error fetching projects:", err),;
      setError("Failed to fetch projects: " + err.message),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error("Failed to fetch projects");
    } finally {;
      setIsLoading(false);
    }
  },;
  const getProjectById = async (projectId: string): Promise<Project | null> => {;
    try {;
<<<<<<< HEAD
      const { data, error } = await supabase;"
        .from("projects");`
=======
      const { data, error } = await supabase;
        .from("projects");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .select(`;
          *,;
          job:jobs(title, description),;
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),;
<<<<<<< HEAD
          client_profile:profiles!client_id(display_name, avatar_url);`
        `);"
=======
          client_profile:profiles!client_id(display_name, avatar_url);
        `);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    } catch (err: any) {;"
      console.error("Error fetching project:", err),;"
=======
    } catch (err: any) {;
      console.error("Error fetching project:", err),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error("Failed to fetch project details"),;
      return null;
    }
  },;
  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {;
    try {;
<<<<<<< HEAD
      const { error } = await supabase;"
        .from("projects");
        .update({ status });"
=======
      const { error } = await supabase;
        .from("projects");
        .update({ status });
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .eq("id", projectId),;
      if (error) throw error,;
      // Update the local state;
      setProjects(prev =>;
        prev.map(project => project.id === projectId ? { ...project, status } : project);
<<<<<<< HEAD
      ),;`
      toast.success(`Project status updated to ${status}`),;
      return true;
    } catch (err: any) {;"
      console.error("Error updating project status:", err),;"
=======
      ),;
      toast.success(`Project status updated to ${status}`),;
      return true;
    } catch (err: any) {;
      console.error("Error updating project status:", err),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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


  }
<<<<<<< HEAD
=======
    refetch: fetch_projects;
    getProjectById,
    updateProjectStatus;
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
=======
    error;  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    error;  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
=======
}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
