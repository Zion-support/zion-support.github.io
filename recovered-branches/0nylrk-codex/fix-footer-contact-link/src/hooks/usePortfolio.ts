<<<<<<< HEAD

<<<<<<< HEAD
import { useState, useCallback  } from 'react';
import { PortfolioProject  } from '@/types/resume';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
export function usePortfolio() {
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {useState, useCallback} from 'react';
import {PortfolioProject} from '@/types/resume';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from '@/hooks/use-toast';
export function usePortfolio() {;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
        .eq('user_id', user && user.id)
        .order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data |[]);
      return data |[]
    } catch (e: any) {
      console && console.error('Error fetching portfolio projects:', e);
      setError(e && e.message);
      return []
=======
import {useState, useCallback} from 'react';
import {PortfolioProject} from '@/types / resume';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from '@/hooks / use - toast';
export /**
 * use_portfolio - Function description
 */
function use_portfolio() {
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
  const [projects, set_projects] = useState < PortfolioProject[]>([]);
;
  const fetch_projects = useCallback (async () => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to access portfolio projects');
      return [];
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { data, error } = await supabase;
        .from ('portfolio_projects');
        .select ('*');
        .eq ('user_id', user.id);
        .order ('created_at', { ascending: false });
;
      // Check condition
if (throw error) {
  $2
}
      set_projects (data || []);
      return data || [];
    } catch (e: any) {
      console.error ('Error fetching portfolio projects:', e);
      set_error (e.message);
      return [];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    } finally {
      setIsLoading (false);
    }
  }, [user]);
<<<<<<< HEAD
  const addProject = async (project: PortfolioProject): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to add a portfolio project')
      return null
    }
    setIsLoading(true);
    setError(null);
import { useState, useCallback } from 'react',;
import { PortfolioProject } from '@/types/resume',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from '@/hooks/use-toast',;
export function usePortfolio() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [projects, setProjects] = useState<PortfolioProject[]>([]),;
  const fetchProjects = useCallback(async () => {;
    if (!user) {;
      setError('You must be logged in to access portfolio projects'),;
      return [];
    }
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase;
        .from('portfolio_projects');
        .select('*');
        .eq('user_id', user.id);
        .order('created_at', { ascending: false }),;
      if (error) throw error,;
      setProjects(data || []),;
      return data || [];
    } catch (e: any) {;
      console.error('Error fetching portfolio projects:', e),;
      setError(e.message),;
      return [];
    } finally {;
      setIsLoading(false);
    }
  }, [user]),;
  const addProject = async (project: PortfolioProject): Promise<string | null> => {;
    if (!user) {;
      setError('You must be logged in to add a portfolio project'),;
      return null;
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          user_id: user.id;
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
        })
        .select('id')
        .single();
      if (error) throw error;
<<<<<<< HEAD
          user_id: user.id,
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
          pdf_url: project.pdf_url
        })
        .select('id')
        .single(),
      
      if (error) throw error,
      
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
<<<<<<< HEAD
      }),
      
      await fetchProjects(),
      return data.id
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      return data && data.id
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    } catch (e: any) {
      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);
      toast({
<<<<<<< HEAD
        title: "Error"
        description: `Could not add project: ${e.message}`;
        title: "Error",

        description: `Could not add project: ${e.message}`,
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        variant: "destructive"
      }),
      return null
    } finally {
<<<<<<< HEAD
      setIsLoading(false)
<<<<<<< HEAD
    }
  }
  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update a portfolio project')
      return false
    }
    setIsLoading(true);
    setError(null);
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase;
        .from('portfolio_projects');
        .insert({;
          user_id: user.id,;
          title: project.title,;
          description: project.description,;
          technologies: project.technologies,;
          image_url: project.image_url,;
          github_url: project.github_url,;
          demo_url: project.demo_url,;
          pdf_url: project.pdf_url;
        });
        .select('id');
        .single(),;
      if (error) throw error,;
      toast({;
        title: "Project added",;
        description: "Your project has been added to your portfolio";
      }),;
      await fetchProjects(),;
      return data.id;
    } catch (e: any) {;
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;
      toast({;
        title: "Error",;
        description: `Could not add project: ${e.message}`,;
        variant: "destructive";
      }),;
      return null;
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a portfolio project'),;
      return false;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
    
    setIsLoading(true),
    setError(null),
    
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({
=======
      setIsLoading (false);
    }
  }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
<<<<<<< HEAD
          demo_url: project.demo_url
          pdf_url: project.pdf_url
        })
        .eq('id', projectId)
        .eq('user_id', user.id);
      if (error) throw error;
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
          pdf_url: project.pdf_url

        })
        .eq('id', projectId)
        .eq('user_id', user && user.id);
      

      if (error) throw error,
      
