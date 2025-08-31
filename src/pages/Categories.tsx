import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Target, 
  Zap, 
  Users, 
  Globe, 
  Building, 
  Heart, 
  Car, 
  GraduationCap, 
  Factory, 
  ShoppingCart, 
  Plane, 
  Leaf, 
  Camera, 
  Gamepad2, 
  Microscope,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Lightbulb,
  Rocket,
  Award,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const mainCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      count: 15,
      featured: true
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      description: 'Enterprise-grade security and regulatory compliance solutions',
      count: 12,
      featured: true
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      description: 'Scalable cloud infrastructure and DevOps solutions',
      count: 18,
      featured: true
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: Database,
      color: 'from-green-500 to-emerald-600',
      description: 'Advanced data analytics and business intelligence',
      count: 14,
      featured: false
    },
    {
      id: 'development',
      name: 'Software Development',
      icon: Code,
      color: 'from-indigo-500 to-purple-600',
      description: 'Custom software development and digital solutions',
      count: 20,
      featured: false
    },
    {
      id: 'automation',
      name: 'Automation & Workflow',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      description: 'Business process automation and workflow optimization',
      count: 16,
      featured: false
    }
  ];

  const industryCategories = [
    {
      id: 'finance',
      name: 'Financial Services',
      icon: Building,
      color: 'from-emerald-500 to-teal-600',
      description: 'Banking, insurance, and financial technology solutions',
      count: 8,
      featured: true
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      description: 'Healthcare technology and medical software solutions',
      count: 10,
      featured: true
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Factory,
      color: 'from-blue-500 to-indigo-600',
      description: 'Industrial automation and manufacturing technology',
      count: 12,
      featured: false
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-600',
      description: 'Retail technology and e-commerce solutions',
      count: 9,
      featured: false
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      color: 'from-green-500 to-blue-600',
      description: 'Educational technology and learning platforms',
      count: 7,
      featured: false
    },
    {
      id: 'transportation',
      name: 'Transportation & Logistics',
      icon: Car,
      color: 'from-orange-500 to-red-600',
      description: 'Transportation technology and logistics solutions',
      count: 11,
      featured: false
    },
    {
      id: 'energy',
      name: 'Energy & Utilities',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      description: 'Energy management and utility technology',
      count: 6,
      featured: false
    },
    {
      id: 'media',
      name: 'Media & Entertainment',
      icon: Camera,
      color: 'from-pink-500 to-purple-600',
      description: 'Media technology and entertainment platforms',
      count: 8,
      featured: false
    },
    {
      id: 'gaming',
      name: 'Gaming & Interactive',
      icon: Gamepad2,
      color: 'from-indigo-500 to-purple-600',
      description: 'Gaming technology and interactive experiences',
      count: 5,
      featured: false
    },
    {
      id: 'research',
      name: 'Research & Development',
      icon: Microscope,
      color: 'from-cyan-500 to-blue-600',
      description: 'Research tools and development platforms',
      count: 9,
      featured: false
    }
  ];

  const allCategories = [...mainCategories, ...industryCategories];

  const filteredCategories = allCategories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSelected = !selectedCategory || category.id === selectedCategory;
    return matchesSearch && matchesSelected;
  });

  const benefits = [
    {
      icon: Lightbulb,
      title: 'Expert Curation',
      description: 'Carefully organized categories for easy discovery'
    },
    {
      icon: Rocket,
      title: 'Quick Navigation',
      description: 'Find exactly what you need in seconds'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'All solutions meet our high standards'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Updates',
      description: 'New categories and solutions added regularly'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Categories - Zion Tech Group"
        description="Explore our comprehensive service categories organized by technology type and industry. Find the perfect solution for your business needs."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Service <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Categories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of services organized by technology type and industry. 
              Find the perfect solution for your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Controls */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </motion.div>

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
            >
              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="security">Security & Compliance</option>
                  <option value="cloud">Cloud & Infrastructure</option>
                  <option value="data">Data & Analytics</option>
                  <option value="development">Software Development</option>
                  <option value="automation">Automation & Workflow</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'bg-slate-700/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'bg-slate-700/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Technology Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technology Categories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Core technology solutions organized by expertise area
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCategories.filter(cat => mainCategories.some(mc => mc.id === cat.id)).map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-2xl border border-slate-600/30 overflow-hidden hover:border-slate-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Category Header */}
                    <div className={`bg-gradient-to-br ${category.color} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <category.icon className="w-6 h-6" />
                        </div>
                        {category.featured && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-200 text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>

                    {/* Category Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-400">{category.count} services</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        {getCategoryFeatures(category.id).slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                        Explore Category
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCategories.filter(cat => mainCategories.some(mc => mc.id === cat.id)).map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-xl border border-slate-600/30 p-6 hover:border-slate-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                          {category.featured && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-200 text-xs font-medium rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-3">{category.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{category.count} services</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                        Explore
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized solutions tailored to specific industry needs
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.filter(cat => industryCategories.some(ic => ic.id === cat.id)).map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/30 rounded-xl border border-slate-600/30 p-6 hover:border-slate-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{category.count} solutions</span>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
                      View Solutions
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Use Categories?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Organized discovery makes finding the right solution simple and efficient.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse our categories to find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper function to get category features
function getCategoryFeatures(categoryId: string): string[] {
  const features: { [key: string]: string[] } = {
    'ai-ml': [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Automation',
      'Neural Networks'
    ],
    'security': [
      'Threat Detection',
      'Vulnerability Assessment',
      'Compliance Monitoring',
      'Incident Response',
      'Security Analytics',
      'Access Control'
    ],
    'cloud': [
      'Cloud Migration',
      'Infrastructure as Code',
      'Container Orchestration',
      'Serverless Computing',
      'Multi-cloud Management',
      'Cloud Security'
    ],
    'data': [
      'Data Warehousing',
      'Business Intelligence',
      'Real-time Analytics',
      'Data Visualization',
      'ETL Pipelines',
      'Data Governance'
    ],
    'development': [
      'Custom Software',
      'Web Applications',
      'Mobile Apps',
      'API Development',
      'Microservices',
      'DevOps Integration'
    ],
    'automation': [
      'Process Automation',
      'Workflow Management',
      'RPA Solutions',
      'Integration Tools',
      'Performance Monitoring',
      'Custom Workflows'
    ]
  };
  
  return features[categoryId] || ['Advanced Solutions', 'Expert Support', 'Custom Implementation'];
}

// Add missing icon components
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
