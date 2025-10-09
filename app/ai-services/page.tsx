import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Calendar, Settings, FileText, Database, Smartphone, Lock, Code, BarChart3, PieChart, LineChart, Activity, CreditCard, ShoppingCart, Mail as MailIcon, Camera, Music, Video, Image, Palette, Wrench, Lightbulb, Rocket, Heart, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = useMemo(() => [
    {
      id: 'ai-marketing',
      name: 'AI Marketing Automation',
      description: 'Revolutionize your marketing with AI-powered automation, personalization, and analytics.',
      category: 'marketing',
      icon: Target,
      price: '$1,500/month',
      users: 1250,
      rating: 4.9,
      features: ['Automated Campaign Management', 'Predictive Analytics', 'Personalized Content', 'ROI Optimization'],
      popular: true
    },
    {
      id: 'ai-automation',
      name: 'AI Business Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      category: 'automation',
      icon: Zap,
      price: '$2,200/month',
      users: 2100,
      rating: 4.8,
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Exception Handling'],
      popular: false
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
      category: 'healthcare',
      icon: Heart,
      price: '$3,500/month',
      users: 850,
      rating: 4.9,
      features: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance'],
      popular: false
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech Solutions',
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
      category: 'finance',
      icon: CreditCard,
      price: '$2,800/month',
      users: 1500,
      rating: 4.7,
      features: ['Algorithmic Trading', 'Fraud Detection', 'Risk Assessment', 'Credit Scoring'],
      popular: true
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced data insights and business intelligence powered by artificial intelligence.',
      category: 'analytics',
      icon: BarChart,
      price: '$1,800/month',
      users: 1800,
      rating: 4.8,
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization'],
      popular: false
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      description: 'Intelligent customer service automation and chatbot solutions.',
      category: 'support',
      icon: MessageSquare,
      price: '$1,200/month',
      users: 2200,
      rating: 4.6,
      features: ['Chatbot Integration', 'Ticket Automation', 'Sentiment Analysis', 'Multi-channel Support'],
      popular: false
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: aiServices.length },
    { id: 'marketing', name: 'Marketing', icon: Target, count: aiServices.filter(s => s.category === 'marketing').length },
    { id: 'automation', name: 'Automation', icon: Zap, count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: aiServices.filter(s => s.category === 'healthcare').length },
    { id: 'finance', name: 'Finance', icon: CreditCard, count: aiServices.filter(s => s.category === 'finance').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'support', name: 'Support', icon: MessageSquare, count: aiServices.filter(s => s.category === 'support').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = aiServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [aiServices, selectedCategory, searchTerm]);

  const stats = {
    totalServices: aiServices.length,
    totalUsers: aiServices.reduce((sum, service) => sum + service.users, 0),
    averageRating: (aiServices.reduce((sum, service) => sum + service.rating, 0) / aiServices.length).toFixed(1)
  };

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including marketing automation, business intelligence, healthcare solutions, and fintech applications." />
        <meta name="keywords" content="ai services, artificial intelligence, machine learning, automation, analytics, healthcare ai, fintech ai" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations and drive innovation.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stats.totalServices}+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stats.totalUsers.toLocaleString()}+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">{stats.averageRating}/5</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4 inline mr-2" />
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <service.icon className="w-8 h-8" />
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white ml-1">{service.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Users className="w-4 h-4 mr-1" />
                    {service.users.toLocaleString()} users
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI solutions to automate and optimize their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;