=======
      if (error) throw error;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"
      });
      await fetchProjects();
<<<<<<< HEAD
      }),
      
      await fetchProjects(),
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      return true
    } catch (e: any) {
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);
      toast({
<<<<<<< HEAD
        title: "Error"
        description: `Could not update project: ${e.message}`;
        title: "Error",

        description: `Could not update project: ${e.message}`,
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        variant: "destructive"
      }),
      return false
    } finally {
<<<<<<< HEAD
      setIsLoading(false)
<<<<<<< HEAD
    }
  }
  const deleteProject = async (projectId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete a portfolio project')
      return false
    }
    setIsLoading(true);
    setError(null);
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('portfolio_projects');
        .update({;
          title: project.title,;
          description: project.description,;
          technologies: project.technologies,;
          image_url: project.image_url,;
          github_url: project.github_url,;
          demo_url: project.demo_url,;
          pdf_url: project.pdf_url;
        });
        .eq('id', projectId);
        .eq('user_id', user.id),;
      if (error) throw error,;
      toast({;
        title: "Project updated",;
        description: "Your portfolio project has been updated";
      }),;
      await fetchProjects(),;
      return true;
    } catch (e: any) {;
      console.error('Error updating portfolio project:', e),;
      setError(e.message),;
      toast({;
        title: "Error",;
        description: `Could not update project: ${e.message}`,;
        variant: "destructive";
      }),;
      return false;
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteProject = async (projectId: string): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete a portfolio project'),;
      return false;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
    
    setIsLoading(true),
    setError(null),
    
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)
        .eq('user_id', user.id);
      if (error) throw error;
        .eq('user_id', user.id),
      
      if (error) throw error,
      
=======
      setIsLoading (false);
    }
  }
      if (error) throw error;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });
<<<<<<< HEAD
      setProjects(projects.filter(p => p.id !== projectId));
      }),
      
      setProjects(projects.filter(p => p.id !== projectId)),
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      return true
    } catch (e: any) {
      console && console.error('Error deleting portfolio project:', e);
      setError(e && e.message);
      toast({
<<<<<<< HEAD
        title: "Error"
        description: `Could not delete project: ${e.message}`;
        title: "Error",

        description: `Could not delete project: ${e.message}`,
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        variant: "destructive"
      }),
      return false
    } finally {
      setIsLoading(false)
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('portfolio_projects');
        .delete ();
        .eq ('id', project_id);
        .eq ('user_id', user.id);
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Project deleted",
        description: "Your portfolio project has been deleted";
      });
;
      set_projects (projects.filter (p => p.id !== project_id));
      return true;
    } catch (e: any) {
      console.error ('Error deleting portfolio project:', e);
      set_error (e.message);
      toast ({
        title: "Error",
        description: `Could not delete project: ${e.message}`;
        variant: "destructive";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      });
      return false;
    } finally {
      setIsLoading (false);
    }
  }
  return {
    is_loading;
    error;
    projects;
<<<<<<< HEAD

    deleteProject
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('portfolio_projects');
        .delete();
        .eq('id', projectId);
        .eq('user_id', user.id),;
      if (error) throw error,;
      toast({;
        title: "Project deleted",;
        description: "Your portfolio project has been deleted";
      }),;
      setProjects(projects.filter(p => p.id !== projectId)),;
      return true;
    } catch (e: any) {;
      console.error('Error deleting portfolio project:', e),;
      setError(e.message),;
      toast({;
        title: "Error",;
        description: `Could not delete project: ${e.message}`,;
        variant: "destructive";
      }),;
      return false;
    } finally {;
      setIsLoading(false);
    }
  },;
  return {;
    isLoading,;
    error,;
    projects,;
    fetchProjects,;
    addProject;
    updateProject;
    deleteProject;
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }
}