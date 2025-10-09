'use client';
import React from 'react';
import { Database, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const DatabasePage: React.FC = () => {
  const dbServices = [
    {
      title: 'Database Design',
      description: 'Optimized database architecture and schema design',
      features: ['Schema Design', 'Performance Optimization', 'Data Modeling', 'Indexing Strategy']
    },
    {
      title: 'Performance Tuning',
      description: 'Optimize database performance and query efficiency',
      features: ['Query Optimization', 'Index Tuning', 'Performance Monitoring', 'Capacity Planning']
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive data protection and disaster recovery',
      features: ['Automated Backups', 'Point-in-time Recovery', 'Disaster Recovery', 'Data Replication']
    },
    {
      title: 'Data Migration',
      description: 'Seamless data migration between database systems',
      features: ['Schema Migration', 'Data Transfer', 'Validation', 'Zero Downtime']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Database Services - Zion Tech Group"
        description="Comprehensive database services including design, performance tuning, backup & recovery, and data migration. Optimize your data infrastructure."
        keywords={['database services', 'database design', 'performance tuning', 'backup recovery', 'data migration', 'database optimization']}
        canonicalUrl="https://ziontechgroup.com/database"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Database Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Optimize your data infrastructure with our comprehensive database services.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dbServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Database?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your database needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DatabasePage;