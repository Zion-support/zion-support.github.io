import React from 'react';

const DisabledPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Temporarily Disabled</h1>
        <p className="text-gray-600 mb-6">This page is currently under maintenance.</p>
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default DisabledPage;