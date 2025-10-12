

'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;

const LoadingSpinner: React.FC<LoadingSpinnerProps /> = ({ 
  const size = 'md', 
  color = 'primary', 
  text 
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    white: 'text-white'
  };
  return (

      {text && (
        <p className="text-gray-400text-smanimate-pulse">{text}</p>
      )}
  );
};

export default LoadingSpinner;

=======
export default function LoadingSpinner() {
  return (
    <>
      <Helmet>
        <title>Loading Spinner - Zion Tech Group</title>
        <meta name="description" content="Professional loading spinner by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Loading Spinner</h1>
          <p className="text-lg text-gray-300 mb-8">Professional loading spinner coming soon.</p>
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
