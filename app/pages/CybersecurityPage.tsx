'use client';

import React from 'react';
import SEOEnhancer from '../components/SEOEnhancer';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityPage() {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: "Security Assessment",
      description: "Comprehensive security evaluation of your systems and infrastructure.",
      features: ['Vulnerability scanning', 'Penetration testing', 'Compliance auditing', 'Risk assessment']
    },
    {
      icon: LockClosedIcon,
      title: "Data Protection",
      description: "Advanced encryption and data protection solutions for sensitive information.",
      features: ['Data encryption', 'Access controls', 'Backup security', 'Compliance management']
    },
    {
      icon: EyeIcon,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and threat detection services.",
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security analytics']
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Incident Response",
      description: "Rapid response and recovery services for security incidents.",
      features: ['Emergency response', 'Forensic analysis', 'Recovery planning', 'Post-incident review']
    }
  ];

  return (
    <React.Fragment>
      <SEOEnhancer
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including assessment, monitoring, and incident response."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Cybersecurity Solutions</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Protect your business with our comprehensive cybersecurity solutions designed for modern threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <service.icon className="h-12 w-12 text-red-400 mb-4" />
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
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Security Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Certified security professionals with years of experience.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Latest Technology</h3>
                <p className="text-gray-300">Cutting-edge security tools and technologies.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock monitoring and support services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}