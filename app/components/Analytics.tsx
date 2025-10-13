

import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

declare global {
  interface Window {,
    gtag: (...args: any[]) => void;
  }
}
interface AnalyticsProps {

  className?: string;
  children?: React.ReactNode;
}

export default function Analytics({ className = '', children, ...props }: AnalyticsProps) {
  return (
    <div className={`analytics-component ${className}`} {...props}>
      {children}
    </div>
  );
}

