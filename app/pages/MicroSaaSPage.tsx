'use client';

import React from 'react';
import SEO from '../components/SEO';
import {
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSPage() {
  const services = [
    {
      icon: GlobeAltIcon,
      title: "Micro-SaaS Development",
      description: "Build focused, single-purpose SaaS applications that solve specific business problems.",
      features: ['Rapid prototyping', 'Scalable architecture', 'API-first design', 'Multi-tenant support']
    },
    {
      icon: CpuChipIcon,
      title: "Cloud Infrastructure",
      description: "Deploy and manage your micro-SaaS with reliable, scalable cloud infrastructure.",
      features: ['Auto-scaling', 'Load balancing', 'Database management', 'Monitoring & alerts']
    },
    {
      icon: ChartBarIcon,
      title: "Analytics & Insights",
      description: "Track user behavior and business metrics with comprehensive analytics.",
      features: ['User analytics', 'Revenue tracking', 'Performance metrics', 'Custom dashboards']
    },
    {
      icon: RocketLaunchIcon,
      title: "Launch & Growth",
      description: "Go to market quickly with our proven launch strategies and growth tools.",
      features: ['MVP development', 'Marketing automation', 'User onboarding', 'Growth optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO title="Micro-SaaS Solutions - Zion Tech Group" description="Build and scale micro-SaaS applications" />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Micro-SaaS Solutions</h1>
          <p className="text-gray-300 text-lg">Build focused, profitable SaaS applications</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg">
              <service.icon className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}