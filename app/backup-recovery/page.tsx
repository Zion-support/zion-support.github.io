'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, RotateCcw, Database, Clock, CheckCircle, ArrowRight, Star, Award, Zap, AlertTriangle } from 'lucide-react';

const BackupRecoveryPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Automated Backups',
      description: 'Automated backup solutions that protect your data without manual intervention.'
    },
    {
      icon: RotateCcw,
      title: 'Quick Recovery',
      description: 'Rapid data recovery with minimal downtime and maximum data integrity.'
    },
    {
      icon: Database,
      title: 'Multiple Storage Options',
      description: 'Local, cloud, and hybrid backup solutions for maximum flexibility and security.'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of backup systems and immediate alert notifications.'
    }
  ];

  const services = [
    {
      title: 'Data Backup',
      description: 'Comprehensive data backup solutions for files, databases, and applications.',
      recovery: '15 min',
      icon: '💾'
    },
    {
      title: 'Disaster Recovery',
      description: 'Complete disaster recovery planning and implementation for business continuity.',
      recovery: '1 hour',
      icon: '🚨'
    },
    {
      title: 'Cloud Backup',
      description: 'Secure cloud backup solutions with encryption and redundancy.',
      recovery: '30 min',
      icon: '☁️'
    },
    {
      title: 'System Recovery',
      description: 'Full system recovery and restoration services for servers and workstations.',
      recovery: '2 hours',
      icon: '🖥️'
    },
    {
      title: 'Database Recovery',
      description: 'Specialized database backup and recovery for SQL Server, MySQL, and Oracle.',
      recovery: '45 min',
      icon: '🗄️'
    },
    {
      title: 'Email Recovery',
      description: 'Email system backup and recovery for Exchange and Office 365.',
      recovery: '20 min',
      icon: '📧'
    }
  ];

  const benefits = [
    'Protect against data loss and corruption',
    'Minimize downtime with rapid recovery',
    'Ensure business continuity and compliance',
    'Reduce recovery time by up to 90%',
    'Automate backup processes for reliability',
    'Scale backup solutions as business grows'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                Backup & Recovery Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your critical data with our comprehensive backup and recovery solutions. 
                Ensure business continuity with automated backups and rapid recovery capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Protect Data
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Free Assessment
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Recovery Success</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">15min</div>
                <div className="text-gray-300">Recovery Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-gray-300">Data Integrity</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Backup Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our backup and recovery solutions provide complete data protection 
                with automated processes and rapid recovery capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Backup & Recovery Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From data backup to disaster recovery, we provide comprehensive 
                protection for all your critical business data and systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.recovery} RTO
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Backup Solutions?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our backup and recovery services provide reliable data protection 
                  that ensures business continuity and compliance.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Recovery Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Recovery Success Rate:</span>
                    <span className="text-green-400 font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Average Recovery Time:</span>
                    <span className="text-green-400 font-semibold">15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Data Integrity:</span>
                    <span className="text-green-400 font-semibold">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Uptime Guarantee:</span>
                    <span className="text-green-400 font-semibold">99.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Protect Your Critical Data</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ensure business continuity with our comprehensive backup and recovery solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Schedule Assessment
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BackupRecoveryPage;