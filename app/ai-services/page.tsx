import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence',
      description: 'Advanced AI analytics platform that transforms raw data into actionable business insights',
      price: '$2,499/month',
      features: [
        'Real-time Data Processing',
        'Predictive Analytics',
        'Natural Language Queries',
        'Automated Report Generation',
        'Custom Dashboard Creation',
        'Multi-Data Source Integration',
        'Advanced Machine Learning Models',
        '24/7 Monitoring & Alerts'
      ],
      icon: BarChart3,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      id: 2,
      name: 'AI Content Generation Suite',
      description: 'Comprehensive AI-powered content creation platform for all your marketing needs',
      price: '$1,299/month',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Marketing Campaigns',
        'Video Script Writing',
        'SEO-Optimized Content',
        'Multi-Language Support',
        'Brand Voice Consistency',
        'Content Calendar Management'
      ],
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbot and customer service automation with human-like interactions',
      price: '$899/month',
      features: [
        '24/7 Customer Support',
        'Multi-Language Support',
        'Sentiment Analysis',
        'Ticket Routing & Prioritization',
        'Knowledge Base Integration',
        'Live Chat Handoff',
        'Performance Analytics',
        'Custom Training & Optimization'
      ],
      icon: Bot,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      name: 'AI Marketing Automation',
      description: 'End-to-end marketing automation powered by artificial intelligence',
      price: '$1,599/month',
      features: [
        'Campaign Optimization',
        'Audience Segmentation',
        'A/B Testing Automation',
        'Email Personalization',
        'Social Media Management',
        'Lead Scoring & Nurturing',
        'ROI Tracking & Analytics',
        'Cross-Platform Integration'
      ],
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 5,
      name: 'AI Data Analytics Platform',
      description: 'Advanced data processing and analytics with machine learning capabilities',
      price: '$3,299/month',
      features: [
        'Big Data Processing',
        'Real-time Analytics',
        'Predictive Modeling',
        'Data Visualization',
        'Automated Insights',
        'Data Quality Management',
        'Custom Algorithm Development',
        'Enterprise Security'
      ],
      icon: Database,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 6,
      name: 'AI Voice & Speech Processing',
      description: 'Advanced voice recognition, synthesis, and processing capabilities',
      price: '$1,799/month',
      features: [
        'Speech-to-Text Conversion',
        'Text-to-Speech Synthesis',
        'Voice Cloning',
        'Language Translation',
        'Sentiment Analysis',
        'Voice Command Processing',
        'Multi-Language Support',
        'Real-time Processing'
      ],
      icon: Headphones,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive suite of AI-powered solutions. 
              From automation to analytics, we deliver cutting-edge technology that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold text-lg"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service) => (
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
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.bgColor} mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Get Started
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
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI solutions to drive growth, 
            efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Schedule Consultation
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

export default AIServicesPage;