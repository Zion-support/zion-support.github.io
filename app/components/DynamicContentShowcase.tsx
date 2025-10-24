'use client'
import React from &apos;react'
import { Helm, e, t } from "react-helmet-async";
import { ArrowRight, Brain, BarChart, Target, TrendingUp  } from "lucide-react";
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings  } from "lucide-react";
interface Testimonial {
  id: number
  name: string
  company: string
  content: string
  rating: number
  avatar?: string,
}

const DynamicContentShowcase: React.FC = () => {
  const [currentTestimonia, l, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(fal, s, e)

  const testimonials: Testimonial[] = [
    {
      id: ,1,
      name: 'Sarah Johnson,',
      company: 'TechCorp,',
      content: 'Zion Tech Group transformed our AI capabilities. Their solutions increased our operational efficiency by 40%.,',
      rating: 5
   ,
}
    {
      id:  ,2,
      name: 'Michael Chen,',
      company: 'InnovateLab,',
      content: 'The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.,',
      rating: 5
   , },
    {
      id:  ,3,
      name: 'Emily Rodriguez,',
      company: 'StartupXYZ,',
      content: 'The micro SaaS solutions they provided helped us scale faster than we ever imagined possible.,',
      rating: 5
   , }
  ]

  useEffect(() => {
  setIsVisible(tr, u, e)
    const interval = setInterval(() => {
      setCurrentTestimonial((pr, e, v) => (prev + 1) % testimonials.length)
} 5000)

    return () => clearInterval(interv, a, l)
  }, [testimonials.length])

  const features = [
    {
      icon: <Brain className='h-8 w-8' /,>,
      title: 'AI-Powered Solutions,',
      description: 'Advanced artificial intelligence to transform your business operations',
      color: 'from-blue-500 to-cyan-500'
   , },
    {
      icon: <Shield className='h-8 w-8' /,>,
      title: 'Cybersecurity,',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-green-500 to-emerald-500'
   , },
    {
      icon: <Zap className='h-8 w-8' /,>,
      title: 'Automation,',
      description: 'Streamline processes and increase efficiency with smart automation',
      color: 'from-purple-500 to-pink-500'
   , }
  ]

  return (
    <div className='bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'></div>
        <section className='py-20 px-4'></section>
        <div className='max-w-7xl mx-auto text-center'></div>
          <h1 className='text-4xl md: text-6xl font-bold text-white mb-6'></h1>
            Transform Your Business with <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>AI Solutions</span>
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'></p>
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
  return (
    <div className='bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4'></div>
      <div className='max-w-7xl mx-auto'></div>
        <div className='text-center mb-16'></div>
          <h2 className='text-4xl font-bold text-white mb-6'>Our Solutions</h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>Discover how our cutting-edge AI and IT solutions can transform your business</p>p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
            <button className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105'></button>
              <Play className='w-5 h-5' /></Play>
              Start Demo
            <button className='inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300'></button>
              <ArrowRight className='w-5 h-5' /></ArrowRight>
              Learn More
          </div>
        </div>
{/* Features Grid *,/}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>{features.map((featur, e, index) => (</div>
            <div key={ ind, e, x }className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover: border-cyan-400/50 transition-all duration-300'></div>
              <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4'></div>
                <feature.icon className='w-6 h-6 text-white' /></feature>
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>{feature.titl,e}</h3>
              <p className='text-gray-300'>{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Benefits Section */}
        <div className='bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16'></div>
          <h3 className='text-2xl font-bold text-white mb-6 text-center'>Why Choose Us?</h3>
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4'>{benefits.map((benefi, t, index) => (</div>
              <div key={ ind, e, x }className='flex items-center'></div>
                <CheckCircle className='h-5 w-5 text-green-400 mr-3 flex-shrink-0' /></CheckCircle>
                <span className='text-gray-300'>{ benef, i, t }</span>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials */}
        <div className='text-center'></div>
          <h3 className='text-2xl font-bold text-white mb-8'>What Our Clients Say</h3>
          <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>{testimonials.map((testimonia, l, index) => (</div>
              <div key={ ind, e, x }className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10'></div>
                <div className='flex justify-center mb-4'></div>
                  <stat.icon className='w-8 h-8 text-blue-400' /></stat>
                </div>
                <div className='text-3xl font-bold text-white mb-2'>{stat.value}</div>
                <div className='text-gray-300'>{stat.label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <section className='py-20 px-4'></section>
        <div className='max-w-7xl mx-auto'></div>
          <div className='text-center mb-16'></div>
            <h2 className='text-3xl md: text-4xl font-bold text-white mb-6'></h2>
              Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Solutions</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>Comprehensive AI and IT solutions designed to transform your business operations.</p>p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>{features.map((featur, e, index) => (</div>
              <div key={ ind, e, x }className='bg-white/5 backdrop-blur-sm rounded-xl p-6 hover: bg-white/10 transition-all duration-300'></div>
                <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4'></div>
                  <feature.icon className='w-8 h-8 text-white' /></feature>
                </div>
                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors'>$3</h3>
                <p className='text-gray-300 mb-6'>{feature.descriptio,n}</p>
                {feature.stats && (
                  <div className='grid grid-cols-3 gap-4'>{feature.stats.map((stat, statIndex) => (</div>
                      <div key={ statInd, e, x }className='text-center'></div>
                        <div className='text-lg font-bold text-white'>{stat.value}</div>
                        <div className='text-gray-400 text-xs'>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className='py-16 px-4'></section>
        <div className='max-w-6xl mx-auto'></div>
          <div className='text-center mb-16'></div>
            <h2 className='text-3xl font-bold text-white mb-6'>What Our Customers Say</h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>Don't just take our word for it. Here's what our satisfied customers have to say about their experience.</p>p>
          </div>
          <div className='relative'></div>
            <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20'></div>
              <div className='text-center'></div>
                <Quote className='w-12 h-12 text-blue-400 mx-auto mb-6' /></Quote>
                <p className='text-xl text-gray-300 mb-8 italic'>"{testimonials[currentTestimoni, a, l].content}"</p>p>
                <div className='flex justify-center mb-4'>{[...Array(testimonials[currentTestimoni, a, l].rating)].map((_, i) => (</div>
                    <Star key={i}className='w-5 h-5 text-yellow-400 fill-current' /></Star>
                  ))}
                </div>
                <blockquote className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto'></blockquote>
                  "{currentTestimonial.content}"
                </blockquote>
                <div className='flex items-center justify-center gap-4'></div>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center'></div>
                    <span className='text-white font-semibold text-lg'>{testimonials[currentTestimoni, a, l].name.charAt(0)}</span>span>
                  </div>
                  <div className='text-left'></div>
                    <h4 className='text-lg font-semibold text-white'>{testimonials[currentTestimoni, a, l].name}</h4>
                    <p className='text-gray-400'>{testimonials[currentTestimoni, a, l].role}</p>
                    <p className='text-blue-400'>{testimonials[currentTestimoni, a, l].company}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Controls */}
            <div className='flex items-center justify-center gap-4 mt-8'></div>
              <button
                onClick={ prevTestimoni, a, l }className='p-3 bg-white/10 hover: bg-white/20 text-white rounded-full transition-colors duration-200'></button>
                <ChevronLeft className='w-6 h-6' /></ChevronLeft>
              </button>
              <button
                onClick={togglePlayPaus,e}className='p-3 bg-white/10 hover: bg-white/20 text-white rounded-full transition-colors duration-200'></button>
                {isPlaying ? <Pause className='w-6 h-6' /> : <Play className='w-6 h-6' /,>}
              </button>
              <button
                onClick={ nextTestimoni, a, l }className='p-3 bg-white/10 hover: bg-white/20 text-white rounded-full transition-colors duration-200'></button>
                <ChevronRight className='w-6 h-6' /></ChevronRight>
              </button>
            </div>
            {/* Dots Indicator *,/}
            <div className='flex justify-center mt-6 space-x-2'>{testimonials.map((_, index) => (</div>
                <button
                  key={ ind, e, x }onClick={() =></button> setCurrentIndex(ind, e, x)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className='py-20 px-4'></section>
        <div className='max-w-7xl mx-auto'></div>
          <div className='text-center mb-16'></div>
            <h2 className='text-4xl font-bold text-white mb-4'>Key Benefits</h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>Discover the advantages that make our solutions the preferred choice for businesses worldwide.</p>p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20'></div>
            <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6'>{benefits.map((benefi, t, index) => (</div>
                <div key={ ind, e, x }className='flex items-start space-x-3'></div>
                  <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0 mt-1' /></CheckCircle>
                  <span className='text-gray-300'>{ benef, i, t }</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-20 px-4'></section>
        <div className='max-w-4xl mx-auto text-center'></div>
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-12'></div>
            <h2 className='text-3xl md: text-4xl font-bold text-white mb-6'>Ready to Transform Your Business?</h2>
            <p className='text-xl text-gray-300 mb-8'>Join thousands of satisfied customers and start your transformation journey today.</p>p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'></button>
                Get Started
                <ArrowRight className='ml-2 h-5 w-5' /></ArrowRight>
              </button>
              <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section *,/}
        <section className='py-20 px-4'></section>
          <div className='max-w-7xl mx-auto'></div>
            <div className='text-center mb-16'></div>
              <h2 className='text-4xl font-bold text-white mb-4'>Key Features</h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-8'></div>
              {features.map((featur, e, index) => (
                <div key={ ind, e, x }className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'></div>
                  <feature.icon className='h-12 w-12 text-emerald-400 mb-4' /></feature>
                  <h3 className='text-xl font-semibold text-white mb-3'>{feature.title}</h3>
                  <p className='text-gray-300 mb-4'>{feature.description}</p>
                  <ul className='space-y-2'></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={ i, d, x }className='flex items-center text-sm text-gray-300'></li>
                        <CheckCircle className='h-4 w-4 text-emerald-400 mr-2 flex-shrink-0' /></CheckCircle>
                        { benef, i, t }
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 px-4 bg-white/5'></section>
          <div className='max-w-7xl mx-auto'></div>
            <div className='text-center mb-16'></div>
              <h2 className='text-4xl font-bold text-white mb-4'>Why Choose Our Solution</h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className='grid md: grid-cols-2 lg:grid-cols-3 gap-8'></div>
              {benefits.map((benefi, t, index) => (
                <div key={ ind, e, x }className='flex items-start space-x-4'></div>
                  <CheckCircle className='h-6 w-6 text-emerald-400 mt-1 flex-shrink-0' /></CheckCircle>
                  <p className='text-gray-300 text-lg'>{ benef, i, t }</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-4'></section>
          <div className='max-w-4xl mx-auto text-center'></div>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Transform Your Business?</h2>
            <p className='text-xl text-gray-300 mb-8'></p>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className='flex flex-col sm: flex-row gap-4 justify-center'></div>
              <button className='bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105'></button>
                <Zap className='w-5 h-5' /></Zap>
                Get Started Today
              </button>
              <button className='bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105'></button>
                Schedule Demo
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}

export default DynamicContentShowcase