import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap } from 'lucide-react';
const October2025ConsciousEnterpriseIntelligenceBanner = () => {
  const capabilities = [
    { icon: Brain, title: 'Business Context Awareness', desc: 'Deep understanding of your business' },
    { icon: Sparkles, title: 'Anticipatory Intelligence', desc: 'Predicts needs before they arise' },
    { icon: Target, title: 'Strategic Reasoning', desc: 'Human-like business intuition' },
    { icon: Zap, title: 'Adaptive Learning', desc: 'Evolves with your business' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400 rounded-full px-6 py-2 backdrop-blur-sm">
            <Star className="w-5 h-5 text-purple-400 animate-spin-slow" />
            <span className="text-purple-200 font-bold text-sm">
              🎯 BREAKTHROUGH: CONSCIOUS ENTERPRISE INTELLIGENCE - JUST RELEASED 🎯
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              Conscious Enterprise Intelligence
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              AI systems that truly understand your business, anticipate needs, and make decisions with human-like business intuition. The next evolution in enterprise AI.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400 mb-1">$12.4B</div>
                <div className="text-sm text-slate-300">Fortune 100 Value Created</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400 mb-1">94.7%</div>
                <div className="text-sm text-slate-300">Prediction Accuracy</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
                <div className="text-3xl font-bold text-pink-400 mb-1">2,347%</div>
                <div className="text-sm text-slate-300">Average ROI</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-1">48-72hrs</div>
                <div className="text-sm text-slate-300">Issue Anticipation</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/blog/ai-2025-october-conscious-enterprise-intelligence-breakthrough"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <span>Explore the Breakthrough</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/services/conscious-enterprise-intelligence-consulting"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 border-2 border-white/30"
              >
                <span>Request Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                  <p className="text-sm text-slate-300">{capability.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">3 Industries</div>
              <div className="text-sm text-slate-300">Already Transformed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">$27.3B</div>
              <div className="text-sm text-slate-300">Total Value Created</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400 mb-1">99.9%</div>
              <div className="text-sm text-slate-300">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">10 Slots</div>
              <div className="text-sm text-slate-300">Remaining Q4 2025</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default October2025ConsciousEnterpriseIntelligenceBanner;
