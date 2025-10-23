'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const DynamicContentShowcasePage: React.FC = () => {
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
import { Star, Zap, ArrowRight } from 'lucide-react'

interface Feature {
  icon: React.ComponentType<any>title: string</a>;
  description: string;
import React, {useStateuseEffect} from 'react'
import {CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight} from 'lucide-react';
interface Featur e {icon: React.ComponentType<an y>title: stringdescription: string;
  stats?: {
    value: stringlabel: string;
 }[]
}
interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
interface Feature {
  icon: React.ComponentType<any>title: string</a>
  description: string;
  benefits: string[]
}
const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const features: Feature[] = [
interface Testimonia l {id: numbername: stringcompany: stringrole: stringcontent: stringrating: numberavatar: string}
interface Featur e{icon:React.ComponentType<an y>title: stringdescription: stringbenefits: string[]}
constDynamicContentShowcase: React.FC= () => {const [currentIndexsetCurrentIndex] = useState(0)
  const [isPlayingsetIsPlaying] = useState(true)
  constfeatures: Feature[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to automate and optimize your business processes',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  const features = [
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
    <>
      <Helmet>
        <title>DynamicContentShowcase</title>
        <meta name="description" content="Advanced DynamicContentShowcase solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, DynamicContentShowcase, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              DynamicContentShowcase</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced DynamicContentShowcase solution for modern businesses.
            </p>
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.</p>
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how our cutting-edge AI and IT solutions can transform your business</p>p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
              <Play className="w-5 h-5" />
              Start Demo;
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>
              <ArrowRight className="w-5 h-5" />
              Learn More</
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              Learn More</
          </div>
        </div>
{/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{features.map((feature, index) => (</div>
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{benefits.map((benefit, index) => (</div>
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive AI and IT solutions designed to transform your business operations.</p>p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{feature.title}</h3>h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4">{feature.stats.map((stat, statIndex) => (</div>
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Don't just take our word for it. Here's what our satisfied customers have to say about their experience.</p>p>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center">
                <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                <p className="text-xl text-gray-300 mb-8 italic">"{testimonials[currentTestimonial].content}"</p>p>
                <div className="flex justify-center mb-4">{[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (</div>
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name.charAt(0)}</span>span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                    <p className="text-blue-400">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button;
                onClick={prevTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"></button>
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button;
                onClick={togglePlayPause}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"></button>
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <button;
                onClick={nextTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"></button>
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">{testimonials.map((_, index) => (</div>
                <button;
                  key={index}
                  onClick={() =></button> setCurrentIndex(index)}
                  onClick={() =>setCurrentIndex(index)}</button>
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Benefits</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover the advantages that make our solutions the preferred choice for businesses worldwide.</p>p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied customers and start your transformation journey today.</p>p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations</p>
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
                Experience the benefits of cutting-edge AI technology</p>
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
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                <Zap className="w-5 h-5" />
                Get Started Today</button>
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Schedule Demo;
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial</button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DynamicContentShowcasePage;
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default DynamicContentShowcase;
  constfeatures= [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
   },
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      benefits: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency']
   },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      benefits: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '2 4/7 Monitoring']
   },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      benefits: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support']
   }
  ]
  constbenefits= [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '2 4/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  consttestimonials: Testimonial[] = [
    {name: 'Sarah Johnson',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible and have helped us make data-driven decisions that increased our efficiency by300%.',
      rating:5},
    {name: 'Michael Chen',
      role: 'CEO',
content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating:5},
    {name: 'Emily Rodriguez',
company: 'InnovateLab',
      role: 'Product Manager',
      content: 'The best investment we made this year. ROI was evident within the first month, and the support team is absolutely fantastic.',
      rating:5},
    {name: 'David Kim',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Seamless integration with our existing systems. The scalability and performance exceeded our expectations.',
      rating:5}
  ]
  useEffect(() => {if (!isPlaying) return consttimer= setInterval(() => {
  
setCurrentIndex((prev) => (prev + 1) % testimonials.length)
   },4000)
    return () => clearInterval(timer)
  }, [isPlaying, testimonials.length])
  conststats= [
    {icon: Users, value: '10000+', label: 'Happy Customers'},
    {icon: TrendingUp, value: '9 9.9%', label: 'Uptime'},
    {icon: Star, value: '4.9/5', label: 'Rating'},
    {icon: Zap, value: '2 4/7', label: 'Support'}
  ]
  constnextTestimonial= () => {setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
 }
  constprevTestimonial= () => {setCurrentTestimonial((prev) => (prev -1+ testimonials.length) % testimonials.length)
 }
  consttogglePlayPause= () => {setIsPlaying(!isPlaying)
 }
  constcurrentTestimonial= testimonials[currentIndex]
  useEffect(() => {consttimer= setInterval(nextTestimonial500 0)
    return () => clearInterval(timer)
 }, [])
  return (
  <divclassName="bg-gradient-to-br from-slate-900via-purple-900to-slate-900">{/* HeroSection */}
    <sectionclassName="py-20px-4"><divclassName="max-w-7 xlmx-autotext-center"><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6">Transform Your Businesswith<spanclassName="text-transparent bg-clip-text bg-gradient-to-rfrom-blue-400to-purple-400">AISolutions</spa></h><spanclassName="text-xl text-gray-300max-w-3 xlmx-automb-8"></className="text-xl text-gray-300max-w-3 xlmx-automb-8">Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
  return (
  <divclassName="bg-gradient-to-br from-slate-900via-purple-900to-slate-900py-20px-4"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><h2className="text-4 xl font-boldtext-whitemb-6">OurSolutions</h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></className="text-xl text-gray-300max-w-3xlmx-auto">Discover how our cutting-edge AI and IT solutions can transform your business</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 0 to-blue-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-allduration-300transformhover:scale-105"></className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 0 to-blue-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-allduration-300transformhover:scale-105"><PlayclassName="w-5h-5" />Start Demo<spanclassName="inline-flex items-center gap-2 bg-white/10text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20transition-allduration-300"></className="inline-flex items-center gap-2 bg-white/10text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20transition-allduration-300"><ArrowRightclassName="w-5h-5" />Learn More</di></di>{/* FeaturesGrid */}
      <divclassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8mb-16">{features.map((featureindex) => (
         <divkey={index}className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-40 0/50transition-allduration-300"><divclassName="w-1 2 h-12bg-gradient-to-r from-cyan-500to-purple-500rounded-lg flex items-centerjustify-centermb-4"><feature.iconclassName="w-6h-6text-white" /></di><h3className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300">{feature.description}</p></di>))}
      </di>{/* BenefitsSection */}
      <divclassName="bg-white/5 backdrop-blur-lg rounded-xl p-8 borderborder-white/10mb-16"><h3className="text-2 xl font-bold text-whitemb-6text-center">WhyChooseUs?</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-4">{benefits.map((benefitindex) => (
           <divkey={index}className="flexitems-center"><CheckCircleclassName="h-5 w-5text-green-400mr-3flex-shrink-0" /><spanclassName="text-gray-300">{benefit}</spa></di>))}
        </di></di>{/* Testimonials */}
      <divclassName="text-center"><h3className="text-2 xl font-boldtext-whitemb-8">What OurClientsSay</h><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
           <divkey={index}className="bg-white/5 backdrop-blur-lg rounded-xl p-6 borderborder-white/10"><divclassName="flexjustify-centermb-4"><stat.iconclassName="w-8 h-8text-blue-400" /></di><divclassName="text-3 xl font-boldtext-whitemb-2">{stat.value}</di><divclassName="text-gray-300">{stat.label}</di></di>))}
        </di></di></di>{/* FeaturesSection */}
    <sectionclassName="py-20px-4"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">Our<spanclassName="text-transparent bg-clip-text bg-gradient-to-rfrom-blue-400to-purple-400">Solutions</spa></h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></className="text-xl text-gray-300max-w-3xlmx-auto">Comprehensive AI and IT solutions designed to transform your business operations.
          </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{features.map((featureindex) => (
           <divkey={index}className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10transition-allduration-300"><divclassName="w-1 6 h-16bg-gradient-to-r from-blue-500to-purple-500rounded-xl flex items-centerjustify-centermb-4"><feature.iconclassName="w-8h-8text-white" /></di><spanclassName="text-xl font-bold text-white mb-4 group-hover:text-purple-400transition-colors"></className="text-xl font-bold text-white mb-4 group-hover:text-purple-400transition-colors">{feature.title}
              </h><pclassName="text-gray-300mb-6">{feature.description}</p>{feature.stats && (
                <divclassName="gridgrid-cols-3gap-4">{feature.stats.map((statstatIndex) => (
                   <divkey={statIndex}className="text-center"><divclassName="text-lgfont-boldtext-white">{stat.value}</di><divclassName="text-gray-400text-xs">{stat.label}</di></di>))}
                </di>)}
            </di>))}
        </di></di></sectio>{/* TestimonialsSection */}
    <sectionclassName="py-16px-4"><divclassName="max-w-6xlmx-auto"><divclassName="text-centermb-16"><h2className="text-3 xl font-boldtext-whitemb-6">What OurCustomersSay</h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></className="text-xl text-gray-300max-w-3xlmx-auto">Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p></di><divclassName="relative"><divclassName="bg-white/10backdrop-blur-lg rounded-2 xl p-12borderborder-white/20"><divclassName="text-center"><QuoteclassName="w-12h-1 2text-blue-400mx-automb-6" /><spanclassName="text-xltext-gray-300mb-8italic"></className="text-xltext-gray-300mb-8italic">"{testimonials[currentTestimonial].content}"
              </p><divclassName="flexjustify-centermb-4">{[...Array(testimonials[currentTestimonial].rating)].map((_i) => (
                 <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
              </di><blockquoteclassName="text-xl text-gray-300mb-8 max-w-4xlmx-auto">"{currentTestimonial.content}"
              </blockquot><divclassName="flex items-centerjustify-centergap-4"><divclassName="w-1 2 h-12bg-gradient-to-r from-blue-500to-purple-500rounded-full flexitems-centerjustify-center"><spanclassName="text-whitefont-semiboldtext-lg"></className="text-whitefont-semiboldtext-lg">{testimonials[currentTestimonial].name.charAt(0)}
                  </spa></di><divclassName="text-left"><h4className="text-lgfont-semiboldtext-white">{testimonials[currentTestimonial].name}</h><pclassName="text-gray-400">{testimonials[currentTestimonial].role}</p><pclassName="text-blue-400">{testimonials[currentTestimonial].company}</p></di></di></di></di>{/* NavigationControls */}
          <divclassName="flex items-center justify-centergap-4mt-8"><
                onClick={prevTestimonial}
               className="p-3 bg-white/10 hover:bg-white/20text-white rounded-full transition-colorsduration-200"></
                onClick={prevTestimonial}
               className="p-3 bg-white/10 hover:bg-white/20text-white rounded-full transition-colorsduration-200"><ChevronLeftclassName="w-6h-6" /></butto><
                onClick={togglePlayPause}
               className="p-3 bg-white/10 hover:bg-white/20text-white rounded-full transition-colorsduration-200"></
                onClick={togglePlayPause}
               className="p-3 bg-white/10 hover:bg-white/20text-white rounded-full transition-colorsduration-200">{isPlaying?<PauseclassName="w-6h-6" />:<PlayclassName="w-6h-6"/>}
            </butto><
                onClick={nextTestimonial}
               className="p-3 bg-white/10 hover:bg-white/20text-white rounded-full transition-colorsduration-200"></
                onClick={nextTestimonial}
               className="p-3 bg-white/10 hover:bg-white/20text-white rounded-full transition-colorsduration-200"><ChevronRightclassName="w-6h-6" /></butto></di>{/* DotsIndicator */}
          <divclassName="flex justify-centermt-6space-x-2">{testimonials.map((_index) => (
              <
                 key={index}
                  onClick={() =></
                 key={index}
                  onClick={() =>setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200${
                    index=== currentIndex ? 'bg-purple-40 0'  : 'bg-white/3 0'
                }`}
                />
              ))}
          </di></di></di></sectio>{/* BenefitsSection */}
    <sectionclassName="py-20px-4"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><spanclassName="text-4 xl font-boldtext-whitemb-4"></className="text-4 xl font-boldtext-whitemb-4">Key Benefits</h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></className="text-xl text-gray-300max-w-3xlmx-auto">Discover the advantages that make our solutions the preferred choice for businesses worldwide.
          </p></di><divclassName="bg-white/10backdrop-blur-lg rounded-2 xl p-8 borderborder-white/20"><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-6">{benefits.map((benefitindex) => (
             <divkey={index}className="flexitems-startspace-x-3"><CheckCircleclassName="w-5 h-5text-green-400flex-shrink-0mt-1" /><spanclassName="text-gray-300">{benefit}</spa></di>))}
          </di></di></di></sectio>{/* CTASection */}
    <sectionclassName="py-20px-4"><divclassName="max-w-4 xlmx-autotext-center"><divclassName="bg-white/5 backdrop-blur-sm rounded-2 xlp-12"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">Ready to Transform Your Business?
          </h><spanclassName="text-xl text-gray-300mb-8"></spa></className="text-xl text-gray-300mb-8">Join thousands of satisfied customers and start your transformation journey today.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"></spa></className="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"><ZapclassName="w-5h-5" />Get Started Today</butto><spanclassName="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"></spa></className="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105">Schedule Demo</di></di></di></sectio></di>)
}
export defaultDynamicContentShowcase</butto></butto></butto></butto></sectio></an></di>
  )
};
export default DynamicContentShowcase;