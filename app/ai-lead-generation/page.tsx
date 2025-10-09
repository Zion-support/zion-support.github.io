'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, CheckCircle, AlertTriangle, Zap, Star, Users, Clock, Shield, Brain, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp, Globe, Eye, MousePointer, PenTool, Type, AlignLeft, Send, Inbox, Archive, Trash2, Reply, Forward, Filter, Search as SearchIcon, UserPlus, UserCheck, UserX, UserSearch } from 'lucide-react';

const AILeadGenerationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [generatedLeads, setGeneratedLeads] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateLeads = async () => {
    setIsGenerating(true);
    // Simulate AI lead generation
    setTimeout(() => {
      setGeneratedLeads([
        {
          name: 'John Smith',
          company: 'TechCorp Solutions',
          title: 'CTO',
          email: 'john.smith@techcorp.com',
          phone: '+1-555-0123',
          score: 95,
          industry: 'Technology',
          location: 'San Francisco, CA',
          lastActivity: '2 days ago'
        },
        {
          name: 'Sarah Johnson',
          company: 'InnovateLabs',
          title: 'VP of Engineering',
          email: 'sarah.j@innovatelabs.com',
          phone: '+1-555-0456',
          score: 88,
          industry: 'Software',
          location: 'Austin, TX',
          lastActivity: '1 week ago'
        },
        {
          name: 'Mike Chen',
          company: 'DataFlow Inc',
          title: 'Head of Data Science',
          email: 'mike.chen@dataflow.com',
          phone: '+1-555-0789',
          score: 92,
          industry: 'Data Analytics',
          location: 'Seattle, WA',
          lastActivity: '3 days ago'
        }
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Lead Discovery',
      description: 'Advanced algorithms identify high-quality prospects based on your ideal customer profile'
    },
    {
      icon: Target,
      title: 'Smart Lead Scoring',
      description: 'Intelligent scoring system ranks leads by likelihood to convert using machine learning'
    },
    {
      icon: UserSearch,
      title: 'Contact Discovery',
      description: 'Find verified email addresses, phone numbers, and social profiles for your prospects'
    },
    {
      icon: Mail,
      title: 'Automated Outreach',
      description: 'AI-generated personalized email sequences that increase response rates by 300%'
    },
    {
      icon: BarChart3,
      title: 'Lead Analytics',
      description: 'Track lead quality, conversion rates, and ROI with detailed analytics dashboard'
    },
    {
      icon: Shield,
      title: 'Compliance & Privacy',
      description: 'GDPR and CAN-SPAM compliant lead generation with built-in privacy protection'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$349',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 500 leads per month',
        'Basic lead scoring',
        'Email discovery',
        'Standard support',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$699',
      period: '/month',
      description: 'Ideal for growing sales teams',
      features: [
        'Up to 2,500 leads per month',
        'Advanced AI scoring',
        'Phone & social discovery',
        'Priority support',
        'Up to 5 user accounts',
        'Advanced analytics',
        'CRM integration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large sales organizations',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'Full contact discovery',
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
        <title>AI Lead Generation - Zion Tech Group</title>
        <meta name="description" content="AI-powered lead generation and qualification system. Starting at $349/month. Find high-quality prospects, score leads, and automate outreach." />
        <meta name="keywords" content="ai lead generation, lead scoring, prospect discovery, sales automation, lead qualification, b2b leads" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            AI-Powered Lead Generation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Lead Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find and qualify high-quality prospects with AI-powered lead generation. 
            Discover contacts, score leads, and automate outreach for maximum conversion.
          </p>
          
          {/* Interactive Demo */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Try Our AI Lead Generator</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter your target industry or company type (e.g., 'SaaS companies', 'Healthcare startups')..."
                className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
              />
              <button
                onClick={generateLeads}
                disabled={!searchQuery.trim() || isGenerating}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating Leads...' : 'Generate Leads'}
              </button>
            </div>
            
            {generatedLeads.length > 0 && (
              <div className="mt-8 bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-4">Generated Leads:</h4>
                <div className="space-y-4">
                  {generatedLeads.map((lead, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-semibold text-white">{lead.name}</h5>
                          <p className="text-gray-300 text-sm">{lead.title} at {lead.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-400">{lead.score}</div>
                          <div className="text-xs text-gray-400">Score</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
                        <div>
                          <span className="text-gray-400">Email:</span><br />
                          {lead.email}
                        </div>
                        <div>
                          <span className="text-gray-400">Phone:</span><br />
                          {lead.phone}
                        </div>
                        <div>
                          <span className="text-gray-400">Industry:</span><br />
                          {lead.industry}
                        </div>
                        <div>
                          <span className="text-gray-400">Location:</span><br />
                          {lead.location}
                        </div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition-colors">
                          Add to CRM
                        </button>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                          Send Email
                        </button>
                        <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))}
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
            Powerful Lead Generation Features
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI Lead Generation`}
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
            Ready to Generate High-Quality Leads?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start using our AI Lead Generation system today and fill your pipeline with qualified prospects.
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

export default AILeadGenerationPage;