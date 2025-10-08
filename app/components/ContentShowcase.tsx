import React from 'react';

export const ContentShowcase: React.FC = () => {
  return (
    <div className="content-showcase py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Content</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">AI Solutions</h3>
            <p className="text-gray-600">Transform your business with cutting-edge AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;
