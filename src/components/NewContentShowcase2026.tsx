import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Zap, Sparkles, ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';

const NewContentShowcase2026: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2026: Next-Generation Autonomous Systems",
      description: "Revolutionary breakthroughs in autonomous AI systems that are transforming enterprise operations with self-operating agents and advanced neural architectures.",
      image: "/api/placeholder/600/400",
      link: "/ai-2026-next-generation-autonomous-systems",
      category: "Autonomous Systems",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      stats: ["75% Cost Reduction", "90% Faster Response", "60% Productivity Increase"],
      tags: ["AI Breakthrough", "Enterprise AI", "Autonomous Systems"]
    },
    {
      id: 2,
      title: "Quantum AI Integration: The Future is Now",
      description: "Explore the revolutionary convergence of quantum computing and artificial intelligence in 2026. Discover quantum advantages and real-world applications.",
      image: "/api/placeholder/600/400",
      link: "/quantum-ai-integration-2026",
      category: "Quantum Computing",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      stats: ["40% Faster Optimization", "60% Predictive Accuracy", "80% Computational Speed"],
      tags: ["Quantum Computing", "AI Integration", "Future Tech"]
    },
    {
      id: 3,
      title: "Advanced AI Solutions 2026",
      description: "Cutting-edge AI technologies and solutions that are reshaping the digital landscape and driving unprecedented business transformation.",
      image: "/api/placeholder/600/400",
      link: "/advanced-ai-solutions-2026",
      category: "AI Solutions",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500",
      stats: ["100% Future Ready", "Advanced Analytics", "Enterprise Scale"],
      tags: ["AI Solutions", "Digital Transformation", "Innovation"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description: "Real-world metrics showing significant improvements across all key performance indicators"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Access to industry-leading AI experts and implementation specialists"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Ready",
      description: "Battle-tested solutions designed for large-scale enterprise deployment"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Now Available
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in artificial intelligence, autonomous systems, and quantum computing that are reshaping the future of technology.
          </p>
        </motion.div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredContent.map((content, index) => (
            <motion.div
              key={content.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className={`p-4 rounded-full bg-gradient-to-r ${content.gradient} text-white`}>
                  {content.icon}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.stats.slice(0, 2).map((stat, statIndex) => (
                    <span 
                      key={statIndex}
                      className="bg-white/10 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {content.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-cyan-400 text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={content.link}
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${content.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-full justify-center`}
                >
                  <span>Explore Content</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div 
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our AI Solutions?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore the Future of AI?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of organizations already transforming with our AI solutions.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;