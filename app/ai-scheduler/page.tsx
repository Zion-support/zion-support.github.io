'use client';
import React from 'react';
import { Calendar, Clock, CheckCircle, Star, ArrowRight, Users, Zap, DollarSign, Shield, Sparkles, Smartphone, Globe, Target, Bell } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIScheduler: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that finds the best meeting times for all participants automatically',
      benefits: ['Automatic time zone handling', 'Conflict resolution', 'Optimal time suggestions']
    },
    {
      icon: Clock,
      title: 'Time Blocking',
      description: 'Intelligent time blocking and calendar optimization for maximum productivity',
      benefits: ['Focus time protection', 'Buffer time management', 'Workload balancing']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Sync',
      description: 'Seamlessly sync with Google Calendar, Outlook, Apple Calendar, and more',
      benefits: ['Universal compatibility', 'Real-time sync', 'Cross-platform access']
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'AI-powered reminder system that adapts to your work patterns and preferences',
      benefits: ['Contextual reminders', 'Adaptive timing', 'Multi-channel notifications']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: 19,
      period: 'month',
      description: 'Perfect for individuals and freelancers',
      features: [
        '1 calendar integration',
        'Basic AI scheduling',
        'Standard reminders',
        'Email support',
        'Mobile app access',
        '7-day free trial'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: 59,
      period: 'month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Up to 10 team members',
        'Advanced AI scheduling',
        'Smart reminders',
        'Priority support',
        'Team collaboration tools',
        'Unlimited integrations',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 149,
      period: 'month',
      description: 'For large organizations with complex scheduling needs',
      features: [
        'Unlimited team members',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'API access',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Project Manager',
      company: 'TeamSync Corp',
      content: 'AI Scheduler has eliminated all our scheduling conflicts. We save 5+ hours per week on meeting coordination.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'Freelance Consultant',
      company: 'Independent',
      content: 'The smart scheduling feature is incredible. It finds the perfect meeting times that work for everyone.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      role: 'Operations Director',
      company: 'Efficiency Plus',
      content: 'Our team productivity increased by 30% after implementing AI Scheduler. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Scheduler - Intelligent Calendar & Meeting Management | Zion Tech Group"
        description="Streamline your scheduling with AI Scheduler. Smart meeting coordination, time blocking, and calendar optimization. Starting at $19/month."
        keywords={['AI scheduler', 'calendar management', 'meeting scheduler', 'time blocking', 'calendar optimization', 'smart scheduling']}
        canonicalUrl="https://ziontechgroup.com/ai-scheduler"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Scheduling</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
                AI Scheduler
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Never miss a meeting again with our intelligent scheduling assistant. 
                AI-powered calendar optimization and smart meeting coordination for maximum productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-gray-300">Hours Saved Per Week</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Scheduling Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">30%</div>
                <div className="text-gray-300">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Assistant Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Intelligent Scheduling Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to master your calendar and boost productivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Affordable Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your scheduling needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                      : 'border border-gray-600 text-white hover:bg-gray-800'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Loved by Teams Worldwide</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI Scheduler is transforming productivity across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="cyber-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Master Your Calendar?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven scheduling
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <a 
                  href="tel:+13024640950" 
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIScheduler;