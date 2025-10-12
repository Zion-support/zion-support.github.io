import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import FuturisticButton from './FuturisticButton';
import FuturisticCard from './FuturisticCard';

const FuturisticHero: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Cutting-edge artificial intelligence solutions'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'High-performance technology stack'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Enterprise-grade security protocols'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
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
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                The Future of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Technology
                </span>
                {' '}is Here
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience the next generation of AI-powered solutions that will transform
                your business and revolutionize the way you work.
              </motion.p>
            </div>

            {/* Feature cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  variant="feature"
                  className="p-4 text-center"
                >
                  <feature.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FuturisticButton
                variant="primary"
                size="lg"
                className="flex items-center justify-center"
              >
                <Link to="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </FuturisticButton>
              
              <FuturisticButton
                variant="ghost"
                size="lg"
                className="flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </FuturisticButton>
            </motion.div>
          </motion.div>

          {/* Right content - 3D visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main 3D card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-xl border border-white/20"
                animate={{
                  rotateY: [0, 5, 0],
                  rotateX: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    AI-Powered Solutions
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Transform your business with cutting-edge artificial intelligence
                  </p>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticHero;