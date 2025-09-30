import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LatestContentBanner2025 = () => {
  const newArticles = [
    {
      title: "AI Observability Revolution 2026",
      description: "Full-Stack Intelligence Monitoring",
      slug: "ai-observability-revolution-2026",
      category: "Observability"
    },
    {
      title: "Blockchain-AI Convergence 2026",
      description: "Decentralized Intelligence Networks",
      slug: "blockchain-ai-convergence-2026",
      category: "Blockchain"
    },
    {
      title: "Hyper-Personalization Engine 2026",
      description: "Real-Time Adaptive User Experiences",
      slug: "hyper-personalization-engine-2026",
      category: "User Experience"
    },
    {
      title: "Sustainable AI Computing 2026",
      description: "Green AI for Carbon-Neutral Operations",
      slug: "sustainable-ai-computing-2026",
      category: "Sustainability"
    },
    {
      title: "AI-Powered Data Mesh Architecture 2026",
      description: "Distributed Data Intelligence",
      slug: "ai-data-mesh-architecture-2026",
      category: "Data Architecture"
    },
    {
      title: "Intelligent Automation Platforms 2026",
      description: "Self-Optimizing Business Processes",
      slug: "intelligent-automation-platforms-2026",
      category: "Automation"
    },
    {
      title: "Edge-Native Applications 2026",
      description: "Ultra-Low Latency Distributed Computing",
      slug: "edge-native-applications-2026",
      category: "Edge Computing"
    },
    {
      title: "Conversational AI for Enterprises 2026",
      description: "Human-Level Business Dialogue",
      slug: "conversational-ai-enterprises-2026",
      category: "Conversational AI"
    },
    {
      title: "AI Ethics Framework 2026",
      description: "Responsible AI Development at Scale",
      slug: "ai-ethics-framework-2026",
      category: "AI Ethics"
    },
    {
      title: "Spatial Computing AI 2026",
      description: "Intelligent 3D Environments",
      slug: "spatial-computing-ai-2026",
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
          🚀 September 30, 2025 Content Release
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl">
          Explore our latest cutting-edge insights on AI, emerging technologies, and the future of enterprise innovation. 
          <span className="font-bold text-yellow-300"> 10 brand new articles</span> covering the most important trends shaping 2026.
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
            <div className="text-3xl font-bold text-yellow-300">10</div>
            <div className="text-sm text-blue-200">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300">100+</div>
            <div className="text-sm text-blue-200">Pages of Insights</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300">10</div>
            <div className="text-sm text-blue-200">Key Tech Categories</div>
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