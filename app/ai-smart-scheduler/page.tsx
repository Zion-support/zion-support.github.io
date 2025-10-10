'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, Zap, CheckCircle, Star, ArrowRight, Brain, Smartphone, Globe, Shield, BarChart } from 'lucide-react';

const AISmartSchedulerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that learns from your preferences and optimizes meeting times automatically.',
      price: '$29/month'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate with multiple team members across different time zones and schedules.',
      price: '$49/month'
    },
    {
      icon: Zap,
      title: 'Auto-Rescheduling',
      description: 'Automatically reschedules meetings when conflicts arise, with smart conflict resolution.',
      price: '$39/month'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Integrates with Google Calendar, Outlook, Slack, and 50+ other platforms.',
      price: '$19/month'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'AI-powered scheduling',
        'Calendar integration',
        'Basic analytics',
        'Email support',
        'Up to 5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced AI features',
        'Team collaboration tools',
        'Priority support',
        'Up to 25 team members',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Advanced analytics',
        'Custom AI training',
        '24/7 phone support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Smart Scheduler - Intelligent Meeting Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered scheduling solution that automates meeting coordination, optimizes time slots, and eliminates scheduling conflicts. Start your free trial today!" />
        <meta name="keywords" content="AI scheduler, meeting management, calendar automation, team scheduling, smart calendar" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-smart-scheduler" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Smart Scheduler">
              AI Smart Scheduler
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Intelligent Meeting Management Revolution
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Transform your scheduling chaos into seamless efficiency with our AI-powered smart scheduler. 
              Automatically coordinate meetings, optimize time slots, and eliminate scheduling conflicts with 
              cutting-edge artificial intelligence.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">95% Time Saved</h3>
                <p className="text-gray-300">Reduce scheduling time from hours to minutes with AI automation</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Zero Conflicts</h3>
                <p className="text-gray-300">Eliminate double-bookings and scheduling conflicts automatically</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-3">Global Teams</h3>
                <p className="text-gray-300">Seamlessly coordinate across time zones and cultures</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📧 Start Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-lg font-bold text-cyan-400">{feature.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+13024640950"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Seamless Integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {['Google Calendar', 'Outlook', 'Slack', 'Teams', 'Zoom', 'Webex'].map((integration, index) => (
              <div key={index} className="cyber-card p-4 text-center">
                <div className="text-2xl mb-2">📅</div>
                <div className="text-white font-medium">{integration}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart Inc.',
                content: 'AI Smart Scheduler saved us 10 hours per week. The AI perfectly understands our team dynamics.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Operations Director, Global Corp',
                content: 'Finally, a scheduling solution that works across all our global offices. Zero conflicts in 6 months!',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'Project Manager, Creative Agency',
                content: 'The AI learns our preferences so well, it feels like having a personal assistant for scheduling.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Scheduling?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who have revolutionized their scheduling with AI Smart Scheduler. 
            Start your free 14-day trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              📧 Start Free Trial
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-300 text-sm mb-2">
              📍 364 E Main St STE 1008, Middletown, DE 19709
            </p>
            <p className="text-gray-300 text-sm">
              ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AISmartSchedulerPage;