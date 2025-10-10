'use client';

import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  BarChart, 
  Users, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Target, 
  Rocket,
  Code,
  Cloud,
  Smartphone,
  MessageSquare,
  FileText,
  Calendar,
  CreditCard,
  Settings,
  Globe,
  Lock,
  Database,
  Cpu,
  Palette,
  Camera,
  Music,
  Video,
  ShoppingCart,
  Building,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Compass,
  PieChart,
  Activity,
  Truck,
  ChefHat,
  Sprout,
  Scale,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSAASServices = [
    {
      id: 'ai-project-manager-pro',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with predictive analytics, automated resource allocation, and real-time collaboration tools.',
      price: '$99/mo',
      originalPrice: '$149/mo',
      category: 'productivity',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      features: [
        'Smart Scheduling & Resource Allocation',
        'Predictive Risk Analysis',
        'Team Performance Analytics',
        'Automated Progress Tracking',
        'Real-time Collaboration Tools',
        'Integration with 50+ Tools',
        'Custom Workflow Builder',
        'Advanced Reporting Dashboard'
      ],
      benefits: [
        '40% faster project completion',
        '60% reduction in project delays',
        '85% improvement in resource utilization',
        'Real-time team collaboration'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-project-manager',
      trial: '14-day free trial',
      rating: 4.9,
      reviews: 1247
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and customizable reporting.',
      price: '$149/mo',
      originalPrice: '$199/mo',
      category: 'analytics',
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        'Real-time Data Visualization',
        'AI-Powered Predictive Insights',
        'Custom Report Builder',
        'Multi-source Data Integration',
        'Automated Alerts & Notifications',
        'Advanced Filtering & Segmentation',
        'Export to Multiple Formats',
        'White-label Solutions'
      ],
      benefits: [
        '300% faster data analysis',
        '90% reduction in manual reporting',
        'Predictive insights with 95% accuracy',
        'Real-time business intelligence'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-analytics',
      trial: '30-day free trial',
      rating: 4.8,
      reviews: 892
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: '24/7 AI-powered customer support with natural language processing, sentiment analysis, and seamless escalation.',
      price: '$199/mo',
      originalPrice: '$299/mo',
      category: 'support',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      popular: true,
      features: [
        '24/7 Multilingual Support',
        'Natural Language Processing',
        'Sentiment Analysis & Escalation',
        'Knowledge Base Integration',
        'Live Chat Handoff',
        'Custom Bot Training',
        'Analytics & Performance Metrics',
        'API Integration'
      ],
      benefits: [
        '80% reduction in support tickets',
        '95% customer satisfaction rate',
        '24/7 availability',
        'Multi-language support'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-support-bot',
      trial: '21-day free trial',
      rating: 4.7,
      reviews: 1156
    },
    {
      id: 'ai-content-studio',
      name: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media management.',
      price: '$79/mo',
      originalPrice: '$129/mo',
      category: 'content',
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      popular: true,
      features: [
        'AI Content Generation',
        'Image & Video Creation',
        'SEO Optimization',
        'Social Media Scheduling',
        'Brand Voice Consistency',
        'Plagiarism Detection',
        'Multi-format Export',
        'Team Collaboration Tools'
      ],
      benefits: [
        '500% increase in content output',
        '70% reduction in content costs',
        'Consistent brand voice',
        'Automated SEO optimization'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-content-studio',
      trial: '14-day free trial',
      rating: 4.6,
      reviews: 743
    },
    {
      id: 'ai-financial-advisor',
      name: 'AI Financial Advisor',
      description: 'Personalized financial planning with AI-powered investment recommendations, budget tracking, and risk assessment.',
      price: '$59/mo',
      originalPrice: '$89/mo',
      category: 'finance',
      icon: CreditCard,
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      features: [
        'Personalized Investment Advice',
        'Budget Tracking & Analysis',
        'Risk Assessment Tools',
        'Portfolio Optimization',
        'Tax Planning Assistance',
        'Goal Setting & Tracking',
        'Market Analysis & Alerts',
        'Retirement Planning'
      ],
      benefits: [
        '25% better investment returns',
        'Automated budget management',
        'Personalized financial advice',
        'Real-time market analysis'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-financial-advisor',
      trial: '7-day free trial',
      rating: 4.5,
      reviews: 456
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Visual workflow builder with AI-powered automation, process optimization, and integration capabilities.',
      price: '$129/mo',
      originalPrice: '$179/mo',
      category: 'automation',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      popular: true,
      features: [
        'Visual Workflow Builder',
        'AI Process Optimization',
        '500+ App Integrations',
        'Custom Automation Rules',
        'Performance Analytics',
        'Error Handling & Recovery',
        'Team Collaboration',
        'API & Webhook Support'
      ],
      benefits: [
        '90% reduction in manual tasks',
        '75% faster process completion',
        '99.9% automation reliability',
        'Seamless app integration'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-workflow-automation',
      trial: '21-day free trial',
      rating: 4.8,
      reviews: 934
    },
    {
      id: 'ai-smart-calendar',
      name: 'AI Smart Calendar',
      description: 'Intelligent scheduling with AI-powered time management, meeting optimization, and productivity insights.',
      price: '$39/mo',
      originalPrice: '$59/mo',
      category: 'productivity',
      icon: Calendar,
      color: 'from-teal-500 to-cyan-500',
      popular: true,
      features: [
        'Smart Scheduling & Optimization',
        'Meeting Conflict Resolution',
        'Productivity Analytics',
        'Time Blocking & Focus Mode',
        'Team Calendar Management',
        'Integration with 100+ Apps',
        'AI-Powered Suggestions',
        'Mobile & Desktop Sync'
      ],
      benefits: [
        '50% reduction in scheduling conflicts',
        '30% increase in productivity',
        'Automated meeting optimization',
        'Real-time team coordination'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-smart-calendar',
      trial: '14-day free trial',
      rating: 4.7,
      reviews: 678
    },
    {
      id: 'ai-content-writer',
      name: 'AI Content Writer',
      description: 'Advanced content generation with AI writing assistance, SEO optimization, and multi-format support.',
      price: '$49/mo',
      originalPrice: '$79/mo',
      category: 'content',
      icon: FileText,
      color: 'from-pink-500 to-rose-500',
      popular: true,
      features: [
        'AI Writing Assistant',
        'SEO Content Optimization',
        'Multi-format Support',
        'Plagiarism Detection',
        'Tone & Style Customization',
        'Research & Fact-checking',
        'Content Templates Library',
        'Team Collaboration'
      ],
      benefits: [
        '400% faster content creation',
        '85% improvement in SEO scores',
        'Consistent quality output',
        'Multi-language support'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-content-writer',
      trial: '14-day free trial',
      rating: 4.6,
      reviews: 567
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator',
      description: 'AI-powered video creation with automated editing, voice synthesis, and multi-platform optimization.',
      price: '$89/mo',
      originalPrice: '$139/mo',
      category: 'content',
      icon: Video,
      color: 'from-red-500 to-pink-500',
      popular: true,
      features: [
        'AI Video Generation',
        'Automated Editing',
        'Voice Synthesis & Dubbing',
        'Multi-platform Optimization',
        'Template Library',
        'Brand Customization',
        'Batch Processing',
        'Cloud Rendering'
      ],
      benefits: [
        '600% faster video production',
        '70% reduction in production costs',
        'Professional quality output',
        'Automated optimization'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-video-generator',
      trial: '14-day free trial',
      rating: 4.7,
      reviews: 423
    },
    {
      id: 'ai-crm-assistant',
      name: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered insights, lead scoring, and automation.',
      price: '$119/mo',
      originalPrice: '$169/mo',
      category: 'sales',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      popular: true,
      features: [
        'AI Lead Scoring',
        'Automated Follow-ups',
        'Customer Journey Mapping',
        'Sales Pipeline Optimization',
        'Email & Call Automation',
        'Performance Analytics',
        'Integration with 200+ Tools',
        'Custom Workflow Builder'
      ],
      benefits: [
        '45% increase in conversion rates',
        '60% reduction in manual tasks',
        'Predictive lead scoring',
        'Automated customer engagement'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-crm-assistant',
      trial: '21-day free trial',
      rating: 4.8,
      reviews: 789
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-powered personalization, automation, and performance optimization.',
      price: '$69/mo',
      originalPrice: '$99/mo',
      category: 'marketing',
      icon: Mail,
      color: 'from-green-500 to-teal-500',
      popular: true,
      features: [
        'AI-Powered Personalization',
        'Automated Campaign Management',
        'A/B Testing & Optimization',
        'Advanced Segmentation',
        'Performance Analytics',
        'Template Library',
        'Integration with 150+ Tools',
        'Compliance Management'
      ],
      benefits: [
        '300% increase in open rates',
        '250% improvement in click-through rates',
        'Automated personalization',
        'Advanced analytics & insights'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-email-marketing',
      trial: '14-day free trial',
      rating: 4.6,
      reviews: 634
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, scheduling, and performance analytics.',
      price: '$59/mo',
      originalPrice: '$89/mo',
      category: 'marketing',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        'AI Content Generation',
        'Multi-platform Scheduling',
        'Hashtag Optimization',
        'Engagement Analytics',
        'Competitor Analysis',
        'Influencer Collaboration',
        'Crisis Management',
        'ROI Tracking'
      ],
      benefits: [
        '400% increase in engagement',
        '80% reduction in management time',
        'Automated content optimization',
        'Multi-platform coordination'
      ],
      demo: 'https://demo.ziontechgroup.com/ai-social-media-manager',
      trial: '14-day free trial',
      rating: 4.5,
      reviews: 512
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: microSAASServices.length },
    { id: 'productivity', name: 'Productivity', icon: Target, count: microSAASServices.filter(s => s.category === 'productivity').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'support', name: 'Support', icon: MessageSquare, count: microSAASServices.filter(s => s.category === 'support').length },
    { id: 'content', name: 'Content', icon: Palette, count: microSAASServices.filter(s => s.category === 'content').length },
    { id: 'finance', name: 'Finance', icon: CreditCard, count: microSAASServices.filter(s => s.category === 'finance').length },
    { id: 'automation', name: 'Automation', icon: Settings, count: microSAASServices.filter(s => s.category === 'automation').length },
    { id: 'sales', name: 'Sales', icon: Users, count: microSAASServices.filter(s => s.category === 'sales').length },
    { id: 'marketing', name: 'Marketing', icon: Globe, count: microSAASServices.filter(s => s.category === 'marketing').length }
  ];

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Powerful AI-powered micro SaaS tools to streamline your business operations. 
            Choose from our comprehensive suite of intelligent solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View All Demos
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400">Micro SAAS Tools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">10K+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search micro SAAS tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 relative group"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">{service.trial}</div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-cyan-400 font-medium">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="text-xs text-gray-400 flex items-center">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 border border-cyan-400 text-cyan-400 font-medium py-2 px-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm">
                      View Demo
                    </button>
                    <button className="flex-1 border border-gray-600 text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven micro SAAS solutions. 
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;