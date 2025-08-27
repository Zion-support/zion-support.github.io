import React from 'react';

export const AppStoreButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
        App Store
      </button>
      <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
        Google Play
      </button>
    </div>
  );
};