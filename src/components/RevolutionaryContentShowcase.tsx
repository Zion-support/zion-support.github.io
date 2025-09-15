import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const showcaseItems = [
    {
      id: 1,
      title: "Next-Gen AI Revolution 2026",
      description: "Experience the future of artificial intelligence with revolutionary breakthroughs that are reshaping every industry",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenAIRevolution2026",
      features: ["Autonomous AI Agents", "Edge AI Computing", "Generative AI 2.0"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution 2026",
      description: "Harness the power of quantum mechanics to solve problems that were previously impossible",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2026",
      description: "Bridge the gap between mind and machine with direct brain-computer communication",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "The emergence of digital consciousness and self-aware AI systems",
      image: "🤖",
      gradient: "from-violet-600 to-fuchsia-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Digital Consciousness", "Self-Evolution", "Collective Intelligence"]
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      description: "The revolutionary convergence of quantum computing and neural networks",
      image: "🔮",
      gradient: "from-cyan-600 to-indigo-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Neural Networks", "Quantum Consciousness", "Quantum Internet"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold mb-6 animate-bounce">
            🚀 REVOLUTIONARY TECHNOLOGY SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience the Future Today
          </h2>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
            Discover groundbreaking technologies that are reshaping our world and creating unprecedented possibilities
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {showcaseItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-12 text-white relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 animate-pulse">{item.image}</div>
                        <h3 className="text-4xl font-bold mb-6">{item.title}</h3>
                        <p className="text-xl opacity-90 mb-8">{item.description}</p>
                        <div className="space-y-3 mb-8">
                          {item.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={item.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Technology →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="text-9xl mb-6 animate-spin" style={{ animationDuration: '20s' }}>
                          {item.image}
                        </div>
                        <div className="text-2xl font-bold mb-4">Revolutionary Breakthrough</div>
                        <div className="text-lg opacity-80">Available Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {showcaseItems.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{item.image}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-purple-200 text-sm mb-4">{item.description}</p>
              <a 
                href={item.link}
                className="text-purple-400 hover:text-white font-semibold text-sm"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Future?</h3>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already leveraging our revolutionary technologies 
            to drive innovation, efficiency, and unprecedented growth.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;