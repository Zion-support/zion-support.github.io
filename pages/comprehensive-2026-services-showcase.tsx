


<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
import { motion, AnimatePresence } from 'framer-motion',;
import { 
  Search, Filter, Star, TrendingUp, Zap, Brain, Shield, 
  Globe, Database, Cloud, Lock, Palette, Target, Layers, 
  Sparkles, Atom, Microscope, Satellite, CheckCircle, 
  ArrowRight, Phone, Mail, MapPin, Rocket, Users, 
  BarChart3, Award, Clock, DollarSign
} from 'lucide-react',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation',;
import { nextGenAIServices2026 } from '../data/next-gen-ai-services-2026',;
import { revolutionaryITInfrastructure2026 } from '../data/revolutionary-it-infrastructure-2026',;
import { innovativeMicroSaas2026 } from '../data/innovative-micro-saas-2026',;
export default function Comprehensive2026ServicesShowcase() {
<<<<<<< HEAD
<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popularity')
  const [viewMode, setViewMode] = useState('grid')
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [sortBy, setSortBy] = useState('popularity'),
  const [viewMode, setViewMode] = useState('grid'),

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
<<<<<<< HEAD
<<<<<<< HEAD

};
  // Combine all services
  const allServices = [
    ...nextGenAIServices2026;
    ...revolutionaryITInfrastructure2026;
    ...innovativeMicroSaas2026
  ];

  // Combine all services
  const _allServices = [
    ...nextGenAIServices2026,
    ...revolutionaryITInfrastructure2026,
    ...innovativeMicroSaas2026
  ],

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: nextGenAIServices2026.length },
    { id: 'it', name: 'IT Infrastructure', icon: Shield, count: revolutionaryITInfrastructure2026.length },
    { id: 'saas', name: 'Micro SaaS', icon: Zap, count: innovativeMicroSaas2026.length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Layers, count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length }
];
  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory);
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  Search, Filter, Star, TrendingUp, Zap, Brain, Shield
  Globe, Database, Cloud, Lock, Palette, Target, Layers
  Sparkles, Atom, Microscope, Satellite, CheckCircle
  ArrowRight, Phone, Mail, MapPin, Rocket, Users
  BarChart3, Award, Clock, DollarSign
} from 'lucide-react'
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Search, Filter, Star, TrendingUp, Zap, Brain, Shield,;
  Globe, Database, Cloud, Lock, Palette, Target, Layers,;
  Sparkles, Atom, Microscope, Satellite, CheckCircle,;
  ArrowRight, Phone, Mail, MapPin, Rocket, Users,;
  BarChart3, Award, Clock, DollarSign;
} from 'lucide-react',;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { nextGenAIServices2026 } from '../data/next-gen-ai-services-2026';
import { revolutionaryITInfrastructure2026 } from '../data/revolutionary-it-infrastructure-2026';
import { innovativeMicroSaas2026 } from '../data/innovative-micro-saas-2026';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...nextGenAIServices2026;
    ...revolutionaryITInfrastructure2026;
    ...innovativeMicroSaas2026
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: nextGenAIServices2026.length },
    { id: 'it', name: 'IT Infrastructure', icon: Shield, count: revolutionaryITInfrastructure2026.length },
    { id: 'saas', name: 'Micro SaaS', icon: Zap, count: innovativeMicroSaas2026.length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Layers, count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory);

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function Comprehensive2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popularity')
  const [viewMode, setViewMode] = useState('grid')
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com'
<<<<<<< HEAD
  }
  // Combine all services
  const allServices = [
    ...nextGenAIServices2026
    ...revolutionaryITInfrastructure2026
    ...innovativeMicroSaas2026
  ]
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length }
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: nextGenAIServices2026.length }
    { id: 'it', name: 'IT Infrastructure', icon: Shield, count: revolutionaryITInfrastructure2026.length }
    { id: 'saas', name: 'Micro SaaS', icon: Zap, count: innovativeMicroSaas2026.length }
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length }
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Layers, count: allServices.filter(s => s.category.includes('Blockchain')).length }
    { id: 'emerging', name: 'Emerging Tech', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length }
  ]
  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' |
                             service.category.toLowerCase().includes(selectedCategory)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };

  // Combine all services
  const allServices = [
    ...nextGenAIServices2026;
    ...revolutionaryITInfrastructure2026;
    ...innovativeMicroSaas2026
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: nextGenAIServices2026.length },
    { id: 'it', name: 'IT Infrastructure', icon: Shield, count: revolutionaryITInfrastructure2026.length },
    { id: 'saas', name: 'Micro SaaS', icon: Zap, count: innovativeMicroSaas2026.length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Layers, count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
<<<<<<< HEAD
<<<<<<< HEAD
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''))
        case 'price-high':
          return parseFloat(b.price.replace('$', '').replace(, '')) - parseFloat(a.price.replace('$', '').replace(, ''))
        case 'rating':
          return b.rating - a.rating
        case 'customers':
          return b.customers - a.customers
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        case 'rating':
          return b.rating - a.rating
        case 'customers':

          return b.customers - a.customers;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        default: return a.popular ? -1 : 1
      }
    })
  const containerVariants = {
    hidden: { opacity: 0 }
<<<<<<< HEAD
<<<<<<< HEAD
  };
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    }
  }
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react',
import Head from 'next / head',
import Link from 'next / link',
import { motion, AnimatePresence } from 'framer-motion',
import {
  Search, Filter, Star, TrendingUp, Zap, Brain, Shield,
  Globe, Database, Cloud, Lock, Palette, Target, Layers,
  Sparkles, Atom, Microscope, Satellite, CheckCircle,
  ArrowRight, Phone, Mail, MapPin, Rocket, Users,
  BarChart3, Award, Clock, DollarSign;
} from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground',
import UltraAdvancedNavigation from '../components / layout / UltraAdvancedNavigation',
import { nextGenAIServices2026 } from '../data / next - gen - ai - services - 2026',
import { revolutionaryITInfrastructure2026 } from '../data / revolutionary - it - infrastructure - 2026',
import { innovativeMicroSaas2026 } from '../data / innovative - micro - saas - 2026',
export default /**
 * Comprehensive2026ServicesShowcase - Function description
 */
