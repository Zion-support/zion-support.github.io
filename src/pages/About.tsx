import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech Group is a leading technology company specializing in innovative 
            solutions, AI services, and cutting-edge IT infrastructure.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our mission is to empower businesses with the latest technology solutions 
            and help them thrive in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;