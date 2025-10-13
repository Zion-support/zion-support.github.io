import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGImplementation() {
  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group | Advanced 5G Solutions</title>
        <meta name="description" content="Comprehensive 5G implementation services for businesses looking to leverage next-generation connectivity." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              5G Implementation Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive 5G implementation services, 
              designed to deliver ultra-fast connectivity and enable next-generation applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Network Planning</h3>
              <p className="text-gray-300">
                Strategic planning and design of 5G network infrastructure tailored to your business needs.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Infrastructure Setup</h3>
              <p className="text-gray-300">
                Complete installation and configuration of 5G equipment and supporting infrastructure.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Testing & Optimization</h3>
              <p className="text-gray-300">
                Comprehensive testing and optimization to ensure peak performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}