import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="cyber-card p-8">
            <div className="text-8xl mb-6">🚀</div>
            <h1 className="text-6xl font-bold text-white mb-4 neon-text cyber-text">
              404
            </h1>
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Page Not Found
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              The page you're looking for seems to have drifted into the digital void. 
              Don't worry, even the best AI systems sometimes need to recalculate their routes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/"
                className="cyber-button flex items-center justify-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </a>
              <button
                onClick={() => window.history.back()}
                className="cyber-button-secondary flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 mb-4">Looking for something specific?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  AI Services
                </a>
                <a href="/it-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  IT Services
                </a>
                <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Contact Us
                </a>
                <a href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;