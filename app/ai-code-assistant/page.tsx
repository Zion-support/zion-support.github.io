import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Brain, Zap, Shield, Star, ArrowRight, CheckCircle, Users, Clock, DollarSign, Phone } from 'lucide-react';

const AICodeAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Intelligent Code Generation',
      description: 'Generate high-quality code in 50+ programming languages with AI-powered suggestions and completions.',
      benefits: ['Faster development cycles', 'Reduced coding errors', 'Best practice compliance']
    },
    {
      icon: Brain,
      title: 'Smart Code Review',
      description: 'Automated code analysis with security vulnerability detection, performance optimization, and style compliance.',
      benefits: ['Enhanced code quality', 'Security vulnerability detection', 'Performance optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Assistance',
      description: 'Get instant help with debugging, refactoring, and code explanations as you type.',
      benefits: ['Instant problem solving', 'Learning acceleration', 'Reduced debugging time']
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Comprehensive security scanning with vulnerability detection and compliance checking.',
      benefits: ['Proactive security', 'Compliance assurance', 'Risk mitigation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        '5,000 code generations/month',
        'Basic code review',
        '10 programming languages',
        'Email support',
        'Basic security scanning'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        '25,000 code generations/month',
        'Advanced code review',
        '50+ programming languages',
        'Priority support',
        'Advanced security scanning',
        'Team collaboration tools',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large development teams',
      features: [
        'Unlimited code generations',
        'Enterprise-grade code review',
        'All programming languages',
        '24/7 dedicated support',
        'Full security suite',
        'Advanced analytics',
        'Custom AI model training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Programming Languages' },
    { number: '95%', label: 'Code Quality Improvement' },
    { number: '3x', label: 'Faster Development' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Code Assistant
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 cyber-glow">
              Your Intelligent Programming Companion
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Revolutionize your coding experience with our AI-powered assistant. Generate code, 
              review quality, debug issues, and learn best practices - all in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center cyber-card p-6">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-4" />
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
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
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Coding Experience?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of developers who are already coding faster and better with our AI assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AICodeAssistantPage;
