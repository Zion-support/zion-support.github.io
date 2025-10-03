import { motion } from 'framer-motion';
import { Building2, Brain, Sparkles, ArrowRight, Shield, Globe } from 'lucide-react';

export default function October2025EnterpriseAITransformationPlatformBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 text-white py-16 px-6 rounded-3xl shadow-2xl overflow-hidden my-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 mb-6"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">💎 Breaking News: October 1, 2025</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
            Enterprise AI Transformation Platform
          </h2>
          
          <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto mb-8">
            Complete End-to-End AI Platform for Global Enterprises - $14.2B Proven Success
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <Building2 className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="text-xl font-bold">2,400+ Enterprises</h3>
            </div>
            <p className="text-cyan-100">
              Trusted by Fortune 500 companies worldwide for mission-critical AI transformation initiatives
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-teal-500/20 rounded-xl">
                <Brain className="w-6 h-6 text-teal-300" />
              </div>
              <h3 className="text-xl font-bold">97% Success Rate</h3>
            </div>
            <p className="text-cyan-100">
              Industry-leading implementation success with guaranteed ROI and comprehensive support
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <Shield className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-bold">100% Compliant</h3>
            </div>
            <p className="text-cyan-100">
              Full compliance with GDPR, SOC 2, HIPAA, and all major regulatory frameworks
            </p>
          </motion.div>
        </div>

        {/* Platform Capabilities */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Globe className="w-8 h-8 text-cyan-400" />
            Comprehensive Platform Capabilities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-cyan-300">AI Infrastructure</h4>
              <ul className="space-y-2 text-sm text-cyan-100">
                <li>• Auto-scaling compute resources</li>
                <li>• Multi-cloud deployment</li>
                <li>• Edge computing integration</li>
                <li>• Real-time data processing</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-teal-300">AI Models & Training</h4>
              <ul className="space-y-2 text-sm text-cyan-100">
                <li>• Pre-trained industry models</li>
                <li>• Custom model development</li>
                <li>• Continuous learning pipelines</li>
                <li>• Model versioning & governance</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-emerald-300">Integration & Security</h4>
              <ul className="space-y-2 text-sm text-cyan-100">
                <li>• Enterprise system connectors</li>
                <li>• API management platform</li>
                <li>• Zero-trust security model</li>
                <li>• Audit logging & compliance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center">
            <div className="text-3xl font-bold text-cyan-300 mb-2">$14.2B</div>
            <div className="text-sm text-cyan-200">Total Value Created</div>
          </div>
          <div className="bg-gradient-to-br from-teal-600/20 to-teal-800/20 backdrop-blur-sm rounded-xl p-6 border border-teal-500/30 text-center">
            <div className="text-3xl font-bold text-teal-300 mb-2">87%</div>
            <div className="text-sm text-teal-200">Cost Reduction</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30 text-center">
            <div className="text-3xl font-bold text-emerald-300 mb-2">4,847%</div>
            <div className="text-sm text-emerald-200">Average ROI</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/20 to-emerald-800/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">120 Days</div>
            <div className="text-sm text-cyan-200">Average Deployment</div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all">
            <span>Start Your AI Transformation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-cyan-200 mt-4">
            Join 2,400+ enterprises already transforming with our platform
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
