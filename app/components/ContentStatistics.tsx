import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

interface ContentStatisticsProps {
  className?: string;
  stats?: StatItem[];
}

export default function ContentStatistics({ 
  className = '',
  stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "5+", label: "Years Experience" }
  ]
}: ContentStatisticsProps) {
  return (
    <div className={`bg-gray-800 rounded-xl p-8 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
            <div className="text-gray-300 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
