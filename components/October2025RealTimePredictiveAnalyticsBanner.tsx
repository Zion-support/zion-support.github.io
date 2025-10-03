import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
const October2025RealTimePredictiveAnalyticsBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 px-6 my-8 rounded-2xl shadow-2xl"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header with animated badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-yellow-500/50">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-yellow-300 font-bold text-sm uppercase tracking-wider">
              🚀 JUST PUBLISHED TODAY - OCTOBER 1, 2025 🚀
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200"
        >
          Real-Time Predictive Analytics Revolution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl text-center text-purple-100 mb-8 font-light"
        >
          Achieve 94% Accuracy, Sub-100ms Latency, and $4.2B+ Value Creation
        </motion.p>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
        >
          {[
            { icon: Target, label: 'Prediction Accuracy', value: '94%', color: 'text-green-400' },
            { icon: Zap, label: 'Processing Latency', value: '<100ms', color: 'text-yellow-400' },
            { icon: DollarSign, label: 'Value Created', value: '$4.2B', color: 'text-emerald-400' },
            { icon: TrendingUp, label: 'ROI Achieved', value: '847%', color: 'text-blue-400' }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <metric.icon className={`w-10 h-10 ${metric.color} mb-3 mx-auto`} />
              <p className={`text-3xl font-bold ${metric.color} text-center mb-1`}>{metric.value}</p>
              <p className="text-sm text-purple-200 text-center font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {[
            {
              title: '📚 Complete Implementation Guide',
              description: 'Learn how to implement real-time predictive analytics with 94% accuracy',
              link: '/blog/ai-2025-october-real-time-predictive-analytics-revolution',
              cta: 'Read Guide',
              gradient: 'from-purple-600 to-indigo-600'
            },
            {
              title: '💎 $4.2B Success Story',
              description: 'Global retailer achieves 847% ROI with real-time analytics platform',
              link: '/case-studies/ai-2025-october-global-retail-real-time-analytics-4-2-billion-success',
              cta: 'View Case Study',
              gradient: 'from-indigo-600 to-blue-600'
            },
            {
              title: '🚀 Platform Services',
              description: 'Deploy enterprise-grade real-time predictive analytics in 6-12 months',
              link: '/services/real-time-predictive-analytics-platform-services',
              cta: 'Explore Services',
              gradient: 'from-blue-600 to-cyan-600'
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`block bg-gradient-to-br ${item.gradient} rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group`}
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm group-hover:text-white transition-colors">
                {item.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
          >
            <Sparkles className="w-6 h-6" />
            Schedule Free Assessment
            <ArrowRight className="w-6 h-6" />
          </motion.a>
          <p className="text-purple-200 mt-4 text-sm">
            ✨ 30-Day Free Assessment • 90-Day Proof of Concept • 300%+ ROI Guarantee ✨
          </p>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-10 pt-8 border-t border-white/20 text-center"
        >
          <p className="text-purple-200 text-sm">
            <span className="font-bold text-yellow-300">Fortune 500 Proven</span> • 
            <span className="ml-2">850+ Production Models</span> • 
            <span className="ml-2">15,000+ Stores Transformed</span> • 
            <span className="ml-2">99.99% Uptime SLA</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025RealTimePredictiveAnalyticsBanner;
