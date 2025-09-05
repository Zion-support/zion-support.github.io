<<<<<<< HEAD
import React, { useState } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  ArrowRight, ExternalLink, Star, TrendingUp,
  Users, Zap, Shield, Clock, Check, Brain,
  Rocket, Dna, DollarSign, Lock, Globe
} from 'lucide-react',

interface UltraAdvancedServiceCardProps {
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

const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false),
  const [isHovered, setIsHovered] = useState(false),

  const getCategoryIcon = (category: string) => {
<<<<<<< HEAD
    if (category.includes('AI') || category.includes('Machine Learning')) return <Brain className="w-4 h-4" />,
    if (category.includes('Quantum')) return <Zap className="w-4 h-4" />,
    if (category.includes('Space')) return <Rocket className="w-4 h-4" />,
    if (category.includes('Biotech') || category.includes('Healthcare')) return <Dna className="w-4 h-4" />,
    if (category.includes('Finance') || category.includes('Trading')) return <DollarSign className="w-4 h-4" />,
    if (category.includes('Security') || category.includes('Cybersecurity')) return <Lock className="w-4 h-4" />,
    if (category.includes('Internet') || category.includes('Network')) return <Globe className="w-4 h-4" />,
    return <Zap className="w-4 h-4" />
  },
=======
    if (category.includes('AI') || category.includes('Machine Learning')) return <Brain className=&quot;w-4 h-4&quot; />;
    if (category.includes('Quantum')) return <Zap className=&quot;w-4 h-4&quot; />;
    if (category.includes('Space')) return <Rocket className=&quot;w-4 h-4&quot; />;
    if (category.includes('Biotech') || category.includes('Healthcare')) return <Dna className=&quot;w-4 h-4&quot; />;
    if (category.includes('Finance') || category.includes('Trading')) return <DollarSign className=&quot;w-4 h-4&quot; />;
    if (category.includes('Security') || category.includes('Cybersecurity')) return <Lock className=&quot;w-4 h-4&quot; />;
    if (category.includes('Internet') || category.includes('Network')) return <Globe className=&quot;w-4 h-4&quot; />;
    return <Zap className=&quot;w-4 h-4&quot; />;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot; as const
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: &quot;easeOut&quot; as const
      }
=======
import React, {_useState} from 'react';
import {_ArrowRight, _ExternalLink, _Star, _TrendingUp, _Users, _Zap, _Shield, _Clock, _Check, _Brain, _Rocket, _Dna, _DollarSign, _Lock, _Globe} from 'lucide-react';

