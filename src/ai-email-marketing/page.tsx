import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEmailMarketingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Marketing | Zion Tech Group</title>
        <meta name="description" content="Advanced AI email marketing solutions by Zion Tech Group." />
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Email Marketing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Coming Soon - Advanced AI email marketing solutions that will transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Contact Us
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIEmailMarketingPage;