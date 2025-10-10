'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Lock, Shield, CheckCircle, ArrowRight, Star, Award, Clock, Target, BarChart, Settings, Brain, Zap, Database, Globe } from 'lucide-react'

const ZionCloudVault: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Backup & Recovery Platform | Zion Tech Group</title>
        <meta name="description" content="Protect your data with Zion Cloud Vault. Secure cloud backup, disaster recovery, and data protection with enterprise-grade security and automated backups." />
        <meta name="keywords" content="cloud backup, disaster recovery, data protection, secure storage, automated backup, Zion Cloud Vault" />
        <meta property="og:title" content="Zion Cloud Vault - Secure Cloud Backup & Recovery Platform" />
        <meta property="og:description" content="Protect your data with Zion Cloud Vault. Secure cloud backup and disaster recovery with enterprise-grade security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-cloud-vault" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-cloud-vault" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-cyan-500/25">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Cloud Vault
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Secure your business data with enterprise-grade cloud backup and disaster recovery. Automated backups, instant recovery, and military-grade encryption for complete data protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                  Start Free Trial
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Data Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Data Protection</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect, backup, and recover your critical business data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Military-Grade Encryption</h3>
                <p className="text-gray-300 mb-6">
                  Protect your data with AES-256 encryption both in transit and at rest, ensuring maximum security.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    AES-256 encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    End-to-end security
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Zero-knowledge architecture
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Automated Backups</h3>
                <p className="text-gray-300 mb-6">
                  Set it and forget it with intelligent, automated backup scheduling that adapts to your data patterns.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Smart scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Incremental backups
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Change detection
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Instant Recovery</h3>
                <p className="text-gray-300 mb-6">
                  Restore your data in seconds with instant recovery options and point-in-time restoration.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    < 30 second recovery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Point-in-time restore
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Granular file recovery
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Multi-Platform Support</h3>
                <p className="text-gray-300 mb-6">
                  Backup data from any device or platform with comprehensive support for all major operating systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Windows, Mac, Linux
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Mobile devices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cloud applications
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Advanced Monitoring</h3>
                <p className="text-gray-300 mb-6">
                  Monitor backup status, storage usage, and recovery metrics with detailed analytics and reporting.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Detailed reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Alert notifications
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Global Infrastructure</h3>
                <p className="text-gray-300 mb-6">
                  Store your data across multiple geographic regions for maximum redundancy and compliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Multi-region storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data replication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Compliance ready
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Storage Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the storage capacity that matches your business needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$29</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    1TB storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 devices
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Daily backups
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl border-2 border-cyan-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$99</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    10TB storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 25 devices
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Hourly backups
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced monitoring
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$299</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited devices
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Real-time backups
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card-enhanced p-12 rounded-3xl">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Protect Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using Zion Cloud Vault to secure their critical data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                  Start Your Free Trial
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Data Assessment
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ZionCloudVault