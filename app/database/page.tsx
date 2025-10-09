'use client';
import React from 'react';
import { Database, Zap, CheckCircle, TrendingUp, Star, Users, Award, Target, ArrowRight, Search, Eye, Shield, Cloud } from 'lucide-react';
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
      description: 'Custom database architecture and schema design',
      features: ['Schema Design', 'Index Optimization', 'Data Modeling', 'Performance Tuning'],
      benefits: ['300% performance boost', 'Optimized queries', 'Scalable design']
    },
    {
      title: 'Performance Tuning',
      description: 'AI-powered database optimization and performance enhancement',
      features: ['Query Optimization', 'Index Analysis', 'Resource Monitoring', 'Auto-tuning'],
      benefits: ['10x faster queries', 'Reduced resource usage', 'Automated optimization']
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive data protection and disaster recovery solutions',
      features: ['Automated Backups', 'Point-in-time Recovery', 'Cross-region Replication', 'Testing & Validation'],
      benefits: ['Zero data loss', 'Fast recovery', 'Business continuity']
    },
    {
      title: 'Security Hardening',
      description: 'Advanced database security and compliance solutions',
      features: ['Access Control', 'Encryption', 'Audit Logging', 'Compliance Monitoring'],
      benefits: ['Bank-level security', 'Compliance ready', 'Audit trails']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      application: 'High-Performance Database',
      result: '50% faster page loads',
      description: 'Optimized database architecture supporting millions of transactions per day'
    },
    {
      industry: 'Healthcare',
      application: 'HIPAA Compliant Database',
      result: '100% compliance achievement',
      description: 'Secure, encrypted database systems meeting healthcare compliance requirements'
    },
    {
      industry: 'Finance',
      application: 'Real-time Analytics',
      result: '99.9% uptime',
      description: 'High-availability database systems for real-time financial data processing'
    },
    {
      industry: 'SaaS',
      application: 'Multi-tenant Database',
      result: '80% cost reduction',
      description: 'Efficient multi-tenant database architecture with data isolation and performance optimization'
    }
  ];

  const databases = [
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server',
    'Cassandra', 'DynamoDB', 'Elasticsearch', 'InfluxDB', 'Neo4j', 'CouchDB'
  ];

  const stats = [
    { label: 'Performance Boost', value: '300%', icon: Zap },
    { label: 'Uptime Achieved', value: '99.9%', icon: Target },
    { label: 'Data Recovery', value: '100%', icon: Shield },
    { label: 'Cost Reduction', value: '60%', icon: TrendingUp }
  ];

  return (
    <>
      <SEOOptimizer
        title="Database Services - Zion Tech Group"
        description="Comprehensive database services including design, optimization, backup & recovery, and security. Expert database management and performance tuning."
        keywords={['database services', 'database design', 'performance tuning', 'backup recovery', 'database security', 'database optimization']}
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
              Optimize, Secure, and Scale Your Data Infrastructure
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Our database services help businesses design, optimize, and secure their data infrastructure 
              with AI-powered performance tuning and comprehensive backup solutions.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Database Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Database Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {databaseServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Real-World Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                      <p className="text-cyan-400 font-medium">{useCase.application}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-3">
                    <p className="text-green-400 font-semibold">Result: {useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Database Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Database Technologies
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4">
              {databases.map((db, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <span className="text-gray-300 font-medium text-sm">{db}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our Database Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Analysis', description: 'Analyze current database performance', icon: Search },
                { step: '2', title: 'Design', description: 'Design optimized database architecture', icon: Database },
                { step: '3', title: 'Implementation', description: 'Implement and optimize database', icon: Zap },
                { step: '4', title: 'Monitoring', description: 'Monitor and maintain performance', icon: Eye }
              ].map((step, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Database?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our database experts help you build a high-performance, secure data infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
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