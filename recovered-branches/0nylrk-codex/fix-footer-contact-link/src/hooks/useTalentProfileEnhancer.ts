import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';

<<<<<<< HEAD
export interface TalentProfileData {
export interface TalentProfileData {
=======
export interface TalentProfileData {export interface TalentProfileData {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;
<<<<<<< HEAD

  name: string;
  title: string;
  bio: string;

  skills: string[],
  location?: string;

}
export interface CategorizedSkills {
  name: string;
  title: string;
  bio: string;
  skills: string[],
  location?: string;
}
export interface CategorizedSkills {
}


export interface CategorizedSkills {;

  programming: string[];
  devops: string[];
  platforms: string[];
import { useState  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface TalentProfileData {
  name: string;
  title: string;
  bio: string;
}
export interface CategorizedSkills {

export interface CategorizedSkills {;
  programming: string[];
  devops: string[];
  platforms: string[];

=======
  devops: string[];
  platforms: string[];
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

export interface EnhancedProfile {
  summary: string,
  categorizedSkills: CategorizedSkills
}

  const [error, setError] = useState<string | null>(null);
  const enhanceProfile = async (profileData: TalentProfileData): Promise<EnhancedProfile | null> => {
    setIsGenerating(true);
<<<<<<< HEAD
    setError(null)

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
=======
    setError(null)      if (error) {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
      }
      return data as EnhancedProfile
    } catch (err: any) {

      setError(err && err.message || 'Failed to enhance profile'),

export interface CategorizedSkills {
  programming: string[];
  devops: string[];
<<<<<<< HEAD
  platforms: string[];
      return null
    } finally {
      setIsGenerating(false)
    }



  };
  


  return {
    enhanceProfile;
    isGenerating;

    error
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
  soft_skills: string[],
=======
  platforms: string[];  soft_skills: string[],
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  other: string[];
}
export interface EnhancedProfile {
  summary: string,
  categorized_skills: CategorizedSkills;
}
export /**
 * useTalentProfileEnhancer - Function description
 */
function useTalentProfileEnhancer() {
  const [is_generating, setIsGenerating] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const enhance_profile = async (profile_data: TalentProfileData): Promise < EnhancedProfile | null> => {
    setIsGenerating (true);
    set_error (null),
    try {
      // Call the Supabase Edge Function;
      const { data, error } = await supabase.functions.invoke ('talent - profile - enhancer', {
        body: { talent_data: profile_data }
      });
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (error.message);
      }
      return data as EnhancedProfile;
    } catch (err: any) {
      set_error (err.message || 'Failed to enhance profile'),
      return null;
    } finally {
      setIsGenerating (false);
    }
  }
;
  return {
    enhance_profile;
    is_generating;
    error;

<<<<<<< HEAD



  }
}
=======
  }
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
