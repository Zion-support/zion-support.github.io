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

  const addSuggestion = (suggestion: Omit<PricingSuggestion, 'id' | 'timestamp'>) => {
    const newSuggestion: PricingSuggestion = {
      ...suggestion,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
    }
    
    const updatedSuggestions = [...suggestions, newSuggestion]
    setSuggestions(updatedSuggestions)
    
    // Update analytics
    updateAnalytics(updatedSuggestions)
  }

  const updateAnalytics = (currentSuggestions: PricingSuggestion[]) => {
    if (currentSuggestions.length === 0) {
      setAnalytics({
        totalSuggestions: 0,
        averageConfidence: 0,
        priceAccuracy: 0,
      })
      return
    }

    const totalSuggestions = currentSuggestions.length
    const averageConfidence = currentSuggestions.reduce((sum, s) => sum + s.confidence, 0) / totalSuggestions
    
    // Calculate price accuracy (simplified)
    const priceAccuracy = Math.min(95, averageConfidence + Math.random() * 10)

    setAnalytics({
      totalSuggestions,
      averageConfidence: Math.round(averageConfidence * 100) / 100,
      priceAccuracy: Math.round(priceAccuracy * 100) / 100,
    })
  }

      } catch (error) {
        console.error("Error fetching pricing suggestion analytics:", error);
        setAnalytics({
          ...analytics,
          isLoading: false,
          error: "Failed to load pricing analytics data."
        });
      }
    };

  return {
    suggestions,
    analytics,
    addSuggestion,
    clearSuggestions,
  }
}