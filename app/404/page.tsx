import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

const Page404Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found - Zion Tech Group</title>
        <meta name="description" content="Page not found. Return to our homepage for AI and 5G solutions." />
        <meta name="keywords" content="404, page not found, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-8">404</h1>
            <p className="text-2xl text-gray-300 mb-8">
              Oops! The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Let&apos;s get you back on track with our amazing AI and 5G solutions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  AI Solutions
                </h3>
                <p className="text-gray-300">
                  Explore our cutting-edge AI solutions and services.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  5G Technology
                </h3>
                <p className="text-gray-300">
                  Discover next-generation 5G infrastructure solutions.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  Get Support
                </h3>
                <p className="text-gray-300">
                  Contact our expert team for assistance.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Link 
                to="/" 
                className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                <ArrowRight className="mr-2 w-5 h-5" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404Page;
