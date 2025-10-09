'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Phone, Mail, Brain, Database, Zap, Target, Globe } from 'lucide-react';

const AICybersecurity: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time',
      benefits: ['99.9% accuracy', 'Real-time monitoring', 'Zero false positives']
    },
    {
      icon: Shield,
      title: 'Automated Response',
      description: 'Instant automated response to security incidents with minimal human intervention',
      benefits: ['Sub-second response', 'Automated remediation', 'Incident documentation']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'End-to-end encryption and data protection for all sensitive information',
      benefits: ['AES-256 encryption', 'Data loss prevention', 'Compliance ready']
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your infrastructure with round-the-clock security',
      benefits: ['24/7 SOC team', 'Real-time alerts', 'Threat intelligence']
    },
    {
      icon: Database,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive vulnerability scanning and penetration testing services',
      benefits: ['Automated scanning', 'Manual testing', 'Risk prioritization']
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: 'Rapid incident response and recovery services to minimize business impact',
      benefits: ['Rapid response', 'Forensic analysis', 'Recovery planning']
    }
  ];

  const services = [
    {
      icon: Shield,
      title: 'Basic Security',
      price: '$799',
      period: '/month',
      benefits: ['Basic threat detection', 'Email security', 'Firewall management']
    },
    {
      icon: Brain,
      title: 'Advanced AI Security',
      price: '$1,499',
      period: '/month',
      benefits: ['AI threat detection', 'Behavioral analysis', 'Predictive security']
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      price: '$2,999',
      period: '/month',
      benefits: ['Full security suite', 'Custom AI models', 'Dedicated team']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '24/7', label: 'Security Monitoring' },
    { number: '<1s', label: 'Response Time' },
    { number: '1000+', label: 'Protected Businesses' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Cybersecurity Solutions - Zion Tech Group"
        description="Advanced AI-powered cybersecurity with 99.9% threat detection, 24/7 monitoring, and automated response. Protect your business from evolving cyber threats."
        keywords={['AI cybersecurity', 'threat detection', 'security monitoring', 'cyber protection', 'AI security']}
        canonicalUrl="https://ziontechgroup.com/ai-cybersecurity"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-bg quantum-particles">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Cybersecurity Solutions
              </h1>
              <p className="text-xl md:text-2xl text-red-400 mb-8">
                Protect your business with AI-powered security
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered cybersecurity platform provides advanced threat detection, 
                automated response, and 24/7 monitoring to protect your business from evolving cyber threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Security Audit</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="hologram-card-enhanced p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Advanced Security Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4 text-red-400">
                      <feature.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
          <section className="py-16 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Security Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4 text-cyan-400">
                      <service.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-gray-400 mb-4">{service.period}</div>
                      <div className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href="/contact"
                      className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center mt-4"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AICybersecurity;