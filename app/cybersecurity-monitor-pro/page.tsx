'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CpuChipIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityMonitorProPage() {
  const features = [
    '24/7 Real-time Threat Monitoring',
    'AI-Powered Threat Detection',
    'Automated Incident Response',
    'Compliance Reporting (SOC2, GDPR, HIPAA)',
    'Vulnerability Assessment & Scanning',
    'Security Awareness Training',
    'Dark Web Monitoring',
    'Email Security Protection',
    'Network Traffic Analysis',
    'Mobile Device Management'
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic Threat Monitoring',
        'Email Security',
        'Vulnerability Scanning',
        'Monthly Reports',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI Monitoring',
        'Real-time Alerts',
        'Compliance Reporting',
        'Security Training',
        'Priority Support',
        'API Integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Complete Security Suite',
        'Custom Integrations',
        'Dedicated Security Team',
        'On-premise Deployment',
        'White-label Solution',
        '24/7 Phone Support'
      ],
      popular: false
    }
  ];

  const securityFeatures = [
    {
      title: 'Threat Detection',
      description: 'AI-powered detection of advanced threats',
      icon: CpuChipIcon
    },
    {
      title: 'Compliance',
      description: 'Automated compliance reporting',
      icon: DocumentTextIcon
    },
    {
      title: 'Incident Response',
      description: 'Automated response to security incidents',
      icon: ExclamationTriangleIcon
    },
    {
      title: 'Data Protection',
      description: 'Advanced data encryption and protection',
      icon: LockClosedIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Monitor Pro - Zion Tech Group</title>
        <meta name="description" content="24/7 threat detection and response system with automated security scanning and compliance reporting. Protect your business with advanced AI cybersecurity." />
        <meta name="keywords" content="cybersecurity, threat detection, security monitoring, compliance, SOC2, GDPR, HIPAA, AI security" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-red-900/20 to-orange-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text neon-text">
                Cybersecurity Monitor Pro
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with 24/7 AI-powered threat detection and automated response. 
              <span className="text-red-400 font-semibold"> Advanced security monitoring, compliance reporting, incident response.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Security Assessment
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                <span>No Setup Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced protection against evolving cyber threats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                <CheckCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Advanced Security Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multi-layered security approach to protect your digital assets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover-lift text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Security That Scales
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift relative ${
                plan.popular ? 'border-red-500 shadow-lg shadow-red-500/25' : 'border-slate-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 transform hover:scale-105'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Don't Wait for a Security Breach
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Protect your business today with our advanced cybersecurity monitoring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Security Consultation
            </Link>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </>
  );
}