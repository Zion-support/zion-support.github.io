'use client';
import { useState, useEffect} from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
}
import { ChevronLeft, ChevronRight, Star, Users, TrendingUp, Award } from 'lucide-react';
import { ChevronLeft, ChevronRight, Play, Pause, Zap, Shield, Cloud, BarChart3, Users, Target, CheckCircle } from 'lucide-react';

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
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
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
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge AI and IT solutions that drive real business results
          </p>
        </div></div></div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100,}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 bg-white/5 backdrop-blur-lg p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
                      <slide.icon className="w-10 h-10 text-white" />
                    </div></div></div></div></div></div>
                    <h3 className="text-3xl font-bold text-white mb-6">{slide.title}</h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>
      <div className="max-w-7xl mx-auto">{/* Header */}</div>
        <div className="text-center mb-16"></div>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Explore our comprehensive suite of AI and IT solutions designed to transform your business.</p>p>
        </div>
        {/* Carousel Container */},
        {/* Carousel */}
        <div className="relative"></div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md: p-12 overflow-hidden"></div>
            <div className="flex items-center justify-between mb-8"></div>
              <div className="flex items-center gap-4"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center"></div>
                  <currentSlideData.icon className="w-8 h-8 text-slate-900" />
                </div>
                {/* Features */}
                <div className="space-y-4"></div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features: </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{currentSlideData.features.map((feature, index) => (</div>
                      <div key={index} className="flex items-center space-x-3"></div>
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Stats */}
                {currentSlideData.stats && (
                  <div className="grid grid-cols-3 gap-6">{currentSlideData.stats.map((stat, index) => (</div>
                      <div key={index} className="text-center"></div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                {/* CTA */}
                <div className="flex flex-col sm: flex-row gap-4"></div>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
                    <Zap className="w-5 h-5" />
                    Get Started
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover: bg-white/20 transition-all duration-300"></button>
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                </div>,
              </div>,
              {/* Visual Element */}
              <div className="relative"></div>
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center"></div>
                  <div className="text-center"></div>
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"></div>
                      <currentSlideData.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{currentSlideData.title}</div>div>
                    <div className="text-gray-300">Slide {currentSlide + 1} of {slides.length}</div>div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{currentSlideData.features.map((feature, index) => (</div>
                <div key={index} className="flex items-center gap-3"></div>
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            {/* Stats */}
            {currentSlideData.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700">{currentSlideData.stats.map((stat, index) => (</div>
                  <div key={index} className="text-center"></div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"></button>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"></button>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
{/* Slide Indicators */}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          ></button>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">{slides.map((_, index) => (</div>
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}

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

    <div className="relative w-full max-w-4xlmx-auto">

        <button
          onClick={togglePlayPause}
          className="bg-white/20 hover:bg-white/30 text-white p-2rounded-fulltransition-colors"
          aria-label="{isPlaying" ? 'Pause' : 'Play'} />
          {isPlaying ? <Pause className="w-5h-5" /> : <Play className="w-5h-5" />}
        </button>

        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key="{index}"
              onClick="{()" = /> goToSlide(index)}
              className="{`w-3" h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'}`}
              aria-label="{`Go" to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Additional Info */}
        <div className="mt-16 text-center"></div>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
            <div className="flex items-center justify-center gap-3 text-white"></div>
              <Star className="w-6 h-6 text-yellow-400" />
              <div className="text-left"></div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</div>
import React from 'react';

const ContentCarousel: React.FC = () => {
  return (
    <div className="contentcarousel">
      <h2>ContentCarousel</h2>
      <p>ContentCarousel component.</p>
import React from 'react';

const ContentCarousel: React.FC<ContentCarouselProps> = () => {
  return (
    <div className="contentcarousel">
      <h2>ContentCarousel</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default ContentCarousel;
export default ContentCarousel;
