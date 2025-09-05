<<<<<<< HEAD
import React from 'react',
import { motion } from 'framer-motion',
import { ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Rocket, CheckCircle } from 'lucide-react',
import Button from '../ui/Button',
interface EnhancedHero2026Props {
  contactInfo: {
    mobile: string,
    email: string,
    address: string,
    website: string
  },
  serviceStats: {
    totalServices: number,
    aiServices: number,
    emergingTech: number,
    itSolutions: number,
    microSaas: number,
    revolutionaryServices: number
  }
=======
import React from 'react';
import Button from '../ui/Button';

interface EnhancedHero2026Props {_contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;};
  serviceStats: {_totalServices: number;
    aiServices: number;
    emergingTech: number;
    itSolutions: number;
    microSaas: number;
    revolutionaryServices: number;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export default function EnhancedHero2026(_{_contactInfo, _serviceStats}: EnhancedHero2026Props) {_const _containerVariants = {
    hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.2}
    }
  },

<<<<<<< HEAD
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: &quot;easeOut&quot; as const
      }
=======
  const _itemVariants = {_hidden: { y: 30, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.8, _ease: "easeOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot; as const
      }
=======
  const _statsVariants = {_hidden: { scale: 0.8, _opacity: 0},
    visible: {_scale: 1, _opacity: 1, _transition: {
        duration: 0.6, _ease: "easeOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  return (
<<<<<<< HEAD
    <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden&quot;>
      {/* Enhanced Background Elements */}
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900&quot; />
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.4),transparent_50%)]&quot; />
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)]&quot; />
      
      {/* Floating Elements */}
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className=&quot;absolute w-2 h-2 bg-cyan-400/30 rounded-full&quot;
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`}}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: &quot;easeInOut&quot;,
              delay: Math.random() * 2
            }}
=======
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {_/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)]" />
      
      {_/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {_Array.from({ length: 20}).map(_(_, _i) => (
          <motion.div
            key={_i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={_{
              left: `${Math.random() * 100}%`,
              top: `${_Math.random() * 100}%`}}
            animate={_{
              y: [0, _-30, _0], _opacity: [0.3, _0.8, _0.3], _scale: [1, _1.5, _1]}}
            transition={_{
              duration: 3 + Math.random() * 2, _repeat: Infinity, _ease: "easeInOut", _delay: Math.random() * 2}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        ))}
      </div>

      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
        <motion.div
<<<<<<< HEAD
          variants={containerVariants}
          initial=&quot;hidden&quot;
          animate=&quot;visible&quot;
          className=&quot;space-y-8&quot;
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className=&quot;space-y-6&quot;>
            <div className=&quot;inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-6&quot;>
              <Star className=&quot;w-5 h-5 text-yellow-400&quot; />
              <span className=&quot;text-cyan-400 font-semibold&quot;>2026 Innovation Leader</span>
              <TrendingUp className=&quot;w-5 h-5 text-green-400&quot; />
=======
          variants={_containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {_/* Main Headline */}
          <motion.div variants={_itemVariants} className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-cyan-400 font-semibold">2026 Innovation Leader</span>
              <TrendingUp className="w-5 h-5 text-green-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            
            <h1 className=&quot;text-5xl md:text-7xl lg:text-8xl font-bold leading-tight&quot;>
              <span className=&quot;bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                Future-Ready
              </span>
              <br />
              <span className=&quot;bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                Solutions
              </span>
            </h1>
            
            <p className=&quot;text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
              Transform your business with our revolutionary AI, Quantum, and IT infrastructure services. 
              <span className=&quot;text-cyan-400 font-semibold&quot;> 1000+ cutting-edge solutions</span> delivering unprecedented ROI.
            </p>
          </motion.div>

          {_/* Enhanced Stats Grid */}
          <motion.div 
<<<<<<< HEAD
            variants={itemVariants}
            className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto&quot;
=======
            variants={_itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_[
              { label: 'Total Services', _value: serviceStats.totalServices, _icon: Rocket, _color: 'from-blue-500 to-cyan-500'},
              {_label: 'AI Solutions', _value: serviceStats.aiServices, _icon: Brain, _color: 'from-purple-500 to-pink-500'},
              {_label: 'Emerging Tech', _value: serviceStats.emergingTech, _icon: TrendingUp, _color: 'from-green-500 to-emerald-500'},
              {_label: 'IT Infrastructure', _value: serviceStats.itSolutions, _icon: Globe, _color: 'from-orange-500 to-red-500'},
              {_label: 'Micro SaaS', _value: serviceStats.microSaas, _icon: Zap, _color: 'from-yellow-500 to-orange-500'},
              {_label: 'Revolutionary', _value: serviceStats.revolutionaryServices, _icon: Star, _color: 'from-pink-500 to-purple-500'}
            ].map(_(stat, _index) => (
              <motion.div
<<<<<<< HEAD
                key={stat.label}
                variants={statsVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className=&quot;group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300&quot;
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <div className=&quot;text-2xl md:text-3xl font-bold text-white mb-1&quot;>
                  {stat.value.toLocaleString()}+
                </div>
                <div className=&quot;text-xs text-gray-400 leading-tight&quot;>
                  {stat.label}
=======
                key={_stat.label}
                variants={_statsVariants}
                whileHover={_{ scale: 1.05, _y: -5}}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className={_`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {_stat.value.toLocaleString()}+
                </div>
                <div className="text-xs text-gray-400 leading-tight">
                  {_stat.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </motion.div>
            ))}
          </motion.div>

