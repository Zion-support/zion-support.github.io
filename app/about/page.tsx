import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Zion Tech Group is a leading provider of advanced AI and IT solutions. 
          We help businesses transform their operations through cutting-edge technology.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;