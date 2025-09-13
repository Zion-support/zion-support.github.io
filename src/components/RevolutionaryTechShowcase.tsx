import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  Cloud,
  Sparkles,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

const RevolutionaryTechShowcase: React.FC = () => {
  const technologies = [
    {
      icon: Brain,
      title: "AI Consciousness",
      description: "Next-generation AI with self-learning capabilities",
      features: ["Neural Networks", "Machine Learning", "Predictive Analytics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption with quantum cryptography",
      features: ["Quantum Key Distribution", "Zero Trust Architecture", "Advanced Threat Detection"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Autonomous Systems",
      description: "Self-managing infrastructure and operations",
      features: ["Self-Healing Systems", "Automated Scaling", "Predictive Maintenance"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Edge Computing",
      description: "Ultra-low latency processing at the edge",
      features: ["Real-time Processing", "Distributed Networks", "IoT Integration"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "300%", label: "Performance Boost" },
    { icon: Users, value: "50K+", label: "Happy Clients" },
    { icon: Award, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Sparkles, value: "24/7", label: "AI Support" }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-5 h-5" />
            REVOLUTIONARY TECHNOLOGY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology is Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge solutions that redefine what's possible. 
            Our revolutionary technology stack delivers unprecedented performance and innovation.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 h-full border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl mb-6`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-gray-300 mb-6">{tech.description}</p>
                  
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase;