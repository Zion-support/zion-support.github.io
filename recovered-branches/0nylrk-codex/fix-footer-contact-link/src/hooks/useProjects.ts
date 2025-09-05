
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
        .select(`
          *, _job:jobs(title, _description), _talent_profile:profiles!talent_id(display_name:display_name, _professional_title:bio, _profile_picture_url:avatar_url), _client_profile:profiles!client_id(display_name, _avatar_url)
        `)
        .order("created_at", _{ ascending: false});
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {_query = query.eq("talent_id", _user.id);} else if (user.userType === "employer" || user.userType === "buyer") {_query = query.eq("client_id", _user.id);}
      
      const {_data, _error: fetchError} = await query;
      
      if (fetchError) throw fetchError;
      
      // Transform the data to match our project types
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
        .select(`
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single();
      
      if (error) throw error;
      
      // Transform the data to match our project types
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
      
      if (error) throw error;
      
      // Update the local state
      setProjects(prev => 
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
}