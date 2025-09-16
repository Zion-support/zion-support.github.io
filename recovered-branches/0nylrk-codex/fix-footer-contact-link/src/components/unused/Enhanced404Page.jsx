import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, MagnifyingGlassIcon, ArrowLeftIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
export const Enhanced404Page = ({ requestedPath, suggestedRoutes = [] }) => {
    const defaultSuggestions = [
        '/services',
        '/ai-solutions',
        '/about',
        '/contact',
        '/case-studies'
    ];
    const suggestions = suggestedRoutes.length > 0 ? suggestedRoutes : defaultSuggestions;
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
        {/* Error Icon */}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }} className="mb-8">
          <div className="relative">
            <ExclamationTriangleIcon className="w-32 h-32 text-red-400 mx-auto"/>
            <div className="absolute inset-0 bg-red-400/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>

        {/* Main Error Message */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-6xl md:text-8xl font-bold text-white mb-6">
          404
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
          Page Not Found
        </motion.h2>

        {requestedPath && (<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg text-gray-400 mb-8">
            The page <code className="bg-gray-800 px-2 py-1 rounded text-red-300">{requestedPath}</code> could not be found.
          </motion.p>)}

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Don't worry! This might be a temporary issue or the page might have been moved. 
          Let us help you find what you're looking for.
        </motion.p>

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <HomeIcon className="w-5 h-5"/>
            Go Home
          </Link>

          <Link to="/services" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <MagnifyingGlassIcon className="w-5 h-5"/>
            Browse Services
          </Link>

          <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <ArrowLeftIcon className="w-5 h-5"/>
            Go Back
          </button>
        </motion.div>

        {/* Suggested Pages */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6">
            Popular Pages You Might Like
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((route, index) => (<motion.div key={route} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + index * 0.1 }}>
                <Link to={route} className="block p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 hover:text-white transition-all duration-300 border border-gray-600 hover:border-gray-500">
                  {route === '/services' && 'Our Services'}
                  {route === '/ai-solutions' && 'AI Solutions'}
                  {route === '/about' && 'About Us'}
                  {route === '/contact' && 'Contact Us'}
                  {route === '/case-studies' && 'Case Studies'}
                  {!['/services', '/ai-solutions', '/about', '/contact', '/case-studies'].includes(route) &&
                route.charAt(1).toUpperCase() + route.slice(2).replace(/-/g, ' ')}
                </Link>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Still can't find what you're looking for?
          </p>
          <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline font-medium">
            Contact our support team
          </Link>
        </motion.div>
      </motion.div>
    </div>);
};
export default Enhanced404Page;
