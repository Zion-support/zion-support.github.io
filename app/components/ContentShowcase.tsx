import React from 'react';

const ContentShowcase: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600">
              Discover our cutting-edge AI solutions for enterprise.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
            <p className="text-gray-600">
              Transform your business with our cloud infrastructure.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Automation</h3>
            <p className="text-gray-600">
              Streamline operations with intelligent automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;
