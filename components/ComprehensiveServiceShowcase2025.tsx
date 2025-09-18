<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Shield
  Globe
  Database
  Cpu
  Network
  BarChart3,
  Users,
  Target,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Award,
  Lightbulb,
  Code,
  Settings,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    type: 'free' | 'starter' | 'professional' | 'enterprise';
    price: number;
    period: 'month' | 'year';
  };
  features: string[];
  benefits: string[];
  icon: React.ComponentType<any>;
  color: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  complexity: 'simple' | 'moderate' | 'complex' | 'expert';
  tags: string[];
}

const services: Service[] = [
  {
    id: 'ai-consulting',
    title: 'AI Strategy Consulting',
    description: 'Comprehensive AI strategy development and implementation planning for businesses of all sizes.',
    category: 'Consulting',
    pricing: { type: ''professional', 'price: 5000period: 'month' },
    features: ['Strategy 'Development', 'Technology 'Assessment', 'Implementation 'Roadmap', 'ROI Analysis'],
    benefits: ['Increased 'Efficiency', 'Cost 'Reduction', 'Competitive 'Advantage', 'Future-Proofing'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    rating: 4.9,
    reviews: 127,
    deliveryTime: '2-4 weeks',
    complexity: 'expert',
    tags: [', 'AI', 'Strategy', 'Consulting', 'Planning']
  },
  {
    id: 'ml-implementation',
    title: 'Machine Learning Implementation',
    description: 'End-to-end machine learning model developmentrainingand deployment services.',
    category: 'Development',
    pricing: { type: ''professional', 'price: 8000period: 'month' },
    features: ['Model 'Development', 'Data 'Processing', 'Training & 'Validation', 'Deployment'],
    benefits: ['Automated Decision 'Making', 'Predictive 'Analytics', 'Process 'Optimization', 'Scalable Solutions'],
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    rating: 4.8,
    reviews: 89,
    deliveryTime: '4-8 weeks',
    complexity: 'expert',
    tags: [', 'ML', 'Development'Data 'Science', 'Deployment']
  },
  {
    id: 'ai-automation',
    title: 'AI-Powered Automation',
    description: 'Intelligent automation solutions that streamline business processes and reduce manual work.',
    category: 'Automation',
    pricing: { type: ''starter', 'price: 2500period: 'month' },
    features: ['Process 'Automation', 'Workflow 'Optimization', 'Integration 'Services', 'Monitoring'],
    benefits: ['Time 'Savings', 'Error 'Reduction', 'Cost 'Efficiency', 'Scalability'],
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    rating: 4.7,
    reviews: 156,
    deliveryTime: '2-6 weeks',
    complexity: 'moderate',
    tags: [', 'Automation', 'RPA', 'Workflow', 'Efficiency']
  },
  {
    id: 'data-analytics',
    title: 'Advanced Data Analytics',
    description: 'Comprehensive data analysis and visualization services to unlock business insights.',
    category: 'Analytics',
    pricing: { type: ''professional', 'price: 4000period: 'month' },
    features: ['Data 'Mining', 'Statistical 'Analysis', 'Visualization'Reporting'],
    benefits: ['Data-Driven 'Decisions', 'Performance 'Insights', 'Trend 'Analysis', 'Predictive Modeling'],
    icon: BarChart3,
    color: 'from-orange-500 to-red-500',
    rating: 4.6,
    reviews: 98,
    deliveryTime: '3-5 weeks',
    complexity: 'complex',
    tags: [', 'Analytics', 'Data', 'Visualization', 'Insights']
  },
  {
    id: 'ai-security',
    title: 'AI Security Solutions',
    description: 'Advanced AI-powered security systems to protect your digital assets and infrastructure.',
    category: 'Security',
    pricing: { type: ''enterprise', 'price: 12000period: 'month' },
    features: ['Threat 'Detection', 'Anomaly 'Detection', 'Security 'Monitoring', 'Incident Response'],
    benefits: ['Enhanced 'Security', 'Real-time 'Protection', 'Risk 'Mitigation', 'Compliance'],
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    rating: 4.9,
    reviews: 73,
    deliveryTime: '4-6 weeks',
    complexity: 'expert',
    tags: [', 'Security', 'AI', 'Protection', 'Monitoring']
  },
  {
    id: 'cloud-ai',
    title: 'Cloud AI Infrastructure',
    description: 'Scalable cloud-based AI infrastructure setup and management services.',
    category: 'Infrastructure',
    pricing: { type: ''professional', 'price: 6000period: 'month' },
    features: ['Cloud 'Setup', 'Resource 'Management', 'Scaling 'Solutions', 'Monitoring'],
    benefits: [', 'Scalability', 'Cost 'Optimization', 'High 'Availability', 'Global Access'],
    icon: Globe,
    color: 'from-indigo-500 to-purple-500',
    rating: 4.7,
    reviews: 112,
    deliveryTime: '3-4 weeks',
    complexity: 'complex',
    tags: [', 'Cloud', 'Infrastructure', 'Scalability', 'AWS']
  },
  {
    id: 'ai-integration',
    title: 'AI System Integration',
    description: 'Seamless integration of AI capabilities into existing business systems and workflows.',
    category: 'Integration',
    pricing: { type: ''starter', 'price: 3000period: 'month' },
    features: ['API 'Development', 'System 'Integration', 'Data 'Migration', 'Testing'],
    benefits: ['Seamless 'Integration', 'Improved 'Workflows', 'Data 'Consistency', 'User Experience'],
    icon: Network,
    color: 'from-teal-500 to-blue-500',
    rating: 4.5,
    reviews: 84,
    deliveryTime: '2-5 weeks',
    complexity: 'moderate',
    tags: [', 'Integration', 'API', 'Systems', 'Workflow']
  },
  {
    id: 'ai-training',
    title: 'AI Training & Education',
    description: 'Comprehensive AI training programs for teams and organizations.',
    category: 'Education',
    pricing: { type: ''starter', 'price: 2000period: 'month' },
    features: ['Custom 'Training', 'Workshops', 'Certification', 'Ongoing Support'],
    benefits: ['Skill 'Development', 'Team 'Empowerment', 'Knowledge 'Transfer', 'Best Practices'],
    icon: Users,
    color: 'from-yellow-500 to-orange-500',
    rating: 4.8,
    reviews: 145,
    deliveryTime: '1-3 weeks',
    complexity: 'simple',
    tags: [', 'Training', 'Education', 'Skills', 'Workshops']
  }
];

const categories = [', 'All', 'Consulting', 'Development', 'Automation', 'Analytics', 'Security', 'Infrastructure', 'Integration'Education'];

const pricingTypes = {
  free: { label: ''Free', 'color: 'bg-gray-100 text-gray-800' },
  starter: { label: ''Starter', 'color: 'bg-green-100 text-green-800' },
  professional: { label: ''Professional', 'color: 'bg-blue-100 text-blue-800' },
  enterprise: { label: ''Enterprise', 'color: 'bg-purple-100 text-purple-800' }
};

const complexityLevels = {
  simple: { label: ''Simple', 'color: 'text-green-400' },
  moderate: { label: ''Moderate', 'color: 'text-yellow-400' },
  complex: { label: ''Complex', 'color: 'text-orange-400' },
  expert: { label: ''Expert', 'color: 'text-red-400' }
};

export default function ComprehensiveServiceShowcase2025() {
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [selectedServicesetSelectedService] = useState<Service | null>(null);
  const [viewModesetViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBysetSortBy] = useState<'rating' | 'price' | 'delivery'>('rating');
  const [searchTermsetSearchTerm] = useState('');

  const filteredServices = services
    .filter(service => 
      selectedCategory === 'All' || service.category === selectedCategory
    )
    .filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((ab) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.pricing.price - b.pricing.price;
        case 'delivery':
          return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
        default:
          return 0;
      }
    });

  const getPricingColor = (type: string) => {
    return pricingTypes[type as keyof typeof pricingTypes]?.color || 'bg-gray-100 text-gray-800';
  };

  const getComplexityColor = (complexity: string) => {
    return complexityLevels[complexity as keyof typeof complexityLevels]?.color || 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our full range of AI-powered services designed to transform your business and drive innovation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">{services.length}</div>
              <div className="text-sm text-gray-400">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">4.7</div>
              <div className="text-sm text-gray-400">Avg Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">884</div>
              <div className="text-sm text-gray-400">Reviews</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="delivery">Sort by Delivery</option>
              </select>
              
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/20' : ''}`}
                >
                  <Grid className="h-4 w-4 text-white" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/20' : ''}`}
                >
                  <List className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div
          layout
          className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
          }
        >
          <AnimatePresence>
            {filteredServices.map((serviceindex) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5delay: index * 0.1 }}
                className={`group cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105'
                    : 'bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300'
                }`}
                onClick={() => setSelectedService(service)}
              >
                {viewMode === 'grid' ? (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPricingColor(service.pricing.type)}`}>
                          {pricingTypes[service.pricing.type].label}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm ml-1">{service.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Complexity</span>
                        <span className={`font-medium ${getComplexityColor(service.complexity)}`}>
                          {complexityLevels[service.complexity].label}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Delivery</span>
                        <span className="text-white font-medium">{service.deliveryTime}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Price</span>
                        <span className="text-white font-bold text-lg">
                          ${service.pricing.price.toLocaleString()}/{service.pricing.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(03).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-purple-300 group-hover:text-purple-200 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm ml-1">{service.rating}</span>
                            <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPricingColor(service.pricing.type)}`}>
                            {pricingTypes[service.pricing.type].label}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-3">{service.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-gray-400">Delivery: </span>
                          <span className="text-white ml-1">{service.deliveryTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Target className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-gray-400">Complexity: </span>
                          <span className={`ml-1 ${getComplexityColor(service.complexity)}`}>
                            {complexityLevels[service.complexity].label}
                          </span>
                        </div>
                        <div className="text-white font-bold">
                          ${service.pricing.price.toLocaleString()}/{service.pricing.period}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedService.color}`}>
                  <selectedService.icon className="h-12 w-12 text-white" />
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedService.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {selectedService.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Rating</div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-white text-xl font-bold ml-2">{selectedService.rating}</span>
                        <span className="text-gray-400 ml-2">({selectedService.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Delivery Time</div>
                      <div className="text-white text-xl font-bold">{selectedService.deliveryTime}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Complexity</div>
                      <div className={`text-xl font-bold ${getComplexityColor(selectedService.complexity)}`}>
                        {complexityLevels[selectedService.complexity].label}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Pricing</div>
                      <div className="text-white text-xl font-bold">
                        ${selectedService.pricing.price.toLocaleString()}/{selectedService.pricing.period}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.features.map((featureindex) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Benefits</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.benefits.map((benefitindex) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <TrendingUp className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Service Type</span>
                        <span className="text-white font-medium">
                          {pricingTypes[selectedService.pricing.type].label}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Price</span>
                        <span className="text-white font-bold text-2xl">
                          ${selectedService.pricing.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Billing Period</span>
                        <span className="text-white font-medium">
                          Per {selectedService.pricing.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      Get Started Now
                    </button>
                    <button className="w-full bg-white/10 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
