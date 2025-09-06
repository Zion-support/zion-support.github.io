
import { useState, useEffect  } from 'react';
import { supabase } from "@/integrations/supabase/client";
interface PricingSuggestionAnalytics {
  totalSuggestions: number;
  acceptanceRate: number;
  averagePriceGap: number;
  suggestionsByCategory: { category: string, count: number, acceptanceRate: number }[],

  recentSuggestions: {
    id: string;
    userId: string;
    suggestedMin: number;
    suggestedMax: number;
    actualValue?: number;
    accepted: boolean;

    createdAt: string;
    type: 'client' | 'talent'
  }[],
  isLoading: boolean;
  error: string | null
}

export function usePricingSuggestionAnalytics(days;

  return analytics
};