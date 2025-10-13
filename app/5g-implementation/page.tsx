import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGImplementation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G implementation services for businesses" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Implementation Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge 5G technology implementation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our 5G Implementation?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Our expert team provides end-to-end 5G implementation services that help businesses 
              leverage the full potential of next-generation wireless technology.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Ultra-fast connectivity and low latency
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Enhanced IoT and edge computing capabilities
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Scalable infrastructure solutions
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
            <p className="text-gray-300 mb-6">
              Contact our 5G experts to discuss your implementation needs and get a customized solution.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}