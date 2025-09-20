import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';

import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function AutonomousManufacturingPage() {
=======
  const service = {
    name: 'Autonomous Manufacturing Solutions',
    description: 'Revolutionary AI-powered manufacturing automation that transforms production efficiency and quality control.',
    tagline: 'Transform your manufacturing with intelligent automation and predictive analytics',
    price: '$15,000',
    period: '/month',
    trialDays: 30,
    setupTime: '2 weeks',
    rating: 4.8,
    marketSize: '$45B',
    growthRate: '25% YoY',
    features: [
      'AI-Powered Quality Control',
      'Predictive Maintenance',
      'Automated Production Planning',
      'Real-time Performance Monitoring',
      'Supply Chain Optimization',
      'Energy Efficiency Management',
      'Worker Safety Systems',
      'Inventory Management',
      'Production Analytics',
      'Remote Monitoring',
      'Custom Workflow Automation',
      'Integration with Existing Systems'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  };

  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/autonomous-manufacturing" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-orange-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">What you get</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-orange-400 mt-0.5"><Check /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-orange-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
=======
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{(service.rating || 4.5).toFixed(1)}</div>
=======
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  {service.rating.toFixed(1)}
                </div>
              </div>
              <div className="text-slate-300 text-sm mb-4">Market: {service.marketSize}, Growth: {service.growthRate}</div>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Get a Demo<ArrowRight /></a>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2 w-4 h-4 text-cyan-400"><Phone /><span>{contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>{contactInfo.email}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
=======
                <div className="flex items-center space-x-2 w-4 h-4 text-cyan-400"><Phone /><span>+1 (555) 123-4567</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>contact@ziontechgroup.com</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span>123 Innovation Drive, Tech City, TC 12345</span></div>
=======
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
    </Layout>
  );
}

