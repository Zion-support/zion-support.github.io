'use client';

import React from 'react';

interface ContentStatisticsProps {
  children?: React.ReactNode;
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ContentStatistics;