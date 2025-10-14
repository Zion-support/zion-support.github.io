'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSPage() {
  const services = [
    {
      icon: GlobeAltIcon,
      title: "Custom Micro SaaS Development",
      description: "Tailored micro SaaS solutions designed to solve specific business challenges with scalable architecture.",
      features: ['Custom development', 'Scalable architecture', 'API integration', 'Multi-tenant support']
    },
    {
      icon: CpuChipIcon,
      title: "AI-Powered Micro SaaS",
      description: "Intelligent micro SaaS applications powered by artificial intelligence and machine learning.",
      features: ['AI integration', 'Machine learning', 'Automated workflows', 'Smart analytics']
    },
    {
      icon: ChartBarIcon,
      title: "Analytics & Insights",
      description: "Comprehensive analytics and insights for your micro SaaS application to drive growth.",
      features: ['Real-time analytics', 'User behavior tracking', 'Performance metrics', 'Custom dashboards']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Custom micro SaaS development and AI-powered solutions for modern businesses"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build powerful micro SaaS applications that solve specific business challenges with our custom development services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <service.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}