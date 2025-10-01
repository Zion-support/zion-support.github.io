import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Zap, DollarSign, Target, Users, Globe, Award, ArrowRight } from 'lucide-react';

const October2025RealTimeAnalyticsShowcase: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: '94% Accuracy',
      description: 'Industry-leading prediction accuracy',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Sub-100ms Latency',
      description: 'Real-time processing at scale',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      icon: DollarSign,
      title: '$4.2B Value',
      description: 'Proven value creation',
      color: 'from-emerald-400 to-green-600'
    },
    {
      icon: TrendingUp,
      title: '847% ROI',
      description: '18-month return on investment',
      color: 'from-blue-400 to-cyan-600'
    }
  ];

  const useCases = [
    'Demand Forecasting',
    'Dynamic Pricing',
    'Hyper-Personalization',
    'Supply Chain Optimization',
    'Fraud Detection',
    'Predictive Maintenance'
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-20 px-6 my-8">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 px-6 py-2 rounded-full border border-yellow-500/50 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-bold text-sm uppercase">
              Featured Solution - October 2025
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
            Real-Time Predictive Analytics Platform
          </h2>

          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Transform your enterprise with AI-powered real-time intelligence that delivers measurable business impact
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-purple-200 text-sm text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Proven Use Cases Across Industries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition-all"
              >
                <p className="text-white font-semibold text-center">✓ {useCase}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Users, value: '15,000+', label: 'Stores Transformed' },
            { icon: Globe, value: '45', label: 'Countries Deployed' },
            { icon: Award, value: '850+', label: 'Production Models' },
            { icon: Sparkles, value: '99.99%', label: 'Platform Uptime' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-indigo-600/40 to-purple-600/40 rounded-xl p-6 border border-indigo-400/30 text-center"
            >
              <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-purple-200 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-10 text-center border-2 border-purple-400/50"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Join Fortune 500 companies achieving unprecedented ROI with real-time predictive analytics. 
            Start with a free 30-day assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/blog/ai-2025-october-real-time-predictive-analytics-revolution"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-purple-900/50 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/60 transition-all"
            >
              Read Implementation Guide
            </motion.a>
          </div>
          <p className="text-purple-200 mt-6 text-sm">
            ✨ No Credit Card Required • 90-Day Proof of Concept Available • 300%+ ROI Guaranteed ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default October2025RealTimeAnalyticsShowcase;
