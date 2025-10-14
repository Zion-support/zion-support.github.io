import React from 'react';

interface CriticalResourcePreloaderProps {
  className?: string;
  children?: React.ReactNode;
}

const CriticalResourcePreloader: React.FC<CriticalResourcePreloaderProps> = ({ className = '', children }) => {
  return (
    <div className={`criticalresourcepreloader-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">CriticalResourcePreloader</h3>
          <p className="text-gray-600">This is the CriticalResourcePreloader component.</p>
        </div>
      )}
    </div>
  );
};

export default CriticalResourcePreloader;