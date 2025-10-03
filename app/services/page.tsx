import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Development</h3>
            <p className="text-gray-600">
              Custom AI solutions tailored to your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
            <p className="text-gray-600">
              Seamless migration to cloud infrastructure with minimal downtime.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">DevOps Consulting</h3>
            <p className="text-gray-600">
              Streamline your development and deployment processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;