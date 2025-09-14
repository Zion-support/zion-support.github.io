import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Leaf, 
  Rocket,
  Car,
  Satellite,
  Dna,
  Wind,
  Cloud,
  Network,
  DollarSign,
  Clock,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2028 } from '../data/innovativeMicroSaasServices2028';
import { EMERGING_TECH_INNOVATIVE_SERVICES_2028 } from '../data/emergingTechInnovativeServices2028';

export default function InnovativeServicesShowcase2028() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('All');

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2028,
    ...EMERGING_TECH_INNOVATIVE_SERVICES_2028
  ];

  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];
  const innovationLevels = ['All', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesInnovationLevel = selectedInnovationLevel === 'All' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesInnovationLevel;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum Computing & AI':
        return <Brain className="w-6 h-6" />;
      case 'Manufacturing & AI':
        return <Zap className="w-6 h-6" />;
      case 'Healthcare & AI':
        return <Shield className="w-6 h-6" />;
      case 'Financial Services & AI':
        return <DollarSign className="w-6 h-6" />;
      case 'Smart Cities & AI':
        return <Globe className="w-6 h-6" />;
      case 'Agriculture & AI':
        return <Leaf className="w-6 h-6" />;
      case 'Legal Services & AI':
        return <Shield className="w-6 h-6" />;
      case 'Education & AI':
        return <Brain className="w-6 h-6" />;
      case 'Real Estate & AI':
        return <Globe className="w-6 h-6" />;
      case 'Blockchain & Supply Chain':
        return <Network className="w-6 h-6" />;
      case 'Autonomous Vehicles & AI':
        return <Car className="w-6 h-6" />;
      case 'Space Technology & AI':
        return <Satellite className="w-6 h-6" />;
      case 'Biotechnology & AI':
        return <Dna className="w-6 h-6" />;
      case 'Renewable Energy & AI':
        return <Wind className="w-6 h-6" />;
      case 'Climate Technology & AI':
        return <Cloud className="w-6 h-6" />;
      case 'Quantum Internet & AI':
        return <Network className="w-6 h-6" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default:
        return 'bg-gradient-to-r from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="2028 Innovative Services Showcase - Zion Tech Group" 
        description="Discover the future of technology with our revolutionary 2028 services including AI, Quantum Computing, IoT, Blockchain, and Sustainability solutions."
        keywords="2028 services, AI services, quantum computing, IoT, blockchain, sustainability, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/2028-showcase"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              2028 Services
              <span className="block text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-2">
                Future of Technology
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Experience the next generation of technology solutions with our revolutionary 2028 services. 
              From AI-powered autonomous systems to quantum computing and sustainable technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Services
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Service Categories
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                  <category.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Revolutionary Services
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {INNOVATIVE_MICRO_SAAS_SERVICES_2028.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      {service.innovationLevel}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Price:</span>
                    <span className="text-white font-semibold">
                      {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">ROI:</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Delivery:</span>
                    <span className="text-cyan-400 font-semibold">{service.estimatedDelivery}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                  <div className="text-right">
                    <p className="text-slate-400 text-xs">Market Price</p>
                    <p className="text-white text-sm font-semibold">{service.marketPrice}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Contact our team to learn more about our 2028 services and how they can revolutionize your operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-slate-400">+1 302 464 0950</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-slate-400">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-slate-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Visit Our Website
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}