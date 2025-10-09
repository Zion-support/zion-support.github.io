'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Smartphone, Code, Zap, CheckCircle, Phone, Mail, Brain, Shield, Users, Target, BarChart } from 'lucide-react';

const AIMobileBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'No-Code Builder',
      description: 'Build native mobile apps with drag-and-drop interface and AI assistance - no coding required.',
      benefits: ['Visual builder', 'AI suggestions', 'Real-time preview']
    },
    {
      icon: Brain,
      title: 'AI-Powered Development',
      description: 'AI assists with app logic, UI design, and feature implementation to speed up development.',
      benefits: ['Smart suggestions', 'Auto-code generation', 'Design optimization']
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Deploy your apps instantly to app stores with automated build and submission processes.',
      benefits: ['One-click deploy', 'Auto-updates', 'Store optimization']
    },
    {
      icon: Target,
      title: 'Cross-Platform',
      description: 'Build once and deploy to iOS, Android, and web with native performance and look.',
      benefits: ['iOS & Android', 'Web support', 'Native performance']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, authentication, and compliance built-in.',
      benefits: ['Data encryption', 'Secure authentication', 'Compliance ready']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Built-in analytics and crash reporting to monitor app performance and user behavior.',
      benefits: ['Real-time analytics', 'Crash reporting', 'User insights']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small apps',
      features: [
        'Up to 2 apps',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'App store deployment'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 apps',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'White-label options',
        'API integrations',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited apps',
        'Custom AI models',
        'Custom development',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'Unlimited users',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '90%', label: 'Faster Development' },
    { number: '10x', label: 'Cost Reduction' },
    { number: '100+', label: 'App Templates' },
    { number: '24/7', label: 'AI Assistance' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Mobile App Builder - Zion Tech Group"
        description="Build native mobile apps 90% faster with AI-powered no-code builder. Cross-platform development with instant deployment to app stores."
        keywords={['AI mobile builder', 'no-code app builder', 'mobile app development', 'cross-platform apps', 'app store deployment']}
        canonicalUrl="https://ziontechgroup.com/ai-mobile-builder"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Mobile App Builder
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Build native mobile apps 90% faster with AI
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered mobile app builder combines no-code development with intelligent assistance 
                to help you create professional mobile apps without coding knowledge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
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
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful App Building Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
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
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
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
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 1,500+ developers already using our AI builder
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
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

export default AIMobileBuilderPage;