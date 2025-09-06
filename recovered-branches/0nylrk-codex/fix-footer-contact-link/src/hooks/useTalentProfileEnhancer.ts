
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface TalentProfileData {
  name: string,
  title: string,
  bio: string,
  skills: string[],
  location?: string
}

export interface CategorizedSkills {
  programming: string[],
  devops: string[],
  platforms: string[],
  softSkills: string[],
  other: string[]
}

export interface EnhancedProfile {
  summary: string,
  categorizedSkills: CategorizedSkills}

export function useTalentProfileEnhancer() {
  const [isGenerating, setIsGenerating] = useState($2);
  const [error, setError] = useState<string | null>(null),
  
  const enhanceProfile = async (profileData: TalentProfileData): Promise<EnhancedProfile | null> => {
    setIsGenerating($2);
    setError($2);
    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke($2);
      if (error) {
        throw new Error(error.message)
      }
      
      return data as EnhancedProfile
    } catch (err: any) {
      setError($2);
      return null
    } finally {
      setIsGenerating(false)
    }
  },
  
  return {
    enhanceProfile,
    isGenerating,
    error
  }
}
