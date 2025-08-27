import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface Service {
  category: string;
  icon: LucideIcon;
  color: string;
  items: string[];
}

interface ServicesOverviewProps {
  services: Service[];
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark/30 to-zion-slate/30 backdrop-blur-xl" role="region" aria-label="Services overview">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-gradient-primary">Technology Solutions</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            From AI-powered automation to cutting-edge cybersecurity, we provide end-to-end solutions that drive innovation and growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              className="group relative"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 overflow-hidden">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Service Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {service.category}
                      </h3>
                      <div className={`w-12 h-1 bg-gradient-to-r ${service.color} rounded-full group-hover:w-16 transition-all duration-300`}></div>
                    </div>
                  </div>
                </div>

                {/* Service Items */}
                <div className="relative z-10">
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        className="flex items-center gap-3 text-zion-slate-light group-hover:text-zion-slate-light/90 transition-colors duration-300"
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full flex-shrink-0`}></div>
                        <span className="text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to={`/services/${service.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`group inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50`}
                    aria-label={`Learn more about ${service.category} services`}
                  >
                    Explore {service.category}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                  </Link>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-20 rounded-bl-2xl group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-zion-slate-light text-sm">
                Let's discuss how we can tailor our services to your specific needs
              </p>
            </div>
            <Link 
              to="/contact"
              className="group btn-primary whitespace-nowrap"
              aria-label="Contact us for custom solutions"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">15+</div>
              <div className="text-zion-slate-light text-sm">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">500+</div>
              <div className="text-zion-slate-light text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
              <div className="text-zion-slate-light text-sm">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;