import React from 'react';

interface ContentStatisticsProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className = '', children }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">ContentStatistics</h2>
      <p className="text-gray-600 mb-4">This component is being rebuilt.</p>
      {children}
    </div>
  );
};

export default ContentStatistics;
