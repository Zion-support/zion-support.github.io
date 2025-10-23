"use client";
import React from "react";


interface EnhancedPerformanceMonitorProps {
  children?: React.ReactNode;
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default Page;

