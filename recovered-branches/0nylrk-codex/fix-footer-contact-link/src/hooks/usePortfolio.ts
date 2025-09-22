



import { useState, useCallback  } from 'react';
import { PortfolioProject  } from '@/types/resume';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
export function usePortfolio() {
export function usePortfolio() {
import {useState, useCallback} from 'react';
import {PortfolioProject} from '@/types/resume';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from '@/hooks/use-toast';
export function usePortfolio() {;

import { useState, useCallback  } from 'react';'
import { PortfolioProject  } from '@/types/resume';'
import { supabase  } from '@/integrations/supabase/client';'
import { useAuth  } from '@/hooks/useAuth';'
import { toast } from '@/hooks/use-toast';
export function usePortfolio() {}
';
import {useState, useCallback} from 'react';'
import {PortfolioProject} from '@/types/resume';'
import {supabase} from '@/integrations/supabase/client';'
import {useAuth} from '@/hooks/useAuth';'
import {toast} from '@/hooks/use-toast';
export function usePortfolio() { return null; }
  const { user } = useAuth();
export function usePortfolio() {  const { user } = useAuth();
export function usePortfolio() {  const { user } = useAuth();

  const { user } = useAuth();

export function usePortfolio() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
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
      console && console.error('Error fetching portfolio projects:', e);
      setError(e && e.message);
      return []

      return [];
    }
    setIsLoading (true);
    set_error (null);
;
try {}
      const { data, error } = await supabase;'
        .from ('portfolio_projects');'
        .select ('*');'
        .eq ('user_id', user.id);'
        .order ('created_at', { ascending: false });
;
      // Check condition;
if (throw error) {}
  $2;
}
      set_projects (data || []);
      return data || [];
    } catch (e: any) {'
      console.error ('Error fetching portfolio projects:', e);
      set_error (e.message);
      return [];
    } finally {
      setIsLoading (false);
    }
  }, [user]);

import { useState, useCallback } from 'react',;

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
import { useState, useCallback } from 'react',;
import { PortfolioProject } from '@/types/resume',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
    } finally {}
      setIsLoading (false);
    }
  }, [user]);
'
import { useState, useCallback } from 'react',;'
import { PortfolioProject } from '@/types/resume',;'
import { supabase } from '@/integrations/supabase/client',;'
import { useAuth } from '@/hooks/useAuth',;'
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
;
    setIsLoading(true),;
    setError(null),;
    try {;
const { data, error } = await supabase;'
        .from('portfolio_projects');'
        .select('*');'
        .eq('user_id', user.id);'
        .order('created_at', { ascending: false }),;
      if (error) throw error,;
      setProjects(data || []),;
      return data || [];
} catch (e: any) {;'
      console.error('Error fetching portfolio projects:', e),;
      setError(e.message),;
      return [];
    } finally {;
      setIsLoading(false);
    }
  }, [user]),;
  const addProject = async (project: PortfolioProject): Promise<string | null> => {;
if (!user) {;'
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
.insert ({

        .insert ({}
          user_id: user.id;
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;

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
toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
return data && data.id
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
      return null;
    } finally {}
      setIsLoading(false)
}

    setIsLoading(true),
    setError(null),

      });
      return null;
    } finally {
      setIsLoading(false)
        title: "Error",
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({

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

          user_id: user.id;
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;

          user_id: user && user.id;
          title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url

demo_url: project.demo_url
          pdf_url: project.pdf_url
        })
        .select('id')
        .single();
      if (error) throw error;
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
      return data && data.id

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

      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"

      }),
      await fetchProjects(),

      return data.id
    } catch (e: any) {
      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);
toast({        title: "Error",
      toast({

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
        title: "Error",

        description: `Could not add project: ${e.message}`,
"
        variant: "destructive"

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
} finally {}
      setIsLoading(false)


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

    setIsLoading(true);
    setError(null);



    }
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
});'
        .select('id');
        .single(),;
      if (error) throw error,;
toast({;
        title: "Project added",,
  description: "Your project has been added to your portfolio";
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
        title: "Error",,
  description: `Could not add project: ${e.message}`,;
        variant: "destructive";
          pdf_url: project.pdf_url;)
        });'
        .select('id');'
        .single(),;
      if (error) throw error,;
      toast({;'
        title: "Project added",;""
        description: "Your project has been added to your portfolio";")

      }),;
      await fetchProjects(),;
      return data.id;
    } catch (e: any) {;"
      console.error('Error adding portfolio project:', e),;'
      setError(e.message),;

      toast({;'
        title: "Error",;"
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


    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({
try {}
      const { error } = await supabase'
        .from('portfolio_projects')
        .update({}
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
try {}
      const { error } = await supabase;'
        .from ('portfolio_projects');
.update ({
        .update ({}
    try {
      const { error } = await supabase;
        .from ('portfolio_projects');
        .update ({

          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;

          title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url

title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url;
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

      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"

      }),
      await fetchProjects(),

      return true
    } catch (e: any) {
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);
      toast({

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
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({      toast({
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({      toast({
        title: "Project updated"
          pdf_url: project.pdf_url;
      toast({"
        title: "Project updated""
        description: "Your portfolio project has been updated"

      toast({"
        title: "Project updated""
        description: "Your portfolio project has been updated"
      });
      await fetchProjects();
      return true;
    } catch (e: any) {'
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);
toast({
        variant: "destructive"
      }),
      return false;
    } finally {}
      setIsLoading(false)

    }

    setIsLoading(true),
    setError(null),

      });
      return false;
    } finally {
      setIsLoading(false)
        title: "Error",

        description: `Could not update project: ${e.message}`,
        variant: "destructive"

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

      }),        title: "Error",

        description: `Could not update project: ${e.message}`,


      }),
      return false
    } finally {
      setIsLoading(false)
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
      }),        title: "Error",

        description: `Could not update project: ${e.message}`,

</boolean>
  const update_project = async (project_id: string, project: PortfolioProject): Promise < boolean> => {
    // Check condition;
if ( {) {
  $2;
}"
      set_error ('You must be logged in to update a portfolio project'),'
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
  // TODO: Implement
}
      const { error } = await supabase;'
        .from ('portfolio_projects');'
        .update ({

          title: project.title;,
  description: project.description;
          technologies: project.technologies;,
  image_url: project.image_url;
          github_url: project.github_url;,
  title: project && project.title;
          description: project && project.description;,
  technologies: project && project.technologies;
          image_url: project && project.image_url;,
  github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url;,
  title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
          pdf_url: project.pdf_url;)
        })'
        .eq('id', projectId)''
        .eq('user_id', user && user.id);'
      if (error) throw error,

      toast({'
        title: "Project updated"","
  description: "Your portfolio project has been updated"")
      }),
      await fetchProjects(),

      return true;
    } catch (e: any) {"
      console && console.error('Error updating portfolio project:', e);'
      setError(e && e.message);
      toast({

      toast({'
        title: "Project updated"","
  description: "Your portfolio project has been updated"")
      });
      await fetchProjects();
      return true;
    } catch (e: any) {"
      console && console.error('Error updating portfolio project:', e);'
      setError(e && e.message);
      toast({'
        variant: "destructive"")
      }),
      return false;
    } finally {
  // TODO: Implement
}
      setIsLoading(false)"
        title: "Error","
        description: `Could not update project: ${e.message}`,

"
        variant: "destructive"",
  demo_url: project.demo_url,
          pdf_url: project.pdf_url;
        });"
        .eq ('id', project_id);''
        .eq ('user_id', user.id);'
;
      // Check condition;
if (throw error) {
  $2;
}
      toast ({'
        title: "Project updated",""
        description: "Your portfolio project has been updated";")
      });
;
      await fetch_projects ();
      return true;
    } catch (e: any) {"
      console.error ('Error updating portfolio project:', e);'
      set_error (e.message);
      toast ({
        title: "Error",
        description: `Could not update project: ${e.message}`;
        variant: "destructive";
      toast ({'
        title: "Error","
        description: `Could not update project: ${e.message}`;"
        variant: "destructive";")
      });
      return false;
    } finally {
  // TODO: Implement
}
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
        title: "Error",,
  description: `Could not update project: ${e.message}`,;
        variant: "destructive";
          pdf_url: project.pdf_url;)
        });'
        .eq('id', projectId);''
        .eq('user_id', user.id),;'
      if (error) throw error,;
      toast({;'
        title: "Project updated",;""
        description: "Your portfolio project has been updated";")

      }),;
      await fetchProjects(),;
      return true;
    } catch (e: any) {;"
      console.error('Error updating portfolio project:', e),;'
      setError(e.message),;

      toast({;'
        title: "Error",;"
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


    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)


      if (error) throw error;

      toast({"
        title: "Project deleted""
        description: "Your portfolio project has been deleted"
      });
'
        .eq('user_id', user.id),

      if (error) throw error,

      return true
        .eq('id', projectId)      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });      return true
        .eq('id', projectId)      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });      return true
        .eq('id', projectId)

        .eq('user_id', user && user.id);

.eq('user_id', user && user.id);

  }
        .eq('user_id', user && user.id);
      if (error) throw error;
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });

setProjects(projects && projects.filter(p => p && p.id !== projectId));

        .eq('user_id', user.id);
      if (error) throw error;
        .eq('user_id', user.id),
      if (error) throw error,

      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"

      }),
      setProjects(projects.filter(p => p.id !== projectId)),

toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });
      setProjects(projects.filter(p => p.id !== projectId));
      }),
      setProjects(projects.filter(p => p.id !== projectId)),
      setProjects(projects && projects.filter(p => p && p.id !== projectId));
      return true
    } catch (e: any) {
      console && console.error('Error deleting portfolio project:', e);
      setError(e && e.message);
      toast({

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

      return true;
    } catch (e: any) {'
      console && console.error('Error deleting portfolio project:', e);
      setError(e && e.message);
      toast({}
"

        variant: "destructive"
      }),
      return false;
    } finally {}
      setIsLoading(false)

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
try {}
      const { error } = await supabase;'
        .from ('portfolio_projects');
        .delete ();'
        .eq ('id', project_id);'
        .eq ('user_id', user.id);
;
      // Check condition;
if (throw error) {}
  $2;
}
      toast ({"
        title: "Project deleted","
        description: "Your portfolio project has been deleted";
      });
;
      set_projects (projects.filter (p => p.id !== project_id));
      return true;
} catch (e: any) {'
      console.error ('Error deleting portfolio project:', e);
      set_error (e.message);
      toast ({"
        title: "Error",`
        description: `Could not delete project: ${e.message}`;"
        variant: "destructive";
      });
      return false;
    } finally {}
  return {}
    is_loading;
    error;
    projects;

    fetch_projects;
    add_project;
    update_project;
    delete_project;

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
        title: "Project deleted",;"
        description: "Your portfolio project has been deleted";
      }),;
      setProjects(projects.filter(p => p.id !== projectId)),;
      return true;
    } catch (e: any) {;'
      console.error('Error deleting portfolio project:', e),;
      setError(e.message),;
      toast({;"
        title: "Error",;`
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

  }
}
;
    is_loading;
    error;
    projects;  }
};
    is_loading;
    error;
    projects;  }
};
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

;

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

      setIsLoading(false)

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

  }
}
}
}

import { useState, useCallback } from 'react',;
import { PortfolioProject } from '@/types/resume',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from '@/hooks/use-toast',;
;
export function usePortfolio() {;

;
export function usePortfolio() { return null; }
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
toast({;
        title:"Project added",,
  description:"Your project has been added to your portfolio";
        title:"Project added",,
  description:"Your project has been added to your portfolio";
      }),;
      ;
      await fetchProjects(),;
      return data.id,;
    } catch (e:any) {;'
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;
toast({;
        title:"Error",,
  description:`Could not add project:${e.message}`,;
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
toast({;
        title:"Project updated",,
  description:"Your portfolio project has been updated";
        title:"Project updated",,
  description:"Your portfolio project has been updated";
      }),;
      ;
      await fetchProjects(),;
      return true,;
    } catch (e:any) {;'
      console.error('Error updating portfolio project:', e),;
      setError(e.message),;
toast({;
        title:"Error",,
  description:`Could not update project:${e.message}`,;
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
toast({;
        title:"Project deleted",,
  description:"Your portfolio project has been deleted";
        title:"Project deleted",,
  description:"Your portfolio project has been deleted";
      }),;
      ;
      setProjects(projects.filter(p => p.id !== projectId)),;
      return true,;
    } catch (e:any) {;'
      console.error('Error deleting portfolio project:', e),;
      setError(e.message),;
toast({;
        title:"Error",,
  description:`Could not delete project:${e.message}`,;
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
        title: "Project added",;""
      }),;
      await fetchProjects(),;
    } catch (e: any) {;"
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;
        title: "Error",;"`;
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
        title: "Project updated",;""
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
        title: "Project deleted",;""
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

  }
}
