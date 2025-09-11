



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export function AnalyticsSummary() {
  const { data: stats, isLoading } = useQuery({

    queryKey: ['analytics-summary']

    queryFn: async () => {
      // Get total page views
      const { data: pageViewsData, error: pageViewsError } = await supabase
        .from('analytics_events')
        .select('count')
        .eq('event_typepage_view');
        .single();
        .eq('event_typepage_view')
        .single();
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
        .single(),

      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError,
      
      // Get unique visitors (by counting distinct user IDs)
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
        .single();
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError;
        .single(),
        
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError,
        
      return {
        totalPageViews: pageViewsData?.count |0
        uniqueVisitors: uniqueUserIds.size |0
        conversions: conversionsData?.count |0
        lastUpdated: lastEventData?.created_at ? new Date(lastEventData.created_at) : null}
    }
    refetchInterval: 300000, // Refetch every 5 minutes
  });
    },
    refetchInterval: 300000, // Refetch every 5 minutes
  }),
  
  // Calculate conversion rate
  const conversionRate = stats && stats.totalPageViews > 0
    ? ((stats.conversions / stats.totalPageViews) * 100).toFixed(2)
    : '0.00';
    : '0.00',

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


=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
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




}
;
interface StatCardProps {;
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
}

  icon: React.ReactNode
}
function StatCard({ title, value, icon }: StatCardProps) {
=======

interface StatCardProps {;
  title: string,;
  value: React && React.ReactNode,;
  icon: React && React.ReactNode;
}

function StatCard(): any ({ title, value, icon }: StatCardProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

=======
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
              {value}

            </h4>;
          </div>;
        </div>;
      </CardContent>;

    </Card>);
}

