import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
        <p className="text-white mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;