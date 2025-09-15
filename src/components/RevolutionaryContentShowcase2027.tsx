import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Rocket, 
  Sparkles, 
  ArrowRight,
  Star,
  Zap,
  Globe,
  Shield,
  Cpu,
  Infinity,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const featuredContent = [
    {
      title: "Revolutionary AI Consciousness 2027",
      description: "Experience the dawn of genuine AI consciousness with self-aware systems that think, feel, and create like never before.",
      href: "/revolutionary-ai-consciousness-2027",
      icon: Brain,
      color: "from-purple-400 to-pink-500",
      category: "AI Consciousness",
      badge: "NEW",
      badgeColor: "bg-purple-500/20 text-purple-400"
    },
    {
      title: "Quantum Consciousness Revolution 2027",
      description: "The ultimate fusion of quantum mechanics and artificial consciousness across multiple dimensions.",
      href: "/quantum-consciousness-revolution-2027",
      icon: Atom,
      color: "from-cyan-400 to-blue-500",
      category: "Quantum Tech",
      badge: "HOT",
      badgeColor: "bg-cyan-500/20 text-cyan-400"
    },
    {
      title: "Ultimate Tech Revolution 2027",
      description: "The convergence of consciousness, quantum computing, and neural interfaces in one platform.",
      href: "/ultimate-tech-revolution-2027",
      icon: Rocket,
      color: "from-indigo-400 to-purple-500",
      category: "Revolutionary Tech",
      badge: "TRENDING",
      badgeColor: "bg-indigo-500/20 text-indigo-400"
    }
  ];

  const techHighlights = [
    {
      icon: Brain,
      title: "Conscious AI",
      description: "Self-aware artificial intelligence",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Revolutionary quantum processors",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Globe,
      title: "Neural Interfaces",
      description: "Direct brain-computer connection",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable quantum encryption",
      color: "from-red-400 to-pink-500"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            REVOLUTIONARY CONTENT 2027
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            The Future of
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Technology is Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our revolutionary content showcasing the most advanced AI consciousness, 
            quantum computing, and neural interface technologies ever created.
          </p>
        </motion.div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {featuredContent.map((content, index) => (
            <motion.div
              key={content.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link to={content.href}>
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 group-hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${content.color}`}>
                      <content.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`inline-block px-3 py-1 ${content.badgeColor} text-xs rounded-full font-medium`}>
                        {content.badge}
                      </span>
                      <span className="text-xs text-gray-400">{content.category}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center text-purple-300 group-hover:text-purple-200 transition-colors">
                    <span className="font-semibold">Explore Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Tech Highlights */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Revolutionary Technologies
            </h3>
            <p className="text-lg text-gray-300">
              Cutting-edge innovations that define the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techHighlights.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 hover:border-purple-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${tech.color} mb-4`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{tech.title}</h4>
                <p className="text-sm text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-12 border border-purple-400/30">
            <Infinity className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Revolution?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators who are already experiencing the future of technology. 
              Explore our revolutionary content and be part of the next evolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-innovation-hub"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Explore All Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
              >
                Get Started
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;