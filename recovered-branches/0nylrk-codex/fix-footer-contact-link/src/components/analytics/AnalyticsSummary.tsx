


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

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
=======        .eq('event_typepage_view');
        .single();
        .eq('event_typepage_view')
        .single();
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
        .single(),

      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError,
      
        .eq('event_typepage_view')
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Get unique visitors (by counting distinct user IDs)
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase
        .from('analytics_events')
        .select('user_id')
        .eq('event_typepage_view')
      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item.user_id) |[]);
  // Calculate conversion rate
  const conversionRate = stats && stats.totalPageViews > 0
    ? ((stats.conversions / stats.totalPageViews) * 100).toFixed(2)

    : '0.00',

=======  return (
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

==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Card, CardContent } from "@/components/ui/card",;
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { Skeleton } from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function AnalyticsSummary() {;
  const { data: stats, isLoading } = useQuery({;
    queryKey: ['analytics-summary'],;
    queryFn: async () => {;
      // Get total page views;
      const { data: pageViewsData, error: pageViewsError } = await supabase;
        .from('analytics_events');
        .select('count');
        .eq('event_typepage_view');
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" view_box="0 0 24 24" fill="none" stroke="current_color" stroke_width="2" stroke_linecap="round" stroke_linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0 - 4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4 - 1"/><path d="m16.8 12.3-.4 - 1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>;
        }

      // Get unique visitors (by counting distinct user IDs);
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase;
        .from('analytics_events');
        .select('user_id');
        .eq('event_typepage_view');
      if (uniqueVisitorsError) throw uniqueVisitorsError;

      const uniqueUserIds = new Set(uniqueVisitorsData?.map(item => item && item.user_id) || []);

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
==============
=======
interface StatCardProps {;
  title: string,;
  value: React && React.ReactNode,;
  icon: React && React.ReactNode;
}
function StatCard(): any ({ title, value, icon }: StatCardProps) {;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======      />;
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h4>;
          </div>;
        </div>;
      </CardContent>;
    </Card>);
}
