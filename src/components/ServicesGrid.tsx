import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Clock, Users, TrendingUp } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: any;
  href: string;
  features: string[];
  color: string;
  badge?: string;
}

interface ServicesGridProps {
  services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Popular':
        return 'from-orange-500 to-red-500';
      case 'Innovation':
        return 'from-purple-500 to-pink-500';
      case 'Secure':
        return 'from-green-500 to-emerald-500';
      case 'Essential':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'Popular':
        return <Star className="w-3 h-3" />;
      case 'Innovation':
        return <TrendingUp className="w-3 h-3" />;
      case 'Secure':
        return <CheckCircle className="w-3 h-3" />;
      case 'Essential':
        return <Users className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className="group relative"
        >
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
            {/* Badge */}
            {service.badge && (
              <div className={`absolute -top-3 left-8 bg-gradient-to-r ${getBadgeColor(service.badge)} text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg`}>
                {getBadgeIcon(service.badge)}
                <span>{service.badge}</span>
              </div>
            )}

            {/* Icon */}
            <div className="relative mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`absolute -inset-2 bg-gradient-to-r ${service.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <Link
                to={service.href}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200 group/link"
                aria-label={`Learn more about ${service.title}`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">Starting from</div>
                <div className="text-lg font-bold text-white">Custom Quote</div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesGrid;