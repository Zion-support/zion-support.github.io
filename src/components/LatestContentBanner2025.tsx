import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LatestContentBanner2025 = () => {
  const newArticles = [
    {
      title: "AI Agentic Orchestration 2025",
      description: "Deploy 100+ Coordinated Agents in Production",
      slug: "ai-agentic-orchestration-production-2025",
      category: "Multi-Agent Systems",
      isNew: true
    },
    {
      title: "AI Cost Optimization 2025",
      description: "Reduce LLM Costs by 80% Without Quality Loss",
      slug: "ai-cost-optimization-llm-2025",
      category: "AI Cost Optimization",
      isNew: true
    },
    {
      title: "Autonomous Data Pipelines 2025",
      description: "Self-Healing ETL at Petabyte Scale",
      slug: "autonomous-data-pipelines-2025",
      category: "Data Engineering",
      isNew: true
    },
    {
      title: "Real-Time AI Analytics 2025",
      description: "Sub-Second Insights from Billion-Event Streams",
      slug: "realtime-ai-analytics-dashboard-2025",
      category: "Real-Time Analytics",
      isNew: true
    },
    {
      title: "AI Automated Incident Response 2025",
      description: "From Detection to Resolution in Under 60 Seconds",
      slug: "ai-automated-incident-response-2025",
      category: "Site Reliability",
      isNew: true
    },
    {
      title: "AI Autonomous DevOps 2026",
      description: "Self-Managing CI/CD Pipelines with Zero Downtime",
      slug: "ai-autonomous-devops-2026",
      category: "DevOps AI"
    },
    {
      title: "AI Legal Document Automation 2026",
      description: "From Contracts to Compliance in Seconds",
      slug: "ai-legal-document-automation-2026",
      category: "Legal Tech"
    },
    {
      title: "AI Customer Experience 2026",
      description: "Hyper-Personalization Achieving 400% Engagement",
      slug: "ai-customer-experience-hyper-personalization-2026",
      category: "Customer Experience"
    },
    {
      title: "AI Renewable Energy Optimization 2026",
      description: "Smart Grids Achieving 95% Efficiency",
      slug: "ai-renewable-energy-optimization-2026",
      category: "Energy Tech"
    },
    {
      title: "AI Research Acceleration Platform 2026",
      description: "10x Faster Scientific Discovery",
      slug: "ai-research-acceleration-platform-2026",
      category: "Research AI"
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
          🔥 October 15, 2025 — LATEST BREAKTHROUGHS JUST RELEASED!
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl">
          Discover <span className="font-bold text-yellow-300">5 BRAND NEW production-ready articles</span> on AI Agentic Orchestration, Cost Optimization, Autonomous Data Pipelines, Real-Time Analytics, and Automated Incident Response! 
          Plus explore our expanded library of <span className="font-bold text-yellow-300">30+ cutting-edge articles</span> shaping 2025-2026!
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
            <div className="text-sm text-blue-200">NEW Articles Oct 15</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300">30+</div>
            <div className="text-sm text-blue-200">Total Latest Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300">300+</div>
            <div className="text-sm text-blue-200">Pages of Insights</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-300">99.9%</div>
            <div className="text-sm text-blue-200">Production Reliability</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LatestContentBanner2025;