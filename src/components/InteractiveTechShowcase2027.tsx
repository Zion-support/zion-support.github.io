import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 0,
      title: "Neural Interface Revolution",
      icon: "🧬",
      description: "Direct brain-computer communication and thought control",
      features: [
        "Thought-to-Text Conversion",
        "Mental Command Control",
        "Memory Enhancement",
        "Direct Neural Upload"
      ],
      color: "from-emerald-600 to-teal-600",
      impact: "Revolutionary technology that enables direct brain-computer interaction, transforming how humans interface with technology."
    },
    {
      id: 1,
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "AI that thinks, feels, and creates with human-level consciousness",
      features: [
        "Emotional Intelligence",
        "Creative Problem Solving", 
        "Self-Directed Learning",
        "Autonomous Decision Making"
      ],
      color: "from-purple-600 to-pink-600",
      impact: "AI systems with genuine consciousness that can think, feel, and create alongside humans."
    },
    {
      id: 2,
      title: "Quantum Reality Manipulation",
      icon: "⚡",
      description: "Three-dimensional interfaces that revolutionize human-computer interaction",
      features: [
        "3D Visualization",
        "Gesture Control",
        "Thought Interface",
        "Real-time Rendering"
      ],
      color: "from-blue-600 to-indigo-600",
      impact: "Quantum-powered interfaces that manipulate reality itself for unprecedented user experiences."
    },
    {
      id: 3,
      title: "Molecular Manufacturing",
      icon: "⚗️",
      description: "Building the future atom by atom with perfect precision",
      features: [
        "Atomic Precision",
        "Self-Replication",
        "Programmable Matter",
        "Zero Waste Production"
      ],
      color: "from-orange-600 to-red-600",
      impact: "Revolutionary manufacturing that builds anything from the atomic level up."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTechClick = (index: number) => {
    if (index !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-16 rounded-2xl">
      <Helmet>
        <title>Interactive Tech Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Explore our interactive technology showcase featuring quantum technologies, AI evolution, and reality manipulation systems." />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2027 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary 2027 technologies with interactive features and immersive experiences
          </p>
        </div>

        {/* Interactive Tech Selector */}
        <div className="flex justify-center space-x-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTechClick(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tech.title}
            </button>
          ))}
        </div>

        {/* Tech Display Area */}
        <div className="relative">
          {technologies[activeTech] && (
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{technologies[activeTech].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].title}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {technologies[activeTech].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {technologies[activeTech].features?.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Technology Impact</h4>
                    <p className="text-gray-300 mb-4">
                      {technologies[activeTech].impact}
                    </p>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;