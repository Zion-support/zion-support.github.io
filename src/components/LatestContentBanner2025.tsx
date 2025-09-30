import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LatestContentBanner2025 = () => {
  const newArticles = [
    {
      title: "AI Predictive Maintenance Manufacturing 2026",
      description: "80% Downtime Reduction with 95% Prediction Accuracy",
      slug: "ai-predictive-maintenance-manufacturing-2026",
      category: "Manufacturing AI"
    },
    {
      title: "AI-Quantum Hybrid Optimization 2026",
      description: "10,000x Speedup for Complex Problems",
      slug: "ai-quantum-hybrid-optimization-2026",
      category: "Quantum Computing"
    },
    {
      title: "AI Emotional Intelligence Enterprise 2026",
      description: "350% Customer Satisfaction Boost",
      slug: "ai-emotional-intelligence-enterprise-2026",
      category: "Customer Experience"
    },
    {
      title: "AI Autonomous Supply Chain Resilience 2026",
      description: "99.5% On-Time Delivery at 35% Lower Cost",
      slug: "ai-autonomous-supply-chain-resilience-2026",
      category: "Supply Chain"
    },
    {
      title: "AI Zero Trust Security Architecture 2026",
      description: "99.97% Breach Prevention at Scale",
      slug: "ai-zero-trust-security-architecture-2026",
      category: "Cybersecurity"
    },
    {
      title: "AI Autonomous Legal Analysis 2026",
      description: "10x Faster Case Research with 99% Accuracy",
      slug: "ai-autonomous-legal-analysis-2026",
      category: "Legal Tech"
    },
    {
      title: "Federated AI Governance Networks 2026",
      description: "Distributed Intelligence with Zero Trust",
      slug: "federated-ai-governance-networks-2026",
      category: "AI Governance"
    },
    {
      title: "Self-Evolving AI Models 2026",
      description: "Continuous Learning Without Human Intervention",
      slug: "self-evolving-ai-models-2026",
      category: "Machine Learning"
    },
    {
      title: "AI-Powered DevSecOps Automation 2026",
      description: "Zero-Touch Security in CI/CD",
      slug: "ai-powered-devsecops-automation-2026",
      category: "DevSecOps"
    },
    {
      title: "Holographic AI Interfaces 2026",
      description: "Spatial Computing Meets Generative AI",
      slug: "holographic-ai-interfaces-2026",
      category: "Spatial Computing"
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
          🚀 September 30, 2025 — REVOLUTIONARY CONTENT DROP!
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl">
          Discover <span className="font-bold text-yellow-300">5 BRAND NEW groundbreaking articles</span> on AI Predictive Maintenance (80% downtime reduction), Quantum-AI Hybrid Optimization (10,000x speedup), Emotional Intelligence AI (350% satisfaction boost), Autonomous Supply Chains (99.5% on-time delivery), and Zero Trust Security (99.97% breach prevention)! 
          Plus explore our expanded library of <span className="font-bold text-yellow-300">35+ cutting-edge articles</span> shaping 2026!
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
                className="block p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1 group-hover:animate-pulse" />
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
                <div className="text-3xl font-bold text-green-300">35+</div>
                <div className="text-sm text-blue-200">Total Latest Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">300+</div>
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