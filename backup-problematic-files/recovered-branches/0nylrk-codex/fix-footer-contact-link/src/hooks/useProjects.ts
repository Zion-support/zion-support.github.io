
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

}