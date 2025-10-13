import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingPage: React.FC = () => {}
  return ()
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we load the content</p>
      </div>
    </div>)
  );
};

export default LoadingPage;