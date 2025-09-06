
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useCallback  } from 'react';
import { PortfolioProject  } from '@/types/resume';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function usePortfolio() {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function usePortfolio() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState, useCallback} from 'react';
import {PortfolioProject} from '@/types/resume';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from '@/hooks/use-toast';
export function usePortfolio() {;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
=======
export function usePortfolio() {  const { user } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function usePortfolio() {  const { user } = useAuth();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  const { user } = useAuth();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('user_id', user && user.id)        .eq('user_id', user && user.id)
=======

'
        .eq('user_id', user && user.id)
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        .eq('user_id', user && user.id)
        .eq('user_id', user && user.id)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data |[]);
      return data |[]
<<<<<<< HEAD
    } catch (e: any) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    } catch (e: any) {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      console && console.error('Error fetching portfolio projects:', e);
      setError(e && e.message);
      return []
<<<<<<< HEAD
=======
=======
      console && console.error('Error fetching portfolio projects:', e);
      setError(e && e.message);
      return []
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return [];
    }
    setIsLoading (true);
    set_error (null);
;
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } finally {
      setIsLoading (false);
    }
  }, [user]);
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
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

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState, useCallback } from 'react',;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import { useState, useCallback } from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { PortfolioProject } from '@/types/resume',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
=======
    } finally {}
      setIsLoading (false);
    }
  }, [user]);
'
import { useState, useCallback } from 'react',;'
import { PortfolioProject } from '@/types/resume',;'
import { supabase } from '@/integrations/supabase/client',;'
import { useAuth } from '@/hooks/useAuth',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }


=======
    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
    setIsLoading(true),;
    setError(null),;
    try {;
<<<<<<< HEAD
      const { data, error } = await supabase;'
        .from('portfolio_projects');'
        .select('*');'
        .eq('user_id', user.id);'
=======
      const { data, error } = await supabase;
        .from('portfolio_projects');
        .select('*');
        .eq('user_id', user.id);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .order('created_at', { ascending: false }),;
      if (error) throw error,;
      setProjects(data || []),;
      return data || [];
<<<<<<< HEAD
    } catch (e: any) {;'
=======
    } catch (e: any) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      console.error('Error fetching portfolio projects:', e),;
      setError(e.message),;
      return [];
    } finally {;
      setIsLoading(false);
    }
  }, [user]),;
  const addProject = async (project: PortfolioProject): Promise<string | null> => {;
<<<<<<< HEAD
    if (!user) {;'
=======
    if (!user) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setError('You must be logged in to add a portfolio project'),;
      return null;
    }
    
    setIsLoading(true),
    setError(null),


<<<<<<< HEAD
    
<<<<<<< HEAD
    
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

    try {}
      const { data, error } = await supabase'
        .from('portfolio_projects')
        .insert({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
        .insert ({
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        .insert ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      toast({
        title: "Project added"
=======

      toast({}
        title: "Project added""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
      toast({
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
<<<<<<< HEAD
      return data && data.id
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"

=======
      }),
      
      await fetchProjects(),
      }),
      
      await fetchProjects(),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return data.id
    } catch (e: any) {
      console.error('Error adding portfolio project:', e),
      setError(e.message),
      toast({
<<<<<<< HEAD

=======
        title: "Error"
        description: `Could not add project: ${e.message}`;
        title: "Error",
        description: `Could not add project: ${e.message}`,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      toast({}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"
      }),
      return null;
    } finally {}
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD

    }

    setIsLoading(true),
    setError(null),

      });
      return null;
    } finally {
      setIsLoading(false)
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title: "Error",
=======
    }    
=======

    


    
    
    
    
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      toast({        title: "Error",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }    
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);
      toast({        title: "Error",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      toast({

        variant: "destructive"
      }),
      return null
    } finally {
      setIsLoading(false)
        title: "Error",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        description: `Could not add project: ${e.message}`,
=======
"
        variant: "destructive"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


        variant: "destructive"
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      });
      return null;
    } finally {}
      setIsLoading(false)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
    setIsLoading(true);
    setError(null);


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======    }
    setIsLoading(true);
    setError(null);

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======    }
    setIsLoading(true);
    setError(null);

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

    }
    setIsLoading(true);
    setError(null);


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase;'
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
        });'
        .select('id');
        .single(),;
      if (error) throw error,;
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Project added",,
  description: "Your project has been added to your portfolio";
