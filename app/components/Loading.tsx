import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-centerbg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-4"></div>
<h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        <p className="text-gray-300   ">Please wait while we load the content</p>
      </div>
    </div>
  );
};

export default Loading;