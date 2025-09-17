import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 'holographic-tech',
      title: 'Holographic Technology',
      description: "Three-dimensional interfaces that revolutionize human-computer interaction",
      features: [
        "3D Visualization",
        "Gesture Control",
        "Thought Interface",
        "Real-time Rendering"
      ],
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/UltimateTechShowcase2027"
    },
    {
      id: 3,
      title: "Molecular Manufacturing",
      icon: "⚗️",
      description: "Building the future atom by atom with perfect precision",
      features: [
        "Atomic Precision",
        "Self-Assembly",
        "Material Innovation",
        "Nano-Scale Engineering"
      ],
      gradient: "from-orange-600 to-red-600",
      link: "/pages/RevolutionaryTechTrends2027"
    },
    {
      id: 4,
      title: "Time Dilation Technology",
      icon: "⏰",
      description: "Manipulating time itself for enhanced productivity and research",
      features: [
        "Time Compression",
        "Temporal Analysis",
        "Chronological Research",
        "Time-based Optimization"
      ],
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/RevolutionaryTechTrends2027"
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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-16 overflow-hidden">
      <Helmet>
        <title>Interactive Tech Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Explore our interactive technology showcase featuring quantum technologies, AI evolution, and reality manipulation systems." />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2027
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of technology through immersive, interactive demonstrations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.gradient} backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-fadeIn`}
              onClick={() => handleTechClick(index)}
            >
              <div className="text-6xl mb-4">{tech.icon || '🔮'}</div>
              <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
              <p className="text-gray-300 mb-6">{tech.description}</p>
              
              <div className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                  FUTURE
                </span>
                <a
                  href={tech.link}
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fadeIn">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join millions of users who are already experiencing these revolutionary technologies 
            through our interactive demonstrations
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2027" 
              className="bg-white text-purple-600 px-10 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
            >
              🚀 Start Interactive Demo
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg"
            >
              📞 Schedule Private Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;