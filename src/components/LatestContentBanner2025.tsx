import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LatestContentBanner2025 = () => {
  const breakthroughArticles = [
    {
      title: "AI 2025: Autonomous Operations Revolution",
      description: "95% Automation, $2M+ Annual Savings",
      slug: "ai-autonomous-operations-2025",
      category: "AI Innovation",
      emoji: "🚀",
      highlight: "NEW TODAY",
      impact: "95% Automation"
    },
    {
      title: "Fortune 500 AI Transformation",
      description: "$50M Annual Savings, 300% ROI",
      slug: "fortune-500-ai-transformation",
      category: "Success Story",
      emoji: "💰",
      highlight: "NEW TODAY",
      impact: "$50M Savings"
    },
    {
      title: "AI Autonomous Operations Service",
      description: "Enterprise AI Solutions, 95% Automation",
      slug: "ai-autonomous-operations",
      category: "New Service",
      emoji: "⚡",
      highlight: "NEW TODAY",
      impact: "95% Automation"
    },
    {
      title: "Autonomous AI Agents in Enterprise",
      description: "70% Cost Reduction, 10x Productivity",
      slug: "autonomous-ai-agents-enterprise-2025",
      category: "AI Strategy",
      emoji: "🤖",
      highlight: "NEW TODAY",
      impact: "70% Cost Savings"
    },
    {
      title: "Neuromorphic Computing Revolution",
      description: "10,000x Energy Efficiency Now Available",
      slug: "neuromorphic-computing-revolution-2025",
      category: "Hardware AI",
      emoji: "🧠",
      highlight: "NEW TODAY",
      impact: "10,000x Efficiency"
    },
    {
      title: "Quantum-AI Convergence",
      description: "Solving the Impossible in 2025",
      slug: "quantum-ai-convergence-2025",
      category: "Quantum Computing",
      emoji: "⚛️",
      highlight: "NEW TODAY",
      impact: "1000x Speedup"
    },
    {
      title: "Zero Trust AI Security",
      description: "Sub-30s Threat Response, 99.8% Accuracy",
      slug: "zero-trust-ai-security-2025",
      category: "Cybersecurity",
      emoji: "🛡️",
      highlight: "NEW TODAY",
      impact: "99.8% Detection"
    },
    {
      title: "Edge AI Transformation",
      description: "<10ms Inference, 100% Privacy",
      slug: "edge-ai-transformation-2025",
      category: "Edge Computing",
      emoji: "⚡",
      highlight: "NEW TODAY",
      impact: "<10ms Latency"
    },
    {
      title: "Synthetic Data Revolution",
      description: "Unlimited Training Data, Perfect Privacy",
      slug: "synthetic-data-revolution-2025",
      category: "Data Science",
      emoji: "🔬",
      highlight: "NEW TODAY",
      impact: "10x Dev Speed"
    },
    {
      title: "AI Contract Intelligence",
      description: "95% Faster Review, 99.8% Accuracy",
      slug: "ai-contract-intelligence-2025",
      category: "Legal Tech",
      emoji: "⚖️",
      highlight: "NEW TODAY",
      impact: "95% Faster"
    },
    {
      title: "Real-Time Personalization",
      description: "Sub-50ms, 340% Revenue Growth",
      slug: "real-time-personalization-2025",
      category: "Customer Experience",
      emoji: "🎯",
      highlight: "NEW TODAY",
      impact: "340% Revenue+"
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
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-semibold text-white">BREAKTHROUGH CONTENT • SEPT 30, 2025</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm font-semibold text-yellow-300">11 NEW ARTICLES</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🚀 JUST PUBLISHED: 11 Revolutionary Breakthrough Articles!
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl">
          Discover <span className="font-bold text-yellow-300">11 BRAND NEW cutting-edge articles</span> including our latest: "AI 2025: The Enterprise Autonomous Operations Revolution" (95% automation, $2M+ savings), "Fortune 500 AI Transformation Case Study" ($50M annual savings), and "AI Autonomous Operations Service" - plus 8 more breakthrough insights on Neuromorphic Computing, Quantum-AI Convergence, Zero Trust Security, Edge AI, Synthetic Data, AI Contract Intelligence, and Real-Time Personalization!
        </p>

        {/* Featured highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {breakthroughArticles.map((article, index) => (
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
                className="block p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 relative overflow-hidden h-full"
              >
                {article.highlight && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-black animate-pulse">
                    {article.highlight}
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <div className="text-3xl flex-shrink-0 mb-2 group-hover:scale-110 transition-transform">
                    {article.emoji}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-yellow-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-blue-200 mb-2">{article.description}</p>
                  <div className="mt-auto">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-500/30 text-green-200 rounded-full mb-1">
                      {article.impact}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-500/30 text-blue-200 rounded-full ml-1">
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
            <span>Read All Breakthrough Articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all duration-300"
          >
            <span>Get Expert Implementation Help</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">11</div>
            <div className="text-sm text-blue-200">NEW Articles TODAY</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300">50+</div>
            <div className="text-sm text-blue-200">Total Expert Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300">500+</div>
            <div className="text-sm text-blue-200">Pages of Deep Insights</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-300">10,000x</div>
            <div className="text-sm text-blue-200">Max Performance Gain</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LatestContentBanner2025;