import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Zion App
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Zion App is at the forefront of AI innovation, providing revolutionary solutions 
            that transform how enterprises operate and compete in the digital age.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our team of experts combines deep technical knowledge with practical business 
            experience to deliver solutions that drive real results.
          </p>
          <p className="text-lg text-gray-600">
            We believe in the power of AI to solve complex problems and create opportunities 
            for growth and innovation across all industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;