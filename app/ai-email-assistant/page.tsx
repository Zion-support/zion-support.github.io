'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, CheckCircle, AlertTriangle, Zap, Star, Users, Clock, Shield, Brain, ArrowRight, Phone, MapPin, DollarSign, Award, Lock, Database, Cloud, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp, Target, Globe, Eye, MousePointer, PenTool, Type, AlignLeft, Send, Inbox, Archive, Trash2, Reply, Forward, Filter, Search as SearchIcon } from 'lucide-react';

const AIEmailAssistantPage: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [suggestedResponse, setSuggestedResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const processEmail = async () => {
    setIsProcessing(true);
    // Simulate AI email processing
    setTimeout(() => {
      setSuggestedResponse(`Subject: Re: ${emailInput}

Hi [Name],

Thank you for reaching out. I appreciate your interest in our services.

Based on your inquiry, I believe our AI solutions could significantly benefit your business. Here are some key points to consider:

1. **Immediate Impact**: Our AI services typically show results within 30 days
2. **ROI**: Most clients see 300% ROI within the first quarter
3. **Support**: We provide 24/7 dedicated support

I'd be happy to schedule a call to discuss your specific needs in more detail. Would next week work for you?

Best regards,
[Your Name]

P.S. I've attached our latest case study that might be relevant to your industry.`);
      setIsProcessing(false);
    }, 2000);
  };

  const features = [
    {
      icon: Brain,
      title: 'Smart Email Classification',
      description: 'AI automatically categorizes emails by priority, sender, and content type'
    },
    {
      icon: Reply,
      title: 'Intelligent Response Suggestions',
      description: 'Get AI-generated response suggestions based on email content and context'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automatically schedule meetings and follow-ups based on email content'
    },
    {
      icon: Filter,
      title: 'Advanced Filtering',
      description: 'AI-powered email filtering and spam detection with 99.9% accuracy'
    },
    {
      icon: BarChart3,
      title: 'Email Analytics',
      description: 'Track email performance, response rates, and engagement metrics'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with GDPR and HIPAA compliance'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and individuals',
      features: [
        'Up to 1,000 emails per month',
        'Basic response suggestions',
        'Email classification',
        'Standard support',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 emails per month',
        'Advanced AI responses',
        'Smart scheduling',
        'Priority support',
        'Up to 5 user accounts',
        'Advanced analytics',
        'Custom templates',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited emails',
        'Custom AI models',
        'Advanced automation',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
        'SLA guarantee',
        'Training sessions'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered email management and response suggestions. Starting at $99/month. Smart email classification, automated responses, and intelligent scheduling." />
        <meta name="keywords" content="ai email assistant, email automation, smart email, email management, ai responses, email productivity" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4 mr-2" />
            AI-Powered Email Management
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Email Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your email productivity with intelligent automation. Get smart response suggestions, 
            automatic classification, and AI-powered email management.
          </p>
          
          {/* Interactive Demo */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Try Our AI Email Assistant</h3>
            <div className="space-y-4">
              <textarea
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Paste an email you received to get AI response suggestions..."
                className="w-full h-32 bg-gray-800 text-white p-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
              />
              <button
                onClick={processEmail}
                disabled={!emailInput.trim() || isProcessing}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Get AI Response'}
              </button>
            </div>
            
            {suggestedResponse && (
              <div className="mt-8 bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-4">AI Suggested Response:</h4>
                <div className="prose prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed">
                    {suggestedResponse}
                  </pre>
                </div>
                <div className="mt-4 flex space-x-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                    Use This Response
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                    Regenerate
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Copy to Clipboard
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Email Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card relative ${
                plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI Email Assistant`}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Productivity?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start using our AI Email Assistant today and never miss an important email again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailAssistantPage;