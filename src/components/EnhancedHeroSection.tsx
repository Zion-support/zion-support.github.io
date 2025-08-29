import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  TrendingUp, 
  Shield,
  Zap,
  Brain,
  Globe
} from 'lucide-react';
import { ModernButton } from './ui/ModernButton';
import { ModernCard } from './ui/ModernCard';

const stats = [
  { label: 'Global Clients', value: '500+', icon: Users, color: 'from-blue-500 to-cyan-500' },
  { label: 'Success Rate', value: '98%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
  { label: 'AI Solutions', value: '50+', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { label: 'Countries', value: '25+', icon: Globe, color: 'from-orange-500 to-red-500' }
];

const features = [
  {
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence for modern businesses',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Global Expertise',
    description: 'Worldwide presence with local market knowledge',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Innovation First',
    description: 'Pioneering the future of technology',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  }
];

export const EnhancedHeroSection: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-futuristic">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-zion-cyan/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-zion-purple/20 to-transparent rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-zion-blue/20 to-transparent rounded-full blur-3xl animate-float" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4" />
              Leading AI Technology Solutions
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                AI-Powered
              </span>{' '}
              Solutions
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Zion Tech Group delivers cutting-edge artificial intelligence, cloud solutions, and digital transformation services to help businesses thrive in the digital age.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <ModernButton
                size="lg"
                onClick={() => window.location.href = '/services'}
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Explore Services
              </ModernButton>
              
              <ModernButton
                variant="outline"
                size="lg"
                onClick={() => setIsVideoPlaying(true)}
                icon={<Play className="w-5 h-5" />}
              >
                Watch Demo
              </ModernButton>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-zion-cyan" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-zion-purple" />
                <span>500+ Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main showcase card */}
            <ModernCard
              variant="elevated"
              className="relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-gray-300">
                    {features[currentFeature].description}
                  </p>
                </div>

                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${features[currentFeature].color} flex items-center justify-center`}>
                    <features[currentFeature].icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Feature indicators */}
                <div className="flex justify-center gap-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentFeature 
                          ? 'bg-zion-cyan w-6' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to feature ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </ModernCard>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-4 -left-4"
            >
              <ModernCard
                variant="glass"
                className="w-32 h-32 p-4 text-center"
              >
                <div className="text-2xl font-bold text-zion-cyan">98%</div>
                <div className="text-xs text-gray-300">Success Rate</div>
              </ModernCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-4 -right-4"
            >
              <ModernCard
                variant="glass"
                className="w-32 h-32 p-4 text-center"
              >
                <div className="text-2xl font-bold text-zion-purple">25+</div>
                <div className="text-xs text-gray-300">Countries</div>
              </ModernCard>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-zion-slate rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-20 h-20 mx-auto mb-4 text-zion-cyan" />
                  <p className="text-xl">Video Demo Coming Soon</p>
                  <p className="text-gray-400">Experience our solutions in action</p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close video"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};