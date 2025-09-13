import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Brain, TrendingUp, Star, ArrowRight, BookOpen, FileText, Users } from 'lucide-react';

const QuantumAIContentPromotionBanner: React.FC = () => {
  const newContent = [
    {
      id: 1,
      title: "Quantum-AI Fusion: The 2025 Breakthrough",
      description: "Discover how quantum-AI fusion is reshaping everything with 10,000x faster processing and 99.9% accuracy.",
      type: "Blog Post",
      icon: Brain,
      link: "/blog/quantum-ai-fusion-2025-breakthrough",
      featured: true,
      metrics: "10,000x faster processing"
    },
    {
      id: 2,
      title: "TechBank's Quantum-AI Transformation",
      description: "How TechBank achieved 99.9% trading accuracy and $2.5B revenue growth with quantum-AI fusion.",
      type: "Case Study",
      icon: TrendingUp,
      link: "/case-studies/quantum-ai-financial-transformation-success",
      featured: true,
      metrics: "$2.5B revenue growth"
    },
    {
      id: 3,
      title: "Quantum-AI Implementation Master Guide",
      description: "Complete roadmap for implementing quantum-AI fusion with 2,500-5,000% ROI within 12 months.",
      type: "Resource Guide",
      icon: BookOpen,
      link: "/resources/quantum-ai-implementation-master-guide-2025",
      featured: true,
      metrics: "2,500-5,000% ROI"
    }
  ];

  return (
    <motion.section 
      className="relative py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            BREAKTHROUGH CONTENT
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Quantum-AI</span> Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in quantum-AI fusion that are transforming industries and delivering unprecedented results
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <motion.div
                key={content.id}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 h-full hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  {/* Content Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm font-medium text-yellow-400">{content.type}</span>
                    </div>
                    {content.featured && (
                      <div className="flex items-center gap-1 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                        <Star className="w-3 h-3" />
                        FEATURED
                      </div>
                    )}
                  </div>

                  {/* Content Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {content.title}
                  </h3>

                  {/* Content Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {content.description}
                  </p>

                  {/* Metrics */}
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-semibold text-green-400">{content.metrics}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    to={content.link}
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with Quantum-AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join industry leaders who are already achieving 2,500-5,000% ROI with our quantum-AI fusion solutions. 
              Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources/quantum-ai-implementation-master-guide-2025"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Implementation Guide
              </Link>
              <Link
                to="/case-studies"
                className="bg-white/10 backdrop-blur-lg border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10,000x</div>
            <div className="text-sm text-gray-300">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">5,000%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-sm text-gray-300">Success Stories</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuantumAIContentPromotionBanner;