import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Advanced AI and IT Solutions. Our mission to transform businesses with cutting-edge technology." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses with cutting-edge AI and IT solutions that drive growth and innovation.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the global leader in AI and IT solutions, transforming industries worldwide.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Our Values</h3>
              <p className="text-gray-300">
                Innovation, excellence, integrity, and customer success are at the core of everything we do.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}