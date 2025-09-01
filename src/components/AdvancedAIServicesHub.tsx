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
} from 'lucide-react';
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
}

const AdvancedAIServicesHub: React.FC = () => {
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
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Cpu },
    { id: 'project-management', name: 'Project Management', icon: Brain },
    { id: 'customer-support', name: 'Customer Support', icon: Users },
    { id: 'finance', name: 'Financial Analytics', icon: TrendingUp },
    { id: 'marketing', name: 'Marketing Automation', icon: Globe },
    { id: 'analytics', name: 'Data Analytics', icon: Database },
    { id: 'security', name: 'Cybersecurity', icon: Shield }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.pricing.starter - b.pricing.starter;
      case 'popularity':
        return b.pricing.starter - a.pricing.starter; // Higher price = more popular for demo
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced AI Services Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered solutions designed to transform your business operations and drive innovation.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity')}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                    service.status === 'active' ? 'bg-green-500/20 text-green-400' :
                    service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {service.status}
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
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedAIServicesHub;