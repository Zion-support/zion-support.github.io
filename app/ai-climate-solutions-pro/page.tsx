'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Cloud, BarChart, Globe, Zap, Shield } from 'lucide-react'

const AiClimateSolutionsProPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Advanced Climate Modeling',
      description: 'State-of-the-art climate models powered by AI and machine learning.',
      benefits: ['High-resolution modeling', 'Long-term projections', 'Scenario analysis', 'Uncertainty quantification']
    },
    {
      icon: BarChart,
      title: 'Comprehensive Analytics',
      description: 'Deep analytics and insights into climate patterns and trends.',
      benefits: ['Pattern recognition', 'Trend analysis', 'Statistical modeling', 'Data visualization']
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Monitor and analyze climate conditions across the entire globe.',
      benefits: ['Global monitoring', 'Regional analysis', 'Satellite integration', 'Multi-scale modeling']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process massive climate datasets in real-time for immediate insights.',
      benefits: ['Real-time analysis', 'High-speed processing', 'Parallel computing', 'Scalable infrastructure']
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive climate risk assessment and mitigation strategies.',
      benefits: ['Risk modeling', 'Impact assessment', 'Adaptation planning', 'Policy support']
    }
  ]

  const benefits = [
    'Improve climate prediction accuracy by 40%',
    'Enable better climate adaptation strategies',
    'Support evidence-based policy making',
    'Reduce climate-related economic losses',
    'Enhance environmental monitoring capabilities',
    'Accelerate climate research and innovation'
  ]

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group</title>
        <meta name="description" content="Professional-grade AI climate solutions for advanced climate modeling, analysis, and environmental monitoring." />
        <meta name="keywords" content="AI climate solutions, climate modeling, environmental monitoring, climate analytics, climate adaptation" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Climate
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional-grade AI climate solutions for advanced climate modeling, analysis, and environmental monitoring. 
              The most comprehensive climate intelligence platform available.
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
              <h2 className="text-4xl font-bold text-white mb-4">
                Professional Climate Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced tools for professional climate analysis and modeling
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Pro Solutions?
              </h2>
              <p className="text-xl text-gray-300">
                Professional-grade results that drive climate success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for Professional Climate Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your professional climate needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AiClimateSolutionsProPage