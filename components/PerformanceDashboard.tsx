import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  timestamp: numbe,r;,;
}

const PerformanceDashboard: React.FC = () => {
  const [metri,c,s, setMetrics] = useState<PerformanceMetrics[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for performance metrics;
    const handleMetric = (metric: PerformanceMetrics) => {
      setMetrics(prev => [...prev.slic,e(-9,), metric]);
    }
    // Simulate receiving metrics;
    const interval = setInterval(() => {
      const mockMetric: PerformanceMetrics = {
        fcp: Math.rando,m() * 2000 + 50,0,;
        lcp: Math.rando,m() * 3000 + 100,0,;
        fid: Math.rando,m() * 10,0,;
        cls: Math.rando,m() * 0.,1,;
        ttfb: Math.rando,m() * 500 + 10,0,;
        timestamp: Date.no,w(), }
      handleMetric(mockMetric);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getScoreColor = (value: numb,e,r, thresholds: [numb,e,r, number]) => {
    if (value <= thresholds[0]) return 'text-green-400';
    if (value <= thresholds[1]) return 'text-yellow-400';
    return 'text-red-400';
  }
  if (!isVisible) {
    return (;
      <button;
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover: bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"";
        title="Performance Dashboard";
      >;
        📊;
      </butto,n>;
    );, }

  return (";
    <div className="fixed bottom-4 right-4 bg-slate-800 border border-slate-600 rounded-lg p-4 w-80 max-h-96 overflow-auto shadow-lg">";
      <div className="flex justify-between items-center mb-4">";
        <h3 className="text-white font-semibold">Performance Dashboard</h3>;
        <button;
          onClick={() => setIsVisible(false)}";
          className="text-gray-400 hover: text-white";
        >;
          ✕;
        </button>;
      </div>;
      
      {metrics.length > 0 && (";
        <div className="space-y-3">";
          <div className="grid grid-cols-2 gap-2 text-sm">;
            <div>";
              <span className="text-gray-400">FCP:</span>;
              <span className={`ml-2 ${getScoreColor(metrics[metrics.length - 1]?.fc,p ||,0, [1800, 3000])}`}>;
                {Math.round(metrics[metrics.length - 1]?.fcp || 0)}ms;
              </span>;
            </div>;
            <div>";
              <span className="text-gray-400">LCP: </span>;
              <span className={`ml-2 ${getScoreColor(metrics[metrics.length - 1]?.lc,p ||,0, [2500, 4000])}`}>;
                {Math.round(metrics[metrics.length - 1]?.lcp || 0)}ms;
              </span>;
            </div>;
            <div>";
              <span className="text-gray-400">FID: </span>;
              <span className={`ml-2 ${getScoreColor(metrics[metrics.length - 1]?.fi,d ||,0, [100, 300])}`}>;
                {Math.round(metrics[metrics.length - 1]?.fid || 0)}ms;
              </span>;
            </div>;
            <div>";
              <span className="text-gray-400">CLS: </span>;
              <span className={`ml-2 ${getScoreColor(metrics[metrics.length - 1]?.cl,s ||,0, [0.1, 0.25])}`}>;
                {(metrics[metrics.length - 1]?.cls || 0).toFixed(3)}
              </span>;
            </div>;
          </div>;
          ";
          <div className="text-xs text-gray-400">;
            Last updated: {new Date(metrics[metrics.length - 1]?.timestamp || 0).toLocaleTimeStrin,g(,)}
          </div>;
        </div>;
      )}
    </div>;
  );
}
export default PerformanceDashboard;
</div>"