import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { ArrowRight, Sparkles, Brain, Atom, Bot, Zap, Star } from 'lucide-react';
import AIRevolutionPromotionBanner from './AIRevolutionPromotionBanner';
import QuantumComputingPromotionBanner from './QuantumComputingPromotionBanner';
import AutonomousBusinessPromotionBanner from './AutonomousBusinessPromotionBanner';

const RevolutionaryContentShowcase: React.FC = () => {
  const revolutionaryContent = [
    {
      title: "AI Revolution 2025",
      description: "Experience the future of artificial intelligence with autonomous agents, quantum processing, and predictive intelligence that transforms your business operations.",
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      features: ["Autonomous AI Agents", "Quantum-Powered Processing", "Predictive Intelligence"],
      link: "/ai-revolution-2025",
      gradient: "from-cyan-500 to-purple-500",
      badge: "NEW RELEASE"
    },
    {
      title: "Quantum Computing Breakthrough",
      description: "Enter the quantum realm with revolutionary computing power that unlocks infinite possibilities. Experience quantum supremacy and unbreakable cryptography.",
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      features: ["Quantum Supremacy", "Unbreakable Encryption", "Exponential Processing"],
      link: "/quantum-computing-breakthrough",
      gradient: "from-purple-500 to-cyan-500",
      badge: "BREAKTHROUGH"
    },
    {
      title: "Autonomous Business Platform",
      description: "Revolutionary platform that runs your operations 24/7 without human intervention. AI-powered decision making and self-optimization.",
      icon: <Bot className="w-8 h-8 text-green-400" />,
      features: ["100% Autonomous", "24/7 Operations", "Self-Optimization"],
      link: "/autonomous-business-platform",
      gradient: "from-green-500 to-cyan-500",
      badge: "AUTONOMOUS"
    }
  ];

  const stats = [
    { number: "500+", label: "Revolutionary Solutions" },
    { number: "99.9%", label: "Success Rate" },
    { number: "24/7", label: "Innovation" },
    { number: "∞", label: "Possibilities" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold text-white">
              Revolutionary Content Showcase
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the future of technology with our revolutionary AI, quantum computing, 
            and autonomous business solutions that transform how businesses operate.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Promotional Banners */}
        <div className="space-y-8 mb-16">
          <AIRevolutionPromotionBanner />
          <QuantumComputingPromotionBanner />
          <AutonomousBusinessPromotionBanner />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {revolutionaryContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${content.gradient} text-white`}>
                    {content.badge}
                  </div>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>

                {/* Icon */}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {content.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 flex-grow">
                  {content.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {content.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to={content.link}
                  className={`group/btn bg-gradient-to-r ${content.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full`}
                >
                  Explore {content.title}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-cyan-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Revolution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking businesses already transforming their operations 
              with our revolutionary technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase;