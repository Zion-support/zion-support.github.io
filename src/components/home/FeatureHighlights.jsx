import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Rocket, Users, Zap, Globe } from 'lucide-react';

export const FeatureHighlights = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Innovation",
      description: "Cutting-edge artificial intelligence solutions that transform business operations",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Military-grade security protocols and compliance standards for your business",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Deployment",
      description: "Quick implementation and deployment with minimal disruption to operations",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "Round-the-clock technical support and consultation from certified professionals",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast applications and systems optimized for maximum efficiency",
      color: "from-yellow-500 to-green-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Worldwide presence with localized solutions for international markets",
      color: "from-indigo-500 to-purple-600"
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
            Key Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes Zion Tech Group the preferred choice for innovative technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 h-full border border-slate-600 hover:border-cyan-500 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};