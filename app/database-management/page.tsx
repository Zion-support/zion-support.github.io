'use client';
import React from 'react';
import Link from 'next/link';
import { Database, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Clock, Settings, TrendingUp } from 'lucide-react';

const DatabaseManagementPage: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Comprehensive database management and optimization services',
      benefits: ['Performance tuning', 'Backup & recovery', 'Security hardening']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Advanced security measures to protect your valuable data',
      benefits: ['Encryption at rest', 'Access controls', 'Audit logging']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize database performance for maximum efficiency',
      benefits: ['Query optimization', 'Index tuning', 'Resource monitoring']
    }
  ];

  const databaseTypes = [
    {
      title: 'SQL Databases',
      description: 'MySQL, PostgreSQL, SQL Server, and Oracle database management',
      icon: Database,
      features: ['Schema design', 'Query optimization', 'Replication setup']
    },
    {
      title: 'NoSQL Databases',
      description: 'MongoDB, Cassandra, and other NoSQL database solutions',
      icon: TrendingUp,
      features: ['Document design', 'Sharding strategies', 'Performance tuning']
    },
    {
      title: 'Cloud Databases',
      description: 'AWS RDS, Azure SQL, and Google Cloud SQL management',
      icon: Settings,
      features: ['Cloud migration', 'Auto-scaling', 'Cost optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                Database Management
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Optimize your database performance and security with our expert database management services. 
              Ensure 99.9% uptime, maximum performance, and bulletproof security for your critical data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Optimize Your Database
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Database Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our database management services cover every aspect of database administration, 
              from setup to optimization and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Database Types Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Database Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert management for all types of databases and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {databaseTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <type.icon className="w-8 h-8 text-teal-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Database Management?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">99.9% Uptime</h3>
                    <p className="text-gray-300">Guaranteed database availability and reliability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                    <p className="text-gray-300">Bank-level security with encryption and access controls</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
                    <p className="text-gray-300">Round-the-clock monitoring and support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Optimize Your Database?</h3>
              <p className="text-gray-300 mb-6">
                Get a free database performance assessment and discover how we can 
                improve your database performance and security.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="cyber-button w-full inline-flex items-center justify-center py-3"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't Let Database Issues Slow You Down
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Poor database performance can cripple your business. Our expert database management 
            services will keep your data fast, secure, and reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseManagementPage;