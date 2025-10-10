'use client';
import React from 'react';
import { Database, Shield, Cloud, Clock, Download, Settings } from 'lucide-react';

const DataBackupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Backup Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Comprehensive data backup and recovery solutions that protect your critical business data with enterprise-grade security.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6">
            <Database className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Automated Backups</h3>
            <p className="text-gray-300">
              Set-and-forget automated backup schedules that ensure your data is always protected.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Shield className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Encryption</h3>
            <p className="text-gray-300">
              Military-grade encryption for data in transit and at rest to ensure maximum security.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Cloud className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Cloud Storage</h3>
            <p className="text-gray-300">
              Secure cloud storage with multiple geographic locations for disaster recovery.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Clock className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Point-in-Time Recovery</h3>
            <p className="text-gray-300">
              Restore your data to any specific point in time with granular recovery options.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Download className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Fast Recovery</h3>
            <p className="text-gray-300">
              Quick data recovery with minimal downtime to keep your business running.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Settings className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Custom Configuration</h3>
            <p className="text-gray-300">
              Tailored backup strategies that match your specific business requirements.
            </p>
          </div>
        </section>

        {/* Backup Types Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Backup Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-3">Full Backup</h3>
              <p className="text-gray-300 text-sm">
                Complete backup of all data and systems
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-3">Incremental</h3>
              <p className="text-gray-300 text-sm">
                Backup only changed data since last backup
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-3">Differential</h3>
              <p className="text-gray-300 text-sm">
                Backup changes since last full backup
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-3">Continuous</h3>
              <p className="text-gray-300 text-sm">
                Real-time backup of data changes
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Backup Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Reliability</h3>
              <p className="text-gray-300 mb-4">
                Our backup solutions have a 99.9% success rate with redundant systems and multiple backup locations.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Multiple data centers</li>
                <li>• Redundant storage systems</li>
                <li>• 24/7 monitoring</li>
              </ul>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Security</h3>
              <p className="text-gray-300 mb-4">
                Enterprise-grade security measures to protect your data from threats and unauthorized access.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• End-to-end encryption</li>
                <li>• Access controls</li>
                <li>• Audit logging</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Basic</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$99/month</div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• 100GB storage</li>
                <li>• Daily backups</li>
                <li>• Email support</li>
                <li>• Basic encryption</li>
              </ul>
              <a href="/contact" className="cyber-button w-full">Get Started</a>
            </div>

            <div className="cyber-card p-6 text-center border-2 border-cyan-400">
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$299/month</div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• 1TB storage</li>
                <li>• Hourly backups</li>
                <li>• 24/7 support</li>
                <li>• Advanced encryption</li>
                <li>• Point-in-time recovery</li>
              </ul>
              <a href="/contact" className="cyber-button w-full">Get Started</a>
            </div>

            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Unlimited storage</li>
                <li>• Continuous backup</li>
                <li>• Dedicated support</li>
                <li>• Custom encryption</li>
                <li>• Disaster recovery</li>
              </ul>
              <a href="/contact" className="cyber-button w-full">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Protect Your Data Today
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait for a disaster to strike. Secure your business data with our comprehensive backup solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-3 text-center"
            >
              Get Started
            </a>
            <a
              href="/demo"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Request Demo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataBackupPage;