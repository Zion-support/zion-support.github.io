import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  SparklesIcon, 
  BoltIcon, 
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export function FeatureCTAs() {
  const features = [
    {
      id: 1,
      title: "AI-Powered Innovation",
      description: "Leverage cutting-edge artificial intelligence to automate processes, gain insights, and create competitive advantages.",
      icon: SparklesIcon,
      ctaText: "Explore AI Solutions",
      ctaPath: "/services",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-600/20 to-cyan-600/20"
    },
    {
      id: 2,
      title: "Lightning-Fast Performance",
      description: "Optimize your applications and infrastructure for maximum speed and efficiency with our performance engineering expertise.",
      icon: BoltIcon,
      ctaText: "Boost Performance",
      ctaPath: "/services",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-600/20 to-orange-600/20"
    },
    {
      id: 3,
      title: "Global Scale & Reach",
      description: "Deploy your solutions worldwide with our global infrastructure and multi-region deployment capabilities.",
      icon: GlobeAltIcon,
      ctaText: "Scale Globally",
      ctaPath: "/services",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-600/20 to-emerald-600/20"
    },
    {
      id: 4,
      title: "Expert Team Support",
      description: "Access our world-class team of engineers, architects, and consultants for personalized guidance and support.",
      icon: UserGroupIcon,
      ctaText: "Meet Our Team",
      ctaPath: "/about",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-600/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions that transform businesses
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${feature.bgColor} border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* CTA Button */}
              <Link
                to={feature.ctaPath}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${feature.color} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-${feature.color.split('-')[1]}/25 transition-all duration-300 group`}
              >
                {feature.ctaText}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help you achieve your technology goals and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}