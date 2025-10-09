'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Link, HardDrive, FileCheck } from 'lucide-react';

const AICRMPage: React.FC = () => {
  const features = [
    {
      title: 'AI Lead Scoring',
      description: 'Automatically score and prioritize leads based on AI analysis',
      icon: Target,
      benefits: ['95% accuracy in lead scoring', '40% increase in conversion', 'Automated prioritization', 'Real-time updates']
    },
    {
      title: 'Predictive Analytics',
      description: 'Predict customer behavior and sales outcomes with AI',
      icon: BarChart,
      benefits: ['Sales forecasting', 'Churn prediction', 'Upsell opportunities', 'Risk assessment']
    },
    {
      title: 'Automated Follow-ups',
      description: 'AI-powered follow-up sequences that adapt to customer responses',
      icon: MessageSquare,
      benefits: ['Personalized messaging', 'Optimal timing', 'Multi-channel approach', 'Response analysis']
    },
    {
      title: 'Customer Insights',
      description: 'Deep customer insights powered by AI analysis',
      icon: Eye,
      benefits: ['360° customer view', 'Behavior patterns', 'Preference analysis', 'Engagement metrics']
    },
    {
      title: 'Sales Automation',
      description: 'Automate repetitive sales tasks and processes',
      icon: Settings,
      benefits: ['Task automation', 'Workflow optimization', 'Process efficiency', 'Time savings']
    },
    {
      title: 'Integration Hub',
      description: 'Seamlessly integrate with your existing tools and platforms',
      icon: Link,
      benefits: ['100+ integrations', 'API connectivity', 'Data synchronization', 'Unified platform']
    }
  ];

  const useCases = [
    {
      title: 'Sales Teams',
      description: 'Boost sales performance with AI-powered insights and automation',
      icon: '💼',
      results: ['35% increase in sales', '50% faster deal closure', 'Better lead quality']
    },
    {
      title: 'Marketing Teams',
      description: 'Create targeted campaigns with AI-driven customer segmentation',
      icon: '📈',
      results: ['60% higher campaign ROI', '40% better targeting', 'Personalized messaging']
    },
    {
      title: 'Customer Service',
      description: 'Provide exceptional customer support with AI insights',
      icon: '🎧',
      results: ['80% faster resolution', 'Higher satisfaction', 'Proactive support']
    },
    {
      title: 'Management',
      description: 'Make data-driven decisions with comprehensive analytics',
      icon: '📊',
      results: ['Better forecasting', 'Improved planning', 'Strategic insights']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: 99,
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000 contacts',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 199,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Priority support',
        'Advanced integrations',
        'Advanced analytics',
        'Custom fields',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 399,
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        '24/7 support',
        'Custom integrations',
        'Custom analytics',
        'White-label options',
        'Dedicated account manager',
        'Custom training'
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
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            AI CRM Intelligence
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your customer relationships with AI-powered CRM. Automate processes, 
            predict outcomes, and deliver exceptional customer experiences.
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
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
            Perfect for Every Team
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

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose the perfect plan for your team size and needs. All plans include 14-day free trial.
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
              Ready to Transform Your CRM?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have revolutionized their customer relationships 
              with our AI-powered CRM solution.
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

export default AICRMPage;