=======
      toast({;"
        title: "Project added",;"
        description: "Your project has been added to your portfolio";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Project added",;
        description: "Your project has been added to your portfolio";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }),;
      await fetchProjects(),;
      return data.id;
    } catch (e: any) {;'
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Error",,
  description: `Could not add project: ${e.message}`,;
=======
      toast({;"
        title: "Error",;`
        description: `Could not add project: ${e.message}`,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Error",;
        description: `Could not add project: ${e.message}`,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive";
      }),;
      return null;
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to update a portfolio project'),;
      return false;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



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
=======

;
  const update_project = async (project_id: string, project: PortfolioProject): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      set_error ('You must be logged in to update a portfolio project'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
<<<<<<< HEAD
    try {}
      const { error } = await supabase;'
        .from ('portfolio_projects');
<<<<<<< HEAD
        .update ({
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        .update ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    try {
      const { error } = await supabase;
        .from ('portfolio_projects');
        .update ({

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

          title: project && project.title;
          description: project && project.description;
          technologies: project && project.technologies;
          image_url: project && project.image_url;
          github_url: project && project.github_url;
          demo_url: project && project.demo_url,
          pdf_url: project && project.pdf_url;
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
<<<<<<< HEAD
<<<<<<< HEAD
          pdf_url: project.pdf_url
<<<<<<< HEAD
=======
          pdf_url: project.pdf_url
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        })
        .eq('id', projectId)
        .eq('user_id', user && user.id);
      

      if (error) throw error,
      

<<<<<<< HEAD
=======
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"

<<<<<<< HEAD
=======
<<<<<<< HEAD
      }),
      
      await fetchProjects(),


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return true
    } catch (e: any) {
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);
      toast({

<<<<<<< HEAD
=======
=======
        })
        .eq('id', projectId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      toast({
=======
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({      toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({      toast({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        title: "Project updated"
=======
          pdf_url: project.pdf_url;
      toast({"
        title: "Project updated""
        description: "Your portfolio project has been updated"


      toast({"
        title: "Project updated""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: "Your portfolio project has been updated"
      });
      await fetchProjects();
      return true;
    } catch (e: any) {'
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);
<<<<<<< HEAD
      toast({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      toast({"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      }),
      return false;
    } finally {}
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD

    }

    setIsLoading(true),
    setError(null),

      });
      return false;
    } finally {
      setIsLoading(false)
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title: "Error",

        description: `Could not update project: ${e.message}`,


<<<<<<< HEAD
=======
        title: "Error",
        description: `Could not update project: ${e && e.message}`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
    setIsLoading(true);
    setError(null);


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      }),        title: "Error",

        description: `Could not update project: ${e.message}`,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      }),        title: "Error",

        description: `Could not update project: ${e.message}`,

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      }),
      return false
    } finally {
      setIsLoading(false)
        title: "Error",

        description: `Could not update project: ${e.message}`,


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


    }
    setIsLoading(true);
    setError(null);


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('portfolio_projects');
        .update({;
          title: project.title,;
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
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Project updated",,
  description: "Your portfolio project has been updated";
=======
      toast({;"
        title: "Project updated",;"
        description: "Your portfolio project has been updated";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Project updated",;
        description: "Your portfolio project has been updated";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }),;
      await fetchProjects(),;
      return true;
    } catch (e: any) {;'
      console.error('Error updating portfolio project:', e),;
      setError(e.message),;
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Error",,
  description: `Could not update project: ${e.message}`,;
=======
      toast({;"
        title: "Error",;`
        description: `Could not update project: ${e.message}`,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Error",;
        description: `Could not update project: ${e.message}`,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive";
      }),;
      return false;
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteProject = async (projectId: string): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to delete a portfolio project'),;
      return false;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('id', projectId)
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======



    try {}
      const { error } = await supabase'
        .from('portfolio_projects')
        .delete()'
        .eq('id', projectId)
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      if (error) throw error;


      toast({"
        title: "Project deleted""
        description: "Your portfolio project has been deleted"
      });
'
        .eq('user_id', user.id),
      
      if (error) throw error,
      



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });
      setProjects(projects.filter(p => p.id !== projectId));
      }),
      
      setProjects(projects.filter(p => p.id !== projectId)),
      setProjects(projects && projects.filter(p => p && p.id !== projectId));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return true
