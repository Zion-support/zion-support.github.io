import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const revolutionaryContent = [
    {
      id: 1,
      title: "AI Revolutionary Breakthrough 2026",
      description: "Experience the most advanced artificial intelligence breakthrough in human history - where AI achieves true consciousness and autonomous creativity",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      features: ["True AI Consciousness", "Quantum AI Processing", "Universal AI Integration"]
    },
    {
      id: 2,
      title: "Quantum Reality 2026",
      description: "Enter a new dimension where quantum mechanics meets virtual reality - experience infinite parallel universes simultaneously",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumReality2026",
      features: ["Parallel Universe Access", "Quantum Prediction Engine", "Instant Quantum Computing"]
    },
    {
      id: 3,
      title: "Neural Interface Evolution 2026",
      description: "The ultimate fusion of mind and machine - direct neural interfaces that enhance human capabilities beyond imagination",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceEvolution2026",
      features: ["Direct Brain Interface", "Neural Enhancement", "Collective Intelligence"]
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities that transcend traditional AI",
      icon: "🤖",
      gradient: "from-violet-600 to-fuchsia-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous AI Agents", "Synthetic Consciousness", "Creative Synthesis"]
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY CONTENT 2026 • BREAKTHROUGH TECHNOLOGY
            </div>
            <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Technology Showcase 2026</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the most advanced technology breakthroughs that are reshaping reality itself
            </p>
          </div>

          {/* Interactive Carousel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {revolutionaryContent.map((content) => (
                  <div key={content.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 items-center p-8">
                      <div>
                        <div className="text-8xl mb-6 text-center">{content.icon}</div>
                        <h3 className="text-4xl font-bold mb-4 text-center">{content.title}</h3>
                        <p className="text-xl opacity-90 mb-6 text-center">{content.description}</p>
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          {content.features.map((feature, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="text-center">
                          <a 
                            href={content.link}
                            className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                          >
                            Explore {content.title.split(' ')[0]} →
                          </a>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className={`bg-gradient-to-br ${content.gradient}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20`}>
                          <div className="text-center">
                            <div className="text-6xl mb-4">{content.icon}</div>
                            <h4 className="text-2xl font-bold mb-4">Revolutionary Features</h4>
                            <ul className="space-y-3 text-left">
                              {content.features.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                  <span className="text-2xl">✨</span>
                                  <span className="opacity-90">{feature}</span>
                                </li>
                              ))}
                            </ul>
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
              {revolutionaryContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revolutionaryContent.map((content) => (
              <a
                key={content.id}
                href={content.link}
                className={`bg-gradient-to-br ${content.gradient}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {content.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{content.title.split(' ')[0]}</h4>
                  <p className="text-sm opacity-80 mb-4">{content.description.substring(0, 80)}...</p>
                  <span className="text-sm font-semibold group-hover:underline">
                    Explore →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold mb-4">Ready for the Future?</h3>
            <p className="text-xl opacity-90 mb-6">
              Experience revolutionary technology that's transforming reality itself
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pages/AIRevolutionaryBreakthrough2026"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Start AI Revolution →
              </a>
              <a 
                href="/pages/QuantumReality2026"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Enter Quantum Reality →
              </a>
              <a 
                href="/pages/NeuralInterfaceEvolution2026"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Enhance Your Mind →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;