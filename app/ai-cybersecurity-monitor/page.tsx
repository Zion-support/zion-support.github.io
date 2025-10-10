'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, AlertTriangle, Lock, Globe, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign, Database, PieChart, LineChart, TrendingUp, Activity, Award, Zap } from 'lucide-react';

const AICybersecurityMonitorPage: React.FC = () => {
  const features = [
    'Real-time Threat Detection',
    'AI-Powered Analysis',
    'Automated Response',
    '24/7 Monitoring',
    'Vulnerability Assessment',
    'Incident Management',
    'Compliance Reporting',
    'Threat Intelligence'
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 devices',
        'Basic threat detection',
        'Email alerts',
        'Standard reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 devices',
        'Advanced AI detection',
        'Real-time alerts',
        'Custom dashboards',
        'Priority support',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited devices',
        'Custom AI models',
        'Dedicated SOC team',
        'White-label solution',
        'On-premise deployment',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced AI algorithms detect and analyze threats in real-time, providing immediate alerts and automated responses.'
    },
    {
      icon: Eye,
      title: 'Network Monitoring',
      description: 'Continuous monitoring of network traffic, user behavior, and system activities to identify suspicious patterns.'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Automated incident response with AI-guided remediation steps and escalation procedures for faster resolution.'
    },
    {
      icon: Lock,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting for GDPR, HIPAA, SOX, and other regulatory requirements.'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Faster Detection',
      description: 'AI reduces threat detection time from hours to seconds.',
      value: '99%'
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'Automated response reduces incident resolution time by 80%.',
      value: '80%'
    },
    {
      icon: Shield,
      title: 'Threat Prevention',
      description: 'Proactive threat prevention stops 95% of attacks before they cause damage.',
      value: '95%'
    },
    {
      icon: Users,
      title: 'Cost Savings',
      description: 'Reduce security costs by 60% while improving protection.',
      value: '60%'
    }
  ];

  const threats = [
    'Malware & Ransomware',
    'Phishing Attacks',
    'DDoS Attacks',
    'Insider Threats',
    'Advanced Persistent Threats',
    'Zero-day Exploits',
    'Social Engineering',
    'Data Breaches'
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Monitor - Zion Tech Group | Advanced Threat Detection</title>
        <meta name="description" content="Advanced AI-powered cybersecurity monitoring with real-time threat detection, automated response, and 24/7 protection. Secure your business with intelligent security solutions." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, automated response, cyber defense, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>AI Security Technology</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Monitor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered cybersecurity monitoring that detects threats in real-time, responds automatically, 
              and provides 24/7 protection for your business. Stop 95% of attacks before they cause damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI cybersecurity monitor combines machine learning with security expertise to provide comprehensive protection.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Security Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From threat detection to incident response, our AI security monitor covers every aspect of cybersecurity.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threats Protected Against */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Threats We Protect Against
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI security monitor detects and prevents a wide range of cyber threats and attacks.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {threats.map((threat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{threat}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proven Security Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI cybersecurity monitor delivers measurable improvements in security posture and threat response.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Security Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to protect businesses of all sizes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group ${plan.popular ? 'ring-2 ring-red-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
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
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white' 
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven cybersecurity protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICybersecurityMonitorPage;