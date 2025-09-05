<<<<<<< HEAD
import React from 'react',
import { motion } from 'framer-motion',
import { Star, ExternalLink, ArrowRight, TrendingUp, Users, Clock, Shield, Zap } from 'lucide-react',

interface EnhancedServiceCardProps {
  service: {
    id: string,
    name: string,
    tagline: string,
    price: string,
    period: string,
    description: string,
    features: string[],
    popular: boolean,
    icon: string,
    color: string,
    textColor: string,
    link: string,
    marketPosition: string,
    targetAudience: string,
    trialDays: number,
    setupTime: string,
    category: string,
    realService: boolean,
    technology: string[],
    integrations: string[],
    useCases: string[],
    roi: string,
    competitors: string[],
    marketSize: string,
    growthRate: string,
    variant: string,
    contactInfo: {
      mobile: string,
      email: string,
      address: string,
      website: string
    },
    realImplementation: boolean,
    implementationDetails: string,
    launchDate: string,
    customers: number,
    rating: number,
    reviews: number
  }
}

const EnhancedServiceCard: React.FC<EnhancedServiceCardProps> = ({ service }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot; as const
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: &quot;easeOut&quot; as const
      }
=======
import React from 'react';

interface EnhancedServiceCardProps {_service: {
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
      website: string;};
    realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
  };
}

