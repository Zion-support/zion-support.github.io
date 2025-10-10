'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAPIManagerPage: React.FC = () => {
const Component = () => {
  return (
    <>
      <Helmet>
        <title>AI API Manager | Zion Tech Group</title>
        <meta name="description" content="Professional AI API manager services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai api manager, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              AI API Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional AI API manager services powered by advanced AI and cutting-edge technology.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Expert AI Solutions</h3>
                  <p className="text-gray-300">Cutting-edge AI technology for API management</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-gray-300">Track record of successful API management implementations</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support and maintenance</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  ),
};

export default AIAPIManagerPage;