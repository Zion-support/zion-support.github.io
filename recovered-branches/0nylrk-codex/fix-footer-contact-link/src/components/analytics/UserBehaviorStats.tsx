
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { useState } from "react",;
import { AnalyticsChart } from "./AnalyticsChart",;
;
type TimeRange = '7d' | '30d' | '90d' | '365d',;
;
export function UserBehaviorStats() {;
  const [timeRange, setTimeRange] = useState<TimeRange>('7d'),;
  ;
  const { data:behaviorData, isLoading } = useQuery({;
    queryKey:['user-behavior-data', timeRange],;
    queryFn:async () => {;
      // Convert timeRange to days;
      const days = parseInt(timeRange.replace('d', '')),;
      ;
      // Get events grouped by type and date;
      const { data, error } = await supabase.rpc('get_event_distribution', {;
        days_back:days;
      }),;
      ;
      if (error) {;
        console.error('Error fetching behavior data:', error),;
        ;
        // Fallback to manual query if the RPC doesn't exist;
        const startDate = new Date(),;
        startDate.setDate(startDate.getDate() - days),;
        ;
        const { data:manualData, error:manualError } = await supabase;
          .from('analytics_events');
          .select('event_type, created_at');
          .gte('created_at', startDate.toISOString()),;
          ;
        if (manualError) throw manualError,;
        ;
        // Process data to count events by type and date;
        const eventsByDate:Record<string Record<string number>> = {},;
        manualData?.forEach(event => {;
          const date = new Date(event.created_at).toISOString().split('T')[0],;
          if (!eventsByDate[date]) eventsByDate[date] = {},;
          if (!eventsByDate[date][event.event_type]) eventsByDate[date][event.event_type] = 0,;
          eventsByDate[date][event.event_type]++,;
        }),;
        ;
        // Convert to array format for the chart;
        return Object.entries(eventsByDate).map(([date, events]) => ({;
          date,;
          ...events;
        })),;
      }
      ;
      return data || [],;
    }
  }),;
;
  // Get the event types for chart data keys;
  const getEventTypes = () => {;
    if (!behaviorData || behaviorData.length === 0) return ['page_view'],;
    ;
    const allKeys = new Set<string>(),;
    behaviorData.forEach(item => {;
      Object.keys(item).forEach(key => {;
        if (key !== 'date') allKeys.add(key),;
      }),;
    }),;
    ;
    return Array.from(allKeys),;
  },;
  ;
  // Format event type names for better display;
  const formatEventType = (type:string) => {;
    return type;
      .split('_');
      .map(word => word.charAt(0).toUpperCase() + word.slice(1));
      .join(' ');
  },;
;
  return (;
    <div className="space-y-6">;
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <EventTypeCard ;
          title="Click Events" ;
          description="Button and link interactions";
=======
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Skeleton } from "@/components/ui/skeleton",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",
import { AnalyticsChart } from "./AnalyticsChart",
type TimeRange = '7d' | '30d' | '90d' | '365d',
type TimeRange = '7d' | '30d' | '90d' | '365d';

export function UserBehaviorStats() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d'),  
  const { data: behaviorData, _isLoading} = useQuery(_{_queryKey: ['user-behavior-data', _timeRange], _queryFn: async () => {
      // Convert timeRange to days
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
        const { data: manualData, _error: manualError} = await supabase
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
        }))      }
      
      return data || []
    }
  }),

  // Get the event types for chart data keys
  const getEventTypes = () => {
    if (!behaviorData || behaviorData.length === 0) return ['page_view'],
    
    const allKeys = new Set<string>(),
    behaviorData.forEach(item => {
      Object.keys(item).forEach(key => {
        if (key !== 'date') allKeys.add(key)
      })
    }),    
    return Array.from(allKeys)
  },
  
  // Format event type names for better display
  const _formatEventType = (_type: string) => {_return type
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  },

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
        <EventTypeCard 
          title=&quot;Click Events&quot; 
          description=&quot;Button and link interactions&quot;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          isLoading={isLoading}
          count={;
            behaviorData?.reduce((sum, day) => sum + (day.button_click || 0), 0) || 0;
          }
