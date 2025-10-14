'use client';

import React from 'react';
import SEOEnhancer from '../components/SEOEnhancer';
import {
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function CloudSolutionsPage() {
  const services = [
    {
      icon: CloudIcon,
      title: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud with minimal downtime.",
      features: ['Assessment & planning', 'Data migration', 'Application modernization', 'Performance optimization']
    },
    {
      icon: ServerIcon,
      title: "Infrastructure Management",
      description: "Complete management of your cloud infrastructure with 24/7 monitoring and support.",
      features: ['Server provisioning', 'Load balancing', 'Auto-scaling', 'Backup & recovery']
    },
    {
      icon: CpuChipIcon,
      title: "Container Solutions",
      description: "Docker and Kubernetes solutions for modern application deployment and management.",
      features: ['Container orchestration', 'Microservices architecture', 'CI/CD pipelines', 'Service mesh']
    },
    {
      icon: ChartBarIcon,
      title: "Cloud Analytics",
      description: "Advanced analytics and monitoring solutions for your cloud infrastructure and applications.",
      features: ['Performance monitoring', 'Cost optimization', 'Security analytics', 'Predictive insights']
    }
  ];

  const platforms = [
    { name: "Amazon Web Services (AWS)", logo: "AWS" },
    { name: "Microsoft Azure", logo: "Azure" },
    { name: "Google Cloud Platform", logo: "GCP" },
    { name: "IBM Cloud", logo: "IBM" },
    { name: "Oracle Cloud", logo: "Oracle" },
    { name: "DigitalOcean", logo: "DO" }
  ];

  return (
    <React.Fragment>
      <SEOEnhancer
        title="Cloud Solutions - Zion Tech Group"
        description="Comprehensive cloud solutions including migration, infrastructure management, and analytics."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Cloud Solutions</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Transform your business with our comprehensive cloud solutions designed for scalability, security, and performance.
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
            <h2 className="text-3xl font-bold text-white mb-8">Supported Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-white font-semibold">{platform.logo}</div>
                  <div className="text-gray-300 text-sm">{platform.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}