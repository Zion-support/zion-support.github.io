import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Zion Tech Group
          </h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              Zion Tech Group is a leading technology solutions provider specializing in 
              AI, cybersecurity, cloud infrastructure, and digital transformation services.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that drive 
              innovation, enhance security, and accelerate digital transformation.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be the premier technology partner for organizations seeking to leverage 
              advanced technologies for competitive advantage and sustainable growth.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Innovation and Excellence</li>
              <li>Client-Centric Approach</li>
              <li>Security and Reliability</li>
              <li>Continuous Learning and Improvement</li>
              <li>Ethical Business Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;