import React from "react";
interface PerformanceMonitorProps {
  onMetricsUpdate: (metrics: {
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
  }) => void;
}
export default function PerformanceMonitor({
  onMetricsUpdate,
}: PerformanceMonitorProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = { onMetricsUpdate }; // Parameter will be used in future implementation
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Performance Monitor</h2>
        <p className="text-gray-300 text-lg">This component is under construction.</p>
      </div>
    </div>
  )
}
;
