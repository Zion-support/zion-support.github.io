import React from 'react';

interface CriticalResourcePreloaderProps {
  className?: string;
  children?: React.ReactNode;
}

const CriticalResourcePreloader: React.FC<CriticalResourcePreloaderProps> = ({ className = '', children }) => {
  return (
    <div className={`criticalresourcepreloader ${className}`}>
      {children}
    </div>
  );
};

export default CriticalResourcePreloader;