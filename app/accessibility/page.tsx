'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'WCAG 2.1 AA Compliance',
      description: 'Full compliance with Web Content Accessibility Guidelines for inclusive design.',
      benefits: ['Screen reader support', 'Keyboard navigation', 'Color contrast optimization', 'Text alternatives']
    },
    {
      icon: Users,
      title: 'Inclusive Design',
      description: 'Design solutions that work for users with diverse abilities and needs.',
      benefits: ['Universal design principles', 'Multi-modal interfaces', 'Adaptive layouts', 'User testing']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast, responsive designs that work across all devices and assistive technologies.',
      benefits: ['Fast loading times', 'Mobile optimization', 'Cross-browser compatibility', 'Assistive tech support']
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored accessibility solutions for your specific business needs.',
      benefits: ['Custom implementations', 'Ongoing support', 'Training programs', 'Compliance monitoring']
    }
  ]

  const benefits = [
    
    'Reach 15% more users with disabilities',
    'Improve SEO rankings with accessible content',
    'Reduce legal compliance risks',
    'Enhance user experience for all users',
    'Future-proof your digital presence'
  
  ];

  return (
    <>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive accessibility solutions for inclusive digital experiences. WCAG 2.1 AA compliant designs." />
        <meta name="keywords" content="accessibility, web accessibility, inclusive design, WCAG, AI solutions" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive accessibility solutions for inclusive digital experiences that work for everyone, regardless of ability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Accessibility Features</h2>
              <p className="text-lg text-gray-300">Comprehensive accessibility solutions for inclusive design</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2 text-left">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Accessibility Matters</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Accessible design benefits everyone and opens your business to a wider audience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-white text-lg">{benefit}</span>
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

export default AccessibilityPage