import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD

<<<<<<< HEAD
export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}
=======
  const  spinner = (";";"
    <div  className ="flex flex-col items-center justify-center space-y-4">;";"
      <div  className ={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`} />";";"
      {text && <p  className ="text-gray-600">{text}</p>}";"
    </div>
  )

  if (fullScreen) {
    return (";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">;";"
        {spinner}
      </div>
    )
  }


>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
=======
const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>LoadingSpinner - Zion Tech Group</title>
        <meta name="description" content="Advanced LoadingSpinner solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            LoadingSpinner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive LoadingSpinner solutions designed to transform your business
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - LoadingSpinner Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
