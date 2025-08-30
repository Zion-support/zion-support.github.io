import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  DollarSign,
  Star,
  Globe,
  Award,
  Zap,
  Shield,
  Rocket,
  Search,
  Filter
} from 'lucide-react';
import { revolutionaryAIServices2030 } from '../data/revolutionaryServices2030';

export function AIServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const aiServices = revolutionaryAIServices2030;

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain },
    { id: 'AI-Powered Workflow Automation', name: 'Workflow Automation', icon: Zap },
    { id: 'Biotechnology AI Solutions', name: 'Biotech AI', icon: Target },
    { id: 'AI Business Intelligence', name: 'Business Intelligence', icon: TrendingUp },
    { id: 'AI Cybersecurity Platform', name: 'Cybersecurity AI', icon: Shield },
    { id: 'AI Healthcare Platform', name: 'Healthcare AI', icon: Users },
    { id: 'AI Project Management', name: 'Project Management AI', icon: Rocket }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  const stats = [
    { label: 'AI Services', value: aiServices.length.toString(), icon: Brain },
    { label: 'AI Models', value: '50+', icon: Cpu },
    { label: 'Accuracy Rate', value: '99.2%', icon: Target },
    { label: 'Client Success', value: '4.9/5', icon: Star }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Advanced Machine Learning',
      description: 'State-of-the-art ML algorithms for complex problem-solving and pattern recognition.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'Neural Networks',
      description: 'Deep learning architectures that mimic human brain function for superior performance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis for data-driven decision making.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Intelligent threat detection and automated security response systems.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Intelligent automation that learns and adapts to optimize business processes.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Rocket,
      title: 'Innovation Acceleration',
      description: 'AI-driven research and development to accelerate breakthrough innovations.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI services including machine learning, neural networks, predictive analytics, and AI-powered business solutions." />
        <meta name="keywords" content="AI services, machine learning, neural networks, predictive analytics, AI automation, business intelligence, cybersecurity AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                AI Solutions
              </span>
              for the Future
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of next-generation artificial intelligence with our cutting-edge 
              AI services that transform businesses and drive innovation across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Capabilities & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI services leverage the most advanced technologies to deliver exceptional results and drive business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${capability.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <capability.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-purple-500 border-purple-500 text-white'
                        : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-purple-500'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
                <option value="aiScore">AI Score</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* AI Score Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                    AI Score: {service.aiScore}/10
                  </span>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                    {service.category}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-purple-400" />
                    <span className="text-2xl font-bold text-white">
                      ${service.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm">/{service.pricingModel}</span>
                  </div>
                </div>

                {/* AI Models */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">AI Models:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.aiModels.slice(0, 3).map((model, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20">
                        {model}
                      </span>
                    ))}
                    {service.aiModels.length > 3 && (
                      <span className="text-purple-400 text-xs">+{service.aiModels.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Accuracy & Training */}
                <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Accuracy:</span>
                      <div className="text-emerald-400 font-medium">{service.accuracy}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Training Data:</span>
                      <div className="text-blue-400 font-medium">{service.trainingData}</div>
                    </div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Use Cases:</h4>
                  <div className="space-y-2">
                    {service.useCases.slice(0, 2).map((useCase, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{useCase}</span>
                      </div>
                    ))}
                    {service.useCases.length > 2 && (
                      <span className="text-purple-400 text-sm">+{service.useCases.length - 2} more use cases</span>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Market Price:</span>
                      <div className="text-purple-400 font-medium">{service.marketPrice}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Innovation Level:</span>
                      <div className="text-cyan-400 font-medium">{service.innovationLevel}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No AI services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our cutting-edge artificial intelligence solutions. 
              Get started today and experience the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start AI Transformation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Schedule AI Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}