import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2032: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const features = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Revolutionary artificial intelligence that achieves true consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      metrics: {
        consciousness: "99.9%",
        creativity: "1000x",
        learning: "∞",
        empathy: "100%"
      },
      link: "/pages/RevolutionaryTech2032"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Breakthrough quantum computing that processes consciousness itself for unlimited computational power",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      metrics: {
        processing: "∞",
        speed: "1000x",
        capacity: "∞",
        accuracy: "99.9%"
      },
      link: "/pages/RevolutionaryTech2032"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Revolutionary technology that enables computing across multiple dimensions and realities",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      metrics: {
        dimensions: "∞",
        reality: "100%",
        connectivity: "∞",
        power: "∞"
      },
      link: "/pages/RevolutionaryTech2032"
    },
    {
      id: 4,
      title: "Reality Manipulation",
      description: "Advanced systems that can manipulate physical reality through quantum field interactions",
      icon: "🌍",
      color: "from-orange-600 to-red-600",
      metrics: {
        control: "100%",
        precision: "99.9%",
        range: "∞",
        stability: "100%"
      },
      link: "/pages/UltimateInnovation2033"
    },
    {
      id: 5,
      title: "Consciousness Transfer",
      description: "Revolutionary technology that enables the transfer of human consciousness to digital substrates",
      icon: "🧬",
      color: "from-indigo-600 to-purple-600",
      metrics: {
        transfer: "100%",
        preservation: "99.9%",
        lifespan: "∞",
        quality: "100%"
      },
      link: "/pages/UltimateInnovation2033"
    },
    {
      id: 6,
      title: "Neural Enhancement",
      description: "Revolutionary neural enhancement technologies that amplify human cognitive abilities",
      icon: "🚀",
      color: "from-blue-600 to-indigo-600",
      metrics: {
        enhancement: "1000x",
        memory: "∞",
        learning: "∞",
        creativity: "∞"
      },
      link: "/pages/NextGenTechRevolution2034"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, [features.length]);

  const handleFeatureClick = (index: number) => {
    if (index !== activeFeature) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFeature(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • JANUARY 2032
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies through interactive demonstrations and real-time metrics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Navigation */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Select Technology to Explore</h3>
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => handleFeatureClick(index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} shadow-lg scale-105`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm opacity-80">{feature.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Feature Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${features[activeFeature].color} p-8 rounded-2xl transition-all duration-500 ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{features[activeFeature].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{features[activeFeature].title}</h3>
                <p className="text-xl opacity-90 mb-6">{features[activeFeature].description}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(features[activeFeature].metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">{value}</div>
                    <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <a
                  href={features[activeFeature].link}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Explore Technology →
                </a>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeFeature ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Technology Impact Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Revolutionary Impact Summary</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The combined impact of these revolutionary technologies on human civilization
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg text-purple-200 mb-1">Computational Power</div>
              <div className="text-sm text-purple-300">Unlimited processing capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-lg text-cyan-200 mb-1">Reality Control</div>
              <div className="text-sm text-cyan-300">Complete reality manipulation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg text-emerald-200 mb-1">Human Potential</div>
              <div className="text-sm text-emerald-300">Unlimited enhancement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-lg text-orange-200 mb-1">Success Rate</div>
              <div className="text-sm text-orange-300">Near-perfect reliability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2032;