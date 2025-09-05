
<<<<<<< HEAD
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Skeleton } from "@/components/ui/skeleton",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d',
=======
import { useQuery } from &quot;@tanstack/react-query&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { useState } from &quot;react&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
const timeRangeToInterval = {
  '1d': { days: 1, interval: 'hour' },
  '7d': { days: 7, interval: 'day' },
  '30d': { days: 30, interval: 'day' },
  '90d': { days: 90, interval: 'week' },
  '365d': { days: 365, interval: 'month' }
},

export function PageViewsTable() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d'),
  
  const { data: pageViews, isLoading } = useQuery({
    queryKey: ['page-views-data', timeRange],
    queryFn: async () => {
      const { days } = timeRangeToInterval[timeRange],
=======
const _timeRangeToInterval = {_'1d': { days: 1, _interval: 'hour'},
  '7d': {_days: 7, _interval: 'day'},
  '30d': {_days: 30, _interval: 'day'},
  '90d': {_days: 90, _interval: 'week'},
  '365d': {_days: 365, _interval: 'month'}
};

export function PageViewsTable() {_const [timeRange, _setTimeRange] = useState<TimeRange>('7d');
  
  const { data: pageViews, _isLoading} = useQuery(_{_queryKey: ['page-views-data', _timeRange], _queryFn: async () => {
      const { days} = timeRangeToInterval[timeRange];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Get top pages by views
      const {_data, _error} = await supabase
        .from('analytics_events')
        .select('path, count')
        .eq('event_typepage_view')
        .gte('created_at', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString())
<<<<<<< HEAD
        .order('count', { ascending: false })
        .limit(10),
=======
        .order('count', {_ascending: false})
        .limit(10);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      if (error) throw error,
      
      return data || []
    }}),
  
  // Format path names for better display
<<<<<<< HEAD
  const formatPathName = (path: string) => {
    if (path === '/') return 'Home Page',
    return path.charAt(1).toUpperCase() + path.slice(2).replace(/-/g, ' ')
  },
  
  // Calculate total views to determine percentages
  const totalViews = pageViews?.reduce((sum, page) => sum + page.count, 0) || 0,
  
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
      <CardHeader className=&quot;pb-2&quot;>
        <div className=&quot;flex flex-col sm:flex-row justify-between sm:items-center&quot;>
=======
  const _formatPathName = (_path: string) => {_if (path === '/') return 'Home Page';
    return path.charAt(1).toUpperCase() + path.slice(2).replace(/-/g, _' ');};
  
  // Calculate total views to determine percentages
  const _totalViews = pageViews?.reduce(_(sum, _page) => sum + page.count, 0) || 0;
  
  return (_<Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <div>
            <CardTitle className=&quot;text-white text-lg&quot;>Top Pages</CardTitle>
            <CardDescription className=&quot;text-zion-slate-light&quot;>Most viewed pages on your platform</CardDescription>
          </div>
<<<<<<< HEAD
          <Select value={timeRange} onValueChange={(value: TimeRange) => setTimeRange(value)}>
            <SelectTrigger className=&quot;w-28 mt-2 sm:mt-0 bg-zion-blue border-zion-blue-light text-zion-slate-light&quot;>
              <SelectValue placeholder=&quot;Time Range&quot; />
=======
          <Select value={_timeRange} onValueChange={_(value: TimeRange) => setTimeRange(value)}>
            <SelectTrigger className="w-28 mt-2 sm:mt-0 bg-zion-blue border-zion-blue-light text-zion-slate-light">
              <SelectValue placeholder="Time Range" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </SelectTrigger>
            <SelectContent className=&quot;bg-zion-blue-dark border-zion-blue-light text-zion-slate-light&quot;>
              <SelectItem value=&quot;1d&quot;>Last 24h</SelectItem>
              <SelectItem value=&quot;7d&quot;>Last 7 days</SelectItem>
              <SelectItem value=&quot;30d&quot;>Last 30 days</SelectItem>
              <SelectItem value=&quot;90d&quot;>Last 3 months</SelectItem>
              <SelectItem value=&quot;365d&quot;>Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <div className=&quot;space-y-4&quot;>
          {isLoading ? (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className=&quot;flex items-center justify-between&quot;>
                <Skeleton className=&quot;h-4 w-40 bg-zion-blue-light&quot; />
                <div className=&quot;flex items-center gap-2&quot;>
                  <Skeleton className=&quot;h-4 w-10 bg-zion-blue-light&quot; />
                  <Skeleton className=&quot;h-6 w-32 bg-zion-blue-light&quot; />
                </div>
              </div>
            ))
          ) : pageViews && pageViews.length > 0 ? (
            pageViews.map((page, index) => {
              const percentage = totalViews > 0 ? (page.count / totalViews * 100).toFixed(1) : '0',
              
              return (
                <div key={index} className=&quot;flex items-center justify-between&quot;>
                  <div className=&quot;text-zion-slate-light font-medium&quot;>
                    {formatPathName(page.path)}
                  </div>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <span className=&quot;text-white font-medium&quot;>{page.count}</span>
                    <div className=&quot;w-32 flex items-center gap-2&quot;>
                      <div className=&quot;flex-1 h-2 bg-zion-blue-light rounded-full overflow-hidden&quot;>
                        <div 
                          className=&quot;h-full bg-gradient-to-r from-zion-purple to-zion-cyan&quot; 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className=&quot;text-xs text-zion-slate&quot;>{percentage}%</span>
=======
        <div className="space-y-4">
          {_isLoading ? (
            Array(5).fill(0).map(_(_, _i) => (
              <div key={i} className="flex items-center justify-between">
                <Skeleton className="h-4 w-40 bg-zion-blue-light" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-10 bg-zion-blue-light" />
                  <Skeleton className="h-6 w-32 bg-zion-blue-light" />
                </div>
              </div>
            ))
          ) : pageViews && pageViews.length > 0 ? (_pageViews.map((page, _index) => {_const _percentage = totalViews > 0 ? (page.count / totalViews * 100).toFixed(1) : '0';
              
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-zion-slate-light font-medium">
                    {_formatPathName(page.path)}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-medium">{_page.count}</span>
                    <div className="w-32 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-zion-blue-light rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
                          style={_{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-zion-slate">{_percentage}%</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className=&quot;text-center py-8 text-zion-slate&quot;>
              No page view data available for this time period
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
