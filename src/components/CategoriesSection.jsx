import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Database, Wifi, Zap, Server, Users, Target, Check, ArrowRight } from 'lucide-react';

export function CategoriesSection({ showTitle = true }) {
  const categories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Advanced AI solutions and machine learning platforms',
      count: 24
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure and DevOps automation',
      count: 18
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Security solutions and threat protection',
      count: 15
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: Database,
      description: 'Data management and analytics platforms',
      count: 22
    },
    {
      id: 'iot',
      name: 'IoT & Edge Computing',
      icon: Wifi,
      description: 'Internet of Things and edge computing solutions',
      count: 12
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Zap,
      description: 'Quantum computing and quantum-safe solutions',
      count: 8
    },
    {
      id: 'infrastructure',
      name: 'IT Infrastructure',
      icon: Server,
      description: 'Enterprise IT infrastructure and management',
      count: 20
    },
    {
      id: 'business',
      name: 'Business Solutions',
      icon: Users,
      description: 'Business process automation and management',
      count: 16
    }
  ];

  return (
    <div className="py-16">
      {showTitle && (
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Explore Our Service Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zion-slate-light text-lg max-w-2xl mx-auto"
          >
            Discover comprehensive solutions across all major technology domains
          </motion.p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors">
                <category.icon className="w-6 h-6 text-zion-cyan" />
              </div>
              <span className="text-zion-slate-light text-sm bg-zion-slate-light/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
              {category.name}
            </h3>
            
            <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
              {category.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-zion-cyan text-sm font-medium">
                View Services
              </span>
              <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}