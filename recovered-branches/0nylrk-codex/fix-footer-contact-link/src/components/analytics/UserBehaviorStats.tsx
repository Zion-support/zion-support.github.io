








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

      const days = parseInt(timeRange.replace('d', ''));
      // Get events grouped by type and date
      const { data, error } = await supabase.rpc('get_event_distribution', {
        days_back: days
      });
      if (error) {
        console.error('Error fetching behavior data:', error);
        // Fallback to manual query if the RPC doesn't exist
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const { data: manualData, error: manualError } = await supabase
          .from('analytics_events')
          .select('event_type, created_at')
          .gte('created_at', startDate.toISOString());
        if (manualError) throw manualError;
        // Process data to count events by type and date
        const eventsByDate: Record<string, Record<string, number>> = {}
        manualData?.forEach(event => {
          const date = new Date(event.created_at).toISOString().split('T')[0];
          if (!eventsByDate[date]) eventsByDate[date] = {}
          if (!eventsByDate[date][event.event_type]) eventsByDate[date][event.event_type] = 0;
          eventsByDate[date][event.event_type]++
        });
      const days = parseInt(timeRange.replace('d', '')),
      
      // Get events grouped by type and date
      const { data, error } = await supabase.rpc('get_event_distribution', {
        days_back: days
      }),
      
      if (error) {
        console.error('Error fetching behavior data:', error),
        
        // Fallback to manual query if the RPC doesn't exist
        const startDate = new Date(),
        startDate.setDate(startDate.getDate() - days),
        
        const { data: manualData, error: manualError } = await supabase
          .from('analytics_events')
          .select('event_type, created_at')
          .gte('created_at', startDate.toISOString()),
          
        if (manualError) throw manualError,
        
        // Process data to count events by type and date
        const eventsByDate: Record<string Record<string number>> = {},
        manualData?.forEach(event => {
          const date = new Date(event.created_at).toISOString().split('T')[0],
          if (!eventsByDate[date]) eventsByDate[date] = {},
          if (!eventsByDate[date][event.event_type]) eventsByDate[date][event.event_type] = 0,
          eventsByDate[date][event.event_type]++
        }),
        

        // Convert to array format for the chart
        return Object.entries(eventsByDate).map(([date, events]) => ({
          date,
          ...events
        }))

import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { useState } from "react",;
import { AnalyticsChart } from "./AnalyticsChart",;
type TimeRange = '7d' | '30d' | '90d' | '365d',;

export function UserBehaviorStats() {;
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');

  const { data: behaviorData, isLoading } = useQuery({;
    queryKey: ['user-behavior-data', timeRange];
    queryFn: async () => {;
      // Convert timeRange to days;
      const days = parseInt(timeRange && timeRange.replace('d', ''));

      // Get events grouped by type and date;
      const { data, error } = await supabase && supabase.rpc('get_event_distribution', {;
        days_back: days;
      });

      if (error) {;
        console && console.error('Error fetching behavior data:', error);

        // Fallback to manual query if the RPC doesn't exist;
        const startDate = new Date();
        startDate && startDate.setDate(startDate && startDate.getDate() - days);

        const { data: manualData, error: manualError } = await supabase;
          .from('analytics_events');
          .select('event_type, created_at');
          .gte('created_at', startDate && startDate.toISOString());

        if (manualError) throw manualError;

        // Process data to count events by type and date;
        const eventsByDate: Record<string, Record<string, number>> = {};
        manualData?.forEach(event => {;
          const date = new Date(event && event.created_at).toISOString().split('T')[0];
          if (!eventsByDate[date]) eventsByDate[date] = {};
          if (!eventsByDate[date][event && event.event_type]) eventsByDate[date][event && event.event_type] = 0;
          eventsByDate[date][event && event.event_type]++;
        });

        // Convert to array format for the chart;
        return Object && Object.entries(eventsByDate).map(([date, events]) => ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

          date;
          ...events;
        }));





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


      }


      return data || [];
    }

  });



    const allKeys = new Set<string>();
  }),

  }),


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




  // Get the event types for chart data keys
  const getEventTypes = () => {
    if (!behaviorData || behaviorData.length === 0) return ['page_view'],
    
    const allKeys = new Set<string>(),




    behaviorData.forEach(item => {
      Object.keys(item).forEach(key => {
        if (key !== 'date') allKeys.add(key)
      })

    });
    return Array.from(allKeys)
  }
    }),
    
    return Array.from(allKeys)
  },
  

  // Format event type names for better display
  const formatEventType = (type: string) => {
    return type
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

  }
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <EventTypeCard
          title="Click Events"
  },

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <EventTypeCard 
          title="Click Events" 

          description="Button and link interactions"
          isLoading={isLoading}
          count={
            behaviorData?.reduce((sum, day) => sum + (day.button_click |0), 0) |0
          }
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14.5 12.5-4-4"/><path d="M8 6.2A3 3 0 1 0 6.2 8"/><circle cx="12" cy="12" r="10"/></svg>
          }
        />

        <EventTypeCard
          title="Click Events" 
          description="Button and link interactions"
          isLoading={isLoading}
          count={
            behaviorData?.reduce((sum, day) => sum + (day && day.button_click || 0), 0) || 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          }
          icon={;
            <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 && m14.5 12 && 12.5-4-4"/><path d="M8 6 && 6.2A3 3 0 1 0 6 && 6.2 8"/><circle cx="12" cy="12" r="10"/></svg>;
          }

        />;
        <EventTypeCard
          title="Form Submissions" 
          description="Completed forms and sign-ups"
          isLoading={isLoading}
          count={
            behaviorData?.reduce((sum, day) => sum + (day.form_submit |0), 0) |0
        <EventTypeCard 
          title="Form Submissions" 
          description="Completed forms and sign-ups"
          isLoading={isLoading}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

          }
          icon={;
            <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17H7"/><path d="M17 17h-5"/><path d="M7 12h10"/><path d="M7 7h2"/><path d="M17 7h-5"/></svg>;
          }
        />

        <EventTypeCard
          title="Conversions" 
          description="Goal completions"
          isLoading={isLoading}
          count={
            behaviorData?.reduce((sum, day) => sum + (day.conversion |0), 0) |0
        <EventTypeCard 
          title="Conversions" 
          description="Goal completions"
          isLoading={isLoading}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

          }
          icon={;
            <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>;
          }

        />;
      </div>;


      <AnalyticsChart
        title="User Behavior Over Time"
        description="Track different types of user interactions"

        data={behaviorData |[]}
        data={behaviorData || []}

        type="line"
        dataKeys={getEventTypes()}
        timeRange={timeRange}
        onTimeRangeChange={(range: TimeRange) => setTimeRange(range)}
      />;
    </div>;
  );
}

interface EventTypeCardProps {
  title: string
  description: string
  count: number
  icon: React.ReactNode
;
interface EventTypeCardProps {;
  title: string,;
  description: string,;
  count: number;
  icon: React.ReactNode;
  isLoading: boolean;
}


  isLoading: boolean
}
function EventTypeCard({ title, description, count, icon, isLoading }: EventTypeCardProps) {
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-zion-cyan/20 flex items-center justify-center text-zion-cyan">
            {icon}
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">{title}</h4>
            <p className="text-sm text-zion-slate-light">{description}</p>
            <div className="text-xl font-bold text-white mt-1">
              {isLoading ? (
                <Skeleton className="h-7 w-16 bg-zion-blue-light" />
              ) : (
                new Intl.NumberFormat().format(count)
              )}

            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
            </div>;
          </div>;
        </div>;
      </CardContent>;

    </Card>);
}


