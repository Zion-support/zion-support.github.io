
      // Get top pages by views;
      const { data, error } = await supabase;
        .from('analytics_events');
        .select('path, count');
        .eq('event_typepage_view');

    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader className="pb-2">;
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">;
          <div>;
            <CardTitle className="text-white text-lg">Top Pages</CardTitle>;
            <CardDescription className="text-zion-slate-light">Most viewed pages on your platform</CardDescription>;
          </div>;

            <SelectTrigger className="w-28 mt-2 sm:mt-0 bg-zion-blue border-zion-blue-light text-zion-slate-light">;
              <SelectValue placeholder="Time Range" />;
            </SelectTrigger>;
            <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;
              <SelectItem value="1d">Last 24h</SelectItem>;
              <SelectItem value="7d">Last 7 days</SelectItem>;
              <SelectItem value="30d">Last 30 days</SelectItem>;
              <SelectItem value="90d">Last 3 months</SelectItem>;
              <SelectItem value="365d">Last year</SelectItem>;
            </SelectContent>;
          </Select>;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          {isLoading ? (;
            Array(5).fill(0).map((_, i) => (;
              <div key={i} className="flex items-center justify-between">;
                <Skeleton className="h-4 w-40 bg-zion-blue-light" />;
                <div className="flex items-center gap-2">;
                  <Skeleton className="h-4 w-10 bg-zion-blue-light" />;
                  <Skeleton className="h-6 w-32 bg-zion-blue-light" />;
                </div>;
              </div>;
            ));

                        />;
                      </div>;
                      <span className="text-xs text-zion-slate">{percentage}%</span>;
                    </div>;
                  </div>;
                </div>;

            <div className="text-center py-8 text-zion-slate">;
              No page view data available for this time period;
            </div>;
          )}
        </div>;
      </CardContent>;
    </Card>;

}