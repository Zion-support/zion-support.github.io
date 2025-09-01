import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Code, 
  Network, 
  Eye, 
  Cpu, 
  Target, 
  Rocket, 
  Zap, 
  Lock, 
  BarChart3, 
  Globe, 
  Smartphone, 
  Palette, 
  ArrowRight, 
  Search, 
  Filter, 
  Users, 
  Settings, 
  TrendingUp 
} from 'lucide-react';

const Categories: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      description: 'Machine learning, deep learning, and AI-powered solutions',
      count: 42,
      color: 'from-purple-500 to-pink-500',
      icon: Brain
    },
    {
      id: 'cloud',
      name: 'Cloud Computing',
      description: 'Cloud infrastructure, platforms, and services',
      count: 38,
      color: 'from-blue-500 to-cyan-500',
      icon: Cloud
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Security solutions, threat detection, and compliance',
      count: 35,
      color: 'from-red-500 to-orange-500',
      icon: Shield
    },
    {
      id: 'data',
      name: 'Data Analytics',
      description: 'Big data, business intelligence, and analytics platforms',
      count: 31,
      color: 'from-green-500 to-emerald-500',
      icon: BarChart3
    },
    {
      id: 'development',
      name: 'Software Development',
      description: 'Custom software, web apps, and development tools',
      count: 45,
      color: 'from-indigo-500 to-purple-500',
      icon: Code
    },
    {
      id: 'iot',
      name: 'Internet of Things',
      description: 'IoT platforms, sensors, and connected devices',
      count: 28,
      color: 'from-teal-500 to-green-500',
      icon: Network
    }
  ];

  const subCategories = {
    ai: [
      { name: 'Machine Learning', services: 18, talent: 45, equipment: 12, icon: Brain },
      { name: 'Natural Language Processing', services: 12, talent: 32, equipment: 8, icon: Code },
      { name: 'Computer Vision', services: 8, talent: 28, equipment: 15, icon: Eye }
    ],
    cloud: [
      { name: 'Infrastructure as a Service', services: 15, talent: 38, equipment: 22, icon: Cloud },
      { name: 'Platform as a Service', services: 12, talent: 25, equipment: 18, icon: Settings },
      { name: 'Software as a Service', services: 11, talent: 30, equipment: 14, icon: Code }
    ],
    cybersecurity: [
      { name: 'Threat Detection', services: 14, talent: 35, equipment: 20, icon: Shield },
      { name: 'Identity Management', services: 10, talent: 22, equipment: 12, icon: Lock },
      { name: 'Compliance & Governance', services: 11, talent: 28, equipment: 16, icon: Users }
    ],
    data: [
      { name: 'Big Data Processing', services: 16, talent: 42, equipment: 25, icon: Database },
      { name: 'Business Intelligence', services: 12, talent: 28, equipment: 18, icon: BarChart3 },
      { name: 'Data Visualization', services: 8, talent: 20, equipment: 12, icon: Palette }
    ],
    development: [
      { name: 'Web Development', services: 20, talent: 55, equipment: 30, icon: Code },
      { name: 'Mobile Development', services: 15, talent: 38, equipment: 25, icon: Smartphone },
      { name: 'DevOps & CI/CD', services: 10, talent: 25, equipment: 18, icon: Settings }
    ],
    iot: [
      { name: 'IoT Platforms', services: 12, talent: 30, equipment: 20, icon: Network },
      { name: 'Sensor Networks', services: 10, talent: 25, equipment: 22, icon: Cpu },
      { name: 'Edge Computing', services: 6, talent: 18, equipment: 15, icon: Zap }
    ]
  };

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || category.id === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Technology Categories - Zion Tech Group"
        description="Explore our comprehensive technology categories including AI, cloud computing, cybersecurity, data analytics, software development, and IoT solutions."
        keywords="technology categories, AI, cloud computing, cybersecurity, data analytics, software development, IoT, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Categories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive technology categories and find the
              perfect solutions for your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/20 text-lg"
                />
              </div>
              
              {/* Category Filters */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">Filter by Category</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeCategory === 'all'
                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.count} services
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Subcategories */}
                {subCategories[category.id as keyof typeof subCategories] && (
                  <div className="space-y-3 mb-6">
                    <h4 className="text-white font-medium text-sm">
                      Subcategories
                    </h4>
                    <div className="space-y-2">
                      {subCategories[category.id as keyof typeof subCategories]
                        .slice(0, 3)
                        .map((sub, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between text-sm"
                          >
                            <div className="flex items-center gap-2">
                              <sub.icon className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">
                                {sub.name}
                              </span>
                            </div>
                            <span className="text-gray-400 text-xs">
                              {sub.services} services
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-white font-semibold text-lg">
                      {category.count}
                    </div>
                    <div className="text-gray-400 text-xs">Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-lg">
                      {subCategories[category.id as keyof typeof subCategories]
                        ?.reduce((acc, sub) => acc + sub.talent, 0) || 0}
                    </div>
                    <div className="text-gray-400 text-xs">Experts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-lg">
                      {subCategories[category.id as keyof typeof subCategories]
                        ?.reduce((acc, sub) => acc + sub.equipment, 0) || 0}
                    </div>
                    <div className="text-gray-400 text-xs">Tools</div>
                  </div>
                </div>
                
                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25">
                  Explore {category.name}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
          
          {filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <Search className="w-20 h-20 text-gray-400 mx-auto mb-6" />
              <h3 className="text-white text-2xl font-semibold mb-3">
                No categories found
              </h3>
              <p className="text-gray-400 text-lg">
                Try adjusting your search criteria or filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Categories;