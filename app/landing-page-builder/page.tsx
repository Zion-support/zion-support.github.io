import React from 'react';
import { Helmet } from 'react-helmet-async';


export default function PageTsxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page.Tsx - Zion Tech Group</title>
        <meta name="description" content="Advanced page.tsx solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page.Tsx</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page.tsx solutions by Zion Tech Group
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
          <p className="text-gray-300">
            This page is under development. Please check back later for updates.
          </p>
        </div>
      
        </div>

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function LandingPageBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Landing Page Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced landing page builder solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Landing Page Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create high-converting landing pages with our AI-powered builder platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Drag & Drop Builder</h3>
              <p className="text-gray-600">
                Easy-to-use drag and drop interface for creating stunning landing pages.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Optimization</h3>
              <p className="text-gray-600">
                AI-powered optimization for better conversion rates and performance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Responsive</h3>
              <p className="text-gray-600">
                Automatically responsive designs that work perfectly on all devices.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
}