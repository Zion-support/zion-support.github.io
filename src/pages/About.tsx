import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">About ZionTech Group</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg mb-6">
            ZionTech Group is a leading technology company specializing in revolutionary AI solutions, 
            cloud computing, and cutting-edge innovations that transform businesses and industries.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            Our mission is to empower organizations with advanced technology solutions that drive 
            growth, efficiency, and innovation in the digital age.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">Cutting-edge technology solutions</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">Delivering superior quality services</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
              <p className="text-gray-300">Driving business transformation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;