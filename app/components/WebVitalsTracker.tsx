import React, { useEffect } from 'react';

<<<<<<< HEAD
const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    // Track web vitals
    const trackWebVitals = () => {
      // Implementation for web vitals tracking
    };
    
    trackWebVitals();
  }, []);

  return null;
};

export default WebVitalsTracker;
=======
interface WebvitalstrackerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Webvitalstracker({ className = '', children, ...props }: WebvitalstrackerProps) {
  return (
    <div className={`webvitalstracker-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/main
