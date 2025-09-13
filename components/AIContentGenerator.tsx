import React from 'react';

interface AIContentGeneratorProps {
  className?: string;
}

const AIContentGenerator: React.FC<AIContentGeneratorProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      <div className="text-center">
        <div className="text-4xl mb-4">✍️</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Content Generator</h3>
        <p className="text-gray-600 mb-6">
          Generate high-quality, engaging content automatically using advanced AI technology. 
          Create blogs, articles, marketing copy, and more with minimal effort.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
            <div className="text-2xl mb-2">📝</div>
            <div className="font-semibold text-gray-900">Blog Generation</div>
            <div className="text-sm text-gray-600">Automated blog content creation</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold text-gray-900">Marketing Copy</div>
            <div className="text-sm text-gray-600">Persuasive marketing content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContentGenerator;