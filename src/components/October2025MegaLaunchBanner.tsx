import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const October2025MegaLaunchBanner = () => {
  const topNewArticles = [
    {",
      title: "Neuro-Symbolic AI in Production",
      description: "10x Better Explainability & 5x Improved Accuracy with Hybrid Neural-Symbolic Systems",",
      slug: "neuro-symbolic-ai-production-2025",
      category: "AI Architecture",",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",",
      badge: "BREAKTHROUGH"
    },
    {",
      title: "AI-Powered DevOps Orchestration",
      description: "85% Fewer Deployment Failures with Autonomous CI/CD & Predictive Intelligence",",
      slug: "ai-powered-devops-orchestration-2025",
      category: "DevOps AI",",
      icon: "🚀",
      gradient: "from-blue-600 to-cyan-600",",
      badge: "FEATURED"
    },
    {",
      title: "Federated Learning at Scale",
      description: "100% Privacy-Compliant AI Across 1000+ Edge Devices with Zero Data Compromise",",
      slug: "federated-learning-privacy-2026",
      category: "Privacy AI",",
      icon: "🔐",
      gradient: "from-green-600 to-teal-600",",
      badge: "ENTERPRISE"
    },
    {",
      title: "Real-Time LLM Streaming",
      description: "Sub-100ms Response Times with Edge-Optimized Inference & Intelligent Caching",",
      slug: "real-time-llm-streaming-2025",
      category: "LLM Performance",",
      icon: "⚡",
      gradient: "from-yellow-600 to-orange-600",",
      badge: "PERFORMANCE"
    },
    {",
      title: "Practical AI Ethics Framework",
      description: "75% Bias Reduction with Production-Ready Governance & Automated Fairness",",
      slug: "ai-ethics-framework-2026",
      category: "AI Governance",",
      icon: "⚖️",
      gradient: "from-indigo-600 to-purple-600",",
      badge: "COMPLIANCE"
    },
    {",
      title: "Multi-Cloud AI Orchestration",
      description: "50% Cost Savings with Intelligent Workload Distribution Across AWS, Azure & GCP",",
      slug: "multi-cloud-ai-orchestration-2025",
      category: "Cloud AI",",
      icon: "☁️",
      gradient: "from-sky-600 to-blue-600",",
      badge: "COST SAVINGS"
    },
    {",
      title: "Conversational AI 2.0",
      description: "95% User Satisfaction with Context-Aware Multi-Turn Dialogue in 50+ Languages",",
      slug: "conversational-ai-breakthrough-2025",
      category: "Conversational AI",",
      icon: "💬",
      gradient: "from-pink-600 to-rose-600",",
      badge: "UX LEADER"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 shadow-2xl my-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
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
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-lg">

              <span className="text-white font-bold text-sm md:text-base">🎉 OCTOBER 2025 MEGA LAUNCH 🎉</span>

            </div>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              7 Game-Changing AI Articles
            </span>
          </h2>
          
          <p className="text-xl md:text-3xl text-purple-100 mb-4 max-w-5xl mx-auto leading-relaxed font-semibold">
            The <strong className="text-white">Ultimate 2025/2026 AI Playbook</strong>: Neuro-Symbolic Systems, DevOps Automation, Privacy-First ML, Real-Time LLM, Ethics Frameworks & More!
          </p>
          
          <p className="text-lg md:text-xl text-pink-200 max-w-4xl mx-auto">
            Transform your AI strategy with production-ready insights, measurable results, and enterprise-grade solutions
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
              whileHover={{ scale: 1.05, translateY: -8 }}
              className="group"
            >
              <Link to={`/blog/${article.slug}`}>
                <div className={`relative bg-gradient-to-br ${article.gradient} rounded-2xl p-6 h-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-xl hover:shadow-2xl`}>
                  {/* Badge */}
                  <div className="absolute -top-3 -left-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-bold text-white shadow-lg">
                    {article.badge}
                  </div>
                  
                  {/* Icon Badge */}
                  <div className="absolute -top-3 -right-3 w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:rotate-12 transition-transform">
                    {article.icon}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="mb-3 mt-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/40">
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
                    <span>Read Full Article</span>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-6 mb-8 border-2 border-white/20 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              
              <div className="text-sm text-purple-200 font-semibold">NEW Articles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-300 mb-1">150+</div>
              <div className="text-sm text-purple-200 font-semibold">Total AI Guides</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-300 mb-1">500+</div>
              <div className="text-sm text-purple-200 font-semibold">Pages Content</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-1">95%</div>
              <div className="text-sm text-purple-200 font-semibold">User Satisfaction</div>
            </div>
            <div>
              
              <div className="text-sm text-purple-200 font-semibold">Future-Ready</div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col items-center text-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center">

            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Production-Ready</h4>
              <p className="text-sm text-purple-200">Deploy in hours, not months</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-pink-500/30 flex items-center justify-center">

            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Measurable ROI</h4>
              <p className="text-sm text-purple-200">3-10x improvements proven</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-cyan-500/30 flex items-center justify-center">

            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Expert Insights</h4>
              <p className="text-sm text-purple-200">15-20 min deep dives</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center">

            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Cutting-Edge</h4>
              <p className="text-sm text-purple-200">Latest 2025/2026 tech</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/blog"
            className="group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >

            <span>Explore All 7 Articles Now</span>

          </Link>
          
          <Link
            to="/contact"
            className="group border-2 border-white hover:bg-white text-white hover:text-purple-900 px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <Lightbulb className="w-6 h-6 group-hover:animate-pulse" <span>Get Expert Consultation</span>
          </Link>
        </div>

        {/* Featured Topics */}
        <div className="pt-6 border-t border-white/20">
          <p className="text-center text-purple-200 text-sm mb-4 font-bold flex items-center justify-center gap-2">

            FEATURED TOPICS & TECHNOLOGIES

          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Neuro-Symbolic AI",
              "DevOps Automation", 
              "Federated Learning",
              "Real-Time LLM",
              "AI Ethics",
              "Multi-Cloud",
              "Privacy-First ML",
              "Sub-100ms Latency",
              "95% Accuracy",
              "50% Cost Savings",
              "Zero Vendor Lock-in",
              "GDPR Compliant",
              "Production-Ready"
            ].map((topic) => (
              <span
key={topic} 
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/30 hover:border-white/50 hover:bg-white/20 transition-all cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default October2025MegaLaunchBanner;