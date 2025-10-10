'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Shield, Eye, Zap, Target, BarChart, Lock, AlertTriangle, Brain, Globe, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Phone, Mail, MapPin } from 'lucide-react';

const AICybersecuritySuitePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Security Suite',
      description: 'All-in-one cybersecurity solution with AI-powered threat detection, prevention, and response.',
      benefits: ['Unified security platform', 'AI threat detection', 'Automated response', 'Comprehensive coverage']
    },
    {
      icon: Eye,
      title: 'Advanced Monitoring',
      description: '24/7 security monitoring with AI-powered analysis of network traffic and system behavior.',
      benefits: ['Continuous monitoring', 'Behavioral analysis', 'Anomaly detection', 'Real-time alerts']
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'AI-driven automated response to security incidents with immediate threat mitigation.',
      benefits: ['Instant response', 'Threat isolation', 'Automated blocking', 'Incident containment']
    },
    {
      icon: Target,
      title: 'Vulnerability Management',
      description: 'Continuous vulnerability assessment and management with AI-powered risk analysis.',
      benefits: ['Continuous scanning', 'Risk scoring', 'Patch management', 'Compliance checking']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Advanced security analytics and reporting with AI-powered insights and recommendations.',
      benefits: ['Security metrics', 'Trend analysis', 'Compliance reporting', 'Risk assessment']
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'AI-powered identity and access management with behavioral analysis and risk assessment.',
      benefits: ['Identity verification', 'Behavioral analysis', 'Access monitoring', 'Privilege management']
    }
  ];

  const benefits = [
    'Reduce security incidents by 95%',
    'Improve threat detection by 98%',
    'Decrease response time by 85%',
    'Enhance compliance by 100%',
    'Enable 24/7 security monitoring',
    'Automate security responses',
    'Scale security operations',
    'Enhance security posture'
  ];

  const useCases = [
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security suite for large enterprises',
      icon: '🏢'
    },
    {
      title: 'Cloud Security',
      description: 'Security suite for cloud infrastructure and services',
      icon: '☁️'
    },
    {
      title: 'Network Security',
      description: 'Network-wide security monitoring and protection',
      icon: '🌐'
    },
    {
      title: 'Endpoint Security',
      description: 'Device-level security monitoring and protection',
      icon: '💻'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered cybersecurity suite. Advanced threat detection, automated response, and security analytics for complete protection." />
        <meta name="keywords" content="AI cybersecurity suite, security suite, threat detection, security analytics, cybersecurity AI, security platform" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Cybersecurity
              <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Suite
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI-powered cybersecurity suite. Advanced threat detection, automated response, and security analytics for complete protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                Get Started
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for comprehensive cybersecurity protection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Cybersecurity Suite?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that enhance your security posture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for organizations of all sizes and industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start using our AI Cybersecurity Suite today and protect your organization from threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AICybersecuritySuitePage;