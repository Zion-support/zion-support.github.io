
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';

<<<<<<< HEAD
export interface TalentProfileData {
=======
=======
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
export interface TalentProfileData {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  name: string;
  title: string;
  bio: string;

  skills: string[],
  location?: string;

}
export interface CategorizedSkills {
=======
=======
  name: string;
  title: string;
  bio: string;
  skills: string[],
  location?: string;
}
export interface CategorizedSkills {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface CategorizedSkills {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  programming: string[];
  devops: string[];
  platforms: string[];
import { useState  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface TalentProfileData {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;
  name: string;
  title: string;
  bio: string;

  skills: string[]

  location?: string
}
export interface CategorizedSkills {

export interface CategorizedSkills {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  programming: string[];
  devops: string[];
  platforms: string[];

<<<<<<< HEAD

=======
  softSkills: string[]

  other: string[]
}
export interface EnhancedProfile {

  summary: string

  categorizedSkills: CategorizedSkills
}
export function useTalentProfileEnhancer() {
  const [isGenerating, setIsGenerating] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const enhanceProfile = async (profileData: TalentProfileData): Promise<EnhancedProfile | null> => {
    setIsGenerating(true);
    setError(null)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
    


<<<<<<< HEAD
    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });




=======

      if (error) {
        throw new Error(error.message)

    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


      }
      return data as EnhancedProfile
    } catch (err: any) {

      setError(err && err.message || 'Failed to enhance profile'),

<<<<<<< HEAD
=======
      setError(err && err.message || 'Failed to enhance profile'),
      }
      return data as EnhancedProfile
    } catch (err: any) {
      setError(err.message |'Failed to enhance profile')
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return null
    } finally {
      setIsGenerating(false)
    }

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  };
  


  return {
    enhanceProfile;
    isGenerating;
<<<<<<< HEAD

    error
=======
=======
    error
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  soft_skills: string[],
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




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
=======
  }
}

import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
;
export interface TalentProfileData {;
  name:string,;
  title:string,;
  bio:string,;
  skills:string[],;
  location?:string;}
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
}
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
