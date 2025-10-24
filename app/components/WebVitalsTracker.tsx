'use client'
import React from 'react';

interface WebVitalsTrackerProps {
  className?: string;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Web Vitals Tracker</h2>
      <p className="text-gray-600">This is a placeholder component for Web Vitals Tracker.</p>
    </div>
  );
};

export default WebVitalsTracker;
