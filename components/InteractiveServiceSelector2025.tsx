import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Brain,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Target,
  Award,
  Sparkles
} from 'lucide-react';

const InteractiveServiceSelector2025 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-blue-500 to-purple-500' },
    { id: 'ai-automation', name: 'AI Automation', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, color: 'from-pink-500 to-red-500' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Shield, color: 'from-green-500 to-blue-500' },
    { id: 'iot', name: 'IoT Solutions', icon: Globe, color: 'from-orange-500 to-yellow-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' }
  ];

  const budgetRanges = [
    { id: 'all', name: 'All Budgets', min: 0, max: Infinity },
    { id: 'under-1k', name: 'Under $1,000/month', min: 0, max: 1000 },
    { id: '1k-5k', name: '$1,000 - $5,000/month', min: 1000, max: 5000 },
    { id: '5k-10k', name: '$5,000 - $10,000/month', min: 5000, max: 10000 },
    { id: 'over-10k', name: 'Over $10,000/month', min: 10000, max: Infinity }
  ];

  const availableFeatures = [
    '24/7 Support', 'Custom Integration', 'API Access', 'Mobile App', 
    'Analytics Dashboard', 'Multi-language', 'Cloud-based', 'On-premise',
    'Real-time Processing', 'AI-powered', 'Blockchain Integration', 'IoT Connectivity'
  ];

  const services = [
    {
      id: 'ai-process-automation',
      title: 'Enterprise AI Process Automation Suite',
      description: 'Revolutionary AI-powered automation that reduces operational costs by 60% and increases productivity by 400%.',
      category: 'ai-automation',
      price: 2499,
      features: ['24/7 Support', 'Custom Integration', 'API Access', 'Analytics Dashboard', 'AI-powered', 'Real-time Processing'],
      rating: 4.9,
      reviews: 156,
      customers: 500,
      savings: 5500,
      marketPrice: 8000,
      benefits: ['60% Cost Reduction', '400% Productivity Boost', '2-Month ROI', '99.9% Uptime'],
      trending: true,
      new: true,
      icon: Brain,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'quantum-risk-assessment',
      title: 'Quantum Financial Risk Assessment Platform',
      description: 'Revolutionary quantum algorithms for financial risk modeling and portfolio optimization with unprecedented accuracy.',
      category: 'quantum-computing',
      price: 4999,
      features: ['24/7 Support', 'Custom Integration', 'Analytics Dashboard', 'Real-time Processing', 'AI-powered'],
      rating: 4.8,
      reviews: 89,
      customers: 200,
      savings: 10000,
      marketPrice: 15000,
      benefits: ['85% Better Risk Assessment', '40% Volatility Reduction', 'Quantum Advantage', 'Future-proof'],
      trending: true,
      new: true,
      icon: Zap,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'defi-platform',
      title: 'DeFi Platform Development Suite',
      description: 'Complete decentralized finance platform with smart contracts, liquidity pools, and automated market making.',
      category: 'blockchain',
      price: 3999,
      features: ['24/7 Support', 'Custom Integration', 'API Access', 'Analytics Dashboard', 'Blockchain Integration', 'Real-time Processing'],
      rating: 4.7,
      reviews: 124,
      customers: 300,
      savings: 11000,
      marketPrice: 15000,
      benefits: ['Faster Protocol Launch', 'Built-in Security', 'Scalable Architecture', 'Community Governance'],
      trending: false,
      new: true,
      icon: Shield,
      gradient: 'from-green-500 to-blue-600'
    },
    {
      id: 'iot-predictive-maintenance',
      title: 'IoT Predictive Maintenance AI Platform',
      description: 'AI-powered predictive maintenance for industrial equipment with real-time monitoring and failure prediction.',
      category: 'iot',
      price: 1999,
      features: ['24/7 Support', 'Custom Integration', 'API Access', 'Analytics Dashboard', 'IoT Connectivity', 'Real-time Processing'],
      rating: 4.6,
      reviews: 78,
      customers: 150,
      savings: 5000,
      marketPrice: 7000,
      benefits: ['Reduce Downtime by 70%', 'Lower Maintenance Costs by 45%', 'Predict Failures 30 Days Ahead'],
      trending: true,
      new: false,
      icon: Globe,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Platform Pro',
      description: 'Advanced AI content creation with multi-language support, SEO optimization, and brand voice customization.',
      category: 'ai-automation',
      price: 899,
      features: ['24/7 Support', 'API Access', 'Analytics Dashboard', 'Multi-language', 'AI-powered', 'Cloud-based'],
      rating: 4.8,
      reviews: 203,
      customers: 400,
      savings: 2100,
      marketPrice: 3000,
      benefits: ['Save 90% on Content Creation', 'Improve SEO by 300%', 'Consistent Brand Messaging'],
      trending: false,
      new: false,
      icon: Brain,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'quantum-encryption',
      title: 'Quantum Cryptography Communication Platform',
      description: 'Unbreakable quantum encryption for ultra-secure communications and data transmission.',
      category: 'quantum-computing',
      price: 3999,
      features: ['24/7 Support', 'Custom Integration', 'API Access', 'Real-time Processing'],
      rating: 4.9,
      reviews: 67,
      customers: 120,
      savings: 8000,
      marketPrice: 12000,
      benefits: ['Unbreakable Encryption', 'Future-proof Security', 'Zero-knowledge Protocols'],
      trending: false,
      new: true,
      icon: Shield,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    
    const filtered = services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      const selectedBudgetRange = budgetRanges.find(range => range.id === selectedBudget);
      const matchesBudget = selectedBudgetRange ? 
        service.price >= selectedBudgetRange.min && service.price <= selectedBudgetRange.max : true;
      
      const matchesFeatures = selectedFeatures.length === 0 || 
        selectedFeatures.every(feature => service.features.includes(feature));
      
      return matchesSearch && matchesCategory && matchesBudget && matchesFeatures;
    });
    
    setTimeout(() => {
      setFilteredServices(filtered);
      setIsLoading(false);
    }, 300);
  }, [searchTerm, selectedCategory, selectedBudget, selectedFeatures]);

  const toggleFeature = (feature) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
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

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Find Your Perfect Technology Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Use our intelligent service selector to find the ideal technology solution for your business needs, 
            budget, and requirements.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-3xl shadow-xl p-8 mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for services, features, or solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{category.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Budget Filters */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Budget Range
            </h3>
            <div className="flex flex-wrap gap-3">
              {budgetRanges.map((range) => {
                const isActive = selectedBudget === range.id;
                return (
                  <motion.button
                    key={range.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedBudget(range.id)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {range.name}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Feature Filters */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Required Features
            </h3>
            <div className="flex flex-wrap gap-3">
              {availableFeatures.map((feature) => {
                const isSelected = selectedFeatures.includes(feature);
                return (
                  <motion.button
                    key={feature}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleFeature(feature)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {feature}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {isLoading ? 'Searching...' : `Found ${filteredServices.length} Solutions`}
            </h3>
            {filteredServices.length > 0 && (
              <div className="text-gray-600">
                Showing results for your criteria
              </div>
            )}
          </div>

          <AnimatePresence>
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or filters</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      layout
                      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              {service.new && (
                                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 block">
                                  NEW
                                </span>
                              )}
                              {service.trending && (
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 mb-2">
                                  <TrendingUp size={14} />
                                  TRENDING
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">${service.price.toLocaleString()}/mo</div>
                            <div className="text-sm text-gray-500 line-through">${service.marketPrice.toLocaleString()}/mo</div>
                            <div className="text-sm font-semibold text-green-600">Save ${service.savings.toLocaleString()}/mo</div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(service.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-600 text-sm">
                            {service.rating} ({service.reviews} reviews)
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600 text-sm">{service.customers}+ customers</span>
                        </div>

                        {/* Benefits */}
                        <div className="mb-8">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                          <div className="space-y-2">
                            {service.benefits.slice(0, 3).map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                          <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 4 && (
                              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                                +{service.features.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        >
                          Get Started
                          <ArrowRight size={20} />
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Our experts are here to help you find the perfect solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 py-4 px-8 rounded-2xl font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <Users className="w-5 h-5" />
                Talk to an Expert
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white py-4 px-8 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveServiceSelector2025;