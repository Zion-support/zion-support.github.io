



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';

export interface TalentProfileData {


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  name: string;
  title: string;
  bio: string;

  skills: string[],
  location?: string;

}

export interface CategorizedSkills {


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
  programming: string[];
  devops: string[];
  platforms: string[];





export interface EnhancedProfile {
  summary: string,
  categorizedSkills: CategorizedSkills
}

export function useTalentProfileEnhancer() {;
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const enhanceProfile = async (profileData: TalentProfileData): Promise<EnhancedProfile | null> => {
    setIsGenerating(true);
    setError(null),
    


    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });




      if (error) {
        throw new Error(error.message)

      if (error) {
        throw new Error(error.message)

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
export interface TalentProfileData {;
  name: string,;
  title: string,;
  bio: string,;
  skills: string[],;
  location?: string;
}
;
export interface CategorizedSkills {;
  programming: string[],;
  devops: string[],;
  platforms: string[],;
  softSkills: string[],;
  other: string[];
}
;
export interface EnhancedProfile {;
  summary: string,;
  categorizedSkills: CategorizedSkills;
}
;
export function useTalentProfileEnhancer() {;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const enhanceProfile = async (profileData: TalentProfileData): Promise<EnhancedProfile | null> => {;
    setIsGenerating(true),;
    setError(null),;
    try {;
      // Call the Supabase Edge Function;
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {;
        body: { talentData: profileData }
      }),;
      if (error) {;
        throw new Error(error.message);





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

      }
      return data as EnhancedProfile
    } catch (err: any) {

      setError(err && err.message || 'Failed to enhance profile'),

      return null
    } finally {
      setIsGenerating(false)
    }







  return {
    enhanceProfile;
    isGenerating;

    error
  },;
  return {;
    enhanceProfile;
    isGenerating;
    error;





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  }
}