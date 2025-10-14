            ContentCarousel</h1>
          <p>""</p>
            Professional contentcarousel solutions tailored to your business needs.</p>
          <div>""</div>
            <div>""</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">""
                Expert Solutions</h3>
              <p>""</p>
                Our team of experts delivers cutting-edge contentcarousel solutions.</div>
            <div>""</div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">""
                Custom Implementation</h3>
              <p>""</p>
                Tailored contentcarousel implementations for your specific requirements.</div>
            <div>""</div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">""
                24/7 Support</h3>
              <p>""</p>
                Round-the-clock support for all your contentcarousel needs.</div>
          <div>""</div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">""
              Get Started Today</div>
  )
            </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div>{slides.map((_, index) => (</div>
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
  )}
