<<<<<<< HEAD
'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

interface CarouselItem {
  id: number
  title: string
  description: string
  image: string
  category: string
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Revolutionary AI technology that transforms your business operations.',
      image: '/images/ai-solutions.jpg',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analytics and insights for better decision making.',
      image: '/images/analytics.jpg',
      category: 'Analytics'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      image: '/images/cloud.jpg',
      category: 'Infrastructure'
    },
    {
      id: 4,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services for your organization.',
      image: '/images/digital.jpg',
      category: 'Transformation'
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, carouselItems.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

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
        <title>Content Carousel</title>
        <meta name="description" content="Advanced Content Carousel solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, content carousel, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Content Carousel
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced Content Carousel solution for modern businesses.
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

        {/* Carousel Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Content</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our latest solutions and innovations
              </p>
            </div>
            
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {carouselItems.map((item) => (
                    <div key={item.id} className="w-full flex-shrink-0">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            <div className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                              {item.category}
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-300 text-lg mb-6">{item.description}</p>
                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center">
                              Learn More
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                          </div>
                          <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-lg h-64 flex items-center justify-center">
                            <div className="text-6xl text-emerald-400">📊</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-emerald-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful features designed to transform your business operations
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven content management
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ContentCarousel
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4da8
