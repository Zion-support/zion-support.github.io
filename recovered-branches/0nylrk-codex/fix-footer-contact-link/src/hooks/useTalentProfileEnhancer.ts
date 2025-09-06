<<<<<<< HEAD

<<<<<<< HEAD
import { useState  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface TalentProfileData {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;
=======
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';

export interface TalentProfileData {
=======

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface TalentProfileData {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  name: string;
  title: string;
  bio: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface CategorizedSkills {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface CategorizedSkills {

export interface CategorizedSkills {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  programming: string[];
  devops: string[];
  platforms: string[];


<<<<<<< HEAD
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
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      }
      return data as EnhancedProfile
    } catch (err: any) {

      setError(err && err.message || 'Failed to enhance profile'),

=======
export interface CategorizedSkills {
  programming: string[];
  devops: string[];
  platforms: string[];
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      return null
    } finally {
      setIsGenerating(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
  };
  
=======


  };
  


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return {
    enhanceProfile;
    isGenerating;

    error
  },;
  return {;
    enhanceProfile;
    isGenerating;
    error;
<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }
}