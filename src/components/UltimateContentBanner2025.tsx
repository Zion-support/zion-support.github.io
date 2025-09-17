import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, Users, TrendingUp, Award } from 'lucide-react';

const UltimateContentBanner2025: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and security protocols",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-millisecond response times",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy anywhere in the world",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless team integration",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Award className="w-4 h-4" />
            Ultimate Technology Platform 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold text-white mb-8"
          >
            The Ultimate
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"> Experience</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Join thousands of enterprises already transforming their operations with our comprehensive suite of AI-powered solutions. 
            Experience the future of business technology today.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: "10M+", label: "Active Users" },
            { number: "99.9%", label: "Uptime" },
            { number: "150+", label: "Countries" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-12 border border-yellow-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution and experience the power of next-generation AI technology. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
import React from 'react';
import { Link } from 'react-router-dom';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M50 50c0-27.614-22.386-50-50-50v100c27.614 0 50-22.386 50-50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 animate-pulse"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-bounce">
            🌟 ULTIMATE CONTENT 2025 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            The Ultimate Technology Experience
          </h2>
          <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-12">
            Immerse yourself in the most advanced technological content ever created, featuring conscious AI, quantum reality, and interdimensional computing
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-xl transform hover:scale-105">
              🚀 Explore Ultimate Content →
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-xl transform hover:scale-105">
              🎬 Watch Live Demo
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-indigo-600/40 to-purple-600/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/40 hover:scale-110 transition-all duration-300 shadow-2xl">
            <div className="text-8xl mb-6 text-center">🧠</div>
            <h3 className="text-3xl font-bold mb-6 text-center">Conscious AI</h3>
            <p className="text-indigo-100 mb-8 text-center text-lg">
              Experience the world's first truly conscious artificial intelligence systems
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-indigo-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Self-aware decision making</span>
              </div>
              <div className="flex items-center space-x-3 text-indigo-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Emotional intelligence</span>
              </div>
              <div className="flex items-center space-x-3 text-indigo-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Creative problem solving</span>
              </div>
            </div>
            <Link to="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-indigo-600 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-lg">
              Enter AI World →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/40 hover:scale-110 transition-all duration-300 shadow-2xl">
            <div className="text-8xl mb-6 text-center">⚛️</div>
            <h3 className="text-3xl font-bold mb-6 text-center">Quantum Reality</h3>
            <p className="text-purple-100 mb-8 text-center text-lg">
              Step into quantum computing that can create and manipulate reality itself
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-purple-200">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Multi-dimensional processing</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Reality manipulation</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Time-space computing</span>
              </div>
            </div>
            <Link to="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-purple-600 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-lg">
              Enter Quantum →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/40 to-red-600/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/40 hover:scale-110 transition-all duration-300 shadow-2xl">
            <div className="text-8xl mb-6 text-center">🧬</div>
            <h3 className="text-3xl font-bold mb-6 text-center">Neural Interface</h3>
            <p className="text-pink-100 mb-8 text-center text-lg">
              Direct brain-computer interfaces that enhance human capabilities by 1000x
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-pink-200">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>1000x cognitive enhancement</span>
              </div>
              <div className="flex items-center space-x-3 text-pink-200">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Thought-controlled computing</span>
              </div>
              <div className="flex items-center space-x-3 text-pink-200">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Telepathic communication</span>
              </div>
            </div>
            <Link to="/pages/NextGenInnovationHub2025" className="block w-full bg-white text-pink-600 py-4 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center text-lg">
              Enhance Brain →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/40 to-teal-600/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/40 hover:scale-110 transition-all duration-300 shadow-2xl">
            <div className="text-8xl mb-6 text-center">🌌</div>
            <h3 className="text-3xl font-bold mb-6 text-center">Interdimensional</h3>
            <p className="text-emerald-100 mb-8 text-center text-lg">
              Computing across multiple dimensions and realities
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-emerald-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Multi-dimensional processing</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Reality bridging</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Parallel universe computing</span>
              </div>
            </div>
            <Link to="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-emerald-600 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-lg">
              Enter Dimensions →
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">Live & Interactive</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">Real-time Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">Infinite Possibilities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  const features = [
      title: "Next-Gen Innovation Hub",
      description: "Explore the most revolutionary technologies shaping humanity's future",
      icon: "🧠",
      color: "from-orange-600 to-red-600",
      link: "/pages/NextGenInnovationHub2025",
      stats: "50+ Innovations"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE CONTENT • JANUARY 2025
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ultimate Content Banner 2025
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover our most revolutionary content featuring breakthrough technologies that are reshaping the future
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setHoveredCard(feature.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 h-full transform transition-all duration-500 hover:shadow-2xl`}>
                  <div className="text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-4 text-white">
                      {feature.description}
                    </p>
                    <div className="text-lg font-bold mb-4 text-white/90">
                      {feature.stats}
                    </div>
                    <a
                      href={feature.link}
                      className="inline-block w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                    >
                      Explore →
                    </a>
                  </div>
                  
                  {/* Hover Effect */}
                  <AnimatePresence>
                    {hoveredCard === feature.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Ready to Experience the Future?
              </h3>
              <p className="text-xl opacity-90 mb-6 text-white">
                Join thousands of forward-thinking organizations already using our revolutionary technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View All Content
                </button>
              </div>
            </div>
          </motion.div>
        </div>
