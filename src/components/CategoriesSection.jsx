import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CategoriesSection = () => {
  const categories = [
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Autonomous AI systems and machine learning solutions',
      icon: '🤖',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services',
      icon: '☁️',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security and compliance solutions',
      icon: '🛡️',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end business transformation services',
      icon: '🚀',
      color: 'from-green-500 to-emerald-600'
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
            Comprehensive solutions across cutting-edge technologies to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={`/services/${category.id}`}>
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 h-full border border-slate-600 hover:border-slate-500 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};