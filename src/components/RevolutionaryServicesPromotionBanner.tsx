import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Award, Star, CheckCircle } from 'lucide-react';

const RevolutionaryServicesPromotionBanner: React.FC = () => {
  const features = [
    "AI-Powered Automation",
    "Quantum Computing Solutions", 
    "Advanced Cybersecurity",
    "Cloud Optimization",
    "Blockchain & Web3",
    "IoT & Edge Computing"
  ];

  return (
    <motion.section 
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-300 font-medium">Revolutionary Services 2025</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Revolutionary Technology</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose from our comprehensive suite of cutting-edge technology services designed to accelerate your digital transformation and drive unprecedented growth in 2025 and beyond.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-3">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">60%</div>
                <div className="text-sm text-gray-400">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-xl shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  <div>
                    <div className="text-sm font-bold">4.9/5</div>
                    <div className="text-xs opacity-90">Rating</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  <div>
                    <div className="text-sm font-bold">60%</div>
                    <div className="text-xs opacity-90">Savings</div>
                  </div>
                </div>
              </motion.div>

              {/* Main Content */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Revolutionary Services</h3>
                  <div className="flex items-center text-yellow-400">
                    <span className="text-sm mr-1">★</span>
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">AI Automation Suite</div>
                      <div className="text-gray-400 text-sm">$299/month • Save 63%</div>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">Q</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Quantum Computing</div>
                      <div className="text-gray-400 text-sm">$1,999/month • Save 60%</div>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Cybersecurity Defense</div>
                      <div className="text-gray-400 text-sm">$899/month • Save 63%</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>500+ Projects</span>
                    <span>98% Satisfaction</span>
                    <span>24/7 Support</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Service Completion</span>
                    <span className="text-white">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default RevolutionaryServicesPromotionBanner;