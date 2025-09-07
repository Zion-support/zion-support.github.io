<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Card, CardContent} from "@/components/ui/card";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {Skeleton} from "@/components/ui/skeleton";
import {formatDistanceToNow} from "date-fns";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {Card, CardContent} from "@/components/ui/card";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {Skeleton} from "@/components/ui/skeleton";
import {formatDistanceToNow} from "date-fns";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card, CardContent } from "@/components/ui/card",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { formatDistanceToNow } from "date-fns",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function AnalyticsSummary() {
  const { data: stats, isLoading } = useQuery({
=======
import { Card, CardContent } from "@/components/ui/card","
import { useQuery } from "@tanstack/react-query","
import { supabase } from "@/integrations/supabase/client",";
import { Skeleton } from "@/components/ui/skeleton";"
import { formatDistanceToNow } from "date-fns";"
import { Skeleton } from "@/components/ui/skeleton","
import { formatDistanceToNow } from "date-fns",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export function AnalyticsSummary() {}
  const { data: stats, isLoading } = useQuery({}
    queryKey: ['analytics-summary']
;
    queryFn: async () => {};
      // Get total page views;
      const { data: pageViewsData, error: pageViewsError } = await supabase'
        .from('analytics_events')'
        .select('count')
<<<<<<< HEAD
<<<<<<< HEAD

      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError,
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======

        .eq('event_typepage_view')

        .eq('event_typepage_view');
        .single();
        .eq('event_typepage_view')
        .single();
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
        .single(),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError,
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      // Get unique visitors (by counting distinct user IDs)
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase'
        .from('analytics_events')'
        .select('user_id')'
        .eq('event_typepage_view')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        .is('user_idnot.null');
      if (uniqueVisitorsError) throw uniqueVisitorsError;

<<<<<<< HEAD
=======
=======
      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) |[]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .is('user_idnot.null'),
        
      if (uniqueVisitorsError) throw uniqueVisitorsError,
      
      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) || []),
      

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Get conversion count
      const { data: conversionsData, error: conversionsError } = await supabase
        .from('analytics_events')
        .select('count')
=======


      // Get conversion count;
      const { data: conversionsData, error: conversionsError } = await supabase'
        .from('analytics_events')'
        .select('count')'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .eq('event_typeconversion')

        .single(),
        '
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError,
      

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      // Get most recent event to calculate "last updated"
      const { data: lastEventData, error: lastEventError } = await supabase'
        .from('analytics_events')'
        .select('created_at')'
        .order('created_at', { ascending: false })
        .limit(1)
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        .single(),
        '
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError,
        

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return {
=======
import { formatDistanceToNow } from "date-fns",      // Get unique visitors (by counting distinct user IDs)
=======
import { formatDistanceToNow } from "date-fns",
export function AnalyticsSummary() {
  const { data: stats, isLoading } = useQuery({

    queryKey: ['analytics-summary']

    queryFn: async () => {
      // Get total page views
      const { data: pageViewsData, error: pageViewsError } = await supabase
        .from('analytics_events')
        .select('count')

import {Card, CardContent} from "@/components/ui/card";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {Skeleton} from "@/components/ui/skeleton";
import {formatDistanceToNow} from "date-fns";
.eq('event_typepage_view')

        .eq('event_typepage_view')

        .eq('event_typepage_view');
        .single();
        .eq('event_typepage_view')
        .single();
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
        .single(),

      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError,
      // Get unique visitors (by counting distinct user IDs)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase
        .from('analytics_events')
        .select('user_id')
        .eq('event_typepage_view')

.is('user_idnot.null');
      if (uniqueVisitorsError) throw uniqueVisitorsError;

      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) |[]);
        .is('user_idnot.null'),
      if (uniqueVisitorsError) throw uniqueVisitorsError,
      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) || []),


      // Get conversion count
      const { data: conversionsData, error: conversionsError } = await supabase
        .from('analytics_events')
        .select('count')
<<<<<<< HEAD
        .eq('event_typeconversion')      return {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { formatDistanceToNow } from "date-fns",      // Get unique visitors (by counting distinct user IDs)
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase
        .from('analytics_events')
        .select('user_id')
        .eq('event_typepage_view')      // Get conversion count
      const { data: conversionsData, error: conversionsError } = await supabase
        .from('analytics_events')
        .select('count')
        .eq('event_typeconversion')      return {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        .eq('event_typeconversion')

.single();
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError;
        .single(),
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError,

      // Get most recent event to calculate "last updated"
      const { data: lastEventData, error: lastEventError } = await supabase
        .from('analytics_events')
        .select('created_at')
        .order('created_at', { ascending: false })
        .limit(1)

<<<<<<< HEAD
        .single(),
        
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError,
        

      return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        totalPageViews: pageViewsData?.count |0
        uniqueVisitors: uniqueUserIds.size |0
        conversions: conversionsData?.count |0
        lastUpdated: lastEventData?.created_at ? new Date(lastEventData.created_at) : null}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
    }
=======

    },
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    refetchInterval: 300000, // Refetch every 5 minutes
  });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


      return {}
        totalPageViews: pageViewsData?.count |0;
        uniqueVisitors: uniqueUserIds.size |0;
        conversions: conversionsData?.count |0;
        lastUpdated: lastEventData?.created_at ? new Date(lastEventData.created_at) : null}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    },
    refetchInterval: 300000, // Refetch every 5 minutes;
  }),
  
