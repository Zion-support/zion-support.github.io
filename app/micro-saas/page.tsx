            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1>
              AI-Powered Micro SAAS;
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>
              Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"></div>
          <div className="text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered Micro SAAS</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.</p>
            </p>
          </div>
        </div>
      </div>,
    </>);
};

export default MicroSaasPage;
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Search as SearchIcon, FileText as FileTextIcon } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-driven insights, automated scheduling, and resource optimization.',
      category: 'ai-tools',
      price: '$29/month',
      rating: 4.8,
      users: 1250,
      features: ['AI-powered scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration'],
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'smart-analytics',
      name: 'Smart Analytics Dashboard',
      description: 'Advanced analytics and reporting with real-time insights and predictive modeling.',
      category: 'analytics',
      price: '$49/month',
      rating: 4.9,
      users: 2100,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Suite',
      description: 'Automated customer support with intelligent chatbots and ticket management.',
      category: 'customer-service',
      price: '$39/month',
      rating: 4.7,
      users: 1800,
      features: ['AI chatbots', 'Ticket automation', 'Sentiment analysis', 'Multi-channel support'],
      icon: MessageSquare,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'content-generator',
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns.',
      category: 'content',
      price: '$19/month',
      rating: 4.6,
      users: 3200,
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimization'],
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'security-monitor',
      name: 'Security Monitor Pro',
      description: 'Comprehensive security monitoring and threat detection for small businesses.',
      category: 'security',
      price: '$59/month',
      rating: 4.9,
      users: 950,
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', 'Incident response'],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'inventory-manager',
      name: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      category: 'inventory',
      price: '$34/month',
      rating: 4.5,
      users: 1400,
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Multi-location support'],
      icon: Database,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSAASServices.length },
    { id: 'ai-tools', name: 'AI Tools', count: microSAASServices.filter(s => s.category === 'ai-tools').length },
    { id: 'analytics', name: 'Analytics', count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'customer-service', name: 'Customer Service', count: microSAASServices.filter(s => s.category === 'customer-service').length },
    { id: 'content', name: 'Content', count: microSAASServices.filter(s => s.category === 'content').length },
    { id: 'security', name: 'Security', count: microSAASServices.filter(s => s.category === 'security').length },
    { id: 'inventory', name: 'Inventory', count: microSAASServices.filter(s => s.category === 'inventory').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

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

    // Sort services
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
      case 'price-high':
        return filtered.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'users':
        return filtered.sort((a, b) => b.users - a.users);
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <>
      <Helmet></Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS services designed to streamline your business operations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          {/* Header */}
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Discover our collection of micro SaaS services designed to streamline your business operations and boost productivity.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12"></div>
            <div className="flex flex-col lg:flex-row gap-4 mb-8"></div>
              <div className="flex-1 relative"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="rating">Sort by Rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="users">Most Users</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2"></div>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 border-cyan-400 text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              ></div>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4"></div>
                  <div className="flex items-center space-x-1"></div>
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-gray-400">({service.users} users)</span>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>

                <ul className="space-y-2 mb-6"></ul>
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"></button>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              We can create a custom micro SaaS solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              ></a>
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              ></a>
                <Mail className="w-5 h-5 mr-2" />
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default MicroSAASPage;
