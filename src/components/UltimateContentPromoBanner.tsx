import React from 'react';
const UltimateContentPromoBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-2xl mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%25239C92AC%22%20fill-opacity%3D%220.1%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
      <div className="relative z-10 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE CONTENT SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our most advanced and innovative content featuring breakthrough technologies that are reshaping our digital future
          </p>
        </div>
        {/* Promotional Carousel */}
        <div className="relative">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4">
                  {promotionalContent[currentPromo].badge}
                </div>
                <h3 className="text-4xl font-bold mb-4">{promotionalContent[currentPromo].title}</h3>
                <p className="text-xl opacity-90 mb-4">{promotionalContent[currentPromo].subtitle}</p>
                <p className="text-lg opacity-80 max-w-3xl mx-auto mb-6">
                  {promotionalContent[currentPromo].description}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {promotionalContent[currentPromo].features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/30"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a
                  href={promotionalContent[currentPromo].link}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                >
                  Explore {promotionalContent[currentPromo].badge} Content →
                </a>
              </div>
            </div>
          </div>
          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPromo
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Quick Access Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {promotionalContent.map((content, index) => (
            <a
              key={index}
              href={content.link}
              className={`group bg-gradient-to-br ${content.gradient} backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-white/30`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 ? '🚀' : index === 1 ? '🌟' : '⚡'}
                </div>
                <h4 className="text-xl font-bold mb-2">{content.title}</h4>
                <p className="text-sm opacity-90 mb-4">{content.subtitle}</p>
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                  {content.badge}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


export default UltimateContentPromoBanner;
