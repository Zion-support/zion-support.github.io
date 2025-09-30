import React from 'react';

interface SuccessStoryProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
}

export default function SuccessStory({
  company,
  industry,
  challenge,
  solution,
  result,
  metric
}: SuccessStoryProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{company}</h3>
        <p className="text-blue-600 font-semibold">{industry}</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
          <p className="text-gray-600 text-sm">{challenge}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
          <p className="text-gray-600 text-sm">{solution}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Result:</h4>
          <p className="text-gray-600 text-sm">{result}</p>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="text-2xl font-bold text-green-600">{metric}</div>
        </div>
      </div>
    </div>
  );
}