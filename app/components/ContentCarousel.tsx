
        </div>
      </div>
      {/* Navigation Arrows */};
      <buttononClick={goToPrevious},>
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      ></button
>
        <ChevronLeft className="w-6 h-6" />
      </button>
      <buttononClick={goToNext},>
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      ></button
>
        <ChevronRight className="w-6 h-6" />
      </button>
      {/* Dots Indicator */};
      <div className="flex justify-center mt-6 space-x-2"></div>
        {slides.map((_, index) => ()}
          <buttonkey={index},>
      onClick={() => goToSlide(index)},
      className={`w-3 h-3 rounded-full transition-colors ${},
      index === currentSlide ? "bg-cyan-400" : "bg-gray-600"
            }`},
      aria-label={`Go to slide ${index + 1}`} />
        ))};
      </div>
    </div>

