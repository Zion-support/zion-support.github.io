import React from 'react';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Shield, Globe } from 'lucide-react';

const AIRevolution2025: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that learn, adapt, and optimize without human intervention",
      benefits: ["99.9% uptime", "Continuous learning", "Self-healing systems"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Quantum-Powered Processing",
      description: "Revolutionary quantum algorithms delivering unprecedented computational power",
      benefits: ["1000x faster processing", "Complex problem solving", "Future-proof architecture"]
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Predictive Business Intelligence",
      description: "AI that predicts market trends, customer behavior, and business outcomes",
      benefits: ["95% accuracy", "Real-time insights", "Competitive advantage"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Advanced Cybersecurity",
      description: "Next-generation AI security systems that protect against emerging threats",
      benefits: ["Zero-day protection", "Behavioral analysis", "Automated response"]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Global AI Network",
      description: "Distributed AI ecosystem connecting businesses worldwide",
      benefits: ["Global reach", "Scalable infrastructure", "24/7 support"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: "Revenue Optimization",
      description: "AI-driven strategies to maximize profitability and growth",
      benefits: ["30% revenue increase", "Cost reduction", "Market expansion"]
    }
  ];

  const stats = [
    { number: "500+", label: "AI Solutions Deployed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "AI Monitoring" },
    { number: "10x", label: "Performance Boost" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Revolution 2025 - Zion Tech Group"
        description="Experience the future of artificial intelligence with our revolutionary AI solutions. Autonomous agents, quantum processing, and predictive intelligence."
        keywords="AI revolution, artificial intelligence, autonomous agents, quantum computing, business intelligence, cybersecurity"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Revolution 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Step into the future with our revolutionary AI solutions that transform businesses, 
              automate processes, and unlock unprecedented opportunities for growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to revolutionize how businesses operate, 
              compete, and grow in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-cyan-400 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Lead the AI Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking businesses already transforming their operations 
              with our cutting-edge AI solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIRevolution2025;