
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;


export interface CategorizedSkills {;

  programming: string[];
  devops: string[];
  platforms: string[];
import { useState  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface TalentProfileData {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export interface TalentProfileData {
=======

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  name: string;
  title: string;
  bio: string;

  location?: string
}
export interface CategorizedSkills {

export interface CategorizedSkills {;
=======
=======  skills: string[],
  location?: string;

}
export interface CategorizedSkills {
=======

export interface CategorizedSkills {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  programming: string[];
  devops: string[];
  platforms: string[];

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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
    


      if (error) {
        throw new Error(error.message)

    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });

=======
=======    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });





      setError(err && err.message || 'Failed to enhance profile'),

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  };
  


    error
<<<<<<< HEAD
<<<<<<< HEAD
=======  },;
  return {;
    enhanceProfile;
    isGenerating;
    error;


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
=======
  }
}