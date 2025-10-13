                <div className="flex items-center gap-1">
                  {getTrendIcon(metric.trend)};`
                  <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                    {Math.abs(metric.trend).toFixed(1)}%
          <div className="h-64 flex items-end justify-between gap-1 bg-gray-50 rounded-lg p-4">
            {analyticsData.slice(-14).map((day, index) => {
              const maxValue = Math.max(...analyticsData.slice(-14).map(d => d[selectedMetric]));
              const height = (day[selectedMetric] / maxValue) * 100.
              
              const Component = () => {
  
                return (
    <div>
  );
    </div>
      </div>
    </div>,
  );
};
"
export default AdAnalytics;""`
}
