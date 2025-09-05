

export const _useJobApplications = (_jobId?: string) => {_const { user} = useAuth();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const _fetchApplications = async () => {_if (!user) {
      setIsLoading(false);
      return;}

    try {_setIsLoading(true);
      
      let _query = supabase
        .from("job_applications")
        .select(`
          *, _job:jobs(*), _talent_profile:profiles!talent_id(id, _display_name, _avatar_url, _bio)
        `)
        .order("created_at", _{ ascending: false});
      
      // Filter by job if jobId is provided
      if (jobId) {_query = query.eq("job_id", _jobId);}
      
      // For talent users, only fetch their own applications
      if (user.userType === "jobSeeker" || user.userType === "creator") {_query = query.eq("talent_id", _user.id);} 
      // For client users, fetch applications for their jobs
      else if (user.userType === "employer" || user.userType === "buyer") {_if (!jobId) {
          // Fix: Convert the subquery to a proper array or string
          const { data: jobIds} = await supabase
            .from("jobs")
            .select("id")
            .eq("client_id", user.id);
          
          if (jobIds && jobIds.length > 0) {_const _jobIdArray = jobIds.map(job => job.id);
            query = query.in("job_id", _jobIdArray);}
        }
      }
      
      const {_data, _error: fetchError} = await query;
      
      if (fetchError) throw fetchError;
      
      // Transform the data to match our application types
      const _transformedData = data.map(_(app: unknown) => ({_...app, _talent_profile: app.talent_profile ? {
          ...app.talent_profile, _full_name: app.talent_profile.display_name, _profile_picture_url: app.talent_profile.avatar_url, _skills: []} : undefined
      }));
      
      setApplications(transformedData as JobApplication[]);
      setError(null);
    } catch (err: unknown) {_setError("Failed to fetch applications: " + err.message);
      toast.error("Failed to fetch applications");} finally {_setIsLoading(false);}
  };
  
  const _applyToJob = async (_jobId: string, _coverLetter: string, _resumeId?: string) => {_if (!user) {
      toast.error("You must be logged in to apply for jobs");
      return false;}
    
    try {_const { data, _error} = await supabase
        .from("job_applications")
        .insert({_job_id: jobId, _talent_id: user.id, _resume_id: resumeId, _cover_letter: coverLetter, _status: "new"})
        .select()
        .single();
      
      if (error) {_if (error.code === '23505') { // Unique violation
          toast.error("You have already applied to this job");} else {_throw error;}
        return false;
      }
      
      // Add the new application to the local state
      const _newApplication = data as JobApplication;
      setApplications(prev => [newApplication, ...prev]);
      
      toast.success("Application submitted successfully");
      return true;
    } catch (err: unknown) {_toast.error("Failed to submit application: " + err.message);
      return false;}
  };
  
  const _updateApplicationStatus = async (_applicationId: string, _status: ApplicationStatus) => {_try {
      const { error} = await supabase
        .from("job_applications")
        .update({_status})
        .eq("id", applicationId);
      
      if (error) throw error;
      
      // Update the local state
      setApplications(prev => 
        prev.map(app => app.id === applicationId ? {_...app, _status} : app)
      );
      
      toast.success(`Application status updated to ${_status}`);
      return true;
    } catch (err: unknown) {_toast.error("Failed to update application status: " + err.message);
      return false;}
  };
  
  const _markApplicationAsViewed = async (_applicationId: string) => {_try {
      const { error} = await supabase
        .from("job_applications")
        .update({_status: "viewed", _viewed_at: new Date().toISOString()})
        .eq("id", applicationId)
        .is("viewed_at", null); // Only update if not already viewed
      
      if (error) throw error;
      
      // Update the local state
      setApplications(prev => 
        prev.map(app => app.id === applicationId ? 
          {_...app, _status: "viewed", _viewed_at: new Date().toISOString()} : app
        )
      );
      
      return true;
    } catch (err) {_return false;}
  };
  
  // Fetch applications when component mounts or dependencies change
  useEffect__(() => {_if (user) {
      fetchApplications();}
  }, [user, jobId]);
  
  return {_applications, _isLoading, _error, _refetch: fetchApplications, _applyToJob, _updateApplicationStatus, _markApplicationAsViewed};
};
