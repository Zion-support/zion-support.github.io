import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Zion Tech Group is a leading provider of AI services, IT solutions, and micro SaaS applications.
        </p>
      </div>
    </div>
  );
};

export default About;