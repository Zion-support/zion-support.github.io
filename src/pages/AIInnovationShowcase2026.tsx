import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Rocket, Globe, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';

const AIInnovationShowcase2026: React.FC = () => {
  const innovations = [
    {
      id: 1,
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that operate independently with minimal human intervention",
      icon: Brain,
      features: ["24/7 Autonomous Operations", "Self-Healing Capabilities", "Dynamic Learning"],
      impact: "85% reduction in manual oversight"
    },
    {
      id: 2,
      title: "Quantum-Enhanced AI",
      description: "Leveraging quantum computing principles to accelerate AI processing",
      icon: Zap,
      features: ["Exponential Speed Gains", "Complex Problem Solving", "Quantum Neural Networks"],
      impact: "1000x faster computation"
    },
    {
      id: 3,
      title: "Consciousness Computing",
      description: "AI systems with advanced self-awareness and ethical reasoning capabilities",
      icon: Shield,
      features: ["Ethical Decision Making", "Self-Awareness", "Moral Reasoning"],
      impact: "99.9% ethical compliance"
    },
    {
      id: 4,
      title: "Interdimensional AI",
      description: "AI systems operating across multiple dimensions and realities",
      icon: Rocket,
      features: ["Multi-Dimensional Processing", "Reality Simulation", "Cross-Dimensional Learning"],
      impact: "Unlimited processing capacity"
    }
  ];

  const caseStudies = [
    {
      company: "Fortune 500 Enterprise",
      industry: "Manufacturing",
      challenge: "Optimize global supply chain operations",
      solution: "Autonomous AI agents with quantum-enhanced processing",
      results: ["67% cost reduction", "89% efficiency improvement", "Zero downtime achieved"]
    },
    {
      company: "Global Healthcare System",
      industry: "Healthcare",
      challenge: "Accelerate drug discovery and patient diagnosis",
      solution: "Consciousness computing with ethical AI frameworks",
      results: ["50% faster drug discovery", "95% diagnostic accuracy", "100% ethical compliance"]
    },
    {
      company: "Space Exploration Corp",
      industry: "Aerospace",
      challenge: "Autonomous space mission management",
      solution: "Interdimensional AI for complex multi-variable optimization",
      results: ["99.9% mission success rate", "75% fuel efficiency", "Real-time adaptation"]
    }
  ];

  const stats = [
    { label: "AI Systems Deployed", value: "10,000+", icon: Globe },
    { label: "Enterprise Clients", value: "500+", icon: Users },
    { label: "Success Rate", value: "99.7%", icon: TrendingUp },
    { label: "Cost Savings", value: "$2.3B", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              AI Innovation Showcase 2026
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover the future of artificial intelligence with our cutting-edge innovations that are transforming industries and reshaping the digital landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                Explore Innovations <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionary AI Innovations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our breakthrough technologies are setting new standards in artificial intelligence, 
              delivering unprecedented capabilities and transforming how businesses operate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <innovation.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{innovation.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {innovation.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {innovation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-4">
                  <div className="text-sm text-green-400 font-semibold mb-1">Impact Achieved:</div>
                  <div className="text-white font-bold">{innovation.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world implementations of our AI innovations delivering measurable results across diverse industries.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/50 to-blue-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="text-blue-400 font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{study.company}</h3>
                  <div className="text-gray-300 mb-4">
                    <strong className="text-white">Challenge:</strong> {study.challenge}
                  </div>
                  <div className="text-gray-300 mb-6">
                    <strong className="text-white">Solution:</strong> {study.solution}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Results Achieved:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and discover how our innovative solutions can drive unprecedented growth and efficiency for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                Schedule Demo <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Download Whitepaper
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIInnovationShowcase2026;