'use client';
import React from 'react'
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
      icon: BarChart,
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
      icon: Cloud,
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
      icon: Shield,
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
      
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
              ContentCarousel
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced ContentCarousel solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
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
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
        </div>
        <div className=&quot;relative&quot;></div>
<div className=&quot;overflow-hidden rounded-xl&quot;></div>
            <div
              className=&quot;flex transition-transform duration-500 ease-in-out&quot;
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >{slides.map((slide, index) => (</div>
<div key={index} className=&quot;w-full flex-shrink-0&quot;></div>
                  <div className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-8&quot;></div>
                    <div className=&quot;text-center mb-8&quot;></div>
                      <div className=&quot;bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                        <slide.icon className=&quot;h-10 w-10 text-white&quot; />
                      </div>
                      <h3 className=&quot;text-2xl font-bold mb-4&quot;>{slide.title}</h3>
                      <p className=&quot;text-purple-100 text-lg max-w-2xl mx-auto&quot;>{slide.description}</p>
                    </div>
                    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>{slide.features.map((feature, featureIndex) => (</div>
                        <div key={featureIndex} className=&quot;flex items-center&quot;></div>
                          <CheckCircle className=&quot;h-5 w-5 text-green-400 mr-3 flex-shrink-0&quot; />
                          <span className=&quot;text-purple-100&quot;>{feature}</span>
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
    <div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4&quot;></div>
      <div className=&quot;max-w-7xl mx-auto&quot;>{/* Header */}</div>
        <div className=&quot;text-center mb-16&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;></h2>
            Discover Our <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>Solutions</span>
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>Explore our comprehensive suite of AI and IT solutions designed to transform your business.</p>p>
        </div>
        {/* Carousel Container */}
        {/* Carousel */}
        <div className=&quot;relative&quot;></div>
          <div className=&quot;bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden&quot;></div>
            <div className=&quot;flex items-center justify-between mb-8&quot;></div>
              <div className=&quot;flex items-center gap-4&quot;></div>
                <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center&quot;></div>
                  <currentSlideData.icon className=&quot;w-8 h-8 text-slate-900&quot; />
                </div>
                {/* Features */}
                <div className=&quot;space-y-4&quot;></div>
                  <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Key Features:</h4>
                  <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-3&quot;>{currentSlideData.features.map((feature, index) => (</div>
                      <div key={index} className=&quot;flex items-center space-x-3&quot;></div>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Stats */}
                {currentSlideData.stats && (
                  <div className=&quot;grid grid-cols-3 gap-6&quot;>{currentSlideData.stats.map((stat, index) => (</div>
                      <div key={index} className=&quot;text-center&quot;></div>
                        <div className=&quot;text-2xl font-bold text-white mb-1&quot;>{stat.value}</div>
                        <div className=&quot;text-gray-400 text-sm&quot;>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                {/* CTA */}
                <div className=&quot;flex flex-col sm:flex-row gap-4&quot;></div>
                  <button className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105&quot;></button>
                    <Zap className=&quot;w-5 h-5&quot; />
                    Get Started
                  <button className=&quot;inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300&quot;></button>
                    <ArrowRight className=&quot;w-5 h-5&quot; />
                    Learn More
                </div>
              </div>
              {/* Visual Element */}
              <div className=&quot;relative&quot;></div>
                <div className=&quot;aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center&quot;></div>
                  <div className=&quot;text-center&quot;></div>
                    <div className=&quot;w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center&quot;></div>
                      <currentSlideData.icon className=&quot;w-16 h-16 text-white&quot; />
                    </div>
                    <div className=&quot;text-4xl font-bold text-white mb-2&quot;>{currentSlideData.title}</div>div>
                    <div className=&quot;text-gray-300&quot;>Slide {currentSlide + 1} of {slides.length}</div>div>
                  </div>
                </div>
              </div>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>{currentSlideData.features.map((feature, index) => (</div>
                <div key={index} className=&quot;flex items-center gap-3&quot;></div>
                  <CheckCircle className=&quot;w-5 h-5 text-cyan-400 flex-shrink-0&quot; />
                  <span className=&quot;text-gray-300&quot;>{feature}</span>
                </div>
              ))}
            </div>
            {/* Stats */}
            {currentSlideData.stats && (
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700&quot;>{currentSlideData.stats.map((stat, index) => (</div>
                  <div key={index} className=&quot;text-center&quot;></div>
                    <div className=&quot;text-3xl font-bold text-white mb-1&quot;>{stat.value}</div>
                    <div className=&quot;text-sm text-gray-400&quot;>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={prevSlide}
            className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20&quot;></button>
            <ChevronLeft className=&quot;h-6 w-6&quot; />
          </button>
          <button
            onClick={nextSlide}
            className=&quot;absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20&quot;></button>
            <ChevronRight className=&quot;h-6 w-6&quot; />
          </button>
        </div>
{/* Slide Indicators */}
            className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20&quot;
          >
            <ChevronLeft className=&quot;w-6 h-6&quot; />
          </button>

          <button
            onClick={nextSlide}
            className=&quot;absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20&quot;
          ></button>
            <ChevronRight className=&quot;w-6 h-6&quot; />
          </button>
        </div>
        {/* Slide Indicators */}
        <div className=&quot;flex justify-center mt-8 space-x-2&quot;>{slides.map((_, index) => (</div>
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
        <div className=&quot;mt-16 text-center&quot;></div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto&quot;></div>
            <div className=&quot;flex items-center justify-center gap-3 text-white&quot;></div>
              <Star className=&quot;w-6 h-6 text-yellow-400&quot; />
              <div className=&quot;text-left&quot;></div>
                <div className=&quot;text-2xl font-bold&quot;>4.9/5</div>
                <div className=&quot;text-gray-400 text-sm&quot;>Customer Rating</div>
              </div>
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
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
            <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentCarousel
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4da8
