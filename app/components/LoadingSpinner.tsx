import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default LoadingSpinner;
'use client';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps /> = ({
  const size = 'md',
  color = 'primary',
  text;
}) => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="{`${sizeClasses[size]}" ${colorClasses[color]} animate-spin`} /></div>
        <svg;
          className="w-fullh-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24" /></svg>
          <circle;
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
           /></circle>
          <path;
            className="opacity-75"
            fill="currentColor"
            d="M4 12 a8 8 0 018-8 V0 C5.373 0 0 5.373 0 12 h4 zm2 5.291 A7.962 7.962 0 014 12 H0 c0 3.042 1.135 5.824 3 7.938 l3-2.647 z"
           /></path>
        </svg>
      </div>
      {text && (
        <p className="text-gray-400text-smanimate-pulse">{text}</p>
      )}
    </div>
  );
};
export default LoadingSpinner;
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