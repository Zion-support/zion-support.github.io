<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { supabase } from "@/integrations/supabase/client";
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {useState, useEffect} from 'react';
import { supabase } from '@/integrations / supabase / client';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface PricingSuggestionAnalytics {
=======

import {useState, useEffect} from 'react';
<<<<<<< HEAD
import { supabase } from '@/integrations / supabase / client';interface PricingSuggestionAnalytics {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import {useState, useEffect} from 'react';
import { supabase } from '@/integrations / supabase / client';interface PricingSuggestionAnalytics {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

interface PricingSuggestionAnalytics {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { supabase } from '@/integrations / supabase / client';
interface PricingSuggestionAnalytics {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  total_suggestions: number;
  acceptance_rate: number;
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptance_rate: number }[];
  recent_suggestions: {}
    id: string;
    user_id: string;
    suggested_min: number;
    suggested_max: number;
    actual_value?: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    accepted: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======


    id: string;
    user_id: string;
    suggested_min: number;
    suggested_max: number;
    actual_value?: number;
    accepted: boolean;

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
import { useState, useEffect  } from 'react';
import { supabase } from "@/integrations/supabase/client";
interface PricingSuggestionAnalytics {
  totalSuggestions: number;
  acceptanceRate: number;
<<<<<<< HEAD

  averagePriceGap: number
  suggestionsByCategory: { category: string, count: number, acceptanceRate: number }[];

  recentSuggestions: {
    id: string;
    userId: string;
    suggestedMin: number;
    suggestedMax: number;
    actualValue?: number;
    accepted: boolean;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    createdAt: string
    type: 'client' | 'talent'
  }[];
  isLoading: boolean
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",

';
import {useState, useEffect} from 'react';"
import {supabase} from "@/integrations/supabase/client";'
import { useState, useEffect } from 'react',"
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface PricingSuggestionAnalytics {
=======
    accepted: boolean;import {useState, useEffect} from 'react';
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",interface PricingSuggestionAnalytics {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    accepted: boolean;import {useState, useEffect} from 'react';
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",interface PricingSuggestionAnalytics {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

interface PricingSuggestionAnalytics {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    accepted: boolean;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    accepted: boolean;import {useState, useEffect} from 'react';
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from 'react',;
import { supabase } from "@/integrations/supabase/client",interface PricingSuggestionAnalytics {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  totalSuggestions: number,
  acceptanceRate: number,
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptanceRate: number }[],
  recentSuggestions: {}
    id: string,
<<<<<<< HEAD
    userId: string,
    suggestedMin: number,
    suggestedMax: number,
    actualValue?: number,
    accepted: boolean,
<<<<<<< HEAD
    createdAt: string,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    type: 'client' | 'talent'
<<<<<<< HEAD
  }[],
  isLoading: boolean,
=======
    type: 'client' | 'talent'
  }[],
  isLoading: boolean,
  error: string | null
=======
import { supabase } from '@/integrations / supabase / client';

import {useState, useEffect} from 'react';''
import { supabase } from '@/integrations / supabase / client';'
interface PricingSuggestionAnalytics {
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
  total_suggestions: number;,
  acceptance_rate: number;
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptance_rate: number }[];
  recent_suggestions: {,
  id: string;
    user_id: string;,
  suggested_min: number;
    suggested_max: number;
    actual_value?: number;
    accepted: boolean;


<<<<<<< HEAD
  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({

  useEffect(() => {
    // This would fetch actual data from the database in a real implementation
    // For now, let's simulate the data
    const fetchAnalytics = async () => {
      try {
        // Simulate API delay

          acceptanceRate: 0 && 0.72;
          averagePriceGap: 12 && 12.5,
          suggestionsByCategory: [
            { category: 'development', count: 120, acceptanceRate: 0 && 0.75 };
            { category: 'design', count: 65, acceptanceRate: 0 && 0.82 };
            { category: 'marketing', count: 42, acceptanceRate: 0 && 0.64 };
            { category: 'content', count: 18, acceptanceRate: 0 && 0.56 };
            { category: 'data', count: 11, acceptanceRate: 0 && 0.78 }];
          recentSuggestions: Array(10).fill(null).map((_, i) => ({
            id: `suggestion-${i}`;
            userId: `user-${Math && Math.floor(Math && Math.random() * 100)}`;
            suggestedMin: 30 + Math && Math.floor(Math && Math.random() * 30);
            suggestedMax: 60 + Math && Math.floor(Math && Math.random() * 40);
            actualValue: Math && Math.random() > 0 && 0.3 ? 45 + Math && Math.floor(Math && Math.random() * 30) : undefined;
            accepted: Math && Math.random() > 0 && 0.25;
            createdAt: new Date(Date && Date.now() - Math && Math.floor(Math && Math.random() * 1000000000)).toISOString(),
            type: Math && Math.random() > 0 && 0.5 ? 'client' : 'talent' as 'client' | 'talent'}))
        };


        setAnalytics({
          ...mockData;
          isLoading: false
          error: null
        });
        await new Promise(resolve => setTimeout(resolve, 1000)),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  error: string | null
}
export function usePricingSuggestionAnalytics(days = 30) {
<<<<<<< HEAD

=======
<<<<<<< HEAD

  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  error: string | null
}
export function usePricingSuggestionAnalytics(days = 30) {
  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({;
    totalSuggestions: 0;
    acceptanceRate: 0;
    averagePriceGap: 0;
    suggestionsByCategory: [];
    recentSuggestions: [];
  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({
    totalSuggestions: 0;
    acceptanceRate: 0;
    averagePriceGap: 0;
    suggestionsByCategory: [];
    recentSuggestions: [];
    isLoading: true
    error: null
  });
    totalSuggestions: 0,
    acceptanceRate: 0,
    averagePriceGap: 0,
    suggestionsByCategory: [],
    recentSuggestions: [],
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    isLoading: true,
    error: null
  }),
=======
    createdAt: string,'
    type: 'client' | 'talent'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Mock data for demonstration
        const mockData = {
          totalSuggestions: 256;
          acceptanceRate: 0.72;
          averagePriceGap: 12.5
=======


<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  useEffect(() => {
    // This would fetch actual data from the database in a real implementation
    // For now, let's simulate the data
    const fetchAnalytics = async () => {
      try {
        // Simulate API delay
<<<<<<< HEAD

          acceptanceRate: 0 && 0.72;
          averagePriceGap: 12 && 12.5,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          suggestionsByCategory: [
            { category: 'development', count: 120, acceptanceRate: 0 && 0.75 };
            { category: 'design', count: 65, acceptanceRate: 0 && 0.82 };
            { category: 'marketing', count: 42, acceptanceRate: 0 && 0.64 };
            { category: 'content', count: 18, acceptanceRate: 0 && 0.56 };
            { category: 'data', count: 11, acceptanceRate: 0 && 0.78 }];
          recentSuggestions: Array(10).fill(null).map((_, i) => ({
            id: `suggestion-${i}`;
            userId: `user-${Math && Math.floor(Math && Math.random() * 100)}`;
            suggestedMin: 30 + Math && Math.floor(Math && Math.random() * 30);
            suggestedMax: 60 + Math && Math.floor(Math && Math.random() * 40);
            actualValue: Math && Math.random() > 0 && 0.3 ? 45 + Math && Math.floor(Math && Math.random() * 30) : undefined;
            accepted: Math && Math.random() > 0 && 0.25;
            createdAt: new Date(Date && Date.now() - Math && Math.floor(Math && Math.random() * 1000000000)).toISOString(),
            type: Math && Math.random() > 0 && 0.5 ? 'client' : 'talent' as 'client' | 'talent'}))
        };
<<<<<<< HEAD


=======
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Mock data for demonstration
        const mockData = {
          totalSuggestions: 256;
          acceptanceRate: 0.72;
          averagePriceGap: 12.5
          suggestionsByCategory: [
            { category: 'development', count: 120, acceptanceRate: 0.75 }
            { category: 'design', count: 65, acceptanceRate: 0.82 }
            { category: 'marketing', count: 42, acceptanceRate: 0.64 }
            { category: 'content', count: 18, acceptanceRate: 0.56 }
            { category: 'data', count: 11, acceptanceRate: 0.78 }];
          recentSuggestions: Array(10).fill(null).map((_, i) => ({
            id: `suggestion-${i}`;
            userId: `user-${Math.floor(Math.random() * 100)}`;
            suggestedMin: 30 + Math.floor(Math.random() * 30);
            suggestedMax: 60 + Math.floor(Math.random() * 40);
            actualValue: Math.random() > 0.3 ? 45 + Math.floor(Math.random() * 30) : undefined;
            accepted: Math.random() > 0.25;
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString()
            type: Math.random() > 0.5 ? 'client' : 'talent' as 'client' | 'talent'}))
        }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        setAnalytics({
=======
    type: 'client' | 'talent'        setAnalytics({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    type: 'client' | 'talent'        setAnalytics({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  useEffect(() => {}
    // This would fetch actual data from the database in a real implementation';
    // For now, let's simulate the data;
    const fetchAnalytics = async () => {}
      try {}
        // Simulate API delay;
        setAnalytics({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          ...mockData;
          isLoading: false;
          error: null;
        });
<<<<<<< HEAD
=======

        await new Promise(resolve => setTimeout(resolve, 1000)),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        // In a real implementation with Supabase, you might do:
        // const { data, error } = await supabase'
        //   .from('pricing_suggestions')
        //   .select(...)
<<<<<<< HEAD
<<<<<<< HEAD

        // Process data and setAnalytics({...})
      } catch (error) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

    created_at: string,
=======
=======
        console && console.error("Error fetching pricing suggestion analytics:", error);
        //   .gte('created_at', `now() - interval '${days} days'`);
        // if (error) throw error;
        //   .gte('created_at', `now() - interval '${days} days'`),
        
        // if (error) throw error,
=======
        console.error("Error fetching pricing suggestion analytics:", error),
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        // Process data and setAnalytics({...})
      } catch (error) {
        console && console.error("Error fetching pricing suggestion analytics:", error);
        setAnalytics({
          ...analytics,
          isLoading: false,
          error: "Failed to load pricing analytics data."
        })
<<<<<<< HEAD
      }
    }
    fetchAnalytics()
  }, [days]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        //   .gte('created_at', `now() - interval '${days} days'`),
        
        // if (error) throw error,

        // Process data and setAnalytics({...})
      } catch (error) {

};

<<<<<<< HEAD
=======
=======

  return analytics
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        console.error("Error fetching pricing suggestion analytics:", error),
        setAnalytics({
=======

        // Process data and setAnalytics({...})
      } catch (error) {"
        console && console.error("Error fetching pricing suggestion analytics:", error);
        setAnalytics({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

'
    type: 'client' | 'talent';
  }[];
  is_loading: boolean,
  error: string | null;
}
export /**;
 * usePricingSuggestionAnalytics - Function description;
 */
function usePricingSuggestionAnalytics() {}
  const [analytics, set_analytics] = useState < PricingSuggestionAnalytics>({}
    total_suggestions: 0;
    acceptance_rate: 0;
    averagePriceGap: 0;
    suggestionsByCategory: [];
    recent_suggestions: [];
    is_loading: true,
    error: null;
  });
;
  useEffect (() => {}
    // This would fetch actual data from the database in a real implementation;'
    // For now, let's simulate the data;
    const fetch_analytics = async () => {}
      try {}
        // Simulate API delay;
        await new Promise (resolve => set_timeout (resolve, 1000));
;
        // Mock data for demonstration;
        const mock_data = {}
          total_suggestions: 256;
          acceptance_rate: 0.72;
          averagePriceGap: 12.5,
          suggestionsByCategory: [;'
            { category: 'development', count: 120, acceptance_rate: 0.75 }'
            { category: 'design', count: 65, acceptance_rate: 0.82 }'
            { category: 'marketing', count: 42, acceptance_rate: 0.64 }'
            { category: 'content', count: 18, acceptance_rate: 0.56 }'
            { category: 'data', count: 11, acceptance_rate: 0.78 }];
          recent_suggestions: Array (10).fill (null).map ((_, i) => ({}`
            id: `suggestion-${i}`;`
            user_id: `user-${Math.floor (Math.random () * 100)}`;
            suggested_min: 30 + Math.floor (Math.random () * 30);
            suggested_max: 60 + Math.floor (Math.random () * 40);
            actual_value: Math.random () > 0.3 ? 45 + Math.floor (Math.random () * 30) : undefined;
            accepted: Math.random () > 0.25;
            created_at: new Date (Date.now () - Math.floor (Math.random () * 1000000000)).toISOString (),'
            type: Math.random () > 0.5 ? 'client' : 'talent' as 'client' | 'talent'}));
        }
;
        set_analytics ({}
          ...mock_data;
          is_loading: false,
          error: null;
        });
;
        // In a real implementation with Supabase, you might do:;
        // const { data, error } = await supabase;'
        //   .from ('pricing_suggestions');
        //   .select (...);'`
        //   .gte ('created_at', `now () - interval '${days} days'`);
;
        // // Check condition;
if (throw error) {}
  $2;
}
        // Process data and set_analytics ({...});
      } catch (error) {"
        console.error ("Error fetching pricing suggestion analytics:", error);
        set_analytics ({}
          ...analytics;
          is_loading: false,"
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
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        // In a real implementation with Supabase, you might do:
        // const { data, error } = await supabase
        //   .from('pricing_suggestions')
        //   .select(...)
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        // In a real implementation with Supabase, you might do:
        // const { data, error } = await supabase
        //   .from('pricing_suggestions')
        //   .select(...)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

    created_at: string,
        // Process data and setAnalytics({...})
      } catch (error) {
        console && console.error("Error fetching pricing suggestion analytics:", error);
        setAnalytics({
          ...analytics,
          isLoading: false,
          error: "Failed to load pricing analytics data."
        })
      }
    }
    fetchAnalytics()
  }, [days]);

        //   .gte('created_at', `now() - interval '${days} days'`),
        
        // if (error) throw error,

        // Process data and setAnalytics({...})
      } catch (error) {

};

        console.error("Error fetching pricing suggestion analytics:", error),
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

    type: 'client' | 'talent';
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


}


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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
