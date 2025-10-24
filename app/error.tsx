'use client';

import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const ErrorPage: React.FC = () => {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Error
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Something went wrong. Please try again later.
            </p>
          </div>
        </div>
      </main>

      <TestComponent />
    </>
  );
};

export default ErrorPage;