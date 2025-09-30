import React from 'react';

interface SuccessStoryProps {
  company: string;
  industry: string;
<<<<<<< HEAD
  description: string;
  metric: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
  company,
  industry,
  description,
  metric
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-green-300">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-4">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div className="mb-4">
        <h4 className="text-lg font-bold text-gray-900 mb-1">{company}</h4>
        <p className="text-sm text-gray-500">{industry}</p>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="bg-green-50 rounded-lg p-3 border border-green-200">
        <p className="text-green-700 font-semibold text-sm">
          Result: {metric}
        </p>
      </div>
    </div>
  );
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
