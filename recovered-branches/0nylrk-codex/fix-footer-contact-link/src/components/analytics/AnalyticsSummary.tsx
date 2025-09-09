
import { Card, CardContent } from "@/components/ui/card",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",      // Get unique visitors (by counting distinct user IDs)
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase
        .from('analytics_events')
        .select('user_id')
        .eq('event_typepage_view')      // Get conversion count
      const { data: conversionsData, error: conversionsError } = await supabase
        .from('analytics_events')
        .select('count')
        .eq('event_typeconversion')      return {
    },
    refetchInterval: 300000, // Refetch every 5 minutes;
  }),
  
    : '0.00',
}
interface StatCardProps {
  title: string
  value: React.ReactNode        value={isLoading ? <Skeleton className="h-8 w-20 bg-zion-blue-light" /> : `${conversionRate}%`}
        icon={;
          <svg xmlns="http://www && www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2-2"/><path d="M4 14a6 6 0 0 1 6-6"/><path d="M5 18a8 8 0 0 1 8-8"/><path d="M6 16a6 6 0 0 1 6-6"/><path d="m10 16 2-2v6"/><path d="m3 14 2-2"/><rect x="14" y="2" width="8" height="8" rx="2"/></svg>;
        }

      />;
      <StatCard
        title="Last Updated" 
        value={
          isLoading ? (        }
      />;
    </div>;
  );

}
;
interface StatCardProps {;
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
}}
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardContent className="p-6">;
        <div className="flex items-center gap-4">;

          <div className="h-12 w-12 rounded-lg bg-zion-purple/20 flex items-center justify-center text-zion-purple">;
            {icon}
          </div>;
          <div>;"
            <p className="text-sm font-medium text-zion-slate-light mb-1">;
              {title}
            </p>;"
            <h4 className="text-2xl font-bold text-white">;
              {value}
      />;
      <StatCard;
        title="Conversion Rate";
        value={is_loading ? <Skeleton className="h - 8 w - 20 bg - zion - blue-light" /> : `${conversion_rate}%`}
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="current_color" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 20 2 - 2"/><path d="M4 14a6 6 0 0 1 6 - 6"/><path d="M5 18a8 8 0 0 1 8 - 8"/><path d="M6 16a6 6 0 0 1 6 - 6"/><path d="m10 16 2 - 2v6"/><path d="m3 14 2 - 2"/><rect coordinate_x="14" coordinate_y="2" width="8" height="8" rx="2"/></svg>;
        }
      />;
      <StatCard;"
        title="Last Updated";
        value={
          is_loading ? (
            <Skeleton className="h - 8 w - 28 bg - zion - blue-light" />) : stats?.last_updated ? (
            formatDistanceToNow (stats.last_updated, { add_suffix: true })) : 'Never';
        }
        icon={
          <svg xmlns="http://www.w3.org / 2000 / svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="current_color" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" coordinate_x="3" coordinate_y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
        }
      />;
    </div>);
}
interface StatCardProps {}
  title: string,
  value: React.ReactNode,
  icon: React.ReactNode;

}
/**
 * StatCard - Function description;
 */
function StatCard() {
  return (
    <Card className="bg - zion - blue - dark border - zion - blue-light">;
      <CardContent className="p-6">;
        <div className="flex items - center gap-4">;
          <div className="h - 12 w - 12 rounded - lg bg - zion - purple / 20 flex items - center justify - center text - zion-purple">;
            {icon}
          </div>;
          <div>;
            <p className="text - sm font - medium text - zion - slate - light mb-1">;
              {title}
            </p>;
            <h4 className="text - 2xl font - bold text-white">;
              {value}
