import React from 'react';

interface AdSchedulerProps {
  className?: string;
  children?: React.ReactNode;
}

const AdScheduler: React.FC<AdSchedulerProps> = ({ className = '', children }) => {
  return (
    <div className={`adscheduler ${className}`}>
      {children}
    </div>
  );
};

export default AdScheduler;