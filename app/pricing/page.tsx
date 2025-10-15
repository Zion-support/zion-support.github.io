import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs." />
      </Helmet>
      
      <div className="min-h-screen animated-bg cyber-grid relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full floating opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full floating opacity-40" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full floating opacity-50" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full floating opacity-30" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-8 holographic">Pricing Plans</h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transparent pricing for our comprehensive AI and IT services. Choose the perfect plan for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$99/month</div>
              <ul className="space-y-2 text-gray-600">
                <li>Basic AI consultation</li>
                <li>Email support</li>
                <li>Monthly reports</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$299/month</div>
              <ul className="space-y-2 text-gray-600">
                <li>Advanced AI solutions</li>
                <li>Priority support</li>
                <li>Weekly reports</li>
                <li>Custom integrations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">Custom</div>
              <ul className="space-y-2 text-gray-600">
                <li>Full AI transformation</li>
                <li>24/7 support</li>
                <li>Real-time monitoring</li>
                <li>Dedicated team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;