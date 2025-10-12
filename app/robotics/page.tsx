'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, Brain, Zap, Shield, Globe, CheckCircle, Phone, Mail, MapPin, Cpu, Settings, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const RoboticsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Robotics',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Robotics Solutions - Zion Tech Group"
        description="Advanced robotics solutions powered by AI. Contact us at +1 302 464 0950"
        keywords="robotics, AI robotics, automation, industrial robotics"
      />
      
      <Navigation />
      
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Robotics
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Advanced robotics solutions powered by AI technology for industrial and commercial applications.
          </p>
          <Link 
            to="/contact" 
            className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Robotics Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge robotics technology designed for modern businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RoboticsPage
