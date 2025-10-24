'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const BlockchainPage: React.FC = () => {
  const services = [
    {
      title: 'Smart Contract Development',
      description: 'Custom smart contracts for various blockchain platforms',
      category: 'Development',
      technologies: ['Solidity', 'Web3.js', 'Truffle', 'Hardhat']
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic blockchain implementation and technology evaluation',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Evaluation', 'Risk Assessment', 'ROI Analysis']
    }
  ];

  const benefits = [
    'Advanced blockchain technology integration',
    'Real-time transaction processing',
    'Cross-platform compatibility',
    'Enterprise-grade security',
    'Scalable cloud infrastructure',
    'Custom development solutions',
    'Multi-chain support',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain Services | Zion Tech Group</title>
        <meta name="description" content="Professional blockchain services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="blockchain services, smart contracts, cryptocurrency, distributed ledger, blockchain development" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Blockchain Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive blockchain services
            powered by cutting-edge technology and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Benefits
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our blockchain services for your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Started with Blockchain
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockchainPage;
