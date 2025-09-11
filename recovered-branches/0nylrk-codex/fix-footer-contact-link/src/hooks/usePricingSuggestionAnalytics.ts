
import {useState, useEffect} from 'react';
import { supabase } from '@/integrations / supabase / client';
interface PricingSuggestionAnalytics {
  total_suggestions: number;
  acceptance_rate: number;
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptance_rate: number }[];
  recent_suggestions: {
    id: string;
    user_id: string;
    suggested_min: number;
    suggested_max: number;
    actual_value?: number;
    accepted: boolean;
  averagePriceGap: number
  suggestionsByCategory: { category: string, count: number, acceptanceRate: number }[];

  recentSuggestions: {
    id: string;
    userId: string;
    suggestedMin: number;
    suggestedMax: number;
    actualValue?: number;
    accepted: boolean;

    createdAt: string
    type: 'client' | 'talent'
  }[];
  isLoading: boolean

import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",
import {useState, useEffect} from 'react';
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",


import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",
import {useState, useEffect} from 'react';
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",


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

  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({=======
  useEffect(() => {
    // This would fetch actual data from the database in a real implementation
    // For now, let's simulate the data
    const fetchAnalytics = async () => {
      try {
        // Simulate API delay


        setAnalytics({
          ...mockData;
          isLoading: false
          error: null
        });

        // Mock data for demonstration
        const mockData = {
          totalSuggestions: 256,
          acceptanceRate: 0.72,
          averagePriceGap: 12.5,
          suggestionsByCategory: [
            { category: 'development', count: 120, acceptanceRate: 0.75 },
            { category: 'design', count: 65, acceptanceRate: 0.82 },
            { category: 'marketing', count: 42, acceptanceRate: 0.64 },
            { category: 'content', count: 18, acceptanceRate: 0.56 },
            { category: 'data', count: 11, acceptanceRate: 0.78 }],
          recentSuggestions: Array(10).fill(null).map((_, i) => ({
            id: `suggestion-${i}`,
            userId: `user-${Math.floor(Math.random() * 100)}`,
            suggestedMin: 30 + Math.floor(Math.random() * 30),
            suggestedMax: 60 + Math.floor(Math.random() * 40),
            actualValue: Math.random() > 0.3 ? 45 + Math.floor(Math.random() * 30) : undefined,
            accepted: Math.random() > 0.25,
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString(),
            type: Math.random() > 0.5 ? 'client' : 'talent' as 'client' | 'talent'}))
        },

        setAnalytics({
          ...mockData,
          isLoading: false,
          error: null
        }),

        // In a real implementation with Supabase, you might do:
        // const { data, error } = await supabase
        //   .from('pricing_suggestions')
        //   .select(...)
    created_at: string,
        //   .gte('created_at', `now() - interval '${days} days'`),
        
        // if (error) throw error,

        // Process data and setAnalytics({...})
      } catch (error) {

};

};

        setAnalytics({
          ...analytics,
          isLoading: false,
          error: "Failed to load pricing analytics data."
        })
import { useState, useEffect } from 'react',;
import { supabase } from "@/integrations/supabase/client",;
interface PricingSuggestionAnalytics {;
  totalSuggestions: number,;
  acceptanceRate: number,;
  averagePriceGap: number,;
  suggestionsByCategory: { category: string, count: number, acceptanceRate: number }[],;
  recentSuggestions: {;
    id: string,;
    userId: string,;
    suggestedMin: number,;
    suggestedMax: number,;
    actualValue?: number,;
    accepted: boolean,;
    createdAt: string,;


import { useState, useEffect } from 'react',;
import { supabase } from "@/integrations/supabase/client",;
;
interface PricingSuggestionAnalytics {;
  totalSuggestions:number,;
  acceptanceRate:number,;
  averagePriceGap:number,;
  suggestionsByCategory:{ category:string, count:number, acceptanceRate:number }[],;
  recentSuggestions:{;
    id:string,;
    userId:string,;
    suggestedMin:number,;
    suggestedMax:number,;
    actualValue?:number,;
    accepted:boolean,;
    createdAt:string,;
    type:'client' | 'talent';
  }[],;
  isLoading:boolean,;
  error:string | null;
    type: 'client' | 'talent';
  }[],;
  isLoading: boolean,;
  error: string | null;
}
;
export function usePricingSuggestionAnalytics(days = 30) {;
  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({;
    totalSuggestions: 0,;
    acceptanceRate: 0,;
    averagePriceGap: 0,;
    suggestionsByCategory: [],;
    recentSuggestions: [],;
    isLoading: true,;
    error: null;
  }),;
  useEffect(() => {;
    // This would fetch actual data from the database in a real implementation;
    // For now, let's simulate the data;
    const fetchAnalytics = async () => {;
      try {;
        // Simulate API delay;
        await new Promise(resolve => setTimeout(resolve, 1000)),;
        // Mock data for demonstration;
        const mockData = {;
          totalSuggestions: 256,;
          acceptanceRate: 0.72,;
          averagePriceGap: 12.5,;
          suggestionsByCategory: [;
            { category: 'development', count: 120, acceptanceRate: 0.75 },;
            { category: 'design', count: 65, acceptanceRate: 0.82 },;
            { category: 'marketing', count: 42, acceptanceRate: 0.64 },;
            { category: 'content', count: 18, acceptanceRate: 0.56 },;
            { category: 'data', count: 11, acceptanceRate: 0.78 }],;
          recentSuggestions: Array(10).fill(null).map((_, i) => ({;
            id: `suggestion-${i}`,;
            userId: `user-${Math.floor(Math.random() * 100)}`,;
            suggestedMin: 30 + Math.floor(Math.random() * 30),;
            suggestedMax: 60 + Math.floor(Math.random() * 40),;
            actualValue: Math.random() > 0.3 ? 45 + Math.floor(Math.random() * 30) : undefined,;
            accepted: Math.random() > 0.25,;
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString(),;
            type: Math.random() > 0.5 ? 'client' : 'talent' as 'client' | 'talent'}));
        },;
        setAnalytics({;
          ...mockData,;
          isLoading: false,;
          error: null;
        }),;
        // In a real implementation with Supabase, you might do:;
        // const { data, error } = await supabase;
        //   .from('pricing_suggestions');
        //   .select(...);
        //   .gte('created_at', `now() - interval '${days} days'`),;
        // if (error) throw error,;
        // Process data and setAnalytics({...});
      } catch (error) {;
        console.error("Error fetching pricing suggestion analytics:", error),;
        setAnalytics({;
          ...analytics,;
          isLoading: false,;
          error: "Failed to load pricing analytics data.";
        });
      }
    };
    fetchAnalytics();
  }, [days]);
  return analytics;
}
}
  }[];
  is_loading: boolean,
  error: string | null;
}
export /**
 * usePricingSuggestionAnalytics - Function description
 */
function usePricingSuggestionAnalytics() {
  const [analytics, set_analytics] = useState < PricingSuggestionAnalytics>({
    total_suggestions: 0;
    acceptance_rate: 0;
    averagePriceGap: 0;
    suggestionsByCategory: [];
    recent_suggestions: [];
    is_loading: true,
    error: null;
  });
;
  useEffect (() => {
    // This would fetch actual data from the database in a real implementation;
    // For now, let's simulate the data;
    const fetch_analytics = async () => {
      try {
        // Simulate API delay;
        await new Promise (resolve => set_timeout (resolve, 1000));
;
        // Mock data for demonstration;
        const mock_data = {
          total_suggestions: 256;
          acceptance_rate: 0.72;
          averagePriceGap: 12.5,
          suggestionsByCategory: [;
            { category: 'development', count: 120, acceptance_rate: 0.75 }
            { category: 'design', count: 65, acceptance_rate: 0.82 }
            { category: 'marketing', count: 42, acceptance_rate: 0.64 }
            { category: 'content', count: 18, acceptance_rate: 0.56 }
            { category: 'data', count: 11, acceptance_rate: 0.78 }];
          recent_suggestions: Array (10).fill (null).map ((_, i) => ({
            id: `suggestion-${i}`;
            user_id: `user-${Math.floor (Math.random () * 100)}`;
            suggested_min: 30 + Math.floor (Math.random () * 30);
            suggested_max: 60 + Math.floor (Math.random () * 40);
            actual_value: Math.random () > 0.3 ? 45 + Math.floor (Math.random () * 30) : undefined;
            accepted: Math.random () > 0.25;
            created_at: new Date (Date.now () - Math.floor (Math.random () * 1000000000)).toISOString (),
            type: Math.random () > 0.5 ? 'client' : 'talent' as 'client' | 'talent'}));
        }
;
        set_analytics ({
          ...mock_data;
          is_loading: false,
          error: null;
        });
;
        // In a real implementation with Supabase, you might do:;
        // const { data, error } = await supabase;
        //   .from ('pricing_suggestions');
        //   .select (...);
        //   .gte ('created_at', `now () - interval '${days} days'`);
;
        // // Check condition
if (throw error) {
  $2
}
        // Process data and set_analytics ({...});
      } catch (error) {
        console.error ("Error fetching pricing suggestion analytics:", error);
        set_analytics ({
          ...analytics;
          is_loading: false,
          error: "Failed to load pricing analytics data.";
        });
      }
    }
;
    fetch_analytics ();
  }, [days]);
;
  return analytics;


}


