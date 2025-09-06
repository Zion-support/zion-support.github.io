import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Zap, TrendingUp, Shield, Brain, Atom, Rocket } from 'lucide-react';
interface Service {
  id: string,
  name: string,
  tagline: string,
  description: string,
  price?: string | {
    monthly?: number;
    yearly?: number;
    currency?: string;
    trialDays?: number;
    setupTime?: string;
  },
  period?: string;
  pricing?: any;
  features: string[],
  popular?: boolean;
  category?: string;
  icon?: React.ReactNode,
  badge?: string;
  href?: string;
  onClick?: () => void;
}

interface UltraFuturisticServiceCard2026Props {
  service: Service,
  className?: string;
  onClick?: () => void;
}

const UltraFuturisticServiceCard2026: React.FC<UltraFuturisticServiceCard2026Props> = React.memo(({ 
  service, 
  className = '', 
  onClick 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(),
    } else if (service.onClick) {
      service.onClick(),
    }
  },

  const formatPrice = (price: any) => {
    if (typeof price === 'string') return price,
    if (typeof price === 'object' && price.monthly) {
      return `$${price.monthly}/mo`,
    }
    return 'Contact Us',
  },

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {service.icon && (
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                  {service.icon}
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-cyan-400 text-sm font-medium">{service.tagline}</p>
              </div>
            </div>
            
            {service.badge && (
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                {service.badge}
              </span>
            )}
          </div>
          
          {service.popular && (
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Popular</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {service.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-slate-300 text-sm group-hover: text-slate-200 transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {formatPrice(service.price)}
          </div>
          {service.period && (
            <div className="text-slate-400 text-sm">{service.period}</div>
          )}
        </div>

        {/* CTA Button */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <button className="relative w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform group-hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
      
      {/* Enhanced Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/2 group-hover:to-white/5 transition-all duration-500 rounded-2xl"></div>
    </motion.div>
  ),
}),

UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026',

export default UltraFuturisticServiceCard2026,