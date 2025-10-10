'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const GlobalErrorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Global Error - Zion Tech Group</title>
        <meta name="description" content="A global error occurred in the application." />
        <meta name="keywords" content="error, global, application" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Global Error
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A global error occurred in the application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Reload Page
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Go Home
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GlobalErrorPage;