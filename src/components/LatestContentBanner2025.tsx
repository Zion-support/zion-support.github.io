import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LatestContentBanner2025 = () => {
  const newArticles = [
    {
      title: "AI Cognitive Mesh Networks 2026",
      description: "1000x Faster Decisions with Distributed Intelligence",
      slug: "ai-cognitive-mesh-networks-2026",
      category: "Distributed AI",
      emoji: "🧠",
      highlight: "NEW TODAY"
    },
    {
      title: "AI Predictive Infrastructure Orchestration 2026",
      description: "Zero-Touch Cloud Operations with 99.99% Uptime",
      slug: "ai-predictive-infrastructure-orchestration-2026",
      category: "Cloud Infrastructure",
      emoji: "🚀",
      highlight: "NEW TODAY"
    },
    {
      title: "AI Continuous Learning Systems 2026",
      description: "Self-Improving Models with 99.2% Accuracy Gains",
      slug: "ai-continuous-learning-systems-2026",
      category: "Machine Learning",
      emoji: "🔄",
      highlight: "NEW TODAY"
    },
    {
      title: "AI Synthetic Creativity Engine 2026",
      description: "Human-Level Creative Content at 1000x Speed",
      slug: "ai-synthetic-creativity-engine-2026",
      category: "Generative AI",
      emoji: "🎨",
      highlight: "NEW TODAY"
    },
    {
      title: "AI Hyper-Personalization Engines 2026",
      description: "450% Conversion Increase with 1-to-1 Experiences",
      slug: "ai-hyper-personalization-engines-2026",
      category: "Customer Experience",
      emoji: "🎯",
      highlight: "NEW TODAY"
    },
    {
      title: "AI-Native Security Operations 2026",
      description: "99.9% Threat Prevention with Autonomous Response",
      slug: "ai-native-security-operations-2026",
      category: "Cybersecurity",
      emoji: "🛡️"
    },
    {
      title: "Distributed AI Training at Scale 2026",
      description: "Train LLMs 10x Faster on 1000+ GPU Clusters",
      slug: "distributed-ai-training-scale-2026",
      category: "ML Infrastructure",
      emoji: "⚡"
    },
    {
      title: "AI Governance Automation 2026",
      description: "100% Compliance Without the Overhead",
      slug: "ai-governance-automation-enterprise-2026",
      category: "AI Governance",
      emoji: "📋"
    },
    {
      title: "AI Quantum Hybrid Computing 2026",
      description: "1000x Speedup for Optimization Problems",
      slug: "ai-quantum-hybrid-optimization-2026",
      category: "Quantum Computing",
      emoji: "⚛️"
    },
    {
      title: "Federated Learning Enterprise 2026",
      description: "Privacy-Preserving Training at Global Scale",
      slug: "federated-learning-2026",
      category: "Privacy AI",
      emoji: "🔐"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 md:p-12 my-12 shadow-2xl"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-semibold text-white">NEW CONTENT DROPPED</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🔥 BREAKING: 5 REVOLUTIONARY NEW ARTICLES JUST PUBLISHED!
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl">
          Discover <span className="font-bold text-yellow-300">5 BRAND NEW cutting-edge articles</span> on AI Cognitive Mesh Networks, Predictive Infrastructure Orchestration, Continuous Learning Systems, Synthetic Creativity, and Hyper-Personalization! 
          Plus explore our expanded library of <span className="font-bold text-yellow-300">160+ revolutionary articles</span> shaping the future of technology!
        </p>

        {/* Featured highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {newArticles.slice(0, 6).map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Link
                to={`/blog/${article.slug}`}
                className="block p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
              >
                {article.highlight && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-black animate-pulse">
                    {article.highlight}
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className="text-3xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    {article.emoji || "⚡"}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-yellow-300 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-blue-200 mb-2">{article.description}</p>
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-500/30 text-blue-200 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Explore All New Content</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all duration-300"
          >
            <span>Get Expert Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">5</div>
            <div className="text-sm text-blue-200">NEW Articles TODAY</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300">160+</div>
            <div className="text-sm text-blue-200">Total Latest Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300">2,800+</div>
            <div className="text-sm text-blue-200">Pages of Insights</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-300">2026</div>
            <div className="text-sm text-blue-200">Future-Ready Topics</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LatestContentBanner2025;