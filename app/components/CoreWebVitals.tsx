import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
  children?: React.ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ className = '', children }) => {
  return (
    <div className={`corewebvitals-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">CoreWebVitals</h3>
          <p className="text-gray-600">This is the CoreWebVitals component.</p>
        </div>
      )}
    </div>
  );
};

export default CoreWebVitals;