<<<<<<< HEAD

  // Calculate conversion rate
  const conversionRate = stats && stats.totalPageViews > 0
    ? ((stats.conversions / stats.totalPageViews) * 100).toFixed(2)

    : '0.00',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Calculate conversion rate
  const conversionRate = stats && stats.totalPageViews > 0
    ? ((stats.conversions / stats.totalPageViews) * 100).toFixed(2)
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  return ("
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard"
        title="Total Page Views""
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.totalPageViews |0}
        icon={"
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5-3-5-3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1-1v-6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1-1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0-7 0"/><path d="M22 2 2 22"/></svg>
        }
      />
      <StatCard"
        title="Unique Visitors""
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.uniqueVisitors |0}
        icon={"
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
        }
      />
      <StatCard"
        title="Conversion Rate""
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
        icon={"
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>
        }
      />
      <StatCard"
        title="Last Updated"
        value={}
          isLoading ? (
<<<<<<< HEAD
<<<<<<< HEAD
=======


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard
        title="Total Page Views"
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.totalPageViews |0}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5-3-5-3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1-1v-6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1-1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0-7 0"/><path d="M22 2 2 22"/></svg>
        }
      />
      <StatCard
        title="Unique Visitors"
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.uniqueVisitors |0}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
        }
      />
      <StatCard
        title="Conversion Rate"
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>
        }
      />
      <StatCard
        title="Last Updated"
        value={
          isLoading ? (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Skeleton className="h-8 w-28 bg-zion-blue-light" />
          ) : stats?.lastUpdated ? (
            formatDistanceToNow(stats.lastUpdated, { addSuffix: true })
          ) : 'Never'
        }
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
      />
    </div>
  )
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
interface StatCardProps {
  title: string
  value: React.ReactNode
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Card, CardContent } from "@/components/ui/card",;
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { Skeleton } from "@/components/ui/skeleton",;
=======

}
interface StatCardProps {}
  title: string;
  value: React.ReactNode;
"
import { Card, CardContent } from "@/components/ui/card",;"
import { useQuery } from "@tanstack/react-query",;"
import { supabase } from "@/integrations/supabase/client",;"
import { Skeleton } from "@/components/ui/skeleton",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { formatDistanceToNow } from "date-fns",;



export function AnalyticsSummary() { return null; }
  const { data: stats, isLoading } = useQuery({;'
    queryKey: ['analytics-summary'],;
    queryFn: async () => {;
      // Get total page views;
      const { data: pageViewsData, error: pageViewsError } = await supabase;'
        .from('analytics_events');'
        .select('count');'
        .eq('event_typepage_view');
'
import { Card, CardContent } from '@/components / ui / card';'
import { use_query } from '@tanstack / react - query';'
import { supabase } from '@/integrations / supabase / client';'
import { Skeleton } from '@/components / ui / skeleton';'
import { formatDistanceToNow } from './date - fns';
export /**;
 * AnalyticsSummary - Function description;
 */
function AnalyticsSummary() {}
  const { data: stats, is_loading } = use_query ({'
    query_key: ['analytics - summary'],
    query_fn: async () => {}
      // Get total page views;
      const { data: pageViewsData, error: pageViewsError } = await supabase;'
        .from ('analytics_events');'
        .select ('count');'
        .eq ('event_typepage_view');
        .single ();
;
      // Check condition;
if (throw pageViewsError) {}
  $2;
}
      // Get unique visitors (by counting distinct user IDs);
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase;'
        .from ('analytics_events');'
        .select ('user_id');'
        .eq ('event_typepage_view');'
        .is ('user_idnot.null');
;
      // Check condition;
if (throw uniqueVisitorsError) {}
  $2;
}
      const uniqueUserIds = new Set (uniqueVisitorsData?.map (item => item.user_id) || []);
;
      // Get conversion count;
      const { data: conversions_data, error: conversions_error } = await supabase;'
        .from ('analytics_events');'
        .select ('count');'
        .eq ('event_typeconversion');
        .single ();
;
      // Check condition;
if (throw conversions_error) {}
  $2;
}"
      // Get most recent event to calculate "last updated";
      const { data: lastEventData, error: lastEventError } = await supabase;'
        .from ('analytics_events');'
        .select ('created_at');'
        .order ('created_at', { ascending: false });
        .limit (1);
        .single ();
;
      // Check condition;
if (throw lastEventError) {}
  $2;
}
      return {}
        totalPageViews: pageViewsData?.count || 0,
        unique_visitors: uniqueUserIds.size || 0,
        conversions: conversions_data?.count || 0,
        last_updated: lastEventData?.created_at ? new Date (lastEventData.created_at) : null}
    }
    refetch_interval: 300000, // Refetch every 5 minutes;
  });
;
  // Calculate conversion rate;
  const conversion_rate = stats && stats.totalPageViews > 0;
    ? ((stats.conversions / stats.totalPageViews) * 100).to_fixed (2);'
    : '0.00';
;
  return ("
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 4 mb - 8">;
      <StatCard;"
        title="Total Page Views";"
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : stats?.totalPageViews || 0}

      />;
      <StatCard;"
        title="Unique Visitors";"
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : stats?.unique_visitors || 0}

      // Get unique visitors (by counting distinct user IDs);
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase;'
        .from('analytics_events');'
        .select('user_id');'
        .eq('event_typepage_view');

      // Get conversion count;
      const { data: conversionsData, error: conversionsError } = await supabase;'
        .from('analytics_events');'
        .select('count');'
        .eq('event_typeconversion');
"
      // Get most recent event to calculate "last updated";
      const { data: lastEventData, error: lastEventError } = await supabase;'
        .from('analytics_events');'
        .select('created_at');'
        .order('created_at', { ascending: false });
        .limit(1);


        .single();'
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
        icon={"
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 12 5 - 3-5 - 3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1 - 1v - 6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1 - 1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0 - 7 0"/><path d="M22 2 2 22"/></svg>;
        }
        icon={"
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0 - 4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4 - 1"/><path d="m16.8 12.3-.4 - 1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;
        }
"`
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
<<<<<<< HEAD
=======
}
interface StatCardProps {
  title: string
  value: React.ReactNode        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
interface StatCardProps {
  title: string
  value: React.ReactNode        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}
interface StatCardProps {
  title: string
  value: React.ReactNode
import { Card, CardContent } from "@/components/ui/card",;
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { Skeleton } from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns",;

export function AnalyticsSummary() {;
  const { data: stats, isLoading } = useQuery({;
    queryKey: ['analytics-summary'],;
    queryFn: async () => {;
      // Get total page views;
      const { data: pageViewsData, error: pageViewsError } = await supabase;
        .from('analytics_events');
        .select('count');
        .eq('event_typepage_view');
        .single();
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;

import { Card, CardContent } from '@/components / ui / card';
import { use_query } from '@tanstack / react - query';
import { supabase } from '@/integrations / supabase / client';
import { Skeleton } from '@/components / ui / skeleton';
import { formatDistanceToNow } from './date - fns';
export /**
 * AnalyticsSummary - Function description
 */
function AnalyticsSummary() {
  const { data: stats, is_loading } = use_query ({
    query_key: ['analytics - summary'],
    query_fn: async () => {
      // Get total page views;
      const { data: pageViewsData, error: pageViewsError } = await supabase;
        .from ('analytics_events');
        .select ('count');
        .eq ('event_typepage_view');
        .single ();
;
      // Check condition
if (throw pageViewsError) {
  $2
}
      // Get unique visitors (by counting distinct user IDs);
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase;
        .from ('analytics_events');
        .select ('user_id');
        .eq ('event_typepage_view');
        .is ('user_idnot.null');
;
      // Check condition
if (throw uniqueVisitorsError) {
  $2
}
      const uniqueUserIds = new Set (uniqueVisitorsData?.map (item => item.user_id) || []);
;
      // Get conversion count;
      const { data: conversions_data, error: conversions_error } = await supabase;
        .from ('analytics_events');
        .select ('count');
        .eq ('event_typeconversion');
        .single ();
;
      // Check condition
if (throw conversions_error) {
  $2
}
      // Get most recent event to calculate "last updated";
      const { data: lastEventData, error: lastEventError } = await supabase;
        .from ('analytics_events');
        .select ('created_at');
        .order ('created_at', { ascending: false });
        .limit (1);
        .single ();
;
      // Check condition
if (throw lastEventError) {
  $2
}
      return {
        totalPageViews: pageViewsData?.count || 0,
        unique_visitors: uniqueUserIds.size || 0,
        conversions: conversions_data?.count || 0,
        last_updated: lastEventData?.created_at ? new Date (lastEventData.created_at) : null}
    }
    refetch_interval: 300000, // Refetch every 5 minutes;
  });
;
  // Calculate conversion rate;
  const conversion_rate = stats && stats.totalPageViews > 0;
    ? ((stats.conversions / stats.totalPageViews) * 100).to_fixed (2);
    : '0.00';
;
  return (
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 4 mb - 8">;
      <StatCard;
        title="Total Page Views";
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : stats?.totalPageViews || 0}

        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 12 5 - 3-5 - 3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1 - 1v - 6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1 - 1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0 - 7 0"/><path d="M22 2 2 22"/></svg>;
        }

      />;
      <StatCard;
        title="Unique Visitors";
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : stats?.unique_visitors || 0}

        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0 - 4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4 - 1"/><path d="m16.8 12.3-.4 - 1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;
        }


      // Get unique visitors (by counting distinct user IDs);
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase;
        .from('analytics_events');
        .select('user_id');
        .eq('event_typepage_view');
        .is('user_idnot && user_idnot.null');

      if (uniqueVisitorsError) throw uniqueVisitorsError;

      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item && item.user_id) || []);

      // Get conversion count;
      const { data: conversionsData, error: conversionsError } = await supabase;
        .from('analytics_events');
        .select('count');
        .eq('event_typeconversion');
        .single();

      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError;

      // Get most recent event to calculate "last updated";
      const { data: lastEventData, error: lastEventError } = await supabase;
        .from('analytics_events');
        .select('created_at');
        .order('created_at', { ascending: false });
        .limit(1);
        .single();

=======
.single();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError;
        .single(),
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError,

<<<<<<< HEAD
      return {;
        totalPageViews: pageViewsData?.count || 0,;
        uniqueVisitors: uniqueUserIds && uniqueUserIds.size || 0,;
        conversions: conversionsData?.count || 0,;
        lastUpdated: lastEventData?.created_at ? new Date(lastEventData && lastEventData.created_at) : null}
    };
    refetchInterval: 300000, // Refetch every 5 minutes;
  });

  // Calculate conversion rate;
  const conversionRate = stats && stats.totalPageViews > 0 ;
    ? ((stats && stats.conversions / stats.totalPageViews) * 100).toFixed(2);
    : '0 && 0.00';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">;
      <StatCard
        title="Total Page Views"
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.totalPageViews || 0}
        icon={;
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5-3-5-3v6Z"/><path d="M7 9v10c0 .6 && 6.4 1 1 1h2a1 1 0 0 0 1-1v-6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c && 1h2c.6 0 1-.4 1-1V8 && 1V8.5"/><path d="M19 8 && 8.5a3.5 3 && 3.5 0 0 0-7 0"/><path d="M22 2 2 22"/></svg>;
        }
      />;
      <StatCard
        title="Unique Visitors" 
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.uniqueVisitors || 0}
        icon={;
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21 && m21.7 16 && 16.4-.9-.3"/><path d="m15 && m15.2 13 && 13.9-.9-.3"/><path d="m16 && m16.6 18 && 18.7.3-.9"/><path d="m19 && m19.1 12 && 12.2.3-.9"/><path d="m19 && m19.6 18 && 18.7-.4-1"/><path d="m16 && m16.8 12 && 12.3-.4-1"/><path d="m14 && m14.3 16 && 16.6 1-.4"/><path d="m20 && m20.7 13 && 13.8 1-.4"/></svg>;
        }
      />;
      <StatCard
        title="Conversion Rate" 

        .single();
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 12 5 - 3-5 - 3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1 - 1v - 6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1 - 1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0 - 7 0"/><path d="M22 2 2 22"/></svg>;
        }
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0 - 4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4 - 1"/><path d="m16.8 12.3-.4 - 1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;
        }
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        icon={;
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>;
        }

      />;
      <StatCard
        title="Last Updated" 

        value={
          isLoading ? (
            <Skeleton className="h-8 w-28 bg-zion-blue-light" />;
          ) : stats?.lastUpdated ? (;
            formatDistanceToNow(stats && stats.lastUpdated, { addSuffix: true });
          ) : 'Never';
        }
        icon={;
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h && 14h.01"/><path d="M12 14h && 14h.01"/><path d="M16 14h && 14h.01"/><path d="M8 18h && 18h.01"/><path d="M12 18h && 18h.01"/><path d="M16 18h && 18h.01"/></svg>;
        }
      />;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
        icon={;"
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>;
        }

        value={}
          isLoading ? (

"
            <Skeleton className="h-8 w-28 bg-zion-blue-light" />;
          ) : stats?.lastUpdated ? (;
            formatDistanceToNow(stats && stats.lastUpdated, { addSuffix: true });'
          ) : 'Never';
        }



        }
      />;
    </div>;
  );

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
interface StatCardProps {;
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




