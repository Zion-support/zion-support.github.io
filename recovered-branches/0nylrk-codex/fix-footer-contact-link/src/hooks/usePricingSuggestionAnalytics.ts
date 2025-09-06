<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts
import {useState, useEffect} from 'react';
import { supabase } from '@/integrations / supabase / client';
interface PricingSuggestionAnalytics {
  total_suggestions: number;
  acceptance_rate: number;
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptance_rate: number }[];
  recent_suggestions: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts
    id: string;
    user_id: string;
    suggested_min: number;
    suggested_max: number;
    actual_value?: number;
    accepted: boolean;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts


=======
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { supabase } from "@/integrations/supabase/client";
interface PricingSuggestionAnalytics {
  totalSuggestions: number;
  acceptanceRate: number;

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",
=======
import {useState, useEffect} from 'react';
import {supabase} from "@/integrations/supabase/client";
=======
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  error: string | null
}
export function usePricingSuggestionAnalytics(days = 30) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({;
    totalSuggestions: 0;
    acceptanceRate: 0;
    averagePriceGap: 0;
    suggestionsByCategory: [];
    recentSuggestions: [];
=======
  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({
<<<<<<< HEAD
    totalSuggestions: 0;
    acceptanceRate: 0;
    averagePriceGap: 0;
    suggestionsByCategory: [];
    recentSuggestions: [];
    isLoading: true
    error: null
  });
=======
    totalSuggestions: 0,
    acceptanceRate: 0,
    averagePriceGap: 0,
    suggestionsByCategory: [],
    recentSuggestions: [],
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    isLoading: true,
    error: null
  }),

<<<<<<< HEAD
=======

  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {
    // This would fetch actual data from the database in a real implementation
    // For now, let's simulate the data
    const fetchAnalytics = async () => {
      try {
        // Simulate API delay
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setAnalytics({
          ...mockData;
          isLoading: false
          error: null
        });
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        await new Promise(resolve => setTimeout(resolve, 1000)),

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

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        // In a real implementation with Supabase, you might do:
        // const { data, error } = await supabase
        //   .from('pricing_suggestions')
        //   .select(...)
<<<<<<< HEAD

<<<<<<< HEAD
        // Process data and setAnalytics({...})
      } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts

=======
========
        console && console.error("Error fetching pricing suggestion analytics:", error);
=======
<<<<<<< HEAD
        //   .gte('created_at', `now() - interval '${days} days'`);
        // if (error) throw error;
=======
        //   .gte('created_at', `now() - interval '${days} days'`),
        
        // if (error) throw error,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        // Process data and setAnalytics({...})
      } catch (error) {
<<<<<<< HEAD
        console.error("Error fetching pricing suggestion analytics:", error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setAnalytics({
          ...analytics;
          isLoading: false
          error: "Failed to load pricing analytics data."
        })
      }
    }
    fetchAnalytics()
  }, [days]);
<<<<<<< HEAD
  return analytics
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts
    created_at: string,
=======

        //   .gte('created_at', `now() - interval '${days} days'`),
        
        // if (error) throw error,

        // Process data and setAnalytics({...})
      } catch (error) {

};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  return analytics
<<<<<<< HEAD
=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts

