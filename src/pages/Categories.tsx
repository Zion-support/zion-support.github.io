import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Users, 
  Building, 
  Database, 
  Cloud, 
  Shield, 
  Brain, 
  Zap, 
  Globe, 
  Cpu, 
  Lock, 
  BarChart3, 
  Palette, 
  Smartphone, 
  Rocket, 
  Target, 
  Lightbulb, 
  Code, 
  Network, 
  Eye, 
  Star, 
  ArrowRight,
  Search,
  Contact
} from 'lucide-react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('all');

  const mainCategories = [
    {
      id: 'all',
      name: 'All Categories',
      icon: Globe,
      color: 'from-green-500 to-blue-500',
      count: 0
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      count: 45
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      count: 32
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      count: 28
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      count: 36
    },
    {
      id: 'development',
      name: 'Development',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      count: 41
    }
  ];

  const subCategories = {
    'ai-ml': [
      {
        name: 'Natural Language Processing',
        description: 'Text analysis, language models, and conversational AI',
        icon: Brain,
        services: 12,
        talent: 8,
        equipment: 3
      },
      {
        name: 'Computer Vision',
        description: 'Image recognition, object detection, and visual AI',
        icon: Eye,
        services: 9,
        talent: 6,
        equipment: 4
      },
      {
        name: 'Machine Learning Platforms',
        description: 'ML model training, deployment, and management',
        icon: Cpu,
        services: 15,
        talent: 12,
        equipment: 7
      },
      {
        name: 'AI Consulting',
        description: 'Strategic AI implementation and optimization',
        icon: Target,
        services: 8,
        talent: 5,
        equipment: 1
      }
    ],
    'cloud': [
      {
        name: 'Cloud Migration',
        description: 'Legacy system migration and cloud transformation',
        icon: Rocket,
        services: 11,
        talent: 7,
        equipment: 2
      },
      {
        name: 'DevOps & CI/CD',
        description: 'Automated deployment and infrastructure management',
        icon: Zap,
        services: 14,
        talent: 9,
        equipment: 3
      },
      {
        name: 'Serverless Computing',
        description: 'Event-driven and serverless architecture',
        icon: Cloud,
        services: 7,
        talent: 4,
        equipment: 1
      }
    ],
    'cybersecurity': [
      {
        name: 'Threat Detection',
        description: 'Advanced threat detection and response systems',
        icon: Shield,
        services: 13,
        talent: 8,
        equipment: 5
      },
      {
        name: 'Compliance & Governance',
        description: 'Security compliance and policy management',
        icon: Lock,
        services: 9,
        talent: 6,
        equipment: 2
      },
      {
        name: 'Penetration Testing',
        description: 'Security assessment and vulnerability testing',
        icon: Target,
        services: 6,
        talent: 4,
        equipment: 3
      }
    ],
    'data': [
      {
        name: 'Business Intelligence',
        description: 'Data visualization and business analytics',
        icon: BarChart3,
        services: 18,
        talent: 11,
        equipment: 4
      },
      {
        name: 'Big Data Processing',
        description: 'Large-scale data processing and analytics',
        icon: Database,
        services: 12,
        talent: 8,
        equipment: 6
      },
      {
        name: 'Data Engineering',
        description: 'Data pipeline development and ETL processes',
        icon: Network,
        services: 6,
        talent: 5,
        equipment: 2
      }
    ],
    'development': [
      {
        name: 'Web Development',
        description: 'Frontend and backend web applications',
        icon: Code,
        services: 22,
        talent: 15,
        equipment: 3
      },
      {
        name: 'Mobile Development',
        description: 'iOS and Android mobile applications',
        icon: Smartphone,
        services: 16,
        talent: 12,
        equipment: 2
      },
      {
        name: 'API Development',
        description: 'RESTful APIs and microservices',
        icon: Network,
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
    <>
      <SEO 
        title="Categories - Zion Tech Group"
        description="Browse our comprehensive collection of technology services, talent, and equipment organized into logical categories for easy discovery."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Browse Categories
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our comprehensive collection of services, talent, and equipment organized into logical categories for easy discovery.
            </p>
          </div>
        </motion.div>

        {/* Main Categories */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Main Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-left p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    activeCategory === category.id
                      ? 'border-green-400 bg-green-400/10'
                      : 'border-slate-600 bg-slate-800/50 hover:border-green-400/50'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {category.count} total items available
                  </p>
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
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
          <motion.div 
            className="py-16 bg-slate-800/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                {mainCategories.find(c => c.id === activeCategory)?.name} - Sub Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subCategories[activeCategory as keyof typeof subCategories]?.map((subCategory, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-800/50 border border-slate-600/50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-green-400 mb-4">
                      <subCategory.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{subCategory.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{subCategory.description}</p>

                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-green-400 font-bold text-lg">{subCategory.services}</div>
                        <div className="text-gray-300 text-xs">Services</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-purple-400 font-bold text-lg">{subCategory.talent}</div>
                        <div className="text-gray-300 text-xs">Talent</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-orange-400 font-bold text-lg">{subCategory.equipment}</div>
                        <div className="text-gray-300 text-xs">Equipment</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Featured Items */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Featured Items
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 border border-slate-600/50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.featured && (
                    <div className="inline-block bg-green-400 text-slate-900 px-3 py-1 rounded-full text-xs font-medium mb-4">
                      Featured
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{item.category}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{item.rating}</span>
                    </div>
                    <span className="text-green-400 font-semibold">{item.price}</span>
                  </div>

                  <button className="w-full bg-green-400 text-slate-900 py-2 rounded-lg font-medium hover:bg-green-500 transition-colors">
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
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Use our advanced search to find specific services, talent, or equipment, or contact us for custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/search"
                className="bg-green-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors inline-flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                Advanced Search
              </Link>
              <Link
                to="/contact"
                className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-colors inline-flex items-center gap-2"
              >
                <Contact className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
