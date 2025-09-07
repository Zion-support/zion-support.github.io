scope: string;
  scope: string;
  scope: string;,
pr-12325
  startDate: string;


import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from 'sonner';
export interface MilestoneInput {

}
  scope: string;,
  start_date: string;
  end_date: string | null,}
  project_type: string;}
}
export interface GeneratedMilestone {;


  title: string;,
pr-12325
  description: string;

      setIsGenerating(true),

      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {

import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from 'sonner';
export interface MilestoneInput {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {toast} from 'sonner';
export interface MilestoneInput {;
  scope: string;
  startDate: string;

  endDate: string | null

  projectType: string
}
export interface GeneratedMilestone {

export interface GeneratedMilestone {;
  title: string;
  description: string;
  dueDate: string;

  estimatedHours: number

  isAiGenerated: boolean
}
  const [isGenerating, setIsGenerating] = useState(false);

      setIsGenerating(true),
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {')
pr-12325
export function useMilestoneGenerator() {

export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);

