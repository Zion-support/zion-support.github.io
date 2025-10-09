'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, Target, BarChart, Users, CheckCircle, Zap, Brain, ArrowRight, Star, Globe, Phone, MapPin, TrendingUp, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEmailMarketing: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create compelling email campaigns with AI-powered content generation and optimization',
      benefits: ['Personalized subject lines', 'Dynamic content', 'A/B testing automation']
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement',
      benefits: ['Behavioral triggers', 'Demographic targeting', 'Engagement scoring']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Track performance with detailed analytics and AI-powered insights for optimization',
      benefits: ['Open rate optimization', 'Click-through analysis', 'Revenue attribution']
    },
    {
      icon: Send,
      title: 'Automated Campaigns',
      description: 'Set up sophisticated email sequences that nurture leads and drive conversions',
      benefits: ['Drip campaigns', 'Welcome series', 'Abandoned cart recovery']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small businesses and entrepreneurs',
      features: [
        '1,000 contacts',
        'Unlimited emails',
        'Basic templates',
        'AI content generation',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '10,000 contacts',
        'Unlimited emails',
        'Advanced templates',
        'AI content generation',
        'Automation workflows',
        'Priority support',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        'Custom templates',
        'Advanced AI features',
        'White-label solution',
        'Dedicated support',
        'API access'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'Marketing Manager',
      company: 'E-commerce Plus',
      content: 'AI Email Marketing increased our open rates by 65% and our click-through rates by 40%. Amazing results!',
      rating: 5
    },
    {
      name: 'Mark Wilson',
      role: 'CEO',
      company: 'SaaS Startup',
      content: 'The AI content generation is incredible. We save 15 hours per week on email creation.',
      rating: 5
    },
    {
      name: 'Sarah Davis',
      role: 'Digital Marketing Director',
      company: 'Retail Chain',
      content: 'Finally, an email marketing platform that understands our customers and creates personalized content.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network particle-system">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Email Marketing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-flicker-enhanced">
            AI Email Marketing
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium cyber-glow-enhanced">
            Intelligent Email Campaigns That Convert
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your email marketing with AI-powered content generation, smart segmentation, 
            and automated campaigns. Increase open rates by 65% and click-through rates by 40%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button px-8 py-4 text-lg"
              style={{background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'}}
            >
              Start Free Trial
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card-enhanced holographic-card quantum-field p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">65%</div>
              <div className="text-gray-300">Higher Open Rates</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">More Click-Throughs</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15h</div>
              <div className="text-gray-300">Time Saved Weekly</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-gray-300">ROI Increase</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to create email campaigns that convert
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card-enhanced holographic-card quantum-field p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose the plan that fits your email marketing needs and budget
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card-enhanced holographic-card quantum-field p-8 relative ${
                plan.popular ? 'border-2 border-blue-400' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-400 to-purple-600 text-black hover:from-blue-500 hover:to-purple-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Join thousands of businesses who have transformed their email marketing with AI
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-enhanced holographic-card quantum-field p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-blue-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card-enhanced holographic-card quantum-field p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who have revolutionized their email marketing with AI. 
              Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <Link
                to="/contact"
                className="cyber-button px-8 py-4 text-lg"
                style={{background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'}}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIEmailMarketing;