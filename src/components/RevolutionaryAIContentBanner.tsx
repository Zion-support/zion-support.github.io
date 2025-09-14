import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  TrendingUp,
  Star,
  Rocket,
  Sparkles,
  Brain,
  Target,
  Award
} from 'lucide-react';

const RevolutionaryAIContentBanner = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      text: "Next-Generation Neural Architectures",
      color: "text-purple-400"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Quantum AI Autonomous Operations",
      color: "text-cyan-400"
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "98% Accuracy in AI Diagnosis",
      color: "text-green-400"
    }
  ];

  const stats = [
    { number: "$2B", label: "ROI Achieved", sublabel: "18 months" },
    { number: "1000%", label: "Performance Gain", sublabel: "Quantum AI" },
    { number: "95%", label: "Autonomous Operations", sublabel: "Zero human intervention" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-purple to-zion-slate-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-zion-purple/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-zion-blue/20 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm border border-zion-cyan/30 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-zion-cyan" />
            <span className="text-white">Revolutionary AI Content - January 2025</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Revolutionary AI
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Content & Resources
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-zion-slate-light max-w-5xl mx-auto mb-12 leading-relaxed">
            Discover groundbreaking insights, next-generation neural architectures, 
            and proven strategies that are transforming industries worldwide.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-2xl"
              >
                <div className={`${feature.color}`}>
                  {feature.icon}
                </div>
                <span className="text-white font-semibold text-lg">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="text-5xl md:text-6xl font-bold text-zion-cyan mb-2">{stat.number}</div>
              <div className="text-white font-semibold text-xl mb-1">{stat.label}</div>
              <div className="text-zion-slate-light text-sm">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            to="/blog/neural-architecture-revolution-next-generation-ai-systems-2025"
            className="group inline-flex items-center space-x-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-zion-cyan/25"
          >
            <Brain className="w-7 h-7 group-hover:animate-pulse" />
            <span>Explore Neural Architectures</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transform transition-transform" />
          </Link>

          <Link
            to="/case-studies/fortune-500-company-achieves-2-billion-roi-quantum-ai-autonomous-operations"
            className="group inline-flex items-center space-x-4 border-2 border-zion-cyan text-zion-cyan px-10 py-5 rounded-2xl font-bold text-xl hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <Award className="w-7 h-7 group-hover:animate-spin" />
            <span>View $2B ROI Case Study</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transform transition-transform" />
          </Link>

          <Link
            to="/resources"
            className="group inline-flex items-center space-x-4 bg-gradient-to-r from-zion-purple to-zion-blue text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-zion-purple/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-zion-purple/25"
          >
            <Rocket className="w-7 h-7 group-hover:animate-bounce" />
            <span>Access All Resources</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transform transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryAIContentBanner;