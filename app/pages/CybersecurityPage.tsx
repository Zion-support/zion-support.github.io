'use client';
import React from 'react';
import { Link } from 'react-router-dom';
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
      title: 'Security Assessment',
      description: 'Comprehensive security evaluation of your systems and infrastructure.',
      features: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment', 'Compliance audit']
    },
    {
      icon: LockClosedIcon,
      title: 'Data Protection',
      description: 'Advanced encryption and data security solutions to protect your sensitive information.',
      features: ['Data encryption', 'Access controls', 'Backup security', 'Data loss prevention']
    },
    {
      icon: EyeIcon,
      title: 'Monitoring & Detection',
      description: '24/7 security monitoring and threat detection to keep your systems safe.',
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security analytics']
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Incident Response',
      description: 'Rapid response and recovery services when security incidents occur.',
      features: ['Emergency response', 'Forensic analysis', 'Recovery planning', 'Post-incident review']
    }
  ];

  const threats = [
    'Malware & Ransomware',
    'Phishing Attacks',
    'DDoS Attacks',
    'Insider Threats',
    'Advanced Persistent Threats',
    'Social Engineering'
  ];

  return (
    <React.Fragment>
      <SEO
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Comprehensive cybersecurity solutions to protect your business from evolving threats."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-600 to-purple-700 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cybersecurity Solutions</h1>
              <p className="text-xl md:text-2xl text-red-100 mb-8">
                Protect your business from evolving cyber threats
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                >
                  Get Security Assessment
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Security Services</h2>
              <p className="text-xl text-gray-300">
                Comprehensive cybersecurity solutions tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                  <service.icon className="h-12 w-12 text-red-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
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
          </div>
        </div>

        {/* Threats Section */}
        <div className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Threats We Protect Against</h2>
              <p className="text-xl text-gray-300">
                Stay ahead of the latest cybersecurity threats
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {threats.map((threat, index) => (
                <div key={index} className="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600 transition-colors">
                  <ExclamationTriangleIcon className="h-8 w-8 text-red-400 mx-auto mb-2" />
                  <p className="text-sm font-medium">{threat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Business Today</h2>
              <p className="text-xl text-red-100 mb-8">
                Don't wait for a breach. Let our experts help you build a robust security posture
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                >
                  Get Security Assessment
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}