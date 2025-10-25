'use client';
<<<<<<< HEAD
import { { { React  useState useEffect  from 'react'
import  ArrowRight X Brain BarChart Target TrendingUp Cloud Shield Globe Database Users Settings           } from 'lucide-react'

interface Slide id number title string description string features string icon ReactReactNode color string const ContentCarousel ReactFC = 2 => 
3 features     features       color "from-red-500 to-pink-500"
=======

import React, { useState, useEffect } from 'react';

interface ContentCarouselProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    image?: string;
    link?: string;
  }>;
  autoPlay?: boolean;
  interval?: number;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  if (!items || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, _index) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="bg-white rounded-lg shadow-lg p-6">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More →
                  </a>
                )}
=======
import { ChevronLeft, ChevronRight, Zap, Shield, Brain, Cloud } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  stats?: {
    value: string;
    label: string;
  }[];
}
>>>>>>> origin/main

const ContentCarousel: React.FC = () => {;
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
<<<<<<< HEAD
    title: "AI-Powered Analytics",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "Automated reporting"
    ],
    icon: <BarChart className="h-12 w-12" />,
    color: "from-blue-500 to-cyan-500"
  },
=======
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
    },
>>>>>>> origin/main
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security',
        'Cost optimization'
      ],
      icon: Cloud,
      color: 'from-green-500 to-blue-600',
    },
    {
      id: 3,
<<<<<<< HEAD
      title: "Cybersecurity Solutions",
      description: "Protect your business with our comprehensive cybersecurity services.",
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Incident response",
        "Security training"
      ],
      icon: <Shield className="h-12 w-12" />,
      color: "from-red-500 to-pink-500"
=======
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Smart decision making',
        'Performance monitoring'
      ],
      icon: Brain,
      color: 'from-orange-500 to-red-600',
>>>>>>> origin/main
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
<<<<<<< HEAD
    <div>


      <Helmet></Helmet>
        <title>ContentCarousel</title>
        <meta name="description" content="Advanced ContentCarousel solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ContentCarousel, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              ContentCarousel
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ContentCarousel solution for modern businesses.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>,
        </section>,
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
        </div>
        <div className="relative"></div>