=======
        .eq('id', projectId)      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });      return true
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .eq('id', projectId)      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });      return true
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        .eq('id', projectId)

        .eq('user_id', user && user.id);
      

      if (error) throw error;
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });

      
      setProjects(projects && projects.filter(p => p && p.id !== projectId));

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } catch (e: any) {
      console && console.error('Error deleting portfolio project:', e);
      setError(e && e.message);
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      return true;
    } catch (e: any) {'
      console && console.error('Error deleting portfolio project:', e);
      setError(e && e.message);
      toast({}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"
      }),
      return false;
    } finally {}
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        title: "Error",

        description: `Could not delete project: ${e.message}`,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
        title: "Error",
        description: `Could not delete project: ${e && e.message}`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"

;
  const delete_project = async (project_id: string): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('You must be logged in to delete a portfolio project'),
      return false;


=======

        variant: "destructive"
;
  const delete_project = async (project_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete a portfolio project'),
      return false;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
    setIsLoading (true);
    set_error (null);
;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        description: "Your portfolio project has been deleted";
      });
;
      set_projects (projects.filter (p => p.id !== project_id));
      return true;
<<<<<<< HEAD
    } catch (e: any) {'
      console.error ('Error deleting portfolio project:', e);
      set_error (e.message);
      toast ({"
        title: "Error",`
        description: `Could not delete project: ${e.message}`;"
        variant: "destructive";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD
=======
      setIsLoading(false)

=======
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

<<<<<<< HEAD
    fetch_projects;
    add_project;
    update_project;
    delete_project;
=======
    deleteProject
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
=======
  }
}

import { useState, useCallback } from 'react',;
import { PortfolioProject } from '@/types/resume',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from '@/hooks/use-toast',;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
=======
    is_loading;
    error;
    projects;  }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    is_loading;
    error;
    projects;  }
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

;

  return {
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function usePortfolio() {;
=======

;
export function usePortfolio() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
          title:project.title,;
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
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title:"Project added",,
  description:"Your project has been added to your portfolio";
=======
      toast({;"
        title:"Project added",;"
        description:"Your project has been added to your portfolio";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title:"Project added",;
        description:"Your project has been added to your portfolio";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }),;
      ;
      await fetchProjects(),;
      return data.id,;
    } catch (e:any) {;'
      console.error('Error adding portfolio project:', e),;
      setError(e.message),;
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title:"Error",,
  description:`Could not add project:${e.message}`,;
=======
      toast({;"
        title:"Error",;`
        description:`Could not add project:${e.message}`,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title:"Error",;
        description:`Could not add project:${e.message}`,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
          title:project.title,;
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
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title:"Project updated",,
  description:"Your portfolio project has been updated";
=======
      toast({;"
        title:"Project updated",;"
        description:"Your portfolio project has been updated";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title:"Project updated",;
        description:"Your portfolio project has been updated";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }),;
      ;
      await fetchProjects(),;
      return true,;
    } catch (e:any) {;'
      console.error('Error updating portfolio project:', e),;
      setError(e.message),;
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title:"Error",,
  description:`Could not update project:${e.message}`,;
=======
      toast({;"
        title:"Error",;`
        description:`Could not update project:${e.message}`,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title:"Error",;
        description:`Could not update project:${e.message}`,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title:"Project deleted",,
  description:"Your portfolio project has been deleted";
=======
      toast({;"
        title:"Project deleted",;"
        description:"Your portfolio project has been deleted";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title:"Project deleted",;
        description:"Your portfolio project has been deleted";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }),;
      ;
      setProjects(projects.filter(p => p.id !== projectId)),;
      return true,;
    } catch (e:any) {;'
      console.error('Error deleting portfolio project:', e),;
      setError(e.message),;
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title:"Error",,
  description:`Could not delete project:${e.message}`,;
=======
      toast({;"
        title:"Error",;`
        description:`Could not delete project:${e.message}`,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title:"Error",;
        description:`Could not delete project:${e.message}`,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  }
}
<<<<<<< HEAD
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
