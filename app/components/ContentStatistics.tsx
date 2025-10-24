'use client';
import React from 'react';
interface ContentStatisticsProps {
  className?: string;
  children?: React.ReactNode;
}
const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default ContentStatistics;
