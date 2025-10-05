import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function October2025NewAdvancedAIContentBanner() {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 border-b border-white/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full font-bold text-sm mb-4">

            OCTOBER 2025 BREAKTHROUGH

          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            🚀 3 Revolutionary AI Platform Breakthroughs
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-semibold">
            Privacy-First Federated AI • Unlimited Synthetic Data • Enterprise AI Governance
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-yellow-300 font-bold">
            <div className="flex items-center gap-2">

              <span>$1.02B Combined Value</span>
            </div>
            <div className="flex items-center gap-2">

              <span>100% Compliance</span>
            </div>
            <div className="flex items-center gap-2">

              <span>99.8% Privacy Protection</span>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Federated AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              to="/blog/ai-2025-oct-advanced-federated-ai-enterprise-revolution"
              className="block group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">

                  </div>
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                    Federated AI
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Advanced Federated AI Enterprise Revolution
                </h3>
                
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  Privacy-first distributed intelligence across 250+ nodes. <span className="text-yellow-300 font-bold">$287M value</span>, 99.8% privacy compliance, 67% faster training — zero data movement.
                </p>
                
                <div className="space-y-2 text-xs text-blue-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>47 Fortune 500 deployments across 42 countries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>47M patients served without data centralization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>94.7% model accuracy matching centralized training</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-purple-300 font-semibold group-hover:text-white transition-colors">
                  <span>Explore Privacy-First AI</span>

                </div>
              </div>
            </Link>
          </motion.div>

          {/* Synthetic Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/blog/ai-2025-oct-synthetic-data-generation-enterprise-breakthrough"
              className="block group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Database className="w-6 h-6 text-white"</div>
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                    Synthetic Data
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  Synthetic Data Generation Enterprise Breakthrough
                </h3>
                
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  Unlimited privacy-safe data generation. <span className="text-yellow-300 font-bold">$312M value</span>, 10x data availability, 99.4% statistical fidelity — solve data scarcity.
                </p>
                
                <div className="space-y-2 text-xs text-blue-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>470M synthetic transactions for top-3 bank</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>1000x fraud examples — 94.7% detection accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>100% privacy compliance across 67 countries</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-blue-300 font-semibold group-hover:text-white transition-colors">
                  <span>Unlock Unlimited Data</span>

                </div>
              </div>
            </Link>
          </motion.div>

          {/* AI Governance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/blog/ai-2025-oct-ai-model-governance-compliance-breakthrough"
              className="block group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">

                  </div>
                  <span className="text-xs font-bold text-green-300 uppercase tracking-wider">
                    AI Governance
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                  AI Model Governance & Compliance Breakthrough
                </h3>
                
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  Enterprise-scale AI risk management. <span className="text-yellow-300 font-bold">$421M value</span>, 100% audit compliance, 840+ models governed — complete accountability.
                </p>
                
                <div className="space-y-2 text-xs text-blue-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>340 models governed for top-10 insurer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>$87M penalties avoided — 100% audit pass rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>92% risk reduction with automated governance</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-green-300 font-semibold group-hover:text-white transition-colors">
                  <span>Ensure AI Compliance</span>

                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore All October 2025 Breakthroughs</span>

          </Link>
          
          <p className="mt-4 text-blue-200 text-sm">
            Join 127+ Fortune 500 companies transforming with privacy-first AI, synthetic data, and enterprise governance
          </p>
        </motion.div>
      </div>
    </div>
  );
}
