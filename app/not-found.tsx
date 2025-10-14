<<<<<<< HEAD
// not-found - Basic implementation
=======
'use client';
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
<<<<<<< HEAD
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-300 text-xl mb-8">Page not found</p>
        <a 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Go Home
        </a>
=======
        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-gray-300">The page you're looking for doesn't exist.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
      </div>
    </div>
  );
}