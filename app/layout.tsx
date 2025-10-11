'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

const LayoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Layout - Zion Tech Group</title>
        <meta name="description" content="Professional layout services and solutions." />
      </Helmet>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Layout
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Professional layout services and solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LayoutPage;
