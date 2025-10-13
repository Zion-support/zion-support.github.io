import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CoreWebVitals({ className = '', children }: CoreWebVitalsProps) {
  return (
    <div className={`corewebvitals ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">CoreWebVitals</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}