'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Database, Clock, CheckCircle, ArrowRight, Zap, Globe, Target, Users, AlertTriangle } from 'lucide-react';

const BackupRecoveryPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Automated Backups',
      description: 'Automated, scheduled backups to ensure your data is always protected'
    },
    {
      icon: Database,
      title: 'Multiple Storage Options',
      description: 'Local, cloud, and hybrid backup solutions for maximum flexibility'
    },
    {
      icon: Clock,
      title: 'Point-in-Time Recovery',
      description: 'Restore your data to any specific point in time with precision'
    },
    {
      icon: CheckCircle,
      title: 'Data Integrity',
      description: 'Advanced verification ensures your backups are complete and uncorrupted'
    }
  ];

  const services = [
    'Automated backup scheduling',
    'Real-time data replication',
    'Disaster recovery planning',
    'Data migration services',
    'Backup testing and validation',
    '24/7 monitoring and alerts',
    'Compliance reporting',
    'Custom recovery procedures'
  ];

  return (
    <>
      <Helmet>
        <title>Backup & Recovery | Zion Tech Group</title>
        <meta name="description" content="Comprehensive backup and disaster recovery solutions by Zion Tech Group. Protect your data with enterprise-grade backup services." />
        <meta name="keywords" content="backup services, disaster recovery, data protection, business continuity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Backup & Recovery
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your critical data with our comprehensive backup and disaster recovery solutions.
              Ensure business continuity with enterprise-grade data protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Shield className="mr-2 h-5 w-5" />
                Get Protected
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Emergency Recovery
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Backup Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {services.slice(0, 4).map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {services.slice(4).map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Recovery Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Detection</h3>
                <p className="text-gray-300">Immediate detection of data loss or system failure</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Assessment</h3>
                <p className="text-gray-300">Rapid assessment of the situation and recovery options</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Recovery</h3>
                <p className="text-gray-300">Fast and reliable data recovery with minimal downtime</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Don't Wait for Disaster
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Protect your business today with our comprehensive backup and recovery solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Database className="mr-2 h-5 w-5" />
                Start Backup Plan
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Contact Expert
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BackupRecoveryPage;