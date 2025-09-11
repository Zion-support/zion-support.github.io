


<<<<<<< HEAD
<<<<<<< HEAD
import {Card, CardContent} from "@/components/ui/card";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {Skeleton} from "@/components/ui/skeleton";
import {formatDistanceToNow} from "date-fns";
import { Card, CardContent } from "@/components/ui/card",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function AnalyticsSummary() {
  const { data: stats, isLoading } = useQuery({

    queryKey: ['analytics-summary']

    queryFn: async () => {
      // Get total page views
      const { data: pageViewsData, error: pageViewsError } = await supabase
        .from('analytics_events')
        .select('count')
<<<<<<< HEAD

<<<<<<< HEAD
        .eq('event_typepage_view')

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .eq('event_typepage_view');
        .single();
        .eq('event_typepage_view')
        .single();
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
        .single(),

      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError,
      
<<<<<<< HEAD
=======
import {Card, CardContent} from "@/components/ui/card";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {Skeleton} from "@/components/ui/skeleton";
import {formatDistanceToNow} from "date-fns";
=======

        .eq('event_typepage_view')

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Get unique visitors (by counting distinct user IDs)
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase
        .from('analytics_events')
        .select('user_id')
        .eq('event_typepage_view')
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .is('user_idnot.null');
      if (uniqueVisitorsError) throw uniqueVisitorsError;

      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) |[]);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .is('user_idnot.null'),
        
      if (uniqueVisitorsError) throw uniqueVisitorsError,
      
      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) || []),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Get conversion count
      const { data: conversionsData, error: conversionsError } = await supabase
        .from('analytics_events')
        .select('count')
        .eq('event_typeconversion')
<<<<<<< HEAD
<<<<<<< HEAD
        .single();
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .single();
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .single(),
        
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError,
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Get most recent event to calculate "last updated"
      const { data: lastEventData, error: lastEventError } = await supabase
        .from('analytics_events')
        .select('created_at')
        .order('created_at', { ascending: false })
        .limit(1)
<<<<<<< HEAD
<<<<<<< HEAD
        .single();
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .single();
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .single(),
        
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError,
        
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return {
        totalPageViews: pageViewsData?.count |0
        uniqueVisitors: uniqueUserIds.size |0
        conversions: conversionsData?.count |0
        lastUpdated: lastEventData?.created_at ? new Date(lastEventData.created_at) : null}
<<<<<<< HEAD
<<<<<<< HEAD
    }
    refetchInterval: 300000, // Refetch every 5 minutes
  });
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    refetchInterval: 300000, // Refetch every 5 minutes
  });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    refetchInterval: 300000, // Refetch every 5 minutes
  }),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Calculate conversion rate
  const conversionRate = stats && stats.totalPageViews > 0
    ? ((stats.conversions / stats.totalPageViews) * 100).toFixed(2)
    : '0.00';
    : '0.00',

<<<<<<< HEAD
=======

  // Calculate conversion rate
  const conversionRate = stats && stats.totalPageViews > 0
    ? ((stats.conversions / stats.totalPageViews) * 100).toFixed(2)

    : '0.00',


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            <Skeleton className="h-8 w-28 bg-zion-blue-light" />
          ) : stats?.lastUpdated ? (
            formatDistanceToNow(stats.lastUpdated, { addSuffix: true })
          ) : 'Never'
        }
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>

<<<<<<< HEAD
<<<<<<< HEAD
        }
      />
    </div>
  )
}
interface StatCardProps {
  title: string
  value: React.ReactNode
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Card, CardContent } from "@/components/ui/card",;
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { Skeleton } from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns",;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function AnalyticsSummary() {;
  const { data: stats, isLoading } = useQuery({;
    queryKey: ['analytics-summary'],;
    queryFn: async () => {;
      // Get total page views;
      const { data: pageViewsData, error: pageViewsError } = await supabase;
        .from('analytics_events');
        .select('count');
        .eq('event_typepage_view');
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        .single();
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 12 5 - 3-5 - 3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1 - 1v - 6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1 - 1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0 - 7 0"/><path d="M22 2 2 22"/></svg>;
        }
=======

        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 12 5 - 3-5 - 3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1 - 1v - 6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1 - 1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0 - 7 0"/><path d="M22 2 2 22"/></svg>;
        }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
      <StatCard;
        title="Unique Visitors";
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : stats?.unique_visitors || 0}
<<<<<<< HEAD
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0 - 4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4 - 1"/><path d="m16.8 12.3-.4 - 1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;
        }
<<<<<<< HEAD
        .single(),;
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError,;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0 - 4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4 - 1"/><path d="m16.8 12.3-.4 - 1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;
        }


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Get unique visitors (by counting distinct user IDs);
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase;
        .from('analytics_events');
        .select('user_id');
        .eq('event_typepage_view');
<<<<<<< HEAD
<<<<<<< HEAD
        .is('user_idnot.null'),;
      if (uniqueVisitorsError) throw uniqueVisitorsError,;
      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) || []),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .is('user_idnot && user_idnot.null');

      if (uniqueVisitorsError) throw uniqueVisitorsError;

      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item && item.user_id) || []);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Get conversion count;
      const { data: conversionsData, error: conversionsError } = await supabase;
        .from('analytics_events');
        .select('count');
        .eq('event_typeconversion');
<<<<<<< HEAD
<<<<<<< HEAD
        .single(),;
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .single();

      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Get most recent event to calculate "last updated";
      const { data: lastEventData, error: lastEventError } = await supabase;
        .from('analytics_events');
        .select('created_at');
        .order('created_at', { ascending: false });
        .limit(1);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .single();

      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError;

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
        icon={;
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>;
        }
<<<<<<< HEAD
<<<<<<< HEAD
      />;
      <StatCard
        title="Last Updated" 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      />;
      <StatCard
        title="Last Updated" 

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        value={
          isLoading ? (
            <Skeleton className="h-8 w-28 bg-zion-blue-light" />;
          ) : stats?.lastUpdated ? (;
            formatDistanceToNow(stats && stats.lastUpdated, { addSuffix: true });
          ) : 'Never';
        }
        icon={;
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h && 14h.01"/><path d="M12 14h && 14h.01"/><path d="M16 14h && 14h.01"/><path d="M8 18h && 18h.01"/><path d="M12 18h && 18h.01"/><path d="M16 18h && 18h.01"/></svg>;
<<<<<<< HEAD
<<<<<<< HEAD
        .single(),;
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError,;
      return {;
        totalPageViews: pageViewsData?.count || 0,;
        uniqueVisitors: uniqueUserIds.size || 0,;
        conversions: conversionsData?.count || 0,;
        lastUpdated: lastEventData?.created_at ? new Date(lastEventData.created_at) : null}
    },;
    refetchInterval: 300000, // Refetch every 5 minutes;
  }),;
  // Calculate conversion rate;
  const conversionRate = stats && stats.totalPageViews > 0;
    ? ((stats.conversions / stats.totalPageViews) * 100).toFixed(2);
    : '0.00',;
  return (;
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">;
      <StatCard;
        title="Total Page Views";
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.totalPageViews || 0}
        icon={;
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5-3-5-3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1-1v-6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1-1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0-7 0"/><path d="M22 2 2 22"/></svg>;
        }
      />;
      <StatCard;
        title="Unique Visitors";
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.uniqueVisitors || 0}
        icon={;
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;
        }
      />;
      <StatCard;
        title="Conversion Rate";
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
        icon={;
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>;
        }
      />;
      <StatCard;
        title="Last Updated";
        value={;
          isLoading ? (;
            <Skeleton className="h-8 w-28 bg-zion-blue-light" />;
          ) : stats?.lastUpdated ? (;
            formatDistanceToNow(stats.lastUpdated, { addSuffix: true });
          ) : 'Never';
        }
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      />;
    </div>;
  );



<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
;
interface StatCardProps {;
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  icon: React.ReactNode
}
function StatCard({ title, value, icon }: StatCardProps) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface StatCardProps {;
  title: string,;
  value: React && React.ReactNode,;
  icon: React && React.ReactNode;
}
<<<<<<< HEAD
function StatCard(): any ({ title, value, icon }: StatCardProps) {;
=======

function StatCard(): any ({ title, value, icon }: StatCardProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardContent className="p-6">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-zion-purple/20 flex items-center justify-center text-zion-purple">;
            {icon}
          </div>;
          <div>;
            <p className="text-sm font-medium text-zion-slate-light mb-1">;
              {title}
            </p>;
            <h4 className="text-2xl font-bold text-white">;
              {value}
<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
      <StatCard;
        title="Conversion Rate";
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : `${conversion_rate}%`}
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 20 2 - 2"/><path d="M4 14a6 6 0 0 1 6 - 6"/><path d="M5 18a8 8 0 0 1 8 - 8"/><path d="M6 16a6 6 0 0 1 6 - 6"/><path d="m10 16 2 - 2v6"/><path d="m3 14 2 - 2"/><rect coordinate_x="14" coordinate_y="2" width="8" height="8" rx="2"/></svg>;
        }
      />;
      <StatCard;
        title="Last Updated";
        value={
          is_loading ? (
            <Skeleton className="h - 8 w - 28 bg - zion - blue - light" />) : stats?.last_updated ? (
            formatDistanceToNow (stats.last_updated, { add_suffix: true })) : 'Never';
        }
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><rect width="18" height="18" coordinate_x="3" coordinate_y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
        }
      />;
    </div>);
}
interface StatCardProps {
  title: string,
  value: React.ReactNode,
  icon: React.ReactNode;
}
/**
 * StatCard - Function description
 */
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
            <h4 className="text - 2xl font - bold text - white">;
<<<<<<< HEAD

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
      <CardContent className="p-6">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-zion-purple/20 flex items-center justify-center text-zion-purple">;
            {icon}
          </div>;
          <div>;
            <p className="text-sm font-medium text-zion-slate-light mb-1">;
              {title}
            </p>;
            <h4 className="text-2xl font-bold text-white">;
              {value}
=======
              {value}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h4>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </Card>);
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
