import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Cpu,
  Database,
  ArrowRight,
  Star,
  CheckCircle,
  Rocket
import { Link } from 'react-router-dom';

interface AIService {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  icon: React.ComponentType<any>;
  route: string;
  status: 'active' | 'beta' | 'coming-soon';

const AdvancedAIServicesHub: React.FC = () => {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('popularity');

  const aiServices: AIService[] = [
    {
      id: 'ai-project-management',
      name: 'AI-Powered Project Management',
      description: 'Intelligent project planning, resource allocation, and predictive analytics for optimal project delivery.',
      category: 'project-management',
      features: ['AI Task Prioritization', 'Smart Resource Allocation', 'Predictive Analytics', 'Risk Assessment'],
      pricing: { starter: 99, professional: 299, enterprise: 599 },
      icon: Brain,
      route: '/services/ai-project-management',
      status: 'active'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Automation',
      description: 'Automated customer service with intelligent chatbots, ticket routing, and sentiment analysis.',
      category: 'customer-support',
      features: ['Intelligent Chatbots', 'Automated Ticket Routing', 'Sentiment Analysis', '24/7 Support'],
      pricing: { starter: 79, professional: 199, enterprise: 399 },
      icon: Users,
      route: '/services/ai-customer-support-automation',
      status: 'active'
    },
    {
      id: 'ai-financial-analytics',
      name: 'AI Financial Analytics Platform',
      description: 'Advanced financial forecasting, risk assessment, and compliance monitoring powered by AI.',
      category: 'finance',
      features: ['Financial Forecasting', 'Risk Assessment', 'Compliance Monitoring', 'Real-time Analytics'],
      pricing: { starter: 149, professional: 399, enterprise: 799 },
      icon: TrendingUp,
      route: '/services/ai-financial-analytics',
      status: 'active'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent audience segmentation, content personalization, and multi-channel campaign orchestration.',
      category: 'marketing',
      features: ['Audience Segmentation', 'Content Personalization', 'Multi-channel Campaigns', 'ROI Optimization'],
      pricing: { starter: 129, professional: 349, enterprise: 699 },
      icon: Globe,
      route: '/services/ai-marketing-automation',
      status: 'active'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Engine',
      description: 'Advanced data processing, pattern recognition, and predictive modeling for business intelligence.',
      category: 'analytics',
      features: ['Data Processing', 'Pattern Recognition', 'Predictive Modeling', 'Business Intelligence'],
      pricing: { starter: 199, professional: 499, enterprise: 999 },
      icon: Database,
      route: '/services/ai-data-analytics',
      status: 'beta'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Intelligent threat detection, automated response, and proactive security monitoring.',
      category: 'security',
      features: ['Threat Detection', 'Automated Response', 'Security Monitoring', 'Incident Prevention'],
      pricing: { starter: 179, professional: 449, enterprise: 899 },
      icon: Shield,
      route: '/services/ai-cybersecurity',
      status: 'coming-soon'

  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Cpu },;
    { id: 'project-management', name: 'Project Management', icon: Brain },;
    { id: 'customer-support', name: 'Customer Support', icon: Users },;
    { id: 'finance', name: 'Financial Analytics', icon: TrendingUp },;
    { id: 'marketing', name: 'Marketing Automation', icon: Globe },;
    { id: 'analytics', name: 'Data Analytics', icon: Database },;
    { id: 'security', name: 'Cybersecurity', icon: Shield };
  ];

  const filteredServices = aiServices.filter(service => {;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'name':;
        return a.name.localeCompare(b.name);
      case 'price':
        return a.pricing.starter - b.pricing.starter;
      case 'popularity':
        return b.status === 'active' ? 1 : -1;
      default:
        return 0;

  });

<<<<<<< HEAD
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'beta': return 'bg-yellow-500';
      case 'coming-soon': return 'bg-blue-500';
      default: return 'bg-gray-500';

  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Live';
      case 'beta': return 'Beta';
      case 'coming-soon': return 'Coming Soon';
      default: return 'Unknown';

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"

            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Solutions Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced AI Services
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered micro SAAS solutions designed to transform
              your business operations and drive innovation across all industries.
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-12"

            <div className="relative w-full max-w-md">
=======
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Services Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover and integrate cutting-edge AI-powered micro SAAS solutions designed to transform your business operations
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Brain className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
<<<<<<< HEAD

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"

              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

            {/* Sort Options */}
            <select
              value={sortBy}
<<<<<<< HEAD
              onChange={(e) => setSortBy(e.target.value as 'name' | 'category' | 'status')}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"

              <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
              <option value="category" className="bg-slate-800 text-white">Sort by Category</option>
              <option value="status" className="bg-slate-800 text-white">Sort by Status</option>
=======
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="popularity">Most Popular</option>
              <option value="name">Name A-Z</option>
              <option value="price">Price: Low to High</option>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </select>
          </div>
        </motion.div>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"

                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(service.status)}`}>
                      {getStatusText(service.status)}
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Starting at:</h4>
                    <div className="text-2xl font-bold text-white">
                      ${service.pricing.starter}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={service.route}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"

                    Explore Service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
=======
        {/* Category Filters */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                exit = {
  { opacity: 0,
  y: -20 






}}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    service.status === 'active' ? 'bg-green-500/20 text-green-400' :
                    service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {service.status === 'active' ? 'Active' : service.status === 'beta' ? 'Beta' : 'Coming Soon'}
                  </span>
                </div>

                {/* Service Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Starting at:</h4>
                  <div className="text-2xl font-bold text-white">
                    ${service.pricing.starter}
                    <span className="text-sm text-gray-400 font-normal">/month</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={service.route}
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Explore Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </AnimatePresence>
        </motion.div>

<<<<<<< HEAD
          {/* No Results Message */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"

              <Brain className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss how our AI-powered solutions can drive innovation
              and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg flex items-center justify-center"

                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/new-services-showcase-2025"
                className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg"

                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
        {/* Call to Action */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our AI-powered solutions are designed to streamline operations, boost productivity, and drive growth. 
              Get started today and experience the future of business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Get Started
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Schedule Demo;
              </button>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  );
};

export default AdvancedAIServicesHub;}}}}}}