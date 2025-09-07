import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';

export interface TalentProfileData {
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
export interface TalentProfileData {
export interface TalentProfileData {
export interface TalentProfileData {export interface TalentProfileData {


}

  const [error, setError] = useState<string | null>(null);
  const enhanceProfile = async (profileData: TalentProfileData): Promise<EnhancedProfile | null> => {
    setIsGenerating(true);
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
        throw new Error(error.message)

    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });
      if (error) {
    setError(null)      if (error) {
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

setError(err && err.message || 'Failed to enhance profile'),
      }
      return data as EnhancedProfile
    } catch (err: any) {
      setError(err.message |'Failed to enhance profile')
export interface CategorizedSkills {
  programming: string[];
  devops: string[];
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
export interface CategorizedSkills {
  programming: string[];
  devops: string[];

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

import {useState} from 'react';''
import {supabase} from '@/integrations / supabase / client';'
export interface TalentProfileData {
  // TODO: Implement
}
  // TODO: Implement
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;

  name: string;,
  title: string;
  bio: string;,
  skills: string[],
  location?: string;

export interface CategorizedSkills {
  // TODO: Implement
  // TODO: Implement


export interface CategorizedSkills {;

  programming: string[];,
  devops: string[];
  platforms: string[];
import { useState  } from 'react';
import { supabase } from '@/integrations/supabase/client';
  // TODO: Implement
  bio: string;
  // TODO: Implement


export interface EnhancedProfile {
  // TODO: Implement
  summary: string,
  categorizedSkills: CategorizedSkills;


  }
}
  }
}



pr-12325
}
    enhance_profile;
    is_generating;}
    error;}
  }

}
'

