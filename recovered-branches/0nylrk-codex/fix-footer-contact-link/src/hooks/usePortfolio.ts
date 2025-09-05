

export function usePortfolio() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  
  const _fetchProjects = useCallback(_async () => {_if (!user) {
      setError('You must be logged in to access portfolio projects');
      return [];}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { data, _error} = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', {_ascending: false});
      
      if (error) throw error;
      
      setProjects(data || []);
      return data || [];
    } catch (e: unknown) {_setError(e.message);
      return [];} finally {_setIsLoading(false);}
  }, [user]);
  
  const _addProject = async (project: PortfolioProject): Promise<string | null> => {_if (!user) {
      setError('You must be logged in to add a portfolio project');
      return null;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { data, _error} = await supabase
        .from('portfolio_projects')
        .insert({_user_id: user.id, _title: project.title, _description: project.description, _technologies: project.technologies, _image_url: project.image_url, _github_url: project.github_url, _demo_url: project.demo_url, _pdf_url: project.pdf_url})
        .select('id')
        .single();
      
      if (error) throw error;
      
      toast({_title: "Project added", _description: "Your project has been added to your portfolio"});
      
      await fetchProjects();
      return data.id;
    } catch (e: unknown) {_setError(e.message);
      toast({
        title: "Error", _description: `Could not add project: ${e.message}`,
        variant: "destructive"
      });
      return null;
    } finally {_setIsLoading(false);}
  };
  
  const _updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update a portfolio project');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('portfolio_projects')
        .update({_title: project.title, _description: project.description, _technologies: project.technologies, _image_url: project.image_url, _github_url: project.github_url, _demo_url: project.demo_url, _pdf_url: project.pdf_url})
        .eq('id', projectId)
        .eq('user_id', user.id);
      
      if (error) throw error;
      
      toast({_title: "Project updated", _description: "Your portfolio project has been updated"});
      
      await fetchProjects();
      return true;
    } catch (e: unknown) {_setError(e.message);
      toast({
        title: "Error", _description: `Could not update project: ${e.message}`,
        variant: "destructive"
      });
      return false;
    } finally {_setIsLoading(false);}
  };
  
  const _deleteProject = async (projectId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete a portfolio project');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)
        .eq('user_id', user.id);
      
      if (error) throw error;
      
      toast({_title: "Project deleted", _description: "Your portfolio project has been deleted"});
      
      setProjects(projects.filter(p => p.id !== projectId));
      return true;
    } catch (e: unknown) {_setError(e.message);
      toast({
        title: "Error", _description: `Could not delete project: ${e.message}`,
        variant: "destructive"
      });
      return false;
    } finally {_setIsLoading(false);}
  };
  
  return {_isLoading, _error, _projects, _fetchProjects, _addProject, _updateProject, _deleteProject};
}
