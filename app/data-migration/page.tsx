'use client';
import React from 'react';
import { Database, Zap, Shield, Settings, BarChart, Users, Clock, Globe } from 'lucide-react';

const DataMigrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Data Migration Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Secure & Efficient Data Transfer Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Professional data migration services that ensure seamless, secure, 
            and efficient transfer of your data with zero downtime and minimal risk.
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
              <h3 className="text-xl font-bold text-white mb-4">Zero Downtime</h3>
              <p className="text-gray-300">
                Seamless data migration with minimal or zero 
                downtime for your business operations.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">High Performance</h3>
              <p className="text-gray-300">
                High-speed data transfer with optimized 
                performance and parallel processing.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Data Integrity</h3>
              <p className="text-gray-300">
                Comprehensive data validation and integrity 
                checks throughout the migration process.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored migration strategies for different 
                data types and business requirements.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Progress Tracking</h3>
              <p className="text-gray-300">
                Real-time progress monitoring with detailed 
                reporting and status updates.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300">
                Dedicated migration specialists with 
                extensive experience in data transfer.
              </p>
            </div>
          </div>
        </section>

        {/* Migration Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Migration Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Cloud Migration</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• On-premise to cloud</li>
                <li>• Cloud to cloud</li>
                <li>• Multi-cloud strategies</li>
                <li>• Hybrid cloud setup</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Database Migration</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Database upgrades</li>
                <li>• Platform migrations</li>
                <li>• Schema transformations</li>
                <li>• Data consolidation</li>
              </ul>
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
              <h3 className="text-2xl font-bold text-white mb-4">Small Migration</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$2,999</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 100GB data</li>
                <li>Basic migration</li>
                <li>Standard support</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Medium Migration</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$7,999</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 1TB data</li>
                <li>Advanced migration</li>
                <li>Priority support</li>
                <li>Custom solutions</li>
                <li>Progress tracking</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Large Migration</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited data</li>
                <li>Full migration suite</li>
                <li>24/7 dedicated support</li>
                <li>On-site team</li>
                <li>Zero downtime guarantee</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Migrate Your Data?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free migration assessment and see how we can safely transfer your data.
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

export default DataMigrationPage;