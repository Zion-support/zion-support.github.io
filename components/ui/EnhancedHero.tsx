import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Shield, Zap, Users } from 'lucide-react';

interface EnhancedHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  secondaryCTA?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  stats?: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
    color?: string;
  }>;
  background?: 'gradient' | 'particles' | 'video' | 'image';
  className?: string;
}

export default function EnhancedHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  background = 'gradient',
  className = ''
}: EnhancedHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const getBackgroundClasses = () => {
    switch (background) {
      case 'gradient':
        return 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900';
      case 'particles':
        return 'bg-gray-900';
      case 'video':
        return 'bg-gray-900';
      case 'image':
        return 'bg-gray-900';
      default:
        return 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900';
    }
  };

  const getButtonClasses = (variant: string) => {
    const base = 'inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50';
    
    switch (variant) {
      case 'primary':
        return `${base} bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl`;
      case 'secondary':
        return `${base} bg-white hover:bg-gray-100 text-gray-900 shadow-lg hover:shadow-xl`;
      case 'outline':
        return `${base} border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white`;
      default:
        return `${base} bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl`;
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${getBackgroundClasses()} ${className}`}>
      {/* Background Elements */}
      {background === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
      )}
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-300 text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              {subtitle}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href={primaryCTA.href} className={getButtonClasses(primaryCTA.variant || 'primary')}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            
            {secondaryCTA && (
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link href={secondaryCTA.href} className={getButtonClasses(secondaryCTA.variant || 'outline')}>
                  {secondaryCTA.text}
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Stats */}
          {stats && (
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    {stat.icon && <span className="mr-2">{stat.icon}</span>}
                    <div className={`text-3xl font-bold ${stat.color || 'text-blue-400'}`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}