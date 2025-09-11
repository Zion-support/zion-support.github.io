
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
export interface TalentProfileData {

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface TalentProfileData {;
  name: string;
  title: string;
  bio: string;

  location?: string
}
export interface CategorizedSkills {

export interface CategorizedSkills {;
  location?: string;

}
export interface CategorizedSkills {

export interface CategorizedSkills {;

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

      // Call the Supabase Edge Function
      const { data, error } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });





      setError(err && err.message || 'Failed to enhance profile'),
