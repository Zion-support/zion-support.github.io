import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg">Comprehensive technology solutions for your business</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">AI Development</h3>
            <p className="text-gray-300">Custom AI solutions tailored to your business needs</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Web Development</h3>
            <p className="text-gray-300">Modern, responsive web applications</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Solutions</h3>
            <p className="text-gray-300">Scalable cloud infrastructure and deployment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;