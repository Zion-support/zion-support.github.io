import { ArrowRight, Award, BookOpen, Briefcase, Lightbulb, Rocket, Sparkles, Star, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewContentShowcase2026 = () => {
  const showcaseItems = [
    {
      type: "Breakthrough Innovations",
      count: 10,
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      description: "Revolutionary technologies reshaping industries",
      highlights: [
        "Neuromorphic Computing: 10,000x Energy Efficiency",
        "Photonic AI: Light-Speed Processing",
        "DNA Data Storage: 1B TB in a Gram"
      ],
      link: "/blog",
      emoji: "💡"
    },
    {
      type: "Success Stories",
      count: 6,
      icon: <Award className="w-8 h-8" />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      description: "Real enterprises achieving extraordinary results",
      highlights: [
        "$847M Fraud Prevention for Global Bank",
        "Drug Discovery: 8 Years → 11 Months",
        "340% Revenue Growth from AI Personalization"
      ],
      link: "/case-studies",
      emoji: "🏆"
    },
    {
      type: "Technical Guides",
      count: 100,
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      description: "Production-ready AI implementation guides",
      highlights: [
        "Multi-Agent Orchestration Patterns",
        "Zero-Trust GenAI Security",
        "Edge AI with Sub-100ms Latency"
      ],
      link: "/blog",
      emoji: "📚"
    }
  ];

  const impactMetrics = [
    { value: "100+", label: "New Articles & Guides", color: "text-cyan-400" },
    { value: "10", label: "Breakthrough Innovations", color: "text-purple-400" },
    { value: "6", label: "Enterprise Success Stories", color: "text-green-400" },
    { value: "$2.9B", label: "Total Client Savings", color: "text-yellow-400" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl shadow-2xl my-16">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full">
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
            <span className="text-white font-bold text-base md:text-lg">🚀 MASSIVE CONTENT UPDATE — SEPTEMBER 30, 2025</span>
            <Rocket className="w-6 h-6 text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              116+ New Resources
            </span>
            <br />
            <span className="text-white">
              To Transform Your Business
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-4xl mx-auto leading-relaxed">
            From <strong className="text-cyan-300">breakthrough innovations</strong> to <strong className="text-green-300">proven success stories</strong>—everything you need to lead in the AI era
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-200 text-sm font-semibold">
              ⚡ Production-Ready
            </span>
            <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-200 text-sm font-semibold">
              📊 Measurable ROI
            </span>
            <span className="px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-200 text-sm font-semibold">
              🎯 Enterprise-Grade
            </span>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all hover:scale-105"
            >
              <div className={`text-3xl md:text-5xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-blue-100 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Showcase Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
              className="group relative"
            >
              <Link to={item.link}>
                <div className={`relative bg-gradient-to-br ${item.gradient} rounded-2xl p-8 h-full border-2 border-white/30 hover:border-white/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105`}>
                  {/* Icon Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:rotate-12 transition-transform">
                    {item.emoji}
                  </div>

                  {/* Icon */}
                  <div className="text-white mb-4">
                    {item.icon}
                  </div>

                  {/* Type & Count */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.count} {item.type}
                  </h3>

                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-white/95 text-xs">
                        <Star className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                    <span>Explore Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why This Content Matters
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 text-lg">Battle-Tested Patterns</h4>
                <p className="text-sm text-blue-200">Deploy proven solutions that have delivered billions in value for Fortune 500 companies</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 text-lg">Measurable ROI</h4>
                <p className="text-sm text-blue-200">Real metrics from real enterprises—from 340% revenue growth to $847M in savings</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 text-lg">Future-Ready Tech</h4>
                <p className="text-sm text-blue-200">Breakthrough innovations like neuromorphic computing and photonic AI—available today</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/blog"
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Explore All Content</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="group border-2 border-white hover:bg-white text-white hover:text-blue-900 px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <Rocket className="w-6 h-6 group-hover:animate-bounce" />
            <span>Start Your Transformation</span>
          </Link>
        </motion.div>

        {/* Featured Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-center text-blue-200 text-sm mb-4 font-semibold uppercase tracking-wide">
            Featured Topics & Technologies
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Neuromorphic Computing",
              "Photonic AI",
              "DNA Data Storage",
              "Liquid Neural Networks",
              "Brain-Computer Interfaces",
              "Quantum-Resistant Crypto",
              "Swarm Robotics",
              "Molecular Computing",
              "Multi-Agent Systems",
              "Edge Personalization",
              "Zero-Trust Security",
              "Predictive Maintenance",
              "Drug Discovery AI",
              "Supply Chain Optimization"
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;