
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
  ),;
=======
import { Card, CardContent } from "@/components/ui/card",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Skeleton } from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",export function AnalyticsSummary() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['analytics-summary'],
    queryFn: async () => {

export function AnalyticsSummary() {_const { data: stats, _isLoading} = useQuery(_{_queryKey: ['analytics-summary'], _queryFn: async () => {
      // Get total page views
      const { data: pageViewsData, _error: pageViewsError} = await supabase
        .from('analytics_events')
        .select('count')
        .eq('event_typepage_view')
        .single(),

      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError,
      
      // Get unique visitors (by counting distinct user IDs)
      const {_data: uniqueVisitorsData, _error: uniqueVisitorsError} = await supabase
        .from('analytics_events')
        .select('user_id')
        .eq('event_typepage_view')
        .is('user_idnot.null'),
        
      if (uniqueVisitorsError) throw uniqueVisitorsError,
      
      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) || []),      
      // Get conversion count
      const {_data: conversionsData, _error: conversionsError} = await supabase
        .from('analytics_events')
        .select('count')
        .eq('event_typeconversion')
        .single(),
        
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError,
      
      // Get most recent event to calculate &quot;last updated&quot;
      const { data: lastEventData, error: lastEventError } = await supabase        .from('analytics_events')
        .select('created_at')
        .order('created_at', {_ascending: false})
        .limit(1)
        .single(),
        
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError,
        
      return {
        totalPageViews: pageViewsData?.count || 0,
        uniqueVisitors: uniqueUserIds.size || 0,
        conversions: conversionsData?.count || 0,
        lastUpdated: lastEventData?.created_at ? new Date(lastEventData.created_at) : null}    },
    refetchInterval: 300000, // Refetch every 5 minutes
  }),
  
  // Calculate conversion rate
  const _conversionRate = stats && stats.totalPageViews > 0 
    ? ((stats.conversions / stats.totalPageViews) * 100).toFixed(2)
    : '0.00',

  return (
    <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8&quot;>
      <StatCard 
        title=&quot;Total Page Views&quot;
        value={isLoading ? <Skeleton className=&quot;h-8 w-20 bg-zion-blue-light&quot; /> : stats?.totalPageViews || 0}
        icon={
          <svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot;><path d=&quot;m2 12 5-3-5-3v6Z&quot;/><path d=&quot;M7 9v10c0 .6.4 1 1 1h2a1 1 0 0 0 1-1v-6&quot;/><path d=&quot;M11 13h4&quot;/><path d=&quot;M15 13v7a1 1 0 0 0 1 1h2c.6 0 1-.4 1-1V8.5&quot;/><path d=&quot;M19 8.5a3.5 3.5 0 0 0-7 0&quot;/><path d=&quot;M22 2 2 22&quot;/></svg>
        }
      />
      <StatCard 
        title=&quot;Unique Visitors&quot; 
        value={isLoading ? <Skeleton className=&quot;h-8 w-20 bg-zion-blue-light&quot; /> : stats?.uniqueVisitors || 0}
        icon={
          <svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot;><circle cx=&quot;18&quot; cy=&quot;15&quot; r=&quot;3&quot;/><circle cx=&quot;9&quot; cy=&quot;7&quot; r=&quot;4&quot;/><path d=&quot;M10 15H6a4 4 0 0 0-4 4v2&quot;/><path d=&quot;m21.7 16.4-.9-.3&quot;/><path d=&quot;m15.2 13.9-.9-.3&quot;/><path d=&quot;m16.6 18.7.3-.9&quot;/><path d=&quot;m19.1 12.2.3-.9&quot;/><path d=&quot;m19.6 18.7-.4-1&quot;/><path d=&quot;m16.8 12.3-.4-1&quot;/><path d=&quot;m14.3 16.6 1-.4&quot;/><path d=&quot;m20.7 13.8 1-.4&quot;/></svg>
        }
      />
      <StatCard 
        title=&quot;Conversion Rate&quot; 
        value={isLoading ? <Skeleton className=&quot;h-8 w-20 bg-zion-blue-light&quot; /> : `${conversionRate}%`}
        icon={
          <svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot;><path d=&quot;m2 20 2-2&quot;/><path d=&quot;M4 14a6 6 0 0 1 6-6&quot;/><path d=&quot;M5 18a8 8 0 0 1 8-8&quot;/><path d=&quot;M6 16a6 6 0 0 1 6-6&quot;/><path d=&quot;m10 16 2-2v6&quot;/><path d=&quot;m3 14 2-2&quot;/><rect x=&quot;14&quot; y=&quot;2&quot; width=&quot;8&quot; height=&quot;8&quot; rx=&quot;2&quot;/></svg>
        }
      />
      <StatCard 
        title=&quot;Last Updated&quot; 
        value={
          isLoading ? (
            <Skeleton className=&quot;h-8 w-28 bg-zion-blue-light&quot; />          ) : stats?.lastUpdated ? (
            formatDistanceToNow(stats.lastUpdated, _{ addSuffix: true})
          ) : 'Never'
        }
        icon={
          <svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot;><rect width=&quot;18&quot; height=&quot;18&quot; x=&quot;3&quot; y=&quot;4&quot; rx=&quot;2&quot; ry=&quot;2&quot;/><line x1=&quot;16&quot; x2=&quot;16&quot; y1=&quot;2&quot; y2=&quot;6&quot;/><line x1=&quot;8&quot; x2=&quot;8&quot; y1=&quot;2&quot; y2=&quot;6&quot;/><line x1=&quot;3&quot; x2=&quot;21&quot; y1=&quot;10&quot; y2=&quot;10&quot;/><path d=&quot;M8 14h.01&quot;/><path d=&quot;M12 14h.01&quot;/><path d=&quot;M16 14h.01&quot;/><path d=&quot;M8 18h.01&quot;/><path d=&quot;M12 18h.01&quot;/><path d=&quot;M16 18h.01&quot;/></svg>
        }      />
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
interface StatCardProps {;
  title:string,;
  value:React.ReactNode,;
  icon:React.ReactNode;
}
<<<<<<< HEAD
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
            </h4>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  ),;
=======

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
      <CardContent className=&quot;p-6&quot;>
        <div className=&quot;flex items-center gap-4&quot;>
          <div className=&quot;h-12 w-12 rounded-lg bg-zion-purple/20 flex items-center justify-center text-zion-purple&quot;>
            {icon}
          </div>
          <div>
            <p className=&quot;text-sm font-medium text-zion-slate-light mb-1&quot;>
              {title}
            </p>
            <h4 className=&quot;text-2xl font-bold text-white&quot;>
              {value}            </h4>
          </div>
        </div>
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
