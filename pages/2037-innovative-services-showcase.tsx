import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, Star, Brain, Atom, Zap, Rocket, Cpu
} from 'lucide-react';
import SEO from '../components/SEO';

// Import our new service data
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

interface ServiceData {
  id: string;
  name: string;
  description: string;
  icon: string;
  color?: string;
  popular?: boolean;
  features?: string[];
  pricing?: {
    starter: string;
  };
  price?: string;
  period?: string;
  rating?: number;
  reviews?: number;
  setupTime?: string;
  trialDays?: number;
  customers?: number;
  link: string;
}

const ServiceCard = ({ service, index }: { service: ServiceData; index: number }) => {
  // Default color scheme if service.color is not defined
  const defaultColor = 'from-cyan-500 to-blue-600';
  const serviceColor = service.color || defaultColor;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${serviceColor} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20`}></div>
      <div className={`relative bg-gradient-to-r ${serviceColor} bg-opacity-10 border border-opacity-30 rounded-2xl p-8 hover:border-opacity-50 transition-all duration-300 h-full`}>
        <div className="flex items-start justify-between mb-6">
          <div className="text-4xl">{service.icon}</div>
          {service.popular && (
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
              Popular
            </span>
          )}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>
        
        <div className="space-y-3 mb-6">
          {service.features?.slice(0, 4).map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-3xl font-bold text-white">{service.pricing?.starter || service.price || 'Contact Us'}</span>
            <span className="text-gray-400 text-sm">{service.pricing ? '/month' : (service.period || '')}</span>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating || 0) ? 'fill-current' : ''}`} />
              ))}
            </div>
            <span className="text-gray-400 text-xs">{service.rating || 0}/5 ({service.reviews || 0} reviews)</span>
          </div>
        </div>
        
        {service.setupTime && service.trialDays && service.customers && (
          <div className="space-y-3 mb-6 text-xs text-gray-400">
            <div className="flex justify-between">
              <span>Setup Time:</span>
              <span>{service.setupTime}</span>
            </div>
            <div className="flex justify-between">
              <span>Trial:</span>
              <span>{service.trialDays} days</span>
            </div>
            <div className="flex justify-between">
              <span>Customers:</span>
              <span>{service.customers.toLocaleString()}</span>
            </div>
          </div>
        )}
        
        <a 
          href={service.link} 
          className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

const ServiceShowcase = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const categories = [
    { id: 'all', name: 'All Services', icon: <Star className="w-5 h-5" />, count: innovative2037MicroSaasServices.length + innovative2037ITServices.length + innovative2037AIServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: innovative2037AIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: <Atom className="w-5 h-5" />, count: innovative2037ITServices.filter(s => s.name.toLowerCase().includes('quantum')).length },
    { id: 'autonomous', name: 'Autonomous Systems', icon: <Zap className="w-5 h-5" />, count: innovative2037ITServices.filter(s => s.name.toLowerCase().includes('autonomous')).length + innovative2037AIServices.filter(s => s.name.toLowerCase().includes('autonomous')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovative2037MicroSaasServices.length },
    { id: 'it', name: 'IT Solutions', icon: <Cpu className="w-5 h-5" />, count: innovative2037ITServices.length }
  ];

const ServiceShowcase = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const categories = [
    { id: 'all', name: 'All Services', icon: <Star className="w-5 h-5" />, count: innovative2037MicroSaasServices.length + innovative2037ITServices.length + innovative2037AIServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: innovative2037AIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: <Atom className="w-5 h-5" />, count: innovative2037ITServices.filter(s => s.name.toLowerCase().includes('quantum')).length },
    { id: 'autonomous', name: 'Autonomous Systems', icon: <Zap className="w-5 h-5" />, count: innovative2037ITServices.filter(s => s.name.toLowerCase().includes('autonomous')).length + innovative2037AIServices.filter(s => s.name.toLowerCase().includes('autonomous')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovative2037MicroSaasServices.length },
    { id: 'it', name: 'IT Solutions', icon: <Cpu className="w-5 h-5" />, count: innovative2037ITServices.length }
  ];

  const getFilteredServices = () => {
    const allServices = [...innovative2037MicroSaasServices, ...innovative2037ITServices, ...innovative2037AIServices];
    
    if (activeCategory === 'all') return allServices;
    if (activeCategory === 'ai') return innovative2037AIServices;
    if (activeCategory === 'quantum') return allServices.filter(s => s.name.toLowerCase().includes('quantum'));
    if (activeCategory === 'autonomous') return allServices.filter(s => s.name.toLowerCase().includes('autonomous'));
    if (activeCategory === 'micro-saas') return innovative2037MicroSaasServices;
    if (activeCategory === 'it') return innovative2037ITServices;
    
    return allServices;
  };

  const filteredServices = getFilteredServices();

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="2037 Innovative Services Showcase - Zion Tech Group"
        description="Discover our revolutionary 2037 innovative services including AI consciousness evolution, quantum cybersecurity, autonomous systems, and cutting-edge micro SAAS solutions."
        keywords={["AI consciousness", "quantum computing", "autonomous systems", "micro SAAS", "innovative services", "2037 technology"]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            2037 Innovative Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
          >
            Experience the future with our breakthrough AI consciousness, quantum computing, and autonomous systems that transform businesses and industries
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </a>
            <a href={`tel:${contactInfo.mobile}`} className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              Call {contactInfo.mobile}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Impact & Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge portfolio featuring {all2037Services.length} innovative services across AI governance, quantum security, edge computing, and specialized micro SAAS solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Active Customers</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">4.8/5</div>
              <div className="text-gray-300">Average Rating</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">5x</div>
              <div className="text-gray-300">Efficiency Gain</div>
            </motion.div>
          </div>
        </div>
      </section>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                      : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center">
              <div className="bg-gray-800/50 rounded-lg p-1 border border-gray-700">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'md:grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
};

export default ServiceShowcase;