import React from 'react';
const RevolutionaryFeatures2025: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🎯 Revolutionary Features 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our groundbreaking features that are reshaping industries worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((featureindex) => (
            <div
              key={feature.title}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
                   style={{ background: `linear-gradient(135degvar(--tw-gradient-stops))` }}
              />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                <div
                  className="text-5xl mb-6"
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`px-4 py-2 bg-gradient-to-r ${feature.color} text-white rounded-full text-sm font-bold`}>
                    {feature.stats}
                  </span>
                  <div
                    className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-4 text-white">
              🎉 Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Join thousands of businesses already using our revolutionary AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/features-showcase" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Explore All Features
              </a>
              <a 
                href="/demo-request" 
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                📅 Book Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default RevolutionaryFeatures2025;
