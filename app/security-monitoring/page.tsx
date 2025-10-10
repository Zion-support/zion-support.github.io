'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, AlertTriangle, Clock, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const SecurityMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Real-Time Monitoring',
      description: '24/7 continuous monitoring of your entire IT infrastructure with instant threat detection and response'
    },
    {
      icon: Shield,
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection using machine learning algorithms to identify sophisticated attacks'
    },
    {
      icon: AlertTriangle,
      title: 'Instant Alerts',
      description: 'Immediate notifications via multiple channels when security incidents are detected'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Automated incident response with containment and remediation in under 5 minutes'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Security Monitoring | Zion Tech Group</title>
        <meta name="description" content="24/7 security monitoring services by Zion Tech Group. Advanced threat detection, real-time alerts, and rapid incident response for your business." />
        <meta name="keywords" content="security monitoring, threat detection, cybersecurity, 24/7 monitoring, incident response, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Security
              </span>
              <br />
              <span className="text-white">Monitoring</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with our advanced 24/7 security monitoring services. 
              Real-time threat detection, instant alerts, and rapid incident response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center">
                Get Protected
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
              Why Choose Our Security Monitoring?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our security monitoring solutions deliver unmatched protection with advanced AI-powered threat detection.
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

export default SecurityMonitoringPage;
