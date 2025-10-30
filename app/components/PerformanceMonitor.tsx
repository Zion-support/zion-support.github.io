import React from 'react';

interface ComponentProps {
  children?: React.ReactNode;
}

export default function Component({ children }: ComponentProps) {
  return (
      <div className={`performance-monitor ${className || ''}`}>
      <h3>Performance Metrics</h3>
      {children}
      <div className="metrics">
        <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
        <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
        <div>FID: {metrics.fid?.toFixed(2)}ms</div>
        <div>CLS: {metrics.cls?.toFixed(4)}</div>
        <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
      </div>
    </div>
  );
}