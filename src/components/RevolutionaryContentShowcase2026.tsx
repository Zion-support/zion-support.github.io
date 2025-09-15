import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentShowcases = [
    {
      title: "Revolutionary Tech Showcase 2026",
      description: "Experience the most advanced technologies that will reshape our world in 2026 and beyond",
      features: ["Quantum Consciousness", "Synthetic Intelligence", "Neural Interface Revolution"],
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2026"
    },
    {
      title: "Next-Gen AI Revolution 2026",
      description: "Discover the next generation of artificial intelligence that transcends current limitations",
      features: ["Autonomous AI Systems", "Synthetic Consciousness", "Quantum-Enhanced AI"],
      icon: "🤖",
      color: "from-blue-600 to-purple-600",
      link: "/pages/NextGenAIRevolution2026"
    },
    {
      title: "Ultimate Tech Insights 2026",
      description: "Stay ahead of the curve with our cutting-edge technology insights and predictions",
      features: ["Future Predictions", "Technology Trends", "Revolutionary Insights"],
      icon: "🔮",
      color: "from-indigo-600 to-cyan-600",
      link: "/pages/UltimateTechInsights2026"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % contentShowcases.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [contentShowcases.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 rounded-3xl p-12 text-white relative overflow-hidden mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">✨</span>
            <span className="text-cyan-300 font-semibold ml-2">REVOLUTIONARY NEW CONTENT 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌟 Revolutionary Content Showcase
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the most groundbreaking content that will define the future of technology. 
            From quantum consciousness to synthetic intelligence, discover what's possible.
          </p>
        </div>

        {/* Dynamic Content Carousel */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className={`transition-all duration-700 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
                <div className="text-center">
                  <div className="text-8xl mb-8">{contentShowcases[currentSlide].icon}</div>
                  <h3 className="text-4xl font-bold text-white mb-6">{contentShowcases[currentSlide].title}</h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                    {contentShowcases[currentSlide].description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {contentShowcases[currentSlide].features.map((feature, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="text-2xl mb-2">✨</div>
                        <h4 className="text-lg font-bold text-white mb-2">{feature}</h4>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={contentShowcases[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${contentShowcases[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
                  >
                    🚀 Explore {contentShowcases[currentSlide].title} →
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center space-x-3 mt-8">
                {contentShowcases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentSlide(index);
                        setIsAnimating(false);
                      }, 500);
                    }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contentShowcases.map((showcase, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">{showcase.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">{showcase.title}</h3>
              <p className="text-gray-300 mb-6 text-center text-sm">
                {showcase.description}
              </p>
              <div className="space-y-2 mb-6">
                {showcase.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href={showcase.link}
                className={`block w-full bg-gradient-to-r ${showcase.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore Now →
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">🎮 Interactive Features</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our revolutionary content with interactive demonstrations and immersive features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-lg font-bold text-white mb-2">Neural Interface Demo</h4>
              <p className="text-gray-300 text-sm mb-4">Try our neural interface simulator</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                Start Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h4 className="text-lg font-bold text-white mb-2">Quantum Lab</h4>
              <p className="text-gray-300 text-sm mb-4">Explore quantum computing principles</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                Enter Lab
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-lg font-bold text-white mb-2">AI Chat</h4>
              <p className="text-gray-300 text-sm mb-4">Chat with our synthetic intelligence</p>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                Start Chat
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-bold text-white mb-2">Space Simulator</h4>
              <p className="text-gray-300 text-sm mb-4">Experience space travel technology</p>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                Launch Sim
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already exploring the revolutionary content that will shape tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              🌟 Start Exploring Now
            </button>
            <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              📧 Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RevolutionaryContentShowcase2026;
