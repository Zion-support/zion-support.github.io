import React from 'react';

const AISolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced artificial intelligence solutions to transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Machine Learning</h3>
            <p className="text-gray-600 mb-6">
              Custom ML models and algorithms to automate decision-making processes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
            <p className="text-gray-600 mb-6">
              AI-powered text analysis and language understanding solutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Computer Vision</h3>
            <p className="text-gray-600 mb-6">
              Image and video analysis solutions for automated visual processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;