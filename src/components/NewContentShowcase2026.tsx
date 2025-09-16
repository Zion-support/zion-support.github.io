import React, { useState, useEffect } from 'react';

const NewContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContent = [
    {
      id: 1,
      title: "Advanced Biotech Solutions 2026",
      description: "Revolutionizing healthcare, agriculture, and environmental solutions with cutting-edge biotechnology",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/AdvancedBiotechSolutions2026",
      features: ["Synthetic Biology", "Precision Medicine", "Agricultural Innovation"],
      category: "Biotechnology"
    },
    {
      id: 2,
      title: "Space Technology Innovation 2026",
      description: "Pioneering the next frontier with revolutionary space technologies and AI-powered exploration",
      icon: "🚀",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/SpaceTechInnovation2026",
      features: ["Advanced Propulsion", "Satellite Networks", "Space Exploration"],
      category: "Space Technology"
    },
    {
      id: 3,
      title: "Cyber-Physical Systems 2026",
      description: "Bridging digital and physical worlds with intelligent systems for unprecedented automation",
      icon: "🔗",
      gradient: "from-slate-600 to-gray-600",
      link: "/pages/CyberPhysicalSystems2026",
      features: ["Smart Manufacturing", "Smart Cities", "Autonomous Vehicles"],
      category: "Cyber-Physical Systems"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* New Content Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BRAND NEW CONTENT • JANUARY 2026
            </div>
            <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary New Technology Content</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover our latest breakthrough content on Biotechnology, Space Technology, and Cyber-Physical Systems
            </p>
          </div>
          
          {/* Interactive Content Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {newContent.map((content) => (
                  <div key={content.id} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="flex items-center mb-4">
                            <span className="text-6xl mr-4">{content.icon}</span>
                            <div>
                              <div className="text-sm text-cyan-300 font-semibold mb-1">{content.category}</div>
                              <h3 className="text-3xl font-bold text-white mb-2">{content.title}</h3>
                              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${content.gradient} text-white rounded-full text-sm font-semibold`}>
                                NEW TECHNOLOGY
                              </div>
                            </div>
                          </div>
                          <p className="text-xl text-gray-300 mb-6">{content.description}</p>
                          <ul className="text-gray-300 space-y-2 mb-6">
                            {content.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <a 
                            href={content.link}
                            className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                          >
                            Explore {content.category} →
                          </a>
                        </div>
                        <div className="text-center">
                          <div className="text-9xl mb-4 opacity-50">{content.icon}</div>
                          <div className="text-2xl font-bold text-white mb-4">2026 Innovation</div>
                          <div className="text-gray-300">Cutting-Edge Technology</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center mt-6 space-x-2">
              {newContent.map((_, index) => (
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
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {newContent.map((content) => (
          <div key={content.id} className="group">
            <a href={content.link} className="block">
              <div className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div className="text-4xl mb-4">{content.icon}</div>
                <div className="text-sm font-semibold text-white/80 mb-2">{content.category}</div>
                <h3 className="text-xl font-bold mb-3">{content.title}</h3>
                <p className="text-white/90 mb-4 text-sm">{content.description}</p>
                <div className="flex items-center text-white/80 text-sm">
                  <span>Explore Now</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Technology Impact Stats */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
        <h3 className="text-3xl font-bold text-white text-center mb-8">New Technology Impact</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">3x</div>
            <div className="text-gray-300">Faster Innovation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300">Accuracy Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50%</div>
            <div className="text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;