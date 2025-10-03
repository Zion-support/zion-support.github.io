// import React from 'react';
import { motion } from 'framer-motion';
import { Layers, TrendingUp, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const October2025UnifiedAIPlatformMegaBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMThoMnYxMnptMC0xNmgtMlYyaDJ2MTJ6bTAtMzJoLTJ2MTJoMnYtMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full backdrop-blur-sm">
            <Layers className="w-5 h-5 text-indigo-300" />
            <span className="text-indigo-200 font-semibold uppercase tracking-wider text-sm">
              🚀 JUST PUBLISHED: October 2025 - Unified AI Platform Revolution
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            End AI Chaos:<br />Unified Platform Revolution
          </h2>
          <p className="text-2xl md:text-3xl text-indigo-200 font-light max-w-4xl mx-auto leading-relaxed">
            Transform 27+ Fragmented AI Tools into One Cohesive Powerhouse
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { value: '$427M', label: 'Annual Savings', icon: TrendingUp, color: 'from-green-400 to-emerald-400' },
            { value: '840%', label: 'ROI in 18 Months', icon: Zap, color: 'from-yellow-400 to-orange-400' },
            { value: '92%', label: 'Faster Deployment', icon: CheckCircle, color: 'from-blue-400 to-cyan-400' },
            { value: '99.9%', label: 'Platform Uptime', icon: Shield, color: 'from-purple-400 to-pink-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
              <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-indigo-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Technical Guide Card */}
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md border border-indigo-400/30 rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  📘 Complete Implementation Guide
                </h3>
                <p className="text-indigo-200">
                  Fortune 500 Success Story: $2.8B Value Creation
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                'Consolidate 27+ AI tools into unified platform',
                'Reduce deployment time by 92% (14 days → 27 hours)',
                '10x developer productivity improvement',
                'Complete architecture & implementation roadmap',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/content/blog/ai-2025-october-unified-ai-platform-revolution.md"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 group"
            >
              Read Technical Guide
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Services Card */}
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md border border-purple-400/30 rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  💼 Enterprise Implementation Services
                </h3>
                <p className="text-purple-200">
                  127+ Successful Implementations, 99.7% Satisfaction
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                'End-to-end platform implementation (6-9 months)',
                '$10M+ average annual savings per client',
                '99.9% uptime guarantee with 24/7 support',
                'Fixed-price packages with guaranteed ROI',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/content/services/unified-ai-platform-implementation-services.md"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <p className="text-xl text-white mb-4">
              <span className="font-bold">Ready to consolidate your AI ecosystem?</span>
            </p>
            <p className="text-indigo-200 mb-6">
              Schedule a free assessment to discover your unified platform opportunity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ai-platforms@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Free Assessment
              </a>
              <a
                href="tel:+18554286489"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Call: +1 (855) AI-UNITY
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default October2025UnifiedAIPlatformMegaBanner;
