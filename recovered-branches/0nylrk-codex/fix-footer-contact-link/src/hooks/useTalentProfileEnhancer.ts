
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

  skills: string[]

  location?: string
}
<<<<<<< HEAD
export interface CategorizedSkills {
=======

export interface CategorizedSkills {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  programming: string[];
  devops: string[];
  platforms: string[];

  softSkills: string[]

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
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {
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
      setError(err.message |'Failed to enhance profile')
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
  },;
  return {;
    enhanceProfile;
    isGenerating;
    error;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}