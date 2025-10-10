import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Sparkles, Atom } from 'lucide-react';

const microSAASServices = [
  {
    id: 1,
    name: 'AI Project Manager Pro',
    description: 'Revolutionary project management with quantum-inspired algorithms, real-time collaboration, and predictive analytics',
    price: '$199/month',
    originalPrice: '$299/month',
    features: [
      'Quantum task optimization',
      'Real-time collaboration',
      'Predictive analytics',
      'AI risk assessment',
      'Resource optimization',
      'Gantt charts',
      'Time tracking',
      'Team insights'
    ],
    benefits: [
      '60% productivity increase',
      '85% fewer delays',
      '95% planning accuracy',
      '40% cost reduction'
    ],
    link: '/ai-project-manager',
    popular: true,
    category: 'Productivity',
    rating: 4.9,
    users: '25,000+',
    freeTrial: '30 days',
    icon: <BarChart3 className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    name: 'AI Smart Calendar Pro',
    description: 'Advanced calendar AI that learns your work patterns, optimizes meetings, and prevents burnout',
    price: '$89/month',
    originalPrice: '$129/month',
    features: [
      'Smart scheduling',
      'Meeting optimization',
      'Burnout prevention',
      'Calendar integration',
      'Time blocking',
      'Automated reminders',
      'Conflict resolution',
      'Productivity insights'
    ],
    benefits: [
      '50% fewer meeting conflicts',
      '30% time savings',
      'Better work-life balance',
      'Increased focus time'
    ],
    link: '/ai-smart-calendar',
    popular: false,
    category: 'Productivity',
    rating: 4.8,
    users: '15,000+',
    freeTrial: '14 days',
    icon: <Calendar className="w-8 h-8" />,
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 3,
    name: 'AI Content Writer Pro',
    description: 'Professional content creation with advanced AI that understands your brand voice and industry',
    price: '$129/month',
    originalPrice: '$199/month',
    features: [
      'Blog post generation',
      'Social media content',
      'Email marketing copy',
      'SEO optimization',
      'Brand voice training',
      'Multi-language support',
      'Content calendar',
      'Performance analytics'
    ],
    benefits: [
      '10x faster content creation',
      '95% SEO score average',
      'Consistent brand voice',
      '50+ language support'
    ],
    link: '/ai-content-writer',
    popular: true,
    category: 'Content',
    rating: 4.7,
    users: '35,000+',
    freeTrial: '7 days',
    icon: <FileText className="w-8 h-8" />,
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 4,
    name: 'AI Video Generator Pro',
    description: 'Create professional videos with AI-powered editing, voice synthesis, and automated production',
    price: '$199/month',
    originalPrice: '$299/month',
    features: [
      'AI video editing',
      'Voice synthesis',
      'Auto-captioning',
      'Template library',
      'Brand customization',
      'Multi-format export',
      'Collaboration tools',
      'Analytics dashboard'
    ],
    benefits: [
      '90% faster video production',
      'Professional quality output',
      'No technical skills required',
      'Unlimited exports'
    ],
    link: '/ai-video-generator',
    popular: false,
    category: 'Content',
    rating: 4.6,
    users: '12,000+',
    freeTrial: '14 days',
    icon: <Video className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 5,
    name: 'AI Social Media Manager Pro',
    description: 'Automated social media management with AI-powered content creation and scheduling',
    price: '$99/month',
    originalPrice: '$149/month',
    features: [
      'Auto content creation',
      'Smart scheduling',
      'Hashtag optimization',
      'Engagement tracking',
      'Multi-platform posting',
      'Analytics reports',
      'Competitor analysis',
      'Trend monitoring'
    ],
    benefits: [
      '3x more engagement',
      '80% time savings',
      'Consistent posting',
      'Better reach and visibility'
    ],
    link: '/ai-social-media-manager',
    popular: true,
    category: 'Marketing',
    rating: 4.8,
    users: '28,000+',
    freeTrial: '21 days',
    icon: <Share2 className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 6,
    name: 'AI Email Marketing Suite',
    description: 'Intelligent email marketing with AI-driven personalization and automation',
    price: '$79/month',
    originalPrice: '$119/month',
    features: [
      'AI email writing',
      'Personalization engine',
      'Send time optimization',
      'A/B testing',
      'List segmentation',
      'Automation workflows',
      'Deliverability monitoring',
      'ROI tracking'
    ],
    benefits: [
      '40% higher open rates',
      '60% more clicks',
      'Automated campaigns',
      'Better deliverability'
    ],
    link: '/ai-email-marketing',
    popular: false,
    category: 'Marketing',
    rating: 4.7,
    users: '18,000+',
    freeTrial: '14 days',
    icon: <Mail className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-600'
  }
];

const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security'];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful AI-driven micro SaaS tools designed to boost productivity and streamline your business operations.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search micro SaaS tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1">{service.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{service.users} users</span>
                  <span>•</span>
                  <span>{service.freeTrial} free trial</span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No tools found matching your criteria.</div>
          </div>
        )}
      </div>
    </div>
  );
}