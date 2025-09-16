import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const techCategories = [
    {
      id: 0,
      title: "AI & Machine Learning",
      icon: "🤖",
      color: "purple",
      technologies: [
        {
          name: "Autonomous AI Agents",
          description: "Self-managing AI systems with 99.9% uptime",
          features: ["Real-time Decision Making", "Multi-language Support", "Advanced Learning"],
          demo: "Try Live Demo"
        },
        {
          name: "Generative AI 2.0",
          description: "Next-gen content creation with 4K quality",
          features: ["Video Generation", "Multi-modal Output", "Style Transfer"],
          demo: "Create Content"
        },
        {
          name: "Predictive Analytics",
          description: "95%+ accuracy forecasting and trend analysis",
          features: ["Market Prediction", "Risk Assessment", "Customer Behavior"],
          demo: "View Analytics"
        }
      ]
    },
    {
      id: 1,
      title: "Quantum Computing",
      icon: "⚛️",
      color: "cyan",
      technologies: [
        {
          name: "Quantum Machine Learning",
          description: "Exponential speedup for complex algorithms",
          features: ["Quantum Neural Networks", "Optimization", "Cryptography"],
          demo: "Quantum Demo"
        },
        {
          name: "Quantum Cryptography",
          description: "Unbreakable security with quantum principles",
          features: ["Quantum Key Distribution", "Entanglement", "Secure Communication"],
          demo: "Security Test"
        },
        {
          name: "Molecular Simulation",
          description: "Simulate complex molecular interactions",
          features: ["Drug Discovery", "Material Science", "Chemical Reactions"],
          demo: "Run Simulation"
        }
      ]
    },
    {
      id: 2,
      title: "Neural Interfaces",
      icon: "🧬",
      color: "emerald",
      technologies: [
        {
          name: "Brain-Computer Interface",
          description: "Direct neural control of digital systems",
          features: ["Thought Control", "Neural Feedback", "Non-invasive Design"],
          demo: "Try Interface"
        },
        {
          name: "Neural Enhancement",
          description: "Augment human cognitive capabilities",
          features: ["Memory Enhancement", "Focus Improvement", "Learning Acceleration"],
          demo: "Enhance Now"
        },
        {
          name: "Emotion Recognition",
          description: "AI-powered emotional intelligence",
          features: ["Facial Analysis", "Voice Patterns", "Behavioral Insights"],
          demo: "Analyze Emotions"
        }
      ]
    },
    {
      id: 3,
<<<<<<< HEAD
      title: "Reality Manipulation Engine",
      description: "Control and modify reality parameters in real-time",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Reality parameter controls",
        "Dimensional shifting",
        "Probability manipulation",
        "Quantum field visualization"
      ],
      interactive: true
    },
    {
      title: "Edge Computing",
      icon: "⚡",
      color: "orange",
      technologies: [
        {
          name: "Edge AI Processing",
          description: "Ultra-low latency AI at the edge",
          features: ["Sub-10ms Response", "Offline Capability", "Privacy-First"],
          demo: "Test Latency"
        },
        {
          name: "IoT Integration",
          description: "Seamless device connectivity and control",
          features: ["Real-time Monitoring", "Automated Control", "Predictive Maintenance"],
          demo: "Connect Devices"
        },
        {
          name: "Distributed Computing",
          description: "Scalable computing across networks",
          features: ["Load Balancing", "Fault Tolerance", "Auto-scaling"],
          demo: "Scale System"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: "from-purple-600/30 to-pink-600/30",
        border: "border-purple-400/30",
        text: "text-purple-100",
        button: "bg-purple-600 hover:bg-purple-700",
        accent: "text-purple-200"
      },
      cyan: {
        bg: "from-cyan-600/30 to-blue-600/30",
        border: "border-cyan-400/30",
        text: "text-cyan-100",
        button: "bg-cyan-600 hover:bg-cyan-700",
        accent: "text-cyan-200"
      },
      emerald: {
        bg: "from-emerald-600/30 to-teal-600/30",
        border: "border-emerald-400/30",
        text: "text-emerald-100",
        button: "bg-emerald-600 hover:bg-emerald-700",
        accent: "text-emerald-200"
      },
      orange: {
        bg: "from-orange-600/30 to-red-600/30",
        border: "border-orange-400/30",
        text: "text-orange-100",
        button: "bg-orange-600 hover:bg-orange-700",
        accent: "text-orange-200"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
<<<<<<< HEAD
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse"
          >
            🚀 INTERACTIVE DEMO • LIVE NOW
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            Interactive Technology Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/80 max-w-4xl mx-auto"
          >
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </motion.p>
        </div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {demos.map((demo, index) => (
            <motion.button
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredItem(demo.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setActiveDemo(demo.id)}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-br ${demo.color}/30 border-white/40 shadow-lg`
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-3 text-center">{demo.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-center">{demo.title}</h3>
              <p className="text-sm text-white/70 text-center leading-relaxed">
                {demo.description}
              </p>
              {demo.interactive && (
                <div className="mt-3 text-center">
                  <span className="inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    🎮 Interactive
                  </span>
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Active Demo Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${demos[activeDemo].color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-12`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {demos[activeDemo].title}
                </h3>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  {demos[activeDemo].description}
                </p>
=======
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Interactive Tech Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience cutting-edge technologies through interactive demos and real-time simulations
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? `${colors.button} text-white shadow-lg`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories[activeTab].technologies.map((tech, index) => {
            const colors = getColorClasses(techCategories[activeTab].color);
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-xl p-8 border ${colors.border} hover:scale-105 transition-all duration-300 cursor-pointer`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-bounce">
                    {techCategories[activeTab].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {tech.name}
                  </h3>
                  <p className={`${colors.text} mb-6`}>
                    {tech.description}
                  </p>
                </div>

>>>>>>> e31b506a5c732687be3dd2ea969a2b18dd1db72c
                <div className="space-y-3 mb-6">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className={`${colors.accent} text-sm`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className={`w-full ${colors.button} text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg ${
                  hoveredCard === index ? 'scale-105' : ''
                }`}>
                  {tech.demo}
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🎮 Try Our Interactive Demo</h3>
            <p className="text-lg opacity-90">
              Experience our AI technology in real-time with this interactive demonstration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4">AI-Powered Content Generation</h4>
              <p className="opacity-90 mb-6">
                Watch as our AI creates content in real-time. Type a prompt and see the magic happen!
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your prompt here..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Generate Content
                </button>
              </div>
            </div>
            
            <div className="bg-black/20 rounded-lg p-6 border border-white/20">
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h5 className="text-lg font-semibold mb-2">Generated Content</h5>
                <p className="opacity-75 text-sm">
                  Your AI-generated content will appear here...
                </p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </motion.div>
=======
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our cutting-edge technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
>>>>>>> e31b506a5c732687be3dd2ea969a2b18dd1db72c
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;