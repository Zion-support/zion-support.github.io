
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useCallback  } from 'react';
import { PortfolioProject  } from '@/types/resume';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
export function usePortfolio() {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState, useCallback} from 'react';
import {PortfolioProject} from '@/types/resume';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from '@/hooks/use-toast';
export function usePortfolio() {;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('user_id', user.id)
=======
        .eq('user_id', user && user.id)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .eq('user_id', user && user.id)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data |[]);
      return data |[]
    } catch (e: any) {
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    } finally {
      setIsLoading (false);
    }
  }, [user]);
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const addProject = async (project: PortfolioProject): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to add a portfolio project')
      return null
    }
    setIsLoading(true);
    setError(null);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD


    
    
    
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  const add_project = async (project: PortfolioProject): Promise < string | null> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to add a portfolio project'),
      return null;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { data, error } = await supabase;
        .from ('portfolio_projects');
        .insert ({
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          user_id: user.id;
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          user_id: user && user.id;
          title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url
<<<<<<< HEAD
<<<<<<< HEAD
          demo_url: project.demo_url
          pdf_url: project.pdf_url
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        })
        .select('id')
        .single();
      if (error) throw error;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
      return data && data.id
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
      }),
      
      await fetchProjects(),
<<<<<<< HEAD
      }),
      
      await fetchProjects(),
      return data.id
    } catch (e: any) {
      console.error('Error adding portfolio project:', e),
      setError(e.message),
      toast({
        title: "Error"
        description: `Could not add project: ${e.message}`;
        title: "Error",
        description: `Could not add project: ${e.message}`,
        variant: "destructive"
      }),
      return null
    } finally {
      setIsLoading(false)
=======

      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"

      }),
      
      await fetchProjects(),

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return data.id
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    } catch (e: any) {
      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);
      toast({
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Error",

        description: `Could not add project: ${e.message}`,


        title: "Error",
        description: `Could not add project: ${e && e.message}`;
        variant: "destructive"
          demo_url: project.demo_url,
          pdf_url: project.pdf_url;
        });
        .select ('id');
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Project added",
        description: "Your project has been added to your portfolio";
      });
;
      await fetch_projects ();
      return data.id;
    } catch (e: any) {
      console.error ('Error adding portfolio project:', e);
      set_error (e.message);
      toast ({
        title: "Error",
        description: `Could not add project: ${e.message}`;
        variant: "destructive";
      });
      return null;
    } finally {

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        title: "Error"
        description: `Could not add project: ${e.message}`;
        title: "Error",

        description: `Could not add project: ${e.message}`,
        variant: "destructive"
      }),
      return null
    } finally {
      setIsLoading(false)


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  const update_project = async (project_id: string, project: PortfolioProject): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to update a portfolio project'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('portfolio_projects');
        .update ({
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          demo_url: project.demo_url
          pdf_url: project.pdf_url
        })
        .eq('id', projectId)
        .eq('user_id', user.id);
      if (error) throw error;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
          pdf_url: project.pdf_url
<<<<<<< HEAD
<<<<<<< HEAD
      if (error) throw error;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        })
        .eq('id', projectId)
        .eq('user_id', user && user.id);
      

      if (error) throw error,
      
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"

<<<<<<< HEAD
        })
        .eq('id', projectId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"
      });
      await fetchProjects();
      }),
      
      await fetchProjects(),
<<<<<<< HEAD
      }),
      
      await fetchProjects(),
      return true
    } catch (e: any) {
      console.error('Error updating portfolio project:', e),
      setError(e.message),
      toast({
        title: "Error"
        description: `Could not update project: ${e.message}`;
        title: "Error",
        description: `Could not update project: ${e.message}`,
        variant: "destructive"
      }),
      return false
    } finally {
      setIsLoading(false)
=======
      }),
      
      await fetchProjects(),


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return true
    } catch (e: any) {
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);
      toast({
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Error",

        description: `Could not update project: ${e.message}`,


        title: "Error",
        description: `Could not update project: ${e && e.message}`;
        variant: "destructive"
          demo_url: project.demo_url,
          pdf_url: project.pdf_url;
        });
        .eq ('id', project_id);
        .eq ('user_id', user.id);
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Project updated",
        description: "Your portfolio project has been updated";
      });
;
      await fetch_projects ();
      return true;
    } catch (e: any) {
      console.error ('Error updating portfolio project:', e);
      set_error (e.message);
      toast ({
        title: "Error",
        description: `Could not update project: ${e.message}`;
        variant: "destructive";
      });
      return false;
    } finally {

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        title: "Error"
        description: `Could not update project: ${e.message}`;
        title: "Error",

        description: `Could not update project: ${e.message}`,
        variant: "destructive"
      }),
      return false
    } finally {
      setIsLoading(false)


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq('user_id', user && user.id);
      

  }
        .eq('user_id', user && user.id);
      if (error) throw error;
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });

