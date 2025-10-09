'use client';
import React from 'react';
import { Database, Zap, Shield, BarChart, Settings, Cloud } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const DatabasePage: React.FC = () => {
  const databaseServices = [
    {
      title: 'Database Design',
      description: 'Custom database architecture and design for optimal performance and scalability',
      icon: Database,
      features: ['Schema Design', 'Index Optimization', 'Data Modeling', 'Performance Tuning'],
      benefits: ['60% performance boost', 'Scalable architecture', 'Optimized queries']
    },
    {
      title: 'Performance Tuning',
      description: 'AI-powered database optimization for maximum performance and efficiency',
      icon: Zap,
      features: ['Query Optimization', 'Index Analysis', 'Resource Monitoring', 'Auto-tuning'],
      benefits: ['80% faster queries', 'Reduced resource usage', 'Automated optimization']
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup and disaster recovery solutions for data protection',
      icon: Shield,
      features: ['Automated Backups', 'Point-in-time Recovery', 'Disaster Recovery', 'Data Validation'],
      benefits: ['Zero data loss', 'Rapid recovery', 'Automated processes']
    },
    {
      title: 'Security Hardening',
      description: 'Advanced security measures to protect your database from threats',
      icon: Settings,
      features: ['Access Control', 'Encryption', 'Audit Logging', 'Compliance'],
      benefits: ['Enterprise security', 'Compliance ready', 'Audit trails']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Database Services - Zion Tech Group"
        description="Comprehensive database services including design, performance tuning, backup & recovery, and security hardening. Optimize your database performance and reliability."
        keywords={['database services', 'database design', 'performance tuning', 'backup recovery', 'database security']}
        canonicalUrl="https://ziontechgroup.com/database"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Database Services
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Optimize Your Database Performance and Reliability
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our database services help you design, optimize, and secure your databases for maximum 
              performance, reliability, and scalability using AI-powered tools and best practices.
            </p>
          </section>

          {/* Database Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {databaseServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Database?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our database experts help you build high-performance, secure, and scalable database solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Database Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DatabasePage;