import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentItems = [
    {
      id: 'biotech',
      title: 'Advanced Biotechnology 2026',
      description: 'Revolutionary biotech solutions with synthetic biology and personalized medicine',
      icon: '🧬',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/AdvancedBiotech2026',
      features: ['Synthetic Biology', 'Gene Editing', 'Personalized Medicine', 'Organ-on-Chip']
    },
    {
      id: 'space',
      title: 'Space Technology 2026',
      description: 'Next-generation space exploration with lunar bases and interplanetary missions',
      icon: '🚀',
      gradient: 'from-indigo-600 to-purple-600',
      link: '/pages/SpaceTech2026',
      features: ['Lunar Bases', 'Mars Colonization', 'Space Manufacturing', 'Asteroid Mining']
    },
    {
      id: 'robotics',
      title: 'Advanced Robotics 2026',
      description: 'Humanoid robots and autonomous systems transforming every industry',
      icon: '🤖',
      gradient: 'from-slate-600 to-gray-600',
      link: '/pages/AdvancedRobotics2026',
      features: ['Humanoid Robots', 'Swarm Intelligence', 'Soft Robotics', 'AI Autonomy']
    },
    {
      id: 'synthetic-ai',
      title: 'Synthetic Intelligence 2026',
      description: 'Self-evolving AI systems that transcend traditional limitations',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/SyntheticIntelligence2026',
      features: ['Neural Networks', 'Quantum Processing', 'Predictive Consciousness', 'Autonomous Evolution']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveContent((prev) => (prev + 1) % contentItems.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleContentClick = (index: number) => {
    if (index !== activeContent) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveContent(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-4">🌟 Revolutionary Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technology solutions with interactive features and immersive experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Selector */}
          <div className="space-y-4">
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleContentClick(index)}
                className={`cursor-pointer transition-all duration-300 p-6 rounded-xl border-2 ${
                  activeContent === index
                    ? `bg-gradient-to-r ${item.gradient} border-white/50 shadow-2xl scale-105`
                    : 'bg-white/10 border-white/20 hover:bg-white/20 hover:scale-102'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                  <div className="text-2xl">
                    {activeContent === index ? '✨' : '→'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Display */}
          <div className="relative">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className={`bg-gradient-to-br ${contentItems[activeContent].gradient} rounded-2xl p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-8xl mb-4 animate-bounce">
                      {contentItems[activeContent].icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      {contentItems[activeContent].title}
                    </h3>
                    <p className="text-xl opacity-90 mb-6">
                      {contentItems[activeContent].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {contentItems[activeContent].features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-all duration-300"
                      >
                        <div className="font-semibold">{feature}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={contentItems[activeContent].link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
                    >
                      Explore {contentItems[activeContent].title.split(' ')[0]} →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleContentClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeContent === index
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase;