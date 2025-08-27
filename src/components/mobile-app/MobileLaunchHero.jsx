import React from 'react';

export const MobileLaunchHero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Zion Mobile App
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience Zion Tech Group's services on the go
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Download for iOS
          </button>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Download for Android
          </button>
        </div>
      </div>
    </div>
  );
};