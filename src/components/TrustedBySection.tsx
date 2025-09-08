import React from 'react';

export const TrustedBySection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
          Trusted by Leading Companies
        </h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="text-gray-400 text-lg">Company 1</div>
          <div className="text-gray-400 text-lg">Company 2</div>
          <div className="text-gray-400 text-lg">Company 3</div>
        </div>
      </div>
    </div>
  );
};