'use client';
<<<<<<< HEAD
import React, {useState, useEffect}from 'react';
import {Cloud, Zap, Shield, ChevronLeft, ChevronRight}}from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Cloud, Zap, Shield, Brain } from 'lucide-react';
>>>>>>> origin/main

const ContentCarousel: React.FC = () => {,
  const [currentSlide, setCurrentSlide] = useState(0);

<<<<<<< HEAD
  const slides = const slides = const slides = [
    {
=======
  const slides = [
    
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      id: 1,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
<<<<<<< HEAD
      features: [,
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600',},
    {id: 2,
=======
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 2,
>>>>>>> origin/main
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [,
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security',
        'Cost optimization'
      ],
      icon: Cloud,
      color: 'from-green-500 to-blue-600',},
    {id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [,
        'Process automation',
        'Workflow optimization',
        'Smart decision making',
        'Performance monitoring'
      ],
      icon: Zap,
<<<<<<< HEAD
      color: 'from-orange-500 to-red-600',},
    {id: 4,
=======
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 4,
>>>>>>> origin/main
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [,
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-600';
    };
  ];

<<<<<<< HEAD
  useEffect(() => {];
    const timer = setInterval(() => {;
=======
  useEffect(() => {];];
    const timer = setInterval(() => ;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
>>>>>>> origin/main

    return () => clearInterval(timer);
  }, [slides.length]);

<<<<<<< HEAD
  const nextSlide = () => {setCurrentSlide((prev) => (prev + 1) % slides.length);};

  const prevSlide = () => {setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);};

  return(<div className="relative w-full max-w-6xl mx-auto">)</div>
      <div className="overflow-hidden rounded-2xl">
        <div;
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100,)}%)` }}
        >{slides.map((slide) => (</div>
            <div key={slide.id}className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-br ${slide.color}p-8 md: p-12 text-white`,}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full">
                      <slide.icon className="h-12 w-12" />
                    </div>
                  </div>
                  <h2 className="text-3xl md: text-4xl font-bold text-center mb-4">,</h2>
                    {slide.title} </h2>
                  <p className="text-xl text-center mb-8 text-white/90">{slide.description</p>} </p>
                  <div className="grid grid-cols-1 md: grid-cols-2 gap-4">,</div>
                    {slide.features.map((feature, index) => (
                      <div key={index}className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90">{feature</span>}</span>
                      </div>
                    ))}
                  </div>
=======
  const nextSlide = () => {;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

<<<<<<< HEAD
  return ()
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        ></div>
          {slides.map((slide) => ()
                  {slide.features.map((feature, index) => ()
=======
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      </div></div><div className="relative overflow-hidden rounded-2xl">
        </div></div><div;)
          className="flex transition-transform duration-500 ease-in-out")
          style={ transform: `translateX(-$currentSlide * 100}%)` }
        >
          {slides.map((slide) => (
            </div></div><div key=slide.id} className="w-full flex-shrink-0">
              </div></div><div className={`bg-gradient-to-br $slide.color} p-8 rounded-2xl text-white`}>
                </div></div><div className="flex items-center justify-between mb-6">
                  </div></div><div className="flex items-center space-x-4">
                    </div></div><div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      </div></div><slide.icon className="w-8 h-8" />
                    </div>
                    <div>
                      </div></div><h3 className="text-2xl font-bold">{slide.title}</h3></h3></h3>
                      <p className="text-white/90">{slide.description}</p></p></p>
                    </div>
                  </div>
                </div>
                )
                <div className="grid grid-cols-2 gap-4">)
                  {slide.features.map((feature, index) => (
                    </div></div><div key=index} className="flex items-center space-x-2">
                      </div></div><div className="w-2 h-2 bg-white rounded-full"></div></div></div>
                      <span className="text-sm">{feature}</span></span></span>)
                    </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  ))}
>>>>>>> origin/main
                </div>
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
      </div>
      
      {/* Navigation buttons */} <button;
        onClick={prevSlide}className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover: bg-white/30 text-white p-2 rounded-full transition-all duration-300",
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button;
        onClick={nextSlide}className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover: bg-white/30 text-white p-2 rounded-full transition-all duration-300",
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Dots indicator */} <div className="flex justify-center mt-6 space-x-2">{slides.map((_, index) => (</div>
          <button;
            key={index}onClick={() =>setCurrentSlide(index)</button>}className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
=======
        
<<<<<<< HEAD
        <button onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors" /></button>
          <ChevronLeft className="w-6 h-6" / /></ChevronLeft>
        </button>
        
        <button onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors" /></button>
          <ChevronRight className="w-6 h-6" / /></ChevronRight>
        </button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-6" /></div>
        {slides.map((_, index) => ()
=======
        <button;
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          </button></button><ChevronLeft className="w-6 h-6" />
        </button>
        
        <button;
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          </button></button><ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-6">
        {slides.map((_, index) => (
          </div></div><button;)
            key=index})
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors $
              index === currentSlide ? 'bg-cyan-500' : 'bg-gray-300'
            }`}
>>>>>>> origin/main
          />
        ))}
      </button></button></div>
    </div>
  );
};

export default ContentCarousel;
