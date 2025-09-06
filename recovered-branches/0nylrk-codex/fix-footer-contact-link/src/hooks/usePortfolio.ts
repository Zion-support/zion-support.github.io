

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const fetchProjects = useCallback(async () => {
    if (!user) {
      setError('You must be logged in to access portfolio projects');
      return []
    }
    setIsLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data |[]);
      return data |[]
    } catch (e: any) {
      console.error('Error fetching portfolio projects:', e);
      setError(e.message);
      return []
    } finally {
      setIsLoading(false)
    }
  }, [user]);
  const addProject = async (project: PortfolioProject): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to add a portfolio project')
      return null
    }
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({

      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"

      return data.id
    } catch (e: any) {
      console.error('Error adding portfolio project:', e),
      setError(e.message),
      toast({

        variant: "destructive"
      }),
      return null
    } finally {
      setIsLoading(false)

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({

      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"

      return true
    } catch (e: any) {
      console.error('Error updating portfolio project:', e),
      setError(e.message),
      toast({

        variant: "destructive"
      }),
      return false
    } finally {
      setIsLoading(false)

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)

      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"

      return true
    } catch (e: any) {
      console.error('Error deleting portfolio project:', e),
      setError(e.message),
      toast({

        variant: "destructive"
      }),
      return false
    } finally {
      setIsLoading(false)

  }
}