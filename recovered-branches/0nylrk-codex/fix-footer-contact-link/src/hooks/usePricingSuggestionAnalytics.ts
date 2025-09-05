<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",
=======
import { useState, useEffect } from 'react';
import { supabase } from &quot;@/integrations/supabase/client&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PricingSuggestionAnalytics {
  totalSuggestions: number,
  acceptanceRate: number,
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptanceRate: number }[],
  recentSuggestions: {
    id: string,
    userId: string,
    suggestedMin: number,
    suggestedMax: number,
    actualValue?: number,
    accepted: boolean,
    createdAt: string,
    type: 'client' | 'talent'
  }[],
  isLoading: boolean,
  error: string | null
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
  }),
=======

interface PricingSuggestionAnalytics {_totalSuggestions: number;
  acceptanceRate: number;
  averagePriceGap: number;
  suggestionsByCategory: { category: string; count: number; acceptanceRate: number}[];
  recentSuggestions: {_id: string;
    userId: string;
    suggestedMin: number;
    suggestedMax: number;
    actualValue?: number;
    accepted: boolean;
    createdAt: string;
    type: 'client' | 'talent';}[];
  isLoading: boolean;
  error: string | null;
}

export function usePricingSuggestionAnalytics(_days = 30) {_const [analytics, _setAnalytics] = useState<PricingSuggestionAnalytics>({
    totalSuggestions: 0, _acceptanceRate: 0, _averagePriceGap: 0, _suggestionsByCategory: [], _recentSuggestions: [], _isLoading: true, _error: null});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {_// This would fetch actual data from the database in a real implementation
    // For now, _let's simulate the data
    const _fetchAnalytics = async () => {
      try {
        // Simulate API delay
<<<<<<< HEAD
        await new Promise(resolve => setTimeout(resolve, 1000)),
=======
        await new Promise(resolve => setTimeout(resolve, _1000));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        // Mock data for demonstration
        const _mockData = {
          totalSuggestions: 256, _acceptanceRate: 0.72, _averagePriceGap: 12.5, _suggestionsByCategory: [
            { category: 'development', _count: 120, _acceptanceRate: 0.75},
            {_category: 'design', _count: 65, _acceptanceRate: 0.82},
            {_category: 'marketing', _count: 42, _acceptanceRate: 0.64},
            {_category: 'content', _count: 18, _acceptanceRate: 0.56},
            {_category: 'data', _count: 11, _acceptanceRate: 0.78}],
          recentSuggestions: Array(10).fill(null).map(_(_, _i) => ({_id: `suggestion-${i}`,
            userId: `user-${_Math.floor(Math.random() * 100)}`,
            suggestedMin: 30 + Math.floor(Math.random() * 30),
            suggestedMax: 60 + Math.floor(Math.random() * 40),
            actualValue: Math.random() > 0.3 ? 45 + Math.floor(Math.random() * 30) : undefined,
            accepted: Math.random() > 0.25,
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString(),
            type: Math.random() > 0.5 ? 'client' : 'talent' as 'client' | 'talent'}))
        },

<<<<<<< HEAD
        setAnalytics({
          ...mockData,
          isLoading: false,
          error: null
        }),
=======
        setAnalytics({_...mockData, _isLoading: false, _error: null});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        // In a real implementation with Supabase, you might do:
        // const {_data, _error} = await supabase
        //   .from('pricing_suggestions')
        //   .select(...)
<<<<<<< HEAD
        //   .gte('created_at', `now() - interval '${days} days'`),
        
        // if (error) throw error,
        // Process data and setAnalytics({...})

      } catch (error) {
<<<<<<< HEAD
        console.error("Error fetching pricing suggestion analytics:", error),
        setAnalytics({
          ...analytics,
          isLoading: false,
          error: "Failed to load pricing analytics data."
        })
=======
        console.error(&quot;Error fetching pricing suggestion analytics:&quot;, error);
        setAnalytics({
          ...analytics,
          isLoading: false,
          error: &quot;Failed to load pricing analytics data.&quot;
        });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        //   .gte('created_at', `now() - interval '${_days} days'`);
        
        // if (error) throw error;
        // Process data and setAnalytics({_...})

      } catch (error) {_setAnalytics({
          ...analytics, _isLoading: false, _error: "Failed to load pricing analytics data."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    },

    fetchAnalytics()
  }, [days]),

  return analytics
}