'use client';
import React from 'react';
import { Database, Shield, Cloud, Zap, Settings, BarChart, Clock, Users } from 'lucide-react';

const DataBackupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Data Backup Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Secure & Reliable Data Protection Services
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive data backup solutions that protect your critical information 
            with automated backups, encryption, and disaster recovery capabilities.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Database className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automated Backups</h3>
              <p className="text-gray-300">
                Automated backup scheduling with intelligent 
                incremental and full backup strategies.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Encryption</h3>
              <p className="text-gray-300">
                Military-grade encryption for data at rest and 
                in transit to ensure maximum security.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Cloud className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Cloud Storage</h3>
              <p className="text-gray-300">
                Secure cloud storage with multiple geographic 
                locations for redundancy and availability.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Fast Recovery</h3>
              <p className="text-gray-300">
                Rapid data recovery with point-in-time restore 
                capabilities and minimal downtime.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Custom Policies</h3>
              <p className="text-gray-300">
                Flexible backup policies tailored to your 
                specific business requirements and compliance needs.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Monitoring</h3>
              <p className="text-gray-300">
                Real-time backup monitoring with alerts and 
                comprehensive reporting dashboards.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 100GB storage</li>
                <li>Daily backups</li>
                <li>Basic encryption</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 1TB storage</li>
                <li>Hourly backups</li>
                <li>Advanced encryption</li>
                <li>Priority support</li>
                <li>Custom policies</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited storage</li>
                <li>Real-time backups</li>
                <li>Military-grade encryption</li>
                <li>24/7 dedicated support</li>
                <li>On-premise deployment</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Protect Your Data?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free data backup assessment and see how we can secure your critical information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Assessment
            </a>
            <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataBackupPage;