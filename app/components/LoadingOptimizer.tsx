import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
// Lazy load components for better performance

interface LoadingOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({ 
  children, 
  fallback = <DefaultLoadingSpinner>
  return (
      {children}
  );
};

 (
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
);

// Skeleton loaders for different components
 (
    <div className="w-16 h-16 bg-slate-700 rounded-full mb-6"></div>
    <div className="h-6 bg-slate-700 rounded mb-4"></div>
    <div className="h-4 bg-slate-700 rounded mb-2"></div>
    <div className="h-4 bg-slate-700 rounded w-3/4"></div>
);

 (
      <div className="h-16 bg-slate-700 rounded mb-6 animate-pulse"></div>
      <div className="h-6 bg-slate-700 rounded mb-4 animate-pulse"></div>
      <div className="h-6 bg-slate-700 rounded mb-8 w-3/4 mx-auto animate-pulse"></div>
        <div className="h-12 bg-slate-700 rounded w-48 animate-pulse"></div>
        <div className="h-12 bg-slate-700 rounded w-48 animate-pulse"></div>
);

 (
        <div className="h-8 bg-slate-700 rounded w-32 animate-pulse"></div>
 (
            <div key={i} className="h-4 bg-slate-700 rounded w-16 animate-pulse"></div>
          ))}
        <div className="h-10 bg-slate-700 rounded w-24 animate-pulse"></div>

);

export default LoadingOptimizer;
=======
export default function LoadingOptimizer() {
  return (
    <>
      <Helmet>
        <title>Loading Optimizer - Zion Tech Group</title>
        <meta name="description" content="Professional loading optimizer by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Loading Optimizer</h1>
          <p className="text-lg text-gray-300 mb-8">Professional loading optimizer coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
