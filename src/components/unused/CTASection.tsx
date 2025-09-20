import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RocketLaunchIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

export function CTASection() {
  const ctaOptions = [
    {
      icon: PhoneIcon,
      title: "Call Us",
      description: "Speak directly with our experts",
      action: "+1 302 464 0950",
      href: "tel:+13024640950",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      description: "Send us a detailed message",
      action: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com",
      color: "from-zion-purple to-zion-cyan"
    },
    {
      icon: CalendarIcon,
      title: "Schedule a Call",
      description: "Book a consultation meeting",
      action: "Book Now",
      href: "/contact",
      color: "from-zion-blue to-zion-purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-blue-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-quantum-mesh opacity-30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <RocketLaunchIcon className="w-4 h-4" />
            Ready to Get Started?
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Business
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join hundreds of companies that have already transformed their operations 
            with our cutting-edge technology solutions. Let's discuss how we can help 
            you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/30 flex items-center justify-center gap-2"
            >
              <RocketLaunchIcon className="w-5 h-5" />
              Get Free Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Link to={option.href} className="block">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4">
                    {option.description}
                  </p>
                  
                  {/* Action */}
                  <div className="text-zion-cyan font-semibold group-hover:text-zion-cyan-light transition-colors duration-300">
                    {option.action}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
            <span className="text-zion-slate-light text-sm">
              Response within 2 hours • Free initial consultation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}