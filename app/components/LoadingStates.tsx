<<<<<<< HEAD
import React from 'react' </div> </div>
)'
export const LoadingSpinner = ({ size = 'md' }) => {'} const sizes = {} sm: 'h-4 w-4',' md: 'h-8 w-8',' lg: 'h-12 w-12' } return ( <div className={`animate-spin rounded-full border-b-2 border-blue-500 ${sizes[size]}`}></div>` )
}'
=======
import React from 'react';

const LoadingStates = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingStates;
>>>>>>> cursor/fix-errors-and-merge-to-main-d09f
