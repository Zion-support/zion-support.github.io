import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LatestContentBanner2025 = () => {
  const newArticles = [
    {
      title: "Agentic AI Workflows 2026",
      description: "Production-Ready Multi-Agent Systems",
      slug: "agentic-ai-workflows-production-2026",
      category: "AI Engineering"
    },
    {
      title: "LLM Function Calling Mastery 2026",
      description: "Building Reliable AI Tools at Scale",
      slug: "llm-function-calling-mastery-2026",
      category: "LLM Engineering"
    },
    {
      title: "Vector Search Optimization 2026",
      description: "Sub-10ms Semantic Search at Billion Scale",
      slug: "vector-search-optimization-2026",
      category: "Search Infrastructure"
    },
    {
      title: "AI Cost Optimization 2026",
      description: "Cut LLM Costs by 80% Without Sacrificing Quality",
      slug: "ai-cost-optimization-production-2026",
      category: "FinOps"
    },
    {
      title: "Real-World RAG Production 2026",
      description: "Beyond the Demo to Enterprise Scale",
      slug: "real-world-rag-production-2026",
      category: "GenAI"
    },
    {
      title: "LLM Security & Red Teaming 2026",
      description: "Defend Against Prompt Injection & Jailbreaks",
      slug: "llm-security-red-teaming-2026",
      category: "AI Security"
    },
    {
      title: "Continuous Training ML Systems 2026",
      description: "Always-Fresh Models That Adapt",
      slug: "continuous-training-ml-systems-2026",
      category: "MLOps"
    },
    {
      title: "Streaming LLM Architecture 2026",
      description: "Real-Time Token Generation <200ms TTFB",
      slug: "streaming-llm-architecture-2026",
      category: "Real-Time AI"
    },
    {
      title: "Prompt Caching Strategies 2026",
      description: "90% Cost Reduction with Smart Caching",
      slug: "prompt-caching-strategies-2026",
      category: "LLM Optimization"
    },
    {
      title: "Fine-Tuning LLMs for Production 2026",
      description: "Domain Expertise at 10x Lower Cost",
      slug: "fine-tuning-llms-production-2026",
      category: "LLM Training"
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
          🚀 September 30, 2025 — MASSIVE CONTENT EXPANSION!
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl">
          Discover <span className="font-bold text-yellow-300">15 BRAND NEW cutting-edge articles</span> on Agentic AI Workflows, LLM Function Calling, Vector Search Optimization, Real-World RAG Production, AI Cost Optimization, and more! 
          Plus <span className="font-bold text-yellow-300">5 NEW game-changing case studies</span> featuring FinTech fraud prevention, autonomous driving, adaptive learning, and precision farming!
          Explore our expanded library of <span className="font-bold text-yellow-300">100+ revolutionary articles and 15+ case studies</span> shaping 2026!
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
            <div className="text-3xl font-bold text-yellow-300">15</div>
            <div className="text-sm text-blue-200">NEW Articles TODAY</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300">100+</div>
            <div className="text-sm text-blue-200">Total Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300">5</div>
            <div className="text-sm text-blue-200">NEW Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-300">15+</div>
            <div className="text-sm text-blue-200">Total Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300">1500+</div>
            <div className="text-sm text-blue-200">Pages of Insights</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LatestContentBanner2025;