'use client';
import React from 'react';
import { Calendar, Clock, Users, Zap, CheckCircle, ArrowRight, Star, Brain, Shield, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SmartSchedulingSAASPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling algorithms that optimize time slots based on availability, preferences, and constraints.',
      benefits: ['Auto-scheduling', 'Conflict resolution', 'Optimization algorithms']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate schedules across teams, departments, and time zones with smart notifications.',
      benefits: ['Multi-user support', 'Time zone handling', 'Team collaboration']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-time Updates',
      description: 'Instant updates and notifications when schedules change, with automatic conflict detection and resolution.',
      benefits: ['Live updates', 'Push notifications', 'Conflict alerts']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Integration Hub',
      description: 'Connect with your favorite tools including calendars, CRM, project management, and communication platforms.',
      benefits: ['100+ integrations', 'API access', 'Custom connectors']
    }
  ];

  const useCases = [
    {
      title: 'Healthcare Scheduling',
      description: 'Optimize patient appointments, doctor schedules, and resource allocation for maximum efficiency.',
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      metrics: '40% reduction in no-shows, 25% increase in patient satisfaction'
    },
    {
      title: 'Service Businesses',
      description: 'Manage appointments, staff schedules, and resource booking for salons, spas, and service providers.',
      icon: <Users className="w-8 h-8 text-green-500" />,
      metrics: '30% increase in bookings, 50% reduction in scheduling conflicts'
    },
    {
      title: 'Corporate Meetings',
      description: 'Streamline meeting scheduling, room booking, and team coordination for large organizations.',
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      metrics: '60% faster meeting setup, 35% reduction in scheduling time'
    },
    {
      title: 'Event Management',
      description: 'Coordinate complex events, workshops, and conferences with multi-venue scheduling capabilities.',
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      metrics: '45% improvement in event efficiency, 20% cost reduction'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and individuals',
      features: [
        'Up to 5 users',
        'Basic scheduling features',
        'Standard integrations',
        'Email support',
        'Mobile app access',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced AI scheduling',
        'Premium integrations',
        'Priority support',
        'Advanced analytics',
        'Custom branding',
        'API access',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'Custom AI model training',
        '24/7 support',
        'Dedicated account manager',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Save Time',
      description: 'Reduce scheduling time by 60-80% with automated scheduling and conflict resolution.',
      icon: <Clock className="w-6 h-6 text-green-400" />,
      value: '70%'
    },
    {
      title: 'Reduce Conflicts',
      description: 'Eliminate scheduling conflicts and double-bookings with intelligent conflict detection.',
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      value: '95%'
    },
    {
      title: 'Increase Efficiency',
      description: 'Optimize resource utilization and improve overall scheduling efficiency.',
      icon: <BarChart className="w-6 h-6 text-purple-400" />,
      value: '40%'
    },
    {
      title: 'Improve Satisfaction',
      description: 'Better scheduling leads to higher customer and employee satisfaction rates.',
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      value: '35%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Smart Scheduling SAAS
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              AI-Powered Scheduling Made Simple
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Transform your scheduling process with our intelligent AI-powered platform. 
              Automate scheduling, eliminate conflicts, and optimize resource utilization 
              with advanced algorithms that learn and adapt to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Proven Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl font-bold text-cyan-400 mb-4">{benefit.value}</div>
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="text-2xl font-bold text-white ml-4">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium">
                  {useCase.metrics}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
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

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Revolutionize Your Scheduling?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using our AI-powered scheduling platform 
              to save time, reduce conflicts, and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SmartSchedulingSAASPage;