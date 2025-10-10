'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Database, Shield, Cloud, BarChart, Brain, Target, Users, Globe, ArrowRight, Star, Award, TrendingUp, Settings } from 'lucide-react';

const DataBackupPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Backup Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive data backup and recovery solutions. Secure, automated, and reliable backup services for businesses of all sizes. Protect your critical data with enterprise-grade backup systems." />
        <meta name="keywords" content="data backup, backup solutions, data recovery, disaster recovery, cloud backup, enterprise backup" />
        <link rel="canonical" href="https://ziontechgroup.com/data-backup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Data Backup
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your critical business data with comprehensive backup and recovery solutions. 
                Automated, secure, and reliable data protection for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Backup Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our data backup solutions provide complete protection for your critical business data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Backup</h3>
                <p className="text-gray-300 mb-4">
                  Secure cloud-based backup solutions with unlimited storage and global accessibility.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Automated cloud sync</li>
                  <li>• Global data centers</li>
                  <li>• Scalable storage</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Encrypted Storage</h3>
                <p className="text-gray-300 mb-4">
                  Military-grade encryption ensures your data remains secure and protected at all times.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• AES-256 encryption</li>
                  <li>• End-to-end security</li>
                  <li>• Compliance ready</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Scheduling</h3>
                <p className="text-gray-300 mb-4">
                  Intelligent backup scheduling that adapts to your business needs and data patterns.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Smart scheduling</li>
                  <li>• Incremental backups</li>
                  <li>• Real-time sync</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Recovery Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Advanced analytics and reporting for backup status, recovery times, and data integrity.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Recovery time analysis</li>
                  <li>• Backup health monitoring</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Disaster Recovery</h3>
                <p className="text-gray-300 mb-4">
                  Complete disaster recovery solutions with rapid data restoration and business continuity.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Rapid restoration</li>
                  <li>• Business continuity</li>
                  <li>• Failover systems</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300 mb-4">
                  Round-the-clock technical support and monitoring to ensure your data is always protected.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 24/7 monitoring</li>
                  <li>• Expert support</li>
                  <li>• Proactive alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Backup Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with industry-leading backup and recovery solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">99.9% Uptime</h3>
                <p className="text-gray-300">Guaranteed availability and reliability for your critical data</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Military-grade encryption and security protocols</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast Recovery</h3>
                <p className="text-gray-300">Rapid data restoration with minimal downtime</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Scale</h3>
                <p className="text-gray-300">Worldwide data centers for optimal performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Protect Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our comprehensive data backup and recovery solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataBackupPage;