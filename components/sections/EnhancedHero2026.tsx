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
}

export default function EnhancedHero2026(_{_contactInfo, _serviceStats}: EnhancedHero2026Props) {_const _containerVariants = {
    hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.2}
    }
  };

  const _itemVariants = {_hidden: { y: 30, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.8, _ease: "easeOut" as const}
    }
  };

  const _statsVariants = {_hidden: { scale: 0.8, _opacity: 0},
    visible: {_scale: 1, _opacity: 1, _transition: {
        duration: 0.6, _ease: "easeOut" as const}
    }
  };

  return (
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
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
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
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Future-Ready
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our revolutionary AI, Quantum, and IT infrastructure services. 
              <span className="text-cyan-400 font-semibold"> 1000+ cutting-edge solutions</span> delivering unprecedented ROI.
            </p>
          </motion.div>

          {_/* Enhanced Stats Grid */}
          <motion.div 
            variants={_itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto"
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
                </div>
              </motion.div>
            ))}
          </motion.div>

          {_/* Enhanced CTA Section */}
          <motion.div variants={_itemVariants} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="/services" 
                variant="primary"
                size="xl"
                className="text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-2xl hover:shadow-purple-500/30 border-0 group"
              >
                <span className="flex items-center">
                  <Rocket className="mr-3 w-7 h-7 group-hover:rotate-12 transition-transform" />
                  Explore All Services
                </span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                href="/contact" 
                variant="secondary"
                size="xl"
                className="text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl"
              >
                <span className="flex items-center">
                  <Shield className="mr-3 w-7 h-7" />
                  Get Expert Consultation
                </span>
              </Button>
            </div>

            {_/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>5000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>

          {_/* Contact Information */}
          <motion.div 
            variants={_itemVariants}
            className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-gray-300 text-sm">Contact our team of experts today</p>
            </div>
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}