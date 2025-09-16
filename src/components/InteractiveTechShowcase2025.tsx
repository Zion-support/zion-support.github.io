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
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;