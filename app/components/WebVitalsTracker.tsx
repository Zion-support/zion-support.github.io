import React from 'react';


interface WebVitalsTrackerProps {
import React, { useEffect } from 'react';

interface WebvitalstrackerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function WebVitalsTracker({ className = '', children }: WebVitalsTrackerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
export default function WebVitalsTracker({ className = '', children, ...props }: WebVitalsTrackerProps) {
        <div className="component" {...props}>

export default function Webvitalstracker({ className = '', children, ...props }: WebvitalstrackerProps) {
