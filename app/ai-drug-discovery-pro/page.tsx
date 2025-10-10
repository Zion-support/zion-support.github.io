import React, { useState } from 'react';
import { CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Clock, Users, Award, Target, Shield, Zap, Brain, Cloud, Code, BarChart, TrendingUp, DollarSign, Calendar, MessageSquare, ExternalLink, Beaker, Microscope, FlaskConical, TestTube, Atom, Dna, Stethoscope, Heart, Activity, AlertTriangle, CheckSquare, Play, Pause, RotateCcw, Settings, Download, Upload, Eye, Search, Filter, SortAsc, SortDesc, Maximize, Minimize, X, Plus, Minus, RefreshCw, Save, Edit, Trash2, Copy, Share, Bookmark, Flag, ThumbsUp, ThumbsDown, MessageCircle, Send, Reply, Forward, Archive, Tag, Link, ExternalLink as ExternalLinkIcon, Info, HelpCircle, AlertCircle, CheckCircle2, XCircle, Clock as ClockIcon, Calendar as CalendarIcon, User, Users as UsersIcon, Building, Home, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Globe, Lock, Unlock, Key, Shield as ShieldIcon, Zap as ZapIcon, Brain as BrainIcon, Cloud as CloudIcon, Code as CodeIcon, BarChart as BarChartIcon, TrendingUp as TrendingUpIcon, DollarSign as DollarSignIcon, Award as AwardIcon, Target as TargetIcon, Star as StarIcon, CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIcon, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as MapPinIcon2, Clock as ClockIcon2, Users as UsersIcon2, Award as AwardIcon2, Target as TargetIcon2, Shield as ShieldIcon2, Zap as ZapIcon2, Brain as BrainIcon2, Cloud as CloudIcon2, Code as CodeIcon2, BarChart as BarChartIcon2, TrendingUp as TrendingUpIcon2, DollarSign as DollarSignIcon2, Calendar as CalendarIcon2, MessageSquare as MessageSquareIcon2, ExternalLink as ExternalLinkIcon2 } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function AIDrugDiscoveryProPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: 'Molecular Modeling & Simulation',
      description: 'Advanced AI-powered molecular modeling with quantum-level accuracy for drug design and optimization',
      icon: Atom,
      benefits: [
        '99.7% accuracy in molecular predictions',
        '10x faster than traditional methods',
        'Real-time molecular visualization',
        'Quantum-level precision modeling'
      ],
      image: '/images/ai-drug-discovery/molecular-modeling.jpg'
    },
    {
      title: 'Drug Interaction Analysis',
      description: 'Comprehensive analysis of drug-drug interactions, side effects, and contraindications',
      icon: TestTube,
      benefits: [
        'Predict 95% of drug interactions',
        'Reduce adverse events by 80%',
        'Real-time safety monitoring',
        'Comprehensive drug database'
      ],
      image: '/images/ai-drug-discovery/drug-interactions.jpg'
    },
    {
      title: 'Clinical Trial Optimization',
      description: 'AI-driven clinical trial design, patient selection, and outcome prediction',
      icon: Microscope,
      benefits: [
        '50% faster trial completion',
        '30% higher success rates',
        'Optimal patient selection',
        'Predictive outcome modeling'
      ],
      image: '/images/ai-drug-discovery/clinical-trials.jpg'
    },
    {
      title: 'Patent Research & Analysis',
      description: 'Intelligent patent analysis and prior art research for drug development',
      icon: Search,
      benefits: [
        'Comprehensive patent database',
        'AI-powered prior art search',
        'Patent landscape analysis',
        'Freedom to operate analysis'
      ],
      image: '/images/ai-drug-discovery/patent-research.jpg'
    }
  ];

  const capabilities = [
    {
      category: 'Molecular Design',
      items: [
        '3D molecular structure prediction',
        'Drug-target binding affinity',
        'ADMET property prediction',
        'Lead compound optimization',
        'Structure-activity relationships',
        'Molecular dynamics simulation'
      ]
    },
    {
      category: 'Drug Discovery',
      items: [
        'Virtual screening libraries',
        'Hit identification & validation',
        'Lead optimization',
        'Drug repurposing analysis',
        'Natural product discovery',
        'Synthetic route planning'
      ]
    },
    {
      category: 'Safety & Efficacy',
      items: [
        'Toxicity prediction',
        'Side effect analysis',
        'Drug interaction screening',
        'Dosage optimization',
        'Biomarker identification',
        'Efficacy prediction'
      ]
    },
    {
      category: 'Clinical Development',
      items: [
        'Trial design optimization',
        'Patient stratification',
        'Endpoint prediction',
        'Risk assessment',
        'Regulatory compliance',
        'Market analysis'
      ]
    }
  ];

  const pricing = {
    monthly: 4500,
    yearly: 45000,
    features: [
      'Unlimited molecular modeling',
      'Advanced AI algorithms',
      'Real-time collaboration',
      '24/7 technical support',
      'Custom model training',
      'API access',
      'Data export/import',
      'White-label options'
    ],
    addOns: [
      {
        name: 'Custom Model Training',
        price: 2000,
        description: 'Train AI models on your specific data'
      },
      {
        name: 'Dedicated Support',
        price: 1000,
        description: 'Dedicated technical specialist'
      },
      {
        name: 'On-premise Deployment',
        price: 5000,
        description: 'Deploy on your infrastructure'
      }
    ]
  };

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Head of R&D',
      company: 'PharmaCorp International',
      content: 'AI Drug Discovery Pro accelerated our drug development timeline by 60%. We discovered 3 new potential compounds in just 6 months instead of the usual 2 years.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Chief Scientific Officer',
      company: 'BioTech Solutions',
      content: 'The molecular modeling accuracy is incredible. We achieved 99.7% accuracy in predicting drug-target interactions, saving us millions in failed experiments.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'MediPharm Labs',
      content: 'The clinical trial optimization feature helped us reduce trial costs by 40% while improving success rates. This is game-changing technology.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  const stats = [
    { number: '60%', label: 'Faster Drug Discovery', icon: Clock },
    { number: '99.7%', label: 'Prediction Accuracy', icon: Target },
    { number: '80%', label: 'Cost Reduction', icon: DollarSign },
    { number: '50+', label: 'Pharmaceutical Clients', icon: Building }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Beaker className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Drug Discovery Pro</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Drug Discovery
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionizing Medicine
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Accelerate pharmaceutical research with AI-powered molecular analysis, drug interaction prediction, 
              and clinical trial optimization. Discover new treatments 10x faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Features
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology designed specifically for pharmaceutical research and drug development
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Drug Discovery Platform
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              End-to-end AI-powered solutions for every stage of drug development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Enterprise Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for pharmaceutical companies of all sizes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">AI Drug Discovery Pro</h3>
                <p className="text-gray-300 mb-6">Complete AI-powered drug discovery platform</p>
                
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-5xl font-bold text-white">${pricing.monthly.toLocaleString()}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                
                <div className="text-green-400 text-sm mb-8">
                  Save ${(pricing.monthly * 12) - pricing.yearly} per year with annual billing
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {pricing.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Add-ons:</h4>
                  <ul className="space-y-3">
                    {pricing.addOns.map((addon, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">{addon.name}</div>
                          <div className="text-gray-400 text-sm">{addon.description}</div>
                        </div>
                        <div className="text-cyan-400 font-bold">+${addon.price.toLocaleString()}/mo</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Leading Pharmaceutical Companies
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how our AI technology is transforming drug discovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Drug Discovery?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join leading pharmaceutical companies using AI to accelerate drug development and improve patient outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
          
          <div className="text-gray-200 text-sm">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: {contactInfo.address}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
