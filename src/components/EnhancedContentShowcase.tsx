
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Interactive Showcase Carousel */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Revolutionary Technology Showcase</h2>
          <p className="text-xl text-purple-200">Interactive exploration of breakthrough technologies</p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Showcase Display */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ENHANCED CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our comprehensive collection of cutting-edge technology content featuring 
            AI transformation, quantum computing, neural interfaces, and synthetic intelligence.
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Showcase Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the cutting-edge technologies and innovations that are shaping the future of humanity.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{showcaseItems[currentSlide].icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {showcaseItems[currentSlide].title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                
                <div className="relative">
                  <div className={`w-full h-64 bg-gradient-to-r ${showcaseItems[currentSlide].gradient} rounded-xl flex items-center justify-center`}>
                    <div className="text-8xl opacity-50">{showcaseItems[currentSlide].icon}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
            {/* Content Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentCategories[activeCategory].content.map((item, index) => (
                <div
                  key={index}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{item.image}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Breakthrough' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
                        item.status === 'Revolutionary' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                        item.status === 'Advanced' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                        item.status === 'Experimental' ? 'bg-gradient-to-r from-orange-600 to-red-600' :
                        'bg-gradient-to-r from-gray-600 to-gray-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-300 text-xs rounded-full border border-purple-400/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Impact:</h4>
                      <p className="text-indigo-300 text-sm italic">{item.impact}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <span className="mr-1">👁️</span>
                          {item.views}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">❤️</span>
                          {item.likes}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      className={`w-full bg-gradient-to-r ${contentCategories[activeCategory].color} py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Explore Content →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-12 text-center mt-20"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of users discovering the most revolutionary content in technology history. 
            Be part of the future that's being created today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Create Account
            </button>
          </div>
        </div>
