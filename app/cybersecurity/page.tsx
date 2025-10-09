'use client';
import React from 'react';
import { Shield, AlertTriangle, Eye, Lock, CheckCircle, ArrowRight, Star, Clock, Target, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and prevention with real-time monitoring',
      benefits: ['Real-time monitoring', 'AI threat detection', 'Automated response']
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security audits and vulnerability scanning',
      benefits: ['Security audits', 'Vulnerability scanning', 'Risk assessment']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring with incident response and forensics',
      benefits: ['24/7 monitoring', 'Incident response', 'Forensic analysis']
    },
    {
      icon: Lock,
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations',
      benefits: ['Compliance tracking', 'Audit support', 'Regulatory adherence']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$1,599',
      period: '/month',
      description: 'Perfect for small businesses with basic security needs',
      features: [
        'Basic threat detection',
        'Vulnerability scanning',
        'Security monitoring',
        'Email support',
        'Monthly reports',
        'Standard compliance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for growing businesses with complex security requirements',
      features: [
        'Advanced threat detection',
        'Comprehensive vulnerability assessment',
        '24/7 security monitoring',
        'Priority support',
        'Weekly reports',
        'Advanced compliance',
        'Incident response',
        'Security training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,999',
      period: '/month',
      description: 'For large organizations with enterprise security needs',
      features: [
        'Premium threat detection',
        'Custom security assessments',
        'Dedicated security team',
        'Dedicated support',
        'Real-time reports',
        'Full compliance suite',
        'Advanced incident response',
        'Custom integrations',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Threat Prevention',
      description: 'Prevent 99.9% of cyber threats with advanced AI detection',
      value: '99.9%'
    },
    {
      icon: Zap,
      title: 'Response Time',
      description: 'Respond to security incidents in under 5 minutes',
      value: '<5min'
    },
    {
      icon: Clock,
      title: 'Uptime Guarantee',
      description: '99.99% uptime with continuous security monitoring',
      value: '99.99%'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Maintain compliance with industry standards and regulations',
      value: '100%'
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 pt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl text-red-400 mb-8 font-medium neon-pulse">
              Advanced Security Protection for Your Business
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Protect your business from cyber threats with our comprehensive cybersecurity solutions. 
              Advanced threat detection, vulnerability assessment, 24/7 monitoring, and incident response 
              to keep your data and systems secure.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Threat Prevention</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">&lt;5min</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-gray-300">Compliance</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#demo"
                className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Comprehensive Security Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced cybersecurity solutions that protect your business from evolving threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-red-400 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge security technology that provides comprehensive protection for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-red-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Choose Your Security Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-red-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-red-400 text-white hover:bg-red-500'
                      : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your security assessment today and protect your business from cyber threats. 
              No setup fees, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CybersecurityPage;