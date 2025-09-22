'use client';

import React from 'react';
import { motion } from 'framer-motion';
ArrowRightSparklesZapBrainRocketStarTrendingUpUsersGlobeShieldAward

const UltimateTechShowcase2026Banner = () => {
  const technologies = [
    {
      name: "Quantum AI Fusion",
      description: "Revolutionary combination of quantum computing and artificial intelligence",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      progress: 95,
      status: "Production Ready"
    },
    {
      name: "Neural Interface Pro",
      description: "Direct brain-computer interface technology for seamless interaction",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      progress: 87,
      status: "Beta Testing"
    },
    {
      name: "Predictive Analytics AI",
      description: "Advanced AI systems that predict future trends with 99% accuracy",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      progress: 92,
      status: "Live Deployment"
    },
    {
      name: "Global AI Network",
      description: "Distributed AI infrastructure spanning across 150+ countries",
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      progress: 78,
      status: "Expanding"
    }
  ];

  const achievements = [
    { number: "500+"label: "Enterprise Clients"icon: <Users className="w-6 h-6" /> },
    { number: "99.9%"label: "Uptime Guarantee"icon: <Shield className="w-6 h-6" /> },
    { number: "50+"label: "Industry Awards"icon: <Award className="w-6 h-6" /> },
    { number: "1M+"label: "Daily Active Users"icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">2026 Ultimate Technology Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Future</span>
            <br />
            of Technology
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the most advanced AIquantum computingand neural interface technologies 
            that are reshaping industries and transforming the way we work and live.
          </p>
        </motion.div>

        {/* Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {technologies.map((techindex) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-4">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </h3>
                    <div className="text-sm text-green-400 font-medium">{tech.status}</div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {tech.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Development Progress</span>
                  <span>{tech.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.progress}%` }}
                    transition={{ duration: 1delay: index * 0.2 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievementindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-gray-300 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already using our 
              cutting-edge technology to revolutionize their operations and achieve unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026Banner;