'use client';
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'IT Infrastructure',
      price: '$999/month',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee',
      features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      price: '$1,599/month',
      description: 'Advanced security solutions with threat detection and prevention',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Database Services',
      price: '$899/month',
      description: 'Database design, optimization, and management with AI-powered tuning',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text text-center">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 text-center">
            Comprehensive IT solutions for modern businesses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                  className="cyber-button w-full text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ITServicesPage;
