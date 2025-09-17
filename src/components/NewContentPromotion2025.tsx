import React from 'react';
const NewContentPromotion2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%2520width%253D%252260%2522%2520height%253D%252260%2522%2520viewBox%253D%25220%25200%252060%252060%2522%2520xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%2520fill%253D%2522none%2522%2520fill-rule%253D%2522evenodd%2522%253E%253Cg%2520fill%253D%2522%25239C92AC%2522%2520fill-opacity%253D%25220.1%2522%253E%253Ccircle%2520cx%253D%252230%2522%2520cy%253D%252230%2522%2520r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Content</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest breakthrough technologies and innovative solutions that are reshaping the future
          </p>
        </div>
        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {promotions.map((promo, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{promo.icon}</div>
                        <h3 className="text-3xl font-bold mb-4">{promo.title}</h3>
                        <p className="text-lg opacity-90 mb-6">{promo.description}</p>
                        <a 
                          href={promo.link}
                          className={`inline-block bg-gradient-to-r ${promo.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6">
                        <h4 className="text-xl font-bold mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span>Cutting-edge Technology</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>Interactive Demos</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span>Real-time Processing</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                            <span>Future-Ready Solutions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Quick Access Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {promotions.map((promo, index) => (
            <a
              key={index}
              href={promo.link}
              className={`bg-gradient-to-r ${promo.color} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
            >
              {promo.icon} {promo.title.split(' ').slice(1).join(' ')}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

export default NewContentPromotion2025;