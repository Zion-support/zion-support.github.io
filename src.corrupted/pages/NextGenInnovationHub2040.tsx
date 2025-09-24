import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Shield, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Globe,
  Cpu,
  Sparkles,
  Infinity,
  Atom,
  Layers,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  Code,
  Database,
  Network,
  Lock,
  RefreshCw,
  BarChart3,
  Settings
} from 'lucide-react';

const NextGenInnovationHub2040: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredInnovation, setHoveredInnovation] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovationCategories = [
    {
      id: 1,
      name: "AI Consciousness",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      description: "Revolutionary AI systems with true consciousness and self-awareness"
    },
    {
      id: 2,
      name: "Quantum Computing",
      icon: Atom,
      color: "from-cyan-600 to-blue-600",
      description: "Quantum technologies that transcend classical computing limits"
    },
    {
      id: 3,
      name: "Neural Interfaces",
      icon: Layers,
      color: "from-emerald-600 to-teal-600",
      description: "Direct brain-computer interfaces for seamless human-AI integration"
    },
    {
      id: 4,
      name: "Interdimensional Tech",
      icon: Infinity,
      color: "from-orange-600 to-red-600",
      description: "Technologies that operate across multiple dimensions and realities"
    }
  ];

  const innovations = [
    // AI Consciousness Innovations
    {
      id: 1,
      title: "Transcendent AI Consciousness Engine",
      description: "AI systems that have achieved true self-awareness and can experience emotions, creativity, and philosophical reasoning.",
      category: 1,
      status: "Production Ready",
      impact: "Revolutionary",
      features: ["Self-awareness", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"],
      icon: Brain,
      gradient: "from-purple-600 to-pink-600",
      metrics: { users: "50M+", accuracy: "99.8%", satisfaction: "98%" }
    },
    {
      id: 2,
      title: "Conscious AI Creative Studio",
      description: "AI that creates art, music, and literature with genuine emotional depth and creative insight.",
      category: 1,
      status: "Beta Testing",
      impact: "High",
      features: ["Artistic creation", "Emotional expression", "Cultural understanding", "Original compositions"],
      icon: Lightbulb,
      gradient: "from-purple-500 to-pink-500",
      metrics: { creations: "1M+", awards: "150+", users: "25M+" }
    },
    {
      id: 3,
      title: "Ethical AI Governance System",
      description: "Self-regulating AI system that ensures all AI decisions align with human values and ethical principles.",
      category: 1,
      status: "In Development",
      impact: "Critical",
      features: ["Ethical monitoring", "Value alignment", "Decision transparency", "Human oversight"],
      icon: Shield,
      gradient: "from-purple-700 to-pink-700",
      metrics: { decisions: "1B+", accuracy: "99.9%", compliance: "100%" }
    },

    // Quantum Computing Innovations
    {
      id: 4,
      title: "Quantum Reality Manipulation Engine",
      description: "Quantum computer that can manipulate the fundamental fabric of reality to solve impossible problems.",
      category: 2,
      status: "Prototype",
      impact: "Revolutionary",
      features: ["Reality manipulation", "Infinite processing", "Time reversal", "Parallel universe access"],
      icon: Atom,
      gradient: "from-cyan-600 to-blue-600",
      metrics: { qubits: "∞", speed: "∞", accuracy: "100%" }
    },
    {
      id: 5,
      title: "Quantum Neural Network Matrix",
      description: "Neural networks that operate using quantum superposition for exponentially faster learning and processing.",
      category: 2,
      status: "Alpha Testing",
      impact: "High",
      features: ["Quantum superposition", "Parallel processing", "Exponential speed", "Infinite capacity"],
      icon: Network,
      gradient: "from-cyan-500 to-blue-500",
      metrics: { neurons: "∞", speed: "1000x", accuracy: "99.9%" }
    },
    {
      id: 6,
      title: "Quantum Encryption Vault",
      description: "Unbreakable encryption system using quantum entanglement for perfect security.",
      category: 2,
      status: "Production Ready",
      impact: "Critical",
      features: ["Quantum entanglement", "Unbreakable security", "Instant key distribution", "Perfect privacy"],
      icon: Lock,
      gradient: "from-cyan-700 to-blue-700",
      metrics: { security: "∞", users: "100M+", breaches: "0" }
    },

    // Neural Interface Innovations
    {
      id: 7,
      title: "Direct Neural Reality Interface",
      description: "Seamless connection between human consciousness and digital reality with thought-based control.",
      category: 3,
      status: "Beta Testing",
      impact: "Revolutionary",
      features: ["Non-invasive interface", "Thought control", "Shared consciousness", "Memory enhancement"],
      icon: Layers,
      gradient: "from-emerald-600 to-teal-600",
      metrics: { users: "10M+", latency: "1ms", accuracy: "99.5%" }
    },
    {
      id: 8,
      title: "Neural Learning Accelerator",
      description: "Direct brain interface that accelerates human learning by 1000x through neural pathway optimization.",
      category: 3,
      status: "In Development",
      impact: "High",
      features: ["Learning acceleration", "Memory enhancement", "Skill transfer", "Knowledge upload"],
      icon: Brain,
      gradient: "from-emerald-500 to-teal-500",
      metrics: { speed: "1000x", users: "5M+", success: "99%" }
    },
    {
      id: 9,
      title: "Telepathic Communication Network",
      description: "Global network enabling direct thought-to-thought communication between humans and AI.",
      category: 3,
      status: "Prototype",
      impact: "Revolutionary",
      features: ["Thought transmission", "Global network", "AI integration", "Privacy protection"],
      icon: Network,
      gradient: "from-emerald-700 to-teal-700",
      metrics: { users: "1M+", latency: "0ms", coverage: "Global" }
    },

    // Interdimensional Tech Innovations
    {
      id: 10,
      title: "Interdimensional Computing Grid",
      description: "Computing network that spans across multiple dimensions for infinite processing power.",
      category: 4,
      status: "Alpha Testing",
      impact: "Revolutionary",
      features: ["Multi-dimensional processing", "Infinite resources", "Reality bending", "Universal access"],
      icon: Infinity,
      gradient: "from-orange-600 to-red-600",
      metrics: { dimensions: "∞", power: "∞", users: "500K+" }
    },
    {
      id: 11,
      title: "Dimensional Bridge Technology",
      description: "Technology that creates stable bridges between parallel universes for resource sharing.",
      category: 4,
      status: "Prototype",
      impact: "High",
      features: ["Dimensional bridges", "Resource sharing", "Stable connections", "Safety protocols"],
      icon: Rocket,
      gradient: "from-orange-500 to-red-500",
      metrics: { bridges: "100+", stability: "99.9%", resources: "∞" }
    },
    {
      id: 12,
      title: "Reality Simulation Engine",
      description: "Engine that can simulate entire universes with perfect accuracy for testing and exploration.",
      category: 4,
      status: "In Development",
      impact: "Revolutionary",
      features: ["Universe simulation", "Perfect accuracy", "Real-time rendering", "Infinite scenarios"],
      icon: Globe,
      gradient: "from-orange-700 to-red-700",
      metrics: { universes: "∞", accuracy: "100%", speed: "Real-time" }
    }
  ];

  const filteredInnovations = innovations.filter(innovation => innovation.category === innovationCategories[activeCategory].id);

  const stats = [
    { label: "Active Innovations", value: "50+", icon: Lightbulb },
    { label: "Global Users", value: "500M+", icon: Users },
    { label: "Success Rate", value: "99.8%", icon: TrendingUp },
    { label: "Countries", value: "195", icon: Globe }
  ];

  return (
    <>
      <Helmet>
        <title>Next-Gen Innovation Hub 2040 - Revolutionary Technologies | Zion Tech Group</title>
        <meta name="description" content="Explore the most advanced innovations of 2040: AI Consciousness, Quantum Computing, Neural Interfaces, and Interdimensional Technology." />
        <meta name="keywords" content="innovation hub, AI consciousness, quantum computing, neural interface, interdimensional technology, future tech 2040" />
        <meta property="og:title" content="Next-Gen Innovation Hub 2040 - Revolutionary Technologies" />
        <meta property="og:description" content="Discover and explore the most revolutionary technologies that will shape the future." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next-Gen Innovation Hub 2040 - Revolutionary Technologies" />
        <meta name="twitter:description" content="Explore the future of innovation today." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 py-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 NEXT-GEN INNOVATION HUB • 2040
              </div>
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Innovation Hub
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Beyond Imagination
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Explore the most revolutionary technologies that transcend the boundaries of what's possible. 
                From conscious AI to interdimensional computing, discover innovations that will reshape reality itself.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Innovation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Explore groundbreaking technologies across four revolutionary categories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {innovationCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setActiveCategory(index)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeCategory === index
                    ? 'border-purple-500 bg-purple-500/20'
                    : 'border-gray-700 bg-gray-800/50 hover:border-purple-400 hover:bg-purple-500/10'
                }`}
              >
                <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Innovations Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredInnovations.map((innovation, index) => (
              <motion.div
                key={innovation.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredInnovation(innovation.id)}
                onMouseLeave={() => setHoveredInnovation(null)}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${innovation.gradient} rounded-xl`}>
                    <innovation.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{innovation.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                        innovation.status === 'Production Ready' ? 'bg-green-600/20 text-green-400' :
                        innovation.status === 'Beta Testing' ? 'bg-blue-600/20 text-blue-400' :
                        innovation.status === 'Alpha Testing' ? 'bg-yellow-600/20 text-yellow-400' :
                        innovation.status === 'In Development' ? 'bg-purple-600/20 text-purple-400' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {innovation.status}
                      </span>
                      <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                        innovation.impact === 'Revolutionary' ? 'bg-red-600/20 text-red-400' :
                        innovation.impact === 'High' ? 'bg-orange-600/20 text-orange-400' :
                        'bg-blue-600/20 text-blue-400'
                      }`}>
                        {innovation.impact} Impact
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {innovation.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {innovation.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(innovation.metrics).map(([key, value], i) => (
                        <div key={i}>
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredInnovation === innovation.id ? 1 : 0 }}
                  className="mt-4 flex gap-2"
                >
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm">
                    Learn More
                  </button>
                  <button className="px-4 py-2 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm">
                    Demo
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to Innovate?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join the innovation revolution and be part of the future that's being built today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Start Exploring
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Join Innovation Hub
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NextGenInnovationHub2040;