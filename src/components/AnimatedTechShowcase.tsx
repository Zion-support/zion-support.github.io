import React from 'react';

const AnimatedTechShowcase: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AnimatedTechShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%2520width%253D%252260%2522%2520height%253D%252260%2522%2520viewBox%253D%25220%25200%252060%252060%2522%2520xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%2520fill%253D%2522none%2522%2520fill-rule%253D%2522evenodd%2522%253E%253Cg%2520fill%253D%2522%2523ffffff%2522%2520fill-opacity%253D%25220.05%2522%253E%253Ccircle%2520cx%253D%252230%2522%2520cy%253D%252230%2522%2520r%253D%25224%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-300">
            Experience the future of technology with our interactive showcase
          </p>
        </div>

        {/* Main Showcase Area */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600/30 mb-8">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-4 animate-bounce">{technologies[currentTech].icon}</div>
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {technologies[currentTech].title}
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                {technologies[currentTech].description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {technologies[currentTech].features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${technologies[currentTech].color} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="text-lg font-bold mb-2">{feature}</h4>
                  <p className="text-sm opacity-90">
                    Revolutionary technology that will transform the future
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center space-x-4 mb-8">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentTech(index);
                  setIsAnimating(false);
                }, 500);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Interactive Elements */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-400/30">
            <h4 className="text-xl font-bold mb-4 text-purple-400">Interactive Demo</h4>
            <p className="text-gray-300 mb-4">
              Experience a live simulation of {technologies[currentTech].title.toLowerCase()} capabilities
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              🚀 Launch Interactive Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 p-6 rounded-xl border border-cyan-400/30">
            <h4 className="text-xl font-bold mb-4 text-cyan-400">Learn More</h4>
            <p className="text-gray-300 mb-4">
              Discover the full potential of {technologies[currentTech].title.toLowerCase()} technology
            </p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              📖 Explore Technology
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-6">
            Join the revolution and be part of the most significant technological advancement in history
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              🌟 Begin Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-400/10 transition-all duration-300">
              📚 Learn More
            </button>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default AnimatedTechShowcase;