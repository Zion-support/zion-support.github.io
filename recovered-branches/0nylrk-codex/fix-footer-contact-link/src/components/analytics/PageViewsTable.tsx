

import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d';
const timeRangeToInterval = {
  '1d': { days: 1, interval: 'hour' }
  '7d': { days: 7, interval: 'day' }
  '30d': { days: 30, interval: 'day' }
  '90d': { days: 90, interval: 'week' }
  '365d': { days: 365, interval: 'month' }

                    {formatPathName(page.path)}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-medium">{page.count}</span>
                    <div className="w-32 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-zion-blue-light rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-zion-slate">{percentage}%</span>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-center py-8 text-zion-slate">
              No page view data available for this time period
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { useState } from "react",;
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d',;                          style={{ width: `${percentage}%` }}
                        />;
                      </div>;
                      <span className="text-xs text-zion-slate">{percentage}%</span>;
                    </div>;
                  </div>;
                </div>;
              ),;
            });
          ) :(;
            <div className="text-center py-8 text-zion-slate">;
              No page view data available for this time period;
            </div>;

          )}
}
;}
;
export /**;
 * PageViewsTable - Function description;
 */
function PageViewsTable() { return null; }
  const { data: page_views, is_loading } = use_query ({'
    query_key: ['page - views - data', time_range];

      const { days } = timeRangeToInterval[time_range];
;
                    {formatPathName(page.path)}
                  </div>
                  <div className="flex items-center gap-3">"
</div>"
                    <span className="text-white font-medium">{page.count}</span>""
                    <div className="w-32 flex items-center gap-2">"
                      <div className="flex-1 h-2 bg-zion-blue-light rounded-full overflow-hidden">"
                        <div;"
                          className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan""
                          style={{ width: `${percentage}%` }}
          )}
                      </div>;"
                      <span className="text-xs text-zion-slate">{percentage}%</span>;"
                    </div>;
            <div className="text-center py-8 text-zion-slate">;"
    ;"
  const [time_range, setTimeRange] = useState < TimeRange>('7d');
  const { data: page_views, is_loading } = use_query ({
    query_key: ['page - views - data', time_range];')
    query_fn: async () => {
      const { days } = timeRangeToInterval[time_range];
pr-12325
      // Get top pages by views;
      const { data, error } = await supabase;'
        .from ('analytics_events');'
        .select ('path, count');'
        .eq ('event_typepage_view');'
        .gte ('created_at', new Date (Date.now () - days * 24 * 60 * 60 * 1000).toISOString ());'
        .order ('count', { ascending: false });
        .limit (10);
;

}
      return data || [];
    });
;
  // Format path names for better display;
  const formatPathName = (path: string) =>: any {}
    // Check condition'
if (return 'Home Page', ) {}
  $2;
}'
    return path.char_at (1).toUpperCase () + path.slice (2).replace (/-/g, ' ');

  // TODO: Implement

}
    // Check condition;'
if (return 'Home Page', ) {'
  $2;
}'
    return path.char_at (1).toUpperCase () + path.slice (2).replace (/-/g, ' ');'
  }
;
  // Calculate total views to determine percentages;
  const total_views = page_views?.reduce ((sum, page) => sum + page.count, 0) || 0;
;
  return (
    <Card className="bg - zion - blue - dark border - zion - blue-light">;
      <CardHeader className="pb-2">;
        <div className="flex flex - col sm:flex - row justify - between sm:items-center">;
          <div>;
            <CardTitle className="text - white text-lg">Top Pages</CardTitle>;
            <CardDescription className="text - zion - slate-light">Most viewed pages on your platform</CardDescription>;
          </div>;
          <Select value={time_range} onValueChange={(value: TimeRange) => setTimeRange (value)}>;
            <SelectTrigger className="w - 28 mt - 2 sm:mt - 0 bg - zion - blue border - zion - blue - light text - zion - slate-light">;
              <SelectValue placeholder="Time Range" />;
            </SelectTrigger>;
            <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate-light">;
              <SelectItem value="1d">Last 24h</SelectItem>;
              <SelectItem value="7d">Last 7 days</SelectItem>;
              <SelectItem value="30d">Last 30 days</SelectItem>;
              <SelectItem value="90d">Last 3 months</SelectItem>;
              <SelectItem value="365d">Last year</SelectItem>;

  return ('
    <Card className="bg - zion - blue - dark border - zion - blue - light">;"
</Card>"
      <CardHeader className="pb - 2">;"
</CardHeader>"
        <div className="flex flex - col sm:flex - row justify - between sm:items - center">;"
</div>
          <div>;
</div>"
            <CardTitle className="text - white text - lg">Top Pages</CardTitle>;""
            <CardDescription className="text - zion - slate - light">Most viewed pages on your platform</CardDescription>;"
          </div>;)
          <Select value={time_range} onValueChange={(value: TimeRange) => setTimeRange (value)}>;
</Select>"
            <SelectTrigger className="w - 28 mt - 2 sm:mt - 0 bg - zion - blue border - zion - blue - light text - zion - slate - light">;"
</SelectTrigger>"
              <SelectValue placeholder="Time Range" />;"
</SelectValue>
            </SelectTrigger>;"
            <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate - light">;"
</SelectContent>"
              <SelectItem value="1d">Last 24h</SelectItem>;""
              <SelectItem value="7d">Last 7 days</SelectItem>;""
              <SelectItem value="30d">Last 30 days</SelectItem>;""
              <SelectItem value="90d">Last 3 months</SelectItem>;""
              <SelectItem value="365d">Last year</SelectItem>;"

            </SelectContent>;
          </Select>;
        </div>;
      </CardHeader>;

      <CardContent>;
        <div className="space-y-4">;
          {is_loading ? (
            Array (5).fill (0).map ((_, i) => (
              <div key={i} className="flex items - center justify-between">;
                <Skeleton className="h - 4 w - 40 bg - zion - blue-light" />;
                <div className="flex items - center gap-2">;
                  <Skeleton className="h - 4 w - 10 bg - zion - blue-light" />;
                  <Skeleton className="h - 6 w - 32 bg - zion - blue-light" />;
                </div>;
              </div>))) : page_views && page_views.length > 0 ? (
            page_views.map ((page, index) => {'
              const percentage = total_views > 0 ? (page.count / total_views * 100).to_fixed (1) : '0';
;
              return (
                <div key={index} className="flex items - center justify-between">;
                  <div className="text - zion - slate - light font-medium">;
                    {formatPathName (page.path)}
                  </div>;
                  <div className="flex items - center gap-3">;
                    <span className="text - white font-medium">{page.count}</span>;
                    <div className="w - 32 flex items - center gap-2">;
                      <div className="flex - 1 h - 2 bg - zion - blue - light rounded - full overflow-hidden">;
                        <div;
                          className="h - full bg - gradient - to - r from - zion - purple to - zion-cyan";
                          style={{ width: `${percentage}%` }}
                        />;
                      </div>;
                      <span className="text - xs text - zion-slate">{percentage}%</span>;
                    </div>;
                  </div>;
                </div>);
            })) : (
            <div className="text - center py - 8 text - zion-slate">;
              No page view data available for this time period;
            </div>)}
        </div>;
      </CardContent>;
<<<<<<< HEAD

    </Card>);
  ),; type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d';
  data, error 
}= await supabase .from ('analytics events') .select ('path, count') .eq ('event typepage view') .gte ('created at', new Date (Date.now () - days * 24 * 60 * 60 * 1000) .toISOString () ) if (error) throw error;
return data || [] 
}
}
;
