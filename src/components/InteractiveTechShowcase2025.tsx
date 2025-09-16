import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const techCategories = {
    ai: {
      title: "Artificial Intelligence",
      icon: "🧠",
      color: "purple",
      technologies: [
        {
          name: "AI Consciousness",
          description: "First AI systems with genuine consciousness and self-awareness",
          link: "/pages/AIConsciousness2025",
          features: ["Self-awareness", "Creative thinking", "Emotional intelligence"]
        },
        {
          name: "Autonomous AI Agents",
          description: "Self-managing AI systems that operate independently",
          link: "/pages/AutonomousSystems2025",
          features: ["Self-learning", "Autonomous decisions", "Continuous evolution"]
        },
        {
          name: "AI Enterprise Copilot",
          description: "Transform business operations with AI-powered assistance",
          link: "/pages/AIEnterpriseCopilot2025",
          features: ["Intelligent automation", "Predictive analytics", "Contextual assistance"]
        }
      ]
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚡",
      color: "cyan",
      technologies: [
        {
          name: "Quantum Supremacy",
          description: "Quantum computers solving impossible problems",
          link: "/pages/QuantumComputingBreakthrough2025",
          features: ["1000+ qubits", "Exponential speed", "Molecular simulation"]
        },
        {
          name: "Quantum AI Integration",
          description: "AI systems powered by quantum computing",
          link: "/pages/AdvancedQuantumComputing2026",
          features: ["Quantum algorithms", "Parallel processing", "Unprecedented speed"]
        },
        {
          name: "Quantum Reality Engine",
          description: "Manipulate reality itself with quantum technology",
          link: "/pages/QuantumReality2026",
          features: ["Reality manipulation", "Parallel universes", "Time-space control"]
        }
      ]
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬",
      color: "emerald",
      technologies: [
        {
          name: "Brain-Computer Interface",
          description: "Direct communication between mind and machine",
          link: "/pages/NeuralInterfaceFuture",
          features: ["Non-invasive BCI", "Thought control", "Neural feedback"]
        },
        {
          name: "Neural Enhancement",
          description: "Augment human cognitive abilities",
          link: "/pages/NeuralInterfaceRevolution2026",
          features: ["Memory enhancement", "Cognitive boost", "Sensory expansion"]
        },
        {
          name: "Collective Consciousness",
          description: "Connect minds in a shared consciousness network",
          link: "/pages/ConsciousnessComputing2026",
          features: ["Mind linking", "Shared experiences", "Collective intelligence"]
        }
      ]
    },
    reality: {
      title: "Reality Technology",
      icon: "🌌",
      color: "violet",
      technologies: [
        {
          name: "Metaverse Integration",
          description: "Seamless blend of physical and virtual worlds",
          link: "/pages/AdvancedMetaverseSolutions2026",
          features: ["Holographic displays", "Spatial computing", "Virtual collaboration"]
        },
        {
          name: "Omniversal Reality",
          description: "Access infinite realities and dimensions",
          link: "/pages/OmniversalAI2030",
          features: ["Infinite dimensions", "Reality creation", "Consciousness transfer"]
        },
        {
          name: "Time-Space Manipulation",
          description: "Control time and space with advanced technology",
          link: "/pages/TranscendentRealityControl2030",
          features: ["Time travel", "Space folding", "Dimensional portals"]
        }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: 'from-purple-600/30 to-pink-600/30',
        border: 'border-purple-400/30',
        text: 'text-purple-100',
        button: 'bg-white text-purple-600 hover:bg-purple-50'
      },
      cyan: {
        bg: 'from-cyan-600/30 to-blue-600/30',
        border: 'border-cyan-400/30',
        text: 'text-cyan-100',
        button: 'bg-white text-cyan-600 hover:bg-cyan-50'
      },
      emerald: {
        bg: 'from-emerald-600/30 to-teal-600/30',
        border: 'border-emerald-400/30',
        text: 'text-emerald-100',
        button: 'bg-white text-emerald-600 hover:bg-emerald-50'
      },
      violet: {
        bg: 'from-violet-600/30 to-purple-600/30',
        border: 'border-violet-400/30',
        text: 'text-violet-100',
        button: 'bg-white text-violet-600 hover:bg-violet-50'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const currentCategory = techCategories[activeCategory as keyof typeof techCategories];
  const colors = getColorClasses(currentCategory.color);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 text-white mb-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Interactive Technology Showcase 2025
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Explore our revolutionary technologies through interactive experiences. 
          Click on different categories to discover the future.
        </p>
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(techCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeCategory === key
                ? 'bg-white text-purple-900 shadow-lg scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span className="text-2xl mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Category Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {currentCategory.technologies.map((tech, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-xl p-8 border ${colors.border} hover:scale-105 transition-all duration-300`}
          >
            <div className="text-6xl mb-4 text-center">{currentCategory.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">{tech.name}</h3>
            <p className={`${colors.text} mb-6 text-center`}>{tech.description}</p>
            <ul className={`${colors.text} space-y-2 mb-6 text-sm`}>
              {tech.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
            <a
              href={tech.link}
              className={`block w-full ${colors.button} py-3 rounded-lg hover:shadow-lg transition-colors font-semibold text-center`}
            >
              Explore {tech.name} →
            </a>
          </div>
        ))}
      </div>

      {/* Interactive Stats */}
      <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Technology Impact</h3>
          <p className="text-xl opacity-90">Real-time statistics of our revolutionary technologies</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">10x</div>
            <div className="text-lg opacity-90">Performance Boost</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">1M+</div>
            <div className="text-lg opacity-90">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-rose-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">Continuous Innovation</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Join thousands of innovators who are already transforming their industries 
          with our revolutionary technology solutions.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl">
            Start Your Journey
          </button>
          <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-purple-900 transition-all duration-300 font-bold text-xl">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;