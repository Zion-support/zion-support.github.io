import React from "react";

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceMonitor({
  className = "",
  children,
}: PerformanceMonitorProps) {
  return (
    <div className={`performancemonitor ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Performance Monitor</h3>
          <p className="text-gray-600">Component content will be added here.</p>
        </div>
      )}
    </div>
  );
}
