'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Database, Server, Cloud, Lock } from 'lucide-react';

const DatabaseManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Database Management Services - Zion Tech Group</title>
        <meta name="description" content="Professional database management services including optimization, security, backup, and migration for all major database systems." />
        <meta name="keywords" content="database management, database optimization, database security, database migration, database backup, SQL, NoSQL" />
        <meta property="og:title" content="Database Management Services - Zion Tech Group" />
        <meta property="og:description" content="Professional database management services including optimization, security, backup, and migration for all major database systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/database-management" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Database Management Services - Zion Tech Group" />
        <meta name="twitter:description" content="Professional database management services including optimization, security, backup, and migration for all major database systems." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Database Management Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert database management services including optimization, security, backup, and migration for all major database systems. Keep your data secure, fast, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Services
              </button>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our Database Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Database className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Database Optimization</h3>
                  <p className="text-gray-300 mb-4">Improve performance with query optimization, indexing, and configuration tuning.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Query performance analysis</li>
                    <li>• Index optimization</li>
                    <li>• Configuration tuning</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Database Security</h3>
                  <p className="text-gray-300 mb-4">Comprehensive security measures to protect your sensitive data.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Access control management</li>
                    <li>• Encryption implementation</li>
                    <li>• Security auditing</li>
                    <li>• Compliance monitoring</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Cloud className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Database Migration</h3>
                  <p className="text-gray-300 mb-4">Seamless migration between database systems with zero downtime.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Schema migration</li>
                    <li>• Data migration</li>
                    <li>• Application updates</li>
                    <li>• Testing & validation</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Server className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Backup & Recovery</h3>
                  <p className="text-gray-300 mb-4">Reliable backup solutions with fast recovery options.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Automated backups</li>
                    <li>• Point-in-time recovery</li>
                    <li>• Disaster recovery planning</li>
                    <li>• Backup testing</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <BarChart className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Performance Monitoring</h3>
                  <p className="text-gray-300 mb-4">24/7 monitoring and alerting for optimal database performance.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Real-time monitoring</li>
                    <li>• Performance alerts</li>
                    <li>• Capacity planning</li>
                    <li>• Trend analysis</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Compliance & Auditing</h3>
                  <p className="text-gray-300 mb-4">Ensure compliance with industry standards and regulations.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• GDPR compliance</li>
                    <li>• SOX compliance</li>
                    <li>• Audit trail maintenance</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Database Types Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Supported Database Systems
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🐘</div>
                    <h3 className="text-lg font-bold text-white">PostgreSQL</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🐬</div>
                    <h3 className="text-lg font-bold text-white">MySQL</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🔵</div>
                    <h3 className="text-lg font-bold text-white">MongoDB</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🔴</div>
                    <h3 className="text-lg font-bold text-white">Redis</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🟡</div>
                    <h3 className="text-lg font-bold text-white">Oracle</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🟢</div>
                    <h3 className="text-lg font-bold text-white">SQL Server</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">🟣</div>
                    <h3 className="text-lg font-bold text-white">Cassandra</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4">
                    <div className="text-4xl mb-2">⚫</div>
                    <h3 className="text-lg font-bold text-white">Elasticsearch</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Flexible Pricing Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Up to 5 databases
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Basic monitoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Weekly backups
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Email support
                    </li>
                  </ul>
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-8 rounded-lg relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-white mb-6">$599<span className="text-lg text-cyan-200">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Up to 20 databases
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Advanced monitoring
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Daily backups
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Performance optimization
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Priority support
                    </li>
                  </ul>
                  <button className="w-full bg-white text-cyan-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$1,299<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Unlimited databases
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Real-time monitoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Continuous backups
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Custom optimization
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      24/7 support
                    </li>
                  </ul>
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300">Databases Managed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
                  <div className="text-gray-300">Performance Improvement</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Monitoring</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Database?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our experts help you achieve optimal database performance and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DatabaseManagementPage;