import {useState, useEffect} from 'react';
import { supabase } from '@/integrations / supabase / client';interface PricingSuggestionAnalytics {
  total_suggestions: number;
  acceptance_rate: number;
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptance_rate: number }[];

    type: 'client' | 'talent'        setAnalytics({
          ...mockData;
          isLoading: false;
          error: null;
        });


        // Mock data for demonstration;
        const mockData = {}
          totalSuggestions: 256,
          acceptanceRate: 0.72,
          averagePriceGap: 12.5,
          suggestionsByCategory: ['
            { category: 'development', count: 120, acceptanceRate: 0.75 },'
            { category: 'design', count: 65, acceptanceRate: 0.82 },'
            { category: 'marketing', count: 42, acceptanceRate: 0.64 },'
            { category: 'content', count: 18, acceptanceRate: 0.56 },'
            { category: 'data', count: 11, acceptanceRate: 0.78 }],
          recentSuggestions: Array(10).fill(null).map((_, i) => ({}
            id: `suggestion-${i}`,`


