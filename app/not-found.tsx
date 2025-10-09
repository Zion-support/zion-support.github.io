'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 neon-pulse">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Error Message */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Page Not Found">
              Page Not Found
            </h2>
            <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              The page you're looking for doesn't exist
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              It looks like the page you're trying to access has been moved, deleted, or doesn't exist. 
              Don't worry, our AI-powered solutions are still here to help you!
            </p>
          </section>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <Home className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Go Home</h3>
              <p className="text-gray-300 mb-4">Return to our homepage and explore our services</p>
              <Link 
                to="/" 
                className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Home
              </Link>
            </div>

            <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <Search className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Browse Services</h3>
              <p className="text-gray-300 mb-4">Discover our AI and IT solutions</p>
              <Link 
                to="/services" 
                className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Services
              </Link>
            </div>

            <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <ArrowLeft className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Go Back</h3>
              <p className="text-gray-300 mb-4">Return to the previous page</p>
              <button 
                onClick={() => window.history.back()} 
                className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Back
              </button>
            </div>
          </div>

          {/* Popular Links */}
          <section className="cyber-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 neon-text">Popular Pages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                to="/ai-project-manager" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded hover:bg-slate-700/50"
              >
                AI Project Manager
              </Link>
              <Link 
                to="/ai-social-media-manager" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded hover:bg-slate-700/50"
              >
                AI Social Media Manager
              </Link>
              <Link 
                to="/ai-analytics" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded hover:bg-slate-700/50"
              >
                AI Analytics Dashboard
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded hover:bg-slate-700/50"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;