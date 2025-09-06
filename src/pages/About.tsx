import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech is a leading technology company specializing in innovative solutions
            for businesses of all sizes. We combine cutting-edge technology with deep
            industry expertise to deliver exceptional results.
          </p>
          <p className="text-lg text-gray-600">
            Our team of experienced professionals is dedicated to helping our clients
            achieve their technology goals and drive business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;