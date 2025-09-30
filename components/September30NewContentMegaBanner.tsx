import { ArrowRight, BookOpen, Lightbulb, Rocket, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const September30NewContentMegaBanner = () => {
  const topNewArticles = [
    {
      title: "AI Composite Agents 2026",
      description: "Multi-Model Intelligence Orchestration for 3-5x Better Outcomes",
      slug: "ai-composite-agents-2026",
      category: "AI Engineering",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cognitive Load Optimization AI 2026",
      description: "Reduce Decision Fatigue by 70% with Intelligent Defaults",
      slug: "cognitive-load-optimization-ai-2026",
      category: "Human-Centered AI",
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Contract Intelligence 2026",
      description: "98%+ Accuracy in Legal Analysis, 90% Faster Review",
      slug: "ai-contract-intelligence-2026",
      category: "Legal Tech",
      icon: "⚖️",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "AI-Powered Incident Prediction 2026",
      description: "Prevent Outages 30-120 Minutes Before They Happen",
      slug: "ai-powered-incident-prediction-2026",
      category: "Site Reliability",
      icon: "🚨",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Real-Time Personalization at Edge 2026",
      description: "Sub-50ms Adaptive Experiences with 3-5x Engagement Lift",
      slug: "real-time-personalization-edge-2026",
      category: "Edge Computing",
      icon: "⚡",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 shadow-2xl my-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
              <span className="text-white font-bold text-sm">SEPTEMBER 30, 2025 — MAJOR CONTENT DROP</span>
              <Rocket className="w-5 h-5 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            🚀 <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              5 Revolutionary AI Articles
            </span> 🚀
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-3 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking insights on <strong className="text-white">Multi-Model Agents, Cognitive UX, Legal AI, Incident Prediction, and Edge Personalization</strong>
          </p>
          
          <p className="text-lg text-cyan-200 max-w-3xl mx-auto">
            These cutting-edge articles will transform how you build, deploy, and scale AI systems in 2026!
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {topNewArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="group"
            >
              <Link to={`/blog/${article.slug}`}>
                <div className={`relative bg-gradient-to-br ${article.gradient} rounded-2xl p-6 h-full border-2 border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                  {/* Icon Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform">
                    {article.icon}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-200 transition-colors">
                    {article.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-white/90 leading-relaxed">
                    {article.description}
                  </p>
                  
                  {/* Read More Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-1">5</div>
              <div className="text-sm text-blue-200">NEW Articles Today</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-1">100+</div>
              <div className="text-sm text-blue-200">Total AI Articles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-1">300+</div>
              <div className="text-sm text-blue-200">Pages of Insights</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-1">2026</div>
              <div className="text-sm text-blue-200">Future-Ready</div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Production-Ready</h4>
              <p className="text-sm text-blue-200">Battle-tested patterns you can deploy today</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Deep Technical Insights</h4>
              <p className="text-sm text-blue-200">12-18 minute expert-level guides</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-green-300" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Measurable Results</h4>
              <p className="text-sm text-blue-200">Real metrics: 3-5x improvements, 40-90% cost savings</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/blog"
            className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Explore All 5 New Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contact"
            className="group border-2 border-white hover:bg-white text-white hover:text-blue-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <Lightbulb className="w-6 h-6 group-hover:animate-pulse" />
            <span>Get Expert Consultation</span>
          </Link>
        </div>

        {/* Featured Topics */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-center text-blue-200 text-sm mb-3 font-semibold">FEATURED TOPICS:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Multi-Model Orchestration", "Cognitive UX Design", "Contract Intelligence", "Predictive AIOps", "Edge Personalization", "Privacy-Preserving ML", "Automated Legal Review", "Anomaly Detection", "On-Device AI"].map((topic) => (
              <span key={topic} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20 hover:bg-white/20 transition-colors">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default September30NewContentMegaBanner;