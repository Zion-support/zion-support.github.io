import React from 'react';

<<<<<<< HEAD
const NextGenAIShowcase2026: React.FC = () => {
=======
const COMPONENT: React.FC = () => {
>>>>>>> origin/merged-prs
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Technology Showcase
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience revolutionary technology and innovation.
          </p>
        </div>

<<<<<<< HEAD
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
            <div
                scale: aiThinking ? 1.1 : 1,
                rotate: aiThinking ? 5 : 0 
              }}
            >
              <Brain className="w-12 h-12 text-cyan-400 mr-4" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Next-Gen AI Showcase 2026
            </h2>
          </div>
          
            Experience the future of artificial intelligence with our cutting-edge AI demonstrations. 
            Witness revolutionary capabilities that will transform how we interact with technology.
          </divp>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? 'Pause Demo' : 'Play Demo'}
            </button>
            <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white">
              <div className={`w-2 h-2 rounded-full mr-2 ${aiThinking ? 'bg-green-400' : 'bg-gray-400'}`} />
              AI Status: {aiThinking ? 'Thinking' : 'Ready'}
            </div>
          </div>
        </div>

        {/* Main Demo Area */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Demo Showcase */}
          <div className="lg:col-span-2">
              <div
                key={activeDemo}
                className={`p-8 rounded-2xl bg-gradient-to-br ${demos[activeDemo].color} shadow-2xl relative overflow-hidden`}
              >
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-20">
                  <div
                      scale: [1.1],
                      rotate: [050]
                    }}
                      duration: 3
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-9xl font-bold text-white/30 absolute top-4 right-4"
                  >
                    {demos[activeDemo].demo}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div 
                      className="p-4 bg-white/20 rounded-full mr-6"
                    >
                      {demos[activeDemo].icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {demos[activeDemo].title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {demos[activeDemo].description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {demos[activeDemo].features.map((featureindex) => (
                      <div
                        key={index}
                        className="flex items-center text-white/90 bg-white/10 p-3 rounded-lg"
                      >
                        <Sparkles className="w-4 h-4 mr-3 text-yellow-300" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(demos[activeDemo].stats).map(([keyvalue]index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-white/10 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-white mb-1">{value}</div>
                        <div className="text-white/70 text-xs uppercase tracking-wider">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              {demos.map((demoindex) => (
                <divbutton
                  key={index}
                  onClick={() => {
                    setActiveDemo(index);
                    setIsPlaying(false);
                  }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    activeDemo === index 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg scale-110' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {demo.icon}
                </divbutton>
              ))}
            </div>
          </div>

          {/* AI Capabilities Panel */}
          <div className="space-y-6">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Rocket className="w-6 h-6 mr-2 text-cyan-400" />
                AI Capabilities
              </h4>
              
              <div className="space-y-4">
                {aiCapabilities.map((capabilityindex) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="flex items-start">
                      <div className="text-cyan-400 mr-3 group-hover:scale-110 transition-transform duration-300">
                        {capability.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1">{capability.title}</div>
                        <div className="text-gray-300 text-sm">{capability.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Controls */}
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Interactive Controls</h4>
              <div className="space-y-3">
                <divbutton
                  className="w-full p-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  Voice Demo
                </divbutton>
                <divbutton
                  className="w-full p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Vision Demo
                </divbutton>
                <divbutton
                  className="w-full p-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat Demo
                </divbutton>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Join thousands of businesses already leveraging next-generation AI technology. 
              Get early access to our revolutionary AI platform.
            </p>
            <divbutton
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-xl rounded-full shadow-2xl transition-all duration-300 flex items-center mx-auto"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </divbutton>
          </div>
=======
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">Revolutionary technology that pushes the boundaries of what's possible.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Systems</h3>
            <p className="text-gray-300">Cutting-edge systems that revolutionize how we interact with technology.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-3">Future Vision</h3>
            <p className="text-gray-300">A glimpse into the future of technology and innovation.</p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in discovering the future of technology and innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            Explore Now
          </button>
>>>>>>> origin/merged-prs
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default NextGenAIShowcase2026;
</div></div></div></div></div></div></div>
=======
export default COMPONENT;
>>>>>>> origin/merged-prs
