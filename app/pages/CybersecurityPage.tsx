'use client';

import React from 'react';
import SEO from '../components/SEO';
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
      description: "Comprehensive security audits to identify vulnerabilities and risks in your infrastructure.",
      features: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment', 'Compliance auditing']
    },
    {
      icon: LockClosedIcon,
      title: "Data Protection",
      description: "Advanced encryption and data protection solutions to secure your sensitive information.",
      features: ['Data encryption', 'Access controls', 'Backup security', 'Data loss prevention']
    },
    {
      icon: EyeIcon,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and threat detection to keep your systems safe.",
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security analytics']
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Incident Response",
      description: "Rapid response and recovery services to minimize damage from security incidents.",
      features: ['Emergency response', 'Forensic analysis', 'Recovery planning', 'Post-incident review']
    }
  ];

  const threats = [
    { name: "Malware Protection", description: "Advanced anti-malware solutions" },
    { name: "Phishing Prevention", description: "Email and web filtering systems" },
    { name: "DDoS Mitigation", description: "Traffic filtering and load balancing" },
    { name: "Insider Threats", description: "User behavior monitoring" },
    { name: "Zero-Day Attacks", description: "Behavioral analysis and AI detection" },
    { name: "Social Engineering", description: "Security awareness training" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-8">Cybersecurity Solutions</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Protect your business with our comprehensive cybersecurity solutions. From threat detection 
            to incident response, we provide complete security coverage for your digital assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <service.icon className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Threat Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{threat.name}</h3>
                <p className="text-gray-300 text-sm">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}