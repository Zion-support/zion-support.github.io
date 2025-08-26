import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Shield, Cloud, Brain } from 'lucide-react';

export function QuickAccess() {
  const quickLinks = [
    {
      icon: Brain,
      title: "AI Services",
      description: "Explore our cutting-edge AI solutions",
      link: "/services/ai",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets",
      link: "/services/cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure",
      link: "/services/cloud",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology guidance",
      link: "/services/consulting",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access to Our Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get instant access to our most popular technology solutions and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Link to={item.link} className="block">
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-700/70">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}