'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

interface Slide {
  id: number
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  color: string
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides: Slide[] = [
    {
      id: 1,
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
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions for your business needs.",
      features: [
        "99.9% uptime guarantee",
        "Auto-scaling capabilities",
        "Advanced security",
        "24/7 monitoring"
      ],
      icon: <Cloud className="h-12 w-12" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
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
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <>
      <Helmet>
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ContentCarousel
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ContentCarousel solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
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
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{slide.title}</h3>
                        <p className="text-gray-600 mb-6">{slide.description}</p>
                        <ul className="space-y-2">
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>
      <div className="max-w-7xl mx-auto">{/* Header */}</div>
        <div className="text-center mb-16"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Explore our comprehensive suite of AI and IT solutions designed to transform your business.</p>p>
        </div>
        {/* Carousel Container */}
        {/* Carousel */}
        <div className="relative"></div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden"></div>
            <div className="flex items-center justify-between mb-8"></div>
              <div className="flex items-center gap-4"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center"></div>
                  <currentSlideData.icon className="w-8 h-8 text-slate-900" />
                </div>
                {/* Features */}
                <div className="space-y-4"></div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
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
                <div className="flex flex-col sm:flex-row gap-4"></div>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
                    <Zap className="w-5 h-5" />
                    Get Started
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                </div>
              </div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"></button>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"></button>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
{/* Slide Indicators */}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          ></button>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">{slides.map((_, index) => (</div>
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Additional Info */}
        <div className="mt-16 text-center"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
            <div className="flex items-center justify-center gap-3 text-white"></div>
              <Star className="w-6 h-6 text-yellow-400" />
              <div className="text-left"></div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContentCarouselPage;
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
constContentCarousel: React.FC= () => {const [currentSlidesetCurrentSlide] = useState(0)
  constslides: Slide[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '9 5%', label: 'Accuracy Rate'},
        {value: '10 x', label: 'Faster Processing'},
        {value: '2 4/7', label: 'Automation'}
      ]
    },
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      stats: [
        { value: '9 9.9%', label: 'Uptime'},
       {value:'<100ms', label: 'Response Time'},
        {value: '10 M+', label: 'Requests/Day'}
      ]
    },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '2 4/7 Monitoring'],
      stats: [
        { value: '25 6-bit', label: 'Encryption'},
        {value: 'SOC 2', label: 'Compliance'},
        {value: 'Zero', label: 'Security Breaches'}
      ]
    },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
      stats: [
        { value: '5 0+', label: 'Countries'},
        {value: '1 5+', label: 'Languages'},
        {value: '2 4/7', label: 'Global Support'}
      ]
    }
  ]
  constnextSlide= () =>{setCurrentSlide((prev) => (prev + 1) % slides.length)
 }
  constprevSlide= () => {setCurrentSlide((prev) => (prev -1+ slides.length) % slides.length)
 }
  useEffect(() => {consttimer= setInterval(nextSlide500 0)
    return () => clearInterval(timer)
 }, [])
  constcurrentSlideData= slides[currentSlide]
  return (
  <divclassName="relative bg-gradient-to-r from-purple-600to-blue-600text-whitepy-16px-4"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></className="text-3 xlmd:text-4 xlfont-boldmb-4">Discover Our Solutions

        <spanclassName="text-xl text-purple-100max-w-3xlmx-auto"></className="text-xl text-purple-100max-w-3xlmx-auto">Explore our comprehensive suite of AI-powered solutions designed to transform your business.
        </p></di><divclassName="relative"><divclassName="overflow-hiddenrounded-xl"><divclassName="flex transition-transform duration-500ease-in-out"
              style={{ transform:`translateX(-${currentSlide*100}%)` }}
            >{slides.map((slideindex)=>(<divkey={index}className="w-fullflex-shrink-0"><divclassName="bg-white/10backdrop-blur-smrounded-xlp-8"><divclassName="text-centermb-8"><divclassName="bg-white/20w-20h-20rounded-full flex items-center justify-centermx-automb-4"><slide.iconclassName="h-10w-10text-white" /></di><h3className="text-2 xlfont-boldmb-4">{slide.title}</h><pclassName="text-purple-100text-lg max-w-2xlmx-auto">{slide.description}</p></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4">{slide.features.map((featurefeatureIndex) => (
                     <divkey={featureIndex}className="flexitems-center"><CheckCircleclassName="h-5 w-5text-green-400mr-3flex-shrink-0" /><spanclassName="text-purple-100">{feature}</spa></di>))}
                  </di></di></di>))}
  <divclassName="bg-gradient-to-br from-slate-900via-purple-900to-slate-900py-20px-4"><divclassName="max-w-7xlmx-auto">{/* Header */}
      <divclassName="text-centermb-16"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">DiscoverOur<spanclassName="text-transparent bg-clip-text bg-gradient-to-rfrom-blue-400to-purple-400">Solutions</spa></h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></className="text-xl text-gray-300max-w-3xlmx-auto">Explore our comprehensive suite of AI and IT solutions designed to transform your business.
        </p></di>{/* CarouselContainer */}
        {/* Carousel */}
      <divclassName="relative"><divclassName="bg-slate-80 0/50backdrop-blur-sm border border-slate-700rounded-2 xl p-8 md:p-12overflow-hidden"><divclassName="flex items-centerjustify-betweenmb-8"><divclassName="flexitems-centergap-4"><divclassName="w-1 6 h-16bg-gradient-to-r from-cyan-400to-purple-400rounded-xl flexitems-centerjustify-center"><currentSlideData.iconclassName="w-8 h-8text-slate-900" /></di>{/* Features */}
              <divclassName="space-y-4"><h4className="text-lg font-semiboldtext-whitemb-4">KeyFeatures:</h><divclassName="grid grid-cols-1sm:grid-cols-2gap-3">{currentSlideData.features.map((featureindex) => (
                   <divkey={index}className="flexitems-centerspace-x-3"><CheckCircleclassName="w-5 h-5 text-green-400flex-shrink-0" /><spanclassName="text-gray-300">{feature}</spa></di>))}
                </di></di>{/* Stats */}
                {currentSlideData.stats && (
                <divclassName="gridgrid-cols-3gap-6">{currentSlideData.stats.map((statindex) => (
                   <divkey={index}className="text-center"><divclassName="text-2 xl font-boldtext-whitemb-1">{stat.value}</di><divclassName="text-gray-400text-sm">{stat.label}</di></di>))}
                </di>)}
                {/* CTA */}
              <divclassName="flexflex-colsm:flex-rowgap-4"><spanclassName="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 0 to-blue-500text-white px-6 py-3 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-allduration-300transformhover:scale-105"></className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 0 to-blue-500text-white px-6 py-3 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-allduration-300transformhover:scale-105"><ZapclassName="w-5h-5" />Get Started

                <spanclassName="inline-flex items-center gap-2 bg-white/10text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20transition-allduration-300"></className="inline-flex items-center gap-2 bg-white/10text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20transition-allduration-300"><ArrowRightclassName="w-5h-5" />Learn More

              </di></di>{/* VisualElement */}
            <divclassName="relative"><divclassName="aspect-square bg-gradient-to-br from-purple-50 0/20to-blue-50 0/20rounded-2 xl flexitems-centerjustify-center"><divclassName="text-center"><divclassName="w-32h-32bg-gradient-to-r from-purple-500to-blue-500rounded-full mx-auto mb-6 flexitems-centerjustify-center"><currentSlideData.iconclassName="w-16h-16text-white" /></di><divclassName="text-4 xl font-boldtext-whitemb-2">{currentSlideData.title}
                  </di><divclassName="text-gray-300">Slide {currentSlide +1} of {slides.length}
                  </di></di></di></di></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-6">{currentSlideData.features.map((featureindex) => (
             <divkey={index}className="flexitems-centergap-3"><CheckCircleclassName="w-5 h-5 text-cyan-400flex-shrink-0" /><spanclassName="text-gray-300">{feature}</spa></di>))}
          </di>{/* Stats */}
            {currentSlideData.stats && (
            <divclassName="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-tborder-slate-700">{currentSlideData.stats.map((statindex) => (
               <divkey={index}className="text-center"><divclassName="text-3 xl font-boldtext-whitemb-1">{stat.value}</di><divclassName="text-smtext-gray-400">{stat.label}</di></di>))}
            </di>)}
        </di>{/* NavigationButtons */}
        <
            onClick={prevSlide}
           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"></
            onClick={prevSlide}
           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"><ChevronLeftclassName="h-6w-6" /></butto><
            onClick={nextSlide}
           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"></
            onClick={nextSlide}
           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"><ChevronRightclassName="h-6w-6" /></butto></di>{/* SlideIndicators */}
           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"
          >
          <ChevronLeftclassName="w-6h-6" /></butto><
            onClick={nextSlide}
           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"
          ></
            onClick={nextSlide}
           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"
          ><ChevronRightclassName="w-6h-6" /></butto></di>{/* SlideIndicators */}
      <divclassName="flex justify-centermt-8space-x-2">{slides.map((_index) => (
          <
             key={index}
              onClick={() =></
             key={index}
              onClick={() =>setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200${
                index=== currentSlide ? 'bg-cyan-40 0'  : 'bg-white/3 0'
            }`}
            />
          ))}
      </di>{/* AdditionalInfo */}
      <divclassName="mt-16text-center"><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xlmx-auto"><divclassName="flex items-center justify-centergap-3text-white"><StarclassName="w-6 h-6text-yellow-400" /><divclassName="text-left"><divclassName="text-2xlfont-bold">4.9/5</di><divclassName="text-gray-400text-sm">CustomerRating</di></di></di><divclassName="flex items-center justify-centergap-3text-white"><UsersclassName="w-6 h-6text-blue-400" /><divclassName="text-left"><divclassName="text-2xlfont-bold">10000+</di><divclassName="text-gray-400text-sm">HappyCustomers</di></di></di><divclassName="flex items-center justify-centergap-3text-white"><TrendingUpclassName="w-6 h-6text-green-400" /><divclassName="text-left"><divclassName="text-2xlfont-bold">99.9%</di><divclassName="text-gray-400text-sm">Uptime</di></di></di></di><divclassName="text-centermt-12"><spanclassName="bg-gradient-to-r from-cyan-50 0 to-purple-500text-white px-8 py-3 rounded-lghover:from-cyan-600 hover:to-purple-600transition-all duration-300font-semibold flexitems-centermx-auto"></spa></className="bg-gradient-to-r from-cyan-50 0 to-purple-500text-white px-8 py-3 rounded-lghover:from-cyan-600 hover:to-purple-600transition-all duration-300font-semibold flexitems-centermx-auto">Get Started Today
          <ArrowRightclassName="w-5h-5ml-2" /></butto></di></di></di>)
}
export defaultContentCarousel</butto></butto></butto></di></di></di></h></di></di></an>
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

export default ContentCarousel
