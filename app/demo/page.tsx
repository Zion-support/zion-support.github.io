import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a demo of Zion Tech Group's AI, IT, and 5G solutions." />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Schedule a Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            See our technology solutions in action and discover how they can transform your business.
          </p>
          
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-6">Request a Demo</h2>
            <p className="text-gray-300 mb-6">
              Fill out the form below and we&apos;ll contact you to schedule a personalized demo.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Select a service</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="it-services">IT Services</option>
                  <option value="5g-solutions">5G Solutions</option>
                  <option value="cybersecurity">Cybersecurity</option>
                </select>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                Request Demo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              to="/contact"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Or contact us directly for immediate assistance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
