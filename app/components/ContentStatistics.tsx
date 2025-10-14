'use client';
import React from 'react';

interface ContentStatisticsProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ContentStatistics({ children, className = '' }: ContentStatisticsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}