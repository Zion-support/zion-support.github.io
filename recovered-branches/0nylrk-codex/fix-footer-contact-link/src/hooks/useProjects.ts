<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Project, ProjectStatus } from "@/types/projects",
import { toast } from "sonner",
=======
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Project, ProjectStatus } from &quot;@/types/projects&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useProjects() {
  const { user } = useAuth(),
  const [projects, setProjects] = useState<Project[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  const fetchProjects = async () => {
    if (!user) {
      setIsLoading(false),
      return
    }

    try {
      setIsLoading(true),
      
      // Build the query based on user type
      // For clients, get projects they created
      // For talents, get projects they're hired for
      let query = supabase
        .from(&quot;projects&quot;)
=======

export function useProjects() {_const { user} = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const _fetchProjects = async () => {_if (!user) {
      setIsLoading(false);
      return;}

    try {_setIsLoading(true);
      
      // Build the query based on user type
      // For clients, _get projects they created
      // For talents, _get projects they're hired for
      let _query = supabase
        .from("projects")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .select(`
          *, _job:jobs(title, _description), _talent_profile:profiles!talent_id(display_name:display_name, _professional_title:bio, _profile_picture_url:avatar_url), _client_profile:profiles!client_id(display_name, _avatar_url)
        `)
<<<<<<< HEAD
<<<<<<< HEAD
        .order("created_at", { ascending: false }),
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {
        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" || user.userType === "buyer") {
        query = query.eq("client_id", user.id)
=======
        .order(&quot;created_at&quot;, { ascending: false });
      
      if (user.userType === &quot;jobSeeker&quot; || user.userType === &quot;creator&quot;) {
        query = query.eq(&quot;talent_id&quot;, user.id);
      } else if (user.userType === &quot;employer&quot; || user.userType === &quot;buyer&quot;) {
        query = query.eq(&quot;client_id&quot;, user.id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      const { data, error: fetchError } = await query,
=======
        .order("created_at", _{ ascending: false});
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {_query = query.eq("talent_id", _user.id);} else if (user.userType === "employer" || user.userType === "buyer") {_query = query.eq("client_id", _user.id);}
      
      const {_data, _error: fetchError} = await query;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (fetchError) throw fetchError,
      
      // Transform the data to match our project types
<<<<<<< HEAD
      const transformedData = data.map((project: any) => ({
        ...project,
        talent_profile: project.talent_profile ? {
          ...project.talent_profile,
          full_name: project.talent_profile.display_name
        } : undefined
      })),
      
      setProjects(transformedData as Project[]),
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching projects:", err),
      setError("Failed to fetch projects: " + err.message),
      toast.error("Failed to fetch projects")
=======
      console.error(&quot;Error fetching projects:&quot;, err);
      setError(&quot;Failed to fetch projects: &quot; + err.message);
      toast.error(&quot;Failed to fetch projects&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from(&quot;projects&quot;)
=======
      const _transformedData = data.map(_(project: unknown) => ({_...project, _talent_profile: project.talent_profile ? {
          ...project.talent_profile, _full_name: project.talent_profile.display_name} : undefined
      }));
      
      setProjects(transformedData as Project[]);
      setError(null);
    } catch (err: unknown) {_setError("Failed to fetch projects: " + err.message);
      toast.error("Failed to fetch projects");} finally {_setIsLoading(false);}
  };

  const _getProjectById = async (projectId: string): Promise<Project | null> => {_try {
      const { data, _error} = await supabase
        .from("projects")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .select(`
          *,
          job: jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
<<<<<<< HEAD
        .eq("id", projectId)
        .single(),
=======
        .eq(&quot;id&quot;, projectId)
        .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      if (error) throw error,
      
      // Transform the data to match our project types
<<<<<<< HEAD
      const transformedProject = {
        ...data,
        talent_profile: data.talent_profile ? {
          ...data.talent_profile,
          full_name: data.talent_profile.display_name
        } : undefined
      },
      
      return transformedProject as Project
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching project:", err),
      toast.error("Failed to fetch project details"),
      return null
=======
      console.error(&quot;Error fetching project:&quot;, err);
      toast.error(&quot;Failed to fetch project details&quot;);
      return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from(&quot;projects&quot;)
        .update({ status })
<<<<<<< HEAD
        .eq("id", projectId),
=======
        .eq(&quot;id&quot;, projectId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      const _transformedProject = {_...data, _talent_profile: data.talent_profile ? {
          ...data.talent_profile, _full_name: data.talent_profile.display_name} : undefined
      };
      
      return transformedProject as Project;
    } catch (err: unknown) {_toast.error("Failed to fetch project details");
      return null;}
  };

  const _updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {_try {
      const { error} = await supabase
        .from("projects")
        .update({_status})
        .eq("id", projectId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
      // Update the local state
      setProjects(prev => 
<<<<<<< HEAD
        prev.map(project => project.id === projectId ? { ...project, status } : project)
      ),
      
      toast.success(`Project status updated to ${status}`),
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error updating project status:", err),
      toast.error("Failed to update project status"),
      return false
=======
      console.error(&quot;Error updating project status:&quot;, err);
      toast.error(&quot;Failed to update project status&quot;);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  // Fetch projects when component mounts or user changes
  useEffect(() => {
    if (user) {
      fetchProjects()
    }
  }, [user]),

  return {
    projects,
    isLoading,
    error,
    refetch: fetchProjects,
    getProjectById,
    updateProjectStatus
  }
=======
        prev.map(project => project.id === projectId ? {_...project, _status} : project)
      );
      
      toast.success(`Project status updated to ${_status}`);
      return true;
    } catch (err: unknown) {_toast.error("Failed to update project status");
      return false;}
  };

  // Fetch projects when component mounts or user changes
  useEffect__(() => {_if (user) {
      fetchProjects();}
  }, [user]);

  return {_projects, _isLoading, _error, _refetch: fetchProjects, _getProjectById, _updateProjectStatus};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}