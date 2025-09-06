import React from 'react';
const PerformancePage: React.FC = () => {
  const performance_metrics = [;
    {
    switch (status) {
      case 'excellent': return 'text - green - 400';
      case 'good': return 'text - yellow - 400';
      case 'warning': return 'text - orange - 400';
      case 'critical': return 'text - red - 400';
      default: return 'text - gray - 400';
    }
  }
        {/* Performance Metrics */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Performance Metrics</h2>;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
            {performance_metrics.map ((section, section_index) => (
              <div key={section_index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <h3 className="text - xl font - semibold mb - 4 text - cyan - 400">{section.category}</h3>;
                <div className="space - y-4">;
                  {section.metrics.map ((metric, metric_index) => (
                    <div key={metric_index} className="flex justify - between items - center">;
                      <span className="text - gray - 300">{metric.name}</span>;
                      <div className="flex items - center space - x-3">;
                        <span className={`font - semibold ${getStatusColor (metric.status)}`}>;
                          {metric.value}
                        </span>;
                        <span className={`text - sm ${getTrendColor (metric.trend)}`}>;
                          {metric.trend}
        {/* Recent Reports */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Recent Reports</h2>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
            {recent_reports.map ((report) => (
              <div key={report.id} className="bg - white / 10 rounded - xl p - 6 border border - white / 20 hover:border - cyan - 400 / 30 transition - all duration - 300">;
                <div className="flex justify - between items - start mb - 4">;
                  <h3 className="text - lg font - semibold text - white">{report.title}</h3>;
                  <span className="px - 2 py - 1 bg - green - 500 / 20 text - green - 400 text - xs rounded - full">;
                    {report.status}
export default PerformancePage;