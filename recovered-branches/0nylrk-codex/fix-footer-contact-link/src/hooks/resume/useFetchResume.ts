import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Resume } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
export function useFetchResume() {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  const [resume, setResume] = useState<Resume | null>(null),
  
  const fetchResume = async (resumeId?: string) => {
    if (!user) {
      setError($2);
      return null
    }
    
    setIsLoading($2);
    setError($2);
    try {
      // If resumeId is provided, fetch that specific resume
      // Otherwise, fetch the user's active resume or most recent resume
      let resumeQuery = supabase.from('talent_resumes').select($2);
      if (resumeId) {
        resumeQuery = resumeQuery.eq('id', resumeId)
      } else {
        resumeQuery = resumeQuery
          .eq('user_id', user.id)
          .order('is_active', { ascending: false})
          .order('created_at', { ascending: false})
          .limit(1)
      }
      
      const { data: resumeData, error: resumeError} = await resumeQuery.single($2);
      if (resumeError) {
        if (resumeError.code === 'PGRST116') {
          // No resume found, this is not a critical error for a new user
          setResume($2);
          setIsLoading($2);
          return null
        }
        throw resumeError
      }
      
      // Fetch work experience
      const { data: workData, error: workError} = await supabase
        .from('work_history')
        .select('*')
        .eq('resume_id', resumeData.id)
        .order('is_current', { ascending: false})
        .order($2);
      if (workError) throw workError,
      
      // Fetch education
      const { data: educationData, error: educationError} = await supabase
        .from('education')
        .select('*')
        .eq('resume_id', resumeData.id)
        .order('is_current', { ascending: false})
        .order($2);
      if (educationError) throw educationError,
      
      // Fetch skills
      const { data: skillsData, error: skillsError} = await supabase
        .from('resume_skills')
        .select('*')
        .eq($2);
      if (skillsError) throw skillsError,
      
      // Fetch certifications
      const { data: certData, error: certError} = await supabase
        .from('certifications')
        .select('*')
        .eq($2);
      if (certError) throw certError,
      
      const fullResume: Resume = $2;
        user_id: resumeData.user_id,
        basic_info: {
          id: resumeData.id,
          title: resumeData.title,
          headline: resumeData.headline,
          summary: resumeData.summary
        },
        work_experience: workData || [],
        education: educationData || [],
        skills: skillsData || [],
        certifications: certData || [],
        is_active: resumeData.is_active
      },
      
      setResume($2);
      return fullResume
    } catch (e: any) {
      console.error($2);
      setError($2);
      return null
    } finally {
      setIsLoading(false)
    }
  },

  return {
    isLoading,
    error,
    resume,
    fetchResume}
}
