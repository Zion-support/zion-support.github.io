import React from 'react';

interface SuccessStoryProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
}

<<<<<<< HEAD
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
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{company}</h3>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {industry}
          </span>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 text-xs">!</span>
            </span>
            Challenge
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">{challenge}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xs">💡</span>
            </span>
            Solution
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xs">✓</span>
            </span>
            Result
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">{result}</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4 border border-blue-100">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">{metric}</div>
          <div className="text-sm text-gray-600">Key Impact</div>
=======
export default function SuccessStory({ 
  company, 
  industry, 
  challenge, 
  solution, 
  result, 
  metric 
}: SuccessStoryProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
          <span className="text-2xl">🏆</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{company}</h3>
          <p className="text-sm text-gray-500">{industry}</p>
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
        
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border border-green-200">
          <div className="text-2xl font-bold text-green-600 mb-1">{metric}</div>
          <div className="text-sm text-gray-600">Key Achievement</div>
>>>>>>> origin/cursor/create-and-deploy-new-content-461f
        </div>
      </div>
    </div>
  );
}