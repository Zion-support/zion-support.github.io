import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Building, Wifi, Cpu, Database } from 'lucide-react'

const SmartCityInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: <Building className="w-8 h-8 text-cyan-400" />,
      title: 'Smart Buildings',
      description: 'Intelligent building management systems with IoT sensors and automated controls.'
    },
    {
      icon: <Wifi className="w-8 h-8 text-emerald-400" />,
      title: 'Connected Infrastructure',
      description: 'Seamless connectivity across all city infrastructure components.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics and machine learning for intelligent city management.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Data Integration',
      description: 'Comprehensive data integration from multiple city systems and sensors.'
    }
  ]

  const benefits = [
    'Smart traffic management',
    'Energy efficiency optimization',
    'Environmental monitoring',
    'Public safety enhancement',
    'Citizen engagement platforms',
    'Resource optimization',
    'Predictive maintenance',
    'Real-time monitoring'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Smart City Infrastructure Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional smart city infrastructure solutions by Zion Tech Group. Advanced AI and IoT for modern cities." />
        <link rel="canonical" href="https://ziontechgroup.com/smart-city-infrastructure" />
      </Helmet>
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building className="w-4 h-4" />
            <span>Smart City Infrastructure</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Smart City <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional smart city infrastructure solutions with AI-powered analytics, 
            IoT connectivity, and intelligent management systems for modern cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for smart city infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Smart City Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive smart city infrastructure solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Smart Cities?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's help you implement advanced smart city infrastructure solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SmartCityInfrastructurePage