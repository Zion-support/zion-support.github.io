'use client';'
import React from "react";

interface AnalyticsProps {
  children?: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  return <>{children}</>;
};

export default Analytics;