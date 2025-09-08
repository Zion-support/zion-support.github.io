
interface PricingSuggestionAnalytics {

  total_suggestions: number;
  acceptance_rate: number;
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptance_rate: number }[];

    id: string;
    user_id: string;
    suggested_min: number;
    suggested_max: number;
    actual_value?: number;

    accepted: boolean;

import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",

import {useState, useEffect} from 'react';
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",

interface PricingSuggestionAnalytics {

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

interface PricingSuggestionAnalytics {

  totalSuggestions: number,
  acceptanceRate: number,
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptanceRate: number }[],
  recentSuggestions: {}
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



  useEffect(() => {
    // This would fetch actual data from the database in a real implementation
    // For now, let's simulate the data
    const fetchAnalytics = async () => {
      try {
        // Simulate API delay



        setAnalytics({

          ...mockData;
          isLoading: false;
          error: null;
        });


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

            userId: `user-${Math.floor(Math.random() * 100)}`,
            suggestedMin: 30 + Math.floor(Math.random() * 30),
            suggestedMax: 60 + Math.floor(Math.random() * 40),
            actualValue: Math.random() > 0.3 ? 45 + Math.floor(Math.random() * 30) : undefined,
            accepted: Math.random() > 0.25,

            createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString(),'
            type: Math.random() > 0.5 ? 'client' : 'talent' as 'client' | 'talent'}))
        },

        setAnalytics({}
          ...mockData,
          isLoading: false,
          error: null;
        }),



        // In a real implementation with Supabase, you might do:
        // const { data, error } = await supabase'
        //   .from('pricing_suggestions')
        //   .select(...)



        setAnalytics({
          ...analytics,
          isLoading: false,
          error: "Failed to load pricing analytics data."
        })

        console.error("Error fetching pricing suggestion analytics:", error),
        setAnalytics({

          ...analytics,
          isLoading: false,"
          error: "Failed to load pricing analytics data."
        })
"
        console.error("Error fetching pricing suggestion analytics:", error),
        setAnalytics({}
          ...analytics,
          isLoading: false,"
          error: "Failed to load pricing analytics data."
        })'
import { useState, useEffect } from 'react',;"
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





