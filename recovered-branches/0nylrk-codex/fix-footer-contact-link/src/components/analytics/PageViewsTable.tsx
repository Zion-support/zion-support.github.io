



import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d';
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Skeleton } from "@/components/ui/skeleton",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d',

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
type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d',;
const timeRangeToInterval = {;
  '1d': { days: 1, interval: 'hour' },;
  '7d': { days: 7, interval: 'day' },;
  '30d': { days: 30, interval: 'day' },;
  '90d': { days: 90, interval: 'week' },;
  '365d': { days: 365, interval: 'month' }
                          style={{ width: `${percentage}%` }}
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
;
