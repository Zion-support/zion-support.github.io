import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Brain, Shield, Zap } from 'lucide-react';

export default function PagePage() {
  const features = [
    {
      title: "Advanced Technology",
      description: "Cutting-edge solutions powered by the latest technology",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability for your business",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Fast Implementation",
      description: "Quick deployment and implementation for immediate results",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content="Advanced  solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced  solutions by Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
=======

export default function FiveGSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Next-generation 5G technology solutions for your business.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5G Infrastructure</h3>
              <p className="text-gray-600">
                Complete 5G network infrastructure setup and management.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Edge Computing</h3>
              <p className="text-gray-600">
                Ultra-low latency edge computing solutions for real-time applications.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">IoT Integration</h3>
              <p className="text-gray-600">
                Connect and manage IoT devices with 5G connectivity.
              </p>
            </div>
          </div>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
        </div>
      </div>
    </div>
  );
}