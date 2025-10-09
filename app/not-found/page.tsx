'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, HelpCircle, Phone, Mail, AlertTriangle, RefreshCw } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'AI Services', path: '/ai-services', icon: Search },
    { name: 'IT Services', path: '/it-services', icon: HelpCircle },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'About', path: '/about', icon: HelpCircle }
  ];

  const popularPages = [
    { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'Micro SAAS', path: '/micro-saas', description: 'Affordable AI tools' },
    { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories' }
  ];

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find what you need with our AI and IT solutions or contact us for assistance." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            {/* 404 Animation */}
            <div className="relative mb-8">
              <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 cyber-text neon-pulse">
                404
              </div>
              <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-cyan-400/20 blur-sm">
                404
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 neon-text">
              Page Not Found
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Oops! This page doesn't exist
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              The page you're looking for might have been moved, deleted, or doesn't exist. 
              Don't worry, our AI-powered solutions are still here to help you succeed.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/"
                className="cyber-button inline-flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
              <button
                onClick={() => window.location.reload()}
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Refresh
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 neon-text">
              Quick Navigation
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="cyber-card hologram-card p-4 text-center hover:scale-105 transition-all duration-300 group"
                >
                  <link.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-sm">{link.name}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular Pages */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 neon-text">
              Popular Pages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                    {page.description}
                  </p>
                  <div className="mt-4 flex items-center text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors">
                    <span>Learn More</span>
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Search Section */}
          <section className="mb-16">
            <div className="cyber-card hologram-card p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 neon-text">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our AI-powered search can help you find exactly what you need. 
                Try searching for specific services, solutions, or topics.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search our AI and IT solutions..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const query = (e.target as HTMLInputElement).value;
                        window.location.href = `/search?q=${encodeURIComponent(query)}`;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Help Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
              <h2 className="text-2xl font-bold text-white text-center mb-8 neon-text">
                Need Help?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
                  <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                </div>
                <div className="text-center">
                  <HelpCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Support Center</h3>
                  <Link to="/support" className="text-cyan-400 font-medium hover:text-cyan-300">
                    Visit Support
                  </Link>
                  <p className="text-gray-400 text-sm">24/7 assistance</p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Assistant */}
          <section className="mb-16">
            <div className="cyber-card hologram-card p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-2xl">AI</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white neon-text">AI Assistant</h2>
                  <p className="text-cyan-400">Powered by advanced AI</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our AI assistant can help you find the right solution for your business needs. 
                Ask about our AI services, IT solutions, or get personalized recommendations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Chat with AI Assistant
                </Link>
                <Link
                  to="/consultation"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Consultation
                </Link>
              </div>
            </div>
          </section>

          {/* Error Details */}
          <section className="mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-lg font-bold text-white">Technical Details</h3>
              </div>
              <div className="text-sm text-gray-400 space-y-2">
                <p><strong>Error Code:</strong> 404 - Page Not Found</p>
                <p><strong>Timestamp:</strong> {new Date().toISOString()}</p>
                <p><strong>Requested URL:</strong> {window.location.href}</p>
                <p><strong>User Agent:</strong> {navigator.userAgent}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;