'use client';
import React from 'react';
import { Scale, FileText, Search, Shield, CheckCircle, ArrowRight, Star, Clock, Target, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AILegalAssistantPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Contract Analysis',
      description: 'AI-powered contract review with risk identification and compliance checking',
      benefits: ['Faster reviews', 'Risk identification', 'Compliance assurance']
    },
    {
      icon: Search,
      title: 'Legal Research',
      description: 'Comprehensive legal research with case law analysis and precedent identification',
      benefits: ['Comprehensive research', 'Case law analysis', 'Precedent identification']
    },
    {
      icon: Scale,
      title: 'Document Generation',
      description: 'Generate legal documents, contracts, and agreements with AI assistance',
      benefits: ['Document automation', 'Template generation', 'Customization options']
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring',
      description: 'Monitor regulatory compliance and identify potential legal risks',
      benefits: ['Risk monitoring', 'Compliance tracking', 'Alert system']
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo Practitioner',
      price: '$399',
      period: '/month',
      description: 'Perfect for individual lawyers and small law firms',
      features: [
        'Basic contract analysis',
        'Legal research tools',
        'Document generation',
        'Compliance monitoring',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Law Firm',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing law firms with multiple attorneys',
      features: [
        'Advanced contract analysis',
        'Comprehensive legal research',
        'Advanced document generation',
        'Real-time compliance monitoring',
        'Priority support',
        'Custom templates',
        'Team collaboration',
        'Client management'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,599',
      period: '/month',
      description: 'For large law firms and corporate legal departments',
      features: [
        'Premium AI analysis',
        'Custom legal research',
        'Enterprise document generation',
        'Advanced compliance tools',
        'Dedicated support',
        'Custom integrations',
        'White-label options',
        'Advanced security',
        'API access'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Faster Reviews',
      description: 'Reduce contract review time by 70% with AI-powered analysis',
      value: '70%'
    },
    {
      icon: Zap,
      title: 'Risk Reduction',
      description: 'Identify potential legal risks and compliance issues before they become problems',
      value: '85%'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Automate repetitive legal tasks and focus on high-value work',
      value: '20h/week'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Ensure regulatory compliance with automated monitoring and alerts',
      value: '99%'
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 pt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Legal Assistant
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
              Intelligent Legal Research & Document Analysis
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your legal practice with AI-powered contract analysis, legal research, 
              document generation, and compliance monitoring. Work faster, reduce risks, and 
              deliver better outcomes for your clients with intelligent legal automation.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
                <div className="text-gray-300">Faster Reviews</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-gray-300">Risk Reduction</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">20h</div>
                <div className="text-gray-300">Time Saved/Week</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">99%</div>
                <div className="text-gray-300">Compliance Assurance</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#demo"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
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
              Transform Your Legal Practice
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered legal solutions that deliver measurable results and significant time savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
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
              Advanced AI Legal Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology that automates and optimizes every aspect of legal practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-cyan-400">
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
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your legal practice needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
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
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven legal automation. 
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
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
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

export default AILegalAssistantPage;