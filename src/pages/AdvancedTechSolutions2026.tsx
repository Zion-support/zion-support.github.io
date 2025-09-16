import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Database, Shield, Cloud, Globe, Smartphone, Bot, Zap, CheckCircle } from 'lucide-react';

const AdvancedTechSolutions2026: React.FC = () => {
  const solutions = [
    {
      title: "Quantum Computing Infrastructure",
      description: "Harness the power of quantum computing for complex problem solving",
      icon: Cpu,
      features: ["Quantum algorithm optimization", "Exponential processing power", "Breakthrough cryptography"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Neural Network Optimization",
      description: "Advanced AI models that learn and adapt in real-time",
      icon: Brain,
      features: ["Self-improving algorithms", "Dynamic model adaptation", "Predictive analytics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Edge AI Deployment",
      description: "Intelligent computing at the edge for instant response",
      icon: Smartphone,
      features: ["Ultra-low latency", "Offline intelligence", "Real-time processing"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Autonomous System Integration",
      description: "Self-managing systems that operate without human intervention",
      icon: Bot,
      features: ["Self-healing systems", "Automatic optimization", "Predictive maintenance"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Advanced Cybersecurity",
      description: "Next-generation security powered by AI and quantum encryption",
      icon: Shield,
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Global Cloud Infrastructure",
      description: "Worldwide distributed computing with intelligent routing",
      icon: Cloud,
      features: ["Global edge computing", "Intelligent load balancing", "99.99% uptime"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  const benefits = [
    { icon: Zap, text: "10x Faster Performance" },
    { icon: Shield, text: "Military-Grade Security" },
    { icon: Globe, text: "Global Scalability" },
    { icon: CheckCircle, text: "99.99% Reliability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Advanced Tech
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Solutions 2026
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Cutting-edge technology solutions that redefine what's possible in the digital age
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors duration-300">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <benefit.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-white text-sm font-medium">{benefit.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of advanced technology solutions designed to transform your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${solution.color} p-3 rounded-2xl mr-4`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-300 text-sm">{solution.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology Showcase
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of next-generation technology in action
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Real-Time Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Processing Speed</span>
                    <span className="text-cyan-400 font-bold">10x Faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Energy Efficiency</span>
                    <span className="text-green-400 font-bold">95% Better</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Accuracy Rate</span>
                    <span className="text-purple-400 font-bold">99.97%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our Solutions?</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Industry-leading performance metrics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Seamless integration with existing systems
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    24/7 expert support and monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Future-proof technology architecture
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Transform Your Business Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Join thousands of companies already leveraging our advanced technology solutions
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Get Started Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AdvancedTechSolutions2026;