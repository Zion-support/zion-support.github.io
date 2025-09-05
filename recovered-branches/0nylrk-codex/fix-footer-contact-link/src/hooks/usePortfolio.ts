
<<<<<<< HEAD
import { useState, useCallback } from 'react',;
import { PortfolioProject } from '@/types/resume',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from '@/hooks/use-toast',;
;
export function usePortfolio() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [projects, setProjects] = useState<PortfolioProject[]>([]),;
  ;
  const fetchProjects = useCallback(async () => {;
    if (!user) {;
      setError('You must be logged in to access portfolio projects'),;
      return [],;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { data, error } = await supabase;
        .from('portfolio_projects');
        .select('*');
        .eq('user_id', user.id);
        .order('created_at', { ascending:false }),;
      ;
      if (error) throw error,;
      ;
      setProjects(data || []),;
      return data || [],;
    } catch (e:any) {;
      console.error('Error fetching portfolio projects:', e),;
      setError(e.message),;
      return [],;
    } finally {;
      setIsLoading(false),;
    }
  }, [user]),;
  ;
  const addProject = async (project:PortfolioProject):Promise<string | null> => {;
    if (!user) {;
      setError('You must be logged in to add a portfolio project'),;
      return null;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { data, error } = await supabase;
        .from('portfolio_projects');
        .insert({;
          user_id:user.id,;
          title:project.title,;
          description:project.description,;
          technologies:project.technologies,;
          image_url:project.image_url,;
          github_url:project.github_url,;
          demo_url:project.demo_url,;
          pdf_url:project.pdf_url;
        });
        .select('id');
        .single(),;
      ;
      if (error) throw error,;
      ;
      toast({;
        title:"Project added",;
        description:"Your project has been added to your portfolio";
      }),;
      ;
      await fetchProjects(),;
      return data.id,;
    } catch (e:any) {;
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;
      toast({;
        title:"Error",;
        description:`Could not add project:${e.message}`,;
        variant:"destructive";
      }),;
      return null,;
    } finally {;
      setIsLoading(false),;
=======
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
    setIsLoading(true),
    setError(null),
    
    try {_const { data, _error} = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false }),      
      if (error) throw error,
      
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
    setIsLoading(true),
    setError(null),
    
    try {_const { data, _error} = await supabase
        .from('portfolio_projects')
        .insert({_user_id: user.id, _title: project.title, _description: project.description, _technologies: project.technologies, _image_url: project.image_url, _github_url: project.github_url, _demo_url: project.demo_url, _pdf_url: project.pdf_url})
        .select('id')
        .single(),
      
      if (error) throw error,
      
      toast({
        title: "Project added",
        description: "Your project has been added to your portfolio"
      }),      
      await fetchProjects(),
      return data.id
    } catch (e: any) {
      console.error('Error adding portfolio project:', e),
      setError(e.message),
      toast({
        title: &quot;Error&quot;,
        description: `Could not add project: ${e.message}`,
      toast({_title: "Project added", _description: "Your project has been added to your portfolio"});
      
      await fetchProjects();
      return data.id;
    } catch (e: unknown) {_setError(e.message);
      toast({
        title: "Error", _description: `Could not add project: ${e.message}`,
        variant: "destructive"
      }),
      return null    } finally {
      setIsLoading(false)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }
  },;
  ;
  const updateProject = async (projectId:string, project:PortfolioProject):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a portfolio project'),;
      return false;
    }
<<<<<<< HEAD
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('portfolio_projects');
        .update({;
          title:project.title,;
          description:project.description,;
          technologies:project.technologies,;
          image_url:project.image_url,;
          github_url:project.github_url,;
          demo_url:project.demo_url,;
          pdf_url:project.pdf_url;
        });
        .eq('id', projectId);
        .eq('user_id', user.id),;
      ;
      if (error) throw error,;
      ;
      toast({;
        title:"Project updated",;
        description:"Your portfolio project has been updated";
      }),;
      ;
      await fetchProjects(),;
      return true,;
    } catch (e:any) {;
      console.error('Error updating portfolio project:', e),;
      setError(e.message),;
      toast({;
        title:"Error",;
        description:`Could not update project:${e.message}`,;
        variant:"destructive";
      }),;
      return false,;
    } finally {;
      setIsLoading(false),;
=======
    } finally {_setIsLoading(false);}
  };
  
  const _updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update a portfolio project');
      return false;}
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('portfolio_projects')
        .update({_title: project.title, _description: project.description, _technologies: project.technologies, _image_url: project.image_url, _github_url: project.github_url, _demo_url: project.demo_url, _pdf_url: project.pdf_url})
        .eq('id', projectId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
      toast({
        title: "Project updated",
        description: "Your portfolio project has been updated"
      }),      
      await fetchProjects(),
      return true
    } catch (e: any) {
      console.error('Error updating portfolio project:', e),
      setError(e.message),
      toast({
        title: &quot;Error&quot;,
        description: `Could not update project: ${e.message}`,
      toast({_title: "Project updated", _description: "Your portfolio project has been updated"});
      
      await fetchProjects();
      return true;
    } catch (e: unknown) {_setError(e.message);
      toast({
        title: "Error", _description: `Could not update project: ${e.message}`,
        variant: "destructive"
      }),
      return false    } finally {
      setIsLoading(false)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }
  },;
  ;
  const deleteProject = async (projectId:string):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete a portfolio project'),;
      return false;
    }
<<<<<<< HEAD
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('portfolio_projects');
        .delete();
        .eq('id', projectId);
        .eq('user_id', user.id),;
      ;
      if (error) throw error,;
      ;
      toast({;
        title:"Project deleted",;
        description:"Your portfolio project has been deleted";
      }),;
      ;
      setProjects(projects.filter(p => p.id !== projectId)),;
      return true,;
    } catch (e:any) {;
      console.error('Error deleting portfolio project:', e),;
      setError(e.message),;
      toast({;
        title:"Error",;
        description:`Could not delete project:${e.message}`,;
        variant:"destructive";
      }),;
      return false,;
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  return {;
    isLoading,;
    error,;
    projects,;
    fetchProjects,;
    addProject,;
    updateProject,;
    deleteProject;
  },;
=======
    } finally {_setIsLoading(false);}
  };
  
  const _deleteProject = async (projectId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete a portfolio project');
      return false;}
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
      toast({
        title: "Project deleted",
        description: "Your portfolio project has been deleted"
      }),      
      setProjects(projects.filter(p => p.id !== projectId)),
      return true
    } catch (e: any) {
      console.error('Error deleting portfolio project:', e),
      setError(e.message),
      toast({
        title: &quot;Error&quot;,
        description: `Could not delete project: ${e.message}`,
      toast({_title: "Project deleted", _description: "Your portfolio project has been deleted"});
      
      setProjects(projects.filter(p => p.id !== projectId));
      return true;
    } catch (e: unknown) {_setError(e.message);
      toast({
        title: "Error", _description: `Could not delete project: ${e.message}`,
        variant: "destructive"
      }),
      return false    } finally {
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
    } finally {_setIsLoading(false);}
  };
  
  return {_isLoading, _error, _projects, _fetchProjects, _addProject, _updateProject, _deleteProject};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
