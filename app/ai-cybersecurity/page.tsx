'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Brain, Lock, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, TrendingUp, Users, Settings, Globe, Cpu, Database, Cloud, Eye, Activity, Zap, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICybersecurityPage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time with 99.9% accuracy',
      color: 'text-purple-400'
    },
    {
      icon: Brain,
      title: 'Behavioral Analysis',
      description: 'Machine learning models that analyze user behavior to identify anomalies and potential threats',
      color: 'text-blue-400'
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Comprehensive zero trust architecture with continuous verification and access control',
      color: 'text-green-400'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Automated incident response with AI-powered threat hunting and remediation',
      color: 'text-red-400'
    }
  ];

  const capabilities = [
    {
      title: 'Network Security',
      description: 'Comprehensive network protection with AI-powered monitoring and analysis',
      icon: Globe,
      features: ['Traffic analysis', 'Intrusion detection', 'DDoS protection', 'Network segmentation']
    },
    {
      title: 'Endpoint Protection',
      description: 'Advanced endpoint security with behavioral analysis and threat prevention',
      icon: Target,
      features: ['Behavioral analysis', 'Malware detection', 'Device control', 'Data protection']
    },
    {
      title: 'Cloud Security',
      description: 'Cloud-native security solutions with automated compliance and monitoring',
      icon: Cloud,
      features: ['Cloud monitoring', 'Compliance automation', 'Data encryption', 'Access management']
    },
    {
      title: 'Identity Management',
      description: 'AI-powered identity and access management with continuous verification',
      icon: Users,
      features: ['Identity verification', 'Access control', 'Privilege management', 'Audit trails']
    }
  ];

  const benefits = [
    '99.9% threat detection accuracy',
    '90% reduction in security incidents',
    '60% faster incident response',
    '24/7 security monitoring',
    'Automated compliance',
    'Cost-effective security'
  ];

  const pricing = [
    {
      name: 'Essential',
      price: '$1,499',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Basic threat detection',
        'Up to 500 endpoints',
        'Email support',
        'Standard monitoring',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Advanced AI features',
        'Unlimited endpoints',
        'Priority support',
        'Advanced monitoring',
        'Custom reporting',
        'Compliance tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Full customization',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with real-time threat detection, behavioral analysis, and automated incident response. Protect your business 24/7." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security automation, cyber defense, AI security, behavioral analysis" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Cybersecurity
                <span className="block text-red-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI-powered cybersecurity solutions with real-time threat detection, 
                behavioral analysis, and automated incident response. Protect your business 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 hover:text-red-600 transition-colors">
                  View Demo
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
                Cybersecurity Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for comprehensive security protection
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity protection across all attack vectors
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
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
                Why Choose Our AI Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that enhance your security posture
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for cybersecurity solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-red-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-red-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI-powered cybersecurity journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 hover:text-red-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
});

AICybersecurityPage.displayName = 'AICybersecurityPage';

export default AICybersecurityPage;