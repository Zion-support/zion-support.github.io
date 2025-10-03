import { motion } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';
const October2025ContentMegaShowcaseBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 rounded-3xl shadow-2xl overflow-hidden my-8 mx-4"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-10 lg:p-16">
        {/* Main Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border-2 border-yellow-400/40 rounded-full px-8 py-3 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-yellow-300 font-black text-lg uppercase tracking-widest">
              🚀 OCTOBER 2025 MEGA CONTENT SHOWCASE 🚀
            </span>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Revolutionary
            </span>
            <br />
            <span className="text-white">Content Library</span>
          </h1>
          
          <p className="text-2xl lg:text-3xl text-purple-200 max-w-5xl mx-auto leading-relaxed">
            Discover <span className="text-yellow-400 font-bold">23 groundbreaking guides</span>,{' '}
            <span className="text-cyan-400 font-bold">$47.2B in proven value</span>, and{' '}
            <span className="text-green-400 font-bold">847 enterprise success stories</span>
          </p>
        </motion.div>

        {/* Content Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Zap,
              title: 'Neural-Cognitive Fusion',
              value: '$14.7B',
              description: '50,000x faster processing with 99.94% accuracy',
              gradient: 'from-cyan-500 to-blue-600',
            },
            {
              icon: Globe,
              title: 'Autonomous Cognition',
              value: '$8.4B',
              description: '342 Fortune 500 deployments, 99.97% autonomy',
              gradient: 'from-emerald-500 to-teal-600',
            },
            {
              icon: TrendingUp,
              title: 'Quantum ML Systems',
              value: '$12.3B',
              description: '10,000x performance, sub-microsecond latency',
              gradient: 'from-purple-500 to-pink-600',
            },
            {
              icon: Award,
              title: 'Edge Intelligence',
              value: '$6.2B',
              description: 'Real-time processing across 127 countries',
              gradient: 'from-yellow-500 to-orange-600',
            },
            {
              icon: Sparkles,
              title: 'Enterprise Automation',
              value: '$4.8B',
              description: '94% automation rate, 1,847% ROI',
              gradient: 'from-red-500 to-pink-600',
            },
            {
              icon: Globe,
              title: 'Distributed AI Networks',
              value: '$0.8B',
              description: '15,000+ nodes, 99.999% reliability',
              gradient: 'from-indigo-500 to-purple-600',
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
              <div className={`text-4xl font-black bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-3`}>
                {category.value}
              </div>
              <p className="text-purple-200 leading-relaxed">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics Bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            📊 Platform-Wide Impact Metrics
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: 'Total Value', value: '$47.2B', color: 'text-emerald-400' },
              { label: 'Companies', value: '847', color: 'text-cyan-400' },
              { label: 'Success Rate', value: '99.97%', color: 'text-purple-400' },
              { label: 'Avg ROI', value: '1,847%', color: 'text-yellow-400' },
              { label: 'Countries', value: '127', color: 'text-pink-400' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, type: 'spring' }}
                className="text-center"
              >
                <div className={`text-5xl font-black ${metric.color} mb-2`}>{metric.value}</div>
                <div className="text-white font-semibold">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300">
              <span className="flex items-center gap-3">
                Browse Complete Library
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-lg border-2 border-white/40 text-white font-bold text-xl px-12 py-6 rounded-2xl transition-all duration-300">
              Download Executive Summary
            </button>
          </div>
        </motion.div>

        {/* Footer Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="flex flex-wrap justify-center gap-8 text-purple-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Updated daily</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Verified by 847 enterprises</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span>$47.2B proven ROI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025ContentMegaShowcaseBanner;
