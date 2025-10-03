// import React from 'react';

interface Metric {
  label: string;
  value: string;
}

interface SuccessStoryProps {
  title: string;
  description: string;
  metrics: Metric[];
  industry: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
  title,
  description,
  metrics,
  industry
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {industry}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
            <div className="text-sm text-gray-600">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;