'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityPage() {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: "Advanced Threat Protection",
      description: "Comprehensive security solutions to protect against malware, ransomware, and advanced persistent threats.",
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', '24/7 monitoring']
    },
    {
      icon: LockClosedIcon,
      title: "Data Encryption & Privacy",
      description: "End-to-end encryption and privacy protection for sensitive data and communications.",
      features: ['AES-256 encryption', 'Key management', 'Compliance support', 'Secure communications']
    },
    {
      icon: EyeIcon,
      title: "Security Monitoring",
      description: "Continuous monitoring and analysis of your security posture with real-time alerts.",
      features: ['SIEM integration', 'Log analysis', 'Incident response', 'Security dashboards']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Advanced cybersecurity solutions to protect your business from evolving threats"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your business with our comprehensive cybersecurity services designed to defend against evolving threats
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