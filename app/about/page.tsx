import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company dedicated to transforming businesses through innovative AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-lg text-gray-300 mb-8">We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/team" 
              className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
