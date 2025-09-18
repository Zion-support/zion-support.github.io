import React, { useState, useEffect } from 'react';

const InteractiveFeatures2025: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('interactive-features');
    if (element) {
      observer.observe(element);
    }

    return () => {
      clearInterval(timer);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    {
      id: 1,
      title: "Real-time Analytics",
      description: "Live data processing and visualization",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      stats: "99.9% uptime"
    },
    {
      id: 2,
      title: "AI-Powered Insights",
      description: "Machine learning driven recommendations",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      stats: "2.3M+ predictions"
    },
    {
      id: 3,
      title: "Quantum Processing",
      description: "Next-generation quantum computing",
      icon: "⚛️",
      color: "from-emerald-500 to-teal-500",
      stats: "10^15 operations/sec"
    },
    {
      id: 4,
      title: "Neural Networks",
      description: "Deep learning neural architectures",
      icon: "🔗",
      color: "from-orange-500 to-red-500",
      stats: "1B+ parameters"
    }
  ];

  return (
    <div id="interactive-features" className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ INTERACTIVE FEATURES • LIVE NOW
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Interactive Features 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience cutting-edge interactive technologies that respond to your every action
          </p>
          
          {/* Live Clock */}
          <div className="inline-flex items-center px-6 py-3 bg-black/30 rounded-full border border-purple-500/30">
            <span className="text-green-400 mr-2">🟢</span>
            <span className="text-white font-mono">
              {currentTime.toLocaleTimeString('en-US', { 
                hour12: false,
                timeZone: 'UTC'
              })} UTC
            </span>
          </div>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-gradient-to-br ${feature.color} p-8 rounded-2xl h-full transform transition-all duration-300 ${
                hoveredCard === feature.id ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
              }`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-16 h-16 border border-white/30 rounded-full animate-spin"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-full animate-ping"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/80 mb-4">{feature.description}</p>
                  <div className="text-sm font-bold text-white/90 bg-white/20 px-3 py-1 rounded-full inline-block">
                    {feature.stats}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-white/10 rounded-2xl transition-opacity duration-300 ${
                  hoveredCard === feature.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">Live Interactive Demo</h3>
            <p className="text-gray-300 mb-8">Try our interactive features in real-time</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Chat Interface */}
            <div className="bg-black/30 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-white">AI Assistant</h4>
              <div className="bg-gray-800 rounded-lg p-4 mb-4 h-32 overflow-y-auto">
                <div className="text-green-400 text-sm mb-2">🤖 AI: Hello! I'm your AI assistant. How can I help you today?</div>
                <div className="text-blue-400 text-sm mb-2">👤 You: What's the weather like?</div>
                <div className="text-green-400 text-sm">🤖 AI: I'm analyzing real-time data... The weather is perfect for innovation!</div>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Send
                </button>
              </div>
            </div>

            {/* Data Visualization */}
            <div className="bg-black/30 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Live Data Stream</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">CPU Usage</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <span className="text-green-400 text-sm">75%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Memory</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-yellow-400 text-sm">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Network</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-purple-400 text-sm">90%</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  View Full Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures2025;