import React from 'react';

export const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="relative py-24 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};