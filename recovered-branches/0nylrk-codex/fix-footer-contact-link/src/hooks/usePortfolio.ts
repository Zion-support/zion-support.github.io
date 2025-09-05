
<<<<<<< HEAD
import { useState, useCallback } from 'react',
import { PortfolioProject } from '@/types/resume',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from '@/hooks/use-toast',
export function usePortfolio() {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [projects, setProjects] = useState<PortfolioProject[]>([]),
  
  const fetchProjects = useCallback(async () => {
    if (!user) {
      setError('You must be logged in to access portfolio projects'),
      return []
    }
=======

export function usePortfolio() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  
  const _fetchProjects = useCallback(_async () => {_if (!user) {
      setError('You must be logged in to access portfolio projects');
      return [];}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { data, _error} = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('user_id', user.id)
<<<<<<< HEAD
        .order('created_at', { ascending: false }),
=======
        .order('created_at', {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
<<<<<<< HEAD
      setProjects(data || []),
      return data || []
    } catch (e: any) {
      console.error('Error fetching portfolio projects:', e),
      setError(e.message),
      return []
    } finally {
      setIsLoading(false)
    }
  }, [user]),
  
  const addProject = async (project: PortfolioProject): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to add a portfolio project'),
      return null
    }
=======
      setProjects(data || []);
      return data || [];
    } catch (e: unknown) {_setError(e.message);
      return [];} finally {_setIsLoading(false);}
  }, [user]);
  
  const _addProject = async (project: PortfolioProject): Promise<string | null> => {_if (!user) {
      setError('You must be logged in to add a portfolio project');
      return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { data, _error} = await supabase
        .from('portfolio_projects')
        .insert({_user_id: user.id, _title: project.title, _description: project.description, _technologies: project.technologies, _image_url: project.image_url, _github_url: project.github_url, _demo_url: project.demo_url, _pdf_url: project.pdf_url})
        .select('id')
        .single(),
      
      if (error) throw error,
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Project added",
        description: "Your project has been added to your portfolio"
      }),
=======
        title: &quot;Project added&quot;,
        description: &quot;Your project has been added to your portfolio&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      await fetchProjects(),
      return data.id
    } catch (e: any) {
      console.error('Error adding portfolio project:', e),
      setError(e.message),
      toast({
        title: &quot;Error&quot;,
        description: `Could not add project: ${e.message}`,
<<<<<<< HEAD
=======
      toast({_title: "Project added", _description: "Your project has been added to your portfolio"});
      
      await fetchProjects();
      return data.id;
    } catch (e: unknown) {_setError(e.message);
      toast({
        title: "Error", _description: `Could not add project: ${e.message}`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        variant: "destructive"
      }),
      return null
=======
        variant: &quot;destructive&quot;
      });
      return null;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },
  
  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update a portfolio project'),
      return false
    }
=======
    } finally {_setIsLoading(false);}
  };
  
  const _updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update a portfolio project');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('portfolio_projects')
        .update({_title: project.title, _description: project.description, _technologies: project.technologies, _image_url: project.image_url, _github_url: project.github_url, _demo_url: project.demo_url, _pdf_url: project.pdf_url})
        .eq('id', projectId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Project updated",
        description: "Your portfolio project has been updated"
      }),
=======
        title: &quot;Project updated&quot;,
        description: &quot;Your portfolio project has been updated&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      await fetchProjects(),
      return true
    } catch (e: any) {
      console.error('Error updating portfolio project:', e),
      setError(e.message),
      toast({
        title: &quot;Error&quot;,
        description: `Could not update project: ${e.message}`,
<<<<<<< HEAD
=======
      toast({_title: "Project updated", _description: "Your portfolio project has been updated"});
      
      await fetchProjects();
      return true;
    } catch (e: unknown) {_setError(e.message);
      toast({
        title: "Error", _description: `Could not update project: ${e.message}`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        variant: "destructive"
      }),
      return false
=======
        variant: &quot;destructive&quot;
      });
      return false;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },
  
  const deleteProject = async (projectId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete a portfolio project'),
      return false
    }
=======
    } finally {_setIsLoading(false);}
  };
  
  const _deleteProject = async (projectId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete a portfolio project');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Project deleted",
        description: "Your portfolio project has been deleted"
      }),
=======
        title: &quot;Project deleted&quot;,
        description: &quot;Your portfolio project has been deleted&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      setProjects(projects.filter(p => p.id !== projectId)),
      return true
    } catch (e: any) {
      console.error('Error deleting portfolio project:', e),
      setError(e.message),
      toast({
        title: &quot;Error&quot;,
        description: `Could not delete project: ${e.message}`,
<<<<<<< HEAD
=======
      toast({_title: "Project deleted", _description: "Your portfolio project has been deleted"});
      
      setProjects(projects.filter(p => p.id !== projectId));
      return true;
    } catch (e: unknown) {_setError(e.message);
      toast({
        title: "Error", _description: `Could not delete project: ${e.message}`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        variant: "destructive"
      }),
      return false
=======
        variant: &quot;destructive&quot;
      });
      return false;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },
  
  return {
    isLoading,
    error,
    projects,
    fetchProjects,
    addProject,
    updateProject,
    deleteProject
  }
=======
    } finally {_setIsLoading(false);}
  };
  
  return {_isLoading, _error, _projects, _fetchProjects, _addProject, _updateProject, _deleteProject};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
