import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface Service {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  items: string[];
}

interface ServicesOverviewProps {
  services: Service[];
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {
  return (
    <section className="py-20 bg-zion-slate-dark/30" role="region" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.category}</h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to={`/services/${service.category.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center mt-6 text-zion-cyan hover:text-zion-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 rounded"
                aria-label={`Learn more about ${service.category} services`}
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;