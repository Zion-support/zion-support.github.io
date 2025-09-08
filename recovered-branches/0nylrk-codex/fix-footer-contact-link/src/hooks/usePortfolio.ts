
import { useState, useCallback  } from 'react';
import { PortfolioProject  } from '@/types/resume';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
export function usePortfolio() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
<<<<<<< HEAD


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
      setIsLoading(false)

    setIsLoading(true);
    setError(null);

      return false;

    }
    
    setIsLoading($2);
    setError($2);
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({
          user_id: user.id;
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
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
        .eq('user_id', user && user.id)        .eq('user_id', user && user.id)
        .order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data |[]);
      return data |[]
    } catch (e: any) {
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
    }    
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);
      toast({        title: "Error",

        description: `Could not add project: ${e.message}`,

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
      });
      return null;

      setIsLoading(false)

=======    }
    setIsLoading(true);
    setError(null);

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
      toast({;
        title: "Project added",,
  description: "Your project has been added to your portfolio";
      }),;
      await fetchProjects(),;
      return data.id;
    } catch (e: any) {;'
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;
      toast({;
        title: "Error",,
  description: `Could not add project: ${e.message}`,;
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
    }
    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
    
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
      }),        title: "Error",

        description: `Could not update project: ${e.message}`,

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
      toast({;
        title: "Project updated",,
  description: "Your portfolio project has been updated";
      }),;
      await fetchProjects(),;
      return true;
    } catch (e: any) {;'
      console.error('Error updating portfolio project:', e),;
      setError(e.message),;
      toast({;
        title: "Error",,
  description: `Could not update project: ${e.message}`,;
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
    }
    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
    
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });      return true
    } catch (e: any) {
      console && console.error('Error deleting portfolio project:', e);
      setError(e && e.message);
      toast({
        variant: "destructive"
      }),
      return false
    } finally {
      setIsLoading(false)
        title: "Error",

        description: `Could not delete project: ${e.message}`,

    is_loading;
    error;
    projects;  }
};
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
          title:project.title,,
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
        title:"Project added",,
  description:"Your project has been added to your portfolio";
      }),;
      ;
      await fetchProjects(),;
      return data.id,;
    } catch (e:any) {;
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;
      toast({;
        title:"Error",,
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
          title:project.title,,
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
        title:"Project updated",,
  description:"Your portfolio project has been updated";
      }),;
      ;
      await fetchProjects(),;
      return true,;
    } catch (e:any) {;
      console.error('Error updating portfolio project:', e),;
      setError(e.message),;
      toast({;
        title:"Error",,
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
        title:"Project deleted",,
  description:"Your portfolio project has been deleted";
      }),;
      ;
      setProjects(projects.filter(p => p.id !== projectId)),;
      return true,;
    } catch (e:any) {;
      console.error('Error deleting portfolio project:', e),;
      setError(e.message),;
      toast({;
        title:"Error",,
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
