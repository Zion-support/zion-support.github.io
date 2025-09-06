
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",

  const [error, setError] = useState<string | null>(null);
  const fetchProjects = async () => {
    if (!user) {
      setIsLoading(false),
      return
    }
    try {

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

      toast.error("Failed to fetch projects")
    } finally {
      setIsLoading(false)
    }

  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select(`

      // Transform the data to match our project types
      const transformedProject = {
        ...data,
        talent_profile: data.talent_profile ? {
          ...data.talent_profile
          full_name: data.talent_profile.display_name
        } : undefined

      return transformedProject as Project
    } catch (err: any) {
      console.error("Error fetching project:", err),
      toast.error("Failed to fetch project details"),
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

      return true
    } catch (err: any) {
      console.error("Error updating project status:", err),
      toast.error("Failed to update project status"),
      return false

  }
}