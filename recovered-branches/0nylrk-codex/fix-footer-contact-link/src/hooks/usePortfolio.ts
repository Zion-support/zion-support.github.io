
import { useState, useCallback } from 'react';
import { PortfolioProject } from '@/types/resume';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
export function usePortfolio() {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  const [projects, setProjects] = useState<PortfolioProject[]>([]),
  
  const fetchProjects = useCallback(async () => {
    if (!user) {
      setError($2);
      return []
    }
    
    setIsLoading($2);
    setError($2);
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('user_id', user.id)
        .order($2);
      if (error) throw error,
      
      setProjects($2);
      return data || []
    } catch (e: any) {
      console.error($2);
      setError($2);
      return []
    } finally {
      setIsLoading(false)
    }
  }, [user]),
  
  const addProject = async (project: PortfolioProject): Promise<string | null> => {
    if (!user) {
      setError($2);
      return null
    }
    
    setIsLoading($2);
    setError($2);
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({
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
        .from('portfolio_projects')
        .update({
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
          pdf_url: project.pdf_url
        })
        .eq('id', projectId)
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
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)
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
    isLoading,
    error,
    projects,
    fetchProjects,
    addProject,
    updateProject,
    deleteProject
  }
}
