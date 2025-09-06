
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface TalentProfileData {
=======

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  name: string;
  title: string;
  bio: string;

  skills: string[],
  location?: string;

}
<<<<<<< HEAD
export interface CategorizedSkills {
=======
}


export interface CategorizedSkills {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  programming: string[];
  devops: string[];
  platforms: string[];


  other: string[]
}
<<<<<<< HEAD
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
=======

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
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      if (error) {
        throw new Error(error.message)
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      return data as EnhancedProfile
    } catch (err: any) {

      setError(err && err.message || 'Failed to enhance profile'),

      return null
    } finally {
      setIsGenerating(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  };
  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return {
    enhanceProfile;
    isGenerating;

    error
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}