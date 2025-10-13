import React from 'react';
<<<<<<< HEAD

interface NotFoundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NotFound({ className = '', children }: NotFoundProps) {
  return (
    <div className={`${className}`}>
      {children}
=======
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Go back home
        </a>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
    </div>
  );
}