import React from 'react';
<<<<<<< HEAD

interface OptimizedImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedImage({ className = '', children }: OptimizedImageProps) {
  return (
    <div className={`${className}`}>
      {children}
=======
import { Helmet } from 'react-helmet-async';

export default function OptimizedImagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>OptimizedImage - Zion Tech Group</title>
        <meta name="description" content="Advanced OptimizedImage solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            OptimizedImage
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
    </div>
  );
}