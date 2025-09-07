<<<<<<< HEAD

<<<<<<< HEAD
export function usePortfolio() {  const { user } = useAuth();
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState, useCallback  } from 'react';
import { PortfolioProject  } from '@/types/resume';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD
=======
export function usePortfolio() {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState, useCallback} from 'react';
import {PortfolioProject} from '@/types/resume';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from '@/hooks/use-toast';
export function usePortfolio() {;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { user } = useAuth();

>>>>>>> origin/chore/fix-lint-and-merge
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
<<<<<<< HEAD
  const fetchProjects = useCallback(async () => {
    }
    if (!user) {

    }
    setIsLoading(true);
    setError(null);
export function usePortfolio() {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  const [projects, setProjects] = useState<PortfolioProject[]>([]),
  
    if (!user) {
      setError($2);
      return []
    }
    
    setIsLoading($2);
    setError($2);
    try {

    }
    try {

if (throw error) {
  $2
}
      toast ({

      });
      await fetch_projects ();
      return data.id;

      });
      return null;
    } finally {
      }
      setIsLoading(false)
    setIsLoading(true);
    setError(null);

      return false;
    }
    
    setIsLoading(true),
    setError(null),
    
          demo_url: project.demo_url
          pdf_url: project.pdf_url
        })
        .select('id)
        .single($2);
      if (error) throw error,
      
      toast($2);
      await fetchProjects($2);
      return data.id
    } catch (e: any) {
      console.error($2);
      setError($2);
      toast($2);
      return null
    } finally {
      setIsLoading(false)
    }
  },
  
  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {
    if (!user) {
      setError($2);
      return false
    }
    
    setIsLoading($2);
    setError($2);
    try {
      const { error } = await supabase
        .from(portfolio_projects')
        .update({
=======
  const fetchProjects = useCallback(async () => {}
    if (!user) {'
      setError('You must be logged in to access portfolio projects');
      return []
    }
    setIsLoading(true);
    setError(null);
    try {}
      const { data, error } = await supabase'
        .from('portfolio_projects')'
        .select('*')
<<<<<<< HEAD

=======
<<<<<<< HEAD
        .eq('user_id', user.id)
=======
        .eq('user_id', user && user.id)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data |[]);
      return data |[]
    } catch (e: any) {
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      console && console.error('Error fetching portfolio projects:', e);
      setError(e && e.message);
      return []

      return [];
    }
    setIsLoading (true);
    set_error (null);
;

    } finally {
      setIsLoading (false);
    }
  }, [user]);

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState, useCallback } from 'react',;

import { PortfolioProject } from '@/types/resume',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;

import { toast } from '@/hooks/use-toast',;
export function usePortfolio() { return null; }
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [projects, setProjects] = useState<PortfolioProject[]>([]),;
  const fetchProjects = useCallback(async () => {;
    if (!user) {;'
      setError('You must be logged in to access portfolio projects'),;
      return [];

;
    setIsLoading(true),;
    setError(null),;
    try {;

        .order('created_at', { ascending: false }),;
      if (error) throw error,;
      setProjects(data || []),;
      return data || [];

      console.error('Error fetching portfolio projects:', e),;
      setError(e.message),;
      return [];
    } finally {;
      setIsLoading(false);
    }
  }, [user]),;
  const addProject = async (project: PortfolioProject): Promise<string | null> => {;

      setError('You must be logged in to add a portfolio project'),;
      return null;
    }
    setIsLoading(true),
    setError(null),

    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({

;
  const add_project = async (project: PortfolioProject): Promise < string | null> => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('You must be logged in to add a portfolio project'),
      return null;
    }
    setIsLoading (true);
    set_error (null);
;
    try {}
      const { data, error } = await supabase;'
        .from ('portfolio_projects');

          user_id: user.id;
>>>>>>> origin/chore/fix-lint-and-merge
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
<<<<<<< HEAD
    try {

      return false;
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
    
          demo_url: project.demo_url
          pdf_url: project.pdf_url
        })
        .eq(id', projectId)
        .eq($2);
      if (error) throw error,
      
      toast($2);
      await fetchProjects($2);
      return true
    } catch (e: any) {
      console.error($2);
      setError($2);
      toast($2);
      return false
    } finally {
      setIsLoading(false)
    }
  },
  
  const deleteProject = async (projectId: string): Promise<boolean> => {
    if (!user) {
      setError($2);
      return false
    }
    
    setIsLoading($2);
    setError($2);
    try {

      }),
