import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Project, ProjectStatus } from &quot;@/types/projects&quot;;
import { toast } from &quot;sonner&quot;;

export function useProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      
      // Build the query based on user type
      // For clients, get projects they created
      // For talents, get projects they're hired for
      let query = supabase
        .from(&quot;projects&quot;)
        .select(`
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order(&quot;created_at&quot;, { ascending: false });
      
      if (user.userType === &quot;jobSeeker&quot; || user.userType === &quot;creator&quot;) {
        query = query.eq(&quot;talent_id&quot;, user.id);
      } else if (user.userType === &quot;employer&quot; || user.userType === &quot;buyer&quot;) {
        query = query.eq(&quot;client_id&quot;, user.id);
      }
      
      const { data, error: fetchError } = await query;
      
      if (fetchError) throw fetchError;
      
      // Transform the data to match our project types
      const transformedData = data.map((project: any) => ({
        ...project,
        talent_profile: project.talent_profile ? {
          ...project.talent_profile,
          full_name: project.talent_profile.display_name
        } : undefined
      }));
      
      setProjects(transformedData as Project[]);
      setError(null);
    } catch (err: any) {
      console.error(&quot;Error fetching projects:&quot;, err);
      setError(&quot;Failed to fetch projects: &quot; + err.message);
      toast.error(&quot;Failed to fetch projects&quot;);
    } finally {
      setIsLoading(false);
    }
  };

  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from(&quot;projects&quot;)
        .select(`
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq(&quot;id&quot;, projectId)
        .single();
      
      if (error) throw error;
      
      // Transform the data to match our project types
      const transformedProject = {
        ...data,
        talent_profile: data.talent_profile ? {
          ...data.talent_profile,
          full_name: data.talent_profile.display_name
        } : undefined
      };
      
      return transformedProject as Project;
    } catch (err: any) {
      console.error(&quot;Error fetching project:&quot;, err);
      toast.error(&quot;Failed to fetch project details&quot;);
      return null;
    }
  };

  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from(&quot;projects&quot;)
        .update({ status })
        .eq(&quot;id&quot;, projectId);
      
      if (error) throw error;
      
      // Update the local state
      setProjects(prev => 
        prev.map(project => project.id === projectId ? { ...project, status } : project)
      );
      
      toast.success(`Project status updated to ${status}`);
      return true;
    } catch (err: any) {
      console.error(&quot;Error updating project status:&quot;, err);
      toast.error(&quot;Failed to update project status&quot;);
      return false;
    }
  };

  // Fetch projects when component mounts or user changes
  useEffect(() => {
    if (user) {
      fetchProjects();
    }
  }, [user]);

  return {
    projects,
    isLoading,
    error,
    refetch: fetchProjects,
    getProjectById,
    updateProjectStatus
  };
}