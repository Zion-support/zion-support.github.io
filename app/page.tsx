import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and cybersecurity solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Advanced AI & IT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with cutting-edge artificial intelligence, cloud infrastructure, 
            and cybersecurity solutions tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
