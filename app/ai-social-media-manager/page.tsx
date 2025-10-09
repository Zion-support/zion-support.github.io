'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, CheckCircle, ArrowRight, Star, TrendingUp, Users, BarChart, Zap, Brain, Target, Clock, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags automatically'
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'Optimal posting times based on audience engagement patterns'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive performance tracking and audience analysis'
    },
    {
      icon: Users,
      title: 'Audience Intelligence',
      description: 'Deep insights into your audience preferences and behavior'
    },
    {
      icon: Target,
      title: 'Campaign Optimization',
      description: 'AI-powered campaign adjustments for maximum engagement'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Management',
      description: 'Manage all social media platforms from one dashboard'
    }
  ];

  const benefits = [
    '200% increase in engagement rates',
    '20+ hours saved per week',
    '40% more reach and visibility',
    '60% better content performance',
    '85% improvement in posting consistency',
    '50% increase in follower growth'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic AI content creation',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced AI content creation',
        'Detailed analytics & insights',
        'Priority support',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'Custom AI models',
        'White-label options',
        '24/7 dedicated support',
        'API access'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Most Popular AI Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Social Media Manager">
              AI Social Media Manager
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Automate Your Social Media with AI
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your social media presence with AI-powered content creation, smart scheduling, 
              and advanced analytics. Save 20+ hours per week while increasing engagement by 200%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <Link 
                to="/contact" 
                className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to dominate social media with AI assistance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16" aria-labelledby="benefits-heading">
          <div className="cyber-card p-8">
            <h2 id="benefits-heading" className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose the plan that fits your social media needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'cyber-button' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Social Media?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses already using AI Social Media Manager to grow their online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <Link 
              to="/contact" 
              className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISocialMediaManagerPage;