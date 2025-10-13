import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap } from 'lucide-react';

export default function errorHandler() {
  const features = [
    {
      title: 'Advanced Solutions',
      description: 'Cutting-edge technology for your business needs',
      icon: Brain
    },
    {
      title: 'Secure Platform',
      description: 'Enterprise-grade security and reliability',
      icon: Shield
    },
    {
      title: 'High Performance',
      description: 'Optimized for speed and efficiency',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Errorhandler - Zion AI</title>
        <meta name="description" content="Professional errorhandler services and solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Errorhandler
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional errorhandler services and solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}