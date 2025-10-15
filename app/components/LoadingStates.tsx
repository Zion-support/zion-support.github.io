import React from 'react';
export const LoadingPage: React.FC = () => {
  return (
    
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
        <div className="text-center">
        
        <div className="w-16 h-16 mx-auto mb-4">
          <Loader2 className="w-16 h-16 text-cyan-400 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        
          <p className="text-gray-300">Please wait while we load the content</p>
      </div>
    </div>
  );
};
export const LoadingSpinner: React.FC = () => {
  return (
    
        <div className="flex items-center justify-center p-4">
      <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
    </div>
  );
};
export const LoadingSkeleton: React.FC = () => {
  return (
    
        <div className="animate-pulse">
      
        <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
      
        <div className="h-4 bg-slate-700 rounded w-1/2 mb-2"></div>
      
        <div className="h-4 bg-slate-700 rounded w-5/6"></div>
    </div>
  );
};

export default NotFoundPage;