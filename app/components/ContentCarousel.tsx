'use client'
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const ContentCarouselPage: React.FC = () => {
  const features = [
=======
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react'
import { CheckCircle, Star, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react'

interface Slide {
  icon: React.ComponentType<any>title: string</a>
  description: string
  features: string[]
=======
import React, {useStateuseEffect} from 'react'
import {ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp} from 'lucide-react'
interface Slid e {icon: React.ComponentType<an y>title: stringdescription: stringfeatures: string[]
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
  stats?: {
    value: stringlabel: string
 }[]
}
<<<<<<< HEAD
const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides: Slide[] = [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>ContentCarousel</title>
        <meta name="description" content="Advanced ContentCarousel solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ContentCarousel, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ContentCarousel
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ContentCarousel solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
=======
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold mb-4"></h2>
            Discover Our Solutions
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered solutions designed to transform your business.
          </p>
=======
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Our Solutions</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">Explore our comprehensive suite of AI-powered solutions designed to transform your business.</p>p>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
        </div>
        <div className="relative">
<div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >{slides.map((slide, index) => (</div>
<div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                    <div className="text-center mb-8">
                      <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <slide.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-purple-100 text-lg max-w-2xl mx-auto">{slide.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{slide.features.map((feature, featureIndex) => (</div>
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-purple-100">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">{/* Header */}</div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Explore our comprehensive suite of AI and IT solutions designed to transform your business.</p>p>
        </div>
        {/* Carousel Container */}
        {/* Carousel */}
        <div className="relative">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <currentSlideData.icon className="w-8 h-8 text-slate-900" />
                </div>
                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{currentSlideData.features.map((feature, index) => (</div>
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Stats */}
                {currentSlideData.stats && (
                  <div className="grid grid-cols-3 gap-6">{currentSlideData.stats.map((stat, index) => (</div>
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
                    <Zap className="w-5 h-5" />
                    Get Started
<<<<<<< HEAD
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>
                    <ArrowRight className="w-5 h-5" />
                    Learn More
=======
  </
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                    Learn More
  </
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
                </div>
              </div>
              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <currentSlideData.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{currentSlideData.title}</div>div>
                    <div className="text-gray-300">Slide {currentSlide + 1} of {slides.length}</div>div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{currentSlideData.features.map((feature, index) => (</div>
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            {/* Stats */}
            {currentSlideData.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700">{currentSlideData.stats.map((stat, index) => (</div>
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Navigation Buttons */}
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
<<<<<<< HEAD
              onClick={() =></button> setCurrentSlide(index)}
=======
              onClick={() =>setCurrentSlide(index)}</button>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white">
              <Star className="w-6 h-6 text-yellow-400" />
              <div className="text-left">
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
=======
        <div className="text-center mt-12">
<<<<<<< HEAD
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold flex items-center mx-auto"></button>
            Get Started Today
=======
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold flex items-center mx-auto">Get Started Today</button>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default ContentCarousel
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
=======
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
