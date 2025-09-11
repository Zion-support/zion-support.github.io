


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const [error, setError] = useState<string | null>(null);
  const fetchProjects = async () => {
    if (!user) {
      setIsLoading(true),
      


      setIsLoading(false),
=======
      setIsLoading(false);      return
    }
    try {
      setIsLoading(true);
      setIsLoading(true),
      

      setIsLoading(true),
      

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Build the query based on user type
      // For clients, get projects they created
      // For talents, get projects they're hired for
      let query = supabase
        .from("projects")
        .select(`
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
        query = query && query.eq("talent_id", user && user.id)
      } else if (user && user.userType === "employer" || user && user.userType === "buyer") {
        query = query && query.eq("client_id", user && user.id)

=======          *;
          job:jobs(title, description);
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url: avatar_url)
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order("created_at", { ascending: false });
      if (user.userType === "jobSeeker" |user.userType === "creator") {=======          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order("created_at", { ascending: false }),
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" |user.userType === "buyer") {
        query = query.eq("client_id", user.id)
      }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
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
=======      }));
      setProjects(transformedData as Project[]);
      setError(null)
    } catch (err: any) {
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      toast.error("Failed to fetch projects")
    } finally {
      setIsLoading(false)
    }

==============
  }
  },
  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select(`
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single(),
      
      if (error) throw error,
      

      // Transform the data to match our project types
      const transformedProject = {
==============
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
      },
      

=======        ...data;

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
  },



==============
  }
  },
  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .eq("id", projectId);
      if (error) throw error;        .eq("id", projectId),
      
      if (error) throw error,
      
=======


      // Update the local state

      setProjects(prev => 
        prev && prev.map(project => project && project.id === projectId ? { ...project, status } : project)
      );
      
      toast && toast.success(`Project status updated to ${status}`);

=======
      ),
      
      toast.success(`Project status updated to ${status}`),

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}