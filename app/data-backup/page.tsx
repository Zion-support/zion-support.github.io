'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Database, Shield, CheckCircle, ArrowRight, Clock, Cloud, HardDrive, AlertTriangle } from 'lucide-react';

const DataBackupPage: React.FC = () => {
  const features = [
    'Automated daily backups',
    'Real-time data replication',
    'Cross-platform compatibility',
    'Encrypted data storage',
    'Point-in-time recovery',
    'Disaster recovery planning',
    'Compliance with regulations',
    '24/7 monitoring and alerts'
  ];

  const benefits = [
    'Protect against data loss',
    'Ensure business continuity',
    'Meet compliance requirements',
    'Reduce recovery time',
    'Automated backup processes',
    'Secure data storage'
  ];

  return (
    <>
      <Helmet>
        <title>Data Backup Services - Zion Tech Group | Secure Data Protection</title>
        <meta name="description" content="Protect your critical data with our comprehensive backup solutions. Automated backups, disaster recovery, and secure data storage." />
        <meta name="keywords" content="data backup, disaster recovery, data protection, backup solutions, data security, business continuity" />
        <meta property="og:title" content="Data Backup Services - Zion Tech Group" />
        <meta property="og:description" content="Secure data backup and disaster recovery solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/data-backup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Backup</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Protect your critical data with our comprehensive backup solutions. Automated backups, disaster recovery, and secure data storage to ensure business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Database className="w-5 h-5" />
                Get Started
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Data Backup Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Backup Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Backup Success Rate</span>
                    <span className="text-green-400 font-semibold">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Recovery Time</span>
                    <span className="text-cyan-400 font-semibold">&lt; 4 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Data Retention</span>
                    <span className="text-purple-400 font-semibold">7+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Protect Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a disaster. Secure your data with our comprehensive backup solutions today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Database className="w-5 h-5" />
                  Get Started Today
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataBackupPage;