import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Shield, Globe, CheckCircle, ArrowRight } from 'lucide-react';

export function PageHero() {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified IT professionals with 10+ years experience'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and emergency response'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security protocols and compliance'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Serving clients across 50+ countries worldwide'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-zion-blue to-zion-purple text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm font-medium">Professional IT Services</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                On-Site IT Services
                <span className="block text-zion-cyan">Worldwide</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Professional IT technicians available at your location for immediate technical support, 
                system maintenance, and emergency response. Serving businesses across the globe with 
                local expertise and global standards.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-zion-cyan text-futuristic font-semibold rounded-xl hover:bg-zion-cyan/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Get Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                  View Coverage
                </button>
              </div>
            </motion.div>

            {/* Right Column - Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:border-zion-cyan transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zion-slate-light text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">50+</div>
                <div className="text-zion-slate-light">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-zion-slate-light">Availability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">2-4h</div>
                <div className="text-zion-slate-light">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">1000+</div>
                <div className="text-zion-slate-light">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}