<<<<<<< HEAD
import Loading from './components/Loading';

export default function LoadingPage() {
  return <Loading />;
}
=======
'use client';
import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-500 mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the content.</p>
      </div>
    </div>
  );
};

export default LoadingPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
