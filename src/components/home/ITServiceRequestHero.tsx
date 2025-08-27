import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Clock, Users, Shield, Cloud } from 'lucide-react';

export function ITServiceRequestHero() {
  const serviceFeatures = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified IT professionals"
    },
    {
      icon: Shield,
      title: "Secure Solutions",
      description: "Enterprise-grade security"
    },
    {
      icon: Cloud,
      title: "Cloud Ready",
      description: "Modern cloud infrastructure"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Phone className="w-4 h-4 mr-2" />
              IT Service Request
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Need Immediate IT Support?
              <span className="block text-cyan-400">
                We're Here to Help
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get instant access to our expert IT team for immediate technical support, 
              infrastructure issues, or emergency system maintenance. We provide rapid 
              response times and comprehensive solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Request Support Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/it-onsite-services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                On-Site Services
              </Link>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Service Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-red-500/10 border border-red-500/20 rounded-xl p-6"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">
                    Emergency IT Support
                  </h4>
                  <p className="text-red-300 text-sm">
                    For critical system failures or security incidents, call our emergency hotline 
                    for immediate response within 30 minutes.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}