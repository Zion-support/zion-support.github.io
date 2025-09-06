
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  const [error, setError] = useState<string | null>(null);
  const fetchProjects = async () => {
    if (!user) {
      setIsLoading(false);
      return
    }
    try {

=======

      setIsLoading(true),
      


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Build the query based on user type
      // For clients, get projects they created
      // For talents, get projects they're hired for
      let query = supabase
        .from("projects")
        .select(`

        query = query.eq("talent_id", user.id)
      } else if (user.userType === "employer" |user.userType === "buyer") {
        query = query.eq("client_id", user.id)
      }

      // Transform the data to match our project types
      const transformedData = data.map((project: any) => ({
        ...project,
        talent_profile: project.talent_profile ? {
          ...project.talent_profile
          full_name: project.talent_profile.display_name
        } : undefined

      // Transform the data to match our project types
      const transformedData = data && data.map((project: any) => ({
        ...project;

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

    try {
      const { data, error } = await supabase;
        .from ("projects");
        .select (`;
          *;


      })),
      
      setProjects(transformedData as Project[]),
      setError(null)
    } catch (err: any) {
      console.error("Error fetching projects:", err),
      setError("Failed to fetch projects: " + err.message),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      toast.error("Failed to fetch projects")
    } finally {
      setIsLoading(false)
    }

  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select(`

=======
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single(),
      
      if (error) throw error,
      


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Transform the data to match our project types
      const transformedProject = {
        ...data;

        talent_profile: data && data.talent_profile ? {
          ...data && data.talent_profile,
          full_name: data && data.talent_profile.display_name

        } : undefined

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return transformedProject as Project
    } catch (err: any) {
      console && console.error("Error fetching project:", err);
      toast && toast.error("Failed to fetch project details");
      return null
    }

  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })

      // Update the local state
      setProjects(prev =>
        prev.map(project => project.id === projectId ? { ...project, status } : project)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return true
    } catch (err: any) {
      console && console.error("Error updating project status:", err);
      toast && toast.error("Failed to update project status");
      return false

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
}