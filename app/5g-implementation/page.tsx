import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGImplementation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G implementation services for modern businesses" />
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Network Planning</h3>
            <p className="text-gray-300">
              Comprehensive 5G network design and planning for optimal coverage and performance.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Infrastructure Setup</h3>
            <p className="text-gray-300">
              Complete 5G infrastructure deployment with enterprise-grade security.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Performance Optimization</h3>
            <p className="text-gray-300">
              Advanced optimization techniques to maximize 5G network efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}