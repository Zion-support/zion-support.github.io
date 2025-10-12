'use client'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Users, Heart, Star, Target } from 'lucide-react'

interface UserExperienceEnhancerProps {
  children: React.ReactNode
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ children }) => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // UX enhancement logic
    const enhanceUX = () => {
      // Add smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth'
      
      // Add loading states for interactive elements
      const interactiveElements = document.querySelectorAll('button, a, input')
      interactiveElements.forEach((element, index) => {
        element.addEventListener('click', () => {
          setLoadingStates(prev => ({ ...prev, [index]: true }))
          setTimeout(() => {
            setLoadingStates(prev => ({ ...prev, [index]: false }))
          }, 1000)
        })
      })

      // Add focus indicators
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }
        .smooth-transition {
          transition: all 0.3s ease-in-out;
        }
      `
      document.head.appendChild(style)
    }

    enhanceUX()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
      </Helmet>
      {children}
    </>
  )
}

// UX Features Component
export const UXFeatures: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'User-Centered Design',
      description: 'Design solutions focused on user needs and preferences'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Emotional Design',
      description: 'Create emotional connections through thoughtful design'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Accessibility First',
      description: 'Ensure your app is accessible to all users'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Performance Optimization',
      description: 'Optimize for speed and smooth interactions'
    }
  ]

  const uxPrinciples = [
    'User research and testing',
    'Intuitive navigation design',
    'Consistent visual hierarchy',
    'Responsive design patterns',
    'Accessibility compliance',
    'Performance optimization',
    'Error handling and feedback',
    'Loading state management'
  ]

  const benefits = [
    'Higher user satisfaction',
    'Increased engagement',
    'Better conversion rates',
    'Reduced bounce rates',
    'Improved accessibility',
    'Enhanced brand perception',
    'Lower support costs',
    'Competitive advantage'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>User Experience Enhancer - Zion Tech Group</title>
        <meta name="description" content="Advanced UX enhancement solutions by Zion Tech Group. Improve user experience and engagement." />
        <meta name="keywords" content="UX enhancement, user experience, UI/UX design, accessibility, performance optimization, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              User Experience Enhancer
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your user experience with our advanced UX enhancement solutions. 
              Create engaging, accessible, and performant digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Enhance UX
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              UX Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive user experience enhancement tools and strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UX Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              UX Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven principles for exceptional user experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uxPrinciples.map((principle, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              UX Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable improvements that drive business success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Enhance Your UX?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start improving your user experience today and see immediate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start UX Audit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserExperienceEnhancer