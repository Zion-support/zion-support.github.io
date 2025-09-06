
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d';
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx
import { use_query } from '@tanstack / react - query';
import { supabase } from '@/integrations / supabase / client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Skeleton } from '@/components / ui / skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { useState } from './react';
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d';
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Skeleton } from "@/components/ui/skeleton",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const timeRangeToInterval = {
  '1d': { days: 1, interval: 'hour' }
  '7d': { days: 7, interval: 'day' }
  '30d': { days: 30, interval: 'day' }
  '90d': { days: 90, interval: 'week' }
  '365d': { days: 365, interval: 'month' }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  const { data: pageViews, isLoading } = useQuery({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx
    queryKey: ['page-views-data', timeRange],
    queryFn: async () => {

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export function PageViewsTable() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
},

export function PageViewsTable() {;
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
export function PageViewsTable() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d'),
  
  const { data: pageViews, isLoading } = useQuery({
    queryKey: ['page-views-data', timeRange],
    queryFn: async () => {
      const { days } = timeRangeToInterval[timeRange];
      const { days } = timeRangeToInterval[timeRange],
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Get top pages by views
      const { data, error } = await supabase
        .from('analytics_events')
        .select('path, count')
        .eq('event_typepage_view')
        .gte('created_at', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString())
        .order('count', { ascending: false })
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        .limit(10);
      if (error) throw error;
      return data |[]
    }});
        .limit(10),
        
      if (error) throw error,
      
      return data || []
    }}),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Format path names for better display
  const formatPathName = (path: string) => {
    if (path === '/') return 'Home Page'
    return path.charAt(1).toUpperCase() + path.slice(2).replace(/-/g, ' ')
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  // Calculate total views to determine percentages
  const totalViews = pageViews?.reduce((sum, page) => sum + page.count, 0) |0;
  },
  
  // Calculate total views to determine percentages
  const totalViews = pageViews?.reduce((sum, page) => sum + page.count, 0) || 0,
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <div>
            <CardTitle className="text-white text-lg">Top Pages</CardTitle>
            <CardDescription className="text-zion-slate-light">Most viewed pages on your platform</CardDescription>
          </div>
          <Select value={timeRange} onValueChange={(value: TimeRange) => setTimeRange(value)}>
            <SelectTrigger className="w-28 mt-2 sm:mt-0 bg-zion-blue border-zion-blue-light text-zion-slate-light">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">
              <SelectItem value="1d">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 3 months</SelectItem>
              <SelectItem value="365d">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading ? (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <Skeleton className="h-4 w-40 bg-zion-blue-light" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-10 bg-zion-blue-light" />
                  <Skeleton className="h-6 w-32 bg-zion-blue-light" />
                </div>
              </div>
            ))
          ) : pageViews && pageViews.length > 0 ? (
            pageViews.map((page, index) => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              const percentage = totalViews > 0 ? (page.count / totalViews * 100).toFixed(1) : '0';

              const percentage = totalViews > 0 ? (page.count / totalViews * 100).toFixed(1) : '0',
              
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-zion-slate-light font-medium">
                    {formatPathName(page.path)}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-medium">{page.count}</span>
                    <div className="w-32 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-zion-blue-light rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-zion-slate">{percentage}%</span>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-center py-8 text-zion-slate">
              No page view data available for this time period
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          )}
        </div>
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { useState } from "react",;
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d',;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const timeRangeToInterval = {;
  '1d': { days: 1, interval: 'hour' },;
  '7d': { days: 7, interval: 'day' },;
  '30d': { days: 30, interval: 'day' },;
  '90d': { days: 90, interval: 'week' },;
  '365d': { days: 365, interval: 'month' }
<<<<<<< HEAD

