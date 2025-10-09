'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Zap, CheckCircle, Star, ArrowRight, Brain, Smartphone, Mail, Phone, MapPin, Globe, Shield, TrendingUp, BarChart, Settings, Bell, AlertCircle } from 'lucide-react';

const AISmartSchedulerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent calendar management that learns from your preferences and optimizes meeting times automatically.',
      benefits: ['95% reduction in scheduling conflicts', '40% time savings on calendar management', 'Smart conflict resolution']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team scheduling with availability detection and automatic meeting room booking.',
      benefits: ['Real-time availability sync', 'Automatic room booking', 'Team preference learning']
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Automated follow-ups, reminders, and rescheduling based on AI analysis of meeting patterns.',
      benefits: ['Auto-rescheduling', 'Smart reminders', 'Pattern recognition']
    },
    {
      icon: Globe,
      title: 'Multi-Timezone Support',
      description: 'Global scheduling with automatic timezone conversion and cultural meeting preferences.',
      benefits: ['Auto timezone detection', 'Cultural preferences', 'Global availability']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        'Basic AI scheduling',
        'Calendar integration',
        'Email notifications',
        'Mobile app access',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI scheduling',
        'All calendar integrations',
        'Custom meeting templates',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Enterprise AI features',
        'Custom integrations',
        'Advanced security',
        'Dedicated support',
        'Custom development',
        'SSO integration',
        'Compliance tools'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'TechCorp Inc.',
      content: 'AI Smart Scheduler has revolutionized how we manage our team meetings. We save 10+ hours per week on scheduling alone.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The AI learning capabilities are incredible. It knows our preferences better than we do and eliminates scheduling conflicts.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      company: 'Global Solutions',
      content: 'Multi-timezone scheduling was a nightmare before this tool. Now it handles everything automatically.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </a>
            <a href="/contact" className="cyber-button">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">AI Smart Scheduler</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Intelligent Meeting Scheduler
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            AI-Powered Calendar Management & Team Scheduling
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your scheduling with AI that learns your preferences, eliminates conflicts, 
            and optimizes meeting times automatically. Save 10+ hours per week on calendar management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#pricing" className="cyber-button w-full sm:w-auto text-center">
              Start Free Trial
            </a>
            <a href="#demo" className="cyber-button w-full sm:w-auto text-center" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Watch Demo
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Reduction in Scheduling Conflicts</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">10+</div>
              <div className="text-gray-300">Hours Saved Per Week</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16" id="features">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Powerful AI Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16" id="pricing">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Scheduling?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of teams already saving time with AI Smart Scheduler
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="cyber-button">
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved. | 
            <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-2">kleber@ziontechgroup.com</a> | 
            <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 ml-2">(302) 464-0950</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AISmartSchedulerPage;