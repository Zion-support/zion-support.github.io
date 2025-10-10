'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, Cloud, Database, ArrowRight, Zap, Clock } from 'lucide-react';

const DataBackupPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Backup',
      description: 'Secure cloud-based backup solutions with automatic synchronization'
    },
    {
      icon: Shield,
      title: 'Data Encryption',
      description: 'End-to-end encryption to protect your sensitive data'
    },
    {
      icon: Database,
      title: 'Automated Backups',
      description: 'Scheduled and continuous backup processes with minimal downtime'
    },
    {
      icon: Clock,
      title: 'Point-in-Time Recovery',
      description: 'Restore data to any specific point in time with precision'
    }
  ];

  const benefits = [
    '99.9% data recovery success rate',
    'Automated backup scheduling',
    'Cross-platform compatibility',
    'Real-time data synchronization',
    'Compliance with industry standards',
    '24/7 monitoring and support'
  ];

  return (
    <>
      <Helmet>
        <title>Data Backup Solutions | Zion Tech Group - Secure Data Protection</title>
        <meta name="description" content="Protect your critical data with our comprehensive backup solutions, automated scheduling, and secure cloud storage." />
        <meta name="keywords" content="data backup, cloud backup, data protection, disaster recovery, data security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Backup</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Protect your critical data with our comprehensive backup solutions, automated scheduling, and secure cloud storage.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Backup Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our data backup solutions provide complete protection for your critical business data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Backup Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ensure your data is always protected with our reliable and secure backup services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Secure Your Data Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a disaster. Contact us today to implement comprehensive data backup solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-5 h-5" />
                  Get Started
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataBackupPage;