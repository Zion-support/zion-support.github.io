
<<<<<<< HEAD
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
;
export interface TalentProfileData {;
  name:string,;
  title:string,;
  bio:string,;
  skills:string[],;
  location?:string;
=======
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
export interface TalentProfileData {
  name: string,
  title: string,
  bio: string,
  skills: string[],
  location?: string
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface CategorizedSkills {;
  programming:string[],;
  devops:string[],;
  platforms:string[],;
  softSkills:string[],;
  other:string[];
}
;
export interface EnhancedProfile {;
  summary:string,;
  categorizedSkills:CategorizedSkills;
}
<<<<<<< HEAD
;
export function useTalentProfileEnhancer() {;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const enhanceProfile = async (profileData:TalentProfileData):Promise<EnhancedProfile | null> => {;
    setIsGenerating(true),;
    setError(null),;
    ;
    try {;
      // Call the Supabase Edge Function;
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {;
        body:{ talentData:profileData }
      }),;
;
      if (error) {;
        throw new Error(error.message),;
      }
      ;
      return data as EnhancedProfile,;
    } catch (err:any) {;
      setError(err.message || 'Failed to enhance profile'),;
      return null;
    } finally {;
      setIsGenerating(false),;
    }
  },;
  ;
  return {;
    enhanceProfile,;
    isGenerating,;
    error;
  },;
}
=======

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
  }}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
