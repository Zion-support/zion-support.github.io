import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
<<<<<<< HEAD

=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
<<<<<<< HEAD
=======
import React from 'react';

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
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