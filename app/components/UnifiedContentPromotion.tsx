import React from 'react';

const UnifiedContentPromotion: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unified Content Promotion
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest innovations and breakthrough solutions that are transforming industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              AI-Powered Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Leverage cutting-edge artificial intelligence to automate and optimize your business processes.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Digital Transformation
            </h3>
            <p className="text-gray-600 mb-4">
              Transform your business with our comprehensive digital solutions and modern technologies.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Enterprise Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Scale your business with our enterprise-grade solutions designed for growth and efficiency.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedContentPromotion;