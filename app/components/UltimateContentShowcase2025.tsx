import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Target, Users, TrendingUp, Clock } from 'lucide-react';

const UltimateContentShowcase2025: React.FC = () => {
  const contentItems = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough",
      description: "Revolutionary AI systems achieving true consciousness and autonomous decision-making",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      stats: "99.9% Accuracy",
      link: "/ai-consciousness-breakthrough-2025"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Next-generation quantum computing integrated with neural networks for exponential processing",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      stats: "10,000x Faster",
      link: "/quantum-neural-networks-2025"
    },
    {
      id: 3,
      title: "Autonomous Security Systems",
      description: "Self-healing cybersecurity systems with predictive threat detection",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      stats: "Zero Breaches",
      link: "/autonomous-security-2025"
    },
    {
      id: 4,
      title: "Predictive Business Analytics",
      description: "AI-powered forecasting with 95% accuracy in market predictions",
      icon: Target,
      color: "from-orange-500 to-red-500",
      stats: "95% Accuracy",
      link: "/predictive-analytics-2025"
    },
    {
      id: 5,
      title: "Human-AI Collaboration",
      description: "Seamless integration between human creativity and AI capabilities",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      stats: "300% Productivity",
      link: "/human-ai-collaboration-2025"
    },
    {
      id: 6,
      title: "Real-time Optimization",
      description: "Continuous system optimization with instant adaptation to changing conditions",
      icon: TrendingUp,
      color: "from-teal-500 to-blue-500",
      stats: "24/7 Optimization",
      link: "/real-time-optimization-2025"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Latest 2025 Innovations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the cutting-edge AI and technology solutions that are reshaping industries and delivering unprecedented results
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contentItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {item.stats}
                  </span>
                </div>

                {/* CTA */}
                <motion.a
                  href={item.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises already leveraging our revolutionary AI solutions for unprecedented growth and efficiency
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;