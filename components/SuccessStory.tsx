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
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {company.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{company}</h3>
            <p className="text-gray-500 text-sm">{industry}</p>
          </div>
        </div>
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
        
        <div className="pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">{metric}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">Key Metric</div>
          </div>
        </div>
      </div>
    </div>
  );
}