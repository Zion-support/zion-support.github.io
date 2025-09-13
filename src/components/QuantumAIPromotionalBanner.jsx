import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  TrendingUp,
  Star,
  Rocket,
  Sparkles
} from 'lucide-react';

const QuantumAIPromotionalBanner = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Quantum AI Fusion Technology",
      color: "text-cyan-400"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Next-Generation Neural Architectures",
      color: "text-purple-400"
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "$2 Billion ROI Case Studies",
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-zion-blue-dark via-zion-purple to-zion-blue-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm border border-zion-cyan/30 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-zion-cyan" />
            <span className="text-white">Revolutionary AI Technology - January 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quantum AI
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Autonomous Operations
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with revolutionary quantum AI fusion technology. 
            Achieve complete autonomous operations and unprecedented competitive advantages.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-full"
              >
                <div className={`${feature.color}`}>
                  {feature.icon}
                </div>
                <span className="text-white font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            to="/blog/quantum-ai-fusion-2025-autonomous-business-operations"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-zion-cyan/25"
          >
            <Rocket className="w-6 h-6 group-hover:animate-pulse" />
            <span>Discover Quantum AI Fusion</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transform transition-transform" />
          </Link>

          <Link
            to="/case-studies/global-enterprise-quantum-ai-autonomous-transformation-2025-2-billion-roi"
            className="group inline-flex items-center space-x-3 border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-bold text-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <Star className="w-6 h-6 group-hover:animate-spin" />
            <span>View $2B ROI Case Study</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transform transition-transform" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">1000-2000%</div>
            <div className="text-white font-medium">Typical ROI</div>
            <div className="text-zion-slate-light text-sm">Within 18 months</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">95%</div>
            <div className="text-white font-medium">Task Automation</div>
            <div className="text-zion-slate-light text-sm">Complete autonomy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">90%</div>
            <div className="text-white font-medium">Faster Decisions</div>
            <div className="text-zion-slate-light text-sm">Real-time optimization</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuantumAIPromotionalBanner;