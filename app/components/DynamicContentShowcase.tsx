'use client';
import React from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

=======
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings  } from "lucide-react";
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
interface Testimonial {
  id: number
  name: string
  company: string
  content: string
  rating: number
<<<<<<< HEAD
  avatar?: string
}

const DynamicContentShowcase: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp",
      content: "Zion Tech Group transformed our AI capabilities. Their solutions increased our operational efficiency by 40%.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "InnovateLab",
      content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "StartupXYZ",
      content: "The micro SaaS solutions they provided helped us scale faster than we ever imagined possible.",
=======
  avatar?: string,
}
;
const DynamicContentShowcase: React.FC = () => {const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {,
      id: 1,"
      name: "Sarah Johnson","
      company: "TechCorp","}
      content: "Zion Tech Group transformed our AI capabilities. Their solutions increased our operational efficiency by 40%.",}
      rating: 5
    },
    {id: 2,"
      name: "Michael Chen","
      company: "InnovateLab","}
      content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.",}
      rating: 5
    },
    {id: 3,"
      name: "Emily Rodriguez","
      company: "StartupXYZ","}
      content: "The micro SaaS solutions they provided helped us scale faster than we ever imagined possible.",}
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
      rating: 5
    }
  ];

<<<<<<< HEAD
  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Solutions",
      description: "Advanced artificial intelligence to transform your business operations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation",
      description: "Streamline processes and increase efficiency with smart automation",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <section className=&quot;py-20 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;></div>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;></h1>
            Transform Your Business with <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>AI Solutions</span>
          </h1>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto mb-8&quot;></p>
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
  return (
    <div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4&quot;></div>
      <div className=&quot;max-w-7xl mx-auto&quot;></div>
        <div className=&quot;text-center mb-16&quot;></div>
          <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Our Solutions</h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>Discover how our cutting-edge AI and IT solutions can transform your business</p>p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <button className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105&quot;></button>
              <Play className=&quot;w-5 h-5&quot; />
              Start Demo
            <button className=&quot;inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300&quot;></button>
              <ArrowRight className=&quot;w-5 h-5&quot; />
              Learn More
=======
  useEffect(() => {setIsVisible(true);"
    const interval=";""
    <div className=""bg-gradient-to-br" from-slate-900 via-purple-900 to-slate-900"></div>"
        <section className=""py-20" px-4"></section>"
        <div className=""max-w-7xl" mx-auto text-center"></div>"
          <h1 className=""text-4xl" md:text-6xl font-bold text-white mb-6"></h1>;"
            Transform Your Business with <span className=""text-transparent" bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions</span>
          </h1>"
          <p className=""text-xl" text-gray-300 max-w-3xl mx-auto mb-8"></p>;
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.;
  return ("
    <div className=""bg-gradient-to-br" from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>"
      <div className=""max-w-7xl" mx-auto"></div>"
        <div className=""text-center" mb-16"></div>"
          <h2 className=""text-4xl" font-bold text-white mb-6">Our Solutions</h2>"
          <p className=""text-xl" text-gray-300 max-w-3xl mx-auto">Discover how our cutting-edge AI and IT solutions can transform your business</p>p>"
          <div className=""flex" flex-col sm:flex-row gap-4 justify-center"></div>"
            <button className=""inline-flex" items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>"
              <Play className=""w-5" h-5" />;}</Play>
              Start Demo</Play>"
            <button className=""inline-flex" items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>"
              <ArrowRight className=""w-5" h-5" />});</ArrowRight>
              Learn More</ArrowRight>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
          </div>
{/* Features Grid */}
<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16&quot;>{features.map((feature, index) => (</div>
            <div key={index} className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300&quot;></div>
              <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4&quot;></div>
                <feature.icon className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
              <p className=&quot;text-gray-300&quot;>{feature.description}</p>
=======
        <div className=""grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{features.map((feature, index) => (</div>"
            <div key="{index} className=""bg-white/5" backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"></div>"
              <div className=""w-12" h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>"
                <feature.icon className=""w-6" h-6 text-white" /></feature>
              </div>"
              <h3 className=""text-xl" font-semibold text-white mb-3">{feature.title}</h3>"
              <p className=""text-gray-300"">{feature.description}</p>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
            </div>
          ))}
        </div>
        {/* Benefits Section */}
<<<<<<< HEAD
        <div className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16&quot;></div>
          <h3 className=&quot;text-2xl font-bold text-white mb-6 text-center&quot;>Why Choose Us?</h3>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4&quot;>{benefits.map((benefit, index) => (</div>
              <div key={index} className=&quot;flex items-center&quot;></div>
                <CheckCircle className=&quot;h-5 w-5 text-green-400 mr-3 flex-shrink-0&quot; />
                <span className=&quot;text-gray-300&quot;>{benefit}</span>
=======
        <div className=""bg-white/5" backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16"></div>"
          <h3 className=""text-2xl" font-bold text-white mb-6 text-center">Why Choose Us?</h3>"
          <div className=""grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{benefits.map((benefit, index) => (</div>"
              <div key="{index} className=""flex" items-center"></div>"
                <CheckCircle className=""h-5" w-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>"
                <span className=""text-gray-300"">{benefit}</span>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials */}
<<<<<<< HEAD
        <div className=&quot;text-center&quot;></div>
          <h3 className=&quot;text-2xl font-bold text-white mb-8&quot;>What Our Clients Say</h3>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>{testimonials.map((testimonial, index) => (</div>
              <div key={index} className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10&quot;></div>
                <div className=&quot;flex justify-center mb-4&quot;></div>
                  <stat.icon className=&quot;w-8 h-8 text-blue-400&quot; />
                </div>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.value}</div>
                <div className=&quot;text-gray-300&quot;>{stat.label}</div>
=======
        <div className=""text-center""></div>"
          <h3 className=""text-2xl" font-bold text-white mb-8">What Our Clients Say</h3>"
          <div className=""grid" grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>"
              <div key="{index} className=""bg-white/5" backdrop-blur-lg rounded-xl p-6 border border-white/10"></div>"
                <div className=""flex" justify-center mb-4"></div>"
                  <stat.icon className=""w-8" h-8 text-blue-400" /></stat>
                </div>"
                <div className=""text-3xl" font-bold text-white mb-2">{stat.value}</div>"
                <div className=""text-gray-300"">{stat.label}</div>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
              </div>
            </div>
          </div>
        </div>
      {/* Features Section */}
<<<<<<< HEAD
      <section className=&quot;py-20 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;></h2>
              Our <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>Solutions</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>Comprehensive AI and IT solutions designed to transform your business operations.</p>p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>{features.map((feature, index) => (</div>
              <div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300&quot;></div>
                <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4&quot;></div>
                  <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors&quot;>$3</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>{feature.description}</p>
                {feature.stats && (
                  <div className=&quot;grid grid-cols-3 gap-4&quot;>{feature.stats.map((stat, statIndex) => (</div>
                      <div key={statIndex} className=&quot;text-center&quot;></div>
                        <div className=&quot;text-lg font-bold text-white&quot;>{stat.value}</div>
                        <div className=&quot;text-gray-400 text-xs&quot;>{stat.label}</div>
=======
      <section className=""py-20" px-4"></section>"
        <div className=""max-w-7xl" mx-auto"></div>"
          <div className=""text-center" mb-16"></div>"
            <h2 className=""text-3xl" md:text-4xl font-bold text-white mb-6"></h2>;"
              Our <span className=""text-transparent" bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h2>"
            <p className=""text-xl" text-gray-300 max-w-3xl mx-auto">Comprehensive AI and IT solutions designed to transform your business operations.</p>p>
          </div>"
          <div className=""grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>"
              <div key="{index} className=""bg-white/5" backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"></div>"
                <div className=""w-16" h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4"></div>"
                  <feature.icon className=""w-8" h-8 text-white" /></feature>
                </div>"
                <h3 className=""text-xl" font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">$3</h3>"
                <p className=""text-gray-300" mb-6">{feature.description}</p>
                {feature.stats && ("
                  <div className: ""grid" grid-cols-3 gap-4">{feature.stats.map((stat, statIndex) => (</div>"
                      <div key="{statIndex} className=""text-center""></div>"
                        <div className=""text-lg" font-bold text-white">{stat.value}</div>"
                        <div className=""text-gray-400" text-xs">{stat.label}</div>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                      </div>
                    ))}
                  </div>
                )}
              </div>
        </div>
      </section>
      {/* Testimonials Section */}
<<<<<<< HEAD
      <section className=&quot;py-16 px-4&quot;></section>
        <div className=&quot;max-w-6xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>What Our Customers Say</h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>Don&apos;t just take our word for it. Here's what our satisfied customers have to say about their experience.</p>p>
          </div>
          <div className=&quot;relative&quot;></div>
            <div className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20&quot;></div>
              <div className=&quot;text-center&quot;></div>
                <Quote className=&quot;w-12 h-12 text-blue-400 mx-auto mb-6&quot; />
                <p className=&quot;text-xl text-gray-300 mb-8 italic&quot;>&quot;{testimonials[currentTestimonial].content}&quot;</p>p>
                <div className=&quot;flex justify-center mb-4&quot;>{[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (</div>
                    <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                  ))}
                </div>
                <blockquote className=&quot;text-xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                  &quot;{currentTestimonial.content}&quot;
                </blockquote>
                <div className=&quot;flex items-center justify-center gap-4&quot;></div>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center&quot;></div>
                    <span className=&quot;text-white font-semibold text-lg&quot;>{testimonials[currentTestimonial].name.charAt(0)}</span>span>
                  </div>
                  <div className=&quot;text-left&quot;></div>
                    <h4 className=&quot;text-lg font-semibold text-white&quot;>{testimonials[currentTestimonial].name}</h4>
                    <p className=&quot;text-gray-400&quot;>{testimonials[currentTestimonial].role}</p>
                    <p className=&quot;text-blue-400&quot;>{testimonials[currentTestimonial].company}</p>
=======
      <section className=""py-16" px-4"></section>"
        <div className=""max-w-6xl" mx-auto"></div>"
          <div className=""text-center" mb-16"></div>"
            <h2 className=""text-3xl" font-bold text-white mb-6">What Our Customers Say</h2>"
            <p className=""text-xl" text-gray-300 max-w-3xl mx-auto">Don't just take our word for it. Here's what our satisfied customers have to say about their experience.</p>p>
          </div>"
          <div className=""relative""></div>"
            <div className=""bg-white/10" backdrop-blur-lg rounded-2xl p-12 border border-white/20"></div>"
              <div className=""text-center""></div>"
                <Quote className=""w-12" h-12 text-blue-400 mx-auto mb-6" /></Quote>"
                <p className=""text-xl" text-gray-300 mb-8 italic">"{testimonials[currentTestimonial].content}</p>p>"
                <div className=""flex" justify-center mb-4">{[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (</div>"
                    <Star key="{i} className=""w-5" h-5 text-yellow-400 fill-current" /></Star>
                  ))}</Star>
                </div>"
                <blockquote className=""text-xl" text-gray-300 mb-8 max-w-4xl mx-auto"></blockquote>
                  "{currentTestimonial.content}</blockquote>
                </blockquote>"
                <div className=""flex" items-center justify-center gap-4"></div>"
                  <div className=""w-12" h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"></div>"
                    <span className=""text-white" font-semibold text-lg">{testimonials[currentTestimonial].name.charAt(0)}</span>span>
                  </div>"
                  <div className=""text-left""></div>"
                    <h4 className=""text-lg" font-semibold text-white">{testimonials[currentTestimonial].name}</h4>"
                    <p className=""text-gray-400"">{testimonials[currentTestimonial].role}</p>"
                    <p className=""text-blue-400"">{testimonials[currentTestimonial].company}</p>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                  </div>
                </div>
              </div>
            {/* Navigation Controls */}
<<<<<<< HEAD
            <div className=&quot;flex items-center justify-center gap-4 mt-8&quot;></div>
              <button
                onClick={prevTestimonial}
                className=&quot;p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200&quot;></button>
                <ChevronLeft className=&quot;w-6 h-6&quot; />
              </button>
              <button
                onClick={togglePlayPause}
                className=&quot;p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200&quot;></button>
                {isPlaying ? <Pause className=&quot;w-6 h-6&quot; /> : <Play className=&quot;w-6 h-6&quot; />}
              </button>
              <button
                onClick={nextTestimonial}
                className=&quot;p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200&quot;></button>
                <ChevronRight className=&quot;w-6 h-6&quot; />
=======
            <div className=""flex" items-center justify-center gap-4 mt-8"></div>
              <button;"
                onClick="{prevTestimonial};
                className=""p-3" bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"></button>"
                <ChevronLeft className=""w-6" h-6" /></ChevronLeft>
              </button>
              <button;"
                onClick="{togglePlayPause};
                className=""p-3" bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"></button>"
                {isPlaying ? <Pause className=""w-6" h-6" /> : <Play className=""w-6" h-6" />}</Play>
              </button>
              <button;"
                onClick="{nextTestimonial};
                className=""p-3" bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"></button>"
                <ChevronRight className=""w-6" h-6" /></ChevronRight>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
              </button>
            {/* Dots Indicator */}
<<<<<<< HEAD
            <div className=&quot;flex justify-center mt-6 space-x-2&quot;>{testimonials.map((_, index) => (</div>
                <button
                  key={index}
                  onClick={() =></button> setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
=======
            <div className=""flex" justify-center mt-6 space-x-2">{testimonials.map((_, index) => (</div>
                <button}
                  key="{index};
                  onClick="{()" =></button> setCurrentIndex(index)}
                  className="{`w-3" h-3 rounded-full transition-colors duration-200 ${}
                    index="==" currentIndex ? 'bg-purple-400' : 'bg-white/30'
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      {/* Benefits Section */}
<<<<<<< HEAD
      <section className=&quot;py-20 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Benefits</h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>Discover the advantages that make our solutions the preferred choice for businesses worldwide.</p>p>
          </div>
          <div className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20&quot;></div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>{benefits.map((benefit, index) => (</div>
                <div key={index} className=&quot;flex items-start space-x-3&quot;></div>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400 flex-shrink-0 mt-1&quot; />
                  <span className=&quot;text-gray-300&quot;>{benefit}</span>
=======
      <section className=""py-20" px-4"></section>"
        <div className=""max-w-7xl" mx-auto"></div>"
          <div className=""text-center" mb-16"></div>"
            <h2 className=""text-4xl" font-bold text-white mb-4">Key Benefits</h2>"
            <p className=""text-xl" text-gray-300 max-w-3xl mx-auto">Discover the advantages that make our solutions the preferred choice for businesses worldwide.</p>p>
          </div>"
          <div className=""bg-white/10" backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>"
            <div className=""grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>"
                <div key="{index} className=""flex" items-start space-x-3"></div>"
                  <CheckCircle className=""w-5" h-5 text-green-400 flex-shrink-0 mt-1" /></CheckCircle>"
                  <span className=""text-gray-300"">{benefit}</span>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                </div>
              ))}
            </div>
          </div>
      </section>
      {/* CTA Section */}
<<<<<<< HEAD
      <section className=&quot;py-20 px-4&quot;></section>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
          <div className=&quot;bg-white/5 backdrop-blur-sm rounded-2xl p-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>Join thousands of satisfied customers and start your transformation journey today.</p>p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
=======
      <section className=""py-20" px-4"></section>"
        <div className=""max-w-4xl" mx-auto text-center"></div>"
          <div className=""bg-white/5" backdrop-blur-sm rounded-2xl p-12"></div>"
            <h2 className=""text-3xl" md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>"
            <p className=""text-xl" text-gray-300 mb-8">Join thousands of satisfied customers and start your transformation journey today.</p>p>"
            <div className=""flex" flex-col sm:flex-row gap-4 justify-center"></div>"
              <button className=""bg-emerald-600" hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">;</button>
                Get Started</button>"
                <ArrowRight className=""ml-2" h-5 w-5" /></ArrowRight>
              </button>"
              <button className=""border" border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">;</button>
                Learn More</button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
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
=======
        <section className=""py-20" px-4"></section>"
          <div className=""max-w-7xl" mx-auto"></div>"
            <div className=""text-center" mb-16"></div>"
              <h2 className=""text-4xl" font-bold text-white mb-4">Key Features</h2>"
              <p className=""text-xl" text-gray-300 max-w-3xl mx-auto">;</p>
                Powerful AI-driven features designed to transform your business operations</p>
              </p>
            </div>"
            <div className=""grid" md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => ("
                <div key="{index} className=""bg-white/10" backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>"
                  <feature.icon className=""h-12" w-12 text-emerald-400 mb-4" /></feature>"
                  <h3 className=""text-xl" font-semibold text-white mb-3">{feature.title}</h3>"
                  <p className=""text-gray-300" mb-4">{feature.description}</p>"
                  <ul className=""space-y-2""></ul>
                    {feature.benefits.map((benefit, idx) => (</ul>"
                      <li key="{idx} className=""flex" items-center text-sm text-gray-300"></li>"
                        <CheckCircle className=""h-4" w-4 text-emerald-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {benefit}</CheckCircle>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
=======
        <section className=""py-20" px-4 bg-white/5"></section>"
          <div className=""max-w-7xl" mx-auto"></div>"
            <div className=""text-center" mb-16"></div>"
              <h2 className=""text-4xl" font-bold text-white mb-4">Why Choose Our Solution</h2>"
              <p className=""text-xl" text-gray-300 max-w-3xl mx-auto">;</p>
                Experience the benefits of cutting-edge AI technology</p>
              </p>
            </div>"
            <div className=""grid" md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => ("
                <div key="{index} className=""flex" items-start space-x-4"></div>"
                  <CheckCircle className=""h-6" w-6 text-emerald-400 mt-1 flex-shrink-0" /></CheckCircle>"
                  <p className=""text-gray-300" text-lg">{benefit}</p>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>
                <Zap className=&quot;w-5 h-5&quot; />
                Get Started Today
              </button>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>
=======
        <section className=""py-20" px-4"></section>"
          <div className=""max-w-4xl" mx-auto text-center"></div>"
            <h2 className=""text-4xl" font-bold text-white mb-6">Ready to Transform Your Business?</h2>"
            <p className=""text-xl" text-gray-300 mb-8">;</p>
              Join thousands of businesses already using our AI solutions</p>
            </p>"
            <div className=""flex" flex-col sm:flex-row gap-4 justify-center"></div>"
              <button className=""bg-gradient-to-r" from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>"
                <Zap className=""w-5" h-5" />;</Zap>
                Get Started Today</Zap>
              </button>"
              <button className=""bg-gradient-to-r" from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>;
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                Schedule Demo
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}
<<<<<<< HEAD

export default DynamicContentShowcase
=======
;"
export default DynamicContentShowcase
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
