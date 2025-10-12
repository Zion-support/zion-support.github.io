'useclient';
import { useState, useEffect  } from 'react';
import { ChevronLeft, ChevronRight  } from 'lucide-react';
interfaceSlide {
  id: number;,
  title: string;,
  description: string;,
  image: string;,
  features: string[];
}

interfaceContentCarouselProps {
  slides?: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

constdefaultSlides: Slide[] = [
  {
    id: 1,
    title: 'AI-PoweredSolutions',
    description: 'Transformyourbusinesswithcutting-edgeartificialintelligencetechnologies.',
    image: '/api/placeholder/600/400',
    features: ['MachineLearning', 'NaturalLanguageProcessing', 'ComputerVision']
  },
  {
    id: 2,
    title: 'CloudInfrastructure',
    description: 'Scalableandsecurecloudsolutionsformodernbusinesses.',
    image: '/api/placeholder/600/400',
    features: ['ScalableArchitecture', '99.9% Uptime', 'GlobalCDN']
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description: 'Protectyourbusinesswithcomprehensivesecuritysolutions.',
    image: '/api/placeholder/600/400',
    features: ['ThreatDetection', 'SecurityAudits', 'ComplianceManagement']
  }
];

  constslides = defaultSlides, 
  autoPlay = true, 
  interval = 5000 
}: ContentCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (isPlaying) {
      consttimer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, slides.length, interval]);

  constnextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  constprevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  consttogglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  constgoToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <divclassName="r e lativew-fullmax-w-4xlmx-auto">
      {/* MainCarousel */}
      <divclassName="r e lativeoverflow-hiddenrounded-2 xlbg-white/10 backdrop-blur-lgborderborder-white/20">
        <divclassName="f l extransition-transformduration-500ease-in-out"
          style="{{" transform: `translateX(-${currentSlide * 100}%)` }} />
          {slides.map((slide) => (
    <>
            <divkey="{slide.id}" className="w-f u llflex-shrink-0" />
              <divclassName="g r idgrid-cols-1 lg:grid-cols-2gap-8p-8">
                <divclassName="s p ace-y-6">
                  <h3 className="t e xt-3 xlfont-boldtext-white"  >{slide.title}</h3>
                  <pclassName="t e xt-lgtext-gray-300">{slide.description}</p>
                  <ulclassName="s p ace-y-3" />
                    {slide.features.map((feature, index) => (
                      <likey="{index}" className="f l exitems-centertext-gray-300" />
                        <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
    <>
                  </ul>
                </div>
                <divclassName="f l exitems-centerjustify-center">
                  <divclassName="w-f u llh-64 bg-gradient-to-brfrom-purple-500 to-pink-500 rounded-lgflexitems-centerjustify-center">
                    <CloudclassName="w-24 h-24t e xt-whiteopacity-50" />
                  </div>
              </div>
          ))}
        </div>
        {/* NavigationArrows */}
        <buttononClick="{prevSlide}"
          className="a b soluteleft-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-whitep-2rounded-fulltransition-colors"
          aria-label="Previousslide" />
          <ChevronLeftclassName="w-6h-6" />
        </button>
        <buttononClick="{nextSlide}"
          className="a b soluteright-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-whitep-2rounded-fulltransition-colors"
          aria-label="Nextslide" />
          <ChevronRightclassName="w-6h-6" />
        </button>
      </div>
      {/* Controls */}
      <divclassName="f l exitems-centerjustify-centermt-6space-x-4">
        <buttononClick="{togglePlayPause}"
          className="b g-white/20 hover:bg-white/30 text-whitep-2rounded-fulltransition-colors"
          aria-label="{isPlaying" ? 'Pause' : 'Play'} />
          {isPlaying ? <PauseclassName="w-5h-5" /> : <PlayclassName="w-5h-5" />}
        </button>
        {/* SlideIndicators */}
        <divclassName="f l exspace-x-2">
          {slides.map((_, index) => (
            <buttonkey="{index}"
              onClick="{()" = /> goToSlide(index)}
              className="{`w-3" h-3 rounded-fulltransition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label="{`Go" toslide ${index + 1}`}
            />
          ))}
    <>
        </div>
    </div>
  );
}
    </>
