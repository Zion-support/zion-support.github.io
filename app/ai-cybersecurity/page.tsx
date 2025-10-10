'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Eye, Lock, AlertTriangle, Activity, Target, BarChart, Users, Clock, Star, Award, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, TrendingUp } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced AI algorithms that detect and respond to security threats in real-time.',
      benefits: ['Real-time detection', 'Machine learning', 'Behavioral analysis', 'Threat intelligence']
    },
    {
      icon: Eye,
      title: 'Network Monitoring',
      description: 'Comprehensive network monitoring with intelligent traffic analysis and anomaly detection.',
      benefits: ['Network visibility', 'Traffic analysis', 'Anomaly detection', 'Performance monitoring']
    },
    {
      icon: Brain,
      title: 'Intelligent Analysis',
      description: 'AI-powered analysis that learns from patterns and predicts potential security risks.',
      benefits: ['Pattern recognition', 'Risk prediction', 'Threat intelligence', 'Predictive analytics']
    },
    {
      icon: Lock,
      title: 'Endpoint Protection',
      description: 'Advanced endpoint security with AI-driven threat detection and response.',
      benefits: ['Device protection', 'Malware detection', 'Vulnerability scanning', 'Patch management']
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Automated incident response with intelligent escalation and remediation.',
      benefits: ['Automated response', 'Incident escalation', 'Remediation guidance', 'Forensic analysis']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting for better decision making.',
      benefits: ['Security metrics', 'Compliance reporting', 'Risk assessment', 'Executive dashboards']
    }
  ];

  const benefits = [
    'Reduce security incidents by 90%',
    'Improve threat detection by 95%',
    'Lower response time by 80%',
    'Increase compliance by 100%',
    'Enable proactive security',
    'Automate threat response',
    'Scale security operations',
    'Enhance security posture'
  ];

  const useCases = [
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for large enterprises and organizations',
      icon: '🏢'
    },
    {
      title: 'Cloud Security',
      description: 'Protect cloud infrastructure and applications with AI-powered monitoring',
      icon: '☁️'
    },
    {
      title: 'Network Security',
      description: 'Monitor and protect network infrastructure from cyber threats',
      icon: '🌐'
    },
    {
      title: 'Endpoint Security',
      description: 'Secure endpoints and devices with intelligent threat detection',
      icon: '💻'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Ensure compliance with security standards and regulations',
      icon: '📋'
    },
    {
      title: 'Incident Response',
      description: 'Automated incident response and threat remediation',
      icon: '🚨'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Advanced AI cybersecurity solutions with real-time threat detection, network monitoring, and automated incident response. Protect your organization with intelligent security technology." />
        <meta name="keywords" content="AI cybersecurity, security solutions, threat detection, network security, cybersecurity AI, security monitoring" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI cybersecurity solutions with real-time threat detection, network monitoring, 
              and automated incident response. Protect your organization with intelligent security technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Intelligent cybersecurity powered by cutting-edge AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive security solutions for organizations of all sizes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that enhance security and reduce risks
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Join thousands of organizations using our AI Cybersecurity solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                  Contact Sales
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

export default AICybersecurityPage;