<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts


<<<<<<< HEAD
=======

import { useState, useCallback  } from 'react';
import { PortfolioProject  } from '@/types/resume';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
export function usePortfolio() {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState, useCallback} from 'react';
import {PortfolioProject} from '@/types/resume';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from '@/hooks/use-toast';
export function usePortfolio() {;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
        .eq('user_id', user && user.id)
=======
        .eq('user_id', user.id)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        .order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data |[]);
      return data |[]
    } catch (e: any) {
<<<<<<< HEAD
      console && console.error('Error fetching portfolio projects:', e);
      setError(e && e.message);
      return []
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
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
    } finally {
      setIsLoading (false);
    }
  }, [user]);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
<<<<<<< HEAD
=======
      console.error('Error fetching portfolio projects:', e);
      setError(e.message);
      return []
    } finally {
      setIsLoading(false)
    }
  }, [user]);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const addProject = async (project: PortfolioProject): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to add a portfolio project')
      return null
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======


    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          user_id: user.id;
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
          user_id: user && user.id;
          title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
=======
          demo_url: project.demo_url
          pdf_url: project.pdf_url
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        })
        .select('id')
        .single();
      if (error) throw error;
<<<<<<< HEAD
<<<<<<< HEAD
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
      return data && data.id
=======

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      }),
      
      await fetchProjects(),
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return data.id
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    } catch (e: any) {
      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);
      toast({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      }),
      
      await fetchProjects(),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return data.id
    } catch (e: any) {
      console.error('Error adding portfolio project:', e),
      setError(e.message),
      toast({
        title: "Error"
        description: `Could not add project: ${e.message}`;
        title: "Error",
        description: `Could not add project: ${e.message}`,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        variant: "destructive"
      }),
      return null
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD

=======
        title: "Error",

        description: `Could not add project: ${e.message}`,


========
        title: "Error",
        description: `Could not add project: ${e && e.message}`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
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


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  }
  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update a portfolio project')
      return false
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },;
  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a portfolio project'),;
      return false;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
          title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url
=======

=======
          demo_url: project.demo_url
          pdf_url: project.pdf_url
        })
        .eq('id', projectId)
        .eq('user_id', user.id);
      if (error) throw error;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
          pdf_url: project.pdf_url
<<<<<<< HEAD

        })
        .eq('id', projectId)
        .eq('user_id', user && user.id);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
      

      if (error) throw error,
      

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      if (error) throw error;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"

<<<<<<< HEAD
=======
        })
        .eq('id', projectId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"
      });
      await fetchProjects();
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      }),
      
      await fetchProjects(),
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return true
    } catch (e: any) {
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);
      toast({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      }),
      
      await fetchProjects(),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return true
    } catch (e: any) {
      console.error('Error updating portfolio project:', e),
      setError(e.message),
      toast({
        title: "Error"
        description: `Could not update project: ${e.message}`;
        title: "Error",
        description: `Could not update project: ${e.message}`,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        variant: "destructive"
      }),
      return false
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD

=======
        title: "Error",

        description: `Could not update project: ${e.message}`,


========
        title: "Error",
        description: `Could not update project: ${e && e.message}`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
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


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  }
  const deleteProject = async (projectId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete a portfolio project')
      return false
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },;
  const deleteProject = async (projectId: string): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete a portfolio project'),;
      return false;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
        .eq('user_id', user && user.id);
      

========
  }
        .eq('user_id', user && user.id);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
      if (error) throw error;
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

      
      setProjects(projects && projects.filter(p => p && p.id !== projectId));

=======

=======
<<<<<<< HEAD
        .eq('user_id', user.id);
      if (error) throw error;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        .eq('user_id', user.id);
      if (error) throw error;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        .eq('user_id', user.id),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });
      setProjects(projects.filter(p => p.id !== projectId));
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      }),
      
      setProjects(projects.filter(p => p.id !== projectId)),
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      setProjects(projects && projects.filter(p => p && p.id !== projectId));
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
      return true
    } catch (e: any) {
      console && console.error('Error deleting portfolio project:', e);
      setError(e && e.message);
      toast({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      }),
      
      setProjects(projects.filter(p => p.id !== projectId)),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return true
    } catch (e: any) {
      console.error('Error deleting portfolio project:', e),
      setError(e.message),
      toast({
        title: "Error"
        description: `Could not delete project: ${e.message}`;
        title: "Error",
        description: `Could not delete project: ${e.message}`,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        variant: "destructive"
      }),
      return false
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD

=======
        title: "Error",

        description: `Could not delete project: ${e.message}`,


========
        title: "Error",
        description: `Could not delete project: ${e && e.message}`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
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
      });
      return false;
    } finally {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

;

========
      setIsLoading (false);
    }
  }
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
  return {
    is_loading;
    error;
    projects;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
    fetch_projects;
    add_project;
    update_project;
    delete_project;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts

=======
      setIsLoading(false)

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePortfolio.ts
  }
}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
