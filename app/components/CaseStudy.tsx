import React from 'react';

interface CaseStudyProps {
  company: string;
  industry: string;
  result: string;
  description: string;
  metrics: string[];
}

export default function CaseStudy({
  company,
  industry,
  result,
  description,
  metrics
}: CaseStudyProps) {

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{company}</h3>
        <p className="text-sm text-gray-500 mb-2">{industry}</p>
        <p className="text-lg font-semibold text-blue-600">{result}</p>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900">Key Metrics:</h4>
        <ul className="list-disc list-inside space-y-1">
          {metrics.map((metric, index) => (
            <li key={index} className="text-gray-600 text-sm">{metric}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}