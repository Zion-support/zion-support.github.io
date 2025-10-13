import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CoreWebVitals({ className = '', children }: CoreWebVitalsProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
const CoreWebVitals: React.FC = () =>

const CoreWebVitals: React.FC = () => {

  return null;
;
export default CoreWebVitals;
