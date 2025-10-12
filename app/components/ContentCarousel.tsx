import {useState, useEffect} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';

interface Slide {id: number;,
  title: string;,
  description: string;,
  image: string;,
  features: string[];

interface ContentCarouselProps {
  slides?: Slide[];
  autoPlay?: boolean;
  interval?: number;

const defaultSlides: Slide[] = [{
    id: 1,
    title: 'AI-Powered Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence technologies.',
    image: '/api/placeholder/600/400',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']},
  {id: 2,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for modern businesses.',
    image: '/api/placeholder/600/400',
    features: ['Scalable Architecture', '99.9% Uptime', 'Global CDN']},
  {id: 3,
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions.',
    image: '/api/placeholder/600/400',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management']}
];
  const slides = defaultSlides,
  autoPlay = true,
  interval = 5000;
}: ContentCarouselProps) {const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);}, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, slides.length, interval]);

  const nextSlide = () => {setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);};

  const prevSlide = () => {setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);};

  const togglePlayPause = () => {setIsPlaying(!isPlaying);};

    setCurrentSlide(index);
  };
  return (

      {/* Main Carousel */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div;
          className="flex transition-transformduration-500ease-in-out"
          style="{{" transform: `translateX(-${currentSlide * 100}%)` }}   /></div>
          {slides.map((slide) => (
            <div key="{slide.id}" className="w-fullflex-shrink-0"   /></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <h3 className="text-3 xlfont-bold text-white"  >{slide.title}</h3>
                  <p className="text-lgtext-gray-300">{slide.description}</p>
 (

                        {feature}
                      </li>
  ))}

          ))}
        </div>
        {/* Navigation Arrows */}
        <button;
          onClick="{prevSlide}"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2rounded-full transition-colors"
          aria-label="Previous slide"   /></button>
          <ChevronLeft className="w-5h-5ml-2"   /></ChevronLeft>
        </button>
        <button;
          onClick="{nextSlide}"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2rounded-full transition-colors"
          aria-label="Next slide"   /></button>
          <ChevronRight className="w-5h-5ml-2"   /></ChevronRight>
        </button>
      </div>
      {/* Controls */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <button;
          onClick="{togglePlayPause}"
          className="bg-white/20 hover:bg-white/30 text-white p-2rounded-full transition-colors"
          aria-label="{isPlaying" ? 'Pause' : 'Play'}   /></button>
          {isPlaying ? <Pause className="w-5h-5ml-2"   /> : <Play className="w-5h-5ml-2"   /></Pause></Pause>
        </button></Pause>
        {/* Slide Indicators */}

 (

              key="{index}"
              onClick="{()" = /> goToSlide(index)}
              className="{`w-3" h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'}`}
              aria-label="{`Go" to slide ${index + 1}`}
            />
          ))}
        </div>
    </div>
  );
}