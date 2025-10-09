'use client';
import React from 'react';
import { Database, Shield, Zap, Target, BarChart, Cloud, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DatabasePage: React.FC = () => {
  const features = [
    {
      title: 'Database Design',
      description: 'Custom database design and architecture for optimal performance',
      icon: Database,
      benefits: ['Optimized design', 'Scalable architecture', 'Performance tuning']
    },
    {
      title: 'Performance Tuning',
      description: 'Database optimization and performance enhancement',
      icon: Zap,
      benefits: ['Query optimization', 'Index optimization', 'Resource tuning']
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup and disaster recovery solutions',
      icon: Shield,
      benefits: ['Automated backups', 'Point-in-time recovery', 'Disaster recovery']
    },
    {
      title: 'Security Hardening',
      description: 'Database security implementation and hardening',
      icon: Target,
      benefits: ['Access control', 'Encryption', 'Audit logging']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Database Services - Zion Tech Group"
        description="Comprehensive database services including design, performance tuning, backup & recovery, and security hardening. Optimize your database infrastructure."
        keywords={['database services', 'database design', 'performance tuning', 'backup recovery', 'database security', 'database optimization']}
        canonicalUrl="https://ziontechgroup.com/database"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Database Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your database infrastructure with our comprehensive database services. 
              From design to security, we ensure your data is fast, secure, and reliable.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$899/month</div>
            <p className="text-gray-300">Complete database management</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Database Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Optimize Your Database Infrastructure</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our database services have improved performance by 300% and reduced downtime by 99%. 
                Let's optimize your database for maximum performance and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Optimize Your Database
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