'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail, Zap, Brain, Globe } from 'lucide-react';

const SecurityMonitoringSuitePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Security Suite',
      description: 'Complete security monitoring solution with threat detection, incident response, and compliance reporting'
    },
    {
      icon: Eye,
      title: 'Real-Time Monitoring',
      description: '24/7 continuous monitoring of your entire infrastructure with instant threat detection'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'AI-powered automated incident response and threat containment'
    },
    {
      icon: Brain,
      title: 'Advanced Analytics',
      description: 'Machine learning algorithms for predictive threat analysis and security insights'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Security Monitoring Suite | Zion Tech Group</title>
        <meta name="description" content="Comprehensive security monitoring suite by Zion Tech Group. Complete cybersecurity solution with threat detection, incident response, and compliance reporting." />
        <meta name="keywords" content="security monitoring suite, cybersecurity, threat detection, incident response, compliance reporting, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Security Monitoring
              </span>
              <br />
              <span className="text-white">Suite</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete cybersecurity solution with comprehensive monitoring, threat detection, and automated response capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center">
                Get Suite
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
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
              Complete Security Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All-in-one security monitoring suite with advanced threat detection and response capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityMonitoringSuitePage;
