import React from 'react';

const AppLoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"&gt;</div&gt;
      <div className="text-center"&gt;</div&gt;
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"&gt;</div&gt;</div&gt;
        <p className="text-white text-lg"&gt;</p&gt;Loading...</p&gt;
      </div&gt;
    </div&gt;
  );
};

export default AppLoadingSpinner;