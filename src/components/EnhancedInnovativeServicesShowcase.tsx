import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Rocket, 
  Cpu, 
  Database,
  TrendingUp,
  Users,
  Lock,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Target,
  Search
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025.ts';

interface ServiceCardProps {
  service: any;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isExpanded, onToggle }) => {
  const categoryIcons: { [key: string]: React.ReactNode } = {
    'AI & Business Automation': <Brain className="w-6 h-6" />,
    'Quantum Computing & AI': <Cpu className="w-6 h-6" />,
    'Blockchain & DeFi': <Database className="w-6 h-6" />,
    'IoT & Edge Computing': <Globe className="w-6 h-6" />,
    'AI & Healthcare': <Users className="w-6 h-6" />,
    'Cybersecurity': <Shield className="w-6 h-6" />,
    'AI & Legal Technology': <Lock className="w-6 h-6" />,
    'Space Technology': <Rocket className="w-6 h-6" />,
    'Green Technology & Sustainability': <Sparkles className="w-6 h-6" />,
    'AI & Financial Technology': <TrendingUp className="w-6 h-6" />,
    'Manufacturing & Industry 4.0': <Zap className="w-6 h-6" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 via-zion-slate/80 to-zion-slate-light/80 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Neon glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30">
                {categoryIcons[service.category] || <Sparkles className="w-6 h-6 text-zion-cyan" />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-zion-cyan/80 text-sm font-medium">{service.category}</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggle}
              className="p-2 rounded-lg bg-zion-cyan/10 hover:bg-zion-cyan/20 border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300"
            >
              <ArrowRight className={`w-5 h-5 text-zion-cyan transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            </motion.button>
          </div>

          {/* Description */}
          <p className="text-zion-slate-light mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Price and delivery */}
          <div className="flex items-center justify-between mb-4 p-3 rounded-lg bg-zion-slate-dark/50 border border-zion-slate/30">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-zion-green" />
              <span className="text-white font-semibold">${service.price.toLocaleString()}</span>
              <span className="text-zion-slate-light text-sm">/{service.pricingModel}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-zion-orange" />
              <span className="text-zion-slate-light text-sm">{service.estimatedDelivery}</span>
            </div>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-zion-green" />
                    <span>Key Features</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-2 text-zion-slate-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-zion-cyan" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                    <Target className="w-5 h-5 text-zion-purple" />
                    <span>Benefits</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.benefits.map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-2 text-zion-slate-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-zion-purple" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology stack */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                    <Cpu className="w-5 h-5 text-zion-orange" />
                    <span>Technology Stack</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-zion-orange/10 border border-zion-orange/30 text-zion-orange text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ROI and market info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-zion-green/10 border border-zion-green/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-zion-green" />
                      <span className="text-zion-green font-semibold text-sm">ROI</span>
                    </div>
                    <p className="text-white text-sm">{service.roi}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-zion-purple/10 border border-zion-purple/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-zion-purple" />
                      <span className="text-zion-purple font-semibold text-sm">Market Price</span>
                    </div>
                    <p className="text-white text-sm">{service.marketPrice}</p>
                  </div>
                </div>

                {/* Contact and CTA */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/30">
                  <div className="text-center">
                    <p className="text-zion-cyan text-sm mb-3">
                      Ready to transform your business with cutting-edge technology?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 flex items-center space-x-2"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="px-6 py-2 border border-zion-cyan/50 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const EnhancedInnovativeServicesShowcase: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_MICRO_SAAS_SERVICES_2025.map(s => s.category)))];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-zion-green/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-green bg-clip-text text-transparent">
              Innovative Micro SAAS
            </span>
            <br />
            <span className="text-white">Services 2025</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge technology solutions that will transform your business. 
            From AI-powered automation to quantum computing, we deliver the future of technology today.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-zion-slate-dark/50 border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light border border-zion-slate/30 hover:border-zion-cyan/30 hover:text-zion-cyan'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isExpanded={expandedService === service.id}
              onToggle={() => toggleService(service.id)}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-green/10 border border-zion-cyan/30 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can drive your success. 
              Our team of experts is ready to help you implement cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovative Services Consultation"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan/50 text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Search icon component
const Search: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default EnhancedInnovativeServicesShowcase;