'use client';
import React from 'react';
import { Database, Shield, Zap, BarChart, Settings, Lock, Cloud, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DatabasePage: React.FC = () => {
  const databaseServices = [
    {
      title: 'Database Design',
      description: 'Custom database architecture and schema design for optimal performance',
      icon: Database,
      features: ['Schema Design', 'Performance Optimization', 'Scalability Planning', 'Data Modeling']
    },
    {
      title: 'Performance Tuning',
      description: 'AI-powered database optimization and performance enhancement',
      icon: Zap,
      features: ['Query Optimization', 'Index Tuning', 'Resource Management', 'Performance Monitoring']
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup strategies and disaster recovery solutions',
      icon: Shield,
      features: ['Automated Backups', 'Point-in-Time Recovery', 'Disaster Recovery', 'Data Replication']
    },
    {
      title: 'Security Hardening',
      description: 'Database security implementation and compliance management',
      icon: Lock,
      features: ['Access Control', 'Encryption', 'Audit Logging', 'Compliance Management']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Database Services - Zion Tech Group"
        description="Comprehensive database services including design, performance tuning, backup & recovery, and security. Optimize your database infrastructure."
        keywords={['database services', 'database design', 'performance tuning', 'backup recovery', 'database security', 'data management']}
        canonicalUrl="https://ziontechgroup.com/database"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Database Services
            </h1>
            <p className="text-xl text-teal-400 mb-8 font-medium">
              Optimize Your Data Infrastructure
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive database services to design, optimize, and secure your data infrastructure. 
              From performance tuning to disaster recovery, we keep your data running smoothly.
            </p>
          </section>

          {/* Database Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {databaseServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-teal-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our Database Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">High Performance</h3>
                <p className="text-gray-300">AI-powered optimization techniques that deliver maximum database performance.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Secure & Compliant</h3>
                <p className="text-gray-300">Enterprise-grade security and compliance with industry standards.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Monitoring</h3>
                <p className="text-gray-300">Continuous monitoring and proactive maintenance to prevent issues.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Database?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our database experts help you build a robust, high-performance data infrastructure. 
              Get a free database assessment and discover optimization opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DatabasePage;