function Comprehensive2026ServicesShowcase() {
  const [search_term, setSearchTerm] = useState (''),
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [sort_by, setSortBy] = useState ('popularity'),
  const [view_mode, setViewMode] = useState ('grid'),
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com';
  },
  // Combine all services;
  const all_services = [;
    ...nextGenAIServices2026,
    ...revolutionaryITInfrastructure2026,
    ...innovativeMicroSaas2026;
  ],
  // Categories for filtering;
  const categories = [;
    { id: 'all', name: 'All Services', icon: Globe, count: all_services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: nextGenAIServices2026.length },
    { id: 'it', name: 'IT Infrastructure', icon: Shield, count: revolutionaryITInfrastructure2026.length },
    { id: 'saas', name: 'Micro SaaS', icon: Zap, count: innovativeMicroSaas2026.length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: all_services.filter (string => s.category.includes ('Quantum')).length },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Layers, count: all_services.filter (string => s.category.includes ('Blockchain')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: Sparkles, count: all_services.filter (string => s.category.includes ('Emerging')).length }
  ],
  // Filter and sort services;
  const filtered_services = all_services;
    .filter (service => {
      const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.category.toLowerCase ().includes (search_term.toLowerCase ()),
      const matches_category = selected_category === 'all' ||;
                            service.category.toLowerCase ().includes (selected_category),
      return matches_search && matches_category;
    });
    .sort ((a, b) => {
      switch (sort_by) {
        case 'price - low':;
          return parse_float (a.price.replace ('$', '').replace (, '')) - parse_float (b.price.replace ('$', '').replace (, '')),
        case 'price - high':;
          return parse_float (b.price.replace ('$', '').replace (, '')) - parse_float (a.price.replace ('$', '').replace (, '')),
        case 'rating':;
          return b.rating - a.rating,
        case 'customers':;
          return b.customers - a.customers,
        default: return a.popular ? -1 : 1;
      }
    }),
  const container_variants = {
    hidden: { opacity: 0 },
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    visible: {
      opacity: 1
      transition: {

        stagger_children: 0.1;
      }
    }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {

      y: 0
      opacity: 1
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  const item_variants = {
    hidden: { coordinate_y: 20, opacity: 0 },
    visible: {
      coordinate_y: 0,
      opacity: 1,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      transition: {
        duration: 0.5;
      }
    }
<<<<<<< HEAD

    >
      <Head>
        <title>Comprehensive 2026 Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of cutting-edge AI, IT infrastructure, and micro SaaS services for 2026. Transform your business with innovative technology solutions." />
        <meta name="keywords" content="AI services, IT infrastructure, micro SaaS, quantum computing, blockchain, 2026 technology, Zion Tech Group" />
        <meta property="og:title" content="Comprehensive 2026 Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive collection of cutting-edge AI, IT infrastructure, and micro SaaS services for 2026." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-2026-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2026-services-showcase" />
      </Head>
      <UltraAdvancedNavigation />


        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}



      <div className="min-h-screen relative z-10">
  },
  return (
    <UltraAdvancedFuturisticBackground;
      intensity="extreme";
      color_scheme="quantum - fusion";
      particle_count={500}
      animation_speed={2.5}
    >;
      <Head>;
        <title > Comprehensive 2026 Services Showcase | Zion Tech Group</title>;
        <meta name="description" content="Discover our comprehensive collection of cutting - edge AI, IT infrastructure, and micro SaaS services for 2026. Transform your business with innovative technology solutions." />;
        <meta name="keywords" content="AI services, IT infrastructure, micro SaaS, quantum computing, blockchain, 2026 technology, Zion Tech Group" />;
        <meta property="og:title" content="Comprehensive 2026 Services Showcase | Zion Tech Group" />;
        <meta property="og:description" content="Discover our comprehensive collection of cutting - edge AI, IT infrastructure, and micro SaaS services for 2026." />;
        <meta property="og:url" content="https://ziontechgroup.com / comprehensive - 2026 - services - showcase" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup.com / comprehensive - 2026 - services - showcase" />;
      </Head>;
      <UltraAdvancedNavigation />;
      <div className="min - h-screen relative z - 10">;
        {/* Hero Section */}
        <section className="relative py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                  <div className="text-gray-300">Total Services</div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-gray-300">Categories</div>
                </div>
                <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400 mb-2">4.8+</div>
                  <div className="text-gray-300">Avg Rating</div>
                </div>
                <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-400 mb-2">1000+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
              </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-cyan-400" />
                  Ready to Transform Your Business?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6">;
                Comprehensive 2026;
                <br />;
                <span className="text - 6xl md:text - 8xl">Services Showcase</span>;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto leading - relaxed">;
                Discover our revolutionary collection of AI, IT infrastructure, and micro SaaS services;
                designed to transform your business in 2026 and beyond.;
              </p>;
              {/* Service Statistics */}
              <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 12">;
                <div className="bg - gradient - to - br from - cyan - 900 / 50 to - blue - 900 / 50 backdrop - blur - xl rounded - 2xl p - 6 border border - cyan - 500 / 30">;
                  <div className="text - 3xl font - bold text - cyan - 400 mb - 2">{all_services.length}+</div>;
                  <div className="text - gray - 300">Total Services</div>;
                </div>;
                <div className="bg - gradient - to - br from - purple - 900 / 50 to - pink - 900 / 50 backdrop - blur - xl rounded - 2xl p - 6 border border - purple - 500 / 30">;
                  <div className="text - 3xl font - bold text - purple - 400 mb - 2">15+</div>;
                  <div className="text - gray - 300">Categories</div>;
                </div>;
                <div className="bg - gradient - to - br from - green - 900 / 50 to - emerald - 900 / 50 backdrop - blur - xl rounded - 2xl p - 6 border border - green - 500 / 30">;
                  <div className="text - 3xl font - bold text - green - 400 mb - 2">4.8+</div>;
                  <div className="text - gray - 300">Avg Rating</div>;
                </div>;
                <div className="bg - gradient - to - br from - orange - 900 / 50 to - red - 900 / 50 backdrop - blur - xl rounded - 2xl p - 6 border border - orange - 500 / 30">;
                  <div className="text - 3xl font - bold text - orange - 400 mb - 2">1000+</div>;
                  <div className="text - gray - 300">Happy Customers</div>;
                </div>;
              </div>;
              {/* Contact Information */}
              <div className="bg - gradient - to - r from - gray - 900 / 80 to - gray - 800 / 80 backdrop - blur - xl rounded - 3xl p - 8 border border - gray - 600 / 30 max - w-4xl mx - auto">;
                <h3 className="text - 2xl font - bold text - white mb - 6 flex items - center justify - center gap - 3">;
                  <Rocket className="w - 8 h - 8 text - cyan - 400" />;
                  Ready to Transform Your Business?;
                </h3>;
                <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
                  <div className="flex items - center gap - 3 text - gray - 300">;
                    <Phone className="w - 5 h - 5 text - cyan - 400" />;
                    <span>{contact_info.mobile}</span>;
                  </div>;
                  <div className="flex items - center gap - 3 text - gray - 300">;
                    <Mail className="w - 5 h - 5 text - purple - 400" />;
                    <span>{contact_info.email}</span>;
                  </div>;
                  <div className="flex items - center gap - 3 text - gray - 300">;
                    <MapPin className="w - 5 h - 5 text - green - 400" />;
                    <span>{contact_info.address}</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Search and Filter Section */}
        <section className="py - 12 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <div className="bg - gradient - to - r from - gray - 900 / 80 to - gray - 800 / 80 backdrop - blur - xl rounded - 3xl p - 8 border border - gray - 600 / 30">;
<<<<<<< HEAD
              {/* Search Bar */}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              {/* Search Bar */}


        {/* Search and Filter Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30">
              {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or category..."

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="relative mb - 8">;
                <Search className="absolute left - 4 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 6 h - 6" />;
                <input;
                  type="text";
                  placeholder="Search services by name, description, or category...";
                  value={search_term}
                  on_change={(e) => setSearchTerm (e.target.value)}
                  className="w - full bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - 2xl pl - 14 pr - 6 py - 4 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                />;
              </div>;
<<<<<<< HEAD
              <div className="flex flex - col lg:flex - row gap - 6 items - center justify - between">;
                {/* Category Filter */}
                <div className="flex flex - wrap gap - 3">;
                  {categories.map ((category) => (
                    <button;
                      key={category.id}
                      on_click={() => setSelectedCategory (category.id)}
                      className={`flex items - center gap - 2 px - 4 py - 2 rounded - xl border transition - all duration - 300 ${
                        selected_category === category.id;
                          ? 'bg - cyan - 600 border - cyan - 500 text - white';
                          : 'bg - gray - 800 / 50 border - gray - 600 / 30 text - gray - 300 hover:border - cyan - 500 / 50';
                      }`}

                    >;
                      <category.icon className="w - 4 h - 4" />;
                      {category.name}
                      <span className="bg - gray - 700 / 50 px - 2 py - 1 rounded - lg text - xs">;

                        {category.count}


                      {category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <span className="bg-gray-700/50 px-2 py-1 rounded-lg text-xs">
                        {category.count  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>;
                    </button>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
                {/* Sort and View Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex items-center gap-4">
                  <select
              {/* Filters and Controls */}
              <div className="flex flex - col lg:flex - row gap - 6 items - center justify - between">;
                {/* Category Filter */}
                <div className="flex flex - wrap gap - 3">;
                  {categories.map ((category) => (
                    <button;
                      key={category.id}
                      on_click={() => setSelectedCategory (category.id)}
                      className={`flex items - center gap - 2 px - 4 py - 2 rounded - xl border transition - all duration - 300 ${
                        selected_category === category.id;
                          ? 'bg - cyan - 600 border - cyan - 500 text - white';
                          : 'bg - gray - 800 / 50 border - gray - 600 / 30 text - gray - 300 hover:border - cyan - 500 / 50';
                      }`}
                    >;
                      <category.icon className="w - 4 h - 4" />;
                      {category.name}
                      <span className="bg - gray - 700 / 50 px - 2 py - 1 rounded - lg text - xs">;
                        {category.count}
                      </span>;
                    </button>))}
                </div>;
                {/* Sort and View Controls */}
                <div className="flex items - center gap - 4">;
                  <select;
                    value={sort_by}
                    on_change={(e) => setSortBy (e.target.value)}
                    className="bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - xl px - 4 py - 2 text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500";
                  >;
                    <option value="popularity">Most Popular</option>;
                    <option value="price - low">Price: Low to High</option>;
                    <option value="price - high">Price: High to Low</option>;
                    <option value="rating">Highest Rated</option>;
                    <option value="customers">Most Customers</option>;
                  </select>;
                  <div className="flex bg - gray - 800 / 50 rounded - xl p - 1 border border - gray - 600 / 30">;
                    <button;
                      on_click={() => setViewMode ('grid')}
                      className={`p - 2 rounded - lg transition - all duration - 300 ${
                        view_mode === 'grid' ? 'bg - cyan - 600 text - white' : 'text - gray - 400 hover:text - white';
                      }`}
                    >;
                      <svg className="w - 5 h - 5" fill="current_color" view_box="0 0 20 20">;
                        <path d="M5 3a2 2 0 00 - 2 2v2a2 2 0 002 2h2a2 2 0 002 - 2V5a2 2 0 00 - 2-2H5zM5 11a2 2 0 00 - 2 2v2a2 2 0 002 2h2a2 2 0 002 - 2v - 2a2 2 0 00 - 2-2H5zM11 5a2 2 0 012 - 2h2a2 2 0 012 2v2a2 2 0 01 - 2 2h - 2a2 2 0 01 - 2-2V5zM11 13a2 2 0 012 - 2h2a2 2 0 012 2v2a2 2 0 01 - 2 2h - 2a2 2 0 01 - 2-2v - 2z" />;
                      </svg>;
                    </button>;
                    <button;
                      on_click={() => setViewMode ('list')}
                      className={`p - 2 rounded - lg transition - all duration - 300 ${
                        view_mode === 'list' ? 'bg - cyan - 600 text - white' : 'text - gray - 400 hover:text - white';
                      }`}
                    >;
                      <svg className="w - 5 h - 5" fill="current_color" view_box="0 0 20 20">;
                        <path fill_rule="evenodd" d="M3 4a1 1 0 011 - 1h12a1 1 0 110 2H4a1 1 0 01 - 1-1zm0 4a1 1 0 011 - 1h12a1 1 0 110 2H4a1 1 0 01 - 1-1zm0 4a1 1 0 011 - 1h12a1 1 0 110 2H4a1 1 0 01 - 1-1z" clip_rule="evenodd" />;
                      </svg>;
                    </button>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Services Grid */}
        <section className="py - 12 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              variants={container_variants}
              initial="hidden";
              animate="visible";
              className={view_mode === 'grid' ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8' : 'space - y-6'}
            >;
              <AnimatePresence>;
                {filtered_services.map ((service) => (
                  <motion.div;
                    key={service.id}
                    variants={item_variants}
                    layout;
                    className={`bg - gradient - to - br from - gray - 900 / 80 to - gray - 800 / 80 backdrop - blur - xl rounded - 3xl border border - gray - 600 / 30 overflow - hidden transition - all duration - 500 hover:scale - 105 hover:border - cyan - 500 / 50 group ${
                      view_mode === 'list' ? 'flex flex - col lg:flex - row' : '';
                    }`}
                  >;
                    {/* Service Header */}
                    <div className={`p - 6 ${view_mode === 'list' ? 'lg:w - 1/3' : ''}`}>;
                      <div className="flex items - start justify - between mb - 4">;
                        <div className="text - 4xl">{service.icon}</div>;
                        {service.popular && (
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {service.tagline}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.price}
                          <span className="text-gray-400 text-sm font-normal">{service.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-white text-sm">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {service.customers.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
          return b.customers - a.customers,
        default: return a.popular ? -1 : 1
      }
    }),

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

  return (
    <UltraAdvancedFuturisticBackground 
      intensity=&quot;extreme&quot; 
      colorScheme=&quot;quantum-fusion&quot;
      transition: {
        duration: 0.5
      }
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
export default function Comprehensive2026ServicesShowcase(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const contactInfo = {;
    mobile: '+1 302 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 1008 Middletown DE 19709';
    website: 'https://ziontechgroup.com';
  };
  // Combine all services;
  const allServices = [;
    ...nextGenAIServices2026;
    ...revolutionaryITInfrastructure2026;
    ...innovativeMicroSaas2026;
  ];
  // Categories for filtering;
  const categories = [;
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },;
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: nextGenAIServices2026.length },;
    { id: 'it', name: 'IT Infrastructure', icon: Shield, count: revolutionaryITInfrastructure2026.length },;
    { id: 'saas', name: 'Micro SaaS', icon: Zap, count: innovativeMicroSaas2026.length },;
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },;
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Layers, count: allServices.filter(s => s.category.includes('Blockchain')).length },;
    { id: 'emerging', name: 'Emerging Tech', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Filter and sort services;
  const filteredServices = allServices;
    .filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' ||;
                             service.category.toLowerCase().includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'price-low':;
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),;
        case 'price-high':;
          return parseFloat(b.price.replace('$', '').replace(, '')) - parseFloat(a.price.replace('$', '').replace(, '')),;
        case 'rating':;
          return b.rating - a.rating,;
        case 'customers':;
          return b.customers - a.customers,;
        default: return a.popular ? -1 : 1;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    }),;
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1;
      transition: {;
        staggerChildren: 0.1;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0.5;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  },
  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={500}
      animationSpeed={2.5}
    <UltraAdvancedFuturisticBackground
      intensity="extreme"
      colorScheme="quantum-fusion"
      particleCount={500}
      animationSpeed={2.5}
      particleCount={500  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      animationSpeed={2.5  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

  },
  return (


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    >
      <Head>
        <title>Comprehensive 2026 Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of cutting-edge AI, IT infrastructure, and micro SaaS services for 2026. Transform your business with innovative technology solutions." />
        <meta name="keywords" content="AI services, IT infrastructure, micro SaaS, quantum computing, blockchain, 2026 technology, Zion Tech Group" />
        <meta property="og:title" content="Comprehensive 2026 Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive collection of cutting-edge AI, IT infrastructure, and micro SaaS services for 2026." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-2026-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2026-services-showcase" />
      </Head>
      <UltraAdvancedNavigation />
      <div className="min-h-screen relative z-10">
        {/* Hero Section */}
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Comprehensive 2026
                <br />
                <span className="text-6xl md:text-8xl">Services Showcase</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our revolutionary collection of AI, IT infrastructure, and micro SaaS services 
                designed to transform your business in 2026 and beyond.
              </p>
              {/* Service Statistics */}
                Discover our revolutionary collection of AI, IT infrastructure, and micro SaaS services
                designed to transform your business in 2026 and beyond.
              </p>
              {/* Service Statistics */}
              {/* Service Statistics */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
=======



      <div className="min-h-screen relative z-10">
=======
  },
  return (
    <UltraAdvancedFuturisticBackground;
      intensity="extreme";
      color_scheme="quantum - fusion";
      particle_count={500}
      animation_speed={2.5}
    >;
      <Head>;
        <title > Comprehensive 2026 Services Showcase | Zion Tech Group</title>;
        <meta name="description" content="Discover our comprehensive collection of cutting - edge AI, IT infrastructure, and micro SaaS services for 2026. Transform your business with innovative technology solutions." />;
        <meta name="keywords" content="AI services, IT infrastructure, micro SaaS, quantum computing, blockchain, 2026 technology, Zion Tech Group" />;
        <meta property="og:title" content="Comprehensive 2026 Services Showcase | Zion Tech Group" />;
        <meta property="og:description" content="Discover our comprehensive collection of cutting - edge AI, IT infrastructure, and micro SaaS services for 2026." />;
        <meta property="og:url" content="https://ziontechgroup.com / comprehensive - 2026 - services - showcase" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup.com / comprehensive - 2026 - services - showcase" />;
      </Head>;
      <UltraAdvancedNavigation />;
      <div className="min - h-screen relative z - 10">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        {/* Hero Section */}
        <section className="relative py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                  <div className="text-gray-300">Total Services</div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-gray-300">Categories</div>
                </div>
                <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400 mb-2">4.8+</div>
                  <div className="text-gray-300">Avg Rating</div>
                </div>
                <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-400 mb-2">1000+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
              </div>
              {/* Contact Information */}
              {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-cyan-400" />
                  Ready to Transform Your Business?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Search and Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30">
              {/* Search Bar */}
        {/* Search and Filter Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30">
              {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600/30 rounded-2xl pl-14 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              {/* Filters and Controls */}
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Category Filter */}
<<<<<<< HEAD
=======

              {/* Filters and Controls */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSearchTerm(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="w-full bg-gray-800/50 border border-gray-600/30 rounded-2xl pl-14 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              {/* Filters and Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      onClick={() => setSelectedCategory(category.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${;
                        selectedCategory === category.id;
                          ? 'bg-cyan-600 border-cyan-500 text-white';
                          : 'bg-gray-800/50 border-gray-600/30 text-gray-300 hover:border-cyan-500/50';
                      }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                      <span className="bg-gray-700/50 px-2 py-1 rounded-lg text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
                {/* Sort and View Controls */}
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
=======
              <div className="flex flex - col lg:flex - row gap - 6 items - center justify - between">;
                {/* Category Filter */}
                <div className="flex flex - wrap gap - 3">;
                  {categories.map ((category) => (
                    <button;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                      key={category.id}
                      on_click={() => setSelectedCategory (category.id)}
                      className={`flex items - center gap - 2 px - 4 py - 2 rounded - xl border transition - all duration - 300 ${
                        selected_category === category.id;
                          ? 'bg - cyan - 600 border - cyan - 500 text - white';
                          : 'bg - gray - 800 / 50 border - gray - 600 / 30 text - gray - 300 hover:border - cyan - 500 / 50';
                      }`}

                    >;
                      <category.icon className="w - 4 h - 4" />;
                      {category.name}
                      <span className="bg - gray - 700 / 50 px - 2 py - 1 rounded - lg text - xs">;

                        {category.count}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <span className="bg-gray-700/50 px-2 py-1 rounded-lg text-xs">
                        {category.count  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>;
                    </button>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
                {/* Sort and View Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSortBy(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="bg-gray-800/50 border border-gray-600/30 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="customers">Most Customers</option>
                  </select>
                  <div className="flex bg-gray-800/50 rounded-xl p-1 border border-gray-600/30">
                    <button
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className={`p-2 rounded-lg transition-all duration-300 ${;
                        viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white';
                      }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className={`p-2 rounded-lg transition-all duration-300 ${;
                        viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white';
                      }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'

                      </span>;
                    </button>))}
                </div>;
                {/* Sort and View Controls */}
                <div className="flex items - center gap - 4">;
                  <select;
                    value={sort_by}
                    on_change={(e) => setSortBy (e.target.value)}
                    className="bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - xl px - 4 py - 2 text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500";
                  >;
                    <option value="popularity">Most Popular</option>;
                    <option value="price - low">Price: Low to High</option>;
                    <option value="price - high">Price: High to Low</option>;
                    <option value="rating">Highest Rated</option>;
                    <option value="customers">Most Customers</option>;
                  </select>;
                  <div className="flex bg - gray - 800 / 50 rounded - xl p - 1 border border - gray - 600 / 30">;
                    <button;
                      on_click={() => setViewMode ('grid')}
                      className={`p - 2 rounded - lg transition - all duration - 300 ${
                        view_mode === 'grid' ? 'bg - cyan - 600 text - white' : 'text - gray - 400 hover:text - white';

                      }`}
                    >;
                      <svg className="w - 5 h - 5" fill="current_color" view_box="0 0 20 20">;
                        <path d="M5 3a2 2 0 00 - 2 2v2a2 2 0 002 2h2a2 2 0 002 - 2V5a2 2 0 00 - 2-2H5zM5 11a2 2 0 00 - 2 2v2a2 2 0 002 2h2a2 2 0 002 - 2v - 2a2 2 0 00 - 2-2H5zM11 5a2 2 0 012 - 2h2a2 2 0 012 2v2a2 2 0 01 - 2 2h - 2a2 2 0 01 - 2-2V5zM11 13a2 2 0 012 - 2h2a2 2 0 012 2v2a2 2 0 01 - 2 2h - 2a2 2 0 01 - 2-2v - 2z" />;
                      </svg>;
                    </button>;
                    <button;
                      on_click={() => setViewMode ('list')}
                      className={`p - 2 rounded - lg transition - all duration - 300 ${
                        view_mode === 'list' ? 'bg - cyan - 600 text - white' : 'text - gray - 400 hover:text - white';
                      }`}

                    >;
                      <svg className="w - 5 h - 5" fill="current_color" view_box="0 0 20 20">;
                        <path fill_rule="evenodd" d="M3 4a1 1 0 011 - 1h12a1 1 0 110 2H4a1 1 0 01 - 1-1zm0 4a1 1 0 011 - 1h12a1 1 0 110 2H4a1 1 0 01 - 1-1zm0 4a1 1 0 011 - 1h12a1 1 0 110 2H4a1 1 0 01 - 1-1z" clip_rule="evenodd" />;
                      </svg>;
                    </button>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Services Grid */}

        <section className="py - 12 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              variants={container_variants}
              initial="hidden";
              animate="visible";
              className={view_mode === 'grid' ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8' : 'space - y-6'}

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    layout
                    className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-600/30 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 group ${
                      viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                    }`}
                  >
                    {/* Service Header */}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              <AnimatePresence>;
                {filteredServices.map((service) => (;
                  <motion.div;
<<<<<<< HEAD
                    key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    variants={itemVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    key={service.id}
                    variants={item_variants}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    layout;
                    className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-600/30 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 group ${;
                      viewMode === 'list' ? 'flex flex-col lg:flex-row' : '';
                    }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            >;
              <AnimatePresence>;
                {filtered_services.map ((service) => (
                  <motion.div;
                    key={service.id}
                    variants={item_variants}
                    layout;
                    className={`bg - gradient - to - br from - gray - 900 / 80 to - gray - 800 / 80 backdrop - blur - xl rounded - 3xl border border - gray - 600 / 30 overflow - hidden transition - all duration - 500 hover:scale - 105 hover:border - cyan - 500 / 50 group ${
                      view_mode === 'list' ? 'flex flex - col lg:flex - row' : '';
                    }`}
                  >;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        {service.popular && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className={`p - 6 ${view_mode === 'list' ? 'lg:w - 1/3' : ''}`}>;
                      <div className="flex items - start justify - between mb - 4">;
                        <div className="text - 4xl">{service.icon}</div>;
                        {service.popular && (
<<<<<<< HEAD
<<<<<<< HEAD
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Popular
                          </div>
                        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>
                      <div className=&quot;flex items-center gap-4 text-sm text-gray-400 mb-4&quot;>
                        <div className=&quot;flex items-center gap-1&quot;>
                          <Users className=&quot;w-4 h-4&quot; />
                          {service.customers.toLocaleString()}
                        </div>
                        <div className=&quot;flex items-center gap-1&quot;>
                          <Clock className=&quot;w-4 h-4&quot; />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {service.tagline}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.price}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {service.tagline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.price  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <span className="text-gray-400 text-sm font-normal">{service.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-white text-sm">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
<<<<<<< HEAD
<<<<<<< HEAD
                          <div className="bg - gradient - to - r from - yellow - 500 to - orange - 500 text - white text - xs px - 3 py - 1 rounded - full font - semibold flex items - center gap - 1">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {service.customers.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.setupTime}
                        </div>
                      </div>
                    </div>
<<<<<<< HEAD
=======

                          <div className="bg - gradient - to - r from - yellow - 500 to - orange - 500 text - white text - xs px - 3 py - 1 rounded - full font - semibold flex items - center gap - 1">;
                            <Star className="w - 3 h - 3" />;
                            Popular;
                          </div>)}
                      </div>;
                      <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;
                        {service.name}
                      </h3>;
                      <p className="text - gray - 300 text - sm mb - 4 leading - relaxed">;
                        {service.tagline}
                      </p>;
                      <div className="flex items - center justify - between mb - 4">;
                        <div className="text - 2xl font - bold text - cyan - 400">;
                          {service.price}
                          <span className="text - gray - 400 text - sm font - normal">{service.period}</span>;
                        </div>;
                        <div className="flex items - center gap - 1 text - yellow - 400">;
                          <Star className="w - 4 h - 4 fill - current" />;
                          <span className="text - white text - sm">{service.rating}</span>;
                          <span className="text - gray - 400 text - sm">({service.reviews})</span>;
                        </div>;
                      </div>;
                      <div className="flex items - center gap - 4 text - sm text - gray - 400 mb - 4">;
                        <div className="flex items - center gap - 1">;
                          <Users className="w - 4 h - 4" />;
                          {service.customers.toLocaleString ()}
                        </div>;
                        <div className="flex items - center gap - 1">;
                          <Clock className="w - 4 h - 4" />;
                          {service.setup_time}
                        </div>;
                      </div>;
                    </div>;

                    {/* Service Details */}


=======
                    {/* Service Details */}
                    <div className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      {/* Key Features */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {service.customers.toLocaleString()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.setupTime  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      </div>;
                    </div>;
                    {/* Service Details */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </p>;
                      {/* Key Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div className={`px - 6 pb - 6 ${view_mode === 'list' ? 'lg:w - 2/3' : ''}`}>;
                      <p className="text - gray - 300 mb - 4 leading - relaxed">;
                        {service.description}

                              {feature}
                            </div>))}

=======
                              {feature}
                            </div>
                          ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </div>;
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
                          {service.features.length > 3 && (


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                          {service.features.length > 3 && (
                            <div className="text-sm text-cyan-400">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Market Info */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      </div>;
                      {/* Market Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <div className="text-gray-400 mb-1">Market Size</div>
                          <div className="text-white font-semibold">{service.marketSize}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 mb-1">Growth Rate</div>
                          <div className="text-white font-semibold">{service.growthRate}</div>
                        </div>
                      </div>
<<<<<<< HEAD


=======
                      {/* ROI */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {/* ROI */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-4 mb-6 border border-green-500/20">
                        <div className="text-sm text-gray-400 mb-1">Expected ROI</div>
                        <div className="text-green-400 font-semibold">{service.roi}</div>
                      </div>
<<<<<<< HEAD

<<<<<<< HEAD
                    {/* Service Details */}
                    <div className={`px - 6 pb - 6 ${view_mode === 'list' ? 'lg:w - 2/3' : ''}`}>;
                      <p className="text - gray - 300 mb - 4 leading - relaxed">;
                        {service.description}
                      </p>;
                      {/* Key Features */}
                      <div className="mb - 4">;
                        <h4 className="text - sm font - semibold text - gray - 400 mb - 2 uppercase tracking - wider">;
                          Key Features;
                        </h4>;
                        <div className="grid grid - cols - 1 gap - 2">;
                          {service.features.slice (0, 3).map ((feature, index) => (
                            <div key={index} className="flex items - center gap - 2 text - sm text - gray - 300">;
                              <CheckCircle className="w - 4 h - 4 text - green - 400 flex - shrink - 0" />;
                              {feature}
                            </div>))}
                          {service.features.length > 3 && (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            <div className="text - sm text - cyan - 400">;
                              +{service.features.length - 3} more features;
                            </div>)}
                        </div>;
                      </div>;
                      {/* Market Info */}
                      <div className="grid grid - cols - 2 gap - 4 mb - 6 text - sm">;
                        <div>;
                          <div className="text - gray - 400 mb - 1">Market Size</div>;
                          <div className="text - white font - semibold">{service.market_size}</div>;
                        </div>;
                        <div>;
                          <div className="text - gray - 400 mb - 1">Growth Rate</div>;
                          <div className="text - white font - semibold">{service.growth_rate}</div>;
                        </div>;
                      </div>;
                      {/* ROI */}
                      <div className="bg - gradient - to - r from - green - 900 / 30 to - emerald - 900 / 30 rounded - xl p - 4 mb - 6 border border - green - 500 / 20">;
                        <div className="text - sm text - gray - 400 mb - 1">Expected ROI</div>;
                        <div className="text - green - 400 font - semibold">{service.roi}</div>;
                      </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {/* Action Buttons */}
                      <div className="flex flex - col sm:flex - row gap - 3">;
                        <Link;
                          href={service.link}
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                          className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold py-3 px-6 rounded-xl border border-gray-600/30 transition-all duration-300 flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4" />
                          Contact
                        </button>
                      </div>
                    </div>
                  </motion.div>
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
                ))}
              </AnimatePresence>
            </motion.div>
            {/* No Results */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </AnimatePresence>;
            </motion.div>;
            {/* No Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('')

                    setSelectedCategory('all')
<<<<<<< HEAD


=======
                  }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Clear Filters
                </button>
              </div>
<<<<<<< HEAD


=======
            )}
          </div>
        </section>
        {/* CTA Section */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          className="flex - 1 bg - gradient - to - r from - cyan - 600 to - blue - 600 hover:from - cyan - 700 hover:to - blue - 700 text - white font - semibold py - 3 px - 6 rounded - xl transition - all duration - 300 flex items - center justify - center gap - 2 group - hover:scale - 105";
                        >;
                          Learn More;
                          <ArrowRight className="w - 4 h - 4 group - hover:translate - x-1 transition - transform" />;
                        </Link>;
                        <button className="bg - gray - 800 / 50 hover:bg - gray - 700 / 50 text - white font - semibold py - 3 px - 6 rounded - xl border border - gray - 600 / 30 transition - all duration - 300 flex items - center justify - center gap - 2">;
                          <Phone className="w - 4 h - 4" />;
                          Contact;
                        </button>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </AnimatePresence>;
            </motion.div>;
            {/* No Results */}
            {filtered_services.length === 0 && (
              <div className="text - center py - 20">;
                <div className="text - 6xl mb - 4">🔍</div>;
                <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
                <p className="text - gray - 400 mb - 6">Try adjusting your search terms or filters</p>;
                <button;
                  on_click={() => {
                    setSearchTerm (''),
                    setSelectedCategory ('all');
                  }}
                  className="bg - cyan - 600 hover:bg - cyan - 700 text - white font - semibold py - 3 px - 6 rounded - xl transition - colors";
                >;
                  Clear Filters;
                </button>;
              </div>)}
          </div>;
        </section>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* CTA Section */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

<<<<<<< HEAD
<<<<<<< HEAD
              <div className="mt-8 text-gray-400">
                <p>📍 {contactInfo.address}</p>
                <p>🌐 <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">{contactInfo.website}</a></p>
                    {/* Service Details */}
                    <div className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      {/* Key Features */}
                          {service.customers.toLocaleString()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.setupTime  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      </div>;
                    </div>;
                    {/* Service Details */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </p>;
                      {/* Key Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                              {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </div>;
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          {service.features.length > 3 && (
                            <div className="text-sm text-cyan-400">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Market Info */}
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      </div>;
                      {/* Market Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <div className="text-gray-400 mb-1">Market Size</div>
                          <div className="text-white font-semibold">{service.marketSize}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 mb-1">Growth Rate</div>
                          <div className="text-white font-semibold">{service.growthRate}</div>
                        </div>
                      </div>
                      {/* ROI */}
                      {/* ROI */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-4 mb-6 border border-green-500/20">
                        <div className="text-sm text-gray-400 mb-1">Expected ROI</div>
                        <div className="text-green-400 font-semibold">{service.roi}</div>
                      </div>
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={service.link}
                      {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold py-3 px-6 rounded-xl border border-gray-600/30 transition-all duration-300 flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4" />
                          Contact
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {/* No Results */}
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </AnimatePresence>;
            </motion.div>;
            {/* No Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('')

                    setSelectedCategory('all')
                  }}
                  }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
        {/* CTA Section */}
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our team of experts is ready to help you implement the perfect solution
                Our team of experts is ready to help you implement the perfect solution 
                Our team of experts is ready to help you implement the perfect solution
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                for your business needs. Get started today with a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: {contactInfo.mobile}
                </Link>
                <Link
                  href={`mailto:${contactInfo.email}`}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  href={`tel:${contactInfo.mobile}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: {contactInfo.mobile  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </Link>;
                <Link;
                  href={`mailto:${contactInfo.email}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </Link>
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
                <p>🌐 <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">{contactInfo.website}</Link></p>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div className="mt-8 text-gray-400">
                <p>📍 {contactInfo.address}</p>
                <p>🌐 <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">{contactInfo.website}</a></p>
                <p>🌐 <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">{contactInfo.website}</Link></p>
<<<<<<< HEAD
=======

              <div className="mt-8 text-gray-400">
                <p>📍 {contactInfo.address}</p>


                <p>🌐 <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">{contactInfo.website}</Link></p>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
<<<<<<< HEAD
<<<<<<< HEAD
}

  );
};
  )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
=======

=======
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8 leading - relaxed">;
                Our team of experts is ready to help you implement the perfect solution;
                for your business needs. Get started today with a free consultation.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link;
                  href={`tel:${contact_info.mobile}`}
                  className="bg - gradient - to - r from - cyan - 600 to - blue - 600 hover:from - cyan - 700 hover:to - blue - 700 text - white font - semibold py - 4 px - 8 rounded - xl transition - all duration - 300 flex items - center justify - center gap - 3 text - lg";
                >;
                  <Phone className="w - 5 h - 5" />;
                  Call Now: {contact_info.mobile}
                </Link>;
                <Link;
                  href={`mailto:${contact_info.email}`}
                  className="bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold py - 4 px - 8 rounded - xl transition - all duration - 300 flex items - center justify - center gap - 3 text - lg";
                >;
                  <Mail className="w - 5 h - 5" />;
                  Email Us;
                </Link>;
              </div>;
              <div className="mt - 8 text - gray - 400">;
                <p>📍 {contact_info.address}</p>;
                <p>🌐 <a href={contact_info.website} className="text - cyan - 400 hover:text - cyan - 300 transition - colors">{contact_info.website}</a></p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
