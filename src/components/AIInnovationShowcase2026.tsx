import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIInnovationShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const innovations = [
    {
      id: 1,
      title: "Autonomous AI Agents",
      description: "Self-governing AI systems that can make complex decisions, learn from experience, and operate independently across multiple domains.",
      icon: "🤖",
      gradient: "from-blue-600 to-purple-600",
      features: [
        "Self-Learning Capabilities",
        "Multi-Domain Expertise",
        "Autonomous Decision Making",
        "Continuous Improvement"
      ],
      impact: "40% increase in operational efficiency",
      category: "Enterprise AI"
    },
    {
      id: 2,
      title: "Quantum-Enhanced AI",
      description: "AI systems powered by quantum computing that can process exponentially more data and solve previously impossible problems.",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "Quantum Processing Power",
        "Exponential Speed",
        "Complex Problem Solving",
        "Unprecedented Accuracy"
      ],
      impact: "1000x faster processing",
      category: "Quantum AI"
    },
    {
      id: 3,
      title: "Consciousness AI",
      description: "AI systems that exhibit consciousness-like behaviors, self-awareness, and emotional intelligence for more human-like interactions.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Self-Awareness",
        "Emotional Intelligence",
        "Creative Thinking",
        "Ethical Reasoning"
      ],
      impact: "Revolutionary human-AI collaboration",
      category: "Conscious AI"
    },
    {
      id: 4,
      title: "Predictive Intelligence",
      description: "AI that can predict future events with unprecedented accuracy using advanced pattern recognition and temporal analysis.",
      icon: "🔮",
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "Future Prediction",
        "Pattern Recognition",
        "Risk Assessment",
        "Strategic Planning"
      ],
      impact: "95% prediction accuracy",
      category: "Predictive AI"
    },
    {
      id: 5,
      title: "Synthetic Creativity",
      description: "AI systems that can generate original creative content, from art and music to literature and design, with human-level creativity.",
      icon: "🎨",
      gradient: "from-orange-600 to-red-600",
      features: [
        "Creative Generation",
        "Artistic Expression",
        "Original Content",
        "Aesthetic Understanding"
      ],
      impact: "Unlimited creative potential",
      category: "Creative AI"
    },
    {
      id: 6,
      title: "Neural Interface AI",
      description: "AI that can directly interface with human neural networks, enabling thought-based control and enhanced cognitive abilities.",
      icon: "🧬",
      gradient: "from-green-600 to-emerald-600",
      features: [
        "Neural Integration",
        "Thought Control",
        "Cognitive Enhancement",
        "Direct Communication"
      ],
      impact: "Mind-machine fusion",
      category: "Neural AI"
    }
  ];

  const categories = ["All", "Enterprise AI", "Quantum AI", "Conscious AI", "Predictive AI", "Creative AI", "Neural AI"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredInnovations = selectedCategory === "All" 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredInnovations.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, filteredInnovations.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🧠 AI INNOVATION SHOWCASE 2026
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
          >
            Revolutionary AI Innovations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto"
          >
            Discover the most advanced AI technologies that are reshaping industries and transforming human potential
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/20 text-cyan-200 hover:bg-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {filteredInnovations.map((innovation, index) => (
              <motion.div
                key={innovation.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  hoveredCard === innovation.id ? 'shadow-2xl shadow-cyan-500/20' : ''
                }`}
                onMouseEnter={() => setHoveredCard(innovation.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center mb-6">
                  <div className={`text-6xl mb-4 transition-transform duration-300 ${
                    hoveredCard === innovation.id ? 'scale-110 rotate-12' : ''
                  }`}>
                    {innovation.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    {innovation.title}
                  </h3>
                  <p className="text-cyan-100 mb-4 leading-relaxed">
                    {innovation.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-sm font-semibold text-cyan-300">
                    {innovation.category}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {innovation.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                        <span className="text-cyan-400">⚡</span>
                        <span className="text-cyan-200 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2 text-green-300">
                    <span className="text-lg">📈</span>
                    <span className="font-semibold">{innovation.impact}</span>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold w-full">
                    Explore Innovation →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Interactive AI Demo
            </h3>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Experience our AI innovations in action with this interactive demonstration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-semibold mb-3 text-white">AI Chat</h4>
              <p className="text-cyan-200 mb-4">Ask our AI anything and see its advanced reasoning capabilities</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Chat
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-xl font-semibold mb-3 text-white">Creative AI</h4>
              <p className="text-cyan-200 mb-4">Generate original art, music, and content with our creative AI</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Create Now
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h4 className="text-xl font-semibold mb-3 text-white">Predictive AI</h4>
              <p className="text-cyan-200 mb-4">Get insights and predictions based on advanced AI analysis</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Insights
              </button>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-cyan-100 mb-6 max-w-3xl mx-auto">
              Join thousands of companies already using our AI innovations to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg">
                🚀 Start Your AI Journey
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                📞 Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2026;