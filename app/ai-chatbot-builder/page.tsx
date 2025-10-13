<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

export default function AiChatbotBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI chatbot builder solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI chatbot builder solutions by Zion Tech Group
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiChatbotBuilderPage: React.FC = () => {,
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}}
  ]
const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',;
    'Improve decision-making with AI insights',;
    'Scale operations without proportional staff increases',;
    'Gain competitive advantage with advanced technology';
  ]
return(<>)
      <Helmet />
        <title>Ai Chatbot Builder - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */} <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1>Ai Chatbot Builder;</h1>
            </h1>
            <p>Advanced AI-powered ai chatbot builder solution for modern businesses.;</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
              </button>
              <button>View Demo,</button>
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */} <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Features;</h2>
              </h2>
              <p>Advanced AI technology that drives results;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <feature>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle />

import React, {useState, useEffect}from 'react';
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Chatbot Builder
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai chatbot builder solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>
        {/* Features Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            Powerful Features;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
            {features.map((feature, index) => (
              <div key={index}className="hologram-card-enhanced p-6 hover: scale-105 transition-all duration-300">,</div>
                <div className="text-4xl mb-4 text-green-400">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description</p>}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx}className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit} </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            Use Cases;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,</div>
            {useCases.map((useCase, index) => (
              <div key={index}className="hologram-card-enhanced p-8 hover: scale-105 transition-all duration-300">,</div>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl text-green-400">
                    <useCase.icon className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description</p>}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx}className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit} </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
        {/* CTA Section */} <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>Ready to Get Started?;</h2>
              </h2>
              <p>Contact our experts to discuss your requirements and get started today.;</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>Contact Us;</button>
                </button>
                <button>Learn More;</button>
                </button>
              </div>
            </div>
          ))
        </section>
      </div>
      <Footer>
    </>
  ),
}
export default AiChatbotBuilderPage;

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            Simple Pricing;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">,</div>
            {pricingPlans.map((plan, index) => (
              <div key={index}className={`hologram-card-enhanced p-8 relative ${
                plan.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular;</div>
                    </div>
                  </div>
                )} <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description</p>}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price</span>}</span>
                    <span className="text-gray-400 ml-1">{plan.period</span>}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature} </li>
                  ))}
                </ul>
                
                <a;
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-white hover: from-green-500 hover:to-cyan-600',
                      : 'bg-gray-800 text-white hover: bg-gray-700 border border-gray-600',}`}
                >
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            Customer Success Stories;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            {testimonials.map((testimonial, index) => (
              <div key={index}className="hologram-card-enhanced p-6">
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div>
                    <Star key={i}className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content</p>}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name</div>}</div>
                  <div className="text-sm text-gray-400">{testimonial.role</div>}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */} <section className="text-center">
          <div className="hologram-card-enhanced p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of businesses using our platform to automate customer interactions and boost efficiency.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <a;
                href="tel: +13024640950",
                className="cyber-button w-full sm: w-auto text-center",
              >
                📞 Call (302) 464-0950;
              </a>
              <a;
                href="mailto: kleber@ziontechgroup.com",
                className="cyber-button w-full sm: w-auto text-center",
                style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
              >
                Email Us;
              </a>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, MessageCircle, Bot, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package, DollarSign } from 'lucide-react';

export default function AIChatbotBuilderPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Conversations',
      description: 'Advanced natural language processing for human-like interactions and intelligent responses.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and data protection built-in.'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-orange-400" />,
      title: 'Omnichannel Support',
      description: 'Deploy across web, mobile, social media, and messaging platforms seamlessly.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI chatbots',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI training',
        'Web & mobile integration',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI training',
        'Multi-channel deployment',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'White-label solution',
        '24/7 dedicated support',
        'Advanced analytics',
        'Custom development'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle customer inquiries 24/7 with intelligent responses and seamless escalation.',
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads and capture contact information through engaging conversations.',
      icon: <Target className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Sales Assistant',
      description: 'Guide customers through product selection and purchasing decisions.',
      icon: <DollarSign className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Internal Support',
      description: 'Help employees with HR questions, IT support, and company policies.',
      icon: <Users className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | Intelligent Conversational AI</title>
        <meta name="description" content="Build intelligent AI chatbots with our advanced platform. Create conversational AI solutions for customer support, lead generation, and business automation." />
        <meta name="keywords" content="AI chatbot builder, conversational AI, chatbot platform, customer support automation, lead generation chatbot" />
        <meta property="og:title" content="AI Chatbot Builder - Zion Tech Group" />
        <meta property="og:description" content="Build intelligent AI chatbots with our advanced platform. Create conversational AI solutions for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-chatbot-builder" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Chatbot Builder",
            "description": "Build intelligent AI chatbots with our advanced platform",
            "url": "https://ziontechgroup.com/ai-chatbot-builder",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web-based",
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Chatbot Builder</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Create intelligent, conversational AI chatbots that engage customers and automate your business processes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Start Building
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/demo"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, deploy, and manage intelligent chatbots
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI chatbots can transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-gray-700/50 hover:border-cyan-400/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Build Your AI Chatbot?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start creating intelligent conversations that engage your customers and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Building Today
                  </Link>
                  <Link 
                    to="/demo"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
