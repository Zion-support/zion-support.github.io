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
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{company}</h3>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
          {industry}
        </span>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
          <p className="text-gray-600 text-sm">{challenge}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
          <p className="text-gray-600 text-sm">{solution}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Result:</h4>
          <p className="text-gray-600 text-sm">{result}</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="text-green-800 font-bold text-lg">{metric}</div>
          <div className="text-green-600 text-sm">Total Impact</div>
        </div>
      </div>
    </div>
  );
}