'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Link, HardDrive, FileCheck, DollarSign, Clock, TrendingDown as TrendingDownIcon, Bell } from 'lucide-react';

const TaskManagerProPage: React.FC = () => {
  const features = [
    {
      title: 'AI Task Prioritization',
      description: 'Intelligent task prioritization based on deadlines, importance, and dependencies',
      icon: Target,
      benefits: ['Smart prioritization', 'Deadline management', 'Dependency tracking', 'Workload balancing']
    },
    {
      title: 'Automated Scheduling',
      description: 'AI-powered scheduling that optimizes your time and resources',
      icon: Calendar,
      benefits: ['Optimal scheduling', 'Time blocking', 'Meeting coordination', 'Resource allocation']
    },
    {
      title: 'Progress Tracking',
      description: 'Real-time progress tracking with AI insights and predictions',
      icon: BarChart,
      benefits: ['Real-time updates', 'Progress analytics', 'Completion predictions', 'Performance insights']
    },
    {
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered communication tools',
      icon: Users,
      benefits: ['Team coordination', 'Communication optimization', 'Conflict resolution', 'Knowledge sharing']
    },
    {
      title: 'Smart Notifications',
      description: 'Intelligent notifications that keep you informed without overwhelming',
      icon: Bell,
      benefits: ['Contextual alerts', 'Priority-based notifications', 'Smart timing', 'Reduced noise']
    },
    {
      title: 'Integration Hub',
      description: 'Seamless integration with your favorite tools and platforms',
      icon: Link,
      benefits: ['100+ integrations', 'Data synchronization', 'Workflow automation', 'Unified platform']
    }
  ];

  const useCases = [
    {
      title: 'Project Management',
      description: 'Manage complex projects with AI-powered planning and execution',
      icon: '📋',
      results: ['40% faster project completion', 'Better resource utilization', 'Reduced delays']
    },
    {
      title: 'Team Coordination',
      description: 'Coordinate team efforts with intelligent task distribution',
      icon: '👥',
      results: ['50% better team efficiency', 'Reduced conflicts', 'Better communication']
    },
    {
      title: 'Personal Productivity',
      description: 'Boost personal productivity with AI-powered task management',
      icon: '⚡',
      results: ['60% productivity increase', 'Better time management', 'Reduced stress']
    },
    {
      title: 'Remote Work',
      description: 'Optimize remote work with AI-powered collaboration tools',
      icon: '🏠',
      results: ['Better remote coordination', 'Improved accountability', 'Enhanced communication']
    }
  ];

  const benefits = [
    {
      title: 'Increased Productivity',
      description: 'AI optimization leads to significant productivity gains',
      icon: TrendingUp,
      stats: '60% productivity boost'
    },
    {
      title: 'Better Time Management',
      description: 'AI helps optimize time allocation and scheduling',
      icon: Clock,
      stats: '40% time savings'
    },
    {
      title: 'Reduced Stress',
      description: 'Intelligent task management reduces overwhelm and stress',
      icon: Heart,
      stats: '50% stress reduction'
    },
    {
      title: 'Team Efficiency',
      description: 'AI improves team coordination and collaboration',
      icon: Users,
      stats: '45% team efficiency'
    }
  ];

  const pricing = [
    {
      name: 'Personal',
      price: 29,
      description: 'Perfect for individuals and freelancers',
      features: [
        'Up to 5 projects',
        'Basic AI features',
        'Email support',
        'Mobile app',
        'Basic integrations',
        'Personal analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 79,
      description: 'Ideal for small teams and professionals',
      features: [
        'Up to 25 projects',
        'Advanced AI features',
        'Priority support',
        'Team collaboration',
        'Advanced integrations',
        'Team analytics',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'For large teams and organizations',
      features: [
        'Unlimited projects',
        'Full AI suite',
        '24/7 support',
        'Advanced collaboration',
        'Custom integrations',
        'Advanced analytics',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            AI Task Manager Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your productivity with AI-powered task management. 
            Prioritize, schedule, and execute tasks with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Start Free Trial
            </a>
            <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <PhoneIcon className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI-Powered Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Perfect for Every Use Case
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{useCase.description}</p>
                
                <div className="space-y-2">
                  {useCase.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Key Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose the perfect plan for your productivity needs. All plans include 14-day free trial.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white' 
                      : 'bg-cyan-400 text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who are already using AI Task Manager Pro 
              to improve their productivity and achieve better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </a>
              <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TaskManagerProPage;