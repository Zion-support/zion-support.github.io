import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const microSaasProducts = [
  {
    id: 1,
    name: 'TaskFlow Pro',
    description: 'AI-powered project management and task automation for small teams',
    price: '$29/month',
    features: [
      'Smart Task Assignment',
      'Automated Workflows',
      'Team Collaboration',
      'Progress Tracking',
      'Deadline Management',
      'Resource Planning',
      'Custom Dashboards',
      'Integration APIs'
    ],
    icon: <CheckCircle className="w-8 h-8" />,
    category: 'Productivity',
    popular: true,
    rating: 4.9,
    users: '2,500+',
    color: 'from-blue-500 to-purple-600',
    capabilities: [
      'Handle 1000+ tasks simultaneously',
      '99.9% uptime guarantee',
      'Real-time collaboration',
      'Custom workflow creation'
    ]
  },
  {
    id: 2,
    name: 'DataViz Studio',
    description: 'Advanced data visualization and analytics platform for businesses',
    price: '$49/month',
    features: [
      'Interactive Charts',
      'Real-time Data',
      'Custom Dashboards',
      'Export Options',
      'Team Sharing',
      'API Integration',
      'Mobile Access',
      'Advanced Analytics'
    ],
    icon: <BarChart3 className="w-8 h-8" />,
    category: 'Analytics',
    popular: true,
    rating: 4.8,
    users: '1,800+',
    color: 'from-green-500 to-teal-600',
    capabilities: [
      'Process 10TB+ data daily',
      '50+ chart types',
      'Real-time updates',
      'Custom theme creation'
    ]
  },
  {
    id: 3,
    name: 'ContentCraft AI',
    description: 'AI-powered content creation and management platform',
    price: '$39/month',
    features: [
      'AI Writing Assistant',
      'Content Templates',
      'SEO Optimization',
      'Multi-language Support',
      'Brand Voice Training',
      'Content Calendar',
      'Collaboration Tools',
      'Analytics Dashboard'
    ],
    icon: <FileText className="w-8 h-8" />,
    category: 'Content',
    popular: false,
    rating: 4.7,
    users: '1,200+',
    color: 'from-orange-500 to-red-600',
    capabilities: [
      'Generate 1000+ words/minute',
      'Support 50+ languages',
      'SEO score optimization',
      'Brand consistency checks'
    ]
  },
  {
    id: 4,
    name: 'FinanceTracker Pro',
    description: 'Comprehensive financial management and expense tracking solution',
    price: '$59/month',
    features: [
      'Expense Tracking',
      'Budget Planning',
      'Invoice Management',
      'Tax Preparation',
      'Investment Tracking',
      'Financial Reports',
      'Multi-currency Support',
      'Bank Integration'
    ],
    icon: <DollarSign className="w-8 h-8" />,
    category: 'Finance',
    popular: true,
    rating: 4.9,
    users: '3,200+',
    color: 'from-emerald-500 to-green-600',
    capabilities: [
      'Track unlimited transactions',
      'Automated categorization',
      'Real-time bank sync',
      'Advanced reporting'
    ]
  }
];

const MicroSaasPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro SaaS solutions designed to streamline your business operations." />
        <meta name="keywords" content="micro saas, software solutions, business tools, productivity, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of powerful micro SaaS solutions designed to streamline your business operations and boost productivity.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {microSaasProducts.map((product) => (
              <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${product.color}`}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                      <p className="text-sm text-gray-400">{product.category}</p>
                    </div>
                  </div>
                  {product.popular && (
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">{product.rating} ({product.users})</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                  <button className="flex-1 border border-purple-400 text-purple-400 px-4 py-2 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors duration-200 flex items-center justify-center">
                    <Search className="w-4 h-4 mr-2" />
                    Try Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our collection of micro SaaS solutions or let us build a custom solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              to="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;