import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    category: string[];
    features: string[];
    pricing?: string;
    rating?: number;
    icon?: string;
    href?: string;
    isPopular?: boolean;
    isNew?: boolean;
  };
  index: number;
  isReducedMotion?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isReducedMotion = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!isReducedMotion) {
      setIsHovered(true);
    }
  }, [isReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    if (!isReducedMotion) {
      setIsHovered(false);
    }
  }, [isReducedMotion]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const getCategoryColor = useCallback((category: string) => {
    const colors: Record<string, string> = {
      'AI': 'from-purple-400 to-pink-500',
      'Quantum': 'from-cyan-400 to-blue-500',
      'IT': 'from-emerald-400 to-teal-500',
      'Micro SAAS': 'from-orange-400 to-red-500',
      'Cybersecurity': 'from-red-400 to-pink-500',
      'Space': 'from-indigo-400 to-purple-500',
      'Blockchain': 'from-yellow-400 to-orange-500'
    };
    return colors[category] || 'from-gray-400 to-gray-500';
  }, []);

  const getIcon = useCallback((category: string) => {
    const icons: Record<string, React.ReactNode> = {
      'AI': <Brain className="w-6 h-6" />,
      'Quantum': <Zap className="w-6 h-6" />,
      'IT': <Shield className="w-6 h-6" />,
      'Micro SAAS': <Rocket className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Space': <Rocket className="w-6 h-6" />,
      'Blockchain': <Zap className="w-6 h-6" />
    };
    return icons[category] || <Star className="w-6 h-6" />;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: isReducedMotion ? 0.1 : 0.5, 
        delay: isReducedMotion ? 0 : index * 0.1 
      }}
      whileHover={!isReducedMotion ? { y: -5 } : {}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
      role="article"
      aria-labelledby={`service-${service.id}-title`}
      aria-describedby={`service-${service.id}-description`}
    >
      {/* Popular/New Badge */}
      {(service.isPopular || service.isNew) && (
        <div className="absolute -top-3 left-6">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            service.isPopular 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' 
              : 'bg-gradient-to-r from-green-400 to-emerald-500 text-black'
          }`}>
            {service.isPopular ? 'Popular' : 'New'}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category[0])} text-white`}>
            {getIcon(service.category[0])}
          </div>
          <div>
            <h3 
              id={`service-${service.id}-title`}
              className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
            >
              {service.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              {service.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">{service.rating}</span>
                </div>
              )}
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">{service.category[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p 
        id={`service-${service.id}-description`}
        className="text-gray-300 mb-4 line-clamp-3"
      >
        {service.description}
      </p>

      {/* Service Features */}
      <div className="space-y-2 mb-6">
        {service.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      {/* Service Price */}
      <div className="mb-6">
        <span className="text-2xl font-bold text-cyan-400">
          {service.price}
        </span>
      </div>

      {/* CTA Button */}
      <Link 
        href={service.link}
        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-400/25"
      >
        Learn More
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;