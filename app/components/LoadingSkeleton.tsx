<<<<<<< HEAD
<<<<<<< HEAD

'use client';

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
import React from 'react';
export default LoadingSkeleton;
'use client';
>>>>>>> origin/main

<<<<<<< HEAD
interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
const LoadingSkeleton: React.FC<LoadingSkeletonProps /> = ({ 
  lines = 3, 
  className = '' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}></div>
      {Array.from({ length: lines }).map((_, index) => (
        <div;
          key={index}
          className="h-4bg-gray-300 rounded mb-2"
        /></div>
      ))}
    </div>
  );
};

          key="{index}"
;

<<<<<<< HEAD
 (

          key="{index}"
;

=======
export default function LoadingSkeleton() {
  return (
    <>
      <Helmet>
        <title>Loading Skeleton - Zion Tech Group</title>
        <meta name="description" content="Professional loading skeleton by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Loading Skeleton</h1>
          <p className="text-lg text-gray-300 mb-8">Professional loading skeleton coming soon.</p>
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
