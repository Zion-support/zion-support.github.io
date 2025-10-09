'use client';
import React from 'react';
import { Cpu, Zap, Target, Users, CheckCircle, Star, ArrowRight, Brain, Shield, Clock, DollarSign, Award, Globe, Database, Settings, Smartphone, Mail, Phone, Calendar, FileText, BarChart, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAAS: React.FC = () => {
  const categories = [
    {
      title: 'AI-Powered Tools',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      tools: [
        { name: 'AI Content Generator', price: '$19/mo', description: 'Generate high-quality content with AI' },
        { name: 'AI Image Creator', price: '$29/mo', description: 'Create stunning visuals with AI' },
        { name: 'AI Video Maker', price: '$49/mo', description: 'Produce professional videos automatically' },
        { name: 'AI Code Assistant', price: '$39/mo', description: 'AI-powered coding and debugging' },
        { name: 'AI Analytics Dashboard', price: '$59/mo', description: 'Smart business intelligence' },
        { name: 'AI Chatbot Builder', price: '$29/mo', description: 'No-code chatbot creation' }
      ]
    },
    {
      title: 'Business Tools',
      icon: Target,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      tools: [
        { name: 'CRM Lite', price: '$19/mo', description: 'Simple customer relationship management' },
        { name: 'Invoice Generator', price: '$15/mo', description: 'Automated invoicing and billing' },
        { name: 'Project Tracker', price: '$25/mo', description: 'Task and project management' },
        { name: 'Email Marketing', price: '$29/mo', description: 'Automated email campaigns' },
        { name: 'Social Media Manager', price: '$35/mo', description: 'Schedule and manage social posts' },
        { name: 'Lead Scorer', price: '$39/mo', description: 'Intelligent lead qualification' }
      ]
    },
    {
      title: 'Productivity Tools',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      tools: [
        { name: 'Task Manager Pro', price: '$12/mo', description: 'Advanced task and time management' },
        { name: 'Note Taker AI', price: '$18/mo', description: 'Smart note-taking with AI' },
        { name: 'Calendar Optimizer', price: '$22/mo', description: 'Intelligent scheduling assistant' },
        { name: 'Password Manager', price: '$8/mo', description: 'Secure password management' },
        { name: 'Expense Tracker', price: '$15/mo', description: 'Automated expense management' },
        { name: 'Document Processor', price: '$25/mo', description: 'AI document processing' }
      ]
    },
    {
      title: 'Marketing Tools',
      icon: BarChart,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      tools: [
        { name: 'SEO Optimizer', price: '$39/mo', description: 'AI-powered SEO analysis' },
        { name: 'Ad Campaign Manager', price: '$49/mo', description: 'Automated ad management' },
        { name: 'Landing Page Builder', price: '$29/mo', description: 'Drag-and-drop page creation' },
        { name: 'A/B Testing Tool', price: '$35/mo', description: 'Conversion optimization' },
        { name: 'Email Template Designer', price: '$19/mo', description: 'Beautiful email templates' },
        { name: 'Social Media Analytics', price: '$45/mo', description: 'Comprehensive social insights' }
      ]
    },
    {
      title: 'Development Tools',
      icon: Code,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      tools: [
        { name: 'API Builder', price: '$49/mo', description: 'No-code API development' },
        { name: 'Database Manager', price: '$35/mo', description: 'Visual database management' },
        { name: 'Code Generator', price: '$39/mo', description: 'AI-powered code generation' },
        { name: 'Bug Tracker Pro', price: '$25/mo', description: 'Advanced bug tracking' },
        { name: 'Deployment Manager', price: '$45/mo', description: 'Automated deployments' },
        { name: 'Performance Monitor', price: '$55/mo', description: 'Real-time app monitoring' }
      ]
    },
    {
      title: 'Design Tools',
      icon: Settings,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      tools: [
        { name: 'Logo Maker AI', price: '$19/mo', description: 'AI-generated logos and branding' },
        { name: 'Color Palette Generator', price: '$12/mo', description: 'Smart color scheme creation' },
        { name: 'Font Pairing Tool', price: '$15/mo', description: 'Perfect font combinations' },
        { name: 'Mockup Creator', price: '$29/mo', description: 'Professional design mockups' },
        { name: 'Icon Library', price: '$18/mo', description: 'Extensive icon collection' },
        { name: 'Design System Builder', price: '$45/mo', description: 'Consistent design systems' }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$29',
      period: '/month',
      description: 'Perfect for solo entrepreneurs and freelancers',
      features: [
        'Access to 20+ tools',
        'Basic AI features',
        'Email support',
        'Standard templates',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$79',
      period: '/month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Access to 50+ tools',
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'Up to 5 user accounts',
        'Advanced analytics',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Access to all 100+ tools',
        'Premium AI features',
        'Dedicated support',
        'White-label options',
        'Unlimited user accounts',
        'Custom analytics',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Freelance Designer',
      company: 'Creative Studio',
      content: 'The micro SAAS tools have transformed my workflow. I can now deliver projects 3x faster with professional quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'TechStart Inc.',
      content: 'These tools saved us thousands in software costs. The AI features are incredibly powerful and easy to use.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      company: 'Digital Agency',
      content: 'The marketing tools suite is a game-changer. Our campaign performance improved by 200% in just one month.',
      rating: 5
    }
  ];

  const stats = [
    { number: '100+', label: 'Micro SAAS Tools' },
    { number: '50K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '4.9/5', label: 'User Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" />
              <span>100+ AI-Powered Micro SAAS Tools</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Micro SAAS Suite
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access 100+ powerful micro SAAS tools designed to streamline your workflow, 
              boost productivity, and accelerate business growth. All powered by advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
                Browse Tools
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Tool Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from 6 major categories of micro SAAS tools, each designed to solve specific business challenges.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-slate-800/30 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-white">{tool.name}</h4>
                        <span className="text-cyan-400 font-bold">{tool.price}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
                      <button className="w-full py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors text-sm">
                        Try Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, All-Inclusive Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              One subscription gives you access to all our micro SAAS tools. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Loved by Users Worldwide</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how micro SAAS tools are helping businesses and individuals achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Supercharge Your Productivity?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who are already using our micro SAAS tools to achieve more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
              View All Tools
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSAAS;