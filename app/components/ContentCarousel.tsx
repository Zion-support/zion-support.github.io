'use client';





const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,


        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Zap,

      color: 'from-purple-500 to-pink-600'


    },
    {
      id: 2,
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [,
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security',
        'Cost optimization'
      ],
      icon: Cloud,

      color: 'from-green-500 to-blue-600'


    },
    {
      id: 3,

      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [,
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,





  useEffect(() => {const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);}, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);


        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">


                    </div>
                    <p className="text-lg md:text-xl text-white/90 mb-6">
                      {slide.description}
                    </p>
                    <ul className="space-y-2">
                      {slide.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>



                </div>
              </div>
            </div>
          ))}
        </div>

        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}


        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}

        >
          <ChevronRight className="w-6 h-6" />
        </button>
        


          {slides.map((_, index) => (
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
    </div>
  );
};

export default ContentCarousel;