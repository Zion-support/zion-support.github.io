'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, AlertTriangle, Code, DollarSign, Clock, Users, Zap, ArrowRight, Star, TrendingUp, Lock, FileText, BarChart, Smartphone, Globe, Database, Settings, Target, Brain, Cloud, Smartphone as Mobile, Monitor, Server, Network, Cpu, Shield as Security, BarChart3, Users as Team, Zap as Lightning, ArrowRight as Arrow, Star as StarIcon, TrendingUp as Growth, Lock as Secure, FileText as Document, BarChart as Analytics, Smartphone as Phone, Globe as World, Database as Data, Settings as Config, Target as Goal, Brain as AI, Cloud as CloudIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISmartContractAuditorPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Automated Vulnerability Detection',
      description: 'AI-powered analysis to identify security vulnerabilities, gas optimization issues, and potential exploits in smart contracts.',
      benefits: ['99.9% accuracy in vulnerability detection', 'Real-time security scanning', 'Comprehensive audit reports', 'Gas optimization recommendations']
    },
    {
      icon: Code,
      title: 'Multi-Language Support',
      description: 'Support for Solidity, Vyper, Rust, and other smart contract languages with advanced static analysis.',
      benefits: ['Solidity & Vyper support', 'Rust smart contract analysis', 'Cross-language compatibility', 'Version-specific optimizations']
    },
    {
      icon: BarChart,
      title: 'Risk Assessment',
      description: 'Comprehensive risk scoring and impact analysis for identified vulnerabilities with remediation guidance.',
      benefits: ['Severity classification', 'Impact assessment', 'Remediation steps', 'Risk mitigation strategies']
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of deployed contracts with instant alerts for security threats and anomalies.',
      benefits: ['24/7 contract monitoring', 'Instant threat alerts', 'Anomaly detection', 'Automated response']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small projects and individual developers',
      features: [
        'Up to 5 smart contracts',
        'Basic vulnerability scanning',
        'Standard audit reports',
        'Email support',
        'Gas optimization tips'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing DeFi projects and development teams',
      features: [
        'Up to 25 smart contracts',
        'Advanced AI analysis',
        'Comprehensive audit reports',
        'Priority support',
        'Custom security rules',
        'Integration APIs',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large-scale DeFi protocols and enterprise clients',
      features: [
        'Unlimited smart contracts',
        'AI-powered deep analysis',
        'Custom audit frameworks',
        '24/7 dedicated support',
        'White-label solutions',
        'Advanced integrations',
        'Compliance reporting',
        'Custom security training'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Shield, value: '10,000+', label: 'Contracts Audited' },
    { icon: CheckCircle, value: '99.9%', label: 'Vulnerability Detection' },
    { icon: Clock, value: '< 5 min', label: 'Average Scan Time' },
    { icon: Users, value: '500+', label: 'Active Users' }
  ];

  const benefits = [
    'Reduce security risks by 95%',
    'Save 80% on manual audit costs',
    'Faster time to market',
    'Compliance with security standards',
    'Automated vulnerability patching',
    'Real-time threat monitoring',
    'Expert security recommendations',
    'Integration with development workflows'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Smart Contract Auditor - Zion Tech Group | Automated Security Analysis</title>
        <meta name="description" content="AI-powered smart contract security auditing with automated vulnerability detection, gas optimization, and comprehensive risk assessment. Secure your DeFi protocols with our advanced AI technology." />
        <meta name="keywords" content="smart contract auditor, AI security analysis, DeFi security, blockchain auditing, vulnerability detection, gas optimization, smart contract testing" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Smart Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Auditor</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Secure your DeFi protocols with our AI-powered smart contract auditing platform. 
              Automated vulnerability detection, gas optimization, and comprehensive security analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced AI Security Analysis
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive smart contract security with AI-powered vulnerability detection and optimization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your smart contract security needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-purple-500 bg-purple-500/10' : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Auditor?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that enhance security and reduce costs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
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
                Secure Your Smart Contracts Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial and experience the power of AI-powered smart contract auditing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/consultation"
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AISmartContractAuditorPage;