<<<<<<< HEAD
          {/* Enhanced CTA Section */}
          <motion.div variants={itemVariants} className=&quot;space-y-6&quot;>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
=======
          {_/* Enhanced CTA Section */}
          <motion.div variants={_itemVariants} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Button 
                href=&quot;/services&quot; 
                variant=&quot;primary&quot;
                size=&quot;xl&quot;
                className=&quot;text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-2xl hover:shadow-purple-500/30 border-0 group&quot;
              >
                <span className=&quot;flex items-center&quot;>
                  <Rocket className=&quot;mr-3 w-7 h-7 group-hover:rotate-12 transition-transform&quot; />
                  Explore All Services
                </span>
                <ArrowRight className=&quot;ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform&quot; />
              </Button>
              
              <Button 
                href=&quot;/contact&quot; 
                variant=&quot;secondary&quot;
                size=&quot;xl&quot;
                className=&quot;text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl&quot;
              >
                <span className=&quot;flex items-center&quot;>
                  <Shield className=&quot;mr-3 w-7 h-7&quot; />
                  Get Expert Consultation
                </span>
              </Button>
            </div>

<<<<<<< HEAD
            {/* Trust Indicators */}
            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
=======
            {_/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <span>5000+ Happy Customers</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>

          {_/* Contact Information */}
          <motion.div 
<<<<<<< HEAD
            variants={itemVariants}
            className=&quot;bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto&quot;
=======
            variants={_itemVariants}
            className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;text-center mb-4&quot;>
              <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Ready to Get Started?</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>Contact our team of experts today</p>
            </div>
<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-cyan-400 font-medium&quot;>Phone</div>
                <div className=&quot;text-white&quot;>{contactInfo.mobile}</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-cyan-400 font-medium&quot;>Email</div>
                <div className=&quot;text-white&quot;>{contactInfo.email}</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-cyan-400 font-medium&quot;>Website</div>
                <div className=&quot;text-white&quot;>{contactInfo.website}</div>
=======
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-cyan-400 font-medium">Phone</div>
                <div className="text-white">{_contactInfo.mobile}</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-medium">Email</div>
                <div className="text-white">{_contactInfo.email}</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-medium">Website</div>
                <div className="text-white">{_contactInfo.website}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}