          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Explore our latest breakthroughs and cutting-edge solutions that are shaping the future of technology.</p>
          </p>
        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className="space-y-8 p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${currentItem.gradient} text-white text-sm font-semibold`}>
                        {currentItem.category}
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white font-semibold">{currentItem.rating}</span>
                      <div className="text-gray-400 text-sm">
                        {currentItem.views} views
                    <h3 className="text-4xl font-bold text-white mb-6">
                      {currentItem.title}
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8"></p>
                      {currentItem.description}</p>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
                      >
                        <Play className="w-5 h-5" />
                        Watch Demo
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                      >
                        Learn More
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                  {/* Image */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <h4 className="text-white font-semibold text-lg mb-2">{currentItem.title}</h4>
                          <p className="text-gray-300 text-sm line-clamp-2">{currentItem.description}</p>
              </motion.div>
            </AnimatePresence>
          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-3">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-indigo-400 to-purple-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}</button>
                /></button>
              ))}</button>
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              ></button>
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              ></button>
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-green-500/20 border-green-500/50 text-green-400'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'</button>
                }`}</button>
              ></button>
                <Play className={`w-6 h-6 ${isAutoPlaying ? 'fill-current' : ''}`} />
              </button>
    </section>
  );
};

export default DynamicContentCarousel2025;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
