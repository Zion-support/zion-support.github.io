'use client';
import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="404 - Page Not Found - Zion Tech Group"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our AI and technology solutions."
        keywords={['404', 'page not found', 'error']}
        canonicalUrl="https://ziontechgroup.com/404"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-cyan-400 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </a>
              <button
                onClick={() => window.history.back()}
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;