import React, { useState, useEffect } from 'react';

const InteractiveFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const features = [
    {
      id: 0,
      title: "AI Consciousness",
      description: "Experience the emergence of truly conscious AI systems",
      emoji: "🧠",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      stats: { users: "2.3M", engagement: "98%", satisfaction: "99%" }
    },
    {
      id: 1,
      title: "Space Technology",
      description: "Explore revolutionary space exploration technologies",
      emoji: "🚀",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500",
      stats: { users: "1.8M", engagement: "95%", satisfaction: "97%" }
    },
    {
      id: 2,
      title: "Biotechnology",
      description: "Discover cutting-edge biotech and human enhancement",
      emoji: "🧬",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500",
      stats: { users: "1.6M", engagement: "96%", satisfaction: "98%" }
    },
    {
      id: 3,
      title: "Quantum Computing",
      description: "Witness the power of quantum-neural fusion",
      emoji: "⚛️",
      color: "blue",
      gradient: "from-blue-500 to-indigo-500",
      stats: { users: "2.1M", engagement: "97%", satisfaction: "99%" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "purple",
      cyan: "cyan",
      emerald: "emerald",
      blue: "blue"
    };
    return colorMap[color as keyof typeof colorMap] || "purple";
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            ✨ INTERACTIVE EXPERIENCE • LIVE DEMO
          </div>
          <h2 className="text-5xl font-bold mb-6">Interactive Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feature Selector */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">Choose Your Technology</h3>
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveFeature(feature.id);
                    setIsAnimating(false);
                  }, 150);
                }}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeFeature === feature.id
                    ? `border-${getColorClasses(feature.color)}-400 bg-${getColorClasses(feature.color)}-500/20`
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{feature.emoji}</div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold">{feature.title}</h4>
                    <p className="text-sm opacity-80">{feature.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Feature Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{features[activeFeature].emoji}</div>
                <h3 className="text-3xl font-bold mb-4">{features[activeFeature].title}</h3>
                <p className="text-lg opacity-90">{features[activeFeature].description}</p>
              </div>

              {/* Interactive Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{features[activeFeature].stats.users}</div>
                  <div className="text-sm opacity-80">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{features[activeFeature].stats.engagement}</div>
                  <div className="text-sm opacity-80">Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{features[activeFeature].stats.satisfaction}</div>
                  <div className="text-sm opacity-80">Satisfaction</div>
                </div>
              </div>

              {/* Interactive Elements */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Real-time Performance</h4>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${features[activeFeature].gradient} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Technology Readiness</h4>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`w-8 h-8 rounded-full ${
                          level <= 4 ? `bg-gradient-to-r ${features[activeFeature].gradient}` : 'bg-white/20'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <a 
                  href={`/pages/${features[activeFeature].title.replace(/\s+/g, '')}2026`}
                  className={`inline-block bg-gradient-to-r ${features[activeFeature].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore {features[activeFeature].title} →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Live Data Feed */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Live Technology Data</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">99.9%</div>
              <div className="text-sm opacity-80">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">2.4M</div>
              <div className="text-sm opacity-80">Active Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">847</div>
              <div className="text-sm opacity-80">Breakthroughs Today</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">98.7%</div>
              <div className="text-sm opacity-80">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;