return false;
    } finally {
      }
      setIsLoading(false)

    deleteProject;
        .eq(id', projectId)
        .eq($2);
      if (error) throw error,
      
      toast($2);
      setProjects(projects.filter(p = $2;
      return true
    } catch (e: any) {
      console.error($2);
      setError($2);
      toast($2);
      return false
    } finally {
      setIsLoading(false)
    }
  },
  
  return {
    isLoading;
    error;
    projects;
    fetchProjects;
    addProject;
    updateProject;
=======

          user_id: user && user.id;
          title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url;
        })'
        .select('id')
        .single();
      if (error) throw error;

      toast({
        title: "Project added"

        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
      return data && data.id;
          user_id: user.id,
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
          pdf_url: project.pdf_url;
        })'
        .select('id')
        .single(),
      
      if (error) throw error,

    } catch (e: any) {'
      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);

      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();

      return data.id
    } catch (e: any) {
      console.error('Error adding portfolio project:', e),
      setError(e.message),
      toast({

        variant: "destructive"
      }),
      return null;
    } finally {}
      setIsLoading(false)

        title: "Error",

=======
<<<<<<< HEAD


    
    
    
=======



    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({
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
          user_id: user.id;
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          user_id: user && user.id;
          title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url
<<<<<<< HEAD
          demo_url: project.demo_url
          pdf_url: project.pdf_url
=======

<<<<<<< HEAD
demo_url: project.demo_url
          pdf_url: project.pdf_url
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        })
        .select('id')
        .single();
      if (error) throw error;
<<<<<<< HEAD
=======
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
      return data && data.id
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
=======
      
<<<<<<< HEAD
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
      }),
      
      await fetchProjects(),
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"

      }),
      await fetchProjects(),

      return data.id
    } catch (e: any) {
      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);
<<<<<<< HEAD

        description: `Could not add project: ${e.message}`,

