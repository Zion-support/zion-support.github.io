'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Link, HardDrive, FileCheck, Edit, Layout } from 'lucide-react';

const AIWritingAssistantPage: React.FC = () => {
  const features = [
    {
      title: 'Content Generation',
      description: 'Generate high-quality content for blogs, articles, social media, and marketing materials',
      icon: FileText,
      benefits: ['10x faster content creation', 'SEO-optimized content', 'Multiple content types', 'Brand voice consistency']
    },
    {
      title: 'Writing Enhancement',
      description: 'Improve grammar, style, tone, and readability of existing content',
      icon: Edit,
      benefits: ['Grammar correction', 'Style improvement', 'Tone adjustment', 'Readability optimization']
    },
    {
      title: 'SEO Optimization',
      description: 'Optimize content for search engines with keyword research and optimization',
      icon: Search,
      benefits: ['Keyword research', 'SEO optimization', 'Meta descriptions', 'Content structure']
    },
    {
      title: 'Plagiarism Detection',
      description: 'Ensure content originality with advanced plagiarism detection',
      icon: Shield,
      benefits: ['Originality checking', 'Source attribution', 'Duplicate detection', 'Quality assurance']
    },
    {
      title: 'Multi-language Support',
      description: 'Create content in multiple languages with cultural adaptation',
      icon: Globe,
      benefits: ['100+ languages', 'Cultural adaptation', 'Translation quality', 'Localized content']
    },
    {
      title: 'Content Templates',
      description: 'Access to professional templates for various content types',
      icon: Layout,
      benefits: ['Professional templates', 'Industry-specific formats', 'Customizable layouts', 'Brand consistency']
    }
  ];

  const useCases = [
    {
      title: 'Blog Writing',
      description: 'Create engaging blog posts that drive traffic and engagement',
      icon: '📝',
      results: ['300% increase in blog traffic', '50% more engagement', 'Faster publishing schedule']
    },
    {
      title: 'Social Media Content',
      description: 'Generate compelling social media posts across all platforms',
      icon: '📱',
      results: ['200% more social engagement', 'Consistent posting schedule', 'Platform-optimized content']
    },
    {
      title: 'Email Marketing',
      description: 'Create effective email campaigns that convert',
      icon: '📧',
      results: ['40% higher open rates', '25% more conversions', 'Personalized content']
    },
    {
      title: 'Product Descriptions',
      description: 'Write compelling product descriptions that sell',
      icon: '🛍️',
      results: ['35% increase in conversions', 'Better product visibility', 'SEO-optimized descriptions']
    },
    {
      title: 'Technical Documentation',
      description: 'Create clear and comprehensive technical documentation',
      icon: '📚',
      results: ['Reduced support tickets', 'Better user experience', 'Comprehensive guides']
    },
    {
      title: 'Marketing Copy',
      description: 'Generate persuasive marketing copy for campaigns',
      icon: '🎯',
      results: ['Higher conversion rates', 'Better campaign performance', 'Consistent messaging']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: 79,
      description: 'Perfect for individuals and small teams',
      features: [
        '10,000 words/month',
        'Basic templates',
        'Standard support',
        '1 user account',
        'Basic SEO tools',
        'Plagiarism checking'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 149,
      description: 'Ideal for content teams and agencies',
      features: [
        '50,000 words/month',
        'Premium templates',
        'Priority support',
        '5 user accounts',
        'Advanced SEO tools',
        'Multi-language support',
        'Brand voice training',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 299,
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        'Custom templates',
        '24/7 support',
        'Unlimited users',
        'Full SEO suite',
        'All languages',
        'Custom integrations',
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
          <div className="text-6xl mb-6">✍️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            AI Writing Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your content creation with our advanced AI writing assistant. 
            Generate high-quality, SEO-optimized content 10x faster than traditional methods.
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
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
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
            Use Cases & Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Choose the perfect plan for your content needs. All plans include 14-day free trial.
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
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of content creators, marketers, and businesses who are already 
              creating better content faster with our AI writing assistant.
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

export default AIWritingAssistantPage;