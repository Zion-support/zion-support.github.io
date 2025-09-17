// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ChevronLeftChevronRightStarArrowRightPlayDownloadUsersTrendingUp

const UltimateContentCarousel2025 = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }5000);
    return () => clearInterval(interval);
  }[]);

  const slides = [
    <divsection
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <divdiv
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Ultimate Content Carousel 2025
          </divdiv>
          
          <divh2
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Revolutionary Technology
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Showcase
            </span>
          </divh2>
          
          <divp
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the most advanced AI and technology solutions that are reshaping 
            industries and transforming businesses worldwide.
          </divp>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
              <divdiv
                key={currentSlide}
                className="relative h-[600px] md:h-[700px]"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-4xl px-8 md:px-12 text-white">
                    <divdiv
                      key={`badge-${currentSlide}`}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-lg text-sm font-medium mb-6"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {slides[currentSlide].subtitle}
                    </divdiv>

                    <divh3
                      key={`title-${currentSlide}`}
                      className="text-4xl md:text-6xl font-bold mb-6"
                    >
                      {slides[currentSlide].title}
                    </divh3>

                    <divp
                      key={`desc-${currentSlide}`}
                      className="text-xl text-gray-200 mb-8 max-w-2xl"
                    >
                      {slides[currentSlide].description}
                    </divp>

                    {/* Features */}
                    <divdiv
                      key={`features-${currentSlide}`}
                      className="flex flex-wrap gap-4 mb-8"
                    >
                      {slides[currentSlide].features.map((featureindex) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </divdiv>

                    {/* Stats and CTA */}
                    <divdiv
                      key={`cta-${currentSlide}`}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                    >
                      <div className="flex items-center">
                        <div className="text-3xl font-bold text-white mr-2">
                          {slides[currentSlide].stats.value}
                        </div>
                        <div className="text-gray-200">
                          {slides[currentSlide].stats.label}
                        </div>
                      </div>
                      
                      <a
                        href={slides[currentSlide].href}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group shadow-lg"
                      >
                        {slides[currentSlide].cta}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </divdiv>
                  </div>
                </div>
              </divdiv>
        {/* Additional Info */}
        <divdiv
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span>50,000+ Active Users</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Play className="w-5 h-5" />
              <span>Interactive Demos Available</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Download className="w-5 h-5" />
              <span>Free Resources & Guides</span>
            </div>
    </divsection>
