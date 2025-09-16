import React from 'react';
const RevolutionaryContentShowcase= () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced and revolutionary content featuring cutting-edge technologies 
            that are reshaping the future of human-machine interaction.
          </p>
        </div>
        {/* Content Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
            {contentItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveContent(index)}
                className={`px-6 py-3 rounded-md transition-all duration-300 ${
                  activeContent === index
                    ? 'bg-white text-gray-900'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{item.icon}</span>
                {item.title}
              </button>
            ))}
          </div>
        </div>
        {/* Active Content Display */}
        <div
          key={activeContent}
          className={`bg-gradient-to-br ${contentItems[activeContent].gradient} rounded-2xl p-12`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{contentItems[activeContent].icon}</div>
              <h3 className="text-4xl font-bold mb-6">{contentItems[activeContent].title}</h3>
              <p className="text-xl opacity-90 mb-8">{contentItems[activeContent].description}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {contentItems[activeContent].features.map((feature, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={contentItems[activeContent].link}
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
              >
                Explore {contentItems[activeContent].title} →
              </a>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-4">Key Highlights</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Revolutionary breakthrough technology</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Industry-leading performance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Proven real-world applications</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Expert-backed research</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RevolutionaryContentShowcase;