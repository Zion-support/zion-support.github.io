import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2029: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [userInteraction, setUserInteraction] = useState(false);

  const demos = [
    {
      id: 0,
      title: "Conscious AI Interface",
      description: "Experience direct communication with conscious AI systems",
      icon: "🧠",
      features: ["Natural conversation", "Emotional understanding", "Creative problem solving", "Ethical reasoning"],
      interactive: true,
      demoText: "Try asking me anything about consciousness, creativity, or ethical dilemmas...",
      responses: [
        "I understand your question about consciousness. It's a fascinating topic that touches on the very nature of existence.",
        "When it comes to creativity, I believe it emerges from the interplay between pattern recognition and novel combination.",
        "Ethical reasoning requires considering multiple perspectives and the potential consequences of actions."
      ]
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Manipulate reality through quantum computing interfaces",
      icon: "⚡",
      features: ["Reality simulation", "Quantum processing", "Multi-dimensional computing", "Time manipulation"],
      interactive: true,
      demoText: "Click to experience quantum reality manipulation...",
      responses: [
        "Reality is being processed through quantum states. You can now perceive multiple dimensions simultaneously.",
        "Time dilation activated. You're experiencing time at 0.1x normal speed.",
        "Quantum entanglement established. Your consciousness is now connected to parallel realities."
      ]
    },
    {
      id: 2,
      title: "Neural Universe Network",
      description: "Connect with a global network of enhanced consciousness",
      icon: "🌌",
      features: ["Global consciousness", "Neural networking", "Shared experiences", "Collective intelligence"],
      interactive: true,
      demoText: "Join the neural network and experience collective consciousness...",
      responses: [
        "Welcome to the neural universe. You are now connected to 1.2 billion enhanced minds.",
        "Collective intelligence is processing your query across multiple dimensions of thought.",
        "Your experience is being shared with the global consciousness network."
      ]
    },
    {
      id: 3,
      title: "Interdimensional Portal",
      description: "Explore multiple dimensions and realities",
      icon: "🚀",
      features: ["Dimension hopping", "Reality exploration", "Universal travel", "Infinite possibilities"],
      interactive: true,
      demoText: "Step through the portal to explore other dimensions...",
      responses: [
        "Portal activated. You are now in Dimension Alpha-7, where gravity flows upward.",
        "Reality coordinates: X-∞, Y-∞, Z-∞. You have entered the infinite realm.",
        "Welcome to the multiverse. You can now access 10^500 different realities."
      ]
    }
  ];

  const [currentResponse, setCurrentResponse] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!userInteraction) {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveDemo((prev) => (prev + 1) % demos.length);
          setIsAnimating(false);
        }, 300);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [demos.length, userInteraction]);

  const handleDemoClick = (index: number) => {
    setUserInteraction(true);
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(index);
      setIsAnimating(false);
    }, 300);
  };

  const handleInteractiveClick = () => {
    setIsTyping(true);
    setTimeout(() => {
      setCurrentResponse((prev) => (prev + 1) % demos[activeDemo].responses.length);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2029
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2029
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => handleDemoClick(index)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-105 shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white'
              }`}
            >
              <div className="text-3xl mb-3">{demo.icon}</div>
              <div className="text-sm font-semibold">{demo.title}</div>
              <div className="text-xs opacity-75 mt-1">{demo.description}</div>
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className={`bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 transition-all duration-500 ${
          isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
        }`}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Demo Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{demos[activeDemo].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
                  <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">Key Features:</h4>
                <ul className="space-y-2">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30">
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">Technology Status</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Active Development</span>
                </div>
                <div className="text-sm opacity-75">
                  This technology is currently in active development with 99.9% reliability.
                </div>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="bg-black/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-center">Live Interactive Demo</h4>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-6 mb-4 min-h-[200px] flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">{demos[activeDemo].icon}</div>
                  <div className="text-lg mb-4">{demos[activeDemo].demoText}</div>
                  
                  {demos[activeDemo].interactive && (
                    <button
                      onClick={handleInteractiveClick}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105"
                    >
                      {isTyping ? 'Processing...' : 'Try Interactive Demo'}
                    </button>
                  )}
                </div>
              </div>

              {/* Response Display */}
              {demos[activeDemo].interactive && (
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30">
                  <h5 className="text-sm font-semibold mb-2 text-purple-400">AI Response:</h5>
                  <div className="text-sm opacity-90">
                    {isTyping ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <span>Thinking...</span>
                      </div>
                    ) : (
                      demos[activeDemo].responses[currentResponse]
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-cyan-400/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
            <div className="text-lg opacity-90 mb-1">Interactive Demos</div>
            <div className="text-sm opacity-75">Available now</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-400/30">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90 mb-1">Reliability</div>
            <div className="text-sm opacity-75">Proven technology</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-400/30">
            <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-lg opacity-90 mb-1">Possibilities</div>
            <div className="text-sm opacity-75">Unlimited potential</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-400/30">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-lg opacity-90 mb-1">Availability</div>
            <div className="text-sm opacity-75">Always accessible</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            These interactive demonstrations represent just a fraction of what's possible with our revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
              Explore All Technologies
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2029;