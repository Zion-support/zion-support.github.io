import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Rocket, 
  Globe,
  DollarSign,
  Package,
  Cloud,
  Settings,
  BarChart3,
  Briefcase,
  Plug,
  Smartphone,
  Code,
  Heart,
  Scale,
  Eye,
  Leaf,
  Lock,
  Users,
  Atom,
  Link as LinkIcon
} from 'lucide-react';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2025 } from '../data/comprehensiveInnovativeServices2025';
import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';
import { COMPREHENSIVE_IT_SERVICES_2025 } from '../data/comprehensiveITServices2025';

const ComprehensivePricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const allServices = [
    ...COMPREHENSIVE_INNOVATIVE_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025,
    ...COMPREHENSIVE_IT_SERVICES_2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Financial Services', name: 'AI & Financial Services', icon: '💰' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥' },
    { id: 'AI & Supply Chain', name: 'AI & Supply Chain', icon: '📦' },
    { id: 'AI & Customer Experience', name: 'AI & Customer Experience', icon: '😊' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: '📢' },
    { id: 'AI & HR', name: 'AI & HR', icon: '👥' },
    { id: 'AI & Sales', name: 'AI & Sales', icon: '📈' },
    { id: 'AI & Product Development', name: 'AI & Product Development', icon: '🔧' },
    { id: 'AI & Research', name: 'AI & Research', icon: '🔬' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'Blockchain & DeFi', name: 'Blockchain & DeFi', icon: '🔗' },
    { id: 'Edge Computing', name: 'Edge Computing', icon: '🌐' },
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀' },
    { id: 'Metaverse', name: 'Metaverse', icon: '🌍' },
    { id: 'Green Technology', name: 'Green Technology', icon: '🌱' },
    { id: 'Cloud Services', name: 'Cloud Services', icon: '☁️' },
    { id: 'DevOps', name: 'DevOps', icon: '⚙️' },
    { id: 'Data Services', name: 'Data Services', icon: '📊' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'Consulting', name: 'Consulting', icon: '💼' },
    { id: 'Integration', name: 'Integration', icon: '🔌' },
    { id: 'Mobile Development', name: 'Mobile Development', icon: '📱' },
    { id: 'Web Development', name: 'Web Development', icon: '🌐' }
  ];

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Financial Services': return <DollarSign className="w-5 h-5" />;
      case 'AI & Healthcare': return <Heart className="w-5 h-5" />;
      case 'AI & Supply Chain': return <Package className="w-5 h-5" />;
      case 'AI & Customer Experience': return <Globe className="w-5 h-5" />;
      case 'AI & Marketing': return <TrendingUp className="w-5 h-5" />;
      case 'AI & HR': return <Users className="w-5 h-5" />;
      case 'AI & Sales': return <TrendingUp className="w-5 h-5" />;
      case 'AI & Product Development': return <Code className="w-5 h-5" />;
      case 'AI & Research': return <Eye className="w-5 h-5" />;
      case 'Quantum Computing': return <Atom className="w-5 h-5" />;
      case 'Blockchain & DeFi': return <LinkIcon className="w-5 h-5" />;
      case 'Edge Computing': return <Zap className="w-5 h-5" />;
      case 'Space Technology': return <Rocket className="w-5 h-5" />;
      case 'Metaverse': return <Globe className="w-5 h-5" />;
      case 'Green Technology': return <Leaf className="w-5 h-5" />;
      case 'Cloud Services': return <Cloud className="w-5 h-5" />;
      case 'DevOps': return <Settings className="w-5 h-5" />;
      case 'Data Services': return <BarChart3 className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Consulting': return <Briefcase className="w-5 h-5" />;
      case 'Integration': return <Plug className="w-5 h-5" />;
      case 'Mobile Development': return <Smartphone className="w-5 h-5" />;
      case 'Web Development': return <Code className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400';
      case 'Cutting-edge': return 'text-blue-400';
      case 'Advanced': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container-responsive py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Pricing Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Explore our complete portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms with transparent pricing and detailed features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="container-responsive py-8">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Category Filter */}
            <div className="flex-1">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container-responsive py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-700/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{service.title}</h3>
                      <p className="text-cyan-400 text-sm">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{service.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationLevelColor(service.innovationLevel)} bg-slate-700/50`}>
                    {service.innovationLevel}
                  </span>
                  <div className="text-right">
                    <div className="text-cyan-400 text-sm font-medium">ROI: {service.roi}</div>
                    <div className="text-gray-400 text-xs">{service.estimatedDelivery}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-white font-semibold mb-3">Key Features</h4>
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 5 && (
                    <div className="text-cyan-400 text-sm">
                      +{service.features.length - 5} more features
                    </div>
                  )}
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="text-sm text-gray-300 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Info */}
                <div className="border-t border-slate-700/50 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Market Price</div>
                      <div className="text-white font-medium">{service.marketPrice}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Support Level</div>
                      <div className="text-white font-medium capitalize">{service.supportLevel}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    Learn More & Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {sortedServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="container-responsive py-20">
        <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl p-12 text-center border border-cyan-400/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you choose the right services and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Your Custom Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container-responsive py-16">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-300 text-lg">
              Have questions about our services or need a custom solution? Our team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Custom Pricing</h4>
              <p className="text-gray-300 text-sm">
                Get personalized pricing based on your specific requirements and scale
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Implementation Support</h4>
              <p className="text-gray-300 text-sm">
                Full implementation support and training to ensure successful deployment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Ongoing Support</h4>
              <p className="text-gray-300 text-sm">
                24/7 support and maintenance to keep your systems running smoothly
              </p>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-slate-700/50">
            <div className="text-white font-semibold mb-2">Contact Information</div>
            <div className="text-gray-300 space-y-1">
              <p>📞 +1 302 464 0950</p>
              <p>✉️ kleber@ziontechgroup.com</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a></p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricing;