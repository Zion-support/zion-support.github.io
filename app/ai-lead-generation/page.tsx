'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Target, Users, Mail, Phone, BarChart, Zap, Brain, CheckCircle, Phone as PhoneIcon, Mail as MailIcon, ArrowRight, TrendingUp, Globe, Database, Building, ShoppingCart, Cloud, Home } from 'lucide-react';
const AILeadGenerationPage: React.FC = React.memo(() => {
  const features = [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Intelligent lead scoring using machine learning to identify high-value prospects and prioritize sales efforts.',
      benefits: ['95% accuracy', 'Real-time scoring', 'Behavioral analysis']
    },
    {
      icon: Target,
      title: 'Smart Prospecting',
      description: 'AI-powered prospecting that finds ideal customers based on your ideal customer profile and market data.',
      benefits: ['Automated research', 'Contact discovery', 'Intent signals']
    },
    {
      icon: Mail,
      title: 'Email Sequences',
      description: 'Personalized email sequences that automatically follow up with prospects and nurture leads through the sales funnel.',
      benefits: ['Personalization', 'A/B testing', 'Auto-optimization']
    },
    {
      icon: BarChart,
      title: 'Lead Analytics',
      description: 'Comprehensive analytics on lead quality, conversion rates, and campaign performance to optimize your strategy.',
      benefits: ['Conversion tracking', 'ROI analysis', 'Performance insights']
    },
    {
      icon: Zap,
      title: 'CRM Integration',
      description: 'Seamless integration with popular CRMs to automatically sync leads and track the entire sales process.',
      benefits: ['Auto-sync', 'Real-time updates', 'Pipeline management']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative features that allow your team to work together on lead generation and follow-up activities.',
      benefits: ['Team workflows', 'Lead assignment', 'Activity tracking']
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI scoring',
        'Email sequences',
        'CRM integration',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI algorithms',
        'Multi-channel outreach',
        'Advanced analytics',
        'Priority support',
        'A/B testing',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'All channels',
        'Custom integrations',
        'Dedicated support',
        'Custom development',
        'Advanced compliance',
        'SLA guarantee'
      ],
      popular: false
    }
  ];
  const stats = [
    { number: '300%', label: 'More Qualified Leads' },
    { number: '85%', label: 'Time Savings' },
    { number: '95%', label: 'Lead Accuracy' },
    { number: '50+', label: 'CRM Integrations' }
  ];
  const useCases = [
    {
      title: 'B2B Lead Generation',
      description: 'Generate high-quality B2B leads using AI-powered company research, contact discovery, and intent signals.',
      icon: Building
    },
    {
      title: 'E-commerce Prospecting',
      description: 'Find and engage potential customers for e-commerce businesses with personalized outreach and retargeting.',
      icon: ShoppingCart
    },
    {
      title: 'SaaS Trial Conversion',
      description: 'Convert free trial users into paying customers with intelligent lead nurturing and personalized follow-ups.',
      icon: Cloud
    },
    {
      title: 'Real Estate Leads',
      description: 'Generate qualified real estate leads with AI-powered market analysis and automated follow-up sequences.',
      icon: Home
    }
  ];
  return (
    <>
      <SEOOptimizer
        title="AI Lead Generation Platform - Zion Tech Group"
        description="Generate 300% more qualified leads with AI-powered prospecting, lead scoring, and automated outreach. 85% time savings and 95% accuracy."
        keywords={['AI lead generation', 'lead scoring', 'prospecting', 'sales automation', 'lead nurturing']}
        canonicalUrl="https://ziontechgroup.com/ai-lead-generation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main role="main" role="main" className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Lead Generation Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Generate 300% more qualified leads with AI
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
                Our AI-powered lead generation platform helps businesses find, score, and nurture high-quality leads 
                with intelligent automation and personalized outreach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <MailIcon className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Lead Generation Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-500 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Use Cases Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Perfect for Every Industry
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-500">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
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
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to 3x Your Lead Generation?
              </h2>
              <p className="text-xl text-gray-500 mb-8">
                Join 2,500+ companies already using our AI lead generation platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <MailIcon className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
);

// Focus management utility
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

// Skip to main content functionality
const skipToMain = () => {
  const main = document.querySelector('main');
  if (main) {
    focusElement(main);
  }
};


export default AILeadGenerationPage;