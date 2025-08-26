import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Truck, Star } from 'lucide-react';

export default function QuantumLogisticsPage() {
  const service = {
    name: 'Quantum Logistics Platform',
    description: 'Revolutionary quantum-powered logistics optimization that transforms supply chain efficiency and delivery performance.',
    tagline: 'Optimize your logistics with quantum computing and AI-driven insights',
    price: '$18,000',
    period: '/month',
    trialDays: 30,
    setupTime: '3 weeks',
    rating: 4.7,
    features: [
      'Quantum Route Optimization',
      'Real-time Supply Chain Tracking',
      'Predictive Demand Forecasting',
      'Automated Inventory Management',
      'Multi-modal Transportation',
      'Cost Optimization Algorithms',
      'Sustainability Analytics',
      'Risk Assessment',
      'Performance Analytics',
      'Custom Integration APIs',
      '24/7 Support',
      'Scalable Architecture'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-logistics" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Truck className="w-10 h-10" />
              {service.name}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-blue-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Platform capabilities</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white">
                    {service.price}<span className="text-slate-400 text-base">{service.period}</span>
                  </div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  {service.rating.toFixed(1)}
                </div>
              </div>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center">
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{service.contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{service.contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-xs">{service.contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

