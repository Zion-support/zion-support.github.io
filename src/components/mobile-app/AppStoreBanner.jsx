import React from 'react';

export const AppStoreBanner = () => {
  return (
    <div className="py-12 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Download Now
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            App Store
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Google Play
          </button>
        </div>
      </div>
    </div>
  );
};