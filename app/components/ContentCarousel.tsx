<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';
interface Slide {}
=======
'use client;

import React, { useState, useEffect } from 'react;

import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from lucide-react;

interface Slide {
>>>>>>> origin/main
  icon: React.ComponentType<any>;

  title: string;

  description: string;

  features: string[];
<<<<<<< HEAD
  stats?: {}
=======

  stats?: {
>>>>>>> origin/main
    value: string;

    label: string;

  }[];

}

const ContentCarousel: React.FC = () => {}
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = []
    {}
      icon: Brain,
<<<<<<< HEAD
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: []
        { value: '95%', label: 'Accuracy Rate' },
        { value: '10x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }
=======
      title: 'AI-Powered Solutions,
      description: 'Advanced AI technology to transform your business operations and improve efficiency,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics],
      stats: [
        { value: '95%', label: 'Accuracy Rate },
        { value: '10x', label: 'Faster Processing },
        { value: '24/7', label: 'Automation }

>>>>>>> origin/main
      ]
    },
    {}
      icon: Zap,
<<<<<<< HEAD
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      stats: []
        { value: '99.9%', label: 'Uptime' },
        { value: '< 100ms', label: 'Response Time' },
        { value: '10M+', label: 'Requests/Day' }
=======
      title: 'High Performance,
      description: 'Lightning-fast processing and real-time analytics for optimal results,
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency],
      stats: [
        { value: '99.9%', label: 'Uptime },
        { value: '< 100ms', label: 'Response Time },
        { value: '10M+', label: 'Requests/Day }

>>>>>>> origin/main
      ]
    },
    {}
      icon: Shield,
<<<<<<< HEAD
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring'],
      stats: []
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Security Breaches' }
=======
      title: 'Enterprise Security,
      description: 'Bank-level security with encryption and compliance standards,
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring],
      stats: [
        { value: '256-bit', label: 'Encryption },
        { value: 'SOC 2', label: 'Compliance },
        { value: 'Zero', label: 'Security Breaches }

>>>>>>> origin/main
      ]
    },
    {}
      icon: Globe,
<<<<<<< HEAD
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
      stats: []
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Global Support' }
=======
      title: 'Global Reach,
      description: 'Worldwide deployment and support for international businesses,
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support],
      stats: [
        { value: '50+', label: 'Countries },
        { value: '15+', label: 'Languages },
        { value: '24/7', label: 'Global Support }

>>>>>>> origin/main
      ]
    }

  ];
<<<<<<< HEAD
  const nextSlide = () => {}
=======

  const nextSlide = () => {;;

>>>>>>> origin/main
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  };
<<<<<<< HEAD
  const prevSlide = () => {}
=======

  const prevSlide = () => {;;

>>>>>>> origin/main
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  };
<<<<<<< HEAD
  useEffect(() => {}
    const timer = "setInterval(nextSlide, 5000);"
=======

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);;

>>>>>>> origin/main
    return () => clearInterval(timer);

  }, []);
<<<<<<< HEAD
  const currentSlideData="slides[currentSlide];"
  return (
    <div className=""bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>"
      <div className=""max-w-7xl mx-auto"></div>"
        {/* Header */}
        <div className=""text-center mb-16"></div>"
          <h2 className=""text-3xl md:text-4xl font-bold text-white mb-6"></h2>"
            Discover Our <span className=""text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>"
          </h2>
          <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
=======

  const currentSlideData = slides[currentSlide];;

  return (

    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">      <div className="max-w-7xl mx-auto>
        {/* Header */}

        <div className="text-center mb-16>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6>
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto>
>>>>>>> origin/main
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>
        {/* Carousel Container */}
<<<<<<< HEAD
        <div className=""relative"></div>"
          <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 overflow-hidden"></div>"
            <div className=""grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>"
              {/* Content */}
              <div className=""space-y-8"></div>"
                <div className=""flex items-center gap-4"></div>"
                  <div className=""w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center"></div>"
                    <currentSlideData.icon className=""w-8 h-8 text-white" /></currentSlideData>"
                  </div>
                  <div></div>
                    <h3 className=""text-2xl md:text-3xl font-bold text-white mb-2"></h3>"
=======

        <div className="relative>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 overflow-hidden>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center>
              {/* Content */}

              <div className="space-y-8>
                <div className="flex items-center gap-4>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center>
                    <currentSlideData.icon className="w-8 h-8 text-white />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2>
>>>>>>> origin/main
                      {currentSlideData.title}

                    </h3>
<<<<<<< HEAD
                    <p className=""text-gray-300 text-lg"></p>"
=======
                    <p className="text-gray-300 text-lg>
>>>>>>> origin/main
                      {currentSlideData.description}

                    </p>
                  </div>
                </div>
                {/* Features */}
<<<<<<< HEAD
                <div className=""space-y-4"></div>"
                  <h4 className=""text-lg font-semibold text-white mb-4">Key Features:</h4>"
                  <div className=""grid grid-cols-1 sm:grid-cols-2 gap-3"></div>"
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className=""flex items-center space-x-3"></div>"
                        <CheckCircle className=""w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircle>"
                        <span className=""text-gray-300">{feature}</span>"
=======

                <div className="space-y-4>
                  <h4 className="text-lg font-semibold text-white mb-4>Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3>
                    {currentSlideData.features.map((feature, index) => (

                      <div key={index} className="flex items-center space-x-3>
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 />
                        <span className="text-gray-300>{feature}</span>
>>>>>>> origin/main
                      </div>
                    ))}

                  </div>
                </div>
                {/* Stats */}

                {currentSlideData.stats && (
<<<<<<< HEAD
                  <div className=""grid grid-cols-3 gap-6"></div>"
                    {currentSlideData.stats.map((stat, index) => (
                      <div key={index} className=""text-center"></div>"
                        <div className=""text-2xl font-bold text-white mb-1">{stat.value}</div>"
                        <div className=""text-gray-400 text-sm">{stat.label}</div>"
=======

                  <div className="grid grid-cols-3 gap-6>
                    {currentSlideData.stats.map((stat, index) => (

                      <div key={index} className="text-center>
                        <div className="text-2xl font-bold text-white mb-1>{stat.value}</div>
                        <div className="text-gray-400 text-sm>{stat.label}</div>
>>>>>>> origin/main
                      </div>
                    ))}

                  </div>
                )}

                {/* CTA */}
<<<<<<< HEAD
                <div className=""flex flex-col sm:flex-row gap-4"></div>"
                  <button className=""inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>"
                    <Zap className=""w-5 h-5" /></Zap>"
                    Get Started;
                  </button>
                  <button className=""inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>"
                    <ArrowRight className=""w-5 h-5" /></ArrowRight>"
                    Learn More;
                  </button>
                </div>
=======

                <div className="flex flex-col sm:flex-row gap-4>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105>
                    <Zap className="w-5 h-5 />
                    Get Started
                  </button>
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300>
                    <ArrowRight className="w-5 h-5 />
                    Learn More
                  </button>                </div>
>>>>>>> origin/main
              </div>
              {/* Visual Element */}
<<<<<<< HEAD
              <div className=""relative"></div>"
                <div className=""aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center"></div>"
                  <div className=""text-center"></div>"
                    <div className=""w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"></div>"
                      <currentSlideData.icon className=""w-16 h-16 text-white" /></currentSlideData>"
                    </div>
                    <div className=""text-4xl font-bold text-white mb-2"></div>"
=======

              <div className="relative>
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center>
                  <div className="text-center>
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center>
                      <currentSlideData.icon className="w-16 h-16 text-white />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2>
>>>>>>> origin/main
                      {currentSlideData.title}

                    </div>
<<<<<<< HEAD
                    <div className=""text-gray-300"></div>"
=======
                    <div className="text-gray-300>
>>>>>>> origin/main
                      Slide {currentSlide + 1} of {slides.length}

                    </div>
                  </div>
                </div>
<<<<<<< HEAD
              </div>
    <div className=""py-16 px-4"></div>"
      <div className=""max-w-7xl mx-auto"></div>"
        <div className=""text-center mb-12"></div>"
          <h2 className=""text-4xl font-bold text-white mb-4"></h2>"
            Why Choose Zion Tech Group?
          </h2>
          <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
            Discover the key features and benefits that make us the preferred choice for AI and IT solutions.
          </p>
        </div>
        {/* Carousel */}
        <div className=""relative"></div>"
          <div className=""bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden"></div>"
            <div className=""flex items-center justify-between mb-8"></div>"
              <div className=""flex items-center gap-4"></div>"
                <div className=""w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center"></div>"
                  {React.createElement(slides[currentSlide].icon, { className: "w-8 h-8 text-slate-900" })}
                </div>
                <div></div>
                  <h3 className=""text-2xl font-bold text-white mb-2"></h3>"
                    {slides[currentSlide].title}
                  </h3>
                  <p className=""text-gray-300"></p>"
                    {slides[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>
            <div className=""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>"
              {slides[currentSlide].features.map((feature, index) => (
                <div key={index} className=""flex items-center gap-3"></div>"
                  <CheckCircle className=""w-5 h-5 text-cyan-400 flex-shrink-0" /></CheckCircle>"
                  <span className=""text-gray-300">{feature}</span>"
                </div>
              ))}
            </div>
=======
              </div>            </div>
>>>>>>> origin/main
          </div>
          {/* Navigation Buttons */}
<<<<<<< HEAD
          <button onClick = "{prevSlide}></button>"
            className=""absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20">"
            <ChevronLeft className=""w-6 h-6" /></ChevronLeft>"
          </button>
          <button onClick = "{nextSlide}></button>"
            className=""absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20">"
            <ChevronRight className=""w-6 h-6" /></ChevronRight>"
=======

          <button
            onClick={prevSlide}

            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20
          >
            <ChevronLeft className="w-6 h-6 />
          </button>
          <button
            onClick={nextSlide}

            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20
          >
            <ChevronRight className="w-6 h-6 />
>>>>>>> origin/main
          </button>
          {/* Dots Indicator */}
<<<<<<< HEAD
          <div className=""flex justify-center mt-8 space-x-2"></div>"
            {slides.map((_, index) => (
              <button key = "{index}></button>"
                onClick={() => setCurrentSlide(index)}
                className="{`w-3 h-3 rounded-full transition-colors duration-200 ${}"
                  index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
                }`}
=======

          <div className="flex justify-center mt-8 space-x-2>
            {slides.map((_, index) => (

              <button
                key={index}

                onClick={() => setCurrentSlide(index)}

                className={w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-purple-400 : bg-white/30
                }}

>>>>>>> origin/main
              />
            ))}

          </div>
        </div>
<<<<<<< HEAD
        {/* Additional Info */}
        <div className=""mt-16 text-center"></div>"
          <div className=""grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"></div>"
            <div className=""flex items-center justify-center gap-3 text-white"></div>"
              <Star className=""w-6 h-6 text-yellow-400" /></Star>"
              <div className=""text-left"></div>"
                <div className=""text-2xl font-bold">4.9/5</div>"
                <div className=""text-gray-400 text-sm">Customer Rating</div>"
              </div>
            </div>
            <div className=""flex items-center justify-center gap-3 text-white"></div>"
              <Users className=""w-6 h-6 text-blue-400" /></Users>"
              <div className=""text-left"></div>"
                <div className=""text-2xl font-bold">10,000+</div>"
                <div className=""text-gray-400 text-sm">Happy Customers</div>"
              </div>
            </div>
            <div className=""flex items-center justify-center gap-3 text-white"></div>"
              <TrendingUp className=""w-6 h-6 text-green-400" /></TrendingUp>"
              <div className=""text-left"></div>"
                <div className=""text-2xl font-bold">99.9%</div>"
                <div className=""text-gray-400 text-sm">Uptime</div>"
              </div>
            </div>
        {/* Benefits Section */}
        <div className=""mt-16"></div>"
          <h3 className=""text-2xl font-bold text-white mb-8 text-center"></h3>"
            Key Benefits;
          </h3>
          <div className=""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>"
            {benefits.map((benefit, index) => (
              <div key={index} className=""flex items-center gap-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-4"></div>"
                <CheckCircle className=""w-5 h-5 text-cyan-400 flex-shrink-0" /></CheckCircle>"
                <span className=""text-gray-300">{benefit}</span>"
              </div>
            ))}
          </div>
=======

        {/* Additional Info */}

        <div className="mt-16 text-center>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto>
            <div className="flex items-center justify-center gap-3 text-white>
              <Star className="w-6 h-6 text-yellow-400 />
              <div className="text-left>
                <div className="text-2xl font-bold>4.9/5</div>
                <div className="text-gray-400 text-sm>Customer Rating</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white>
              <Users className="w-6 h-6 text-blue-400 />
              <div className="text-left>
                <div className="text-2xl font-bold>10,000+</div>
                <div className="text-gray-400 text-sm>Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white>
              <TrendingUp className="w-6 h-6 text-green-400 />
              <div className="text-left>
                <div className="text-2xl font-bold>99.9%</div>
                <div className="text-gray-400 text-sm>Uptime</div>
              </div>
            </div>          </div>
>>>>>>> origin/main
        </div>
      </div>
    </div>
  );

};
<<<<<<< HEAD
export default ContentCarousel;
=======

export default ContentCarousel;
>>>>>>> origin/main
