import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Zion Tech Group</h1>
        <p className="text-xl text-gray-300">
          Leading provider of AI, Quantum Computing & Cybersecurity Solutions
        </p>
      </div>
    </div>
  );
};

export default About;