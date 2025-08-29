import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

interface Service {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  items: string[];
  description?: string;
}

interface ServicesOverviewProps {
  services: Service[];
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-zion-slate-dark/30 via-zion-slate-dark/20 to-zion-slate-dark/30" role="region" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full">
            <Sparkles className="w-4 h-4 text-zion-cyan mr-2" />
            <span className="text-zion-cyan text-sm font-medium">Innovation First</span>
          </div>

          <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Services</span>
          </h2>

          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive innovation and growth across all industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              className="group relative bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/20 overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 via-zion-blue/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Service icon with enhanced styling */}
              <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-zion-cyan/30`}>
                <service.icon className="w-10 h-10 text-white" aria-hidden="true" />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              </div>

              <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                {service.category}
              </h3>

              {service.description && (
                <p className="relative text-zion-slate-light mb-6 leading-relaxed group-hover:text-zion-slate-light/90 transition-colors duration-300">
                  {service.description}
                </p>
              )}

              <ul className="relative space-y-3 mb-6">
                {service.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-center text-zion-slate-light group-hover:text-zion-slate-light/90 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                to={`/services/${service.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-blue hover:to-zion-purple transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/30 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
                aria-label={`Learn more about ${service.category} services`}
              >
                Explore {service.category}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </Link>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-zion-cyan to-zion-blue group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;