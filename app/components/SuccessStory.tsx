import React from 'react';

interface SuccessStoryProps {
  company: string;
  industry: string;
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