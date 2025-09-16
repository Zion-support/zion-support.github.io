import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const Enhanced404Page: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Enhanced404Page</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Enhanced404Page;