title: "Error",
        description: `Could not add project: ${e && e.message}`;
        variant: "destructive"
    }    
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);
      toast({        title: "Error",

        description: `Could not add project: ${e.message}`,

=======
      toast({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Error",

        description: `Could not add project: ${e.message}`,


        title: "Error",
        description: `Could not add project: ${e && e.message}`;
        variant: "destructive"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          demo_url: project.demo_url,
          pdf_url: project.pdf_url;
        });'
        .select ('id');
        .single ();
;
      // Check condition;
if (throw error) {}
  $2;
}
      toast ({"
        title: "Project added","
        description: "Your project has been added to your portfolio";
      });
;
      await fetch_projects ();
      return data.id;
    } catch (e: any) {'
      console.error ('Error adding portfolio project:', e);
      set_error (e.message);
      toast ({"
        title: "Error",
        description: `Could not add project: ${e.message}`;"
        variant: "destructive";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      });
      return null;

    }

  }
  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update a portfolio project')
      return false
    }
    setIsLoading(true);
    setError(null);

    }
    setIsLoading(true);
    setError(null);

    }
    setIsLoading(true);
    setError(null);

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase;'
        .from('portfolio_projects');
        .insert({;
          user_id: user.id,;
          title: project.title,,
  description: project.description,;
export function usePortfolio() {
import {useState, useCallback} from 'react';
import {PortfolioProject} from '@/types/resume';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from '@/hooks/use-toast';
export function usePortfolio() {;

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
</string>
  const [projects, setProjects] = useState<PortfolioProject[]>([]);

  const [error, setError] = useState<string | null>(null),;
  const [projects, setProjects] = useState<PortfolioProject[]>([]),;

  const addProject = async (project: PortfolioProject): Promise<string | null> => {;
  const add_project = async (project: PortfolioProject): Promise < string | null> => {
    // Check condition;
if ( {) {
  $2;
}
      set_error ('You must be logged in to add a portfolio project'),
      return null;
    setIsLoading (true);
    set_error (null);
;
    try {
  // TODO: Implement
      const { data, error } = await supabase;
        .from ('portfolio_projects');
        .insert ({

          user_id: user.id;,
  title: project.title;
          description: project.description;,
  technologies: project.technologies;
          image_url: project.image_url;,
  github_url: project.github_url;

          user_id: user && user.id;,
  title: project && project.title;
          description: project && project.description;,
  technologies: project && project.technologies;
          image_url: project && project.image_url;,
  github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url;)
        })
        .select('id')
        .single();
      if (error) throw error;
      toast({
        title: "Project added"","
  description: "Your project has been added to your portfolio"")
      });
      await fetchProjects();
      return data && data.id;
          user_id: user.id,
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
          pdf_url: project.pdf_url;
        })"
        .single(),
      if (error) throw error,

      }),
      await fetchProjects(),

      return data.id;
    } catch (e: any) {"
      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);

        variant: "destructive"")
    } finally {
  // TODO: Implement
      setIsLoading(false)"
        title: "Error","
        description: `Could not add project: ${e.message}`,

"
        variant: "destructive"",
  demo_url: project.demo_url,

          pdf_url: project.pdf_url;
        });"
        .select ('id');
        .single ();
      // Check condition;

if (throw error) {
      toast ({
        title: "Project added",""
        description: "Your project has been added to your portfolio";")
      await fetch_projects ();
      console.error ('Error adding portfolio project:', e);
      set_error (e.message);
        title: "Error","`;
        description: `Could not add project: ${e.message}`;"
        variant: "destructive";")
  // TODO: Implement
      setIsLoading(false)

    setIsLoading(true);
    setError(null);

      });
;
      await fetch_projects ();
      return data.id;
    } catch (e: any) {"
      console.error ('Error adding portfolio project:', e);'
      set_error (e.message);
    }

      toast ({'
        title: "Error","
        description: `Could not add project: ${e.message}`;"
        variant: "destructive";")
      });
      return null;
    } finally {}
      setIsLoading(false)}
    setIsLoading(true);
    setError(null);
