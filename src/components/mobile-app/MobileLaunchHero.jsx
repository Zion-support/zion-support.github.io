import React from 'react';

export const MobileLaunchHero = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Zion Mobile App
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get the Zion AI marketplace in your pocket. Hire talent, find jobs, and manage projects on the go.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            Download for iOS
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            Download for Android
          </button>
        </div>
      </div>
    </div>
  );
};