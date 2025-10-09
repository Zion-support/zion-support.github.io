import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered insights and automation',
      category: 'productivity',
      price: { starting: 29, period: 'month' },
      rating: 4.8,
      reviews: 1247,
      features: ['AI-powered task prioritization', 'Automated progress tracking', 'Smart resource allocation', 'Predictive analytics'],
      icon: Target,
      popular: true
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Smart expense management with automatic categorization and insights',
      category: 'finance',
      price: { starting: 19, period: 'month' },
      rating: 4.6,
      reviews: 892,
      features: ['Automatic receipt scanning', 'Smart categorization', 'Budget alerts', 'Expense analytics'],
      icon: DollarSign,
      popular: true
    },
    {
      id: 'ai-scheduler',
      name: 'AI Scheduler',
      description: 'Intelligent scheduling assistant that optimizes your calendar',
      category: 'productivity',
      price: { starting: 24, period: 'month' },
      rating: 4.7,
      reviews: 654,
      features: ['Smart meeting scheduling', 'Conflict resolution', 'Time optimization', 'Calendar integration'],
      popular: true
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      icon: FileText,
      category: 'content',
      pricing: { starting: 29, period: 'month' },
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization'],
      benefits: ['Save 80% time on content creation', 'Consistent brand voice', 'SEO-optimized content'],
      popular: true,
      rating: 4.9,
      users: 12500
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and lead generation without coding.',
      icon: Bot,
      category: 'automation',
      pricing: { starting: 49, period: 'month' },
      features: ['No-code builder', 'Multi-language support', 'Analytics dashboard', 'Integration APIs'],
      benefits: ['24/7 customer support', 'Reduce support costs by 60%', 'Qualify leads automatically'],
      popular: true,
      rating: 4.8,
      users: 8900
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Get actionable insights from your data with AI-powered analytics and visualization.',
      icon: BarChart,
      category: 'analytics',
      pricing: { starting: 39, period: 'month' },
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Automated reporting'],
      popular: false,
      rating: 4.7,
      users: 5600
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing',
      description: 'Automate email campaigns with AI-powered personalization and optimization.',
      icon: Mail,
      category: 'marketing',
      pricing: { starting: 59, period: 'month' },
      features: ['Smart segmentation', 'A/B testing', 'Send time optimization', 'Performance tracking'],
      benefits: ['Increase open rates by 40%', 'Automated personalization', 'Better deliverability'],
      popular: true,
      rating: 4.8,
      users: 10200
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered task optimization and team coordination.',
      icon: Calendar,
      category: 'productivity',
      pricing: { starting: 79, period: 'month' },
      features: ['Smart task scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration'],
      benefits: ['Complete projects 30% faster', 'Reduce project risks', 'Better team coordination'],
      popular: false,
      rating: 4.6,
      users: 4200
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automate invoice creation and management with AI-powered data extraction and processing.',
      icon: FileText,
<<<<<<< HEAD
      popular: true
=======
      category: 'finance',
      pricing: { starting: 19, period: 'month' },
      features: ['Auto-invoice generation', 'Payment tracking', 'Tax calculations', 'Client management'],
      benefits: ['Save 90% time on invoicing', 'Reduce billing errors', 'Faster payments'],
      popular: true,
      rating: 4.9,
      users: 15800
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'content', name: 'Content Creation', icon: FileText },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
<<<<<<< HEAD
    { id: 'communication', name: 'Communication', icon: MessageSquare }
=======
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'productivity', name: 'Productivity', icon: Clock },
    { id: 'finance', name: 'Finance', icon: DollarSign }
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;
<<<<<<< HEAD

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
=======
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
<<<<<<< HEAD

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price.starting - b.price.starting;
        case 'price-high':
          return b.price.starting - a.price.starting;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
        default:
          return b.reviews - a.reviews;
      }
    });

    return filtered;
  }, [microSAASServices, selectedCategory, searchTerm, sortBy]);

  const formatPrice = (price: typeof microSAASServices[0]['price']) => {
    return `$${price.starting}/${price.period === 'month' ? 'mo' : 'yr'}`;
  };
=======
    
    if (sortBy === 'popularity') {
      filtered = filtered.sort((a, b) => b.users - a.users);
    } else if (sortBy === 'rating') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price') {
      filtered = filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
    }
    
    return filtered;
  }, [microSAASServices, selectedCategory, searchTerm, sortBy]);
>>>>>>> cursor/website-audit-and-update-with-deployment-6747

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Discover our collection of powerful Micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused tools designed to solve specific business challenges with AI-powered automation and intelligent insights.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search Micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="price-low">Sort by Price: Low to High</option>
                  <option value="price-high">Sort by Price: High to Low</option>
                </select>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-400 text-slate-900'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
=======
        <meta name="description" content="Discover our collection of micro SAAS solutions designed to solve specific business problems with AI-powered tools and automation." />
        <meta name="keywords" content="micro SAAS, business tools, AI automation, productivity software, business solutions" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our collection of specialized micro SAAS solutions designed to solve specific business problems with AI-powered tools and automation.
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
                <span className="text-gray-300">Sort by:</span>
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
              </div>
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
<<<<<<< HEAD
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(service.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">
                            {service.rating} ({service.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-gray-400 text-sm">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(service.price)}
                    </div>
                    <button className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
=======
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Collection</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our curated collection of micro SAAS solutions designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                        </div>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-300">{service.users.toLocaleString()} users</span>
                      </div>
                    </div>
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                      Popular
                    </span>
                  )}
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

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300">{benefit}</li>
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
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team can build a custom Micro SAAS solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a Custom Micro SAAS Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We can create a custom micro SAAS solution tailored to your specific business needs. Contact us to discuss your requirements.
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
              Get Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
  );
};

export default MicroSAASPage;