========
const timeRangeToInterval = {;
  '1d': { days: 1, interval: 'hour' },;
  '7d': { days: 7, interval: 'day' },;
  '30d': { days: 30, interval: 'day' },;
  '90d': { days: 90, interval: 'week' },;
  '365d': { days: 365, interval: 'month' }
=======

import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { useState } from "react",;
;
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d',;
;
const timeRangeToInterval = {;
  '1d':{ days:1, interval:'hour' },;
  '7d':{ days:7, interval:'day' },;
  '30d':{ days:30, interval:'day' },;
  '90d':{ days:90, interval:'week' },;
  '365d':{ days:365, interval:'month' }
},;
;
export function PageViewsTable() {;
  const [timeRange, setTimeRange] = useState<TimeRange>('7d'),;
  ;
  const { data:pageViews, isLoading } = useQuery({;
    queryKey:['page-views-data', timeRange],;
    queryFn:async () => {;
      const { days } = timeRangeToInterval[timeRange],;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
},;
export function PageViewsTable() {;
  const [timeRange, setTimeRange] = useState<TimeRange>('7d'),;
  const { data: pageViews, isLoading } = useQuery({;
    queryKey: ['page-views-data', timeRange],;
    queryFn: async () => {;
      const { days } = timeRangeToInterval[timeRange],;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Get top pages by views;
      const { data, error } = await supabase;
        .from('analytics_events');
        .select('path, count');
        .eq('event_typepage_view');
<<<<<<< HEAD
<<<<<<< HEAD
        .gte('created_at', new Date(Date && Date.now() - days * 24 * 60 * 60 * 1000).toISOString());
        .order('count', { ascending: false });
        .limit(10);
      if (error) throw error;
      return data || [];
    }});
  // Format path names for better display;
  const formatPathName = (path: string) => {;
    if (path === '/') return 'Home Page',;
    return path && path.charAt(1).toUpperCase() + path && path.slice(2).replace(/-/g, ' ');
  };
  // Calculate total views to determine percentages;
  const totalViews = pageViews?.reduce((sum, page) => sum + page && page.count, 0) || 0;
  return (
=======
        .gte('created_at', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString());
        .order('count', { ascending:false });
        .limit(10),;
        ;
      if (error) throw error,;
      ;
      return data || [],;
    }}),;
  ;
  // Format path names for better display;
  const formatPathName = (path:string) => {;
    if (path === '/') return 'Home Page',;
    return path.charAt(1).toUpperCase() + path.slice(2).replace(/-/g, ' '),;
  },;
  ;
  // Calculate total views to determine percentages;
  const totalViews = pageViews?.reduce((sum, page) => sum + page.count, 0) || 0,;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        .gte('created_at', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString());
        .order('count', { ascending: false });
        .limit(10),;
      if (error) throw error,;
      return data || [];
    }}),;
  // Format path names for better display;
  const formatPathName = (path: string) => {;
    if (path === '/') return 'Home Page',;
    return path.charAt(1).toUpperCase() + path.slice(2).replace(/-/g, ' ');
  },;
  // Calculate total views to determine percentages;
  const totalViews = pageViews?.reduce((sum, page) => sum + page.count, 0) || 0;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader className="pb-2">;
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">;
          <div>;
            <CardTitle className="text-white text-lg">Top Pages</CardTitle>;
            <CardDescription className="text-zion-slate-light">Most viewed pages on your platform</CardDescription>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          <Select value={timeRange} onValueChange={(value: TimeRange) => setTimeRange(value)}>;
