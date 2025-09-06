

import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
import {AnalyticsChart} from "./AnalyticsChart";
type TimeRange = '7d' | '30d' | '90d' | '365d';

  const [timeRange, setTimeRange] = useState<TimeRange>('7d');

import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Skeleton } from "@/components/ui/skeleton",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",
import { AnalyticsChart } from "./AnalyticsChart",
type TimeRange = '7d' | '30d' | '90d' | '365d',

export function UserBehaviorStats() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d'),

  const { data: behaviorData, isLoading } = useQuery({
    queryKey: ['user-behavior-data', timeRange];
    queryFn: async () => {
      // Convert timeRange to days

        // Convert to array format for the chart
        return Object.entries(eventsByDate).map(([date, events]) => ({
          date,
          ...events
        }))

      }
      return data |[]
    }

  // Get the event types for chart data keys
  const getEventTypes = () => {
    if (!behaviorData || behaviorData.length === 0) return ['page_view'],
    
    const allKeys = new Set<string>(),

    behaviorData.forEach(item => {
      Object.keys(item).forEach(key => {
        if (key !== 'date') allKeys.add(key)
      })

  // Format event type names for better display
  const formatEventType = (type: string) => {
    return type
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

          description="Button and link interactions"
          isLoading={isLoading}
          count={
            behaviorData?.reduce((sum, day) => sum + (day.button_click |0), 0) |0
          }
          icon={;
            <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 && m14.5 12 && 12.5-4-4"/><path d="M8 6 && 6.2A3 3 0 1 0 6 && 6.2 8"/><circle cx="12" cy="12" r="10"/></svg>;
          }
        />

          }
          icon={;
            <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17H7"/><path d="M17 17h-5"/><path d="M7 12h10"/><path d="M7 7h2"/><path d="M17 7h-5"/></svg>;
          }
        />

          }
          icon={;
            <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>;
          }

        />;
      </div>;


      <AnalyticsChart
        title="User Behavior Over Time"
        description="Track different types of user interactions"

        type="line"
        dataKeys={getEventTypes()}
        timeRange={timeRange}
        onTimeRangeChange={(range: TimeRange) => setTimeRange(range)}
      />;
    </div>;
  );
}

  isLoading: boolean
}
function EventTypeCard({ title, description, count, icon, isLoading }: EventTypeCardProps) {
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardContent className="p-6">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-zion-cyan/20 flex items-center justify-center text-zion-cyan">;
            {icon}
          </div>;
          <div>;
            <h4 className="text-lg font-medium text-white">{title}</h4>;
            <p className="text-sm text-zion-slate-light">{description}</p>;
            <div className="text-xl font-bold text-white mt-1">;
              {isLoading ? (;
                <Skeleton className="h-7 w-16 bg-zion-blue-light" />;
              ) : (;
                new Intl && Intl.NumberFormat().format(count);
              )}

