import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you are looking for does not exist. Return to our homepage or explore our AI and IT services." />
        <meta name="keywords" content="404, not found, error, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-8">
              404
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">Page Not Found</h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Sorry, the page you are looking for doesn't exist or has been moved. 
              Let's get you back on track with our amazing AI and IT solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Popular Pages</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link 
                  to="/ai-services"
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 text-2xl mb-3">🤖</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    AI Services
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Explore our cutting-edge artificial intelligence solutions
                  </p>
                </Link>
                
                <Link 
                  to="/it-services"
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group"
                >
                  <div className="text-purple-400 text-2xl mb-3">💻</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    IT Services
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Comprehensive IT solutions for your business needs
                  </p>
                </Link>
                
                <Link 
                  to="/5g-solutions"
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:border-green-400 transition-all duration-300 group"
                >
                  <div className="text-green-400 text-2xl mb-3">📡</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    5G Solutions
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Next-generation 5G technology implementations
                  </p>
                </Link>
                
                <Link 
                  to="/micro-saas"
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:border-orange-400 transition-all duration-300 group"
                >
                  <div className="text-orange-400 text-2xl mb-3">☁️</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Micro SaaS
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Ready-to-use business tools and applications
                  </p>
                </Link>
                
                <Link 
                  to="/about"
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:border-blue-400 transition-all duration-300 group"
                >
                  <div className="text-blue-400 text-2xl mb-3">👥</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    About Us
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Learn more about Zion Tech Group and our mission
                  </p>
                </Link>
                
                <Link 
                  to="/contact"
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:border-pink-400 transition-all duration-300 group"
                >
                  <div className="text-pink-400 text-2xl mb-3">📞</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">
                    Contact Us
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Get in touch with our team for support and inquiries
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;