
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX const EnhancedHero = () => {}
'
''
''
''''

import { motion, AnimatePresence } from 'framer - motion';

    const [currentSlide, setCurrentSlide] = useState (0) ;
    const [isPlaying, setIsPlaying] = useState (true) ;
    const [isMuted, setIsMuted] = useState (false) ;
    const [isAutoPlaying, setIsAutoPlaying] = useState (true) ;
    const heroSlides = []

            icon: '🚀''' }, {}""
''''
            id: 2','''

            icon: '🤖''' }, {}""
''''
            id: 3','''

            icon: '☁️''' ]
    useEffect ( () => {}
        if (!isAutoPlaying) return;
        const interval = setInterval ( () => {}
            if (isPlaying) {}
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        }, 5000);
        return () => clearInterval(interval)}, [isPlaying, isAutoPlaying, heroSlides.length]);
    const nextSlide = () => {}
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length) };
    const prevSlide = () => {}
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length) };
    const goToSlide = (index) => {}
        setCurrentSlide(index)};
    const toggleAutoPlay = () => {}
        setIsAutoPlaying(!isAutoPlaying) 

      {/* Background Video/Image Placeholder */}''''
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'>''''
        <div className='absolute inset-0 bg-black/50'/" >"
      </div>""
''''
      {/* Hero Content */}''''
      <div className='relative z-10 flex items-center justify-center h-full px-4 sm: px-6 lg:px-8'>''''
        <div className='text-center max-w-6xl mx-auto'>''''
          <AnimatePresence mode='wait'>
            <motion.div key={currentSlide} initial = {}, { opacity: 0, y: 20 }} animate = {}, { opacity: 1, y: 0 {heroSlides[currentSlide].icon}
              </motion.div>

              {/* Title */}
              <motion.h1 initial = {}, { opacity: 0, y: 30 }} animate = {}, { opacity: 1, y: 0 {heroSlides[currentSlide].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2 initial = {}, { opacity: 0, y: 30 }} animate = {}, { opacity: 1, y: 0 {heroSlides[currentSlide].subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p initial = {}, { opacity: 0, y: 30 }} animate = {}, { opacity: 1, y: 0 {heroSlides[currentSlide].description}
              </motion.p>

              {/* CTA Button */}
              <motion.div initial = {}, { opacity: 0, y: 30 }} animate = {}, { opacity: 1, y: 0,

                    →
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
"""
      {/* Navigation Controls */}""""
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">""""
        <div className="flex items-center space-x-4">"""
          {/* Play/Pause Button */}""""
          <button onClick={togglePlayPause} className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300" aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}>""""
            {isPlaying ? <Pause className="w-5 h-5 text-white"/> : <Play className="w-5 h-5 text-white"/>}
          </button>
"""
          {/* Mute Button */}""""
          <button onClick={toggleMute} className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300" aria-label={isMuted ? "Unmute" : "Mute"}>""""
            {isMuted ? <VolumeX className="w-5 h-5 text-white"/> : <Volume2 className="w-5 h-5 text-white"/>}
          </button>

          {/* Auto-play Toggle */}"""
          <button onClick={toggleAutoPlay} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isAutoPlaying""`
            ? "bg-green-500/20 text-green-300 border border-green-500/30""`"`
            : "bg-white/10 text-white border border-white/20"}`}>""""
            Auto-play {isAutoPlaying ? "ON" : "OFF"}
          </button>
        </div>
      </div>
"""
      {/* Slide Indicators */}""""
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">""`
        <div className="flex space-x-2">`"`
          {heroSlides.map((_, index) => (<button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide""`
                ? "bg-white scale-125""`"`
                : "bg-white/30 hover:bg-white/50"}`} aria-label={`Go to slide ${index + 1}`}/>))}
        </div>
      </div>
"""
      {/* Navigation Arrows */}""""
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300" aria-label="Previous slide">""""
        <ChevronLeft className="w-6 h-6 text-white"/>
      </button>"""
""""
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300" aria-label="Next slide">""""
        <ChevronRight className="w-6 h-6 text-white"/>
      </button>
"""
      {/* Keyboard Navigation Instructions */}""""
      <div className="absolute top-4 right-4 z-20">""""
        <div className="text-xs text-white/60 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
          <p>Use ← → keys or click to navigate</p>
        </div>
      </div>
    </div>)}
export default EnhancedHero }}}}












