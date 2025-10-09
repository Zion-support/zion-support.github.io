'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Shield, Lock, Eye, Zap, Brain, BarChart, Users, Phone, Mail, ArrowRight, AlertTriangle, Database, Globe, Settings } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time, including zero-day attacks and advanced persistent threats.',
      benefits: ['Real-time detection', 'Zero-day protection', '99.9% accuracy']
    },
    {
      icon: Shield,
      title: 'Automated Response',
      description: 'Intelligent automated response system that instantly contains threats, isolates affected systems, and initiates recovery procedures.',
      benefits: ['Instant containment', 'Auto-recovery', 'Minimal downtime']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data encryption, access controls, and privacy protection using cutting-edge AI security protocols.',
      benefits: ['End-to-end encryption', 'Access control', 'Privacy compliance']
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring with AI-powered analysis of network traffic, user behavior, and system activities.',
      benefits: ['Round-the-clock monitoring', 'Behavioral analysis', 'Threat intelligence']
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: 'Rapid incident response with AI-driven forensics, automated threat hunting, and comprehensive security reporting.',
      benefits: ['Fast response time', 'AI forensics', 'Detailed reporting']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Advanced security analytics and reporting with real-time dashboards and predictive threat modeling.',
      benefits: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards']
    }
  ];

  const services = [
    {
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that identify and prevent cyber threats before they can cause damage.',
      price: '$2,999/month',
      features: ['Real-time threat detection', 'Zero-day attack prevention', 'Behavioral analysis', 'Threat intelligence'],
      benefits: ['99.9% detection accuracy', 'Reduced false positives', 'Faster response times', 'Lower security costs']
    },
    {
      title: 'Automated Security Response',
      description: 'Intelligent automated response system that instantly contains and neutralizes security threats.',
      price: '$4,999/month',
      features: ['Automated containment', 'System isolation', 'Recovery procedures', 'Incident documentation'],
      benefits: ['Instant threat neutralization', 'Minimal business disruption', 'Reduced recovery time', 'Comprehensive documentation']
    },
    {
      title: 'Comprehensive Security Audit',
      description: 'Complete security assessment and vulnerability analysis with AI-powered recommendations.',
      price: '$1,999/month',
      features: ['Vulnerability scanning', 'Penetration testing', 'Compliance checking', 'Security recommendations'],
      benefits: ['Complete security overview', 'Compliance assurance', 'Risk mitigation', 'Cost optimization']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Cybersecurity Solutions - Zion Tech Group"
        description="Advanced AI-powered cybersecurity with 99.9% threat detection, 24/7 monitoring, and automated response. Protect your business from evolving cyber threats."
        keywords={['AI cybersecurity', 'threat detection', 'security monitoring', 'cyber protection', 'AI security']}
        canonicalUrl="https://ziontechgroup.com/ai-cybersecurity"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-16 h-16 text-red-500 mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  AI Cybersecurity
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Advanced AI-powered cybersecurity solutions that protect your business from evolving cyber threats with 99.9% accuracy and 24/7 monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Security Audit</span>
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                AI-Powered Security Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <feature.icon className="w-8 h-8 text-red-500 mr-3" />
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <p key={benefitIndex} className="text-sm text-green-400 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {benefit}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 px-4 bg-black/20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                AI Cybersecurity Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-red-500 mb-4">{service.price}</div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-green-400 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href="/contact"
                      className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a comprehensive security audit and protect your business from cyber threats with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Security Audit</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AICybersecurityPage;