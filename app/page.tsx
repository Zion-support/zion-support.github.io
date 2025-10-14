import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI and IT Solutions for the modern enterprise. 
            We provide cutting-edge technology solutions to help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-6 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;