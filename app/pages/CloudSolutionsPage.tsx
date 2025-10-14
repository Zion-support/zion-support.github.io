'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon
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
      features: ['Auto-scaling', 'Load balancing', 'Security management', 'Cost optimization']
    },
    {
      icon: CpuChipIcon,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      features: ['Identity management', 'Data encryption', 'Threat detection', 'Compliance support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Cloud Solutions - Zion Tech Group"
        description="Comprehensive cloud solutions for modern businesses"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions designed for scalability and performance
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