import React from 'react';

const FeaturedContentSection: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Featured Content
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
            <p className="text-gray-600">Cutting-edge artificial intelligence solutions for your business needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
            <p className="text-gray-600">Secure, decentralized solutions powered by blockchain technology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
            <p className="text-gray-600">Scalable cloud infrastructure and deployment solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContentSection;