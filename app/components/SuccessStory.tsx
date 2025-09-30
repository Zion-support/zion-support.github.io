import React from 'react';

interface SuccessStoryProps {
  company: string;
  industry: string;
<<<<<<< HEAD
<<<<<<< HEAD
  description: string;
=======
  challenge: string;
  solution: string;
  result: string;
>>>>>>> cursor/create-and-deploy-new-content-ab3b
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
<<<<<<< HEAD
};

export default SuccessStory;
=======
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
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/create-and-deploy-new-content-1102
=======
}
>>>>>>> cursor/create-and-deploy-new-content-ab3b
