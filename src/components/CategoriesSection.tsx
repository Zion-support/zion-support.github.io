import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Shield, Cloud, Zap, Users, Globe, Server, Lock } from 'lucide-react';

export function CategoriesSection() {
  const categories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security and compliance solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/services/cybersecurity'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/cloud'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end business transformation services',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      link: '/services/digital-transformation'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Strategic technology consulting and planning',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      link: '/services/consulting'
    },
    {
      id: 'global-solutions',
      title: 'Global Solutions',
      description: 'Worldwide technology deployment and support',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      link: '/services/global'
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      description: 'Robust and scalable infrastructure solutions',
      icon: Server,
      color: 'from-gray-500 to-slate-500',
      link: '/services/infrastructure'
    },
    {
      id: 'compliance',
      title: 'Compliance & Governance',
      description: 'Regulatory compliance and risk management',
      icon: Lock,
      color: 'from-emerald-500 to-green-500',
      link: '/services/compliance'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Service Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions across all major domains, designed to drive innovation and business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Link to={category.link} className="block">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/70">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}