      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
      // Transform the data to match our project types
      const transformedData = data && data.map((project: any) => ({
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        ...project;
        } : undefined
      }));
      setProjects(transformedData as Project[]);
      setError(null)
    } catch (err: any) {
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
    try {
      const { data, error } = await supabase;
        .from ("projects");
        .select (`;
          *;
        ...data;
        } : undefined
      }
      return transformedProject as Project
    } catch (err: any) {
      console && console.error("Error fetching project:", err);
      toast && toast.error("Failed to fetch project details");
      return null
    }
  }
  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })
        .eq("id", projectId);
      if (error) throw error;
      // Update the local state
      return true
    } catch (err: any) {
      console && console.error("Error updating project status:", err);
      toast && toast.error("Failed to update project status");
      return false
    }
  }
  // Fetch projects when component mounts or user changes
  useEffect(() => {
    if (user) {
      fetchProjects()
    }
  }, [user]);
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
    projects;
    is_loading;
    error;
  }
}