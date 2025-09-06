import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Project, ProjectStatus } from "@/types/projects";
import { toast } from "sonner";
export function useProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]),
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
  const fetchProjects = async () => {
    if (!user) {
      setIsLoading(false);
      return
    }
    try {
      setIsLoading(true);
      // Build the query based on user type
      // For clients, get projects they created
      // For talents, get projects they're hired for
      let query = supabase
        .from("projects")
        .select(`
          *;
          job:jobs(title, description);
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url: avatar_url)
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order("created_at", { ascending: false });
<<<<<<< HEAD
      if (user.userType === "jobSeeker" |user.userType === "creator") {
        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" |user.userType === "buyer") {
        query = query.eq("client_id", user.id)
=======
      
      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
        query = query && query.eq("talent_id", user && user.id)
      } else if (user && user.userType === "employer" || user && user.userType === "buyer") {
        query = query && query.eq("client_id", user && user.id)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
      // Transform the data to match our project types
      const transformedData = data && data.map((project: any) => ({
        ...project;
<<<<<<< HEAD
        talent_profile: project.talent_profile ? {
          ...project.talent_profile
          full_name: project.talent_profile.display_name
=======
        talent_profile: project && project.talent_profile ? {
          ...project && project.talent_profile,
          full_name: project && project.talent_profile.display_name
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        } : undefined
      }));
      setProjects(transformedData as Project[]);
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects: " + err.message)
      toast.error("Failed to fetch projects")
=======
      console && console.error("Error fetching projects:", err);
      setError("Failed to fetch projects: " + err && err.message),
      toast && toast.error("Failed to fetch projects")
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } finally {
      setIsLoading(false)
    }
  }
  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select(`
          *;
          job:jobs(title, description);
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url: avatar_url)
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single();
      if (error) throw error;
      // Transform the data to match our project types
      const transformedProject = {
        ...data;
<<<<<<< HEAD
        talent_profile: data.talent_profile ? {
          ...data.talent_profile
          full_name: data.talent_profile.display_name
=======
        talent_profile: data && data.talent_profile ? {
          ...data && data.talent_profile,
          full_name: data && data.talent_profile.display_name
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
      setProjects(prev =>
        prev.map(project => project.id === projectId ? { ...project, status } : project)
      );
      toast.success(`Project status updated to ${status}`);
=======
      setProjects(prev => 
        prev && prev.map(project => project && project.id === projectId ? { ...project, status } : project)
      );
      
      toast && toast.success(`Project status updated to ${status}`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
  return {
    projects;
    isLoading;
    error;
    refetch: fetchProjects;
    getProjectById

    updateProjectStatus
  }
}