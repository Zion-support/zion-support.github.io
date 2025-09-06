import React from "react";
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
interface ConversionAnalysisProps {;
  data: Array<Record<string, any>>;
  timeRange: string;
  onTimeRangeChange: (range: string) => void
}

import React from './react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { AnalyticsChart  } from '@/components / analytics / AnalyticsChart';

interface ConversionAnalysisProps {
  data: Array < Record < string, any>>;
  time_range: string;
  onTimeRangeChange: (range: string) => void;
}



  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-white text-lg">;
          Conversion Analysis;
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
          Track different conversion types;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <AnalyticsChart
          title=""
          data={data |[]}
          dataKeys={dataKeys}
          type="bar"
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />;
      </CardContent>;
    </Card>;
  );
        <AnalyticsChart;
          title="";
          data={data || []}
          data_keys={data_keys}
          type="bar";
          time_range={time_range}
          onTimeRangeChange={onTimeRangeChange}
        />;
      </CardContent>;
    </Card>);
}