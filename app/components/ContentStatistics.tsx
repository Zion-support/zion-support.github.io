import React from 'react';

interface ContentStatisticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContentStatistics({ className, children }: ContentStatisticsProps) {
  return (
    <div className={`contentstatistics-component ${className || ''}`}>
      {children}
    </div>
  );
}
