import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI-Powered Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence',
    icon: '🤖',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'quantum-tech',
    title: 'Quantum Technology',
    description: 'Next-generation quantum computing applications',
    icon: '🔬',
    features: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation', 'Quantum Machine Learning'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and solutions',
    icon: '☁️',
    features: ['Cloud Migration', 'DevOps Automation', 'Serverless Architecture', 'Multi-Cloud Management'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Advanced security solutions for modern threats',
    icon: '🛡️',
    features: ['Threat Detection', 'Zero Trust Architecture', 'Incident Response', 'Security Audits'],
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Modernize your business with digital solutions',
    icon: '🚀',
    features: ['Process Automation', 'Data Analytics', 'API Integration', 'Legacy Modernization'],
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'consulting',
    title: 'Technology Consulting',
    description: 'Expert guidance for your technology decisions',
    icon: '💡',
    features: ['Strategy Development', 'Technology Assessment', 'Implementation Planning', 'Training & Support'],
    color: 'from-yellow-500 to-orange-600'
  }
];

export const ServicesShowcase = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
            >
              <motion.div
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Selected Service Details */}
        {selectedService && (
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-20 h-20 rounded-lg bg-gradient-to-r ${selectedService.color} flex items-center justify-center text-4xl`}>
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedService.title}
                  </h3>
                  <p className="text-xl text-gray-300">
                    {selectedService.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Why Choose Us</h4>
                <p className="text-gray-300 leading-relaxed">
                  Our team of experts brings years of experience in {selectedService.title.toLowerCase()}. 
                  We combine cutting-edge technology with proven methodologies to deliver exceptional results 
                  that drive real business value.
                </p>
                <motion.button
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