  icon: React.ReactNode;
}
<<<<<<< HEAD
function StatCard({ title, value, icon }: StatCardProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
function StatCard({ title, value, icon }: StatCardProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

  icon: React.ReactNode
}
function StatCard({ title, value, icon }: StatCardProps) {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface StatCardProps {;
  title: string,;
  value: React && React.ReactNode,;
  icon: React && React.ReactNode;
<<<<<<< HEAD


}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardContent className="p-6">;
        <div className="flex items-center gap-4">;
=======
  return ("
    <Card className="bg-zion-blue-dark border-zion-blue-light">;"
      <CardContent className="p-6">;"
        <div className="flex items-center gap-4">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="h-12 w-12 rounded-lg bg-zion-purple/20 flex items-center justify-center text-zion-purple">;
            {icon}
          </div>;
          <div>;"
            <p className="text-sm font-medium text-zion-slate-light mb-1">;
              {title}
            </p>;"
            <h4 className="text-2xl font-bold text-white">;
              {value}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      />;
      <StatCard;
        title="Conversion Rate";
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : `${conversion_rate}%`}
        icon={
<<<<<<< HEAD
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="current_color" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2 - 2"/><path d="M4 14a6 6 0 0 1 6 - 6"/><path d="M5 18a8 8 0 0 1 8 - 8"/><path d="M6 16a6 6 0 0 1 6 - 6"/><path d="m10 16 2 - 2v6"/><path d="m3 14 2 - 2"/><rect coordinate_x="14" coordinate_y="2" width="8" height="8" rx="2"/></svg>;
=======

      />;
      <StatCard;"
        title="Conversion Rate";"`
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : `${conversion_rate}%`}
        icon={"
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 20 2 - 2"/><path d="M4 14a6 6 0 0 1 6 - 6"/><path d="M5 18a8 8 0 0 1 8 - 8"/><path d="M6 16a6 6 0 0 1 6 - 6"/><path d="m10 16 2 - 2v6"/><path d="m3 14 2 - 2"/><rect coordinate_x="14" coordinate_y="2" width="8" height="8" rx="2"/></svg>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 20 2 - 2"/><path d="M4 14a6 6 0 0 1 6 - 6"/><path d="M5 18a8 8 0 0 1 8 - 8"/><path d="M6 16a6 6 0 0 1 6 - 6"/><path d="m10 16 2 - 2v6"/><path d="m3 14 2 - 2"/><rect coordinate_x="14" coordinate_y="2" width="8" height="8" rx="2"/></svg>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        }
      />;
      <StatCard;"
        title="Last Updated";
<<<<<<< HEAD
        value={
          is_loading ? (
            <Skeleton className="h - 8 w - 28 bg - zion - blue - light" />) : stats?.last_updated ? (
            formatDistanceToNow (stats.last_updated, { add_suffix: true })) : 'Never';
        }
        icon={
<<<<<<< HEAD
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="current_color" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" coordinate_x="3" coordinate_y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
=======
        value={}
          is_loading ? ("
            <Skeleton className="h - 8 w - 28 bg - zion - blue - light" />) : stats?.last_updated ? ('
            formatDistanceToNow (stats.last_updated, { add_suffix: true })) : 'Never';
        }
        icon={"
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><rect width="18" height="18" coordinate_x="3" coordinate_y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><rect width="18" height="18" coordinate_x="3" coordinate_y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        }
      />;
    </div>);
}
interface StatCardProps {}
  title: string,
  value: React.ReactNode,
  icon: React.ReactNode;
