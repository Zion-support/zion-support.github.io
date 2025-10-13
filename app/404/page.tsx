import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page404() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="404 solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">404</h1>
          <p className="text-xl text-gray-300 mb-8">
export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="Advanced 404 solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            404
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Home } from 'lucide-react';
import { Search } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <EnhancedSEO
        title="404 - Page Not Found | Zion Tech Group"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our AI and IT solutions."
        canonical="https://ziontechgroup.com/404"
      />

      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
              404
            </div>
            <div className="absolute -top-4 -right-4">
              <AlertTriangle className="w-16 h-16 text-yellow-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The page you're looking for seems to have vanished into the digital void.
          Don't worry, our AI solutions can help you find what you need!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Popular Links */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            Popular Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/ai-services"
              className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Search className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 group-hover:text-white transition-colors">AI Services</span>
            </Link>
            <Link
              to="/micro-saas"
              className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Search className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 group-hover:text-white transition-colors">Micro SAAS</span>
            </Link>
            <Link
              to="/5g-solutions"
              className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Search className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 group-hover:text-white transition-colors">5G Solutions</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Search className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 group-hover:text-white transition-colors">Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-gray-400 text-sm">
          <p>
            Still can't find what you're looking for?
            <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1">
              Contact our support team
            </Link>
          </p>
        </div>
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">The page you are looking for could not be found.</p>
        <a href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">Go Home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;

import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
