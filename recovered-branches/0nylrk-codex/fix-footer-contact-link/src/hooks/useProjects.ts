

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",

import { Project, ProjectStatus } from "@/types/projects";

      const transformed_data = data.map ((project: any) => ({

          full_name: data && data.talent_profile.display_name  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })      return true
    } catch (err: any) {
      console && console.error("Error updating project status:", err);
      toast && toast.error("Failed to update project status");
      return false
      return null;  return {
    projects;
    is_loading;
    error;  }
}
