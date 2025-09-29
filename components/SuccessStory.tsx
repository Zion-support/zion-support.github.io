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
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {company.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{company}</h3>
          <p className="text-sm text-gray-500">{industry}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
          <p className="text-sm text-gray-600">{challenge}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
          <p className="text-sm text-gray-600">{solution}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Result:</h4>
          <p className="text-sm text-gray-600">{result}</p>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <div className="text-lg font-bold text-blue-600">{metric}</div>
          <div className="text-xs text-gray-500">Key Performance Indicator</div>
        </div>
      </div>
    </div>
  );
}