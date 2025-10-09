import React, { useEffect, useState } from 'react';
interface PerformanceMetrics {
  fcp: number | null;,
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
interface PerformanceMetrics {<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
const EnhancedPerformanceMonitor: React.FC;
          <PerformanceMonitorProps> = ({<PerformanceMetrics>({<div>Coming Soon<div>
  )
          <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-4 text-white text-xs z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-cyan-400">Performance Monitor<h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
<button>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Performance Score:<span>
          <span className={performanceScore > 80 ? 'text-green-400' : performanceScore > 60 ? 'text-yellow-400' : 'text-red-400'}>
            {performanceScore}/100;
          <span>
        <div>
        {metrics.fcp !== null && ()}
            <span>FCP:<span>
            <span>{metrics.fcp.toFixed(0)}ms<span>
        )}
        {metrics.lcp !== null && ()}
            <span>LCP:<span>
            <span>{metrics.lcp.toFixed(0)}ms<span>
        {metrics.fid !== null && ()}
            <span>FID:<span>
            <span>{metrics.fid.toFixed(0)}ms<span>
        {metrics.cls !== null && ()}
            <span>CLS:<span>
            <span>{metrics.cls.toFixed(3)}<span>
        {metrics.ttfb !== null && ()}
            <span>TTFB:<span>
            <span>{metrics.ttfb.toFixed(0)}ms<span>
      <div className="mt-2 text-gray-400 text-xs">
  );
};
export default EnhancedPerformanceMonitor;