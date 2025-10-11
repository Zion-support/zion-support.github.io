'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Clock } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor user experience',
      solution: 'Implemented AI-powered recommendation engine and optimized checkout process',
      results: [
        '300% increase in conversion rates',
        '50% reduction in cart abandonment',
        '40% increase in average order value'
      ],
      duration: '3 months',
      team: '5 developers',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and reporting',
      solution: 'Built custom AI analytics platform with predictive modeling',
      results: [
        '60% faster diagnosis times',
        '35% reduction in operational costs',
        '90% improvement in data accuracy'
      ],
      duration: '6 months',
      team: '8 developers',
      featured: false
    },
    {
      id: 3,
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays',
      solution: 'Deployed computer vision AI for automated quality inspection',
      results: [
        '80% reduction in inspection time',
        '95% accuracy in defect detection',
        '25% increase in production efficiency'
      ],
      duration: '4 months',
      team: '6 developers',
      featured: false
    }
  ]

  const stats = [
    { icon: TrendingUp, label: 'Average ROI', value: '300%' },
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: Clock, label: 'Project Duration', value: '3-6 months' },
    { icon: DollarSign, label: 'Cost Savings', value: '40%' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real projects, real results, real impact
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  study.featured ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {study.featured && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-cyan-400 font-semibold">Featured Case Study</span>
                  </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <ul className="space-y-3 mb-6">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white ml-2">{study.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Team:</span>
                        <span className="text-white ml-2">{study.team}</span>
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage