'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  DollarSign,
  Shield,
  BarChart,
  Lock,
  TrendingUp,
  Users,
  CreditCard,
  Building,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Zap,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  ExternalLink,
  Play,
  Pause,
  RefreshCw,
  Settings,
  Activity,
  Database,
  Globe,
  Award
} from 'lucide-react';

const FinancialITPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMonitoring, setIsMonitoring] = useState(true);

  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Enterprise-level security with encryption, multi-factor authentication, and compliance.',
      benefits: ['End-to-end encryption', 'Multi-factor auth', 'SOC 2 compliance', 'Regular audits']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Advanced analytics and reporting for informed financial decision making.',
      benefits: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization']
    },
    {
      icon: Lock,
      title: 'Regulatory Compliance',
      description: 'Full compliance with financial regulations and industry standards.',
      benefits: ['PCI DSS', 'SOX compliance', 'GDPR', 'Basel III']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Ultra-fast processing for high-frequency trading and real-time transactions.',
      benefits: ['Microsecond latency', 'High throughput', 'Auto-scaling', 'Load balancing']
    }
  ];

  const services = [
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure and efficient payment processing solutions for all transaction types.',
      features: ['Credit card processing', 'ACH transfers', 'Wire transfers', 'Cryptocurrency'],
      pricing: 'Starting at $0.29 per transaction'
    },
    {
      icon: Building,
      title: 'Core Banking Systems',
      description: 'Modern core banking platforms with real-time processing capabilities.',
      features: ['Account management', 'Loan processing', 'Deposit systems', 'Customer portal'],
      pricing: 'Custom pricing based on scale'
    },
    {
      icon: BarChart,
      title: 'Risk Management',
      description: 'Advanced risk assessment and management tools for financial institutions.',
      features: ['Credit risk analysis', 'Fraud detection', 'Compliance monitoring', 'Stress testing'],
      pricing: 'Starting at $5,000/month'
    },
    {
      icon: Users,
      title: 'Customer Analytics',
      description: 'AI-powered customer insights and behavior analysis for better service delivery.',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Personalization'],
      pricing: 'Starting at $2,500/month'
    }
  ];

  const complianceStandards = [
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard', status: 'Compliant' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act compliance', status: 'Compliant' },
    { name: 'GDPR', description: 'General Data Protection Regulation', status: 'Compliant' },
    { name: 'Basel III', description: 'International banking regulations', status: 'Compliant' },
    { name: 'ISO 27001', description: 'Information security management', status: 'Certified' },
    { name: 'SOC 2', description: 'Security, availability, and confidentiality', status: 'Certified' }
  ];

  const securityMetrics = [
    { label: 'Security Incidents', value: '0', trend: '0%' },
    { label: 'Uptime', value: '99.99%', trend: '+0.1%' },
    { label: 'Compliance Score', value: '100%', trend: '+5%' },
    { label: 'Response Time', value: '< 50ms', trend: '-20%' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'First National Bank',
      role: 'CTO',
      content: 'Zion Tech Group\'s financial IT solutions have transformed our operations. The security and compliance features are outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Finance Corp',
      role: 'VP of Technology',
      content: 'The real-time analytics and risk management tools have given us unprecedented insights into our business.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureBank Ltd',
      role: 'Head of IT',
      content: 'Outstanding security and compliance. We\'ve achieved 100% regulatory compliance with their solutions.',
      rating: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
        return 'text-green-400';
      case 'Certified':
        return 'text-blue-400';
      case 'In Progress':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Financial IT Solutions - Zion Tech Group | Banking & Finance Technology</title>
        <meta name="description" content="Transform your financial institution with our secure, compliant IT solutions. Bank-grade security, real-time analytics, and regulatory compliance for the finance industry." />
        <meta name="keywords" content="financial IT, banking technology, payment processing, risk management, compliance, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Financial IT
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your financial institution with secure, compliant, and innovative IT solutions. 
              Built for the unique needs of the banking and finance industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart },
              { id: 'features', label: 'Features', icon: Shield },
              { id: 'services', label: 'Services', icon: Building },
              { id: 'compliance', label: 'Compliance', icon: Lock }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Financial IT Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our financial IT solutions are designed specifically for the banking and finance industry, 
                providing the security, compliance, and performance you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-300 mb-1">{metric.label}</p>
                  <p className="text-green-400 text-sm">{metric.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Tab */}
      {activeTab === 'features' && (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our financial IT solutions provide the security, compliance, and performance 
                required for modern financial institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive financial IT services designed to meet the unique needs of your institution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compliance Tab */}
      {activeTab === 'compliance' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Regulatory Compliance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Full compliance with financial regulations and industry standards to ensure 
                your institution meets all regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
                    <span className={`text-sm font-semibold ${getStatusColor(standard.status)}`}>
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our financial IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Financial Institution?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how our financial IT solutions can help you achieve your goals 
              while maintaining the highest standards of security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Get Started
              </a>
              <a
                href="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialITPage;