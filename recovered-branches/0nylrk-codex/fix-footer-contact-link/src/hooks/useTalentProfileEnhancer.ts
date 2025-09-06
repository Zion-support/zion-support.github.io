
import { useState  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface TalentProfileData {
  name: string;
  title: string;
  bio: string;
<<<<<<< HEAD
  skills: string[];
=======
  skills: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  location?: string
}
export interface CategorizedSkills {
  programming: string[];
  devops: string[];
  platforms: string[];
<<<<<<< HEAD
  softSkills: string[];
=======
  softSkills: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  other: string[]
}
export interface EnhancedProfile {
<<<<<<< HEAD
  summary: string;
<<<<<<< HEAD
=======
  summary: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  categorizedSkills: CategorizedSkills
}
=======
  categorizedSkills: CategorizedSkills;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function useTalentProfileEnhancer() {
  const [isGenerating, setIsGenerating] = useState(false);
<<<<<<< HEAD
  const [error, setError] = useState<string | null>(null),
  
  const enhanceProfile = null;
=======
  const [error, setError] = useState<string | null>(null);
  const enhanceProfile = async (profileData: TalentProfileData): Promise<EnhancedProfile | null> => {
    setIsGenerating(true);
    setError(null)
    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });
      if (error) {
        throw new Error(error.message)
      }
      return data as EnhancedProfile
    } catch (err: any) {
      setError(err.message |'Failed to enhance profile')
      return null
    } finally {
      setIsGenerating(false)
    }
  }
  return {
    enhanceProfile;
    isGenerating;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    error
  }
}