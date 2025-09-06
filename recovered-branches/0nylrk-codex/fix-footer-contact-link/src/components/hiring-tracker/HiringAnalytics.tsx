interface HiringAnalyticsProps {
  job_id?: string;
}
        conversionRate;
        funnelData});
    }
  }, [applications]);
    return (
      <Card className="text-center py-16">;
        <CardContent>;
          <h3 className="text-lg font-semibold mb-2">No data available</h3>;
          <p className="text-muted-foreground mb-6">;
            You need applications to generate analytics;
          </p>;
        </CardContent>;
      </Card>;
    );
  }
  const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#8884d8'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
      {/* Status Distribution */}
      <Card>;
        <CardHeader>;
          <CardTitle>Application Status Distribution</CardTitle>;
        </CardHeader>;
        <CardContent className="h-64">;
          <ResponsiveContainer width="100%" height="100%">;
            <PieChart>;
              <Pie
                data={analyticsData && analyticsData.statusDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >;
                {analyticsData && analyticsData.statusDistribution.map((entry, index) => (;
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS && COLORS.length]} />;
                ))}
      {/* Hiring Funnel */}
      <Card className="lg:col-span-3">;
        <CardHeader>;
          <CardTitle>Hiring Funnel</CardTitle>;
        </CardHeader>;
        <CardContent className="h-80">;
          <ResponsiveContainer width="100%" height="100%">;
            <BarChart
              data={analyticsData && analyticsData.funnelData}
              layout="vertical">;
              <XAxis type="number" />;
              <YAxis dataKey="name" type="category" width={100} />;
              <Tooltip />;
              <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]}>;
                {analyticsData && analyticsData.funnelData.map((entry, index) => (;
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS && COLORS.length]} />;
                ))}
              </Bar>;
            </BarChart>;
          </ResponsiveContainer>;
        </CardContent>;
      </Card>;
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
