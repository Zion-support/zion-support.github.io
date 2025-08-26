import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  ServerIcon,
  CogIcon
} from '@heroicons/react/24/outline';
export function ITServiceRequestHero() {
  const services = [
    {
      id: 1,
      title: "On-Site Support",
      description: "Expert technicians at your location",
      icon: WrenchScrewdriverIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Remote Assistance",
      description: "24/7 remote technical support",
      icon: ComputerDesktopIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Infrastructure Setup",
      description: "Complete IT infrastructure deployment",
      icon: ServerIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "System Maintenance",
      description: "Proactive maintenance and optimization",
      icon: CogIcon,
      color: "from-orange-500 to-red-500"
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
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                IT Services
              </span>
              When You Need Them
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get immediate access to certified IT professionals for on-site support, remote assistance,
              and comprehensive infrastructure solutions. Available 24/7 for emergency situations.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/it-onsite-services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Request On-Site Service
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 text-center"
              >
                Get Emergency Support
              </Link>
            </div>
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Available 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Certified Technicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Same Day Response</span>
              </div>
            </div>
          </motion.div>
          {/* Right Content - Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">15min</div>
              <div className="text-slate-300 text-sm">Average Response Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-slate-300 text-sm">Service Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-slate-300 text-sm">IT Professionals</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-slate-300 text-sm">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}