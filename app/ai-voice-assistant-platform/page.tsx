'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck, Timer, PieChart, Activity, AlertCircle, Award, BookOpen, Briefcase, Building, ChevronRight, Download, Eye, Filter, GitBranch, Layers, Lightbulb, Maximize, Minimize, MoreHorizontal, Play, Pause, RefreshCw, Save, Search, Send, Settings2, Star as StarIcon, ThumbsUp, Trash2, Upload, User, Users2, Video, Volume2, Wifi, X, Zap as ZapIcon, Mic as MicIcon, Volume2 as Volume2Icon, Headphones, Speaker, Radio, Music, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Repeat, Shuffle, Volume1, VolumeX, Mic as MicIcon2, MicOff, Phone as PhoneIcon, Video as VideoIcon, Camera, CameraOff, Monitor as MonitorIcon, MonitorSpeaker, Laptop, Smartphone as SmartphoneIcon, Tablet, Watch, Tv, Gamepad2, Keyboard, Mouse, Printer, Scanner, HardDrive, Cpu as CpuIcon, MemoryStick, Wifi as WifiIcon, Bluetooth, Usb, Plug, Battery, BatteryCharging, Power, PowerOff, Settings as SettingsIcon, Settings2 as Settings2Icon, Cog, Wrench as WrenchIcon, Tool, Hammer, Screwdriver, Wrench as WrenchIcon2, Tool as ToolIcon, Hammer as HammerIcon, Screwdriver as ScrewdriverIcon } from 'lucide-react';

const AIVoiceAssistantPlatformPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, intent, and sentiment for more human-like conversations.',
      benefits: ['95% accuracy in intent recognition', 'Multi-language support', 'Context awareness', 'Sentiment analysis']
    },
    {
      icon: Mic,
      title: 'Voice Recognition',
      description: 'State-of-the-art speech-to-text technology with noise cancellation and accent adaptation.',
      benefits: ['99% accuracy in speech recognition', 'Noise cancellation', 'Accent adaptation', 'Real-time processing']
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'AI-powered automation that can handle complex tasks, schedule meetings, and manage workflows.',
      benefits: ['Task automation', 'Workflow management', 'Calendar integration', 'Email handling']
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Support for multiple users with personalized experiences and voice recognition.',
      benefits: ['User identification', 'Personalized responses', 'Privacy controls', 'Role-based access']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and privacy protection for sensitive data.',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'Data privacy', 'Audit trails']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Seamlessly integrate with 100+ popular business tools and platforms.',
      benefits: ['CRM integration', 'ERP systems', 'Communication tools', 'Productivity apps']
    }
  ];

  const useCases = [
    {
      name: 'Customer Service',
      description: '24/7 AI-powered customer support with natural conversations',
      icon: Headphones,
      color: 'text-blue-400',
      benefits: ['Reduced wait times', 'Consistent service', 'Cost savings', 'Scalability']
    },
    {
      name: 'Virtual Receptionist',
      description: 'Intelligent receptionist for call routing and appointment scheduling',
      icon: Phone,
      color: 'text-green-400',
      benefits: ['Professional greeting', 'Call routing', 'Appointment booking', 'Information delivery']
    },
    {
      name: 'Sales Assistant',
      description: 'AI sales assistant for lead qualification and follow-up',
      icon: Target,
      color: 'text-purple-400',
      benefits: ['Lead qualification', 'Follow-up automation', 'Sales insights', 'Conversion optimization']
    },
    {
      name: 'Meeting Assistant',
      description: 'Smart meeting assistant for scheduling and note-taking',
      icon: Calendar,
      color: 'text-orange-400',
      benefits: ['Meeting scheduling', 'Note taking', 'Action items', 'Follow-up reminders']
    },
    {
      name: 'Data Analysis',
      description: 'Voice-powered data analysis and reporting',
      icon: BarChart,
      color: 'text-cyan-400',
      benefits: ['Voice queries', 'Real-time insights', 'Report generation', 'Trend analysis']
    },
    {
      name: 'Training & Onboarding',
      description: 'Interactive training and employee onboarding',
      icon: BookOpen,
      color: 'text-pink-400',
      benefits: ['Interactive learning', 'Progress tracking', 'Knowledge retention', 'Cost reduction']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 interactions/month',
        'Basic voice recognition',
        'Standard integrations',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10,000 interactions/month',
        'Advanced AI features',
        'All integrations',
        'Priority support',
        'Advanced analytics',
        'Custom voice training',
        'White-label options',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited interactions',
        'Full AI suite',
        'Custom integrations',
        '24/7 dedicated support',
        'Advanced security',
        'Custom AI training',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      role: 'Customer Service Manager',
      company: 'Tech Solutions Inc.',
      content: 'AI Voice Assistant Platform has reduced our customer service costs by 60% while improving customer satisfaction. The natural conversations are incredible!',
      rating: 5,
      avatar: 'RJ'
    },
    {
      name: 'Maria Garcia',
      role: 'Operations Director',
      company: 'Healthcare Plus',
      content: 'The voice assistant handles appointment scheduling and patient inquiries flawlessly. It has freed up our staff to focus on patient care.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'David Chen',
      role: 'Founder',
      company: 'StartupXYZ',
      content: 'The AI voice assistant has become an integral part of our business operations. It handles everything from lead qualification to customer support.',
      rating: 5,
      avatar: 'DC'
    }
  ];

  const stats = [
    { number: '1M+', label: 'Voice Interactions', icon: Mic },
    { number: '99%', label: 'Accuracy Rate', icon: Target },
    { number: '60%', label: 'Cost Reduction', icon: DollarSign },
    { number: '24/7', label: 'Availability', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
                <Mic className="w-4 h-4 mr-2 animate-spin" />
                AI-Powered Voice Assistant Platform
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
                AI Voice Assistant
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Platform Pro
                </span>
              </h1>
              <p className="text-gray-300 mb-8 text-center leading-relaxed text-lg max-w-4xl mx-auto animate-fade-in delay-200">
                Transform your business with AI-powered voice assistants that understand, respond, and automate tasks naturally. 
                Reduce costs by 60% and improve customer satisfaction with 99% accuracy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up delay-300">
              <a 
                href="tel:+13024640950" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-2xl hover:shadow-cyan-500/25"
                aria-label="Call us at +1 302 464 0950"
              >
                <span className="flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-center hover:shadow-2xl hover:shadow-cyan-500/25"
                aria-label="Email us at kleber@ziontechgroup.com"
              >
                <span className="flex items-center justify-center">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in delay-500">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Discover how AI voice assistants can transform your business operations across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                  <useCase.icon className={`w-10 h-10 ${useCase.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-gray-300">• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to create natural, intelligent voice interactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your voice assistant needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-500/40 scale-105 shadow-2xl shadow-cyan-500/25' 
                  : 'border-cyan-500/20 hover:border-cyan-500/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
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
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their business with AI voice assistants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-cyan-400 font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI Voice Assistants?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven voice interactions. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              aria-label="Call us at +1 302 464 0950"
            >
              Start Free Trial
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
              aria-label="Email us at kleber@ziontechgroup.com"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceAssistantPlatformPage;