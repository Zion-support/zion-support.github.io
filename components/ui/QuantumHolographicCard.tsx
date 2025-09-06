import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Star,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Check,
  Users,
  Clock,
  DollarSign,;
} from 'lucide-react';
<<<<<<< HEAD
=======
=======
import { Star, Zap, Shield, TrendingUp, ArrowRight, ExternalLink, Check, Users, Clock, DollarSign } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface QuantumHolographicCardProps {
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

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps> = ({
  service,
  className = '',
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
<<<<<<< HEAD
    visible: {      opacity: 1,
=======
<<<<<<< HEAD
    visible: {
=======
import { Star, Zap, Shield, TrendingUp, ArrowRight, ExternalLink, Check, Users, Clock, DollarSign } from 'lucide-react';

interface QuantumHolographicCardProps {
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
  };
  className?: string
}

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps> = ({ service, className = '' }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    visible: { 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      opacity: 1,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
<<<<<<< HEAD
        ease: 'easeOut' as const,
      },
    },    hover: {
=======
<<<<<<< HEAD
<<<<<<< HEAD
        ease: 'easeOut' as const,
      },
    },
=======
        ease: "easeOut" as const
      }
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        ease: "easeOut" as const
      }
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    hover: {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
<<<<<<< HEAD
        ease: 'easeInOut' as const,
      },
    },  };
=======
<<<<<<< HEAD
<<<<<<< HEAD
        ease: 'easeInOut' as const,
      },
    },
=======
        ease: "easeInOut" as const
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        ease: "easeInOut" as const
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
<<<<<<< HEAD
    },  };
=======
    },
=======
      opacity: [0.5, 1, 0.5];
      scale: [1, 1.05, 1];
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      opacity: [0.5, 1, 0.5];
      scale: [1, 1.05, 1];
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
<<<<<<< HEAD
        ease: 'easeOut' as const,
      },
    }),
=======
<<<<<<< HEAD
<<<<<<< HEAD
        ease: 'easeOut' as const,
      },
    }),
=======
        ease: "easeOut" as const
      }
    })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  
    >
      {/* Holographic glow effect */}
      <motion.div
        className='absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl'
        variants={glowVariants}
        initial='initial'
        animate='animate'
      />

      {/* Main card */}
      <div className='relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 overflow-hidden'>
        {/* Quantum particle effect background */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse' />
          <div className='absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping' />
          <div className='absolute bottom-6 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce' />
          <div className='absolute bottom-8 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse' />
        </div>

        {/* Header */}
        <div className='relative z-10'>
          <div className='flex items-start justify-between mb-4'>
            <div className='flex items-center space-x-3'>
              <div className='text-4xl'>{service.icon}</div>
              <div>
                <h3 className='text-xl font-bold text-white mb-1'>
                  {service.name}
                </h3>
                <p className='text-gray-300 text-sm'>{service.tagline}</p>
              </div>
            </div>

            {service.popular && (
              <motion.div
                className='flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
<<<<<<< HEAD
                <Star className='w-3 h-3 fill-current' />                <span>Popular</span>
=======
<<<<<<< HEAD
                <Star className='w-3 h-3 fill-current' />
=======
        ease: "easeOut" as const
      }
    })
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Holographic glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      
      {/* Main card */}
      <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 overflow-hidden">
        {/* Quantum particle effect background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
          <div className="absolute bottom-8 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
        </div>

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.tagline}</p>
              </div>
            </div>
            
            {service.popular && (
              <motion.div
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-3 h-3 fill-current" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Star className="w-3 h-3 fill-current" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <span>Popular</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </motion.div>
            )}
          </div>

          {/* Price and trial */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center space-x-2'>
              <span className='text-3xl font-bold text-white'>
                {service.price}
              </span>
              <span className='text-gray-400'>{service.period}</span>
            </div>
            <div className='flex items-center space-x-2 text-sm text-gray-300'>
<<<<<<< HEAD
              <Clock className='w-4 h-4' />              <span>{service.trialDays} days free</span>
=======
              <Clock className='w-4 h-4' />
=======
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-white">{service.price}</span>
              <span className="text-gray-400">{service.period}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Clock className="w-4 h-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-white">{service.price}</span>
              <span className="text-gray-400">{service.period}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Clock className="w-4 h-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <span>{service.trialDays} days free</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          </div>

          {/* Description */}
<<<<<<< HEAD
          <p className='text-gray-300 mb-6 leading-relaxed'>
            {service.description}
          </p>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <p className='text-gray-300 mb-6 leading-relaxed'>
            {service.description}
          </p>
=======
          <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

          {/* Key metrics */}
          <div className='grid grid-cols-2 gap-4 mb-6'>
            <div className='bg-gray-800/50 rounded-lg p-3 border border-gray-700/50'>
              <div className='flex items-center space-x-2 text-sm text-gray-400 mb-1'>
                <Users className='w-4 h-4' />
                <span>Customers</span>
              </div>
              <div className='text-xl font-bold text-white'>
                {service.customers.toLocaleString()}+
              </div>
            </div>

            <div className='bg-gray-800/50 rounded-lg p-3 border border-gray-700/50'>
              <div className='flex items-center space-x-2 text-sm text-gray-400 mb-1'>
                <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                <span>Rating</span>
              </div>
<<<<<<< HEAD
              <div className='text-xl font-bold text-white'>
                {service.rating}/5.0
              </div>            </div>
          </div>

          {/* Features */}
          <div className='mb-6'>
            <h4 className='text-white font-semibold mb-3 flex items-center space-x-2'>
              <Zap className='w-4 h-4 text-yellow-400' />
=======
<<<<<<< HEAD
              <div className='text-xl font-bold text-white'>
                {service.rating}/5.0
              </div>
=======
          <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                <Users className="w-4 h-4" />
                <span>Customers</span>
              </div>
              <div className="text-xl font-bold text-white">{service.customers.toLocaleString()}+</div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>Rating</span>
              </div>
              <div className="text-xl font-bold text-white">{service.rating}/5.0</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="text-xl font-bold text-white">{service.rating}/5.0</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
          </div>

          {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='mb-6'>
            <h4 className='text-white font-semibold mb-3 flex items-center space-x-2'>
              <Zap className='w-4 h-4 text-yellow-400' />
=======
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <span>Key Features</span>
            </h4>
            <div className='space-y-2'>
              {service.features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  className='flex items-center space-x-2 text-sm text-gray-300'
                  custom={index}
                  variants={featureVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                >
<<<<<<< HEAD
                  <Check className='w-3 h-3 text-green-400 flex-shrink-0' />                  <span>{feature}</span>
=======
<<<<<<< HEAD
                  <Check className='w-3 h-3 text-green-400 flex-shrink-0' />
=======
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Key Features</span>
            </h4>
            <div className="space-y-2">
              {service.features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-sm text-gray-300"
                  custom={index}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <span>{feature}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </motion.div>
              ))}
            </div>
          </div>

          {/* Market data */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-semibold text-blue-300'>
                Market Position
              </span>
              <TrendingUp className='w-4 h-4 text-green-400' />
            </div>
            <p className='text-xs text-gray-300 leading-relaxed'>
              {service.marketPosition}
            </p>
            <div className='flex items-center justify-between mt-2 text-xs'>
              <span className='text-cyan-300'>{service.marketSize}</span>
              <span className='text-green-300'>
                {service.growthRate} growth
<<<<<<< HEAD
              </span>            </div>
          </div>

          {/* ROI and competitors */}
=======
              </span>
=======
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-blue-300">Market Position</span>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
=======
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-blue-300">Market Position</span>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <p className="text-xs text-gray-300 leading-relaxed">{service.marketPosition}</p>
            <div className="flex items-center justify-between mt-2 text-xs">
              <span className="text-cyan-300">{service.marketSize}</span>
              <span className="text-green-300">{service.growthRate} growth</span>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
          </div>

          {/* ROI and competitors */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='grid grid-cols-2 gap-4 mb-6'>
            <div className='bg-green-900/20 rounded-lg p-3 border border-green-700/30'>
              <div className='text-sm font-semibold text-green-300 mb-1'>
                ROI
              </div>
              <div className='text-xs text-gray-300'>{service.roi}</div>
            </div>

            <div className='bg-orange-900/20 rounded-lg p-3 border border-orange-700/30'>
              <div className='text-sm font-semibold text-orange-300 mb-1'>
                Competitors
              </div>
<<<<<<< HEAD
              <div className='text-xs text-gray-300'>                {service.competitors.slice(0, 2).join(', ')}
=======
              <div className='text-xs text-gray-300'>
=======
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-900/20 rounded-lg p-3 border border-green-700/30">
              <div className="text-sm font-semibold text-green-300 mb-1">ROI</div>
              <div className="text-xs text-gray-300">{service.roi}</div>
            </div>
=======
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-900/20 rounded-lg p-3 border border-green-700/30">
              <div className="text-sm font-semibold text-green-300 mb-1">ROI</div>
              <div className="text-xs text-gray-300">{service.roi}</div>
            </div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            
            <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">
              <div className="text-sm font-semibold text-orange-300 mb-1">Competitors</div>
              <div className="text-xs text-gray-300">
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {service.competitors.slice(0, 2).join(', ')}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </div>
          </div>

          {/* Contact information */}
<<<<<<< HEAD
          <div className='bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50'>
            <h4 className='text-white font-semibold mb-3 flex items-center space-x-2'>
              <Shield className='w-4 h-4 text-blue-400' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50'>
            <h4 className='text-white font-semibold mb-3 flex items-center space-x-2'>
              <Shield className='w-4 h-4 text-blue-400' />
=======
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50">
            <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <span>Contact & Support</span>
            </h4>
            <div className='space-y-2 text-sm text-gray-300'>
              <div className='flex items-center space-x-2'>
                <span className='text-blue-400'>📱</span>
                <span>{service.contactInfo.mobile}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-green-400'>✉️</span>
                <span>{service.contactInfo.email}</span>
              </div>
<<<<<<< HEAD
              <div className='flex items-center space-x-2'>
                <span className='text-purple-400'>📍</span>
                <span className='text-xs'>{service.contactInfo.address}</span>              </div>
=======
<<<<<<< HEAD
              <div className='flex items-center space-x-2'>
                <span className='text-purple-400'>📍</span>
                <span className='text-xs'>{service.contactInfo.address}</span>
=======
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50">
            <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Contact & Support</span>
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">📱</span>
                <span>{service.contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✉️</span>
                <span>{service.contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">📍</span>
                <span className="text-xs">{service.contactInfo.address}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">📍</span>
                <span className="text-xs">{service.contactInfo.address}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href={service.link}
<<<<<<< HEAD
            className='group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25'
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25'
=======
            className="group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className='mr-2'>Get Started</span>
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />

            {/* Button glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300' />
          </motion.a>

          {/* Learn more link */}
          <div className='text-center mt-4'>
            <a
              href={service.link}
              className='inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300'
            >
              <span>Learn more about {service.name}</span>
<<<<<<< HEAD
              <ExternalLink className='w-3 h-3' />            </a>
=======
<<<<<<< HEAD
              <ExternalLink className='w-3 h-3' />
=======
            className="group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-2">Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
          </motion.a>

          {/* Learn more link */}
          <div className="text-center mt-4">
            <a
              href={service.link}
              className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <span>Learn more about {service.name}</span>
              <ExternalLink className="w-3 h-3" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <ExternalLink className="w-3 h-3" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </a>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        </div>
      </div>
    </motion.div>
<<<<<<< HEAD
  );
};

export default QuantumHolographicCard;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default QuantumHolographicCard;
=======
  )
};

export default QuantumHolographicCard;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default QuantumHolographicCard;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
