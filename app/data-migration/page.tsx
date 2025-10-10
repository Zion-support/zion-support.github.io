'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Database, ArrowRight, BarChart, Users, Clock, CheckCircle, Brain, Cloud, Smartphone, Settings, Target, Lightbulb, Zap, RefreshCw, Shield, Lock, TrendingUp, Server } from 'lucide-react';

const DataMigrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Migration Services | Zion Tech Group</title>
        <meta name="description" content="Professional data migration services for cloud migration, database migration, and system migration. Seamless data transfer with zero downtime and data integrity." />
        <meta name="keywords" content="data migration, cloud migration, database migration, system migration, data transfer, migration services" />
        <link rel="canonical" href="https://ziontechgroup.com/data-migration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Data Migration
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional data migration services for cloud migration, database migration, and system migration. Seamless data transfer with zero downtime and complete data integrity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Migration Assessment
                </button>
                <button className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Migration Solutions
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
                Data Migration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive data migration services ensure seamless data transfer with minimal downtime and maximum data integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Migration</h3>
                <p className="text-gray-300 mb-6">
                  Seamless migration to cloud platforms with automated data transfer, validation, and optimization for cloud environments.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Automated cloud migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Data validation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Cloud optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Database Migration</h3>
                <p className="text-gray-300 mb-6">
                  Professional database migration with schema conversion, data transformation, and performance optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Schema conversion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Data transformation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Performance optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">System Migration</h3>
                <p className="text-gray-300 mb-6">
                  Complete system migration with application transfer, configuration migration, and system integration.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Application migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Configuration transfer
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    System integration
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Data Security</h3>
                <p className="text-gray-300 mb-6">
                  Secure data migration with encryption, access controls, and compliance with data protection regulations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Access controls
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Compliance standards
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Migration Planning</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive migration planning with risk assessment, timeline development, and rollback strategies.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Risk assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Timeline development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Rollback strategies
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Zero Downtime</h3>
                <p className="text-gray-300 mb-6">
                  Zero-downtime migration strategies with live data synchronization and seamless cutover processes.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Live synchronization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Seamless cutover
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                    Business continuity
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
                Migration Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our data migration services deliver seamless transitions with minimal risk and maximum efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Integrity</h3>
                <p className="text-gray-300">Data integrity maintained during migration</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">0</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Downtime</h3>
                <p className="text-gray-300">Zero-downtime migration guarantee</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">99.9%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Success Rate</h3>
                <p className="text-gray-300">Successful migration completion rate</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
                <p className="text-gray-300">Round-the-clock migration support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Migrate Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you migrate your data seamlessly with our professional migration services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Migration Assessment
              </button>
              <button className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300 flex items-center justify-center">
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

export default DataMigrationPage;