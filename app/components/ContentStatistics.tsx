import React from 'react';

interface ContentStatisticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContentStatistics({ className = '', children }: ContentStatisticsProps) {
  return (
    <div className={`contentstatistics ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">ContentStatistics</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}