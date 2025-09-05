
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
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
  categorizedSkills: CategorizedSkills
}

export function useTalentProfileEnhancer() {
  const [isGenerating, setIsGenerating] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const enhanceProfile = async (profileData: TalentProfileData): Promise<EnhancedProfile | null> => {
    setIsGenerating(true),
    setError(null),
    
    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      }),

      if (error) {
        throw new Error(error.message)
      }
      
      return data as EnhancedProfile
    } catch (err: any) {
      setError(err.message || 'Failed to enhance profile'),
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
=======

export interface TalentProfileData {_name: string;
  title: string;
  bio: string;
  skills: string[];
  location?: string;}

export interface CategorizedSkills {_programming: string[];
  devops: string[];
  platforms: string[];
  softSkills: string[];
  other: string[];}

export interface EnhancedProfile {_summary: string;
  categorizedSkills: CategorizedSkills;}

export function useTalentProfileEnhancer() {_const [isGenerating, _setIsGenerating] = useState(false);
  const [error, _setError] = useState<string | null>(null);
  
  const _enhanceProfile = async (profileData: TalentProfileData): Promise<EnhancedProfile | null> => {
    setIsGenerating(true);
    setError(null);
    
    try {
      // Call the Supabase Edge Function
      const { data, _error} = await supabase.functions.invoke('talent-profile-enhancer', {_body: { talentData: profileData}
      });

      if (error) {_throw new Error(error.message);}
      
      return data as EnhancedProfile;
    } catch (err: unknown) {_setError(err.message || 'Failed to enhance profile');
      return null;} finally {_setIsGenerating(false);}
  };
  
  return {_enhanceProfile, _isGenerating, _error};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
