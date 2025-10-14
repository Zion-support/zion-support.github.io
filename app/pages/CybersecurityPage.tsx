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
      title: "Advanced Threat Protection",
      description: "Comprehensive security solutions to protect against malware, ransomware, and advanced persistent threats.",
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', '24/7 monitoring']
    },
    {
      icon: LockClosedIcon,
      title: "Data Encryption & Privacy",
      description: "End-to-end encryption and privacy protection for sensitive data and communications.",
      features: ['AES-256 encryption', 'Zero-knowledge architecture', 'Secure key management', 'Compliance support']
    },
    {
      icon: EyeIcon,
      title: "Security Monitoring",
      description: "Continuous monitoring and analysis of your security posture with real-time alerts.",
      features: ['SIEM solutions', 'Log analysis', 'Incident response', 'Security dashboards']
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Vulnerability Assessment",
      description: "Regular security assessments and penetration testing to identify and fix vulnerabilities.",
      features: ['Automated scanning', 'Manual testing', 'Risk assessment', 'Remediation guidance']
    }
  ];

  const complianceStandards = [
    "ISO 27001",
    "SOC 2",
    "GDPR",
    "HIPAA",
    "PCI DSS",
    "NIST Framework"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO title="Cybersecurity Solutions - Zion Tech Group" description="Advanced cybersecurity services and solutions" />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Cybersecurity Solutions</h1>
          <p className="text-gray-300 text-lg">Protect your business with our comprehensive security services</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg">
              <service.icon className="h-8 w-8 text-red-400 mb-4" />
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

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Compliance Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-slate-800 p-4 rounded-lg text-center">
                <div className="text-white font-semibold">{standard}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}