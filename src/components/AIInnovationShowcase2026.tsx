import React from 'react';
const AIInnovationShowcase2026: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%25236366F1%22%20fill-opacity%253D%25220.1%2522%253E%253Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221.5%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            scale: [1.31],
            opacity: [0.20.50.2],
          }}
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
            scale: [1.21.2],
            opacity: [0.30.60.3],
          }}
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Brain className="w-4 h-4" />
            AI Innovation Showcase 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary AI
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Innovations
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies that are reshaping industries and 
            creating unprecedented opportunities for innovation and growth.
          </p>
        </div>
        {/* Innovation Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {innovations.map((innovationindex) => {
            const Icon = innovation.icon;
            return (
              <divbutton
                key={innovation.id}
                onClick={() => setActiveInnovation(index)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activeInnovation === index
                    ? `bg-gradient-to-br ${innovation.color} text-white shadow-xl`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{innovation.title}</h3>
                <p className="text-sm opacity-90">{innovation.description}</p>
              </divbutton>
            );
          })}
        </div>
        {/* Detailed Innovation Display */}
          <div
            key={activeInnovation}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Innovation Details */}
            <div>
              <div
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${currentInnovation.color} rounded-2xl flex items-center justify-center`}>
                    <currentInnovation.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {currentInnovation.title}
                    </h2>
                    <p className="text-gray-400">
                      Revolutionary AI Technology
                    </p>
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  {currentInnovation.description}
                </p>
              </div>
              {/* Features */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              >
                {currentInnovation.features.map((featureindex) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              {/* Impact Metrics */}
              <div
                className="grid grid-cols-3 gap-6 mb-8"
              >
                {Object.entries(currentInnovation.impact).map(([keyvalue]index) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
              {/* Applications */}
              <div
                className="mb-8"
              >
                <h4 className="text-lg font-semibold text-white mb-4">Key Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentInnovation.applications.map((appindex) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4"
              >
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  See in Action
                </button>
                <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Visual Representation */}
            <div
              className="relative"
            >
              <div className={`bg-gradient-to-br ${currentInnovation.color} p-8 rounded-3xl shadow-2xl`}>
                <div className="text-center text-white">
                  <currentInnovation.icon className="w-32 h-32 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    {currentInnovation.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    {currentInnovation.description}
                  </p>
                  {/* Interactive Elements */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(currentInnovation.impact).map(([keyvalue]index) => (
                      <div key={key} className="bg-white/20 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">{value}</div>
                        <div className="text-sm opacity-80 capitalize">
                          {key.replace(/([A-Z])/g' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                  y: [0-10],
                  rotate: [0180360],
                }}
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-4 h-4 text-yellow-800" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full"
                  scale: [1.21],
                  opacity: [0.710.7],
                }}
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </div>
        {/* Success Stories */}
        <div
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Real-World Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((storyindex) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl mb-4">{story.logo}</div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {story.company}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {story.industry}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Challenge:</strong> {story.challenge}
                  </p>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Solution:</strong> {story.solution}
                  </p>
                  <p className="text-sm text-green-400 font-semibold">
                    <strong>Results:</strong> {story.results}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Final CTA */}
        <div
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Implement AI Innovation?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and transform your business with cutting-edge 
              artificial intelligence solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Start Your AI Journey
                <Rocket className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Schedule Demo
                <Users className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AIInnovationShowcase2026;
</div></div></div>