<<<<<<< HEAD
        .eq('user_id', user.id);
      if (error) throw error;
=======
      
      setProjects(projects && projects.filter(p => p && p.id !== projectId));

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .eq('user_id', user.id);
      if (error) throw error;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .eq('user_id', user.id),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });
      setProjects(projects.filter(p => p.id !== projectId));
      }),
      
      setProjects(projects.filter(p => p.id !== projectId)),
<<<<<<< HEAD
      setProjects(projects && projects.filter(p => p && p.id !== projectId));
=======

      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"

      }),
      
      setProjects(projects.filter(p => p.id !== projectId)),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return true
    } catch (e: any) {
      console && console.error('Error deleting portfolio project:', e);
      setError(e && e.message);
      toast({
<<<<<<< HEAD
      }),
      
      setProjects(projects.filter(p => p.id !== projectId)),
      return true
    } catch (e: any) {
      console.error('Error deleting portfolio project:', e),
      setError(e.message),
      toast({
        title: "Error"
        description: `Could not delete project: ${e.message}`;
        title: "Error",
=======
        title: "Error"
        description: `Could not delete project: ${e.message}`;
        title: "Error",

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        description: `Could not delete project: ${e.message}`,
        variant: "destructive"
      }),
      return false
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
        title: "Error",

        description: `Could not delete project: ${e.message}`,


        title: "Error",
        description: `Could not delete project: ${e && e.message}`;
        variant: "destructive"
;
  const delete_project = async (project_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete a portfolio project'),
      return false;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      });
      return false;
    } finally {
      setIsLoading (false);
    }
  }
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      });
      return false;
    } finally {

;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return {
    is_loading;
    error;
    projects;
<<<<<<< HEAD
    fetch_projects;
    add_project;
    update_project;
    delete_project;
      setIsLoading(false)

<<<<<<< HEAD
    }
  }
  return {
    isLoading;
    error;
    projects;
    fetchProjects;
    addProject;
    updateProject;

    deleteProject
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    deleteProject
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}

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
      setIsLoading(false),;    }
  },;
  ;
  const updateProject = async (projectId:string, project:PortfolioProject):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a portfolio project'),;
      return false;
    }
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
      setIsLoading(false),;    }
  },;
  ;
  const deleteProject = async (projectId:string):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete a portfolio project'),;
      return false;
    }
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
  },;}
 setIsLoading (true);
setError (null);
try {
  const {
  data, error 
}= await supabase .from ('portfolio projects') .select ('*') .eq ('user id', user.id) if (error) throw error;
setIsLoading (true);
setError (null);
try {
  const {
  data, error 
}= await supabase .from ('portfolio projects') .insert ({
  user id: user.id, title: project.title, description: project.description, technologies: project.technologies, image url: project.image url, github url: project.github url, demo url: project.demo url, pdf url: project.pdf url 
}) .select ('id') .single ();
if (error) throw error;
await fetchProjects ();
return data.id 
}catch (e: any) {
  console.error ('Error adding portfolio project:', e);
setError (e.message);
toast ({
  title: "Error";
description: `Could not add project: $ {
  e.message 
}`;
variant: "destructive" 
});
return null  variant: "destructive" 
});
return null;
setIsLoading (true);
setError (null);
try {
  const {
  error 
}= await supabase .from ('portfolio projects') .update ({
  title: project.title, description: project.description, technologies: project.technologies, image url: project.image url, github url: project.github url, demo url: project.demo url, pdf url: project.pdf url 
}) .eq ('id', projectId) .eq ('user id', user.id);
if (error) throw error;
await fetchProjects ();
return true;
}catch (e: any) {
  console.error ('Error updating portfolio project:', e);
setError (e.message);
toast ({
  title: "Error";
description: `Could not update project: $ {
  e.message 
}`;
variant: "destructive" 
});
return false  variant: "destructive" 
});
return false;
setIsLoading (true);
setError (null);
try {
  const {
  error 
}= await supabase .from ('portfolio projects') .delete () .eq ('id', projectId) .eq ('user id', user.id);
if (error) throw error;
setProjects (projects.filter (p => p.id !== projectId) );
return true;
}catch (e: any) {
  console.error ('Error deleting portfolio project:', e);
setError (e.message);
toast ({
  title: "Error";
description: `Could not delete project: $ {
  e.message 
}`;
variant: "destructive" 
});
return false  variant: "destructive" 
});
return false;
}
  }
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
