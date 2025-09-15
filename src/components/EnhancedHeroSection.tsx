import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Star, 
  CheckCircle, 
  Zap,
  Shield,
  Globe,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

const EnhancedHeroSection: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Countries Served', value: '25+', icon: Globe }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for maximum speed'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grows with your business needs'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by 200+ Companies Worldwide
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Transform Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Future
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Leading technology solutions for modern businesses. We deliver cutting-edge AI, 
              cloud infrastructure, and digital transformation services that drive real results.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg backdrop-blur-sm">
                  <feature.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{feature.title}</div>
                    <div className="text-xs text-gray-600">{feature.description}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-4">Trusted by industry leaders:</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">Microsoft</div>
                <div className="text-2xl font-bold text-gray-400">Google</div>
                <div className="text-2xl font-bold text-gray-400">Amazon</div>
                <div className="text-2xl font-bold text-gray-400">Meta</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-300 hover:shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Ready to Scale?</h3>
                  <p className="text-blue-100">
                    Join hundreds of companies that have transformed their business with our solutions.
                  </p>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center text-white border border-white/30 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
                  >
                    View Success Stories
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;