import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'Tech Retail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        { metric: 'Conversion Rate', value: '+45%', icon: TrendingUp },
        { metric: 'Cart Abandonment', value: '-30%', icon: TrendingUp },
        { metric: 'Customer Satisfaction', value: '+60%', icon: Users },
        { metric: 'Implementation Time', value: '3 months', icon: Clock }
      ],
      description: 'We helped Tech Retail Inc. transform their e-commerce platform with AI-powered personalization, resulting in significant improvements in conversion rates and customer satisfaction.'
    },
    {
      title: 'Manufacturing Process Automation',
      client: 'Auto Parts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays and errors',
      solution: 'Deployed computer vision and machine learning for automated quality inspection',
      results: [
        { metric: 'Quality Accuracy', value: '+95%', icon: TrendingUp },
        { metric: 'Processing Time', value: '-70%', icon: Clock },
        { metric: 'Cost Savings', value: '$2M annually', icon: DollarSign },
        { metric: 'Error Reduction', value: '-85%', icon: TrendingUp }
      ],
      description: 'Our AI-powered quality control system revolutionized the manufacturing process, dramatically improving accuracy and efficiency while reducing costs.'
    },
    {
      title: 'Healthcare Data Analytics',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and treatment optimization',
      solution: 'Developed comprehensive AI analytics platform for patient care optimization',
      results: [
        { metric: 'Diagnosis Accuracy', value: '+40%', icon: TrendingUp },
        { metric: 'Treatment Time', value: '-25%', icon: Clock },
        { metric: 'Patient Outcomes', value: '+35%', icon: Users },
        { metric: 'Cost Reduction', value: '$1.5M annually', icon: DollarSign }
      ],
      description: 'Our healthcare AI platform enabled data-driven decision making, improving patient outcomes and operational efficiency.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies across various industries." />
        <meta name="keywords" content="case studies, AI implementation, success stories, client results, technology solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                View All Studies
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Study Info */}
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.client}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-gray-300 mb-6">{study.description}</p>
                      
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

                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-6">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => {
                          const Icon = result.icon
                          return (
                            <div key={resultIndex} className="bg-slate-700/50 rounded-lg p-4 text-center">
                              <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                              <div className="text-sm text-gray-400">{result.metric}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let us help you achieve similar results with our proven AI and IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudiesPage