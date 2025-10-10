'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Brain, Eye, Zap, Target, BarChart3, CheckCircle, ArrowRight, Star, Clock, Users, TrendingUp, Globe, Cpu, Database, Settings, AlertTriangle, Lock, Search } from 'lucide-react';

const AICybersecurityProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and neutralize threats in real-time, learning from each attack to improve future protection.',
      benefits: ['Real-time threat detection', 'Machine learning adaptation', 'Zero-day attack prevention', 'Behavioral analysis']
    },
    {
      icon: Shield,
      title: 'Automated Response',
      description: 'Intelligent automated response system that instantly blocks threats and implements countermeasures without human intervention.',
      benefits: ['Instant threat blocking', 'Automated countermeasures', 'Self-healing systems', 'Minimal false positives']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 AI-powered monitoring that watches every aspect of your network, applications, and data for potential security breaches.',
      benefits: ['24/7 monitoring', 'Comprehensive coverage', 'Anomaly detection', 'Predictive analysis']
    },
    {
      icon: Zap,
      title: 'Quantum-Safe Encryption',
      description: 'Future-proof encryption that protects against both current and future quantum computing threats.',
      benefits: ['Quantum-resistant', 'Future-proof security', 'Advanced encryption', 'Compliance ready']
    }
  ];

  const benefits = [
    'Reduce security incidents by 95% with AI-powered threat detection',
    'Achieve 99.9% uptime with automated threat response',
    'Save 80% on security operations costs through automation',
    'Comply with all major security standards (SOC2, ISO27001, GDPR)',
    'Get real-time security insights and predictive threat analysis'
  ];

  const pricing = [
    {
      name: 'Essential Security',
      price: '$999/month',
      features: [
        'AI threat detection',
        'Basic monitoring',
        'Email support',
        'Standard encryption',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional Security',
      price: '$2,999/month',
      features: [
        'Advanced AI detection',
        '24/7 monitoring',
        'Priority support',
        'Quantum-safe encryption',
        'Advanced analytics',
        'Automated response'
      ],
      popular: true
    },
    {
      name: 'Enterprise Security',
      price: 'Custom Pricing',
      features: [
        'Full AI security suite',
        'Custom threat models',
        'Dedicated security team',
        'White-label solutions',
        'On-premise deployment',
        'Compliance consulting'
      ],
      popular: false
    }
  ];

  const securityServices = [
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security testing using AI to identify vulnerabilities before attackers do.',
      icon: Target,
      price: 'Starting at $2,999/test'
    },
    {
      title: 'Security Audits',
      description: 'AI-powered security audits that provide detailed compliance reports and recommendations.',
      icon: Search,
      price: 'Starting at $1,999/audit'
    },
    {
      title: 'Incident Response',
      description: 'Rapid response to security incidents with AI-powered forensic analysis and recovery.',
      icon: AlertTriangle,
      price: 'Starting at $299/hour'
    },
    {
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting for SOC2, ISO27001, GDPR, and more.',
      icon: Lock,
      price: 'Starting at $499/month'
    }
  ];

  const threatTypes = [
    { name: 'Malware Detection', accuracy: '99.8%', response: '< 1 second' },
    { name: 'Phishing Prevention', accuracy: '99.5%', response: '< 2 seconds' },
    { name: 'DDoS Mitigation', accuracy: '99.9%', response: '< 5 seconds' },
    { name: 'Insider Threats', accuracy: '98.5%', response: '< 10 seconds' },
    { name: 'Zero-Day Attacks', accuracy: '97.2%', response: '< 30 seconds' }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Cybersecurity Pro - Zion Tech Group | Advanced AI-Powered Security Solutions</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with real-time threat detection, automated response, and quantum-safe encryption. Protect your business with cutting-edge AI security technology." />
        <meta name="keywords" content="AI cybersecurity, AI security, threat detection, automated response, quantum encryption, security monitoring, cyber protection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Cybersecurity <span className="text-red-400">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered cybersecurity solutions that protect your business with real-time threat detection, automated response, and quantum-safe encryption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Security Assessment
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Security Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology that provides comprehensive protection against all types of cyber threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

        {/* Threat Detection Performance */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Threat Detection Performance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-leading accuracy and response times for maximum protection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {threatTypes.map((threat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-4">{threat.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Accuracy:</span>
                      <span className="text-green-400 font-bold">{threat.accuracy}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Response Time:</span>
                      <span className="text-cyan-400 font-bold">{threat.response}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security services to protect your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="text-red-400 font-bold text-lg">{service.price}</div>
                    </div>
                  </div>
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
                Why Choose AI Cybersecurity Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary advantages that keep your business secure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security solution that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative ${
                  plan.popular ? 'ring-2 ring-red-500' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300">per month</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                      : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                  }`}>
                    Get Protected
                  </button>
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
                Secure Your Business Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a security breach. Get AI-powered protection that adapts and learns to keep your business safe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Security Assessment
                </button>
                <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Security Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AICybersecurityProPage;