import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Brain, Shield, Zap, Users, Target, ArrowRight } from 'lucide-react'
import PerformanceMonitor from './components/PerformanceMonitor'
function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for modern businesses",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline operations with intelligent automation systems",
    },
    {
      icon: Users,
      title: "IT Services",
      description: "Comprehensive IT support and infrastructure management",
    },
    {
      icon: Target,
      title: "Digital Transformation",
      description: "Transform your business with innovative digital solutions",
    }
  ]
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Leading Technology Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technologysolutions, AI services, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="technology solutions, AI services, cloud computing, digital transformation, software development" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Advanced AI and IT Solutions for the Digital Future
            </p>
            <div className="flex flex-colSm: flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center border-2 border-purple-500 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you implement cutting-edge solutions
            </p>
          </div>
        
          {/* Matrix Rain Effect */}
          <div className="matrix-rain"></div>
          
          <div className="md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">AI & Machine Learning</h3>
              <p className="text-blue-700">Advanced AI solutions to automate and optimize your business processes.</p>
            </div>
            
            <div className="grid,
  md:grid-cols-2,
  lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg,
  hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Advanced artificial intelligence services including machine learning, 
                  natural language processing, and computer vision.
                </p>
                <button className="text-blue-600 font-semibold,
  hover:text-blue-700 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can drive your success.
          </p>
          <Link 
            to="/contact" 
            className="bg-purple-600Hover: bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
