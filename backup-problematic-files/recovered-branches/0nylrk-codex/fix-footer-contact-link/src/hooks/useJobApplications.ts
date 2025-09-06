
    }
  },;
  ;
  const updateApplicationStatus = async (applicationId:string, status:ApplicationStatus) => {;
    try {;
      const { error } = await supabase;
        .from("job_applications");
        .update({ status });
        .eq("id", applicationId),;
      ;
      if (error) throw error,;
      ;
      // Update the local state;
      setApplications(prev => ;
        prev.map(app => app.id === applicationId ? { ...app, status } app);
      ),;
      ;
      toast.success(`Application status updated to ${status}`),;
      return true,;
    } catch (err:any) {;
      console.error("Error updating application status:", err),;
      toast.error("Failed to update application status:" + err.message),;
      return false;
    }
  },;
  ;
  const markApplicationAsViewed = async (applicationId:string) => {;
    try {;
      const { error } = await supabase;
        .from("job_applications");
        .update({ ;
          status:"viewed", ;
          viewed_at:new Date().toISOString() ;
        });
        .eq("id", applicationId);

