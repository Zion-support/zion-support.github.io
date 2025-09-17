import React from 'react';

<<<<<<< HEAD
const AI2025_2026UltimateTechnologyShowcase: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                opacity: [010],
                scale: [010],
              }}
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI 2025-2026
            </span>
            <br />
            <span className="text-4xl md:text-5xl">Ultimate Technology Showcase</span>
=======
const COMPONENT: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Technology Showcase
>>>>>>> origin/merged-prs
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience revolutionary technology and innovation.
          </p>
<<<<<<< HEAD
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <divbutton
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </divbutton>
            <divbutton
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
              Explore Solutions
            </divbutton>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex justify-center mb-12"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-full p-2 border border-white/20">
            <button
              onClick={() => setActiveTab('ai-2025')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'ai-2025'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              AI 2025
            </button>
            <button
              onClick={() => setActiveTab('ai-2026')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'ai-2026'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              AI 2026
            </button>
          </div>
        </div>

        {/* Technology Features */}
          <div
            key={activeTab}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {currentTech.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {currentTech.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {currentTech.features.map((featureindex) => (
                <div
                  key={feature.title}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Proven Results</h3>
            <p className="text-gray-300 text-lg">Real-world impact from our AI solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+'label: 'Enterprise Clients' },
              { number: '99.9%'label: 'Uptime Guarantee' },
              { number: '300%'label: 'ROI Increase' },
              { number: '24/7'label: 'AI Support' }
            ].map((statindex) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our AI solutions to revolutionize their operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <divbutton
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold flex items-center gap-3 hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="w-6 h-6" />
                Start Your AI Journey
              </divbutton>
              <divbutton
                className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold flex items-center gap-3 hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <Users className="w-6 h-6" />
                Schedule Demo
              </divbutton>
            </div>
          </div>
=======
        </div>

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
export default AI2025_2026UltimateTechnologyShowcase;
</div></div></div></div></div></div>
=======
export default COMPONENT;
>>>>>>> origin/merged-prs
