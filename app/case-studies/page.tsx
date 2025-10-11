'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  image: string
  duration: string
  team: string
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service volume with long response times and inconsistent quality.',
      solution: 'Implemented AI chatbot system with natural language processing and automated ticket routing.',
      results: [
        '75% reduction in response time',
        '90% customer satisfaction rate',
        '60% cost savings on support staff',
        '24/7 availability'
      ],
      image: '/api/placeholder/600/400',
      duration: '3 months',
      team: '5 specialists'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration',
      client: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Outdated on-premise infrastructure causing scalability and security issues.',
      solution: 'Complete migration to AWS with hybrid cloud architecture and enhanced security protocols.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Enhanced security compliance',
        'Improved scalability'
      ],
      image: '/api/placeholder/600/400',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '3',
      title: 'Predictive Analytics for Supply Chain',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Inefficient inventory management leading to stockouts and overstock situations.',
      solution: 'Deployed AI-powered predictive analytics system for demand forecasting and inventory optimization.',
      results: [
        '30% reduction in inventory costs',
        '25% improvement in stock accuracy',
        '40% reduction in stockouts',
        '15% increase in revenue'
      ],
      image: '/api/placeholder/600/400',
      duration: '4 months',
      team: '6 specialists'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-world success stories showcasing how we've helped businesses transform with AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.client}</h3>
                      <p className="text-gray-400">{study.industry}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-white font-semibold">{study.duration}</p>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4">{study.title}</h4>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h5>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h5>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-cyan-400 mb-3">Results</h5>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </div>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage