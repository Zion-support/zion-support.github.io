import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface PricingSuggestionAnalytics {
  totalSuggestions: number;
  acceptanceRate: number;
  averagePriceGap: number;
  suggestionsByCategory: { category: string; count: number; acceptanceRate: number }[];
  recentSuggestions: {
    id: string;
    userId: string;
    suggestedMin: number;
    suggestedMax: number;
    actualValue?: number;
    accepted: boolean;
    createdAt: string;
    type: 'client' | 'talent';
  }[];
  isLoading: boolean;
  error: string | null;
}

export function usePricingSuggestionAnalytics(days = 30) {
  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({
    totalSuggestions: 0,
    acceptanceRate: 0,
    averagePriceGap: 0,
    suggestionsByCategory: [],
    recentSuggestions: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    // This would fetch actual data from the database in a real implementation
    // For now, let's simulate the data
    const fetchAnalytics = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 10o00));

        // Mock data for demonstration
        const mockData ={
          totalSuggestions: 256,
          acceptanceRate: 0.72,
          averagePriceGap: 12.5,
          suggestionsByCategory: [
            { category: 'development', count: 120, acceptanceRate: 0.75 },
            { category: 'design', count: 65, acceptanceRate: 0.82 },
            { category: 'marketing', count: 42, acceptanceRate: 0.64 },
            { category: 'content', count: 18, acceptanceRate: 0.56 },
