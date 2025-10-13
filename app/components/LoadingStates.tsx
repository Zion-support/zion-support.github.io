import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <Loader2 className="h-12 w-12 text-blue-400 animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="h-6 w-6 text-blue-400 animate-spin" />
    </div>
  );
};

export default LoadingPage;