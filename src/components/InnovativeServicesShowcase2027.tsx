import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  BarChart3, 
  FileImage, 
  TrendingUp, 
  MessageCircle, 
  Video, 
  FileText, 
  Heart, 
  PanelLeft,
  ArrowRight,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Globe2,
  ShieldCheck,
  Zap as Lightning,
  Search
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2027 } from '@/data/innovativeServices2027';

interface ServiceCardProps {
  service: any;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI Services': Brain,
      'Quantum Computing': Rocket,
      'Blockchain': Lock,
      'IoT & Edge Computing': Cpu,
      'Cybersecurity': Shield,
      'Digital Twin': Globe,
      'Sustainability': Heart,
      '5G & Connectivity': Network
    };
    return iconMap[category] || Code;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI Services': 'from-cyan-500 to-blue-600',
      'Quantum Computing': 'from-purple-500 to-pink-600',
      'Blockchain': 'from-blue-500 to-indigo-600',
      'IoT & Edge Computing': 'from-green-500 to-emerald-600',
      'Cybersecurity': 'from-red-500 to-orange-600',
      'Digital Twin': 'from-violet-500 to-purple-600',
      'Sustainability': 'from-emerald-500 to-teal-600',
      '5G & Connectivity': 'from-sky-500 to-blue-600'
    };
    return colorMap[category] || 'from-gray-500 to-slate-600';
  };

  const IconComponent = getCategoryIcon(service.category);
  const categoryColor = getCategoryColor(service.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light p-6 rounded-3xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 right-4 w-2 h-2 bg-zion-cyan rounded-full animate-pulse" />
          <div className="absolute bottom-6 left-6 w-1 h-1 bg-zion-purple rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-zion-blue rounded-full animate-pulse delay-2000" />
        </div>

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${categoryColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-zion-slate-light">{service.rating}</span>
              </div>
              <div className="px-2 py-1 bg-zion-cyan/20 rounded-full">
                <span className="text-xs text-zion-cyan font-medium">AI Score: {service.aiScore}</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-zion-slate-light text-sm leading-relaxed mb-4 line-clamp-3">
            {service.description}
          </p>

          {/* Features preview */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {service.features.slice(0, 3).map((feature: string, idx: number) => (
                <span key={idx} className="px-2 py-1 bg-zion-slate/20 rounded-full text-xs text-zion-slate-light">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing and CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-zion-cyan" />
              <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
              <span className="text-zion-slate-light text-sm">/month</span>
            </div>
            
            <Link 
              to={`/services/${service.id}`}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
            >
              Explore
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Hover overlay with more details */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark/95 to-zion-slate/95 backdrop-blur-sm rounded-3xl p-6 flex flex-col justify-center"
              >
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-3">Key Benefits</h4>
                  <div className="space-y-2 mb-4">
                    {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-zion-slate-light mb-4">
                    <div className="flex items-center space-x-1">
                      <Globe2 className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export function InnovativeServicesShowcase2027() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(INNOVATIVE_SERVICES_2027.map(service => service.category)))];

  const filteredServices = INNOVATIVE_SERVICES_2027.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-gradient-to-b from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-zion-blue/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Innovative Services 2027
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover the future of technology with our cutting-edge micro SAAS solutions. 
            From AI-powered platforms to quantum computing, we're revolutionizing how businesses operate.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-zion-slate-dark/50 border border-zion-slate-light/30 rounded-2xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white border border-zion-slate-light/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 backdrop-blur-md p-8 rounded-3xl border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our innovative technology solutions. 
              Get started today and experience the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Get Started Today
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-zion-slate-dark/50 text-white font-semibold rounded-xl border border-zion-slate-light/30 hover:bg-zion-slate-dark hover:border-zion-cyan/50 transition-all duration-300"
              >
                <ArrowRight className="mr-2 w-5 h-5" />
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                {INNOVATIVE_SERVICES_2027.length}+
              </div>
              <div className="text-zion-slate-light">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-blue mb-2">
                {Math.round(INNOVATIVE_SERVICES_2027.reduce((acc, service) => acc + service.aiScore, 0) / INNOVATIVE_SERVICES_2027.length)}
              </div>
              <div className="text-zion-slate-light">Average AI Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">
                {INNOVATIVE_SERVICES_2027.filter(service => service.featured).length}
              </div>
              <div className="text-zion-slate-light">Featured Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                {INNOVATIVE_SERVICES_2027.reduce((acc, service) => acc + service.reviewCount, 0)}+
              </div>
              <div className="text-zion-slate-light">Customer Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}