;
    setIsLoading(true),;
    setError(null),;

    try {;
      const { data, error } = await supabase;"
        .from('portfolio_projects');
        .insert({;
          user_id: user.id,;
          title: project.title,;
          description: project.description,;
pr-12325
        .from('portfolio_projects');'

        .insert({;
          user_id: user.id,;
          title: project.title,,
  description: project.description,;
          technologies: project.technologies,;
          image_url: project.image_url,;
          github_url: project.github_url,;

          demo_url: project.demo_url,;
          pdf_url: project.pdf_url;

        .select('id');
        .single(),;
      if (error) throw error,;

      }),;
      await fetchProjects(),;
      return data.id;
    } catch (e: any) {;'
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;

        variant: "destructive";
          pdf_url: project.pdf_url;)
        });'
        .select('id');'
        .single(),;
      if (error) throw error,;
      toast({;'
        title: "Project added",""
        description: "Your project has been added to your portfolio";")

      }),;
      await fetchProjects(),;
      return data.id;
    } catch (e: any) {;"
      console.error('Error adding portfolio project:', e),;'
      setError(e.message),;

      toast({;'
        title: "Error","
        description: `Could not add project: ${e.message}`,;"
        variant: "destructive";")

      }),;
      return null;
    } finally {;}
      setIsLoading(false);}
    }
  },;

  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to update a portfolio project'),;
      return false;

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({
<<<<<<< HEAD
  }
=======

<<<<<<< HEAD
    try {}
      const { error } = await supabase'
        .from('portfolio_projects')
        .update({}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
  const update_project = async (project_id: string, project: PortfolioProject): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'

      set_error ('You must be logged in to update a portfolio project'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
<<<<<<< HEAD
=======
    try {
      const { error } = await supabase;
        .from ('portfolio_projects');
        .update ({
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
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
          demo_url: project.demo_url
          pdf_url: project.pdf_url
        })
        .eq('id', projectId)
        .eq('user_id', user.id);
      if (error) throw error;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
<<<<<<< HEAD
=======
          pdf_url: project.pdf_url
<<<<<<< HEAD
      if (error) throw error;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        })
        .eq('id', projectId)
        .eq('user_id', user && user.id);

      if (error) throw error,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"

<<<<<<< HEAD
        })
        .eq('id', projectId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"
      });
      await fetchProjects();
      }),
      
      await fetchProjects(),
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

      return true
    } catch (e: any) {
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);
      toast({

<<<<<<< HEAD
      toast({
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"

      return true
    } catch (e: any) {
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);
      toast({

      toast({

        title: "Project updated"

        description: "Your portfolio project has been updated"
      });
      await fetchProjects();
      return true;
    } catch (e: any) {'
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);

        variant: "destructive"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        title: "Error",

        description: `Could not update project: ${e.message}`,

<<<<<<< HEAD
        variant: "destructive"

=======

        title: "Error",
        description: `Could not update project: ${e && e.message}`;
        variant: "destructive"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          demo_url: project.demo_url,
          pdf_url: project.pdf_url;
        });'
        .eq ('id', project_id);'
        .eq ('user_id', user.id);
;
      // Check condition;
if (throw error) {}
  $2;
}
      toast ({"
        title: "Project updated","
        description: "Your portfolio project has been updated";
      });
;
      await fetch_projects ();
      return true;
    } catch (e: any) {'
      console.error ('Error updating portfolio project:', e);
      set_error (e.message);
      toast ({"
        title: "Error",`
        description: `Could not update project: ${e.message}`;"
        variant: "destructive";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      });
      return false;
    } finally {}
      setIsLoading(false)

    }
  }
  const deleteProject = async (projectId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete a portfolio project')
      return false
    }
    setIsLoading(true);
    setError(null);

    }
    setIsLoading(true);
    setError(null);

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('portfolio_projects');
      const { error } = await supabase;"
        .from('portfolio_projects');'

        .update({;
          title: project.title,,
  description: project.description,;
          technologies: project.technologies,;
          image_url: project.image_url,;
          github_url: project.github_url,;

          demo_url: project.demo_url,;
          pdf_url: project.pdf_url;
        });'
        .eq('id', projectId);'
        .eq('user_id', user.id),;
      if (error) throw error,;

      }),;
      await fetchProjects(),;
      return true;
    } catch (e: any) {;'
      console.error('Error updating portfolio project:', e),;
      setError(e.message),;

        variant: "destructive";
          pdf_url: project.pdf_url;)
        });'
        .eq('id', projectId);''
        .eq('user_id', user.id),;'
      if (error) throw error,;
      toast({;'
        title: "Project updated",""
        description: "Your portfolio project has been updated";")

      }),;
      await fetchProjects(),;
      return true;
    } catch (e: any) {;"
      console.error('Error updating portfolio project:', e),;'
      setError(e.message),;

      toast({;'
        title: "Error","
        description: `Could not update project: ${e.message}`,;"
        variant: "destructive";")

      }),;
      return false;
    } finally {;}
      setIsLoading(false);}
    }
  },;

  const deleteProject = async (projectId: string): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to delete a portfolio project'),;
      return false;

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
<<<<<<< HEAD
=======
        .eq('id', projectId)
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq('user_id', user && user.id);
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }
        .eq('user_id', user && user.id);
      if (error) throw error;

      toast({"
        title: "Project deleted""
        description: "Your portfolio project has been deleted"
      });
<<<<<<< HEAD
'
        .eq('user_id', user.id),
      
      if (error) throw error,

      return true

        variant: "destructive"
      }),
      return false;
    } finally {}
      setIsLoading(false)

=======

<<<<<<< HEAD
        .eq('user_id', user.id);
      if (error) throw error;
=======
      
      setProjects(projects && projects.filter(p => p && p.id !== projectId));

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq('user_id', user.id),
      
      if (error) throw error,
      
<<<<<<< HEAD
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });
      setProjects(projects.filter(p => p.id !== projectId));
      }),
      
      setProjects(projects.filter(p => p.id !== projectId)),
      setProjects(projects && projects.filter(p => p && p.id !== projectId));
=======

      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"

      }),
      
      setProjects(projects.filter(p => p.id !== projectId)),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return true
    } catch (e: any) {
      console && console.error('Error deleting portfolio project:', e);
      setError(e && e.message);
      toast({
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
        description: `Could not delete project: ${e.message}`,
        variant: "destructive"
      }),
      return false
    } finally {
      setIsLoading(false)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        title: "Error",

        description: `Could not delete project: ${e.message}`,

        variant: "destructive"

;
  const delete_project = async (project_id: string): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('You must be logged in to delete a portfolio project'),
      return false;

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

    }
    setIsLoading (true);
    set_error (null);
;

        description: "Your portfolio project has been deleted";
      });
;
      set_projects (projects.filter (p => p.id !== project_id));
      return true;
<<<<<<< HEAD
=======
    } catch (e: any) {
      console.error ('Error deleting portfolio project:', e);
      set_error (e.message);
      toast ({
        title: "Error",
        description: `Could not delete project: ${e.message}`;
        variant: "destructive";
      });
      return false;
    } finally {
      setIsLoading (false);
    }
  }
;
  return {
    is_loading;
    error;
    projects;
    fetch_projects;
    add_project;
    update_project;
    delete_project;
      setIsLoading(false)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('portfolio_projects');
        .delete();'
        .eq('id', projectId);'
        .eq('user_id', user.id),;
      if (error) throw error,;
      toast({;"
        title: "Project deleted","
        description: "Your portfolio project has been deleted";
      }),;
      setProjects(projects.filter(p => p.id !== projectId)),;
      return true;
    } catch (e: any) {;'
      console.error('Error deleting portfolio project:', e),;
      setError(e.message),;
      toast({;"
        title: "Error",`
        description: `Could not delete project: ${e.message}`,;"
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

<<<<<<< HEAD
  }
}

;

  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [projects, setProjects] = useState<PortfolioProject[]>([]),;
  ;
  const fetchProjects = useCallback(async () => {;
    if (!user) {;'
      setError('You must be logged in to access portfolio projects'),;
      return [],;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { data, error } = await supabase;'
        .from('portfolio_projects');'
        .select('*');'
        .eq('user_id', user.id);'
        .order('created_at', { ascending:false }),;
      ;
      if (error) throw error,;
      ;
      setProjects(data || []),;
      return data || [],;
    } catch (e:any) {;'
      console.error('Error fetching portfolio projects:', e),;
      setError(e.message),;
      return [],;
    } finally {;
      setIsLoading(false),;
    }
  }, [user]),;
  ;
  const addProject = async (project:PortfolioProject):Promise<string | null> => {;
    if (!user) {;'
      setError('You must be logged in to add a portfolio project'),;
      return null;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { data, error } = await supabase;'
        .from('portfolio_projects');
        .insert({;
          user_id:user.id,;
          title:project.title,,
  description:project.description,;
          technologies:project.technologies,;
          image_url:project.image_url,;
          github_url:project.github_url,;
          demo_url:project.demo_url,;
          pdf_url:project.pdf_url;
        });'
        .select('id');
        .single(),;
      ;
      if (error) throw error,;
      ;

      }),;
      ;
      await fetchProjects(),;
      return data.id,;
    } catch (e:any) {;'
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;

        variant:"destructive";
      }),;
      return null,;
    } finally {;
      setIsLoading(false),;    }
  },;
  ;
  const updateProject = async (projectId:string, project:PortfolioProject):Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to update a portfolio project'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;'
        .from('portfolio_projects');
        .update({;
          title:project.title,,
  description:project.description,;
          technologies:project.technologies,;
          image_url:project.image_url,;
          github_url:project.github_url,;
          demo_url:project.demo_url,;
          pdf_url:project.pdf_url;
        });'
        .eq('id', projectId);'
        .eq('user_id', user.id),;
      ;
      if (error) throw error,;
      ;

      }),;
      ;
      await fetchProjects(),;
      return true,;
    } catch (e:any) {;'
      console.error('Error updating portfolio project:', e),;
      setError(e.message),;

        variant:"destructive";
      }),;
      return false,;
    } finally {;
      setIsLoading(false),;    }
  },;
  ;
  const deleteProject = async (projectId:string):Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to delete a portfolio project'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;'
        .from('portfolio_projects');
        .delete();'
        .eq('id', projectId);'
        .eq('user_id', user.id),;
      ;
      if (error) throw error,;
      ;

      }),;
      ;
      setProjects(projects.filter(p => p.id !== projectId)),;
      return true,;
    } catch (e:any) {;'
      console.error('Error deleting portfolio project:', e),;
      setError(e.message),;

        variant:"destructive";
      }),;
      return false,;
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
        title: "Project added",""
      }),;
      await fetchProjects(),;
    } catch (e: any) {;"
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;
        title: "Error","`;
        description: `Could not add project: ${e.message}`,;"
    } finally {;
      setIsLoading(false);
  },;
  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {;
</boolean>
  const update_project = async (project_id: string, project: PortfolioProject): Promise < boolean> => {
    // Check condition;
}"
      set_error ('You must be logged in to update a portfolio project'),
      return false;
  // TODO: Implement
      const { error } = await supabase;
        .update ({

          title: project.title;,
  description: project.description;
          technologies: project.technologies;,
  image_url: project.image_url;
          github_url: project.github_url;,
          pdf_url: project && project.pdf_url;,
        .eq('id', projectId)
        .eq('user_id', user && user.id);

        title: "Project updated"","
  description: "Your portfolio project has been updated"")

      return true;
      console && console.error('Error updating portfolio project:', e);

  // TODO: Implement
        description: `Could not update project: ${e.message}`,

        .eq ('id', project_id);
        .eq ('user_id', user.id);
      // Check condition;
        title: "Project updated",""
        description: "Your portfolio project has been updated";")
      console.error ('Error updating portfolio project:', e);
        description: `Could not update project: ${e.message}`;"
  // TODO: Implement

      const { error } = await supabase;"
        .update({;
        .eq('id', projectId);
        .eq('user_id', user.id),;
        title: "Project updated",""
      console.error('Error updating portfolio project:', e),;
        description: `Could not update project: ${e.message}`,;"
  const deleteProject = async (projectId: string): Promise<boolean> => {;
  const delete_project = async (project_id: string): Promise < boolean> => {
    // Check condition;
      set_error ('You must be logged in to delete a portfolio project'),
  // TODO: Implement
        .delete ();
      // Check condition;
        title: "Project deleted",""
        description: "Your portfolio project has been deleted";")
      set_projects (projects.filter (p => p.id !== project_id));
      console.error ('Error deleting portfolio project:', e);
        description: `Could not delete project: ${e.message}`;"
  // TODO: Implement

  return {
  // TODO: Implement
    is_loading;
    error;
    projects;

    fetch_projects;
    add_project;
    update_project;
    delete_project;

        .delete();
        title: "Project deleted",""
      setProjects(projects.filter(p => p.id !== projectId)),;
      console.error('Error deleting portfolio project:', e),;
        description: `Could not delete project: ${e.message}`,;"
pr-12325
        variant: "destructive";")
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
    addProject,;
    updateProject,;
    deleteProject;
>>>>>>> origin/chore/fix-lint-and-merge

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
