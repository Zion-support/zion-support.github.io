'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Target, BarChart, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Bot, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown } from 'lucide-react';

const AICybersecurityMonitorPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Threat Detection',
      description: 'Advanced AI-powered threat detection and monitoring for comprehensive security coverage.',
      benefits: ['Real-time monitoring', 'Threat detection', 'Anomaly detection', 'Behavioral analysis']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Intelligent analysis of security events and patterns using machine learning algorithms.',
      benefits: ['Pattern recognition', 'Predictive analysis', 'Risk assessment', 'Automated response']
    },
    {
      icon: Globe,
      title: 'Global Security Monitoring',
      description: 'Worldwide security monitoring and threat intelligence for comprehensive protection.',
      benefits: ['Global coverage', 'Threat intelligence', 'Geographic analysis', 'Cross-border monitoring']
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Immediate response to security threats with automated incident response capabilities.',
      benefits: ['Instant alerts', 'Automated response', 'Incident management', 'Recovery procedures']
    },
    {
      icon: Target,
      title: 'Vulnerability Management',
      description: 'Comprehensive vulnerability scanning and management for proactive security.',
      benefits: ['Vulnerability scanning', 'Risk prioritization', 'Patch management', 'Compliance tracking']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Advanced analytics and reporting for security insights and compliance management.',
      benefits: ['Security metrics', 'Compliance reporting', 'Trend analysis', 'Executive dashboards']
    }
  ];

  const benefits = [
    'Reduce security incidents by 95%',
    'Improve threat detection by 90%',
    'Lower response time by 85%',
    'Enhance compliance by 100%',
    'Enable proactive security',
    'Reduce false positives by 80%',
    'Scale security operations',
    'Improve security posture'
  ];

  const useCases = [
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security monitoring for large enterprises and organizations',
      icon: Building
    },
    {
      title: 'Financial Services',
      description: 'Advanced security monitoring for banking and financial institutions',
      icon: CreditCard
    },
    {
      title: 'Healthcare',
      description: 'Specialized security monitoring for healthcare providers and patient data',
      icon: Stethoscope
    },
    {
      title: 'Government',
      description: 'High-level security monitoring for government agencies and critical infrastructure',
      icon: Shield
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity monitoring platform. Real-time threat detection, intelligent analysis, and automated response for comprehensive security protection." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, cybersecurity AI, threat intelligence, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Cybersecurity
              <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Monitor
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered cybersecurity monitoring platform. Real-time threat detection, 
              intelligent analysis, and automated response for comprehensive security protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for intelligent cybersecurity monitoring and protection
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
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Security Monitor?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of cybersecurity with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From enterprise to government, our security monitor adapts to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start monitoring your security with our AI-powered cybersecurity platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                </button>
                <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICybersecurityMonitorPage;