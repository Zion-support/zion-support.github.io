
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Skeleton } from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
=======
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { useQuery } from &quot;@tanstack/react-query&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;
import { formatDistanceToNow } from &quot;date-fns&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function AnalyticsSummary() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['analytics-summary'],
    queryFn: async () => {
      // Get total page views
      const { data: pageViewsData, error: pageViewsError } = await supabase
        .from('analytics_events')
        .select('count')
        .eq('event_typepage_view')
        .single(),

      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError,
      
      // Get unique visitors (by counting distinct user IDs)
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase
        .from('analytics_events')
        .select('user_id')
        .eq('event_typepage_view')
        .is('user_idnot.null'),
        
      if (uniqueVisitorsError) throw uniqueVisitorsError,
      
      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) || []),
      
      // Get conversion count
      const { data: conversionsData, error: conversionsError } = await supabase
        .from('analytics_events')
        .select('count')
        .eq('event_typeconversion')
        .single(),
        
      if (conversionsError && conversionsError.code !== 'PGRST116') throw conversionsError,
      
      // Get most recent event to calculate &quot;last updated&quot;
      const { data: lastEventData, error: lastEventError } = await supabase
        .from('analytics_events')
        .select('created_at')
        .order('created_at', { ascending: false })
        .limit(1)
        .single(),
        
      if (lastEventError && lastEventError.code !== 'PGRST116') throw lastEventError,
        
      return {
        totalPageViews: pageViewsData?.count || 0,
        uniqueVisitors: uniqueUserIds.size || 0,
        conversions: conversionsData?.count || 0,
        lastUpdated: lastEventData?.created_at ? new Date(lastEventData.created_at) : null}
    },
    refetchInterval: 300000, // Refetch every 5 minutes
  }),
  
  // Calculate conversion rate
  const conversionRate = stats && stats.totalPageViews > 0 
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
            <Skeleton className=&quot;h-8 w-28 bg-zion-blue-light&quot; />
          ) : stats?.lastUpdated ? (
            formatDistanceToNow(stats.lastUpdated, { addSuffix: true })
          ) : 'Never'
        }
        icon={
          <svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot;><rect width=&quot;18&quot; height=&quot;18&quot; x=&quot;3&quot; y=&quot;4&quot; rx=&quot;2&quot; ry=&quot;2&quot;/><line x1=&quot;16&quot; x2=&quot;16&quot; y1=&quot;2&quot; y2=&quot;6&quot;/><line x1=&quot;8&quot; x2=&quot;8&quot; y1=&quot;2&quot; y2=&quot;6&quot;/><line x1=&quot;3&quot; x2=&quot;21&quot; y1=&quot;10&quot; y2=&quot;10&quot;/><path d=&quot;M8 14h.01&quot;/><path d=&quot;M12 14h.01&quot;/><path d=&quot;M16 14h.01&quot;/><path d=&quot;M8 18h.01&quot;/><path d=&quot;M12 18h.01&quot;/><path d=&quot;M16 18h.01&quot;/></svg>
        }
      />
    </div>
  )
}

interface StatCardProps {
  title: string,
  value: React.ReactNode,
  icon: React.ReactNode
}

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
              {value}
            </h4>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
