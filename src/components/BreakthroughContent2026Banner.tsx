import { ArrowRight, Rocket, Sparkles, Star, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BreakthroughContent2026Banner = () => {
  const breakthroughArticles = [
    {
      title: "AI Consciousness Simulation 2027",
      description: "Modeling Human Cognition at Neural Resolution",
      slug: "ai-consciousness-simulation-2027",
      category: "Cognitive AI",
      impact: "300% improvement in human-AI collaboration",
      emoji: "🧠"
    },
    {
      title: "AI Molecular Design Automation 2026",
      description: "Engineering Molecules with Atomic Precision",
      slug: "ai-molecular-design-automation-2026",
      category: "Computational Chemistry",
      impact: "1000x faster molecule discovery",
      emoji: "⚛️"
    },
    {
      title: "AI Climate Modeling 2026",
      description: "Predicting Climate Patterns with 95% Accuracy",
      slug: "ai-climate-modeling-prediction-2026",
      category: "Climate Science",
      impact: "10-year predictions with 95% accuracy",
      emoji: "🌍"
    },
    {
      title: "AI Protein Folding Breakthrough 2026",
      description: "Cracking Nature's Code in Milliseconds",
      slug: "ai-protein-folding-breakthrough-2026",
      category: "Computational Biology",
      impact: "1000x faster protein analysis",
      emoji: "🧬"
    },
    {
      title: "AI Autonomous Construction 2026",
      description: "Self-Building Infrastructure at Scale",
      slug: "ai-autonomous-construction-2026",
      category: "Construction Tech",
      impact: "50% cost reduction, 3x faster",
      emoji: "🏗️"
    },
    {
      title: "AI Financial Fraud Prevention 2026",
      description: "Real-Time Detection with 99.99% Accuracy",
      slug: "ai-financial-fraud-prevention-2026",
      category: "FinTech Security",
      impact: "Billions in fraud prevention",
      emoji: "🛡️"
    },
    {
      title: "AI Space Exploration Autonomy 2026",
      description: "Autonomous Systems for Deep Space Missions",
      slug: "ai-space-exploration-autonomy-2026",
      category: "Space Technology",
      impact: "Enables interplanetary exploration",
      emoji: "🚀"
    },
    {
      title: "AI Mental Health Diagnosis 2026",
      description: "Early Detection Saving Lives",
      slug: "ai-mental-health-diagnosis-2026",
      category: "Healthcare AI",
      impact: "92% early detection accuracy",
      emoji: "💚"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-10 md:p-14 my-12 shadow-2xl"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full border-2 border-yellow-400/40 mb-6"
          >
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
            <span className="text-lg font-black text-white tracking-wider uppercase">
              🔥 BREAKTHROUGH CONTENT 2026 🔥
            </span>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
            🚀 8 Revolutionary Breakthroughs That Will Change Everything
          </h2>
          
          <p className="text-2xl text-purple-100 mb-4 max-w-4xl mx-auto font-bold">
            From consciousness simulation to space exploration, molecular design to mental health — 
            discover the AI innovations shaping our future!
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-semibold">ALL REVOLUTIONARY IMPACT</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">TRENDING NOW</span>
            </div>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {breakthroughArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <Link
                to={`/blog/${article.slug}`}
                className="block h-full p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border-2 border-white/20 hover:border-yellow-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {article.emoji}
                </div>
                <div className="text-xs font-bold text-purple-300 mb-2 uppercase tracking-wider">
                  {article.category}
                </div>
                <h3 className="font-black text-white text-lg mb-3 group-hover:text-yellow-300 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-purple-200 mb-4 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-bold text-green-300">{article.impact}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-2xl font-black text-xl hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Rocket className="w-7 h-7" />
              <span>Explore All Breakthrough Content</span>
              <ArrowRight className="w-7 h-7" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-3 border-white text-white rounded-2xl font-black text-xl hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              <span>Get Expert Consultation</span>
              <ArrowRight className="w-7 h-7" />
            </Link>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t-2 border-white/20">
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-300 mb-2">8</div>
              <div className="text-sm text-purple-200 font-semibold">Revolutionary Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-300 mb-2">1000x</div>
              <div className="text-sm text-purple-200 font-semibold">Performance Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-pink-300 mb-2">99.9%</div>
              <div className="text-sm text-purple-200 font-semibold">AI Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-300 mb-2">2027</div>
              <div className="text-sm text-purple-200 font-semibold">Future-Ready</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BreakthroughContent2026Banner;