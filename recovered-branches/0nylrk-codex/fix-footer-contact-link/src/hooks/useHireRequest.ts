
export interface HireRequestData {
  talent: {
    id: string;
    full_name: string;
    professional_title: string,
    email?: string;
  }
  requester: {
    name: string;
    email: string,
    id?: string;

  project: {
    overview: string;
    timeline: string;

    budgetMin: number

import {useState} from 'react';
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {TalentProfile} from "@/types/talent";
export interface HireRequestData {
  talent: {;
    id: string;
    full_name: string;
import { useState } from 'react',
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { TalentProfile } from "@/types/talent",
export interface HireRequestData {
  talent: {
    id: string,
    full_name: string,
    professional_title: string,
    email?: string
  },
  requester: {
    name: string,
    email: string,
    id?: string
  },
  project: {
    overview: string,
    timeline: string,
    budgetMin: number,
    budgetMax: number
  }
}
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const submitHireRequest = async (requestData: HireRequestData) => {
    setIsSubmitting(true);
    setError(null)
    try {
      // Call the edge function to process the hire request
    } finally {
      setIsSubmitting (false);
    }
  }
        title: "Error",
        description: errorMessage,
        variant: "destructive"}),
      
  return {
    submitHireRequest;
    isSubmitting;

        title: "Error",
        description: errorMessage,
        variant: "destructive"}),
      
  }
}
