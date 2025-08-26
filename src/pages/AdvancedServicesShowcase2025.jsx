import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Clock, Users, TrendingUp, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { advancedRealServices2025 } from '../data/2025-advanced-real-services-expansion';
import { specializedITServices2025 } from '../data/2025-specialized-it-ai-services';
import SEOHead from '../components/SEOHead.jsx';
const AdvancedServicesShowcase2025 = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    // Combine all services
    const allServices = [...advancedRealServices2025, ...specializedITServices2025];
    const categories = [
        'all',
        'AI & Machine Learning',
        'Cybersecurity',
        'Healthcare Technology',
        'Blockchain & Supply Chain',
        'Financial Technology',
        'Edge Computing & IoT',
        'Marketing Technology',
        'Quantum Computing',
        'Human Resources Technology',
        'Energy & Sustainability',
        'Legal Technology',
        'Neuromorphic Computing',
        'Privacy AI',
        'AI Governance',
        'DevOps & Automation',
        'Data Quality & Analytics',
        'API Management',
        'Network Security'
    ];
    const filteredServices = allServices
        .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
        .filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
        switch (sortBy) {
            case 'price':
                return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
            case 'rating':
                return b.rating - a.rating;
            case 'category':
                return a.category.localeCompare(b.category);
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
    const getCategoryIcon = (category) => {
        const icons = {
            'AI & Machine Learning': '🤖',
            'Cybersecurity': '🔐',
            'Healthcare Technology': '🏥',
            'Blockchain & Supply Chain': '⛓️',
            'Financial Technology': '💰',
            'Edge Computing & IoT': '🌐',
            'Marketing Technology': '📢',
            'Quantum Computing': '🔮',
            'Human Resources Technology': '👥',
            'Energy & Sustainability': '🌱',
            'Legal Technology': '⚖️',
            'Neuromorphic Computing': '🧠',
            'Privacy AI': '🔒',
            'AI Governance': '⚖️',
            'DevOps & Automation': '⚡',
            'Data Quality & Analytics': '📊',
            'API Management': '🔌',
            'Network Security': '🛡️'
        };
        return icons[category] || '🚀';
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <SEOHead config={{
            title: "Advanced Real Services Showcase 2025 | Zion Tech Group",
            description: "Discover our comprehensive collection of 20+ advanced real micro SAAS, IT, and AI services. Market-ready solutions with proven ROI and competitive pricing.",
            keywords: "advanced services, micro SAAS, AI services, IT solutions, real services, enterprise solutions, Zion Tech Group"
        }}/>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Advanced Real Services
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Showcase 2025
            </span>
          </motion.h1>
          <motion.p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Discover our comprehensive collection of {allServices.length}+ advanced real micro SAAS, IT, and AI services. 
            Each solution is market-ready with proven ROI, competitive pricing, and enterprise-grade support.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6 mb-8 border border-blue-500/30" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400"/>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400"/>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400"/>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
          {/* Navigation Links */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <ExternalLink className="w-5 h-5"/>
              <span>Visit Zion Tech Group</span>
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <Mail className="w-5 h-5"/>
              <span>Request Demo</span>
            </a>
          </motion.div>
        </div>
      </section>
      {/* Filters and Search */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
                <input type="text" placeholder="Search by name, description, or features..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {categories.map(category => (<option key={category} value={category} className="bg-slate-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>))}
                </select>
              </div>
              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="name" className="bg-slate-800 text-white">Name</option>
                  <option value="price" className="bg-slate-800 text-white">Price</option>
                  <option value="rating" className="bg-slate-800 text-white">Rating</option>
                  <option value="category" className="bg-slate-800 text-white">Category</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
            {filteredServices.map((service) => (<motion.div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105" variants={itemVariants}>
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  {service.popular && (<div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-3 h-3"/>
                      <span>Popular</span>
                    </div>)}
                </div>
                {/* Tagline */}
                <p className="text-gray-300 mb-4">{service.tagline}</p>
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                  <span className="text-gray-400">{service.period}</span>
                  <span className="text-sm text-gray-500 ml-2">({service.marketPrice} market rate)</span>
                </div>
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (<li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0"/>
                        <span>{feature}</span>
                      </li>))}
                    {service.features.length > 4 && (<li className="text-sm text-blue-400">+{service.features.length - 4} more features</li>)}
                  </ul>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-400"/>
                    <span className="text-gray-400">{service.customers} customers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400"/>
                    <span className="text-gray-400">{service.rating}/5 ({service.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-400"/>
                    <span className="text-gray-400">{service.setupTime} setup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-purple-400"/>
                    <span className="text-gray-400">{service.growthRate}</span>
                  </div>
                </div>
                {/* ROI and Market Info */}
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <p className="text-sm text-green-400 font-medium mb-1">ROI: {service.roi}</p>
                  <p className="text-xs text-gray-400">Market Size: {service.marketSize}</p>
                </div>
                {/* Technology Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Technology:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 3).map((tech, index) => (<span key={index} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        {tech}
                      </span>))}
                    {service.technology.length > 3 && (<span className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded">
                        +{service.technology.length - 3} more
                      </span>)}
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-center">
                    Learn More
                  </a>
                  <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about ${service.name}. Please provide additional information about pricing, features, and implementation.`} className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-center">
                    Contact Sales
                  </a>
                </div>
              </motion.div>))}
          </motion.div>
          {/* No Results */}
          {filteredServices.length === 0 && (<motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
            </motion.div>)}
        </div>
      </section>
      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-8 border border-blue-500/30" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our advanced services are designed to drive innovation, improve efficiency, and deliver measurable ROI. 
              Contact us today to discuss your specific needs and discover how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5"/>
                <span>Get Started Today</span>
              </a>
              <a href="tel:+13024640950" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5"/>
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);
};
export default AdvancedServicesShowcase2025;
