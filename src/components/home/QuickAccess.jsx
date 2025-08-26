import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cloud, Brain } from 'lucide-react';

export const QuickAccess = () => {
  const quickLinks = [
    {
      title: "AI Services",
      description: "Autonomous AI systems and machine learning",
      icon: <Brain className="w-6 h-6" />,
      link: "/services/ai",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps",
      icon: <Cloud className="w-6 h-6" />,
      link: "/services/cloud",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: <Shield className="w-6 h-6" />,
      link: "/services/security",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Performance",
      description: "Optimization and monitoring services",
      icon: <Zap className="w-6 h-6" />,
      link: "/services/performance",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access to Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Jump directly to the services you need most
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group"
            >
              <Link to={link.link}>
                <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-6 border border-slate-500 hover:border-cyan-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {link.description}
                  </p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};