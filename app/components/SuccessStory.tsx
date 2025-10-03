// import React from 'react';

interface SuccessStoryProps {
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
  industry: string;
}

export default function SuccessStory({ 
  title, 
  description, 
  metrics, 
  industry 
}: SuccessStoryProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
          <span className="text-2xl">🏆</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{industry}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-600">{description}</p>
        
        <div className="grid grid-cols-1 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}