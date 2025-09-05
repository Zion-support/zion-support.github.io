

type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d';

const _timeRangeToInterval = {_'1d': { days: 1, _interval: 'hour'},
  '7d': {_days: 7, _interval: 'day'},
  '30d': {_days: 30, _interval: 'day'},
  '90d': {_days: 90, _interval: 'week'},
  '365d': {_days: 365, _interval: 'month'}
};

export function PageViewsTable() {_const [timeRange, _setTimeRange] = useState<TimeRange>('7d');
  
  const { data: pageViews, _isLoading} = useQuery(_{_queryKey: ['page-views-data', _timeRange], _queryFn: async () => {
      const { days} = timeRangeToInterval[timeRange];
      
      // Get top pages by views
      const {_data, _error} = await supabase
        .from('analytics_events')
        .select('path, count')
        .eq('event_type', 'page_view')
        .gte('created_at', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString())
        .order('count', {_ascending: false})
        .limit(10);
        
      if (error) throw error;
      
      return data || [];
    }});
  
  // Format path names for better display
  const _formatPathName = (_path: string) => {_if (path === '/') return 'Home Page';
    return path.charAt(1).toUpperCase() + path.slice(2).replace(/-/g, _' ');};
  
  // Calculate total views to determine percentages
  const _totalViews = pageViews?.reduce(_(sum, _page) => sum + page.count, 0) || 0;
  
  return (_<Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <div>
            <CardTitle className="text-white text-lg">Top Pages</CardTitle>
            <CardDescription className="text-zion-slate-light">Most viewed pages on your platform</CardDescription>
          </div>
          <Select value={_timeRange} onValueChange={_(value: TimeRange) => setTimeRange(value)}>
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
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-zion-slate">
              No page view data available for this time period
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
