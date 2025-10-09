'use client';
import React from 'react';
import { Database, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const DatabasePage: React.FC = () => {
  const databaseServices = [
    {
      title: 'Database Design & Architecture',
      description: 'Design and implement robust database architectures that scale with your business needs.',
      features: ['Schema Design', 'Performance Optimization', 'Scalability Planning', 'Data Modeling', 'Best Practices'],
      benefits: ['Optimal performance', 'Scalable design', 'Data integrity', 'Future-proof architecture']
    },
    {
      title: 'Database Migration',
      description: 'Seamlessly migrate your data between different database systems with zero downtime.',
      features: ['Zero-downtime Migration', 'Data Validation', 'Performance Testing', 'Rollback Planning', 'Documentation'],
      benefits: ['Risk-free migration', 'Improved performance', 'Modern technology', 'Reduced costs']
    },
    {
      title: 'Performance Tuning',
      description: 'Optimize database performance with advanced tuning techniques and monitoring solutions.',
      features: ['Query Optimization', 'Index Tuning', 'Memory Management', 'Connection Pooling', 'Monitoring'],
      benefits: ['Faster queries', 'Better resource utilization', 'Improved user experience', 'Cost savings']
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup and disaster recovery solutions to protect your critical data.',
      features: ['Automated Backups', 'Point-in-time Recovery', 'Disaster Recovery', 'Testing & Validation', 'Compliance'],
      benefits: ['Data protection', 'Business continuity', 'Compliance readiness', 'Peace of mind']
    },
    {
      title: 'Security Hardening',
      description: 'Implement enterprise-grade security measures to protect your database from threats.',
      features: ['Access Control', 'Encryption', 'Audit Logging', 'Vulnerability Assessment', 'Compliance'],
      benefits: ['Enhanced security', 'Regulatory compliance', 'Threat protection', 'Data privacy']
    },
    {
      title: 'Cloud Database Services',
      description: 'Migrate to and manage cloud database services for improved scalability and cost efficiency.',
      features: ['Cloud Migration', 'Managed Services', 'Auto-scaling', 'Cost Optimization', 'Monitoring'],
      benefits: ['Scalability', 'Cost efficiency', 'Managed operations', 'High availability']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Database Services - Design, Migration & Optimization | Zion Tech Group"
        description="Expert database services including design, migration, performance tuning, backup & recovery, and cloud database solutions. Optimize your data infrastructure."
        keywords={['database services', 'database design', 'database migration', 'performance tuning', 'backup recovery', 'cloud database']}
        canonicalUrl="https://ziontechgroup.com/database"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Database Services
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Optimize your data infrastructure with expert database design, migration, and management services
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our database experts help you design, migrate, optimize, and secure your data infrastructure 
              for maximum performance, reliability, and scalability.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {databaseServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Database Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Database Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🐘</div>
                <h3 className="text-xl font-bold text-white mb-3">PostgreSQL</h3>
                <p className="text-gray-300 text-sm">
                  Advanced open-source relational database with JSON support and extensibility.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🐬</div>
                <h3 className="text-xl font-bold text-white mb-3">MySQL</h3>
                <p className="text-gray-300 text-sm">
                  Popular relational database management system for web applications.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔵</div>
                <h3 className="text-xl font-bold text-white mb-3">MongoDB</h3>
                <p className="text-gray-300 text-sm">
                  NoSQL document database for modern applications and real-time analytics.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔴</div>
                <h3 className="text-xl font-bold text-white mb-3">Redis</h3>
                <p className="text-gray-300 text-sm">
                  In-memory data structure store for caching and real-time applications.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🟡</div>
                <h3 className="text-xl font-bold text-white mb-3">Elasticsearch</h3>
                <p className="text-gray-300 text-sm">
                  Distributed search and analytics engine for complex queries and full-text search.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-white mb-3">Cloud Databases</h3>
                <p className="text-gray-300 text-sm">
                  Managed database services on AWS, Azure, and Google Cloud Platform.
                </p>
              </div>
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Performance Improvements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
                <div className="text-gray-300">Query Performance</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Database?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how our database services can improve your data infrastructure performance and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Database Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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