import React from "react";

const AdvancedSEOOptimizer: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced SEO Optimizer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional SEO optimization solutions to boost your search rankings.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Keyword Research
              </h3>
              <p className="text-blue-700">
                Advanced keyword research and analysis for better search visibility.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Content Optimization
              </h3>
              <p className="text-green-700">
                Optimize your content for better search engine rankings.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Technical SEO
              </h3>
              <p className="text-purple-700">
                Technical SEO audits and optimization for better performance.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSEOOptimizer;
