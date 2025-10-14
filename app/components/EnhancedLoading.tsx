import React from "react";
import { Helmet } from "react-helmet-async";

const EnhancedLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>EnhancedLoading - Zion Tech Group</title>
        <meta name="description" content="Professional enhancedloading services by Zion Tech Group." />
        <meta name="keywords" content="enhancedloading, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            EnhancedLoading
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional enhancedloading services designed to help your business grow and succeed.
          </p>
        </div>
        
        {/* Inner spinning ring */}
        <div className={`${sizeClasses[size]} border-4 border-cyan-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0`}></div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
      </div>
      
      {text && (
        <p className={`mt-4 text-gray-300 ${textSizeClasses[size]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default EnhancedLoading;
