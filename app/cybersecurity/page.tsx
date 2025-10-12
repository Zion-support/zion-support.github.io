'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Zap, Globe, Database, Users, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CybersecurityPage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Threat Detection',
      description: 'Advanced threat detection and prevention systems to protect your infrastructure.',
      benefits: ['Real-time monitoring', 'AI-powered detection', 'Automated response', 'Threat intelligence']
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Protection',
      description: 'Comprehensive data encryption and access control to safeguard sensitive information.',
      benefits: ['End-to-end encryption', 'Access controls', 'Data classification', 'Backup security']
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response to ensure continuous protection.',
      benefits: ['24/7 monitoring', 'Incident response', 'Security analytics', 'Compliance reporting']
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: 'Risk Assessment',
      description: 'Comprehensive security assessments to identify and mitigate potential vulnerabilities.',
      benefits: ['Vulnerability scanning', 'Penetration testing', 'Risk analysis', 'Security audits']
    }
  ];

  const services = [
    {
      title: 'Network Security',
      description: 'Protect your network infrastructure with advanced firewall and intrusion detection systems.',
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Endpoint Protection',
      description: 'Secure all devices and endpoints with comprehensive antivirus and anti-malware solutions.',
      icon: <Database className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Identity Management',
      description: 'Manage user access and authentication with multi-factor authentication and SSO solutions.',
      icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Compliance',
      description: 'Ensure compliance with industry regulations and standards like GDPR, HIPAA, and SOX.',
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Protect your business with enterprise-grade cybersecurity solutions. Comprehensive security measures to safeguard your data and systems."
        keywords="cybersecurity, security solutions, data protection, threat detection, compliance"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Cybersecurity
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protect your business with enterprise-grade cybersecurity solutions. Comprehensive security 
            measures to safeguard your data, systems, and reputation from evolving cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced cybersecurity solutions designed to protect your business from all types of threats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity services to protect every aspect of your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Cybersecurity Solutions?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Expert Security Team</h3>
                    <p className="text-gray-300">Certified security professionals with years of experience in threat detection and prevention.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">24/7 Monitoring</h3>
                    <p className="text-gray-300">Round-the-clock security monitoring and rapid incident response to keep your business protected.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Compliance Ready</h3>
                    <p className="text-gray-300">Ensure compliance with industry regulations and standards with our comprehensive security framework.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
                    <p className="text-gray-300">Tailored security solutions designed specifically for your business needs and risk profile.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Security Assessment</h3>
              <p className="text-gray-300 mb-6">
                Ready to strengthen your security posture? Contact us for a comprehensive 
                security assessment and customized protection plan.
              </p>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Secure Your Business Today
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Security Assessment
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}