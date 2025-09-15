import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 1,
      title: "Advanced Space Technology 2026",
      description: "Pioneering quantum propulsion, space AI networks, and interplanetary exploration",
      image: "🚀",
      gradient: "from-cyan-500 to-blue-500",
      link: "/pages/AdvancedSpaceTech2026",
      badge: "BREAKTHROUGH",
      features: ["Quantum Propulsion", "Space AI Networks", "Terraforming Tech"]
    },
    {
      id: 2,
      title: "Next-Gen Biotechnology 2026",
      description: "Revolutionary gene editing, neural regeneration, and synthetic biology solutions",
      image: "🧬",
      gradient: "from-emerald-500 to-teal-500",
      link: "/pages/NextGenBiotech2026",
      badge: "REVOLUTIONARY",
      features: ["CRISPR 3.0", "Neural Regeneration", "Lab-Grown Organs"]
    },
    {
      id: 3,
      title: "Revolutionary Robotics 2026",
      description: "Autonomous robots, humanoid assistants, and intelligent automation systems",
      image: "🤖",
      gradient: "from-blue-500 to-indigo-500",
      link: "/pages/RevolutionaryRobotics2026",
      badge: "INNOVATIVE",
      features: ["Humanoid Assistants", "Swarm Robotics", "Medical Robotics"]
    },
    {
      id: 4,
      title: "Quantum-Neural Fusion 2026",
      description: "Merging quantum computing with neural interfaces for unprecedented capabilities",
      image: "⚛️",
      gradient: "from-purple-500 to-pink-500",
      link: "/pages/QuantumNeuralFusion2026",
      badge: "FUTURE",
      features: ["Quantum Processing", "Neural Interfaces", "Consciousness Transfer"]
    },
    {
      id: 5,
      title: "Synthetic Intelligence 2026",
      description: "Advanced AI systems with synthetic consciousness and autonomous decision-making",
      image: "🧠",
      gradient: "from-violet-500 to-fuchsia-500",
      link: "/pages/SyntheticIntelligence2026",
      badge: "ADVANCED",
      features: ["Synthetic Consciousness", "Autonomous AI", "Creative Intelligence"]
    },
    {
      id: 6,
      title: "Cyber-Physical Systems 2026",
      description: "Integrating digital and physical worlds through advanced IoT and edge computing",
      image: "🌐",
      gradient: "from-cyan-500 to-emerald-500",
      link: "/pages/CyberPhysicalSystems2026",
      badge: "INTEGRATED",
      features: ["Smart Cities", "IoT Networks", "Edge Computing"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-12 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future Today
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover groundbreaking technologies and innovations that are reshaping our world
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((content) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="text-8xl">{content.image}</div>
                          <div>
                            <span className={`inline-block px-4 py-2 bg-gradient-to-r ${content.gradient} text-white rounded-full text-sm font-bold mb-2`}>
                              {content.badge}
                            </span>
                            <h3 className="text-4xl font-bold text-white">{content.title}</h3>
                          </div>
                        </div>
                        <p className="text-xl text-gray-300 mb-8">{content.description}</p>
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {content.features.map((feature, index) => (
                            <div key={index} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-4 text-center border border-purple-400/30">
                              <div className="text-sm font-semibold text-purple-200">{feature}</div>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={content.link}
                          className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore {content.title.split(' ')[0]} →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="text-9xl mb-4 opacity-20">{content.image}</div>
                        <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                          2026
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredContent.map((content) => (
            <a
              key={content.id}
              href={content.link}
              className="group bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{content.image}</div>
                <div>
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${content.gradient} text-white rounded-full text-xs font-bold`}>
                    {content.badge}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {content.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{content.description}</p>
              <div className="flex items-center text-purple-400 font-semibold text-sm group-hover:text-purple-300 transition-colors">
                Explore Now →
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Dive deep into revolutionary technologies that are transforming industries and reshaping our world. 
            Each piece of content offers unique insights and practical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Download Tech Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;