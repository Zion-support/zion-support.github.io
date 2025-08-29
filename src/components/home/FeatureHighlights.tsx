import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: "🚀",
    title: "Cutting-Edge Technology",
    description: "Leverage the latest advancements in AI, quantum computing, and blockchain technology"
  },
  {
    icon: "⚡",
    title: "Lightning Fast Performance",
    description: "Optimized solutions that deliver exceptional speed and efficiency for your business needs"
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance standards to protect your valuable data"
  },
  {
    icon: "🌐",
    title: "Global Scalability",
    description: "Solutions that scale seamlessly from startup to enterprise across multiple regions"
  },
  {
    icon: "🤖",
    title: "AI-Powered Intelligence",
    description: "Smart automation and predictive analytics that adapt to your business requirements"
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    description: "Comprehensive insights and reporting to make data-driven decisions instantly"
  }
];

export function FeatureHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our innovative solutions combine cutting-edge technology with proven business value to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Experience the difference</span>
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}