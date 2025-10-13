<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
=======
import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
=======
import React from 'react';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

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
