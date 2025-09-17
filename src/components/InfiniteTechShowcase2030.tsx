import React from 'react';
const InfiniteTechShowcase2030: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%2520width%253D%252260%2522%2520height%253D%252260%2522%2520viewBox%253D%25220%25200%252060%252060%2522%2520xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%2520fill%253D%2522none%2522%2520fill-rule%253D%2522evenodd%2522%253E%253Cg%2520fill%253D%2522%25239C92AC%2522%2520fill-opacity%253D%25220.1%2522%253E%253Ccircle%2520cx%253D%252230%2522%2520cy%253D%252230%2522%2520r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-violet-600/40 to-indigo-600/40"></div>
        {/* Infinite Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-5 h-5 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white rounded-full text-lg font-bold mb-6"
          >
            ♾️ INFINITE TECH 2030
          </div>
          <divh2
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Beyond All Existence
          </divh2>
          <divp
            className="text-2xl text-gray-300 max-w-5xl mx-auto"
          >
            Experience technologies that transcend the very concept of existence itself, 
            enabling creation of infinite realities, manipulation of all timelines, and achievement of true infinite existence
          </divp>
        </div>
        {/* Technology Showcase */}
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Technology Details */}
            <div
              key={currentTech}
              className="space-y-10"
            >
              <div className="flex items-center space-x-6">
                <div className={`text-8xl p-6 rounded-3xl bg-gradient-to-r ${infiniteTechs[currentTech].gradient}`}>
                  {infiniteTechs[currentTech].icon}
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white">
                    {infiniteTechs[currentTech].title}
                  </h3>
                  <p className="text-2xl text-violet-300">
                    {infiniteTechs[currentTech].subtitle}
                  </p>
                </div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                {infiniteTechs[currentTech].description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infiniteTechs[currentTech].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></div>
                    <span className="text-white font-medium text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-8">
                {Object.entries(infiniteTechs[currentTech].stats).map(([key, value], index) => (
                  <div
                    key={index}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Visual Representation */}
            <div
              className="relative"
            >
              <div className={`h-[500px] rounded-3xl bg-gradient-to-br ${infiniteTechs[currentTech].gradient} p-10 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="text-9xl mb-6">
                    {infiniteTechs[currentTech].icon}
                  </div>
                  <h4 className="text-3xl font-bold mb-4">
                    {infiniteTechs[currentTech].title.split(' ').slice(1).join(' ')}
                  </h4>
                  <div className="flex items-center space-x-6">
                    <span className="px-4 py-2 bg-white/20 rounded-full text-lg">
                      {infiniteTechs[currentTech].timeline}
                    </span>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-lg">
                      {infiniteTechs[currentTech].impact} Impact
                    </span>
                  </div>
                </div>
                {/* Infinite Energy Effects */}
                {[...Array(60)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-6 mt-16">
            {infiniteTechs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTech(index)}
                className={`w-6 h-6 rounded-full transition-all duration-300 ${
                  index === currentTech
                    ? 'bg-gradient-to-r from-purple-400 to-violet-400 scale-150'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          {/* Call to Action */}
          <div
            className="text-center mt-16"
          >
            <div className="inline-flex space-x-6">
              <a
                href="/pages/TranscendentAI2026"
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                ♾️ Explore Infinite AI →
              </a>
              <a
                href="/pages/InterdimensionalTech2027"
                className="px-10 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105"
              >
                ⚡ Interdimensional Tech →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default InfiniteTechShowcase2030;
