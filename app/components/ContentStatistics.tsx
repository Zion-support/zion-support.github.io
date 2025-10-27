import React from 'react';

interface _ContentStatisticsProps {
  className?: string;
  children?: React.ReactNode;
}


const ContentStatistics: React.FC<_ContentStatisticsProps> = ({ className = '', children }) => {
  return (
    <div className={`ontentstatistics ${className}`}>
      {children}
    </div>
  );
};

ContentStatistics.displayName = 'ContentStatistics';

export default ContentStatistics;