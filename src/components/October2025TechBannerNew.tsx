import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const October2025TechBannerNew = () => {
  const newArticles = [
    {",
      title: "Next-Gen Autonomous Systems",
      description: "The 2025 Enterprise Revolution",",
      slug: "ai-2025-oct-17-next-gen-autonomous-systems",
      icon: Brain,",
      color: "from-purple-500 to-pink-500",
      highlight: "NEW"
    },
    {",
      title: "Generative AI Code Generation",
      description: "Transforming Software Development",",
      slug: "ai-2025-oct-17-generative-ai-code-generation",
      icon: Code2,",
      color: "from-blue-500 to-cyan-500",
      highlight: "HOT"
    },
    {",
      title: "Real-Time Personalization Engines",
      description: "Revolutionizing Customer Experience",",
      slug: "ai-2025-oct-17-real-time-personalization-engines",
      icon: Zap,",
      color: "from-orange-500 to-red-500",
      highlight: "TRENDING"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 md:p-12 shadow-2xl my-12"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-pulse"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >

          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Fresh AI Insights for October 2025
          </h2>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >

          </motion.div>
        </div>

        <p className="text-lg md:text-xl text-purple-200 text-center mb-10 max-w-3xl mx-auto">
          Explore the latest breakthrough technologies transforming industries worldwide. 
          Our expert team shares cutting-edge insights you can implement today.
        </p>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {newArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link to={`/blog/${article.slug}`}>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full border border-white/20 hover:border-white/40 transition-all duration-300">
                  {/* Highlight Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${article.color}`}>
                    {article.highlight}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${article.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <article.icon className="w-7 h-7 text-white"</div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-purple-200 text-sm mb-4">
                    {article.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-purple-300 group-hover:text-purple-100 transition-colors">
                    <span className="text-sm font-semibold">Read Article</span>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              to="/blog"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore All Articles</span>

            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white font-bold rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
          
          <p className="mt-6 text-purple-300 text-sm">
            💡 <strong>Join 10,000+ tech leaders</strong> staying ahead with our insights
          </p>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,",
      delay: Math.random() * 2,
            }}

        ))}
      </div>
    </motion.div>
  );
};

export default October2025TechBannerNew;
