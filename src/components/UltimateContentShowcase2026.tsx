import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentPages = [
    {
      title: "Advanced Biotech AI 2026",
      description: "Revolutionary biotechnology solutions powered by advanced AI for healthcare, drug discovery, and personalized medicine",
      icon: "🧬",
      link: "/pages/AdvancedBiotechAI2026",
      gradient: "from-green-500 to-blue-500",
      features: ["AI Drug Discovery", "Personalized Medicine", "Biomarker Detection"]
    },
    {
      title: "Advanced Space Tech 2026",
      description: "Next-generation space technology including satellite networks, space exploration, and interplanetary communication",
      icon: "🚀",
      link: "/pages/AdvancedSpaceTech2026",
      gradient: "from-indigo-500 to-purple-500",
      features: ["Satellite Networks", "Mars Missions", "Asteroid Mining"]
    },
    {
      title: "Holographic Reality 2026",
      description: "Revolutionary holographic technology for immersive experiences, virtual meetings, and next-generation AR/VR",
      icon: "🌈",
      link: "/pages/AdvancedHolographicReality2026",
      gradient: "from-cyan-500 to-purple-500",
      features: ["Photorealistic Holograms", "Virtual Meetings", "Immersive Gaming"]
    },
    {
      title: "Quantum Neural Fusion 2026",
      description: "Breakthrough technology combining quantum computing with neural interfaces for unprecedented capabilities",
      icon: "⚡",
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-purple-500 to-pink-500",
      features: ["Quantum AI", "Neural Interfaces", "Consciousness Computing"]
    },
    {
      title: "Advanced Robotics 2026",
      description: "Autonomous robotic systems with human-level intelligence and dexterity for industrial and personal use",
      icon: "🤖",
      link: "/pages/AdvancedRobotics2026",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Autonomous Systems", "Human-Robot Collaboration", "Industrial Automation"]
    },
    {
      title: "Green Tech Revolution 2026",
      description: "Sustainable technology solutions for climate change, renewable energy, and environmental conservation",
      icon: "🌱",
      link: "/pages/GreenTechRevolution2026",
      gradient: "from-green-500 to-emerald-500",
      features: ["Renewable Energy", "Carbon Capture", "Sustainable Manufacturing"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentPages.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE TECH SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">Revolutionary Technology 2026</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content showcasing the most advanced technologies of 2026
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentPages.map((page, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{page.icon}</div>
                        <h3 className="text-3xl font-bold mb-4">{page.title}</h3>
                        <p className="text-lg opacity-90 mb-6">{page.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {page.features.map((feature, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={page.link}
                          className={`inline-block bg-gradient-to-r ${page.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore {page.title} →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className={`w-64 h-64 mx-auto bg-gradient-to-br ${page.gradient} rounded-2xl flex items-center justify-center text-8xl opacity-80`}>
                          {page.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {contentPages.map((page, index) => (
            <a
              key={index}
              href={page.link}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {page.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{page.title}</h4>
              <p className="text-sm opacity-80 mb-3">{page.description}</p>
              <div className="flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Learn More →
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Explore All Revolutionary Technologies
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;