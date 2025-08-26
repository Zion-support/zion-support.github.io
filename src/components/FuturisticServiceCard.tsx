import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Zap, Users, TrendingUp } from 'lucide-react';

interface FuturisticServiceCardProps {
  service: {
    id: string;
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;
    color: string;
    textColor: string;
    link: string;
    marketPosition: string;
    targetAudience: string;
    trialDays: number;
    setupTime: string;
    category: string;
    realService: boolean;
    technology: string[];
    integrations: string[];
    useCases: string[];
    roi: string;
    competitors: string[];
    marketSize: string;
    growthRate: string;
    variant: string;
    contactInfo: {
      mobile: string;
      email: string;
      address: string;
      website: string;
    };
    realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
  };
  className?: string;
}

export const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  service,
  className = ''
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      opacity: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 via-zion-slate/60 to-zion-slate-light/40 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Neon glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
        variants={glowVariants}
      />
      
      {/* Popular badge */}
      {service.popular && (
        <motion.div
          className="absolute top-4 right-4 z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full text-xs font-semibold text-white shadow-lg shadow-zion-cyan/25">
            <Star className="w-3 h-3 fill-current" />
            Popular
          </div>
        </motion.div>
      )}

      {/* Card content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className={`text-4xl ${service.textColor}`}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {service.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-zion-cyan transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-zion-slate-light text-sm font-medium">
                {service.category}
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
          {service.tagline}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            {service.price}
          </span>
          <span className="text-zion-slate-light text-lg">
            {service.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-zion-slate-light text-sm mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Key features */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-zion-cyan" />
            Key Features
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-zion-slate-light text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full" />
                {feature}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-zion-slate-dark/40 rounded-xl border border-zion-slate-light/10">
          <div className="text-center">
            <div className="text-zion-cyan font-bold text-lg">{service.customers.toLocaleString()}+</div>
            <div className="text-zion-slate-light text-xs">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-zion-purple font-bold text-lg">{service.rating}</div>
            <div className="text-zion-slate-light text-xs">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-zion-cyan font-bold text-lg">{service.trialDays}</div>
            <div className="text-zion-slate-light text-xs">Days Trial</div>
          </div>
        </div>

        {/* Market info */}
        <div className="mb-6 p-4 bg-gradient-to-r from-zion-slate-dark/40 to-zion-slate/40 rounded-xl border border-zion-slate-light/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-zion-slate-light text-sm font-medium">Market Size</span>
            <span className="text-zion-cyan text-sm font-semibold">{service.marketSize}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zion-slate-light text-sm font-medium">Growth Rate</span>
            <span className="text-zion-purple text-sm font-semibold">{service.growthRate}</span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25 hover:shadow-zion-purple/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get Started</span>
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
        </motion.a>

        {/* Trial info */}
        <div className="mt-4 text-center">
          <p className="text-zion-slate-light text-xs">
            {service.trialDays}-day free trial • Setup in {service.setupTime}
          </p>
        </div>
      </div>

      {/* Hover overlay effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-zion-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-zion-cyan/20 to-transparent rounded-bl-full" />
    </motion.div>
  );
};