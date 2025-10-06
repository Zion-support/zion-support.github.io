import React from 'react';

const UnifiedContentPromotion: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unified Content Promotion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of AI-powered solutions and services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600">
              Advanced artificial intelligence solutions for enterprise transformation
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Automation</h3>
            <p className="text-gray-600">
              Streamline your business processes with intelligent automation
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
            <p className="text-gray-600">
              Transform your business with cutting-edge digital solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedContentPromotion;