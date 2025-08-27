import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Cloud, Zap, Users, Globe, Server, Lock, ArrowRight } from 'lucide-react';

export function FeatureHighlights() {
  const features = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions that drive innovation and automation",
      color: "from-purple-500 to-pink-500",
      link: "/services/ai"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions to protect your digital assets",
      color: "from-red-500 to-orange-500",
      link: "/services/cybersecurity"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services for modern business needs",
      color: "from-blue-500 to-cyan-500",
      link: "/services/cloud"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end business transformation services for the digital age",
      color: "from-yellow-500 to-orange-500",
      link: "/services/digital-transformation"
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting and planning for business growth",
      color: "from-green-500 to-teal-500",
      link: "/services/consulting"
    },
    {
      icon: Globe,
      title: "Global Solutions",
      description: "Worldwide technology deployment and support services",
      color: "from-indigo-500 to-purple-500",
      link: "/services/global"
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
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/70">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how our innovative technology solutions can drive growth and competitive advantage for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}