import React from 'react';

const EnhancedContentCarousel2036: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedContentCarousel2036</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%2520width%253D%252260%2522%2520height%253D%252260%2522%2520viewBox%253D%25220%25200%252060%252060%2522%2520xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%2520fill%253D%2522none%2522%2520fill-rule%253D%2522evenodd%2522%253E%253Cg%2520fill%253D%2522%25239C92AC%2522%2520fill-opacity%253D%25220.1%2522%253E%253Ccircle%2520cx%253D%252230%2522%2520cy%253D%252230%2522%2520r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ENHANCED CONTENT CAROUSEL • JANUARY 2036
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore the most advanced technologies that will define the future of humanity
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Slide Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 min-h-[500px] flex items-center">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="text-8xl mb-6 animate-pulse">
                    {slides[currentSlide].image}
                  </div>
                  <h3 className="text-4xl font-bold mb-4">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-xl font-semibold mb-4 text-purple-300">
                    {slides[currentSlide].subtitle}
                  </p>
                  <p className="text-lg opacity-90 mb-6">
                    {slides[currentSlide].description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {slides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={slides[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Technology →
                  </a>
                </div>

                {/* Visual Element */}
                <div className="hidden md:block">
                  <div className={`bg-gradient-to-br ${slides[currentSlide].gradient} rounded-2xl p-8 text-center`}>
                    <div className="text-9xl mb-4 animate-bounce">
                      {slides[currentSlide].image}
                    </div>
                    <div className="text-2xl font-bold mb-2">
                      {slides[currentSlide].title}
                    </div>
                    <div className="text-lg opacity-90">
                      {slides[currentSlide].subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
              >
                →
              </button>
            </div>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-500/30 text-green-300' 
                  : 'bg-red-500/30 text-red-300'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {slides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center ${
                index === currentSlide ? 'ring-2 ring-white/50' : ''
              }`}
            >
              <div className="text-4xl mb-3">{slide.image}</div>
              <h4 className="text-lg font-bold mb-2">{slide.title}</h4>
              <p className="text-sm opacity-90">{slide.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default EnhancedContentCarousel2036;