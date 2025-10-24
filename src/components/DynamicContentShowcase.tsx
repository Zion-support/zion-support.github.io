'use client';
:all-pages-backup/components/DynamicContentShowcase.tsx
import React from "react";
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';

interface Testimonial {


  id: number,
  name: string,
  company: string,
  content: string,
  rating: number
  avatar?: string}
}
;
const DynamicContentShowcase: React.FC = () => {;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [;
    {
:all-pages-backup/components/DynamicContentShowcase.tsx
      i,
  d: 1,
  name: name,
  company: company,
  content: content,
  rating: 5,
    }
    {
      id: 2,
  name: name,
  company: company,
  content: content,
  rating: 5,
    }
    {
      id: 3,
  name: name,
  company: company,
  content: content,
  rating: 5
      id: 1
      nam,
  e: "Sarah Johnson",
      company: "TechCorp",
      content: "Zion Tech Group transformed our AI capabilities. Their solutions increased our operational efficiency by 40%.",
      rating: 5,
    }
    {
      id: 2
      nam,
  e: "Michael Chen",
      company: "InnovateLab",
      content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.",
      rating: 5,
    }
    {
      id: 3
      nam,
  e: "Emily Rodriguez",
      company: "StartupXYZ",
      content: "The micro SaaS solutions they provided helped us scale faster than we ever imagined possible.",
      rating: 5,
    }
  ]

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {;
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval);
  }, [testimonials.length])

  const features = [
    {
:all-pages-backup/components/DynamicContentShowcase.tsx
      icon: <Brain className="h-8 w-8" />
      titl,
  e: title,
  description: description,
  color: "from-blue-500 to-cyan-500",
    },
  {</Brain>
    icon: <Shield className="h-8 w-8" />
      titl,
  e: title,
  description: description,
  color: "from-green-500 to-emerald-500",
    },
  {</Shield>
    icon: <Zap className="h-8 w-8" />
      titl,
  e: title,
  description: description,
  color: "from-purple-500 to-pink-500";
    };
  ];
;</Zap>
      icon: <Brain className = "h-8w-8" />
      titl,
  e: "AI-Powered Solutions",
      description: "Advanced artificial intelligence to transform your business operations",
      color: "from-blue-500 to-cyan-500",
    },
  {</Brain>
    icon: <Shield className="h-8w-8" />
      titl,
  e: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      color: "from-green-500 to-emerald-500",
    },
  {</Shield>
    icon: <Zap className="h-8w-8" />
      titl,
  e: "Automation",
      description: "Streamline processes and increase efficiency with smart automation",
      color: "from-purple-500 to-pink-500",
    }
  ]
;
  return (;</Zap>
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1>
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions</span>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-4xl font-bold text-white mb-6">Our Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how our cutting-edge AI and IT solutions can transform your business</p>p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
              <Play className="w-5 h-5" />
              Start Demo</Play>
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hove,
  r:bg-white/20 transition-all duration-300"></button>
              <ArrowRight className="w-5 h-5" />
              Learn More</ArrowRight>
        </div>
{/* Features Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 l,
  g: grid-cols-4 gap-8 mb-16">{features.map((feature, index) => (</div>
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover: border-cyan-400/50 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>
                <feature.icon className="w-6 h-6 text-white" /></feature>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
          ))}
        </div>
        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16"></div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md: grid-cols-2 l,
  g: grid-cols-4 gap-4">{benefits.map((benefit, index) => (</div>
              <div key={index} className="flex items-center"></div>
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                <span className="text-gray-300">{benefit}</span>
            ))}
          </div>
        {/* Testimonials */}
        <div className="text-center"></div>
          <h3 className="text-2xl font-bold text-white mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"></div>
                <div className="flex justify-center mb-4"></div>
                  <stat.icon className="w-8 h-8 text-blue-400" /></stat>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
            </div>
        </div>
      {/* Features Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive AI and IT solutions designed to transform your business operations.</p>p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 l,
  g: grid-cols-4 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover: bg-white/10 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-8 h-8 text-white" /></feature>
                <h3 className="text-xl font-bold text-white mb-4 group-hove,
  r:text-purple-400 transition-colors">$3</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4">{feature.stats.map((stat, statIndex) => (</div>
                      <div key={statIndex} className="text-center"></div>
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-6xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Don&apos;t just take our word for it. Here's what our satisfied customers have to say about their experience.</p>p>
          </div>
          <div className="relative"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></div>
              <div className="text-center"></div>
                <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" /></Quote>
                <p className="text-xl text-gray-300 mb-8 italic">&quot;{testimonials[currentTestimonial].content}&quot;</p>p>
                <div className="flex justify-center mb-4">{[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (</div>
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}</Star>
                <blockquote className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  &quot;{currentTestimonial.content}&quot</blockquote>
                <div className="flex items-center justify-center gap-4"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"></div>
                    <span className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name.charAt(0)}</span>span>
                  </div>
                  <div className="text-left"></div>
                    <h4 className="text-lg font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                    <p className="text-blue-400">{testimonials[currentTestimonial].company}</p>
                </div>
            </div>
            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8"></div>
              <button onClick = {prevTestimonial};></button>
                className="p-3 bg-white/10 hover: bg-white/20 text-white rounded-full transition-colors duration-200"></button>
                <ChevronLeft className="w-6 h-6" /></ChevronLeft>
              <button ,>
                onClick = {togglePlayPause}</button>;
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"></button>
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}</Play>
              <button onClick = {nextTestimonial};></button>
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"></button>
                <ChevronRight className="w-6 h-6" /></ChevronRight>
            </div>
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">{testimonials.map((_, index) => (</div>
                <button key = {index}></button>
                  onClick={() =></button> setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
        </div>
      {/* Benefits Section */};
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover the advantages that make our solutions the preferred choice for businesses worldwide.</p>p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>
            <div className="grid grid-cols-1 md: grid-cols-2 l,
  g: grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="flex items-start space-x-3"></div>
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" /></CheckCircle>
                  <span className="text-gray-300">{benefit}</span>
              ))}
            </div>
        </div>
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12"></div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied customers and start your transformation journey today.</p>p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started</button>
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r: text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More</button>
            </div>
        </section>,
,
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations</p>
            </div>
            <div className="grid md: grid-cols-2 l,
  g: grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" /></feature>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (</ul>
                      <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}</CheckCircle>
                    ))}
                  </ul>
              ))}
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology</p>
            </div>
            <div className="grid md: grid-cols-2 l,
  g: grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" /></CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                <Zap className="w-5 h-5" />
                Get Started Today</Zap>
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hove,
  r: scale-105"></button>
                Schedule Demo
            </div>
        </div>
    </div>,
  ),
}

export default DynamicContentShowcase