<<<<<<< HEAD
=======

}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
=======
    type: 'client' | 'talent';
  }[],;
  isLoading: boolean,;
  error: string | null;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export function usePricingSuggestionAnalytics(days = 30) {;
  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({;
<<<<<<< HEAD
    totalSuggestions:0,;
    acceptanceRate:0,;
    averagePriceGap:0,;
    suggestionsByCategory:[],;
    recentSuggestions:[],;
    isLoading:true,;
    error:null;
  }),;
;
=======
    totalSuggestions: 0,;
    acceptanceRate: 0,;
    averagePriceGap: 0,;
    suggestionsByCategory: [],;
    recentSuggestions: [],;
    isLoading: true,;
    error: null;
  }),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    // This would fetch actual data from the database in a real implementation;
    // For now, let's simulate the data;
    const fetchAnalytics = async () => {;
      try {;
        // Simulate API delay;
        await new Promise(resolve => setTimeout(resolve, 1000)),;
<<<<<<< HEAD
;
        // Mock data for demonstration;
        const mockData = {;
          totalSuggestions:256,;
          acceptanceRate:0.72,;
          averagePriceGap:12.5,;
          suggestionsByCategory:[;
            { category:'development', count:120, acceptanceRate:0.75 },;
            { category:'design', count:65, acceptanceRate:0.82 },;
            { category:'marketing', count:42, acceptanceRate:0.64 },;
            { category:'content', count:18, acceptanceRate:0.56 },;
            { category:'data', count:11, acceptanceRate:0.78 }],;
          recentSuggestions:Array(10).fill(null).map((_, i) => ({;
            id:`suggestion-${i}`,;
            userId:`user-${Math.floor(Math.random() * 100)}`,;
            suggestedMin:30 + Math.floor(Math.random() * 30),;
            suggestedMax:60 + Math.floor(Math.random() * 40),;
            actualValue:Math.random() > 0.3 ? 45 + Math.floor(Math.random() * 30) :undefined,;
            accepted:Math.random() > 0.25,;
            createdAt:new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString(),;
            type:Math.random() > 0.5 ? 'client' :'talent' as 'client' | 'talent'}));
        },;
;
        setAnalytics({;
          ...mockData,;
          isLoading:false,;
          error:null;
        }),;
;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        // In a real implementation with Supabase, you might do:;
        // const { data, error } = await supabase;
        //   .from('pricing_suggestions');
        //   .select(...);
        //   .gte('created_at', `now() - interval '${days} days'`),;
<<<<<<< HEAD
        ;
        // if (error) throw error,;
        // Process data and setAnalytics({...});
;
=======
        // if (error) throw error,;
        // Process data and setAnalytics({...});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      } catch (error) {;
        console.error("Error fetching pricing suggestion analytics:", error),;
        setAnalytics({;
          ...analytics,;
<<<<<<< HEAD
          isLoading:false,;
          error:"Failed to load pricing analytics data.";
        }),;
      }
    },;
;
    fetchAnalytics(),;
  }, [days]),;
;
  return analytics,; interface PricingSuggestionAnalytics {
  totalSuggestions: number;
acceptanceRate: number;
averagePriceGap: number;
suggestionsByCategory: {
  category: string, count: number, acceptanceRate: number 
}[];
recentSuggestions: {
  id: string;
userId: string;
suggestedMin: number;
suggestedMax: number;
actualValue?: number;
accepted: boolean;
createdAt: string;
type: 'client' | 'talent' 
}[];
isLoading: boolean;
error: string | null 
}export function usePricingSuggestionAnalytics (days = 30) {
  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics> ({
  totalSuggestions: 0;
acceptanceRate: 0;
averagePriceGap: 0;
suggestionsByCategory: [];
recentSuggestions: [];
isLoading: true;
error: null 
});
//This would fetch actual data from the database in a real implementation //For now, let's simulate the data const fetchAnalytics = async () => {
  try {
  //Simulate API delay //Mock data for demonstration const mockData = {
  totalSuggestions: 256, acceptanceRate: 0.72, averagePriceGap: 12.5, suggestionsByCategory: [ {
  category: 'development', count: 120, acceptanceRate: 0.75 
};
{
  category: 'design', count: 65, acceptanceRate: 0.82 
};
{
  category: 'marketing', count: 42, acceptanceRate: 0.64 
};
{
  category: 'content', count: 18, acceptanceRate: 0.56 
};
{
  category: 'data', count: 11, acceptanceRate: 0.78 
}];
recentSuggestions: Array (10) .fill (null) .map ( (, i) => ({
  id: `suggestion-$ {
  i 
}`;
userId: `user-$ {
  Math.floor (Math.random () * 100) 
}`;
suggestedMin: 30 + Math.floor (Math.random () * 30);
suggestedMax: 60 + Math.floor (Math.random () * 40);
actualValue: Math.random () > 0.3 ? 45 + Math.floor (Math.random () * 30) : undefined;
accepted: Math.random () > 0.25;
createdAt: new Date (Date.now () - Math.floor (Math.random () * 1000000000) ) .toISOString ();
type: Math.random () > 0.5 ? 'client': 'talent'as 'client'| 'talent' 
}) ) 
};
//In a real implementation with Supabase, you might do: //const {
  data, error 
}= await supabase //.from ('pricing suggestions') // .select (...) 
}
};
fetchAnalytics () 
}, [days]);
return analytics;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/usePricingSuggestionAnalytics.ts
=======
          isLoading: false,;
          error: "Failed to load pricing analytics data.";
        });
      }
    };
    fetchAnalytics();
  }, [days]);
  return analytics;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
