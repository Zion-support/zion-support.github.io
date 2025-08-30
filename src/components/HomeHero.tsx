import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Building
} from 'lucide-react';

export function HomeHero() {
  const heroStats = [
    { label: 'AI Solutions', value: '50+', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { label: 'Enterprise Clients', value: '200+', icon: Building, color: 'from-blue-600 to-cyan-600' },
    { label: 'Success Rate', value: '98%', icon: CheckCircle, color: 'from-green-600 to-emerald-600' },
    { label: 'Years Experience', value: '15+', icon: Star, color: 'from-yellow-600 to-orange-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with cutting-edge AI solutions, quantum computing, 
              and revolutionary technology services that transform businesses worldwide
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/services"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="mt-16">
            <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-400 font-semibold">Microsoft</div>
              <div className="text-gray-400 font-semibold">Google</div>
              <div className="text-gray-400 font-semibold">Amazon</div>
              <div className="text-gray-400 font-semibold">IBM</div>
              <div className="text-gray-400 font-semibold">Oracle</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}