import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGImplementationPage() {
  return (
    <>
      <Helmet>
        <title>5G Implementation Services | Zion Tech Group</title>
        <meta name="description" content="Professional 5G implementation services for seamless network deployment and optimization." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              5G Implementation Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert 5G implementation services to deploy, configure, and optimize your next-generation network infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Network Planning</h3>
              <p className="text-gray-300">
                Comprehensive 5G network planning and design for optimal coverage and performance.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Deployment</h3>
              <p className="text-gray-300">
                Professional 5G infrastructure deployment with minimal disruption to operations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Optimization</h3>
              <p className="text-gray-300">
                Continuous monitoring and optimization for peak 5G network performance.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}