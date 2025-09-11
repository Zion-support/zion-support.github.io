
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';

export interface TalentProfileData {
=======

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  name: string;
  title: string;
  bio: string;

  skills: string[],
  location?: string;

}
export interface CategorizedSkills {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
      const { data, error } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });




      if (error) {
        throw new Error(error.message)
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
      return data as EnhancedProfile
    } catch (err: any) {

      setError(err && err.message || 'Failed to enhance profile'),

      return null
    } finally {
      setIsGenerating(false)
    }


  };
  


  return {
    enhanceProfile;
    isGenerating;

    error
  },;
  return {;
    enhanceProfile;
    isGenerating;
    error;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}