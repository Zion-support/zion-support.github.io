'use client';
import React from 'react';
import { Database, ArrowRight, CheckCircle, Star, Zap, Server, Shield, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DatabasePage: React.FC = () => {
  const databaseServices = [
    {
      title: 'Database Design',
      description: 'Custom database architecture and schema design for optimal performance',
      icon: Server,
      features: ['Schema Design', 'Index Optimization', 'Data Modeling', 'Performance Tuning']
    },
    {
      title: 'Performance Tuning',
      description: 'Optimize database performance with AI-powered tuning and monitoring',
      icon: BarChart,
      features: ['Query Optimization', 'Index Analysis', 'Resource Monitoring', 'Automated Tuning']
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup and disaster recovery solutions for data protection',
      icon: Shield,
      features: ['Automated Backups', 'Point-in-time Recovery', 'Disaster Recovery', 'Data Replication']
    },
    {
      title: 'Security Hardening',
      description: 'Advanced security measures to protect your database infrastructure',
      icon: Database,
      features: ['Access Control', 'Encryption', 'Audit Logging', 'Compliance Management']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Database Services - Zion Tech Group"
        description="Comprehensive database services including design, performance tuning, backup & recovery, and security. Optimize your database infrastructure for maximum performance."
        keywords={['database services', 'database design', 'performance tuning', 'backup recovery', 'database security']}
        canonicalUrl="https://ziontechgroup.com/database"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Database Services
            </h1>
            <p className="text-xl text-purple-400 mb-8 font-medium neon-pulse">
              Optimize Your Database Infrastructure for Maximum Performance
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our database experts help you design, optimize, and secure your database infrastructure. 
              From performance tuning to disaster recovery, we ensure your data is always available and secure.
            </p>
          </section>

          {/* Database Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {databaseServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Database Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Knowledge</h3>
                <p className="text-gray-300">
                  Certified database administrators with expertise in MySQL, PostgreSQL, MongoDB, and more.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Performance Boost</h3>
                <p className="text-gray-300">
                  Improve database performance by up to 300% through optimization and tuning.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Protection</h3>
                <p className="text-gray-300">
                  Ensure 99.99% data availability with comprehensive backup and recovery solutions.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Optimize Your Database?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our database experts today to discuss how we can optimize your database infrastructure for maximum performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                +1 302 464 0950
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