import React from 'react';

interface StatItem {
  label: string;
  value: string;
  description?: string;
}

interface ContentStatisticsProps {
  stats: StatItem[];
  title?: string;
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  stats,
  title = "Content Performance Statistics",
  className = ""
}) => {
  return (
    <div className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;