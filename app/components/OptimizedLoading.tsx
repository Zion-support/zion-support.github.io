import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

import { Loader2 } from 'lucide-react';

=======
export default OptimizedLoading;
>>>>>>> origin/main
interface OptimizedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps /> = ({
  const size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const containerClasses = fullScreen;
    ? 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function OptimizedLoading() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD

=======
    <div className="{`${containerClasses}" ${className}`} /></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <Loader2 className="{`${sizeClasses[size]}" text-cyan-500 animate-spin`}  /></Loader2>
>>>>>>> origin/main
        {text && (
          <p className="w-5h-5ml-2">{text}
          </p>
        )}
      </div>
  )
<<<<<<< HEAD

export default OptimizedLoading;

=======
    <>
      <Helmet>
        <title>Optimized Loading - Zion Tech Group</title>
        <meta name="description" content="Professional optimized loading by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Optimized Loading</h1>
          <p className="text-lg text-gray-300 mb-8">Professional optimized loading coming soon.</p>
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
=======
}
>>>>>>> origin/main
