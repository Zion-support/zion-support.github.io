'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain, 
  Target, 
  TrendingUp, 
  Clock, 
  AlertTriangle,
  Globe,
  Smartphone,
  Server,
  FileText,
  Activity,
  DollarSign,
  Users,
  Eye,
  MousePointer,
  Filter,
  Settings,
  Database,
  Network,
  Key,
  Cloud
} from 'lucide-react';

export default function AICybersecuritySuitePage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time',
      benefits: ['Real-time monitoring', 'Behavioral analysis', 'Anomaly detection']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Zero Trust Security',
      description: 'Implement zero trust architecture with continuous verification and access control',
      benefits: ['Identity verification', 'Device trust scoring', 'Least privilege access']
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      title: 'Advanced Encryption',
      description: 'End-to-end encryption with quantum-resistant algorithms for maximum security',
      benefits: ['AES-256 encryption', 'Quantum-safe protocols', 'Key management']
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-400" />,
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting with AI-powered insights',
      benefits: ['Threat intelligence', 'Risk assessment', 'Compliance reporting']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Automated Response',
      description: 'Automatically respond to security incidents with AI-driven remediation',
      benefits: ['Incident response', 'Threat containment', 'Recovery automation']
    },
    {
      icon: <Eye className="w-8 h-8 text-yellow-400" />,
      title: 'Continuous Monitoring',
      description: '24/7 monitoring of your entire infrastructure with AI-powered surveillance',
      benefits: ['Network monitoring', 'Endpoint protection', 'Cloud security']
    }
  ];

  const securityServices = [
    {
      service: 'Penetration Testing',
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      description: 'Comprehensive security testing to identify vulnerabilities',
      benefits: ['Vulnerability assessment', 'Exploit testing', 'Security recommendations']
    },
    {
      service: 'Security Audits',
      icon: <FileText className="w-6 h-6 text-green-400" />,
      description: 'Thorough security audits to ensure compliance and best practices',
      benefits: ['Compliance checking', 'Policy review', 'Risk evaluation']
    },
    {
      service: 'Incident Response',
      icon: <AlertTriangle className="w-6 h-6 text-purple-400" />,
      description: 'Rapid response to security incidents and data breaches',
      benefits: ['24/7 support', 'Forensic analysis', 'Recovery planning']
    },
    {
      service: 'Security Training',
      icon: <Users className="w-6 h-6 text-orange-400" />,
      description: 'Comprehensive security training for your team',
      benefits: ['Phishing simulation', 'Security awareness', 'Best practices']
    },
    {
      service: 'Compliance Management',
      icon: <CheckCircle className="w-6 h-6 text-red-400" />,
      description: 'Ensure compliance with industry standards and regulations',
      benefits: ['GDPR compliance', 'SOC 2 certification', 'ISO 27001']
    },
    {
      service: 'Cloud Security',
      icon: <Cloud className="w-6 h-6 text-yellow-400" />,
      description: 'Secure your cloud infrastructure and applications',
      benefits: ['Cloud monitoring', 'Access control', 'Data protection']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 users',
        'Basic threat detection',
        'Email security',
        'Firewall protection',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and enterprises',
      features: [
        'Up to 500 users',
        'Advanced AI features',
        '24/7 monitoring',
        'Incident response',
        'Priority support',
        'Compliance tools',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with complex security needs',
      features: [
        'Unlimited users',
        'All security features',
        'Custom AI training',
        'Dedicated support',
        'White-label solution',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'Financial Services',
      content: 'The AI Cybersecurity Suite has protected us from 15+ sophisticated attacks this year. The AI threat detection is incredibly accurate and has saved us millions in potential damages.',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Sarah Johnson',
      company: 'Healthcare Provider',
      content: 'Compliance with HIPAA and other regulations was a nightmare until we implemented this suite. Now we have complete visibility and automated compliance reporting.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Platform',
      content: 'The automated incident response has reduced our mean time to resolution by 80%. Our security team can now focus on strategic initiatives instead of firefighting.',
      rating: 5,
      avatar: 'MC'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '80%', label: 'Faster Incident Response', icon: <Zap className="w-6 h-6" /> },
    { number: '100%', label: 'Compliance Coverage', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '24/7', label: 'Security Monitoring', icon: <Eye className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Protect your business with our AI-powered Cybersecurity Suite. Advanced threat detection, zero trust security, and automated response. 99.9% threat detection accuracy." />
        <meta name="keywords" content="AI cybersecurity, threat detection, zero trust security, security automation, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Cybersecurity{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Suite
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect your business with our AI-powered Cybersecurity Suite. Advanced threat detection, 
            zero trust security, and automated response with 99.9% accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/it-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All IT Services
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Security Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI Cybersecurity Suite provides comprehensive protection with cutting-edge 
              artificial intelligence and machine learning technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Security Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Complete security solutions to protect your business from all angles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{service.service}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-1">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-sm text-gray-400">
                      • {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Security Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans designed to provide the right level of security for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their security.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free security assessment and see how our AI Cybersecurity Suite 
              can protect your business from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Free Assessment
                <Shield className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}