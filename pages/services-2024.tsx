import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  Brain, Atom, Cpu, Shield, Database, Cloud,
  ArrowRight, CheckCircle, Zap, Sparkles, Code, BarChart3, Target, Phone, Mail, MapPin
} from 'lucide-react';
import Link from 'next/link';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';

export default function Services2024Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Sample services data
  const services = [
    {
      id: 1,
      name: 'AI Business Intelligence Pro',
      description: 'Advanced AI-powered business intelligence and analytics platform.',
      category: 'AI & Machine Learning',
      price: '$299/month',
      rating: 4.9,
      customers: 150,
      icon: Brain
    },
    {
      id: 2,
      name: 'Quantum Security Platform',
      description: 'Next-generation quantum-resistant encryption and security solutions.',
      category: 'Quantum & Security',
      price: '$4,999/month',
      rating: 4.8,
      customers: 75,
      icon: Atom
    },
    {
      id: 3,
      name: 'Enterprise DevOps Automation',
      description: 'Intelligent DevOps automation for enterprise infrastructure.',
      category: 'Enterprise IT',
      price: '$3,999/month',
      rating: 4.9,
      customers: 200,
      icon: Cpu
    },
    {
      id: 4,
      name: 'API Management Suite',
      description: 'Comprehensive API management and development platform.',
      category: 'API & Development',
      price: '$1,999/month',
      rating: 4.7,
      customers: 120,
      icon: Code
    },
    {
      id: 5,
      name: 'Business Analytics Platform',
      description: 'AI-powered business intelligence and optimization tools.',
      category: 'Business & Analytics',
      price: '$2,499/month',
      rating: 4.8,
      customers: 180,
      icon: BarChart3
    },
    {
      id: 6,
      name: 'Marketing Automation Pro',
      description: 'Intelligent marketing automation and social media management.',
      category: 'Marketing & Automation',
      price: '$1,799/month',
      rating: 4.6,
      customers: 90,
      icon: Target
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: services.length },
    { id: 'ai', name: 'AI & Machine Learning', count: services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Security', count: services.filter(s => s.category.includes('Quantum')).length },
    { id: 'enterprise', name: 'Enterprise IT', count: services.filter(s => s.category.includes('Enterprise')).length },
    { id: 'api', name: 'API & Development', count: services.filter(s => s.category.includes('API')).length },
    { id: 'business', name: 'Business & Analytics', count: services.filter(s => s.category.includes('Business')).length },
    { id: 'marketing', name: 'Marketing & Automation', count: services.filter(s => s.category.includes('Marketing')).length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>2024 Revolutionary Services - Zion Tech Group</title>
        <meta name="description" content="Explore our revolutionary 2024 services including AI automation, quantum security, enterprise IT solutions, and innovative micro SAAS platforms." />
        <link rel="canonical" href="https://ziontechgroup.com/services-2024" />
      </Head>

      <EnhancedNavigation />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-20">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2024 Revolutionary Services
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Experience the future of technology with our cutting-edge AI automation, quantum security, 
                and enterprise IT solutions designed for the modern digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 rounded-lg transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  <option value="all">All Categories</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="quantum">Quantum & Security</option>
                  <option value="enterprise">Enterprise IT</option>
                  <option value="api">API & Development</option>
                  <option value="business">Business & Analytics</option>
                  <option value="marketing">Marketing & Automation</option>
                </select>

                {/* Price Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under $1,000</option>
                  <option value="medium">$1,000 - $3,000</option>
                  <option value="high">Over $3,000</option>
                </select>

                {/* Sort By */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <p className="text-sm text-cyan-400">{service.category}</p>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-white">{service.rating}</span>
                  </div>
                </div>
                
                <div className="text-sm text-white/60 mb-4">
                  {service.customers} customers
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white py-2 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific needs and discover how our revolutionary 
                services can accelerate your digital transformation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-blue-400 font-mono">{contactInfo.mobile}</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-green-400">{contactInfo.email}</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-purple-400 text-sm">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500/20 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
}