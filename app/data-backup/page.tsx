'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Database, Shield, BarChart, Users, Clock, CheckCircle, ArrowRight, Brain, Cloud, Smartphone, Settings, Target, Lightbulb, Zap, HardDrive, Lock, RefreshCw, Download, Upload } from 'lucide-react';

const DataBackupPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Backup Services | Zion Tech Group</title>
        <meta name="description" content="Professional data backup and recovery services with automated backup solutions, cloud storage, and disaster recovery planning for business continuity." />
        <meta name="keywords" content="data backup, backup services, disaster recovery, cloud backup, data protection, business continuity" />
        <link rel="canonical" href="https://ziontechgroup.com/data-backup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Data Backup
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive data backup and recovery services with automated backup solutions, cloud storage, and disaster recovery planning for complete business continuity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Backup Assessment
                </button>
                <button className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Backup Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Data Backup Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive data backup services ensure your critical data is protected and recoverable at all times.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Backup</h3>
                <p className="text-gray-300 mb-6">
                  Secure cloud backup solutions with automated scheduling, encryption, and multi-region storage for maximum reliability.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Automated cloud backups
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Multi-region redundancy
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <HardDrive className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Local Backup</h3>
                <p className="text-gray-300 mb-6">
                  On-premises backup solutions with local storage, network-attached storage, and tape backup systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Local storage systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Network-attached storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Tape backup systems
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Backup</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent backup automation with scheduling, incremental backups, and backup verification processes.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Automated scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Incremental backups
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Backup verification
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Data Security</h3>
                <p className="text-gray-300 mb-6">
                  Advanced data security with encryption, access controls, and compliance with industry standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    AES-256 encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Access controls
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Compliance standards
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Disaster Recovery</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive disaster recovery planning with rapid data restoration and business continuity strategies.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Rapid data restoration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Business continuity planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Recovery time objectives
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Backup Monitoring</h3>
                <p className="text-gray-300 mb-6">
                  Real-time backup monitoring with status alerts, performance metrics, and backup health reporting.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Status alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    Health reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Data Backup Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our data backup services provide comprehensive protection and peace of mind for your critical business data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">99.9%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Uptime</h3>
                <p className="text-gray-300">Backup system availability</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">15min</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">Average data recovery time</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Integrity</h3>
                <p className="text-gray-300">Data integrity verification</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
                <p className="text-gray-300">Round-the-clock support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ensure your critical business data is always protected with our comprehensive backup solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Backup Assessment
              </button>
              <button className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataBackupPage;