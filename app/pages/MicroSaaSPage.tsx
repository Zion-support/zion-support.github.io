'use client';

import React from 'react';
import SEOEnhancer from '../components/SEOEnhancer';
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
      title: "Micro Frontend",
      description: "Build scalable micro frontend applications with modern frameworks.",
      features: ['Component isolation', 'Independent deployment', 'Technology diversity', 'Team autonomy']
    },
    {
      icon: CpuChipIcon,
      title: "Micro Backend",
      description: "Develop microservices architecture for robust backend systems.",
      features: ['Service decomposition', 'API gateway', 'Service discovery', 'Load balancing']
    },
    {
      icon: ChartBarIcon,
      title: "Analytics & Monitoring",
      description: "Comprehensive monitoring and analytics for your microservices.",
      features: ['Performance metrics', 'Error tracking', 'User analytics', 'Business intelligence']
    },
    {
      icon: RocketLaunchIcon,
      title: "Deployment & DevOps",
      description: "Streamlined deployment and DevOps practices for microservices.",
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as code', 'Automated testing']
    }
  ];

  return (
    <React.Fragment>
      <SEOEnhancer
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Comprehensive micro SaaS solutions including micro frontend, backend, and DevOps services."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Micro SaaS Solutions</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Build scalable, maintainable micro SaaS applications with our comprehensive development services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
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
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Micro SaaS?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Scalability</h3>
                <p className="text-gray-300">Scale individual services independently based on demand.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Maintainability</h3>
                <p className="text-gray-300">Easier to maintain and update individual components.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Team Productivity</h3>
                <p className="text-gray-300">Teams can work independently on different services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}