interface UltraAdvancedServiceCardProps {_service: {
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

const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = (_{_service}) => {_const [isExpanded, _setIsExpanded] = useState(false);
  const [isHovered, _setIsHovered] = useState(false);

  const _getCategoryIcon = (_category: string) => {
    if (category.includes('AI') || category.includes('Machine Learning')) return <Brain className="w-4 h-4" />;
    if (category.includes('Quantum')) return <Zap className="w-4 h-4" />;
    if (category.includes('Space')) return <Rocket className="w-4 h-4" />;
    if (category.includes('Biotech') || category.includes('Healthcare')) return <Dna className="w-4 h-4" />;
    if (category.includes('Finance') || category.includes('Trading')) return <DollarSign className="w-4 h-4" />;
    if (category.includes('Security') || category.includes('Cybersecurity')) return <Lock className="w-4 h-4" />;
    if (category.includes('Internet') || category.includes('Network')) return <Globe className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;};

  const _containerVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.6, _ease: "easeOut" as const}
    },
    hover: {_y: -10, _transition: {
        duration: 0.3, _ease: "easeOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: &quot;auto&quot;,
      transition: {
        duration: 0.5,
        ease: &quot;easeOut&quot; as const
      }
=======
  const _contentVariants = {_hidden: { opacity: 0, _height: 0},
    visible: {_opacity: 1, _height: "auto", _transition: {
        duration: 0.5, _ease: "easeOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  return (
    <motion.div
      className=&quot;relative group&quot;
      variants={containerVariants}
      initial=&quot;hidden&quot;
      animate=&quot;visible&quot;
      whileHover=&quot;hover&quot;
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
=======
  return (_<motion.div
      className="relative group"
      variants={_containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={_() => setIsHovered(true)}
      onHoverEnd={_() => setIsHovered(false)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    >
      {_/* Glow Effect */}
      <div 
        className={_`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-50'}`}
        style={_{
          background: `linear-gradient(135deg, _${service.color})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'}}
      />
      
      {_/* Main Card */}
      <div 
        className={_`relative bg-gradient-to-br ${service.color} p-1 rounded-2xl transition-all duration-500 ${_isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
      >
<<<<<<< HEAD
        <div className=&quot;bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 h-full&quot;>
          {/* Header */}
          <div className=&quot;flex items-start justify-between mb-4&quot;>
            <div className=&quot;flex items-center space-x-3&quot;>
              <div className=&quot;text-3xl&quot;>{service.icon}</div>
              <div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  {getCategoryIcon(service.category)}
                  <span className=&quot;text-xs text-gray-400 uppercase tracking-wider&quot;>
                    {service.category}
                  </span>
                </div>
                <h3 className=&quot;text-xl font-bold text-white mt-1&quot;>{service.name}</h3>
=======
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 h-full">
          {_/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{_service.icon}</div>
              <div>
                <div className="flex items-center space-x-2">
                  {_getCategoryIcon(service.category)}
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    {_service.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">{_service.name}</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
            
            {_service.popular && (
              <motion.div
<<<<<<< HEAD
                className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold&quot;
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
=======
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold"
                animate={{ scale: [1, _1.1, _1]}}
                transition={_{ duration: 2, _repeat: Infinity}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                POPULAR
              </motion.div>
            )}
          </div>

<<<<<<< HEAD
          {/* Tagline */}
          <p className=&quot;text-gray-300 text-sm mb-4 leading-relaxed&quot;>
            {service.tagline}
          </p>

          {/* Price */}
          <div className=&quot;flex items-center justify-between mb-4&quot;>
            <div className=&quot;flex items-baseline space-x-1&quot;>
              <span className=&quot;text-2xl font-bold text-white&quot;>{service.price}</span>
              <span className=&quot;text-gray-400&quot;>{service.period}</span>
            </div>
            
            <div className=&quot;flex items-center space-x-2&quot;>
              <div className=&quot;flex items-center space-x-1&quot;>
                <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                <span className=&quot;text-white text-sm&quot;>{service.rating}</span>
              </div>
              <span className=&quot;text-gray-400 text-sm&quot;>({service.reviews})</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className=&quot;grid grid-cols-2 gap-3 mb-4&quot;>
            <div className=&quot;flex items-center space-x-2 text-sm&quot;>
              <Users className=&quot;w-4 h-4 text-blue-400&quot; />
              <span className=&quot;text-gray-300&quot;>{service.customers.toLocaleString()}+ users</span>
            </div>
            <div className=&quot;flex items-center space-x-2 text-sm&quot;>
              <Clock className=&quot;w-4 h-4 text-green-400&quot; />
              <span className=&quot;text-gray-300&quot;>{service.trialDays} day trial</span>
            </div>
          </div>

          {/* Market Data */}
          <div className=&quot;bg-gray-800/50 rounded-lg p-3 mb-4&quot;>
            <div className=&quot;flex items-center justify-between text-sm&quot;>
              <span className=&quot;text-gray-400&quot;>Market Size:</span>
              <span className=&quot;text-green-400 font-semibold&quot;>{service.marketSize}</span>
            </div>
            <div className=&quot;flex items-center justify-between text-sm mt-1&quot;>
              <span className=&quot;text-gray-400&quot;>Growth Rate:</span>
              <span className=&quot;text-blue-400 font-semibold&quot;>{service.growthRate}</span>
=======
          {_/* Tagline */}
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {_service.tagline}
          </p>

          {_/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-white">{_service.price}</span>
              <span className="text-gray-400">{_service.period}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm">{_service.rating}</span>
              </div>
              <span className="text-gray-400 text-sm">({_service.reviews})</span>
            </div>
          </div>

          {_/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center space-x-2 text-sm">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">{_service.customers.toLocaleString()}+ users</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">{_service.trialDays} day trial</span>
            </div>
          </div>

          {_/* Market Data */}
          <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Market Size:</span>
              <span className="text-green-400 font-semibold">{_service.marketSize}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-400">Growth Rate:</span>
              <span className="text-blue-400 font-semibold">{_service.growthRate}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>

          {_/* Expandable Content */}
          <AnimatePresence>
            {_isExpanded && (
              <motion.div
                variants={contentVariants}
                initial=&quot;hidden&quot;
                animate=&quot;visible&quot;
                exit=&quot;hidden&quot;
                className=&quot;space-y-4&quot;
              >
                {_/* Description */}
                <div>
<<<<<<< HEAD
                  <h4 className=&quot;text-white font-semibold mb-2&quot;>Description</h4>
                  <p className=&quot;text-gray-300 text-sm leading-relaxed&quot;>
                    {service.description}
=======
                  <h4 className="text-white font-semibold mb-2">Description</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {_service.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </p>
                </div>

                {_/* Features */}
                <div>
<<<<<<< HEAD
                  <h4 className=&quot;text-white font-semibold mb-2&quot;>Key Features</h4>
                  <div className=&quot;grid grid-cols-1 gap-2&quot;>
                    {service.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className=&quot;flex items-center space-x-2 text-sm&quot;>
                        <Check className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>{feature}</span>
=======
                  <h4 className="text-white font-semibold mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {_service.features.slice(0, _6).map(_(feature, _index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    ))}
                  </div>
                </div>

<<<<<<< HEAD
                {/* ROI */}
                <div className=&quot;bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3&quot;>
                  <h4 className=&quot;text-white font-semibold mb-2&quot;>ROI Promise</h4>
                  <p className=&quot;text-gray-300 text-sm&quot;>{service.roi}</p>
                </div>

                {/* Contact Info */}
                <div className=&quot;bg-gray-800/50 rounded-lg p-3&quot;>
                  <h4 className=&quot;text-white font-semibold mb-2&quot;>Contact Information</h4>
                  <div className=&quot;space-y-1 text-sm&quot;>
                    <div className=&quot;flex items-center space-x-2&quot;>
                      <span className=&quot;text-gray-400&quot;>Mobile:</span>
                      <span className=&quot;text-white&quot;>{service.contactInfo.mobile}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-2&quot;>
                      <span className=&quot;text-gray-400&quot;>Email:</span>
                      <span className=&quot;text-white&quot;>{service.contactInfo.email}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-2&quot;>
                      <span className=&quot;text-gray-400&quot;>Address:</span>
                      <span className=&quot;text-white text-xs&quot;>{service.contactInfo.address}</span>
=======
                {_/* ROI */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3">
                  <h4 className="text-white font-semibold mb-2">ROI Promise</h4>
                  <p className="text-gray-300 text-sm">{_service.roi}</p>
                </div>

                {_/* Contact Info */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <h4 className="text-white font-semibold mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Mobile:</span>
                      <span className="text-white">{_service.contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">{_service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Address:</span>
                      <span className="text-white text-xs">{_service.contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

<<<<<<< HEAD
          {/* Action Buttons */}
          <div className=&quot;flex space-x-3 mt-6&quot;>
            <motion.button
              className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2&quot;
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(service.link, '_blank')}
=======
          {_/* Action Buttons */}
          <div className="flex space-x-3 mt-6">
            <motion.button
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={_{ scale: 1.02}}
              whileTap={_{ scale: 0.98}}
              onClick={_() => window.open(service.link, _'_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <span>Learn More</span>
              <ExternalLink className=&quot;w-4 h-4&quot; />
            </motion.button>
            
            <motion.button
              className={_`px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                isExpanded 
                  ? 'border-gray-600 text-gray-400' 
                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'}`}
              whileHover={_{ scale: 1.02}}
              whileTap={_{ scale: 0.98}}
              onClick={_() => setIsExpanded(!isExpanded)}
            >
              {_isExpanded ? 'Show Less' : 'Details'}
            </motion.button>
          </div>

          {_/* Expand/Collapse Indicator */}
          <motion.div
<<<<<<< HEAD
            className=&quot;flex justify-center mt-4&quot;
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
=======
            className="flex justify-center mt-4"
            animate={_{ rotate: isExpanded ? 180 : 0}}
            transition={_{ duration: 0.3}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <ArrowRight className=&quot;w-5 h-5 text-gray-400&quot; />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
},

export default UltraAdvancedServiceCard,