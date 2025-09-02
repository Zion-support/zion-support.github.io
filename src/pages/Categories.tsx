import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Server, Users, Building, Database, Cloud, Shield, Brain, Zap, Globe, Cpu, Lock, BarChart3, Palette, Smartphone, Rocket, Target, Lightbulb, Code, Network, Eye, Star, ArrowRight } from 'lucide-react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('all');

  const mainCategories = [
    {
      id: 'all',
      name: 'All Categories',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600',
      count: 0
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      count: 45
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      count: 32
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-600',
      count: 28
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      count: 36
    },
    {
      id: 'development',
      name: 'Development',
      icon: <Code className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      count: 41
    }
  ];

  const subCategories = {
    'ai-ml': [
      {
        name: 'Natural Language Processing',
        description: 'Text analysis, language models, and conversational AI',
        icon: <Brain className="w-6 h-6" />,
        services: 12,
        talent: 8,
        equipment: 3
      },
      {
        name: 'Computer Vision',
        description: 'Image recognition, object detection, and visual AI',
        icon: <Eye className="w-6 h-6" />,
        services: 9,
        talent: 6,
        equipment: 4
      },
      {
        name: 'Machine Learning Platforms',
        description: 'ML model training, deployment, and management',
        icon: <Cpu className="w-6 h-6" />,
        services: 15,
        talent: 12,
        equipment: 7
      },
      {
        name: 'AI Consulting',
        description: 'Strategic AI implementation and optimization',
        icon: <Target className="w-6 h-6" />,
        services: 8,
        talent: 5,
        equipment: 1
      }
    ],
    'cloud': [
      {
        name: 'Cloud Migration',
        description: 'Legacy system migration and cloud transformation',
        icon: <Rocket className="w-6 h-6" />,
        services: 11,
        talent: 7,
        equipment: 2
      },
      {
        name: 'DevOps & CI/CD',
        description: 'Automated deployment and infrastructure management',
        icon: <Zap className="w-6 h-6" />,
        services: 14,
        talent: 9,
        equipment: 3
      },
      {
        name: 'Serverless Computing',
        description: 'Event-driven and serverless architecture',
        icon: <Cloud className="w-6 h-6" />,
        services: 7,
        talent: 4,
        equipment: 1
      }
    ],
    'cybersecurity': [
      {
        name: 'Threat Detection',
        description: 'Advanced threat detection and response systems',
        icon: <Shield className="w-6 h-6" />,
        services: 13,
        talent: 8,
        equipment: 5
      },
      {
        name: 'Compliance & Governance',
        description: 'Security compliance and policy management',
        icon: <Lock className="w-6 h-6" />,
        services: 9,
        talent: 6,
        equipment: 2
      },
      {
        name: 'Penetration Testing',
        description: 'Security assessment and vulnerability testing',
        icon: <Target className="w-6 h-6" />,
        services: 6,
        talent: 4,
        equipment: 3
      }
    ],
    'data': [
      {
        name: 'Business Intelligence',
        description: 'Data visualization and business analytics',
        icon: <BarChart3 className="w-6 h-6" />,
        services: 18,
        talent: 11,
        equipment: 4
      },
      {
        name: 'Big Data Processing',
        description: 'Large-scale data processing and analytics',
        icon: <Database className="w-6 h-6" />,
        services: 12,
        talent: 8,
        equipment: 6
      },
      {
        name: 'Data Engineering',
        description: 'Data pipeline development and ETL processes',
        icon: <Network className="w-6 h-6" />,
        services: 6,
        talent: 5,
        equipment: 2
      }
    ],
    'development': [
      {
        name: 'Web Development',
        description: 'Frontend and backend web applications',
        icon: <Code className="w-6 h-6" />,
        services: 22,
        talent: 15,
        equipment: 3
      },
      {
        name: 'Mobile Development',
        description: 'iOS and Android mobile applications',
        icon: <Smartphone className="w-6 h-6" />,
        services: 16,
        talent: 12,
        equipment: 2
      },
      {
        name: 'API Development',
        description: 'RESTful APIs and microservices',
        icon: <Network className="w-6 h-6" />,
        services: 13,
        talent: 8,
        equipment: 1
      }
    ]
  };

  const featuredItems = [
    {
      type: 'service',
      title: 'AI-Powered Business Intelligence Platform',
      category: 'AI & Machine Learning',
      rating: 4.9,
      price: '$2,500/month',
      featured: true
    },
    {
      type: 'talent',
      title: 'Senior AI Engineer',
      category: 'AI & Machine Learning',
      rating: 4.8,
      price: '$150/hour',
      featured: true
    },
    {
      type: 'equipment',
      title: 'High-Performance GPU Cluster',
      category: 'AI & Machine Learning',
      rating: 4.7,
      price: '$15,000/month',
      featured: true
    }
  ];

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') {
      return Object.values(subCategories).flat().reduce((total, sub) =>
        total + sub.services + sub.talent + sub.equipment, 0
      );
    }
    return subCategories[categoryId as keyof typeof subCategories]?.reduce((total, sub) =>
      total + sub.services + sub.talent + sub.equipment, 0
    ) || 0;
  };

  // Update counts
  mainCategories.forEach(cat => {
    cat.count = getCategoryCount(cat.id);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Categories - Zion Tech Group"
        description="Browse our comprehensive collection of services, talent, and equipment organized into logical categories for easy discovery."
        keywords="categories, services, talent, equipment, AI, cloud, cybersecurity, data, development"
        canonical="https://ziontechgroup.com/categories"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Browse Categories
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our comprehensive collection of services, talent, and equipment organized into logical categories for easy discovery.
          </motion.p>
        </div>
      </div>

      {/* Main Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Main Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-left p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  activeCategory === category.id
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-slate-700 bg-slate-800 hover:border-cyan-500/50'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-slate-300 text-sm mb-3">
                  {category.count} total items available
                </p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  Browse Category
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Sub Categories */}
      {activeCategory !== 'all' && subCategories[activeCategory as keyof typeof subCategories] && (
        <div className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center text-white mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {mainCategories.find(c => c.id === activeCategory)?.name} - Sub Categories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subCategories[activeCategory as keyof typeof subCategories].map((subCategory, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-cyan-400 mb-4">{subCategory.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{subCategory.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{subCategory.description}</p>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-cyan-400 font-bold text-lg">{subCategory.services}</div>
                      <div className="text-slate-300 text-xs">Services</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-purple-400 font-bold text-lg">{subCategory.talent}</div>
                      <div className="text-slate-300 text-xs">Talent</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-orange-400 font-bold text-lg">{subCategory.equipment}</div>
                      <div className="text-slate-300 text-xs">Equipment</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Featured Items */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Items
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {item.featured && (
                  <div className="inline-block bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    Featured
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{item.category}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{item.rating}</span>
                  </div>
                  <span className="text-cyan-400 font-semibold">{item.price}</span>
                </div>

                <button className="w-full bg-cyan-500 text-slate-900 py-2 rounded-lg font-medium hover:bg-cyan-600 transition-colors">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Browse All CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Can't Find What You're Looking For?
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Use our advanced search to find specific services, talent, or equipment, or contact us for custom solutions.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/search"
              className="bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              Advanced Search
            </a>
            <a
              href="/contact"
              className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-slate-900 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
