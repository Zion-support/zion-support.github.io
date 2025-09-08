import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, 
  ArrowRight, Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, Phone, Mail, MapPin, Eye, Heart, Target, Award
} from 'lucide-react';

export default function Revolutionary2026ServicesShowcaseV4() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Mock services data
  const mockServices = [
    {
      id: 'ai-analytics',
      name: 'AI-Powered Analytics Platform',
      category: 'AI & Machine Learning',
      price: '$499/month',
      description: 'Intelligent insights and predictive analytics for your business',
      features: ['Real-time processing', 'ML models', 'Custom dashboards']
    },
    {
      id: 'quantum-security',
      name: 'Quantum Cybersecurity Suite',
      category: 'Quantum & Space',
      price: '$1,999/month',
      description: 'Next-generation security powered by quantum computing',
      features: ['Quantum encryption', 'Threat detection', 'Zero-trust architecture']
    },
    {
      id: 'enterprise-cloud',
      name: 'Enterprise Cloud Platform',
      category: 'Enterprise IT',
      price: '$2,500/month',
      description: 'Scalable cloud infrastructure for enterprise needs',
      features: ['Multi-cloud support', 'Auto-scaling', '24/7 monitoring']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: mockServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🤖', count: 1 },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: 1 },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: 1 }
  ];

  const filteredServices = mockServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.includes(categories.find(c => c.id === selectedCategory)?.name || '');
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Head>
        <title>Revolutionary 2026 Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary 2026 services in AI, quantum computing, and enterprise IT solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2026-services-showcase-v4" />
      </Head>

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            2026 Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the future of technology with our revolutionary AI, quantum computing, and enterprise IT services.
          </p>
        </motion.div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'border-white/20 text-gray-300 hover:border-white/40'
                  }`}
                >
                  {category.icon} {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-center">{contactInfo.address}</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
          >
            Get Started Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}