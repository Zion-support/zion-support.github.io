import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our AI and IT solutions instead." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. But don't worry, we have plenty of amazing AI and IT solutions to explore instead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">
                AI Solutions
              </h3>
              <p className="text-gray-300 mb-4">
                Discover our cutting-edge artificial intelligence solutions that can transform your business.
              </p>
              <Link
                to="/services"
                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center justify-center"
              >
                Explore AI Solutions
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">
                Cloud Services
              </h3>
              <p className="text-gray-300 mb-4">
                Scale your infrastructure with our comprehensive cloud computing solutions.
              </p>
              <Link
                to="/services"
                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center justify-center"
              >
                View Cloud Services
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">
                Cybersecurity
              </h3>
              <p className="text-gray-300 mb-4">
                Protect your business with our advanced cybersecurity solutions and expertise.
              </p>
              <Link
                to="/services"
                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center justify-center"
              >
                Learn About Security
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Get Help
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}