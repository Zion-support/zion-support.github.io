import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Star, Zap, Shield, Users, Globe, ArrowRight, Phone, Mail, MapPin, Brain, Atom, Rocket, Crown, Check } from 'lucide-react';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';

export default function Revolutionary2025ServicesShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
      name: 'AI Consciousness Platform',
      description: 'Revolutionary AI platform with genuine emotional intelligence and self-awareness.',
      category: 'AI',
      price: '$2,999/month',
      rating: 4.9,
      customers: 150,
      icon: Brain
    },
    {
      id: 2,
      name: 'Quantum Computing Suite',
      description: 'Advanced quantum computing solutions for complex problem solving.',
      category: 'Quantum',
      price: '$4,999/month',
      rating: 4.8,
      customers: 75,
      icon: Atom
    },
    {
      id: 3,
      name: 'Zero Trust Security',
      description: 'Next-generation network security with continuous verification.',
      category: 'Security',
      price: '$3,999/month',
      rating: 4.9,
      customers: 200,
      icon: Shield
    },
    {
      id: 4,
      name: 'Edge Computing Platform',
      description: 'Intelligent edge computing for real-time data processing.',
      category: 'Infrastructure',
      price: '$2,499/month',
      rating: 4.7,
      customers: 120,
      icon: Cpu
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI & Machine Learning', count: services.filter(s => s.category === 'AI').length },
    { id: 'quantum', name: 'Quantum Computing', count: services.filter(s => s.category === 'Quantum').length },
    { id: 'security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => {
        if (selectedCategory === 'ai') return service.category === 'AI';
        if (selectedCategory === 'quantum') return service.category === 'Quantum';
        if (selectedCategory === 'security') return service.category === 'Security';
        if (selectedCategory === 'infrastructure') return service.category === 'Infrastructure';
        return true;
      });

  return (
    <>
      <Head>
        <title>Revolutionary 2025 Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our revolutionary 2025 services including AI consciousness, quantum computing, zero trust security, and innovative infrastructure solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2025-services-showcase" />
      </Head>

      <EnhancedNavigation />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white pt-20">
        <main className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Revolutionary 2025 Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge AI, quantum computing, 
                and infrastructure solutions designed for 2025 and beyond.
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
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