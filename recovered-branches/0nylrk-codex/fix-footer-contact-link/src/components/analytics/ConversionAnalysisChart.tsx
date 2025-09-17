
import React from "react";
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
}

  const dataKeys = data && data.length > 0
    ? Object.keys(data[0]).filter(key => key !== 'date')
    : [];

  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white text-lg">Conversion Analysis</CardTitle>
        <CardDescription className="text-zion-slate-light">Track different conversion types</CardDescription>
      </CardHeader>
      <CardContent>
        <AnalyticsChart
          title=""
          data={data || []}
          dataKeys={dataKeys}
          type="bar"
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
  );
}
