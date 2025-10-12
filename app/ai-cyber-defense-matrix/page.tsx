import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AICyberDefenseMatrix() {
  return (
    <>
      <Helmet>
        <title>AI Cyber Defense Matrix - Zion Tech Group</title>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-6">AI Cyber Defense Matrix</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional AI cyber defense matrix services coming soon.
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}