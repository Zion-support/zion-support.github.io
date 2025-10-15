import React from 'react';

interface ContentstatisticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Contentstatistics({ className = '', children }: ContentstatisticsProps) {
  return (
    <div className={`ContentStatistics-component ${className}`}>
      {children}
    </div>
  );
}