=======
      return {



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
/**
 * StatCard - Function description;
 */
<<<<<<< HEAD
function StatCard() {
  return (
    <Card className="bg - zion - blue - dark border - zion - blue - light">;
      <CardContent className="p - 6">;
        <div className="flex items - center gap - 4">;
          <div className="h - 12 w - 12 rounded - lg bg - zion - purple / 20 flex items - center justify - center text - zion - purple">;
            {icon}
          </div>;
          <div>;
            <p className="text - sm font - medium text - zion - slate - light mb - 1">;
              {title}
            </p>;
<<<<<<< HEAD
            <h4 className="text - 2xl font - bold text-white">;
              {value}
=======
function StatCard() {}
  return ("
    <Card className="bg - zion - blue - dark border - zion - blue - light">;"
      <CardContent className="p - 6">;"
        <div className="flex items - center gap - 4">;"
          <div className="h - 12 w - 12 rounded - lg bg - zion - purple / 20 flex items - center justify - center text - zion - purple">;
            {icon}
          </div>;
          <div>;"
            <p className="text - sm font - medium text - zion - slate - light mb - 1">;
              {title}
            </p>;"
            <h4 className="text - 2xl font - bold text - white">;


=======
            <h4 className="text - 2xl font - bold text - white">;
              {value}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import { Card, CardContent } from "@/components/ui/card",;
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { Skeleton } from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns",;
;
export function AnalyticsSummary() {;
  const { data:stats, isLoading } = useQuery({;
    queryKey:['analytics-summary'],;
    queryFn:async () => {;
      // Get total page views;
      const { data:pageViewsData, error:pageViewsError } = await supabase;
        .from('analytics_events');
        .select('count');
        .eq('event_typepage_view');
        .single(),;
;
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError,;
      ;
      // Get unique visitors (by counting distinct user IDs);
      const { data:uniqueVisitorsData, error:uniqueVisitorsError } = await supabase;
        .from('analytics_events');
        .select('user_id');
        .eq('event_typepage_view');
        .is('user_idnot.null'),;
        ;
      if (uniqueVisitorsError) throw uniqueVisitorsError,;
      ;
      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) || []),;
      ;
      // Get conversion count;
      const { data:conversionsData, error:conversionsError } = await supabase;
        .from('analytics_events');
        .select('count');
        .eq('event_typeconversion');
        .single(),;
        ;
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError,;
      ;
      // Get most recent event to calculate "last updated";
      const { data:lastEventData, error:lastEventError } = await supabase;
        .from('analytics_events');
        .select('created_at');
        .order('created_at', { ascending:false });
        .limit(1);
        .single(),;
        ;
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError,;
        ;
      return {;
        totalPageViews:pageViewsData?.count || 0,;
        uniqueVisitors:uniqueUserIds.size || 0,;
        conversions:conversionsData?.count || 0,;
        lastUpdated:lastEventData?.created_at ? new Date(lastEventData.created_at) :null},;
    },;
    refetchInterval:300000, // Refetch every 5 minutes;
  }),;
  ;
  // Calculate conversion rate;
  const conversionRate = stats && stats.totalPageViews > 0 ;
    ? ((stats.conversions / stats.totalPageViews) * 100).toFixed(2);
    :'0.00',;
;
  return (;
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">;
      <StatCard ;
        title="Total Page Views";
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> :stats?.totalPageViews || 0}
        icon={;
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5-3-5-3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1-1v-6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1-1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0-7 0"/><path d="M22 2 2 22"/></svg>;
        }
      />;
      <StatCard ;
        title="Unique Visitors" ;
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> :stats?.uniqueVisitors || 0}
        icon={;
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;
        }
      />;
      <StatCard ;
        title="Conversion Rate" ;
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> :`${conversionRate}%`}
        icon={;
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>;
        }
      />;
      <StatCard ;
        title="Last Updated" ;
        value={;
          isLoading ? (;
            <Skeleton className="h-8 w-28 bg-zion-blue-light" />;
          ) :stats?.lastUpdated ? (;
            formatDistanceToNow(stats.lastUpdated, { addSuffix:true });
          ) :'Never';
        }
        icon={;
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
        }
      />;
    </div>;
  ),;}
