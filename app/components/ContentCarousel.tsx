import {useState, useEffect} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
'use client';


interface Slide {
  id: number;,
  title: string;,
  description: string;,
  image: string;,
  features: string[];
}

interface Content Carousel Props {
  slides?: Slide[];
  auto Play?: boolean;
  interval?: number;
}

const default Slides: Slide[] = [
  {
    id: 1,
    title: 'AI- Powered Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence technologies.',
    image: '/api/placeholder/600/400',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
  },
  {
    id: 2,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for modern businesses.',
    image: '/api/placeholder/600/400',
    features: ['Scalable Architecture', '99.9% Uptime', 'Global CDN']
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions.',
    image: '/api/placeholder/600/400',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management']
  }
];

  constslides = default Slides, 
  autoPlay = true, 
  interval = 5000 
}: Content Carousel Props) {
  const [current Slide, set Current Slide] = use State(0);
  const [is Playing, set Is Playing] = use State(autoPlay);

  use Effect(() => {
    if (isPlaying) {
      consttimer = set Interval(() => {
        set Current Slide((prevSlide) => (prevSlide + 1) % slides.length);
      }, interval);
      return () => clear Interval(timer);
    }
  }, [is Playing, slides.length, interval]);

  const nextSlide = () => {
    set Current Slide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    set Current Slide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const toggle PlayPause = () => {
    set Is Playing(!isPlaying);
  };

  const go ToSlide = (index: number) => {
    set Current Slide(index);
  };

  return (
    <div className ="relativew-fullmax-w-4xlmx-auto" />
      {/* MainCarousel */}
      <div className ="relativeoverflow-hiddenrounded-2 xlbg-white/10 backdrop-blur-lgborderborder-white/20" />
        <div className ="flextransition-transformduration-500ease-in-out"
          style="{{" transform: `translateX(-${currentSlide * 100}%)` }} />
          {slides.map((slide) => (
            <divkey ="{slide.id}" className="w-fullflex-shrink-0" />
              <div className ="gridgrid-cols-1 lg:grid-cols-2gap-8p-8" />
                <div className ="space-y-6" />
                  <h3className ="text-3 xlfont-boldtext-white"  >{slide.title}</h3>
                  <pclassName ="text-lgtext-gray-300">{slide.description}</p>
                  <ulclassName ="space-y-3" />
                    {slide.features.map((feature, index) => (
                      <likey ="{index}" className="flexitems-centertext-gray-300" />
                        <Check Circleclass Name="w-5 h-5 text-green-400mr-3flex-shrink-0" / />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className ="flexitems-centerjustify-center" />
                  <div className ="w-full h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flexitems-centerjustify-center" />
                    <Cloudclass Name ="w-24 h-24text-whiteopacity-50" / />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick ="{prev Slide}"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2rounded-fulltransition-colors"
          aria-label="Previous slide" />
          <Chevron Leftclass Name="w-6h-6" / />
        </button>
        <button
          onClick ="{next Slide}"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2rounded-fulltransition-colors"
          aria-label="Next slide" />
          <Chevron Rightclass Name="w-6h-6" / />
        </button>
      </div>

      {/* Controls */}
      <div className ="flex items-center justify-centermt-6space-x-4" />
        <button
          onClick ="{toggle Play Pause}"
          className="bg-white/20 hover:bg-white/30 text-white p-2rounded-fulltransition-colors"
          aria-label="{is Playing" ? 'Pause' : 'Play'} />
          {is Playing ? <Pauseclass Name ="w-5h-5" / /> : <Playclass Name ="w-5h-5" / />}
        </button>

        {/* Slide Indicators */}
        <div className ="flexspace-x-2" />
          {slides.map((_, index) => (
            <buttonkey ="{index}"
              onClick ="{()" = /> go To Slide(index)}
              className="{`w-3" h-3 rounded-full transition-colors ${
                index === current Slide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label="{`Go" to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}