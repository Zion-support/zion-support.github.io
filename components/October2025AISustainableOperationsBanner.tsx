import { motion } from 'framer-motion';
import { Leaf, TrendingUp, Globe, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function October2025AISustainableOperationsBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white py-16 px-6 rounded-3xl shadow-2xl overflow-hidden my-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6"
          >
            <Leaf className="w-5 h-5 text-green-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">🌍 Just Published: October 1, 2025</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-200 via-teal-200 to-green-200 bg-clip-text text-transparent">
            AI-Powered Sustainable Operations Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto mb-8">
            Transform Your Enterprise with Carbon-Neutral AI Operations - $12.8B Success Story with 92% Carbon Reduction
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <Leaf className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-bold">92% Carbon Reduction</h3>
            </div>
            <p className="text-emerald-100">
              Revolutionary AI algorithms that optimize energy consumption and reduce carbon footprint across all operations
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-teal-500/20 rounded-xl">
                <TrendingUp className="w-6 h-6 text-teal-300" />
              </div>
              <h3 className="text-xl font-bold">4,280% ROI</h3>
            </div>
            <p className="text-emerald-100">
              Proven return on investment with $12.8B in cost savings from energy optimization and efficiency gains
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <Globe className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-xl font-bold">Net-Zero in 18 Months</h3>
            </div>
            <p className="text-emerald-100">
              Accelerated path to carbon neutrality with AI-driven sustainability and renewable energy integration
            </p>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">Revolutionary Environmental Impact</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">$12.8B</div>
              <div className="text-sm text-emerald-200">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-300 mb-2">92%</div>
              <div className="text-sm text-teal-200">Carbon Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">8.4M</div>
              <div className="text-sm text-green-200">Tons CO₂ Avoided</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">99.8%</div>
              <div className="text-sm text-yellow-200">Renewable Energy</div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            'Real-time carbon footprint tracking and optimization',
            'AI-driven renewable energy sourcing and integration',
            'Automated waste reduction and recycling optimization',
            'Smart grid integration for maximum energy efficiency',
            'Predictive maintenance to extend equipment lifespan',
            'ESG compliance automation with comprehensive reporting'
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-emerald-100">{benefit}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all">
            <span>Explore Sustainable AI Operations</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
