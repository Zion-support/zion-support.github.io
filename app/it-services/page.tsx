'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ITServicesPage() {
  const itServices = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime',
      price: 'Starting at $2,500',
      features: ['Zero-downtime migration', 'Cost optimization', 'Security compliance', '24/7 support'],
      category: 'Cloud Services',
      icon: '☁️',
      link: '/cloud-migration'
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Audit & Assessment',
      description: 'Comprehensive security assessment and vulnerability testing',
      price: 'Starting at $1,500',
      features: ['Penetration testing', 'Vulnerability assessment', 'Compliance audit', 'Security roadmap'],
      category: 'Security',
      icon: '🔒',
      link: '/cybersecurity-audit'
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation',
      description: 'Complete CI/CD pipeline setup and infrastructure automation',
      price: 'Starting at $3,000',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring setup', 'Team training'],
      category: 'DevOps',
      icon: '🚀',
      link: '/devops-automation'
    },
    {
      id: 'database-optimization',
      title: 'Database Optimization',
      description: 'Performance tuning and optimization for MySQL, PostgreSQL, and MongoDB',
      price: 'Starting at $1,200',
      features: ['Performance analysis', 'Query optimization', 'Index tuning', 'Monitoring setup'],
      category: 'Database',
      icon: '🗄️',
      link: '/database-optimization'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 quantum-gradient">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services to modernize and secure your infrastructure. 
              From cloud migration to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+13024640950" 
                className="cyber-card px-6 py-3 text-white hover:text-cyan-400 transition-all duration-300"
              >
                📞 Call Now: +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="quantum-card px-6 py-3 text-white hover:text-cyan-400 transition-all duration-300"
              >
                ✉️ Email: kleber@ziontechgroup.com
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {itServices.map((service) => (
                <div key={service.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    className="block w-full text-center quantum-card py-3 text-white hover:text-cyan-400 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="hologram-card p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions</p>
              </div>
              <div className="hologram-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Fast Delivery</h3>
                <p className="text-gray-300">Rapid deployment and implementation with minimal business disruption</p>
              </div>
              <div className="hologram-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance for your critical infrastructure</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8 quantum-gradient">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free IT assessment and discover how we can optimize your technology stack 
              for better performance, security, and cost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+13024640950" 
                className="cyber-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300"
              >
                📞 Call: +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="quantum-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300"
              >
                ✉️ Email: kleber@ziontechgroup.com
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}