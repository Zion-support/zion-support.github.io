import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppConfig } from '../types/app';

interface AppLayoutProps {
  children?: React.ReactNode;
  config?: AppConfig;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, config }) => {
  const appName = config?.name || 'Zion Tech Group';
  const appVersion = config?.version || '1.0.0';
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent hover:from-blue-200 hover:to-white transition-all">
              {appName}
            </Link>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <Link 
                  to="/" 
                  className={`text-sm font-medium transition-colors ${
                    isActive('/') ? 'text-white' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`text-sm font-medium transition-colors ${
                    isActive('/about') ? 'text-white' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-sm font-medium transition-colors ${
                    isActive('/contact') ? 'text-white' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  Contact
                </Link>
              </nav>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-blue-200 hidden md:block">
                  v{appVersion}
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden text-blue-200 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-white' : 'text-blue-200 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-white' : 'text-blue-200 hover:text-white'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-white' : 'text-blue-200 hover:text-white'
                }`}
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-white/10">
                <div className="text-xs text-blue-200">
                  v{appVersion}
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="container mx-auto px-4 py-8">
        {children || (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Welcome to {appName}
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Innovative IT Solutions & AI Services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">AI Services</h3>
                <p className="text-sm text-blue-200">
                  Advanced AI-powered solutions for modern businesses
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">IT Services</h3>
                <p className="text-sm text-blue-200">
                  Comprehensive managed IT and cybersecurity solutions
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Micro SAAS</h3>
                <p className="text-sm text-blue-200">
                  Scalable software solutions for growing businesses
                </p>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-sm text-blue-300">
                Successfully built and deployed on Netlify! 🚀
              </p>
            </div>
          </div>
        )}
      </main>
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-blue-200">
          <p>&copy; 2024 {appName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};