import React from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  children: React.ReactNode;
}

export default function Analytics({ children }: AnalyticsProps) {
  return <>{children}</>;
}