;
interface StatCardProps {;
  title:string,;
  value:React.ReactNode,;
  icon:React.ReactNode;
}
;
function StatCard({ title, value, icon } StatCardProps) {;
  return (;
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
    <Card className="bg - zion - blue - dark border - zion - blue-light">;
      <CardContent className="p-6">;
        <div className="flex items - center gap-4">;
          <div className="h - 12 w - 12 rounded - lg bg - zion - purple / 20 flex items - center justify - center text - zion-purple">;
            {icon}
          </div>;
          <div>;
            <p className="text - sm font - medium text - zion - slate - light mb-1">;
              {title}
            </p>;
            <h4 className="text - 2xl font - bold text-white">;
              {value}



import {Card, CardContent} from "@/components/ui/card";""
import {useQuery} from "@tanstack/react-query";""
import {supabase} from "@/integrations/supabase/client";""
import {Skeleton} from "@/components/ui/skeleton";""
import {formatDistanceToNow} from "date-fns";""
import { Card, CardContent } from "@/components/ui/card",""
import { useQuery } from "@tanstack/react-query",""
import { supabase } from "@/integrations/supabase/client",""
import { Skeleton } from "@/components/ui/skeleton";""
import { formatDistanceToNow } from "date-fns";""
import { Skeleton } from "@/components/ui/skeleton",""
import { formatDistanceToNow } from "date-fns","
export function AnalyticsSummary() {
  const { data: stats, isLoading } = useQuery({
"
    queryKey: ['analytics-summary']',)
  queryFn: async () => {
      // Get total page views;
      const { data: pageViewsData, error: pageViewsError } = await supabase;
        .from('analytics_events')
        .select('count')
import {formatDistanceToNow} from "date-fns";"
      // Get unique visitors (by counting distinct user IDs)
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase;"
        .select('user_id')
        .eq('event_typepage_view')
        .is('user_idnot.null'),
      if (uniqueVisitorsError) throw uniqueVisitorsError,
      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) || []),

      // Get conversion count;
      const { data: conversionsData, error: conversionsError } = await supabase;
        .eq('event_typeconversion')
        .single(),
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError,
      // Get most recent event to calculate "last updated""
      const { data: lastEventData, error: lastEventError } = await supabase;"
        .select('created_at')
        .order('created_at', { ascending: false })
        .limit(1)

      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError,
      return {
  // TODO: Implement
}
        totalPageViews: pageViewsData?.count |0;,
  uniqueVisitors: uniqueUserIds.size |0;
        conversions: conversionsData?.count |0;,
  lastUpdated: lastEventData?.created_at ? new Date(lastEventData.created_at) : null}

    },
    refetchInterval: 300000, // Refetch every 5 minutes;
  }),

  // Calculate conversion rate;
  const conversionRate = stats && stats.totalPageViews > 0;
    ? ((stats.conversions / stats.totalPageViews) * 100).toFixed(2)

    : '0.00',
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">"
</div>
      <StatCard;"
        title="Total Page Views"""
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.totalPageViews |0}"
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5-3-5-3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1-1v-6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1-1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0-7 0"/><path d="M22 2 2 22"/></svg>"
        title="Unique Visitors"""
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.uniqueVisitors |0}"
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>"
        title="Conversion Rate"""
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}"
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>"
        title="Last Updated""
        value={
          isLoading ? ("
            <Skeleton className="h-8 w-28 bg-zion-blue-light" />"
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>""
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 4 mb - 8">;"
        title="Total Page Views";""
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : stats?.totalPageViews || 0}"
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 12 5 - 3-5 - 3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1 - 1v - 6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1 - 1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0 - 7 0"/><path d="M22 2 2 22"/></svg>;"
        title="Unique Visitors";""
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : stats?.unique_visitors || 0}"
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0 - 4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4 - 1"/><path d="m16.8 12.3-.4 - 1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;""
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">;"
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.totalPageViews || 0}"
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5-3-5-3v6Z"/><path d="M7 9v10c0 .6 && 6.4 1 1 1h2a1 1 0 0 0 1-1v-6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c && 1h2c.6 0 1-.4 1-1V8 && 1V8.5"/><path d="M19 8 && 8.5a3.5 3 && 3.5 0 0 0-7 0"/><path d="M22 2 2 22"/></svg>;"
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.uniqueVisitors || 0}"
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21 && m21.7 16 && 16.4-.9-.3"/><path d="m15 && m15.2 13 && 13.9-.9-.3"/><path d="m16 && m16.6 18 && 18.7.3-.9"/><path d="m19 && m19.1 12 && 12.2.3-.9"/><path d="m19 && m19.6 18 && 18.7-.4-1"/><path d="m16 && m16.8 12 && 12.3-.4-1"/><path d="m14 && m14.3 16 && 16.6 1-.4"/><path d="m20 && m20.7 13 && 13.8 1-.4"/></svg>;"
        title="Conversion Rate"")
        .single();"
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0 - 4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4 - 1"/><path d="m16.8 12.3-.4 - 1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;""`;
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>;"
            <Skeleton className="h-8 w-28 bg-zion-blue-light" />;"
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h && 14h.01"/><path d="M12 14h && 14h.01"/><path d="M16 14h && 14h.01"/><path d="M8 18h && 18h.01"/><path d="M12 18h && 18h.01"/><path d="M16 18h && 18h.01"/></svg>;"
    </div>;"
    <Card className="bg-zion-blue-dark border-zion-blue-light">;"
      <CardContent className="p-6">;"
        <div className="flex items-center gap-4">;"
</div>"
          <div className="h-12 w-12 rounded-lg bg-zion-purple/20 flex items-center justify-center text-zion-purple">;"
          </div>;
          <div>;
            <p className="text-sm font-medium text-zion-slate-light mb-1">;"
</p>
            </p>;"
            <h4 className="text-2xl font-bold text-white">;"
</h4>
        title="Conversion Rate";""`;
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : `${conversion_rate}%`}"
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 20 2 - 2"/><path d="M4 14a6 6 0 0 1 6 - 6"/><path d="M5 18a8 8 0 0 1 8 - 8"/><path d="M6 16a6 6 0 0 1 6 - 6"/><path d="m10 16 2 - 2v6"/><path d="m3 14 2 - 2"/><rect coordinate_x="14" coordinate_y="2" width="8" height="8" rx="2"/></svg>;"
        title="Last Updated";"
          is_loading ? ()"
            <Skeleton className="h - 8 w - 28 bg - zion - blue - light" />) : stats?.last_updated ? ("
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><rect width="18" height="18" coordinate_x="3" coordinate_y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;")
    </div>);"
    <Card className="bg - zion - blue - dark border - zion - blue - light">;"
      <CardContent className="p - 6">;"
        <div className="flex items - center gap - 4">;"
          <div className="h - 12 w - 12 rounded - lg bg - zion - purple / 20 flex items - center justify - center text - zion - purple">;"
            <p className="text - sm font - medium text - zion - slate - light mb - 1">;"
            <h4 className="text - 2xl font - bold text - white">;"
            </h4>;
      ;
    );"`;
pr-12325
          </div>;
        </div>;
      </CardContent>;

<<<<<<< HEAD


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </Card>);
}

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </Card>;
  ),;}
 export function AnalyticsSummary () {
  const {
  data: stats, isLoading 
}= useQuery ({
  queryKey: ['analytics-summary'];
queryFn: async () => {
  data: pageViewsData, error: pageViewsError 
}= await supabase .from ('analytics events') .select ('count') .eq ('event typepage view') .single ();
if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
//Get unique visitors (by counting distinct user IDs) const {
  data: uniqueVisitorsData, error: uniqueVisitorsError 
}= await supabase .from ('analytics events') .select ('user id') .eq ('event typepage view') .is ('user idnot.null');
if (uniqueVisitorsError) throw uniqueVisitorsError;
//Get conversion count const {
  data: conversionsData, error: conversionsError 
}= await supabase .from ('analytics events') .select ('count') .eq ('event typeconversion') .single ();
if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError;
.from ('analytics events') .select ('created at') .order ('created at', {
  ascending: false 
}) .limit (1) .single ();
if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError;
};
refetchInterval: 300000, //Refetch every 5 minutes 
});
//Calculate conversion rate const conversionRate = stats && stats.totalPageViews > 0 ? ( (stats.conversions / stats.totalPageViews) * 100) .toFixed (2) : '0.00';
return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" > <StatCard) : stats?.lastUpdated ? (formatDistanceToNow (stats.lastUpdated, {
  addSuffix: true 
}) ) : 'Never' 
}/> </div>) 
}</h4> </div> </div> </CardContent> </Card>) 
}
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-zion-purple/20 flex items-center justify-center text-zion-purple">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-zion-slate-light mb-1">
              {title}
            </p>
            <h4 className="text-2xl font-bold text-white">
              {value}
            </h4>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
    </Card>);"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
