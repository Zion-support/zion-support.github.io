import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ITServiceRequestHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div variants={itemVariants} className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zion-cyan/20 rounded-lg">
                <Zap className="w-6 h-6 text-zion-cyan" />
              </div>
              <span className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">
                Global IT Services
              </span>
            </div>

            <GradientHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
              24/7 Global IT Onsite Services
            </GradientHeading>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl leading-relaxed">
              Get professional IT technicians anywhere in the world, anytime you need them.
              From emergency repairs to scheduled maintenance, we're there when you need us most.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-200">24/7 Technical Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-200">Certified IT Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-200">Custom Solutions for Your Business</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Service Now
                <MapPin className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🌐</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Website</p>
                  <p className="text-white font-semibold">ziontechgroup.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm mb-4">
                Available 24/7 for emergency support
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-semibold">Online Now</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}