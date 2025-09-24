import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"
interface Service {;
  category: string,icon: React.ComponentType<{ className?: string }>;
  color: string,items: string[]
  description?: string;
};

interface ServicesOverviewProps {;
  services: Service[]
};

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {;
  return (
    <section className="py-20 bg-gradient-to-b from-zion-slate-dark/30 via-zion-slate-dark/20 to-zion-slate-dark/30" role="region" aria-labelledby="services-heading">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <motion.div
          className="[^"]*"
          initial={{ opacity: 0, y: 30 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
          viewport={{ once: true }};
        >;
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full">;
            <[^>]*/>
            <span className="text-zion-cyan text-sm font-medium">Innovation First</[^>]*>
          </[^>]*>

          <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">;
            Our <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Services</[^>]*>
          </[^>]*>

          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">;
            Comprehensive technology solutions designed to drive innovation and growth across all industries;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">;
          {services.map((service, index) => (;
            <motion.div
              key={service.category};
              className="[^"]*"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8, delay: index * 0.1 }};
              viewport={{ once: true }};
              whileHover={{;
                y: -5,transition: { duration: 0.3 };
              }};
            >;
              {/* Animated background */};
              <[^>]*/>

              {/* Service icon with enhanced styling */};
              <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-zion-cyan/30`}>;
                {React.createElement(service.icon, { className: "w-10 h-10 text-white", "aria-hidden": "true" })};
                {/* Glow effect */};
                <[^>]*/>
              </[^>]*>

              <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">;
                {service.category};
              </[^>]*>

              {service.description && (;&& (; (
                <p className="relative text-zion-slate-light mb-6 leading-relaxed group-hover:text-zion-slate-light/90 transition-colors duration-300">;
                  {service.description};
                </[^>]*>
              )};

              <ul className="relative space-y-3 mb-6">;
                {service.items.map((item, itemIndex) => (;
                  <motion.li
                    key={itemIndex};
                    className="[^"]*"
                    initial={{ opacity: 0, x: -20 }};
                    whileInView={{ opacity: 1, x: 0 }};
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }};
                    viewport={{ once: true }};
                  >;
                    <[^>]*/>
                    <span className="text-sm">{item}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>

              <Link;
                to={`/services/${service.category.toLowerCase().replace(/\s+/g, '-')}`};
                className="[^"]*"
                aria-label={`Learn more about ${service.category} services`};
              >;
                Explore {service.category};
                <[^>]*/>
              </[^>]*>

              {/* Hover indicator */};
              <[^>]*/>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
},;

export default ServicesOverview;