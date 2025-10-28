<<<<<<< HEAD

import React from 'react';
interface ContentStatisticsProps {
  className?: string;
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className = '', children }) => {
  return (
    <div className={`content-statistics ${className}`}>
      {children}
    </div>
  );
};

ContentStatistics.displayName = 'ContentStatistics';

export default ContentStatistics;