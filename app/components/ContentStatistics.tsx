import React from 'react';

interface ContentStatisticsProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className = '', children }) => {
  return (
    <div className={`contentstatistics ${className}`}>
      {children}
    </div>
  );
};

export default ContentStatistics;