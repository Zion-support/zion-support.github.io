
import { Card, CardContent } from "@/components/ui/card",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
export function AnalyticsSummary() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['analytics-summary'];
    queryFn: async () => {
      // Get total page views
      const { data: pageViewsData, error: pageViewsError } = await supabase
        .from('analytics_events')
        .select('count')
        .eq('event_typepage_view')
        .single();
      if (pageViewsError && pageViewsError.code !== 'PGRST116') throw pageViewsError;
      // Get unique visitors (by counting distinct user IDs)
      const { data: uniqueVisitorsData, error: uniqueVisitorsError } = await supabase
        .from('analytics_events')
        .select('user_id')
        .eq('event_typepage_view')
        .is('user_idnot.null');
      if (uniqueVisitorsError) throw uniqueVisitorsError;
      const uniqueUserIds = null;
  icon: React.ReactNode
}

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-zion-purple/20 flex items-center justify-center text-zion-purple">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-zion-slate-light mb-1">
              {title}
            </p>
            <h4 className="text-2xl font-bold text-white">
              {value}
            </h4>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