const EnhancedServiceCard: React.FC<EnhancedServiceCardProps> = (_{_service}) => {_const _cardVariants = {
    hidden: { opacity: 0, _y: 20, _scale: 0.95},
    visible: {_opacity: 1, _y: 0, _scale: 1, _transition: {
        duration: 0.6, _ease: "easeOut" as const}
    },
    hover: {_y: -8, _scale: 1.02, _transition: {
        duration: 0.3, _ease: "easeOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: { 
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: &quot;backOut&quot; as const
      }
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: &quot;easeInOut&quot; as const
      }
=======
  const _iconVariants = {_hidden: { rotate: -180, _scale: 0},
    visible: {_rotate: 0, _scale: 1, _transition: {
        duration: 0.6, _ease: "backOut" as const}
    },
    hover: {_rotate: 360, _scale: 1.1, _transition: {
        duration: 0.6, _ease: "easeInOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  return (
    <motion.div
<<<<<<< HEAD
      className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl&quot;
      variants={cardVariants}
      initial=&quot;hidden&quot;
      whileInView=&quot;visible&quot;
      whileHover=&quot;hover&quot;
      viewport={{ once: true }}
=======
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl"
      variants={_cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    >
      {_/* Background Glow */}
      <div 
        className={_`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        style={_{
          background: `linear-gradient(135deg, _${service.color.replace('from-', _'').replace('to-', _'').split(' ').map(c => `var(--tw-${c.split('-')[0]}-${_c.split('-')[1]})`).join(', ')})`
        }}
      />
      
<<<<<<< HEAD
      {/* Popular Badge */}
      {service.popular && (
        <div className=&quot;absolute top-4 right-4 z-10&quot;>
          <motion.div
            className=&quot;bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1&quot;
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
=======
      {_/* Popular Badge */}
      {_service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
            initial={{ scale: 0, _rotate: -180}}
            animate={_{ scale: 1, _rotate: 0}}
            transition={_{ delay: 0.2, _duration: 0.5}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Star className=&quot;w-3 h-3 fill-current&quot; />
            POPULAR
          </motion.div>
        </div>
      )}

<<<<<<< HEAD
      {/* Card Content */}
      <div className=&quot;relative p-6&quot;>
        {/* Header */}
        <div className=&quot;flex items-start justify-between mb-4&quot;>
          <motion.div
            className={`text-4xl ${service.textColor}`}
            variants={iconVariants}
            initial=&quot;hidden&quot;
            animate=&quot;visible&quot;
            whileHover=&quot;hover&quot;
=======
      {_/* Card Content */}
      <div className="relative p-6">
        {_/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className={_`text-4xl ${service.textColor}`}
            variants={_iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_service.icon}
          </motion.div>
          
<<<<<<< HEAD
          <div className=&quot;text-right&quot;>
            <div className=&quot;text-2xl font-bold text-white&quot;>{service.price}</div>
            <div className=&quot;text-sm text-gray-400&quot;>{service.period}</div>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300&quot;>
          {service.name}
        </h3>
        <p className=&quot;text-gray-300 text-sm mb-4 leading-relaxed&quot;>
          {service.tagline}
        </p>

        {/* Description */}
        <p className=&quot;text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3&quot;>
          {service.description}
        </p>

        {/* Key Metrics */}
        <div className=&quot;grid grid-cols-2 gap-4 mb-6&quot;>
          <div className=&quot;text-center p-3 bg-white/5 rounded-lg border border-white/10&quot;>
            <div className=&quot;text-cyan-400 text-lg font-bold&quot;>{service.customers}+</div>
            <div className=&quot;text-xs text-gray-400&quot;>Customers</div>
          </div>
          <div className=&quot;text-center p-3 bg-white/5 rounded-lg border border-white/10&quot;>
            <div className=&quot;text-purple-400 text-lg font-bold&quot;>{service.rating}</div>
            <div className=&quot;text-xs text-gray-400&quot;>Rating</div>
          </div>
        </div>

        {/* Features Preview */}
        <div className=&quot;mb-6&quot;>
          <h4 className=&quot;text-sm font-semibold text-white mb-3 flex items-center gap-2&quot;>
            <Zap className=&quot;w-4 h-4 text-yellow-400&quot; />
            Key Features
          </h4>
          <div className=&quot;space-y-2&quot;>
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className=&quot;flex items-center gap-2 text-sm text-gray-300&quot;
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className=&quot;w-1.5 h-1.5 bg-cyan-400 rounded-full&quot; />
                {feature}
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className=&quot;text-xs text-gray-500 mt-2&quot;>
=======
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{_service.price}</div>
            <div className="text-sm text-gray-400">{_service.period}</div>
          </div>
        </div>

        {_/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {_service.name}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {_service.tagline}
        </p>

        {_/* Description */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
          {_service.description}
        </p>

        {_/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="text-cyan-400 text-lg font-bold">{_service.customers}+</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="text-purple-400 text-lg font-bold">{_service.rating}</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
        </div>

        {_/* Features Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            Key Features
          </h4>
          <div className="space-y-2">
            {_service.features.slice(0, _3).map(_(feature, _index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-300"
                initial={_{ opacity: 0, _x: -20}}
                animate={_{ opacity: 1, _x: 0}}
                transition={_{ delay: 0.1 * index}}
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                {_feature}
              </motion.div>
            ))}
            {_service.features.length > 3 && (
              <div className="text-xs text-gray-500 mt-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

<<<<<<< HEAD
        {/* Market Info */}
        <div className=&quot;mb-6 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/10&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-xs font-semibold text-white&quot;>Market Size</span>
            <span className=&quot;text-xs text-cyan-400&quot;>{service.marketSize}</span>
          </div>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-xs font-semibold text-white&quot;>Growth Rate</span>
            <span className=&quot;text-xs text-green-400&quot;>{service.growthRate}</span>
          </div>
          <div className=&quot;flex items-center justify-between&quot;>
            <span className=&quot;text-xs font-semibold text-white&quot;>ROI</span>
            <span className=&quot;text-xs text-yellow-400&quot;>{service.roi}</span>
          </div>
        </div>

        {/* Trial & Setup Info */}
        <div className=&quot;flex items-center justify-between mb-6 text-sm&quot;>
          <div className=&quot;flex items-center gap-2 text-gray-400&quot;>
            <Clock className=&quot;w-4 h-4&quot; />
            {service.trialDays} day trial
          </div>
          <div className=&quot;flex items-center gap-2 text-gray-400&quot;>
            <Shield className=&quot;w-4 h-4&quot; />
            {service.setupTime}
          </div>
        </div>

        {/* Action Buttons */}
        <div className=&quot;flex gap-3&quot;>
          <motion.a
            href={service.link}
            className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2&quot;
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
=======
        {_/* Market Info */}
        <div className="mb-6 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">Market Size</span>
            <span className="text-xs text-cyan-400">{_service.marketSize}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">Growth Rate</span>
            <span className="text-xs text-green-400">{_service.growthRate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">ROI</span>
            <span className="text-xs text-yellow-400">{_service.roi}</span>
          </div>
        </div>

        {_/* Trial & Setup Info */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            {_service.trialDays} day trial
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-4 h-4" />
            {_service.setupTime}
          </div>
        </div>

        {_/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={_service.link}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            whileHover={_{ scale: 1.05}}
            whileTap={_{ scale: 0.95}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <ExternalLink className=&quot;w-4 h-4&quot; />
            Learn More
          </motion.a>
          
          <motion.a
<<<<<<< HEAD
            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
            className=&quot;bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center&quot;
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
=======
            href={_`mailto:${service.contactInfo.email}?subject=Inquiry about ${_service.name}`}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center"
            whileHover={_{ scale: 1.05}}
            whileTap={_{ scale: 0.95}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <ArrowRight className=&quot;w-4 h-4&quot; />
          </motion.a>
        </div>

<<<<<<< HEAD
        {/* Contact Info */}
        <div className=&quot;mt-4 pt-4 border-t border-white/10&quot;>
          <div className=&quot;text-xs text-gray-500 text-center&quot;>
            Contact: {service.contactInfo.email}
=======
        {_/* Contact Info */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-xs text-gray-500 text-center">
            Contact: {_service.contactInfo.email}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Hover Effect Border */}
<<<<<<< HEAD
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover: opacity-100 transition-opacity duration-500" />
=======
      <div className=&quot;absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      {_/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </motion.div>
  )
},

export default EnhancedServiceCard,