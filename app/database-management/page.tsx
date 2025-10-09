'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Database, Shield, Zap, CheckCircle, ArrowRight, Star, Globe, Smartphone, Code, Cloud, Lock, Users, Target, TrendingUp, Brain, Settings, BarChart } from 'lucide-react';

const DatabaseManagementPage: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Comprehensive database administration services for MySQL, PostgreSQL, MongoDB, and other database systems.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implement robust security measures, encryption, and compliance with industry standards and regulations.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize database performance through indexing, query optimization, and resource tuning.'
    },
    {
      icon: BarChart,
      title: 'Monitoring & Analytics',
      description: 'Real-time monitoring, performance analytics, and proactive issue detection and resolution.'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Migrate databases to cloud platforms with zero downtime and data integrity guarantees.'
    },
    {
      icon: Settings,
      title: 'Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning to protect your critical data.'
    }
  ];

  const capabilities = [
    {
      title: 'Multi-Database Support',
      description: 'Support for SQL and NoSQL databases including MySQL, PostgreSQL, MongoDB, Redis, and more.',
      icon: Database
    },
    {
      title: 'High Availability',
      description: 'Implement clustering, replication, and failover solutions for maximum uptime.',
      icon: Shield
    },
    {
      title: 'Scalability Planning',
      description: 'Design and implement scalable database architectures that grow with your business.',
      icon: TrendingUp
    },
    {
      title: 'Data Migration',
      description: 'Seamless migration between database systems with data validation and integrity checks.',
      icon: ArrowRight
    },
    {
      title: 'Query Optimization',
      description: 'Analyze and optimize database queries for improved performance and reduced costs.',
      icon: Zap
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support to ensure your databases run smoothly.',
      icon: Users
    }
  ];

  const benefits = [
    'Improve database performance by up to 70%',
    'Reduce downtime and data loss risks',
    'Enhance security and compliance posture',
    'Lower operational costs and complexity',
    'Enable better scalability and growth',
    'Provide expert database expertise'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <Database className="w-4 h-4 mr-2" />
              Database Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Database
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Management</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize, secure, and manage your databases with expert administration services that ensure peak performance, security, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
                Schedule Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Database Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our database management experts provide end-to-end services to keep your databases running optimally and securely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Database Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From performance tuning to disaster recovery, our database services cover every aspect of database management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Measurable Database Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our database management services deliver quantifiable results that improve performance, security, and reliability.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">70%</div>
                <div className="text-gray-300 mb-6">Performance Improvement</div>
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 mb-6">Uptime Guarantee</div>
                <div className="text-4xl font-bold text-white mb-2">Zero</div>
                <div className="text-gray-300">Data Loss</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Databases?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free database assessment and discover how we can improve your database performance, security, and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatabaseManagementPage;