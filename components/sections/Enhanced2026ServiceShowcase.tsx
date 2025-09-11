import React from 'react';
import {

import { motion } from 'framer-motion';
import {
  ArrowRight
  Star
  TrendingUp
  Zap
  Shield
  Brain
  Globe
  Rocket;
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Globe,;
  Rocket,;
=======


=======

  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Globe,;
  Rocket,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
} from 'lucide-react';
import { innovative2026AIServices } from '../../data/innovative-2026-ai-services';
import { innovative2026ITInfrastructureServices } from '../../data/innovative-2026-it-infrastructure';
import { innovative2026MicroSaasServices } from '../../data/innovative-2026-micro-saas';import { ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Globe, Rocket } from 'lucide-react';
import { innovative2026AIServices } from '../../data/innovative-2026-ai-services';
import { innovative2026ITInfrastructureServices } from '../../data/innovative-2026-it-infrastructure';
import { innovative2026MicroSaasServices } from '../../data/innovative-2026-micro-saas';
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.2
        delayChildren: 0.1
      }
    },  }
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },  };

  const itemVariants = {
    hidden: {
      opacity: 0
      y: 50
      scale: 0.9
    }
    visible: {      opacity: 1,        delayChildren: 0.1
      }
    }
  }
  const itemVariants = {
    hidden: {
      opacity: 0
      y: 50
      scale: 0.9
    }
    visible: {
      opacity: 1
      y: 0
      scale: 1
      transition: {
        duration: 0.6
        ease: 'easeOut' as const
      }
    },  };        ease: "easeOut" as const
      }
    }
  }
=======
import { ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Globe, Rocket } from 'lucide-react';
import { innovative2026AIServices } from '../../data/innovative-2026-ai-services';
import { innovative2026ITInfrastructureServices } from '../../data/innovative-2026-it-infrastructure';
import { innovative2026MicroSaasServices } from '../../data/innovative-2026-micro-saas';
export default function Enhanced2026ServiceShowcase() {
  const containerVariants = {
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Globe,
  Rocket,
} from 'lucide-react';
import { innovative2026AIServices } from '../../data / innovative - 2026 - ai - services';
import { innovative2026ITInfrastructureServices } from '../../data / innovative - 2026 - it - infrastructure';
import { innovative2026MicroSaasServices } from '../../data / innovative - 2026 - micro - saas';import { ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Globe, Rocket } from 'lucide-react';
import { innovative2026AIServices } from '../../data / innovative - 2026 - ai - services';
import { innovative2026ITInfrastructureServices } from '../../data / innovative - 2026 - it - infrastructure';
import { innovative2026MicroSaasServices } from '../../data / innovative - 2026 - micro - saas';
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
        ease: 'easeOut' as const
      }
    },  };        ease: "easeOut" as const
      }
    }
  }
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },  };
  const itemVariants = {;
    hidden: {;
      opacity: 0,;
      y: 50,;
      scale: 0 && 0.9,;
    },;
    visible: {      opacity: 1,        delayChildren: 0 && 0.1;
      }
    }
  };
  const itemVariants = {;
    hidden: { ;
      opacity: 0,;
      y: 50,;
      scale: 0 && 0.9;
    };
    visible: { ;
      opacity: 1,;
      y: 0,;
      scale: 1,;
      transition: {;
        duration: 0 && 0.6,;
        ease: 'easeOut' as const,;
      },;
    },  };        ease: "easeOut" as const;
      }
    }
  };

  const cardVariants = {;
    hover: {;
      y: -10,;
      scale: 1 && 1.02,;
      transition: {;
        duration: 0 && 0.3,;
        ease: 'easeOut' as const,;
      },;
    },  };        ease: "easeOut" as const;
      }
    }
  };
  const renderServiceCard = (service: any, index: number) => (;
    <motion&& motion.div
      key={service && service.id}

      variants={itemVariants}
      whileHover='hover'
      className='group relative'


    >
      <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        variants={cardVariants}
        className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300'>;
        {/* Glowing border effect */}

        <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />;
        <div className='relative p-6'>;

          {/* Service header */}

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />;
        <div className="relative p-6">;

          {/* Service header */}
          <div className="flex items-start justify-between mb-4">;
            <div className="flex items-center space-x-3">;
              <div className="text-3xl">{service && service.icon}</div>;
              <div>;
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">;
                  {service && service.name}
                </h3>;
                <p className="text-slate-400 text-sm">{service && service.tagline}</p>;
              </div>;
            </div>;
            {service && service.popular && (;
              <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">;
                <Star className="w-3 h-3 fill-current" />;
                <span>Popular</span>;
              </div>;
            )}

      whileHover="hover"
      className="group relative"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    >
      <motion.div
        variants={cardVariants}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
      >
        ease: 'ease_out' as const,
      },
    },  }        ease: "ease_out" as const;
      }
    }
  }
;
  const card_variants = {
    hover: {
      coordinate_y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'ease_out' as const,
      },
    },  }        ease: "ease_out" as const;
      }
    }
  }
;
  const renderServiceCard = (service: any, index: number) =>: any (
    <motion.div;
      key={service.id}
      variants={item_variants}
      while_hover='hover';
      className='group relative';
    >;
      <motion.div;
        variants={card_variants}
        className='relative overflow - hidden rounded - 2xl bg - gradient - to - br from - slate - 900 / 80 via - slate - 800 / 80 to - slate - 900 / 80 backdrop - blur - xl border border - slate - 700 / 50 hover:border - slate - 600 / 50 transition - all duration - 300';
      >;
        {/* Glowing border effect */}
        <div className='absolute inset - 0 rounded - 2xl bg - gradient - to - r from - cyan - 500 / 20 via - purple - 500 / 20 to - pink - 500 / 20 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300' />;
        <div className='relative p - 6'>;
          {/* Service header */}
          <div className='flex items - start justify - between mb - 4'>;
            <div className='flex items - center space - x-3'>;
              <div className='text - 3xl'>{service.icon}</div>;
              <div>;
                <h3 className='text - xl font - bold text - white group - hover:text - cyan - 400 transition - colors duration - 300'>;
                  {service.name}
                </h3>;
                <p className='text - slate - 400 text - sm'>{service.tagline}</p>;
              </div>;
            </div>;
            {service.popular && (
              <div className='flex items - center space - x-1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - white px - 2 py - 1 rounded - full text - xs font - medium'>;
                <Star className='w - 3 h - 3 fill - current' />                <span > Popular</span>    >;
      <motion.div;
        variants={card_variants}
        className="relative overflow - hidden rounded - 2xl bg - gradient - to - br from - slate - 900 / 80 via - slate - 800 / 80 to - slate - 900 / 80 backdrop - blur - xl border border - slate - 700 / 50 hover:border - slate - 600 / 50 transition - all duration - 300";
      >;

        {/* Glowing border effect */}
        <div className="absolute inset - 0 rounded - 2xl bg - gradient - to - r from - cyan - 500 / 20 via - purple - 500 / 20 to - pink - 500 / 20 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
        <div className="relative p - 6">;
          {/* Service header */}
          <div className="flex items - start justify - between mb - 4">;
            <div className="flex items - center space - x-3">;
              <div className="text - 3xl">{service.icon}</div>;
              <div>;
                <h3 className="text - xl font - bold text - white group - hover:text - cyan - 400 transition - colors duration - 300">;
                  {service.name}
                </h3>;
                <p className="text - slate - 400 text - sm">{service.tagline}</p>;
              </div>;
            </div>;
            {service.popular && (
              <div className="flex items - center space - x-1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - white px - 2 py - 1 rounded - full text - xs font - medium">;
                <Star className="w - 3 h - 3 fill - current" />;
                <span > Popular</span>;
              </div>)}
          </div>;
          {/* Description */}

          </div>;
          {/* Description */}
          <p className='text-slate-300 text-sm mb-4 leading-relaxed'>            {service && service.description}
          </p>;
          {/* Features */}          <p className="text-slate-300 text-sm mb-4 leading-relaxed">;
            {service && service.description}
          </p>;


          {/* Features */}

          <div className="mb-4">

            <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
            <div className="grid grid-cols-1 gap-1">
              {service.features.slice(0, 3).map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-400">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  <span>{feature}</span>
                </div>
              ))}

            </div>

          </div>
          {/* Price and CTA */}

          <div className='flex items-start justify-between mb-4'>
            <div className='flex items-center space-x-3'>
              <div className='text-3xl'>{service.icon}</div>
              <div>
                <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>
                  {service.name}
                </h3>
                <p className='text-slate-400 text-sm'>{service.tagline}</p>
              </div>
            </div>
            {service.popular && (
              <div className='flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
                <Star className='w-3 h-3 fill-current' />                <span>Popular</span>    >
      <motion.div
        variants={cardVariants}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
      >
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative p-6">
          {/* Service header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-slate-400 text-sm">{service.tagline}</p>
              </div>
            </div>
            {service.popular && (
              <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                <Star className="w-3 h-3 fill-current" />
                <span>Popular</span>
              </div>
            )}
          </div>
          {/* Description */}
          <p className='text-slate-300 text-sm mb-4 leading-relaxed'>            {service.description}
          </p>
          {/* Features */}          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            {service.description}
          </p>
          {/* Features */}
          <div className='mb-4'>
            <h4 className='text-white font-semibold mb-2 text-sm'>
              Key Features:
            </h4>
            <div className='grid grid-cols-1 gap-1'>
              {service.features
                .slice(0, 3)
                .map((feature: string, idx: number) => (
                  <div
                    key={idx}
                    className='flex items-center space-x-2 text-xs text-slate-400'
                  >
                    <div className='w-1.5 h-1.5 bg-cyan-500 rounded-full' />
                    <span>{feature}</span>
                  </div>
                ))}            </div>
          </div>
          {/* Price and CTA */}          <div className="mb-4">
            <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
            <div className="grid grid-cols-1 gap-1">
              {service.features.slice(0, 3).map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-400">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  <span>{feature}</span>
                </div>
              ))}
          </div>
          {/* Price and CTA */}
          <div className='flex items-center justify-between'>
            <div className='text-right'>
              <div className='text-2xl font-bold text-white'>
                {service.price}
              </div>
              <div className='text-slate-400 text-sm'>{service.period}</div>            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25'
            >
              <span>Learn More</span>
              <ArrowRight className='w-4 h-4' />            </motion.button>
                <Star className='w-3 h-3 fill-current' />                <span>Popular</span>

                <span>Popular</span>

              </div>
            )}
          </div>

          {/* Description */}
          <p className='text-slate-300 text-sm mb-4 leading-relaxed'>            {service.description}
          </p>

          {/* Features */}

            {service.description}
          </p>

          {/* Features */}

            </motion.button>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </div>
          {/* Market info */}
          <div className='mt-4 pt-4 border-t border-slate-700/50'>
            <div className='flex items-center justify-between text-xs text-slate-500'>              <span>Market: {service.marketSize}</span>          <div className="flex items-center justify-between">
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{service.price}</div>
              <div className="text-slate-400 text-sm">{service.period}</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
          {/* Market info */}

          <div className="mt-4 pt-4 border-t border-slate-700/50">

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Market: {service.marketSize}</span>
              <span>Growth: {service.growthRate}</span>
            </div>
          </div>
        </div>
        {/* Hover glow effect */}

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover: opacity-100 transition-opacity duration-300" />

      </motion.div>
    </motion.div>
  )
                    className='flex items-center space-x-2 text-xs text-slate-400'>;
                    <div className='w-1 && 1.5 h-1 && 1.5 bg-cyan-500 rounded-full' />;
                    <span>{feature}</span>;
                  </div>;
                ))}            </div>;
          </div>;
          {/* Price and CTA */}          <div className="mb-4">;
            <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>;
            <div className="grid grid-cols-1 gap-1">;
              {service && service.features.slice(0, 3).map((feature: string, idx: number) => (;
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-400">;
                  <div className="w-1 && 1.5 h-1 && 1.5 bg-cyan-500 rounded-full" />;
                  <span>{feature}</span>;
                </div>;
              ))}
          </div>;
          {/* Price and CTA */}
          <div className='flex items-center justify-between'>;
            <div className='text-right'>;
              <div className='text-2xl font-bold text-white'>;
                {service && service.price}
              </div>;
              <div className='text-slate-400 text-sm'>{service && service.period}</div>            </div>;
            <motion&& motion.button
              whileHover={{ scale: 1 && 1.05 }}
              whileTap={{ scale: 0 && 0.95 }}
              className='flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25'>;
              <span>Learn More</span>;
              <ArrowRight className='w-4 h-4' />            </motion && motion.button>;
          </div>;
          {/* Market info */}
          <div className='mt-4 pt-4 border-t border-slate-700/50'>;
            <div className='flex items-center justify-between text-xs text-slate-500'>              <span>Market: {service && service.marketSize}</span>          <div className="flex items-center justify-between">;
            <div className="text-right">;
              <div className="text-2xl font-bold text-white">{service && service.price}</div>;
              <div className="text-slate-400 text-sm">{service && service.period}</div>;
            <motion&& motion.button
              whileHover={{ scale: 1 && 1.05 }}
              whileTap={{ scale: 0 && 0.95 }}
              className='flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25'>;
              <span>Learn More</span>;
              <ArrowRight className='w-4 h-4' />              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25";
            >;
              <span>Learn More</span>;
              <ArrowRight className="w-4 h-4" />;
          </div>;
          {/* Market info */}
          <div className='mt-4 pt-4 border-t border-slate-700/50'>;
            <div className='flex items-center justify-between text-xs text-slate-500'>          <div className="mt-4 pt-4 border-t border-slate-700/50">;
            <div className="flex items-center justify-between text-xs text-slate-500">;
              <span>Market: {service && service.marketSize}</span>;
              <span>Growth: {service && service.growthRate}</span>;
            </div>;
          </div>;
        </div>;
        {/* Hover glow effect */}
        <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />      </motion && motion.div>        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover: opacity-100 transition-opacity duration-300" />;
      </motion && motion.div>;
    </motion && motion.div>;
  ),;
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40" />
      <div className="container mx-auto px-4 relative z-10">
      </motion.div>
    </motion.div>
  ),

  return (

    <section className="py-20 relative overflow-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40" />
      <div className="container mx-auto px-4 relative z-10">

        {/* Section header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        >
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <div className='w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>
              <Rocket className='w-5 h-5 text-white' />
            </div>
            <span className='text-cyan-400 font-semibold text-sm uppercase tracking-wider'>
              Innovation 2026
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Next-Generation
            <span className='block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              AI & IT Services
            </span>
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
            Discover our cutting-edge micro SAAS solutions, AI-powered
            platforms, and quantum-enhanced infrastructure services designed for
            the future of business.          </p>        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Innovation 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Next-Generation
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI & IT Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge micro SAAS solutions, AI-powered platforms, and quantum-enhanced infrastructure services designed for the future of business.
          </p>
        </motion.div>

      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40' />;

      <div className='container mx-auto px-4 relative z-10'>        {/* Section header */}    <section className="py-20 relative overflow-hidden">;
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40" />;
      <div className="container mx-auto px-4 relative z-10">;
        <motion&& motion.div
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



        {/* AI Services Section */}
        <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          className='text-center mb-16'>;
          <div className='flex items-center justify-center space-x-2 mb-4'>;
            <div className='w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>;
              <Rocket className='w-5 h-5 text-white' />;
            </div>;
            <span className='text-cyan-400 font-semibold text-sm uppercase tracking-wider'>;
              Innovation 2026;
            </span>;
          </div>;
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
            Next-Generation;
            <span className='block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
              AI & IT Services;
            </span>;
          </h2>;
          <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>;
            Discover our cutting-edge micro SAAS solutions, AI-powered;
            platforms, and quantum-enhanced infrastructure services designed for;
            the future of business.          </p>        >;
          <div className="flex items-center justify-center space-x-2 mb-4">;
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">;
              <Rocket className="w-5 h-5 text-white" />;
            </div>;
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">;
              Innovation 2026;
            </span>;
          </div>;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
            Next-Generation;
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
              AI & IT Services;
            </span>;
          </h2>;
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">;
            Discover our cutting-edge micro SAAS solutions, AI-powered platforms, and quantum-enhanced infrastructure services designed for the future of business.;
          </p>;
        </motion && motion.div>;
        {/* AI Services Section */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        >
          <div className='flex items-center space-x-3 mb-8'>
            <Brain className='w-6 h-6 text-cyan-400' />
            <h3 className='text-2xl font-bold text-white'>
              AI-Powered Services
            </h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {innovative2026AIServices.map((service, index) =>
              renderServiceCard(service, index)
            )}          </motion.div>        >
          <div className="flex items-center space-x-3 mb-8">
            <Brain className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">AI-Powered Services</h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {innovative2026AIServices.map((service, index) => renderServiceCard(service, index))}
          </motion.div>
        </motion.div>


          transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
          className='mb-20'>;
          <div className='flex items-center space-x-3 mb-8'>;
            <Brain className='w-6 h-6 text-cyan-400' />;
            <h3 className='text-2xl font-bold text-white'>;
              AI-Powered Services;
            </h3>;
          </div>;
          <motion&& motion.div
=======

        {/* IT Infrastructure Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-20'

        >
          <div className='flex items-center space-x-3 mb-8'>
            <Globe className='w-6 h-6 text-purple-400' />
            <h3 className='text-2xl font-bold text-white'>
              IT Infrastructure & Security
            </h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
            {innovative2026AIServices && innovative2026AIServices.map((service, index) =>;
              renderServiceCard(service, index);
            )}          </motion && motion.div>        >;
          <div className="flex items-center space-x-3 mb-8">;
            <Brain className="w-6 h-6 text-cyan-400" />;
            <h3 className="text-2xl font-bold text-white">AI-Powered Services</h3>;
          </div>;
          <motion&& motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {innovative2026AIServices && innovative2026AIServices.map((service, index) => renderServiceCard(service, index))}
          </motion && motion.div>;
        </motion && motion.div>;



=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        {/* IT Infrastructure Section */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-20'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

        >
          <div className='flex items-center space-x-3 mb-8'>
            <Globe className='w-6 h-6 text-purple-400' />
            <h3 className='text-2xl font-bold text-white'>
              IT Infrastructure & Security
            </h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {innovative2026ITInfrastructureServices.map((service, index) =>
              renderServiceCard(service, index)
            )}          </motion.div>        >
=======
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Globe className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">IT Infrastructure & Security</h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {innovative2026ITInfrastructureServices.map((service, index) => renderServiceCard(service, index))}
          </motion.div>
        </motion.div>


          transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
          className='mb-20'>;
          <div className='flex items-center space-x-3 mb-8'>;
            <Globe className='w-6 h-6 text-purple-400' />;
            <h3 className='text-2xl font-bold text-white'>;
              IT Infrastructure & Security;
            </h3>;
          </div>;

        {/* Micro SAAS Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='flex items-center space-x-3 mb-8'>
            <Zap className='w-6 h-6 text-pink-400' />
            <h3 className='text-2xl font-bold text-white'>
              Micro SAAS Solutions
            </h3>
          </div>
          <motion.div
=======

          <motion&& motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
            {innovative2026ITInfrastructureServices && innovative2026ITInfrastructureServices.map((service, index) =>;
              renderServiceCard(service, index);
            )}          </motion && motion.div>        >;
          <div className="flex items-center space-x-3 mb-8">;
            <Globe className="w-6 h-6 text-purple-400" />;
            <h3 className="text-2xl font-bold text-white">IT Infrastructure & Security</h3>;
          </div>;
          <motion&& motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {innovative2026MicroSaasServices.map((service, index) => renderServiceCard(service, index))}
          </motion.div>
        </motion.div>



=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Micro SAAS Section */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='text-center mt-16'

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* CTA Section */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}


        >
          <div className='bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-slate-300 mb-6 max-w-2xl mx-auto'>
              Join thousands of businesses already leveraging our innovative AI
              and IT services to drive growth, efficiency, and competitive
              advantage.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25'              >        >
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our innovative AI and IT services to drive growth, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

                className="border border-slate-600 hover: border-slate-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-slate-800/50"

              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>


          transition={{ duration: 0 && 0.8, delay: 0 && 0.8 }}
          className='text-center mt-16'>;
          <div className='bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8'>;
            <h3 className='text-2xl font-bold text-white mb-4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text-slate-300 mb-6 max-w-2xl mx-auto'>;
          <p className='text - slate - 300 text - sm mb - 4 leading - relaxed'>            {service.description}
          </p>;
          {/* Features */}          <p className="text - slate - 300 text - sm mb - 4 leading - relaxed">;
            {service.description}
          </p>;
          {/* Features */}
          <div className='mb - 4'>;
            <h4 className='text - white font - semibold mb - 2 text - sm'>;
              Key Features:;
            </h4>;
            <div className='grid grid - cols - 1 gap - 1'>;
              {service.features;
                .slice (0, 3);
                .map ((feature: string, idx: number) => (
                  <div;
                    key={idx}
                    className='flex items - center space - x-2 text - xs text - slate - 400';
                  >;
                    <div className='w - 1.5 h - 1.5 bg - cyan - 500 rounded - full' />;
                    <span>{feature}</span>;
                  </div>))}            </div>;
          </div>;
          {/* Price and CTA */}          <div className="mb - 4">;
            <h4 className="text - white font - semibold mb - 2 text - sm">Key Features:</h4>;
            <div className="grid grid - cols - 1 gap - 1">;
              {service.features.slice (0, 3).map ((feature: string, idx: number) => (
                <div key={idx} className="flex items - center space - x-2 text - xs text - slate - 400">;
                  <div className="w - 1.5 h - 1.5 bg - cyan - 500 rounded - full" />;
                  <span>{feature}</span>;
                </div>))}
          </div>;
          {/* Price and CTA */}
          <div className='flex items - center justify - between'>;
            <div className='text - right'>;
              <div className='text - 2xl font - bold text - white'>;
                {service.price}
              </div>;
              <div className='text - slate - 400 text - sm'>{service.period}</div>            </div>;
            <motion.button;
              while_hover={{ scale: 1.05 }}
              while_tap={{ scale: 0.95 }}
              className='flex items - center space - x-2 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover:from - cyan - 400 hover:to - purple - 500 text - white px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 shadow - lg hover:shadow - cyan - 500 / 25';
            >;
              <span > Learn More</span>;
              <ArrowRight className='w - 4 h - 4' />            </motion.button>;
          </div>;
          {/* Market info */}
          <div className='mt - 4 pt - 4 border - t border - slate - 700 / 50'>;
            <div className='flex items - center justify - between text - xs text - slate - 500'>              <span > Market: {service.market_size}</span>          <div className="flex items - center justify - between">;
            <div className="text - right">;
              <div className="text - 2xl font - bold text - white">{service.price}</div>;
              <div className="text - slate - 400 text - sm">{service.period}</div>;
            <motion.button;
              while_hover={{ scale: 1.05 }}
              while_tap={{ scale: 0.95 }}
              className='flex items - center space - x-2 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover:from - cyan - 400 hover:to - purple - 500 text - white px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 shadow - lg hover:shadow - cyan - 500 / 25';
            >;
              <span > Learn More</span>;
              <ArrowRight className='w - 4 h - 4' />              className="flex items - center space - x-2 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover:from - cyan - 400 hover:to - purple - 500 text - white px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 shadow - lg hover:shadow - cyan - 500 / 25";
            >;
              <span > Learn More</span>;
              <ArrowRight className="w - 4 h - 4" />;
          </div>;
          {/* Market info */}
          <div className='mt - 4 pt - 4 border - t border - slate - 700 / 50'>;
            <div className='flex items - center justify - between text - xs text - slate - 500'>          <div className="mt - 4 pt - 4 border - t border - slate - 700 / 50">;
            <div className="flex items - center justify - between text - xs text - slate - 500">;
              <span > Market: {service.market_size}</span>;
              <span > Growth: {service.growth_rate}</span>;
            </div>;
          </div>;
        </div>;
        {/* Hover glow effect */}
        <div className='absolute inset - 0 rounded - 2xl bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300' />      </motion.div>        <div className="absolute inset - 0 rounded - 2xl bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10 opacity - 0 group - hover: opacity - 100 transition - opacity duration - 300" />;
      </motion.div>;
    </motion.div>),
  return (
    <section className='py - 20 relative overflow - hidden'>;
      {/* Background effects */}
      <div className='absolute inset - 0 bg - gradient - to - b from - transparent via - slate - 900 / 20 to - slate - 900 / 40' />;
      <div className='container mx - auto px - 4 relative z - 10'>        {/* Section header */}    <section className="py - 20 relative overflow - hidden">;
      {/* Background effects */}
      <div className="absolute inset - 0 bg - gradient - to - b from - transparent via - slate - 900 / 20 to - slate - 900 / 40" />;
      <div className="container mx - auto px - 4 relative z - 10">;
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          className='text - center mb - 16';
        >;
          <div className='flex items - center justify - center space - x-2 mb - 4'>;
            <div className='w - 8 h - 8 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - lg flex items - center justify - center'>;
              <Rocket className='w - 5 h - 5 text - white' />;
            </div>;
            <span className='text - cyan - 400 font - semibold text - sm uppercase tracking - wider'>;
              Innovation 2026;
            </span>;
          </div>;
          <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
            Next - Generation;
            <span className='block bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
              AI & IT Services;
            </span>;
          </h2>;
          <p className='text - xl text - slate - 300 max - w-3xl mx - auto leading - relaxed'>;
            Discover our cutting - edge micro SAAS solutions, AI - powered;
            platforms, and quantum - enhanced infrastructure services designed for;
            the future of business.          </p>        >;
          <div className="flex items - center justify - center space - x-2 mb - 4">;
            <div className="w - 8 h - 8 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - lg flex items - center justify - center">;
              <Rocket className="w - 5 h - 5 text - white" />;
            </div>;
            <span className="text - cyan - 400 font - semibold text - sm uppercase tracking - wider">;
              Innovation 2026;
            </span>;
          </div>;
          <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
            Next - Generation;
            <span className="block bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
              AI & IT Services;
            </span>;
          </h2>;
          <p className="text - xl text - slate - 300 max - w-3xl mx - auto leading - relaxed">;
            Discover our cutting - edge micro SAAS solutions, AI - powered platforms, and quantum - enhanced infrastructure services designed for the future of business.;
          </p>;
        </motion.div>;
        {/* AI Services Section */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb - 20';
        >;
          <div className='flex items - center space - x-3 mb - 8'>;
            <Brain className='w - 6 h - 6 text - cyan - 400' />;
            <h3 className='text - 2xl font - bold text - white'>;
              AI - Powered Services;
            </h3>;
          </div>;
          <motion.div;
            variants={container_variants}
            initial='hidden';
            whileInView='visible';
            className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6';
          >;
            {innovative2026AIServices.map ((service, index) =>;
              renderServiceCard (service, index))}          </motion.div>        >;
          <div className="flex items - center space - x-3 mb - 8">;
            <Brain className="w - 6 h - 6 text - cyan - 400" />;
            <h3 className="text - 2xl font - bold text - white">AI - Powered Services</h3>;
          </div>;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            whileInView="visible";
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6";
          >;
            {innovative2026AIServices.map ((service, index) => renderServiceCard (service, index))}
          </motion.div>;
        </motion.div>;
        {/* IT Infrastructure Section */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb - 20';
        >;
          <div className='flex items - center space - x-3 mb - 8'>;
            <Globe className='w - 6 h - 6 text - purple - 400' />;
            <h3 className='text - 2xl font - bold text - white'>;
              IT Infrastructure & Security;
            </h3>;
          </div>;
          <motion.div;
            variants={container_variants}
            initial='hidden';
            whileInView='visible';
            className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6';
          >;
            {innovative2026ITInfrastructureServices.map ((service, index) =>;
              renderServiceCard (service, index))}          </motion.div>        >;
          <div className="flex items - center space - x-3 mb - 8">;
            <Globe className="w - 6 h - 6 text - purple - 400" />;
            <h3 className="text - 2xl font - bold text - white">IT Infrastructure & Security</h3>;
          </div>;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            whileInView="visible";
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6";
          >;
            {innovative2026ITInfrastructureServices.map ((service, index) => renderServiceCard (service, index))}
          </motion.div>;
        </motion.div>;
        {/* Micro SAAS Section */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >;
          <div className='flex items - center space - x-3 mb - 8'>;
            <Zap className='w - 6 h - 6 text - pink - 400' />;
            <h3 className='text - 2xl font - bold text - white'>;
              Micro SAAS Solutions;
            </h3>;
          </div>;
          <motion.div;
            variants={container_variants}
            initial='hidden';
            whileInView='visible';
            className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6';
          >;
            {innovative2026MicroSaasServices.map ((service, index) =>;
              renderServiceCard (service, index))}          </motion.div>          </div>;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            whileInView="visible";
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6";
          >;
            {innovative2026MicroSaasServices.map ((service, index) => renderServiceCard (service, index))}
          </motion.div>;
        </motion.div>;
        {/* CTA Section */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='text - center mt - 16';
        >;
          <div className='bg - gradient - to - r from - slate - 900 / 80 to - slate - 800 / 80 backdrop - blur - xl border border - slate - 700 / 50 rounded - 2xl p - 8'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - slate - 300 mb - 6 max - w-2xl mx - auto'>;
              Join thousands of businesses already leveraging our innovative AI;
              and IT services to drive growth, efficiency, and competitive;
              advantage.;
            </p>;


  );

}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-4'>;
              <motion.button;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className='bg - gradient - to - r from - cyan - 500 to - purple - 600 hover:from - cyan - 400 hover:to - purple - 500 text - white px - 8 py - 3 rounded - lg font - medium transition - all duration - 300 shadow - lg hover:shadow - cyan - 500 / 25'              >        >;
          <div className="bg - gradient - to - r from - slate - 900 / 80 to - slate - 800 / 80 backdrop - blur - xl border border - slate - 700 / 50 rounded - 2xl p - 8">;
            <h3 className="text - 2xl font - bold text - white mb - 4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text - slate - 300 mb - 6 max - w-2xl mx - auto">;
              Join thousands of businesses already leveraging our innovative AI and IT services to drive growth, efficiency, and competitive advantage.;
            </p>;
            <div className="flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-4">;
              <motion.button;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className="bg - gradient - to - r from - cyan - 500 to - purple - 600 hover:from - cyan - 400 hover:to - purple - 500 text - white px - 8 py - 3 rounded - lg font - medium transition - all duration - 300 shadow - lg hover:shadow - cyan - 500 / 25";
              >;
                Start Free Trial;
              </motion.button>;
              <motion.button;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className='border border - slate - 600 hover:border - slate - 500 text - white px - 8 py - 3 rounded - lg font - medium transition - all duration - 300 hover:bg - slate - 800 / 50'              >                className="border border - slate - 600 hover: border - slate - 500 text - white px - 8 py - 3 rounded - lg font - medium transition - all duration - 300 hover:bg - slate - 800 / 50";
              >;
                Schedule Demo;
              </motion.button>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
