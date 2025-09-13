import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Rocket,
  Target,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

const FutureTechShowcase2027 = () => {
  const technologies = [
    {
      icon: Brain,
      title: "AI Consciousness Engine",
      description: "Advanced AI with self-awareness and autonomous decision-making capabilities",
      features: ["Self-learning algorithms", "Emotional intelligence", "Creative problem solving"],
      price: "$2,999/month",
      marketPrice: "$5,000-15,000/month",
      savings: "70% savings"
    },
    {
      icon: Cpu,
      title: "Quantum Computing Platform",
      description: "Breakthrough quantum algorithms for complex optimization and cryptography",
      features: ["Quantum supremacy", "Unbreakable encryption", "Instant calculations"],
      price: "$4,999/month",
      marketPrice: "$8,000-25,000/month",
      savings: "80% savings"
    },
    {
      icon: Database,
      title: "Autonomous Data Intelligence",
      description: "Self-managing data systems with predictive analytics and real-time insights",
      features: ["Auto-optimization", "Predictive maintenance", "Real-time analytics"],
      price: "$1,999/month",
      marketPrice: "$3,500-8,000/month",
      savings: "60% savings"
    },
    {
      icon: Shield,
      title: "Quantum Security Suite",
      description: "Next-generation cybersecurity with quantum-resistant encryption",
      features: ["Quantum encryption", "Zero-trust architecture", "AI threat detection"],
      price: "$3,499/month",
      marketPrice: "$6,000-12,000/month",
      savings: "65% savings"
    },
    {
      icon: Globe,
      title: "Global AI Network",
      description: "Distributed AI computing across multiple continents for maximum performance",
      features: ["Global distribution", "Edge computing", "99.99% uptime"],
      price: "$2,499/month",
      marketPrice: "$4,500-10,000/month",
      savings: "70% savings"
    },
    {
      icon: Rocket,
      title: "Autonomous Business Platform",
      description: "Self-managing business operations with AI-driven decision making",
      features: ["Auto-scaling", "Smart routing", "Predictive optimization"],
      price: "$3,999/month",
      marketPrice: "$7,000-18,000/month",
      savings: "75% savings"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4" />
            FUTURE TECH 2027
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Revolutionary Technologies
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              For Tomorrow's World
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge technologies that will define 2027 and beyond. 
            From AI consciousness to quantum computing, these solutions represent the pinnacle of human innovation.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <tech.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{tech.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-green-600">{tech.price}</span>
                  <span className="text-sm text-gray-500 line-through">{tech.marketPrice}</span>
                </div>
                <div className="text-sm text-green-600 font-semibold mb-4">{tech.savings}</div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary 2027 technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Download Whitepaper
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureTechShowcase2027;