=======
          <Select value={timeRange} onValueChange={(value:TimeRange) => setTimeRange(value)}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          <Select value={timeRange} onValueChange={(value: TimeRange) => setTimeRange(value)}>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <SelectTrigger className="w-28 mt-2 sm:mt-0 bg-zion-blue border-zion-blue-light text-zion-slate-light">;
              <SelectValue placeholder="Time Range" />;
            </SelectTrigger>;
            <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;
              <SelectItem value="1d">Last 24h</SelectItem>;
              <SelectItem value="7d">Last 7 days</SelectItem>;
              <SelectItem value="30d">Last 30 days</SelectItem>;
              <SelectItem value="90d">Last 3 months</SelectItem>;
              <SelectItem value="365d">Last year</SelectItem>;
            </SelectContent>;
          </Select>;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          {isLoading ? (;
            Array(5).fill(0).map((_, i) => (;
              <div key={i} className="flex items-center justify-between">;
                <Skeleton className="h-4 w-40 bg-zion-blue-light" />;
                <div className="flex items-center gap-2">;
                  <Skeleton className="h-4 w-10 bg-zion-blue-light" />;
                  <Skeleton className="h-6 w-32 bg-zion-blue-light" />;
                </div>;
              </div>;
            ));
<<<<<<< HEAD
<<<<<<< HEAD
          ) : pageViews && pageViews.length > 0 ? (;
            pageViews && pageViews.map((page, index) => {;
              const percentage = totalViews > 0 ? (page && page.count / totalViews * 100).toFixed(1) : '0';
              return (
                <div key={index} className="flex items-center justify-between">;
                  <div className="text-zion-slate-light font-medium">;
                    {formatPathName(page && page.path)}
                  </div>;
                  <div className="flex items-center gap-3">;
                    <span className="text-white font-medium">{page && page.count}</span>;
                    <div className="w-32 flex items-center gap-2">;
                      <div className="flex-1 h-2 bg-zion-blue-light rounded-full overflow-hidden">;
                        <div
                          className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx
                          style={{ width: `${percentage}%` }}
=======
          ) :pageViews && pageViews.length > 0 ? (;
            pageViews.map((page, index) => {;
              const percentage = totalViews > 0 ? (page.count / totalViews * 100).toFixed(1) :'0',;
              ;
=======
          ) : pageViews && pageViews.length > 0 ? (;
            pageViews.map((page, index) => {;
              const percentage = totalViews > 0 ? (page.count / totalViews * 100).toFixed(1) : '0';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              return (;
                <div key={index} className="flex items-center justify-between">;
                  <div className="text-zion-slate-light font-medium">;
                    {formatPathName(page.path)}
                  </div>;
                  <div className="flex items-center gap-3">;
                    <span className="text-white font-medium">{page.count}</span>;
                    <div className="w-32 flex items-center gap-2">;
                      <div className="flex-1 h-2 bg-zion-blue-light rounded-full overflow-hidden">;
<<<<<<< HEAD
                        <div ;
                          className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" ;
                          style={{ width:`${percentage}%` }}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                        <div;
                          className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan";
                          style={{ width: `${percentage}%` }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        />;
                      </div>;
                      <span className="text-xs text-zion-slate">{percentage}%</span>;
                    </div>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
              );
            });
          ) : (;
=======
              ),;
            });
          ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="text-center py-8 text-zion-slate">;
              No page view data available for this time period;
            </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          )}

========
          )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx
}
;
<<<<<<< HEAD

=======
export /**
 * PageViewsTable - Function description
 */
function PageViewsTable() {
  const [time_range, setTimeRange] = useState < TimeRange>('7d');
;
  const { data: page_views, is_loading } = use_query ({
    query_key: ['page - views - data', time_range];
    query_fn: async () => {
      const { days } = timeRangeToInterval[time_range];
;
      // Get top pages by views;
      const { data, error } = await supabase;
        .from ('analytics_events');
        .select ('path, count');
        .eq ('event_typepage_view');
        .gte ('created_at', new Date (Date.now () - days * 24 * 60 * 60 * 1000).toISOString ());
        .order ('count', { ascending: false });
        .limit (10);
;
      // Check condition
if (throw error) {
  $2
}
      return data || [];
    }});
;
  // Format path names for better display;
  const formatPathName = (path: string) =>: any {
    // Check condition
if (return 'Home Page', ) {
  $2
}
    return path.char_at (1).toUpperCase () + path.slice (2).replace (/-/g, ' ');
  }
;
  // Calculate total views to determine percentages;
  const total_views = page_views?.reduce ((sum, page) => sum + page.count, 0) || 0;
;
  return (
    <Card className="bg - zion - blue - dark border - zion - blue - light">;
      <CardHeader className="pb - 2">;
        <div className="flex flex - col sm:flex - row justify - between sm:items - center">;
          <div>;
            <CardTitle className="text - white text - lg">Top Pages</CardTitle>;
            <CardDescription className="text - zion - slate - light">Most viewed pages on your platform</CardDescription>;
          </div>;
          <Select value={time_range} onValueChange={(value: TimeRange) => setTimeRange (value)}>;
            <SelectTrigger className="w - 28 mt - 2 sm:mt - 0 bg - zion - blue border - zion - blue - light text - zion - slate - light">;
              <SelectValue placeholder="Time Range" />;
            </SelectTrigger>;
            <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate - light">;
              <SelectItem value="1d">Last 24h</SelectItem>;
              <SelectItem value="7d">Last 7 days</SelectItem>;
              <SelectItem value="30d">Last 30 days</SelectItem>;
              <SelectItem value="90d">Last 3 months</SelectItem>;
              <SelectItem value="365d">Last year</SelectItem>;
            </SelectContent>;
          </Select>;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div className="space - y-4">;
          {is_loading ? (
            Array (5).fill (0).map ((_, i) => (
              <div key={i} className="flex items - center justify - between">;
                <Skeleton className="h - 4 w - 40 bg - zion - blue - light" />;
                <div className="flex items - center gap - 2">;
                  <Skeleton className="h - 4 w - 10 bg - zion - blue - light" />;
                  <Skeleton className="h - 6 w - 32 bg - zion - blue - light" />;
                </div>;
              </div>))) : page_views && page_views.length > 0 ? (
            page_views.map ((page, index) => {
              const percentage = total_views > 0 ? (page.count / total_views * 100).to_fixed (1) : '0';
;
              return (
                <div key={index} className="flex items - center justify - between">;
                  <div className="text - zion - slate - light font - medium">;
                    {formatPathName (page.path)}
                  </div>;
                  <div className="flex items - center gap - 3">;
                    <span className="text - white font - medium">{page.count}</span>;
                    <div className="w - 32 flex items - center gap - 2">;
                      <div className="flex - 1 h - 2 bg - zion - blue - light rounded - full overflow - hidden">;
                        <div;
                          className="h - full bg - gradient - to - r from - zion - purple to - zion - cyan";
                          style={{ width: `${percentage}%` }}
                        />;
                      </div>;
                      <span className="text - xs text - zion - slate">{percentage}%</span>;
                    </div>;
                  </div>;
                </div>);
            })) : (
            <div className="text - center py - 8 text - zion - slate">;
              No page view data available for this time period;
            </div>)}
        </div>;
      </CardContent>;
    </Card>);
=======
  ),; type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d';
  data, error 
}= await supabase .from ('analytics events') .select ('path, count') .eq ('event typepage view') .gte ('created at', new Date (Date.now () - days * 24 * 60 * 60 * 1000) .toISOString () ) if (error) throw error;
return data || [] 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
});
//Format path names for better display <div> <CardTitle className="text-white text-lg" >Top Pages</CardTitle> <CardDescription className="text-zion-slate-light" >Most viewed pages on your platform</CardDescription> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light" > <SelectItem value="1d" >Last 24h</SelectItem> <SelectItem value="7d" >Last 7 days</SelectItem> <SelectItem value="30d" >Last 30 days</SelectItem> <SelectItem value="90d" >Last 3 months</SelectItem> <SelectItem value="365d" >Last year</SelectItem> </SelectContent> </Select> </div> </CardHeader> <CardContent> </div> </div> </div>) 
}) ) : (<div className="text-center py-8 text-zion-slate" > No page view data available for this time period </div>) 
}</div> </CardContent> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsTable.tsx
=======
              );
            });
          ) : (;
            <div className="text-center py-8 text-zion-slate">;
              No page view data available for this time period;
            </div>;
          )}
        </div>;
      </CardContent>;
    </Card>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
