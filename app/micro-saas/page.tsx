import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 1,
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered insights and automation',
      price: '$99/month',
      features: [
        'AI Task Prioritization',
        'Automated Scheduling',
        'Resource Optimization',
        'Progress Tracking',
        'Team Collaboration',
        'Risk Assessment',
        'Performance Analytics',
        'Integration Hub'
      ],
      icon: BarChart3,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      category: 'Productivity',
      popular: true
    },
    {
      id: 2,
      name: 'AI Smart Calendar Pro',
      description: 'AI-powered calendar management with intelligent scheduling and optimization',
      price: '$59/month',
      features: [
        'Smart Scheduling',
        'Meeting Optimization',
        'Conflict Resolution',
        'Time Blocking',
        'Team Coordination',
        'Calendar Analytics',
        'Integration Support',
        'Mobile Sync'
      ],
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      category: 'Productivity'
    },
    {
      id: 3,
      name: 'AI Voice Cloning Studio Pro',
      description: 'Professional voice cloning and synthesis for content creation',
      price: '$149/month',
      features: [
        'Voice Cloning',
        'Text-to-Speech',
        'Voice Customization',
        'Multi-Language Support',
        'Audio Processing',
        'Voice Analytics',
        'API Integration',
        'Commercial License'
      ],
      icon: Headphones,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      category: 'Creative'
    },
    {
      id: 4,
      name: 'AI Code Security Auditor Pro',
      description: 'Automated code security analysis and vulnerability detection',
      price: '$199/month',
      features: [
        'Security Scanning',
        'Vulnerability Detection',
        'Code Quality Analysis',
        'Compliance Checking',
        'Automated Fixes',
        'Security Reports',
        'CI/CD Integration',
        'Team Collaboration'
      ],
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      category: 'Security'
    },
    {
      id: 5,
      name: 'AI Mental Health Companion Pro',
      description: 'AI-powered mental health support and wellness tracking',
      price: '$79/month',
      features: [
        'Mood Tracking',
        'Wellness Insights',
        'Meditation Guidance',
        'Stress Management',
        'Progress Monitoring',
        'Professional Resources',
        'Privacy Protection',
        '24/7 Support'
      ],
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      category: 'Health'
    },
    {
      id: 6,
      name: 'AI Smart Home Controller Pro',
      description: 'Intelligent home automation and IoT device management',
      price: '$99/month',
      features: [
        'Device Control',
        'Automation Rules',
        'Energy Optimization',
        'Security Monitoring',
        'Voice Commands',
        'Mobile App',
        'Integration Hub',
        'Analytics Dashboard'
      ],
      icon: Home,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      category: 'IoT'
    },
    {
      id: 7,
      name: 'AI Investment Portfolio Optimizer Pro',
      description: 'AI-powered investment analysis and portfolio optimization',
      price: '$199/month',
      features: [
        'Portfolio Analysis',
        'Risk Assessment',
        'Investment Recommendations',
        'Market Insights',
        'Performance Tracking',
        'Tax Optimization',
        'Real-time Alerts',
        'Professional Reports'
      ],
      icon: TrendingUp,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      category: 'Finance'
    },
    {
      id: 8,
      name: 'AI Language Learning Tutor Pro',
      description: 'Personalized language learning with AI-powered tutoring',
      price: '$69/month',
      features: [
        'Personalized Lessons',
        'Speech Recognition',
        'Progress Tracking',
        'Cultural Context',
        'Interactive Exercises',
        'Multi-Language Support',
        'Mobile Learning',
        'Certification Prep'
      ],
      icon: Globe,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      category: 'Education'
    },
    {
      id: 9,
      name: 'AI Fitness Coach Pro',
      description: 'Personalized fitness training and health monitoring',
      price: '$59/month',
      features: [
        'Workout Planning',
        'Form Analysis',
        'Progress Tracking',
        'Nutrition Guidance',
        'Goal Setting',
        'Wearable Integration',
        'Community Features',
        'Expert Support'
      ],
      icon: Activity,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      category: 'Health'
    }
  ];

  const categories = ['All', 'Productivity', 'Creative', 'Security', 'Health', 'IoT', 'Finance', 'Education'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable AI-driven tools for modern businesses. 
              Choose from our comprehensive suite of specialized applications designed to boost productivity and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold text-lg"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSAASServices.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.bgColor}`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-gray-500">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
                
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Start Free Trial
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our Micro SAAS solutions 
            to streamline operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;