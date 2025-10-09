import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Search, Star, CheckCircle, ArrowRight, Phone, Mail, 
  Zap, Shield, Globe, Database, Smartphone, Settings, FileText, 
  BarChart, Users, Target, TrendingUp, Clock, DollarSign, 
  Award, Lock, Cpu, Brain, Code, Cloud, Shield as Security,
  MessageSquare, Calendar, Mail as Email, Camera, Music,
  Video, Gamepad2, ShoppingCart, CreditCard, Building,
  Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope,
  GraduationCap, Briefcase, Wrench, Hammer, Paintbrush,
  Scissors, BookOpen, Calculator, Clock3, Compass, PieChart,
  TrendingDown, Activity, Eye, Bot, Palette, Package, Play
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const microSaasServices = [
    // Productivity & Business Tools
    {
      id: 'ai-email-assistant',
      name: 'AI Email Assistant Pro',
      category: 'productivity',
      description: 'Intelligent email management with AI-powered responses, scheduling, and priority sorting.',
      features: [
        'Smart email categorization',
        'AI-generated responses',
        'Auto-scheduling meetings',
        'Priority inbox management',
        'Email templates',
        'Spam filtering',
        'Sentiment analysis',
        'Follow-up reminders'
      ],
      pricing: { monthly: 29, yearly: 290, setup: 0 },
      popular: true,
      icon: Email,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      stats: { users: '10K+', rating: 4.8, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-email-assistant',
      docs: 'https://docs.ziontechgroup.com/ai-email-assistant',
      benefits: [
        'Save 2 hours daily on email management',
        'Improve response time by 70%',
        'Reduce email stress by 60%',
        'Increase productivity by 40%'
      ]
    },
    {
      id: 'smart-calendar-scheduler',
      name: 'Smart Calendar Scheduler',
      category: 'productivity',
      description: 'AI-powered calendar management with intelligent scheduling, conflict resolution, and time optimization.',
      features: [
        'AI meeting scheduling',
        'Conflict resolution',
        'Time zone management',
        'Recurring events',
        'Meeting optimization',
        'Calendar analytics',
        'Integration with 50+ apps',
        'Mobile synchronization'
      ],
      pricing: { monthly: 19, yearly: 190, setup: 0 },
      popular: true,
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      stats: { users: '15K+', rating: 4.7, uptime: '99.8%' },
      demo: 'https://demo.ziontechgroup.com/smart-calendar',
      docs: 'https://docs.ziontechgroup.com/smart-calendar',
      benefits: [
        'Eliminate scheduling conflicts',
        'Save 1.5 hours weekly',
        'Improve meeting efficiency',
        'Reduce no-shows by 50%'
      ]
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      category: 'productivity',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows.',
      features: [
        'OCR text recognition',
        'Data extraction',
        'Document classification',
        'Automated workflows',
        'Batch processing',
        'API integration',
        'Cloud storage sync',
        'Security compliance'
      ],
      pricing: { monthly: 39, yearly: 390, setup: 0 },
      popular: false,
      icon: FileText,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      stats: { users: '5K+', rating: 4.6, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-document-processor',
      docs: 'https://docs.ziontechgroup.com/ai-document-processor',
      benefits: [
        'Process 1000+ documents/hour',
        'Reduce manual data entry by 90%',
        'Improve accuracy by 95%',
        'Save 20 hours weekly'
      ]
    },
    {
      id: 'ai-task-manager',
      name: 'AI Task Manager Pro',
      category: 'productivity',
      description: 'Intelligent task management with AI prioritization, deadline prediction, and team collaboration.',
      features: [
        'AI task prioritization',
        'Deadline prediction',
        'Team collaboration',
        'Progress tracking',
        'Time estimation',
        'Resource allocation',
        'Project templates',
        'Mobile app'
      ],
      pricing: { monthly: 24, yearly: 240, setup: 0 },
      popular: true,
      icon: CheckCircle,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      stats: { users: '12K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-task-manager',
      docs: 'https://docs.ziontechgroup.com/ai-task-manager',
      benefits: [
        'Increase task completion by 60%',
        'Reduce missed deadlines by 80%',
        'Improve team productivity by 45%',
        'Save 3 hours daily'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: microSaasServices.length },
    { id: 'productivity', name: 'Productivity', icon: Zap, count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'marketing', name: 'Marketing', icon: Target, count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'communication', name: 'Communication', icon: MessageSquare, count: microSaasServices.filter(s => s.category === 'communication').length },
    { id: 'finance', name: 'Finance', icon: DollarSign, count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: microSaasServices.filter(s => s.category === 'ecommerce').length },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: microSaasServices.filter(s => s.category === 'healthcare').length },
    { id: 'education', name: 'Education', icon: GraduationCap, count: microSaasServices.filter(s => s.category === 'education').length },
    { id: 'security', name: 'Security', icon: Shield, count: microSaasServices.filter(s => s.category === 'security').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSaasServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.stats.rating - a.stats.rating);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions including AI-powered productivity tools, marketing automation, analytics dashboards, and business intelligence. Transform your workflow with intelligent software." />
        <meta name="keywords" content="micro saas, saas solutions, ai tools, productivity software, business automation, marketing tools, analytics dashboard, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Intelligent Software for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive suite of AI-powered micro SaaS solutions designed to streamline workflows, 
            boost productivity, and drive business growth. From productivity tools to marketing automation, 
            we have the perfect solution for every business need.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">20+ SaaS Tools</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Comprehensive suite of micro SaaS solutions</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">💰</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">$10K+ Value</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Total value of micro SaaS portfolio</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">99.9% Uptime</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Enterprise-grade reliability</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="cyber-card hologram-card p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.borderColor} ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center text-2xl`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.pricing.monthly}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.users}</div>
                    <div className="text-xs text-gray-400">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.uptime}</div>
                    <div className="text-xs text-gray-400">Uptime</div>
                  </div>
                </div>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-cyan-400">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pricing */}
                <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Monthly</span>
                    <span className="text-lg font-bold text-white">${service.pricing.monthly}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Yearly</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-white">${service.pricing.yearly}</span>
                      <span className="text-xs text-green-400 ml-2">
                        Save ${(service.pricing.monthly * 12) - service.pricing.yearly}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <a
                    href={service.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                  >
                    <Play className="w-4 h-4 inline mr-2" />
                    Demo
                  </a>
                  <a
                    href={service.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-all text-center"
                  >
                    <FileText className="w-4 h-4 inline mr-2" />
                    Docs
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business with Micro SaaS?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our micro SaaS solutions today and experience the power of AI-driven automation and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MicroSaasPage;
