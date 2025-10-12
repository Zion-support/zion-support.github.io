import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function page() {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">Page</h1>
          <p className="text-lg text-gray-300 mb-8">Professional page services coming soon.</p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}