<<<<<<< HEAD
          icon={;
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14.5 12.5-4-4"/><path d="M8 6.2A3 3 0 1 0 6.2 8"/><circle cx="12" cy="12" r="10"/></svg>;
          }
        />;
        <EventTypeCard ;
          title="Form Submissions" ;
          description="Completed forms and sign-ups";
=======
          icon={
            <svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot;><path d=&quot;m14.5 12.5-4-4&quot;/><path d=&quot;M8 6.2A3 3 0 1 0 6.2 8&quot;/><circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot;/></svg>
          }
        />
        <EventTypeCard 
          title=&quot;Form Submissions&quot; 
          description=&quot;Completed forms and sign-ups&quot;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          isLoading={isLoading}
          count={;
            behaviorData?.reduce((sum, day) => sum + (day.form_submit || 0), 0) || 0;
          }
<<<<<<< HEAD
          icon={;
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17H7"/><path d="M17 17h-5"/><path d="M7 12h10"/><path d="M7 7h2"/><path d="M17 7h-5"/></svg>;
          }
        />;
        <EventTypeCard ;
          title="Conversions" ;
          description="Goal completions";
=======
          icon={
            <svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot;><rect width=&quot;18&quot; height=&quot;18&quot; x=&quot;3&quot; y=&quot;3&quot; rx=&quot;2&quot;/><path d=&quot;M9 17H7&quot;/><path d=&quot;M17 17h-5&quot;/><path d=&quot;M7 12h10&quot;/><path d=&quot;M7 7h2&quot;/><path d=&quot;M17 7h-5&quot;/></svg>
          }
        />
        <EventTypeCard 
          title=&quot;Conversions&quot; 
          description=&quot;Goal completions&quot;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          isLoading={isLoading}
          count={;
            behaviorData?.reduce((sum, day) => sum + (day.conversion || 0), 0) || 0;
          }
<<<<<<< HEAD
          icon={;
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>;
          }
        />;
      </div>;
      ;
      <AnalyticsChart;
        title="User Behavior Over Time";
        description="Track different types of user interactions";
        data={behaviorData || []}
        type="line";
        dataKeys={getEventTypes()}
        timeRange={timeRange}
        onTimeRangeChange={(range:TimeRange) => setTimeRange(range)}
      />;
    </div>;
  ),;
=======
          icon={
            <svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot;><path d=&quot;M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6&quot;/><polyline points=&quot;15 3 21 3 21 9&quot;/><line x1=&quot;10&quot; x2=&quot;21&quot; y1=&quot;14&quot; y2=&quot;3&quot;/></svg>
          }        />
      </div>
      
      <AnalyticsChart
        title=&quot;User Behavior Over Time&quot;
        description=&quot;Track different types of user interactions&quot;
        data={behaviorData || []}
        type=&quot;line&quot;
        dataKeys={getEventTypes()}
        timeRange={timeRange}
        onTimeRangeChange={(range: TimeRange) => setTimeRange(range)}      />
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
interface EventTypeCardProps {;
  title:string,;
  description:string,;
  count:number,;
  icon:React.ReactNode,;
  isLoading:boolean;
}
<<<<<<< HEAD
;
function EventTypeCard({ title, description, count, icon, isLoading } EventTypeCardProps) {;
  return (;
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
              ) :(;
                new Intl.NumberFormat().format(count);
              )}
            </div>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  ),;
=======

function EventTypeCard({ title, description, count, icon, isLoading }: EventTypeCardProps) {
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
      <CardContent className=&quot;p-6&quot;>
        <div className=&quot;flex items-center gap-4&quot;>
          <div className=&quot;h-12 w-12 rounded-lg bg-zion-cyan/20 flex items-center justify-center text-zion-cyan&quot;>
            {icon}
          </div>
          <div>
            <h4 className=&quot;text-lg font-medium text-white&quot;>{title}</h4>
            <p className=&quot;text-sm text-zion-slate-light&quot;>{description}</p>
            <div className=&quot;text-xl font-bold text-white mt-1&quot;>
              {isLoading ? (
                <Skeleton className=&quot;h-7 w-16 bg-zion-blue-light&quot; />              ) : (
                new Intl.NumberFormat().format(count)
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
