import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ServicesShowcase({ 
  title = "Our Services",
  subtitle = "Comprehensive technology solutions designed to drive innovation and growth in your organization",
  services,
  className = "",
  showFeatures = true,
  showCTA = true
}) {
  return (
    <section className={`py-16 bg-zion-blue-dark ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Service Icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Service Features */}
              {showFeatures && service.features && (
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-zion-cyan font-medium group-hover:gap-3 transition-all duration-300">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        {showCTA && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors flex items-center gap-2 mx-auto">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
