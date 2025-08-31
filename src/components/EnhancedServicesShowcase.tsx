import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Zap, Rocket, Atom, Cpu, Database, 
  Network, Smartphone, Lock, BarChart3, Code, Server, 
  Cpu as ChipIcon, Wifi, Globe2, Bot, Workflow, Eye, Sparkles,
  Star, TrendingUp, Users, Award, CheckCircle, ArrowRight,
  Search, Filter, DollarSign, Clock, Zap as ZapIcon
} from 'lucide-react';
import { LoadingSkeleton, ServicesGridSkeleton } from './ui/loading-skeleton';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
  };
  features: string[];
  marketSize: string;
  growthRate: string;
  color: string;
  link: string;
  popular?: boolean;
  new?: boolean;
}

const services: Service[] = [
  {
    id: 'ai-autonomous-business',
    icon: Brain,
    title: 'AI Autonomous Business Operations',
    description: 'Automate complex business processes with intelligent AI agents',
    category: 'AI & Machine Learning',
    price: { monthly: 8500, yearly: 85000, currency: 'USD' },
    features: ['Self-learning agents', 'Multi-agent collaboration', '90% process automation', 'Real-time optimization'],
    marketSize: '$45 billion by 2030',
    growthRate: '+35% annually',
    color: 'from-purple-500 to-pink-500',
    link: '/services/ai-autonomous-business-operations',
    popular: true
  },
  {
    id: 'quantum-ai-optimization',
    icon: Atom,
    title: 'Quantum AI Optimization Platform',
    description: 'Quantum-classical hybrid algorithms for unprecedented optimization',
    category: 'Quantum Computing',
    price: { monthly: 15000, yearly: 150000, currency: 'USD' },
    features: ['Quantum-classical hybrid', '1000x faster processing', 'Real-time optimization', 'Advanced algorithms'],
    marketSize: '$65 billion by 2030',
    growthRate: '+40% annually',
    color: 'from-blue-500 to-indigo-500',
    link: '/services/quantum-ai-optimization',
    new: true
  },
  {
    id: 'cloud-infrastructure',
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    description: 'Scalable cloud solutions with automated deployment and management',
    category: 'Cloud & Infrastructure',
    price: { monthly: 12000, yearly: 120000, currency: 'USD' },
    features: ['Auto-scaling', 'CI/CD pipelines', 'Infrastructure as code', '24/7 monitoring'],
    marketSize: '$1.5 trillion by 2030',
    growthRate: '+25% annually',
    color: 'from-cyan-500 to-blue-500',
    link: '/services/cloud-infrastructure-devops'
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced security solutions for modern threat landscapes',
    category: 'Cybersecurity',
    price: { monthly: 8500, yearly: 85000, currency: 'USD' },
    features: ['99.9% threat detection', 'Real-time response', 'Zero-day protection', 'Compliance ready'],
    marketSize: '$300 billion by 2030',
    growthRate: '+30% annually',
    color: 'from-red-500 to-orange-500',
    link: '/services/ai-cybersecurity'
  },
  {
    id: 'digital-transformation',
    icon: Zap,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation consulting and implementation',
    category: 'Consulting',
    price: { monthly: 15000, yearly: 150000, currency: 'USD' },
    features: ['Strategy development', 'Process optimization', 'Technology integration', 'Change management'],
    marketSize: '$500 billion by 2030',
    growthRate: '+20% annually',
    color: 'from-green-500 to-emerald-500',
    link: '/services/digital-transformation'
  },
  {
    id: 'edge-computing',
    icon: ChipIcon,
    title: 'Edge Computing Platform',
    description: 'Real-time data processing at the edge for ultra-low latency',
    category: 'Emerging Technologies',
    price: { monthly: 9500, yearly: 95000, currency: 'USD' },
    features: ['90% latency reduction', 'Real-time processing', 'Edge AI capabilities', 'Global deployment'],
    marketSize: '$50 billion by 2030',
    growthRate: '+45% annually',
    color: 'from-indigo-500 to-purple-500',
    link: '/services/edge-computing'
  }
];

const categories = ['All', 'AI & Machine Learning', 'Quantum Computing', 'Cloud & Infrastructure', 'Cybersecurity', 'Consulting', 'Emerging Technologies'];

export function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'marketSize'>('name');
  const [isLoading, setIsLoading] = useState(false);

  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = service.price.monthly >= priceRange[0] && service.price.monthly <= priceRange[1];
      
      return matchesCategory && matchesSearch && matchesPrice;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'marketSize':
          return parseInt(a.marketSize.replace(/[^0-9]/g, '')) - parseInt(b.marketSize.replace(/[^0-9]/g, ''));
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, priceRange, sortBy]);

  const handleServiceClick = (service: Service) => {
    // Simulate loading for demo purposes
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  if (isLoading) {
    return <ServicesGridSkeleton />;
  }

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Revolutionary Technology Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transform your business with cutting-edge AI, quantum computing, and cloud solutions
          </motion.p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Price Range and Sort */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Price Range:</span>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-32"
              />
              <span className="text-sm text-gray-600">${priceRange[1].toLocaleString()}</span>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="marketSize">Sort by Market Size</option>
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Badges */}
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    {service.popular && (
                      <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                        Popular
                      </span>
                    )}
                    {service.new && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        New
                      </span>
                    )}
                  </div>

                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className="w-8 h-8" />
                      <div className="text-right">
                        <div className="text-2xl font-bold">${service.price.monthly.toLocaleString()}</div>
                        <div className="text-sm opacity-90">/month</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Market Info */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{service.growthRate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe2 className="w-4 h-4" />
                        <span>{service.marketSize}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to={service.link}
                      onClick={() => handleServiceClick(service)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group-hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-6">
              Let's discuss how our revolutionary services can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
