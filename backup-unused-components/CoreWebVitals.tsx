<<<<<<< HEAD
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
=======
import React, { useEffect } from 'react';
<<<<<<< HEAD
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
const CoreWebVitals: React.FC = () => 
=======

const CoreWebVitals: React.FC = () => {

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  return null;
;
export default CoreWebVitals;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