<div className="overflow-hidden rounded-xl"></div>
            <div
              className="flex transition-transform duration-500 ease-in-out&quot
              style={{ transform: `translateX(-${currentSlide * 100}%)`}
            >{slides.map((slide, index) => (</div>
<div key={index} className="w-full flex-shrink-0"></div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8"></div>
                    <div className="text-center mb-8"></div>
                      <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                        <slide.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-purple-100 text-lg max-w-2xl mx-auto">{slide.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{slide.features.map((feature, featureIndex) => (</div>
                        <div key={featureIndex} className="flex items-center"></div>
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-purple-100">{feature}</span>
                        </div>
                      </div>
                      <div className="flex-1"></div>
                        <h3 className="text-2xl font-boldtext-gray-900mb-4">{slide.title}</h3>
                        <p className="text-gray-600mb-6">
            {slide.description}
          </p>
                        <ul className="space-y-2"></ul>
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flexitems-centertext-gray-700"></li>
                              <CheckCircle className="h-5 w-5text-green-500mr-2" /></CheckCircle>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
=======
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-br ${slide.color} p-8 md:p-12 text-white`}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full">
                      <slide.icon className="h-12 w-12" />
>>>>>>> origin/main
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-center mb-8 text-white/90">
                    {slide.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {slide.features.map((feature, _index) => (
                      <div key={_index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
<<<<<<< HEAD
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
        <div className=quotrelative max-w-7xl mx-auto text-centerquot> </div></div>
          <h1 className=quottext-5xl md text-7xl font-bold text-white mb-6 leading-tightquot>
              ContentCarousel</h1>
            <pAdvanced ContentCarousel solution for modern businesses</p>
            </p><div className=quotflex flex-col sm flex-row gap-4 justify-centerquot>
              </div></div><button className=quotbg-emerald-600 hover bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-centerquot>
                Get Started  <ArrowRight className=quotml-2 h-5 w-5quot />
              </button>
              <button className=quotborder border-emerald-400 text-emerald-400 hover bg-emerald-400 hovertext-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200quot>
                Learn More</button>
            </div>
          </div>
        </section>
        / Features Section /
        <section className=quotpy-20 px-4quot> </section><div className=quotmax-w-7xl mx-autoquot>
        </div>
        <div className=quottext-center mb-16quot> </div></div><h2 className=quottext-4xl font-bold text-white mb-4quot>Key Features</h2>
              <pPowerful AI-driven features designed to transform your business operations</p>
            </p></div>
        <div className=quotgrid md grid-cols-2 lggrid-cols-4 gap-8quot>
              featuresmapfeature index => 
                </div></div></><><div key=index className=quotbg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20quot> </div></div><featureicon className=quoth-12 w-12 text-emerald-400 mb-4quot /> </feature><h3 className=quottext-xl font-semibold text-white mb-3quot>featuretitle</h3>
                  <p className=quottext-gray-300 mb-4quot>featuredescription</p></p>
                  <ul className=quotspace-y-2quot>featurebenefitsmapbenefit idx => 
                      </ul><li key=idx className=quotflex items-center text-sm text-gray-300quot> </li><CheckCircle className=quoth-4 w-4 text-emerald-400 mr-2 flex-shrink-0quot />benefit</CheckCircle></li>
                    
                  </ul>
                </div>
              
            </div>
          </div>
        </section>
        / Benefits Section /
        <section className=quotpy-20 px-4 bg-white/5quot> </section><div className=quotmax-w-7xl mx-autoquot>
        </div>
        <div className=quottext-center mb-16quot> </div></div><h2 className=quottext-4xl font-bold text-white mb-4quot>Why Choose Our Solution</h2>
              <pExperience the benefits of cutting-edge AI technology</p>
        </p></div>
        <div className=quotrelativequot>
        </div>
        <divslidesmapslide index =></div></div></>
<><div key=index className=quotw-full flex-shrink-0quot>
        </div>
        <div className=quotbg-white/10 backdrop-blur-sm rounded-xl p-8quot> </div></div>
        <div className=quottext-center mb-8quot>
        </div>
        <div className=quotbg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4quot> </div></div></><slideicon className=quoth-10 w-10 text-whitequot /> </slide></div>
                      <h3 className=quottext-2xl font-bold mb-4quot>slidetitle</h3>
                      <p className=quottext-purple-100 text-lg max-w-2xl mx-autoquot>slidedescription</p></p>
                    </div>
                    <><div className=quotgrid grid-cols-1 mdgrid-cols-2 gap-4quot>slidefeaturesmapfeature featureIndex => </div></div>
        <div key=featureIndex className=quotflex items-centerquot> </div></div></><CheckCircle className=quoth-5 w-5 text-green-400 mr-3 flex-shrink-0quot /> </CheckCircle><span className=quottext-purple-100quot>feature</span>
=======
                  {slide.stats && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {slide.stats.map((stat, _index) => (
                        <div key={_index} className="text-center">
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-white/80">{stat.label}</div>
>>>>>>> origin/main
                        </div>
                      ))}
                    </div>
<<<<<<< HEAD
                  </div>
                </div>
        <div/ Header /</div></div>
        <div className=quottext-center mb-16quot> </div></div></><h2 className=quottext-3xl md text-4xl font-bold text-white mb-6quot>
            Discover Our </h2><span className=quottext-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400quot>Solutions</span>
          </h2>
          <p className=quottext-xl text-gray-300 max-w-3xl mx-autoquot>Explore our comprehensive suite of AI and IT solutions designed to transform your business</p></p>p>
        </div>
        / Carousel Container /
        / Carousel /
        <><div className=quotrelativequot>
        </div>
        <div className=quotbg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md p-12 overflow-hiddenquot>
            </div></div>
        <div className=quotflex items-center justify-between mb-8quot>
        </div>
        <div className=quotflex items-center gap-4quot> </div></div></><><div className=quotw-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-centerquot> </div></div><currentSlideDataicon className=quotw-8 h-8 text-slate-900quot /> </currentSlideData></div>
                / Features /
                <div className=quotspace-y-4quot> </div></div><h4 className=quottext-lg font-semibold text-white mb-4quot>Key Features </h4>
                  <div className=quotgrid grid-cols-1 smgrid-cols-2 gap-3quot>currentSlideDatafeaturesmapfeature index => </div></div>
        <div key=index className=quotflex items-center space-x-3quot> </div></div></><CheckCircle className=quotw-5 h-5 text-green-400 flex-shrink-0quot /> </CheckCircle><span className=quottext-gray-300quot>feature</span>
                      </div>
                    
                  </div>
                </div>
                / Stats /
                currentSlideDatastats  <><div className=quotgrid grid-cols-3 gap-6quot>currentSlideDatastatsmapstat index => </div></div>
        <divstatvalue</div>
                        </div>
        <div className=quottext-gray-400 text-smquot>statlabel</div></div></div>
                    
                  </div>
                
                / CTA /
                <><div className=quotflex flex-col sm flex-row gap-4quot>
                  </div></div><button className=quotinline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover from-purple-600 hoverto-blue-600 transition-all duration-300 transform hoverscale-105quot>
                    </button><Zap className=quotw-5 h-5quot />Get Started</Zap><button className=quotinline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover bg-white/20 transition-all duration-300quot>
                    </button><ArrowRight className=quotw-5 h-5quot />
                    Learn More</div>
              </div>
              / Visual Element /
              <div className=quotrelativequot>
        </div>
        <div className=quotaspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-centerquot> </div></div>
        <div className=quottext-centerquot>
        </div>
        <div className=quotw-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-centerquot> </div></div></><currentSlideDataicon className=quotw-16 h-16 text-whitequot /> </currentSlideData></div>
                    <><div className=quottext-4xl font-bold text-white mb-2quot>currentSlideDatatitle</div></div>div>
                    <div className=quottext-gray-300quot>Slide currentSlide  1 of slideslength</div></div>div>
                  </div>
                </div>
              </div>
            </div>
        <div className=quotgrid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-6quot>currentSlideDatafeaturesmapfeature index => </div></div></>
                <><div key=index className=quotflex items-center gap-3quot> </div></div><CheckCircle className=quotw-5 h-5 text-cyan-400 flex-shrink-0quot /> </CheckCircle><span className=quottext-gray-300quot>feature</span>
                </div>
              
            </div>
            / Stats /
            currentSlideDatastats  <div className=quotgrid grid-cols-1 mdgrid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700quot>currentSlideDatastatsmapstat index => </div></div>
        <divstatvalue</div>
                    </div>
        <div className=quottext-sm text-gray-400quot>statlabel</div></div></div>
                
              </div>
            
          </div>
          <button onClick=prevSlide className=quotabsolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20quot>
            </button><ChevronLeft className=quoth-6 w-6quot /> </ChevronLeft></button>
          <button onClick=nextSlide className=quotabsolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20quot>
            </button><ChevronRight className=quoth-6 w-6quot /> </ChevronRight></button>
        </div>
/ Slide Indicators /
            className=quotabsolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20quot >
            <ChevronLeft className=quotw-6 h-6quot /> </ChevronLeft></button>
          <button onClick=nextSlide className=quotabsolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20quot > </button><ChevronRight className=quotw-6 h-6quot /> </ChevronRight></button>      </div>
    </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">{slides.map((_, index) => (</div>
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
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
      <EnhancedFooter />
</div>
<<<<<<< HEAD,
  ),
}
 ContentCarouselPage
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
=======
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, _index) => (
          <button
            key={_index}
            onClick={() => setCurrentSlide(_index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              _index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
>>>>>>> origin/main
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ContentCarousel }
=======
export default ContentCarousel;
>>>>>>> origin/main
