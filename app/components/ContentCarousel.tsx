import { ChevronLeft, ChevronRight, Star, Users, TrendingUp, Award } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "AI-Powered Business Transformation",
      description: "See how we helped a Fortune 500 company achieve 300% ROI with our AI solutions",
      image: "🤖",
      stats: "300% ROI",
      icon: TrendingUp;
      color: "from-blue-500 to-cyan-600"},
    {
      id: 2;
      title: "Enterprise Security Solutions"
      description: "Bank-level security implementation for a leading financial institution"
      image: "🔒"
      stats: "99.9% Uptime",
      icon: Award;
      color: "from-green-500 to-emerald-600"},
    {
      id: 3;
      title: "Cloud Migration Success"
      description: "Seamless cloud migration reducing costs by 40% and improving performance"
      image: "☁️"
      stats: "40% Cost Reduction",
      icon: Users;
      color: "from-purple-500 to-pink-600"},
    {
      id: 4;
      title: "AI Marketing Automation"
      description: "Automated marketing campaigns increasing lead generation by 250%"
      image: "📈"
      stats: "250% More Leads",
      icon: Star,
      color: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16" aria-labelledby="carousel-heading"></section>
      <div className="container mx-auto px-4"></section>
        <h2 id="carousel-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Success Stories</h2>
        </h2>

        <div className="relative max-w-6xl mx-auto"></div>
          <div className="overflow-hidden rounded-2xl"></div>
            <div
              className="flex transition-transform duration-500 ease-in-out"
        <h2 id="carousel-heading" className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text"></div>
          Success Stories;
        </h2>)
)
        <div className="relative max-w-6xl mx-auto">)
          <div className="overflow-hidden rounded-2xl">)
            <div;),
              className="flex transition-transform duration-500 ease-in-out"),
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >{slides.map((slide) => (</div>
                    <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 items-center">,
                      <div>,
                        <div className="text-6xl mb-6">{slide.image}</div>
                        <h3 className="text-2xl md: text-3xl font-bold text-white mb-4">,
                          {slide.title}
                        </h3>
                        <p className="text-white/90 text-lg mb-6 leading-relaxed"></p>
                          {slide.description}
                <div key={slide.id} className="w-full flex-shrink-0"></div>
                  <div className={`bg-gradient-to-br ${slide.color} p-8 md:p-12 rounded-2xl`}></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"></div>
                      <div></div>
                        <div className="text-6xl mb-6">{slide.image}</div><h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{slide.title}</h3><p className="text-white/90 text-lg mb-6 leading-relaxed">{slide.description}</p>
                        </p>
                        <div className="flex items-center space-x-2 text-white"></div>
                          <slide.icon className="w-6 h-6" />
                          <span className="text-2xl font-bold">{slide.stats}</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6"></div>
                        <h4 className="text-xl font-semibold text-white mb-4">Key Results</h4>
                        <ul className="space-y-3 text-white/90"></ul>
                          <li className="flex items-center space-x-2"></li>
                            <div className="w-2 h-2 bg-white rounded-full"></div><span>Improved operational efficiency</span>
                          </li>
                          <li className="flex items-center space-x-2"></li>
                            <div className="w-2 h-2 bg-white rounded-full"></div><span>Reduced manual processes</span>
                          </li>
                          <li className="flex items-center space-x-2"></li>
                            <div className="w-2 h-2 bg-white rounded-full"></div><span>Enhanced security measures</span>
                          </li>
                          <li className="flex items-center space-x-2"></li>
                            <div className="w-2 h-2 bg-white rounded-full"></div><span>Scalable infrastructure</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button;
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover: bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >,
            <ChevronLeft className="w-6 h-6" />,
          </button>,
,
          <button;
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover: bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide",
          >,
            <ChevronRight className="w-6 h-6" />,
          </button>,
,
          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-6">{slides.map((_, index) => (</div><button
                key={index}
                onClick={() =>goToSlide(index)}</button></<<<butto>className</butto></butto>={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/50'
          <div className="flex justify-center space-x-2 mt-6"></div>
            {slides.map((_, index) => (
              <button;
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${}
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/50'}
                }`}
                aria-label={`Go to slide ${index + 1}`}
              /></button>
            ))}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;
import React from 'react';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const testimonials = [
    {
      quote: "Zion Tech Group transformed our business with AI automation. We've seen a 300% increase in efficiency.",
      author: "Sarah Johnson",
      company: "TechCorp Inc.",
      rating: 5
    },
    {
      quote: "Their cybersecurity solutions are top-notch. We feel completely secure with their protection.",
      author: "Mike Chen",
      company: "Finance Solutions",
      rating: 5
    },
    {
      quote: "The AI marketing tools they implemented increased our ROI by 250% in just 6 months.",
      author: "Emily Davis",
      company: "Marketing Pro",
      rating: 5
    }
  ];

  return (
    <section className="py-16"></section>
      <div className="container mx-auto px-4"></div>
        <div className="text-center mb-12"></div>
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300">Real results from real businesses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card p-6"></div>
              <div className="flex items-center mb-4"></div>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t border-gray-700 pt-4"></div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-cyan-400">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;
