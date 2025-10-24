'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, ChevronLeft, ChevronRight, Star, CheckCircle, BarChart, Cloud, Shield } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

interface Slide {
  id: number;
  title: string;
  description: string;
  features: string[]
  icon: React.ComponentType ( className?: string)
  color: string;
  stats?: Array (
    value: string;
    label: string)
}

const ContentCarousel: React.FC = () => {const [currentSlide, setCurrentSlide] = useState(0)
  
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
      icon: BarChart,
      color: "from-blue-500 to-cyan-500",
      stats: [
        { value: "99.9%", label: "Accuracy" },
        { value: "50%", label: "Faster Insights" },
        { value: "24/7", label: "Monitoring" }
      ]
    },
    {id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions for your business needs.",
      features: [
        "99.9% uptime guarantee",
        "Auto-scaling capabilities",
        "Advanced security",
        "24/7 monitoring"
      ],
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "10x", label: "Scalability" },
        { value: "24/7", label: "Support" }
      ]
    },
    {id: 3,
      title: "Cybersecurity Solutions",
      description: "Protect your business with our comprehensive cybersecurity services.",
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Incident response",
        "Security training"
      ],
      icon: Shield,
      color: "from-red-500 to-pink-500",
      stats: [
        { value: "100%", label: "Protection" },
        { value: "5min", label: "Response Time" },
        { value: "24/7", label: "Monitoring" }
      ]
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  const nextSlide = () => {
  return;
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  
}

  const prevSlide = () => {
  return;
    setCurrentSlide((prev) = (/ (prev - 1 + slides.length) % slides.length)
  
}

  const currentSlideData = slides[currentSlide]

  const currentSlideData = slides[currentSlide]

  return (
    <>
    <Helmet ></Helmet>
  </>
);
        <title>Content Carousel - Advanced Solutions</title>
        <meta name="description" content="Advanced Content Carousel solution for modern businesses."   /></meta>
        <meta name="keywords" content="AI, artificial intelligence, content carousel, AI solutions, intelligent automation"   /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Header */}
        <div className="text-center mb-16 pt-20 px-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto px-4"></div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden"></div>
            <div className="flex items-center justify-between mb-8"></div>
              <div className="flex items-center gap-4"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center"></div>
                  <currentSlideData .icon className="w-8 h-8 text-slate-900"   /></currentSlideData>
                </div>
                <div ></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{currentSlideData.title}</h3>
                  <p className="text-gray-300">{currentSlideData.description}</p>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex gap-2"></div>
                <button onClick={prevSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
                ></button>
                  <ChevronLeft className="w-6 h-6"   /></ChevronLeft>
                </button>
                <button onClick={nextSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
                ></button>
                  <ChevronRight className="w-6 h-6"   /></ChevronRight>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8"></div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"></div>
                {currentSlideData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0"   /></CheckCircle>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            {currentSlideData.stats && (
              <div className="grid grid-cols-3 gap-6 mb-8"></div>
                {currentSlideData.stats.map((stat, index) => (
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
                <ArrowRight className="w-5 h-5"   /></ArrowRight>
                Get Started
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>
                <ArrowRight className="w-5 h-5"   /></ArrowRight>
                Learn More
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2"></div>
            {slides.map((_, index) => (
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
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center px-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
            <div className="flex items-center justify-center gap-3 text-white"></div>
              <Star className="w-6 h-6 text-yellow-400"   /></Star>
              <div className="text-left"></div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white"></div>
              <CheckCircle className="w-6 h-6 text-green-400"   /></CheckCircle>
              <div className="text-left"></div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white"></div>
              <ArrowRight className="w-6 h-6 text-blue-400"   /></ArrowRight>
              <div className="text-left"></div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5 mt-16"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0"   /></CheckCircle>
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
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer /></Footer>
    < />
  )
, }
  </>
  </>
);

export default ContentCarousel
