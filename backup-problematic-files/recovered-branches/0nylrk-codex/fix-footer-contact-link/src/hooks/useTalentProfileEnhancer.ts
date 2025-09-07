
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
;
export interface TalentProfileData {;
  name:string;
  title:string;
  bio:string;
  skills:string[];
  location?:string;}
;
export interface CategorizedSkills {;
  programming:string[];
  devops:string[];
  platforms:string[];
  softSkills:string[];
  other:string[];
}
;
export interface EnhancedProfile {;
  summary:string;
  categorizedSkills:CategorizedSkills;
}
;
export function useTalentProfileEnhancer() {;
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  ;
  const enhanceProfile = async (profileData:TalentProfileData):Promise<EnhancedProfile | null> => {;
    setIsGenerating(true);
    setError(null);
    ;
    try {;
      // Call the Supabase Edge Function;
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {;
        body:{ talentData:profileData }
      });
;
      if (error) {;
        throw new Error(error.message);
      }
      ;
      return data as EnhancedProfile;
    } catch (err:any) {;
      setError(err.message || 'Failed to enhance profile');
      return null;
    } finally {;
      setIsGenerating(false);
    }
  };
  ;
  return {;
    enhanceProfile;
    isGenerating;
    error;
  };
} 
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
