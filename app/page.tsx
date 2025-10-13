import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services that transform businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence solutions to automate processes and enhance decision-making.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300">
                Comprehensive security solutions to protect your business from cyber threats.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300">
                Scalable cloud solutions to modernize your infrastructure and improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}