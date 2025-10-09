import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = useMemo(() => [
    {
      id: 'crm-saas',
      name: 'CRM Management',
      description: 'Complete customer relationship management solution for small businesses.',
      icon: Users,
      category: 'business',
      features: ['Lead Management', 'Contact Tracking', 'Sales Pipeline', 'Email Integration'],
      pricing: { starting: 29, period: 'month' },
      rating: 4.8,
      reviews: 1247,
      popular: true
    },
    {
      id: 'project-management',
      name: 'Project Management',
      description: 'Streamline your projects with our intuitive project management tool.',
      icon: Target,
      category: 'productivity',
      features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Progress Reports'],
      pricing: { starting: 19, period: 'month' },
      rating: 4.7,
      reviews: 892,
      popular: false
    },
    {
      id: 'inventory-saas',
      name: 'Inventory Management',
      description: 'Keep track of your inventory with real-time updates and analytics.',
      icon: Database,
      category: 'business',
      features: ['Stock Tracking', 'Automated Reordering', 'Analytics Dashboard', 'Multi-location Support'],
      pricing: { starting: 39, period: 'month' },
      rating: 4.6,
      reviews: 654,
      popular: false
    },
    {
      id: 'analytics-saas',
      name: 'Business Analytics',
      description: 'Transform your data into actionable insights with our analytics platform.',
      icon: BarChart,
      category: 'analytics',
      features: ['Custom Dashboards', 'Real-time Reports', 'Data Visualization', 'Export Options'],
      pricing: { starting: 49, period: 'month' },
      rating: 4.9,
      reviews: 423,
      popular: true
    },
    {
      id: 'communication-saas',
      name: 'Team Communication',
      description: 'Enhance team collaboration with our communication platform.',
      icon: MessageSquare,
      category: 'productivity',
      features: ['Instant Messaging', 'Video Calls', 'File Sharing', 'Screen Sharing'],
      pricing: { starting: 15, period: 'month' },
      rating: 4.5,
      reviews: 789,
      popular: false
    },
    {
      id: 'marketing-saas',
      name: 'Marketing Automation',
      description: 'Automate your marketing campaigns with our powerful marketing tool.',
      icon: Target,
      category: 'marketing',
      features: ['Email Campaigns', 'Social Media Management', 'Lead Scoring', 'A/B Testing'],
      pricing: { starting: 59, period: 'month' },
      rating: 4.8,
      reviews: 567,
      popular: true
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'business', name: 'Business', icon: Building },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'content', name: 'Content Creation', icon: FileText },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.pricing.starting - b.pricing.starting;
        case 'popularity':
        default:
          return b.reviews - a.reviews;
      }
    });
    
    return filtered;
  }, [microSAASServices, selectedCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SAAS solutions designed for small businesses. CRM, project management, analytics, and more." />
        <meta name="keywords" content="micro saas, small business software, crm, project management, business tools" />
      </Helmet>
      
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
              Powerful, affordable software solutions designed specifically for small businesses. 
              Streamline your operations with our comprehensive suite of micro SAAS applications.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SAAS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Filter:</span>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="popularity">Popularity</option>
                  <option value="rating">Rating</option>
                  <option value="price">Price</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Micro SAAS</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SAAS applications designed to streamline your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold mt-1">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">
                        ${service.pricing.starting}
                      </div>
                      <div className="text-sm text-gray-400">per {service.pricing.period}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-xs text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`tel:+13024640950`}
                        className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                      >
                        <Phone className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                        Call
                      </a>
                      <a
                        href={`mailto:info@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                        className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                      >
                        <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss which micro SAAS solutions are right for your business and get a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Get Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;
