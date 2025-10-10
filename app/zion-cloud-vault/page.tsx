'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Database, Zap, CheckCircle, ArrowRight, Star, Globe, Clock, DollarSign, Lock, Upload } from 'lucide-react';

const ZionCloudVaultPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Cloud Backup & Recovery Platform | Zion Tech Group</title>
        <meta name="description" content="Secure cloud backup and recovery platform with automated backups, disaster recovery, and enterprise-grade security." />
        <meta name="keywords" content="cloud backup, disaster recovery, data protection, automated backups, cloud storage, data security" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-cloud-vault" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mb-6">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Cloud Vault
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
                Cloud Backup & Recovery Platform
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Protect your critical data with automated cloud backups, instant recovery, and enterprise-grade security. 
                Never lose important data again with our comprehensive backup and disaster recovery solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="cyber-button-enhanced px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
              Comprehensive Backup Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automated Backups</h3>
                <p className="text-gray-300 mb-4">Schedule automatic backups of your files, databases, and applications with customizable retention policies.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Scheduled backups</li>
                  <li>• Incremental sync</li>
                  <li>• Version control</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instant Recovery</h3>
                <p className="text-gray-300 mb-4">Restore your data instantly with point-in-time recovery and granular file restoration.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Point-in-time recovery</li>
                  <li>• Granular restore</li>
                  <li>• Cross-platform restore</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 mb-4">Bank-level encryption and security with compliance certifications for your most sensitive data.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• Zero-knowledge architecture</li>
                  <li>• SOC 2 compliance</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Database Backup</h3>
                <p className="text-gray-300 mb-4">Specialized backup solutions for all major databases with transaction log backup support.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• MySQL, PostgreSQL, MongoDB</li>
                  <li>• Transaction log backup</li>
                  <li>• Hot backup support</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Infrastructure</h3>
                <p className="text-gray-300 mb-4">Backup data across multiple geographic regions for maximum redundancy and compliance.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Multi-region storage</li>
                  <li>• Geographic redundancy</li>
                  <li>• Local compliance</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Disaster Recovery</h3>
                <p className="text-gray-300 mb-4">Complete disaster recovery planning with automated failover and business continuity.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Automated failover</li>
                  <li>• RTO/RPO optimization</li>
                  <li>• Business continuity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
              Secure Storage Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    100GB storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Daily backups
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic recovery
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full cyber-button-enhanced py-3">
                  Get Started
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 border-2 border-blue-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">$149<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    1TB storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Hourly backups
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Database backup
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced recovery
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full cyber-button-enhanced py-3">
                  Get Started
                </button>
              </div>

              <div className="cyber-card-enhanced p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Real-time backup
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Disaster recovery
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <button className="w-full border-2 border-blue-400 text-blue-400 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text-enhanced">
              Protect Your Data Today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't risk losing critical business data. Start protecting your files with Zion Cloud Vault's secure backup solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="cyber-button-enhanced px-8 py-4 text-lg font-semibold">
                Start Your Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionCloudVaultPage;