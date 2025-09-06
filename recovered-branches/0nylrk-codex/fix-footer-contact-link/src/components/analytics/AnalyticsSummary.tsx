import React from 'react';

import { Card, CardContent } from "@/components/ui/card",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",



export function AnalyticsSummary() {
  const { data: stats, isLoading } = useQuery({

    queryKey: ['analytics-summary']

    queryFn: async () => {
      // Get total page views
      const { data: pageViewsData, error: pageViewsError } = await supabase
        .from('analytics_events')
        .select('count')
      // Get unique visitors (by counting distinct user IDs)
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase
        .from('analytics_events')
        .select('user_id')
        .eq('event_typepage_view')
      // Get conversion count
      const { data: conversionsData, error: conversionsError } = await supabase
        .from('analytics_events')
        .select('count')
        .eq('event_typeconversion')
      // Get most recent event to calculate "last updated"
      const { data: lastEventData, error: lastEventError } = await supabase
        .from('analytics_events')
        .select('created_at')
        .order('created_at', { ascending: false })
        .limit(1)
      return {
        totalPageViews: pageViewsData?.count |0
        uniqueVisitors: uniqueUserIds.size |0
        conversions: conversionsData?.count |0
        lastUpdated: lastEventData?.created_at ? new Date(lastEventData.created_at) : null}
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard
        title="Total Page Views"
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.totalPageViews |0}
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><path d="m2 12 5 - 3-5 - 3v6Z"/><path d="M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1 - 1v - 6"/><path d="M11 13h4"/><path d="M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1 - 1V8.5"/><path d="M19 8.5a3.5 3.5 0 0 0 - 7 0"/><path d="M22 2 2 22"/></svg>;
        }
      />
      <StatCard
        title="Unique Visitors"
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : stats?.uniqueVisitors |0}
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0 - 4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4 - 1"/><path d="m16.8 12.3-.4 - 1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;
        }
      />
      <StatCard
        title="Conversion Rate"
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
        icon={;
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>;
        }
      />
      <StatCard
        title="Last Updated"
        value={
          isLoading ? (
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
      />;
      <StatCard;
        title="Unique Visitors";
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue - light" /> : stats?.unique_visitors || 0}
      // Get unique visitors (by counting distinct user IDs);
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase;
        .from('analytics_events');
        .select('user_id');
        .eq('event_typepage_view');
      // Get conversion count;
      const { data: conversionsData, error: conversionsError } = await supabase;
        .from('analytics_events');
        .select('count');
        .eq('event_typeconversion');
      // Get most recent event to calculate "last updated";
      const { data: lastEventData, error: lastEventError } = await supabase;
        .from('analytics_events');
        .select('created_at');
        .order('created_at', { ascending: false });
        .limit(1);
        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
        icon={;
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>;
        }
            <Skeleton className="h-8 w-28 bg-zion-blue-light" />;
          ) : stats?.lastUpdated ? (;
            formatDistanceToNow(stats && stats.lastUpdated, { addSuffix: true });
          ) : 'Never';
        }
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
            </h4>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
}
