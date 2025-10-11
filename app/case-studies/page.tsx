import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '300% increase in conversion rates',
        '45% reduction in cart abandonment',
        '250% increase in average order value',
        '60% improvement in customer satisfaction'
      ],
      duration: '6 months',
      team: '8 developers',
      image: '/images/case-study-1.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'Built comprehensive AI-powered analytics platform for patient data integration',
      results: [
        '40% faster diagnosis times',
        '35% reduction in treatment costs',
        '90% improvement in data accuracy',
        '50% increase in patient outcomes'
      ],
      duration: '8 months',
      team: '12 developers',
      image: '/images/case-study-2.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes and production inefficiencies',
      solution: 'Deployed AI-powered computer vision system for automated quality control',
      results: [
        '70% reduction in defects',
        '50% increase in production speed',
        '80% reduction in manual inspection time',
        '25% decrease in operational costs'
      ],
      duration: '4 months',
      team: '6 developers',
      image: '/images/case-study-3.jpg'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '300%', label: 'Average ROI' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />
      </Helmet>

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
                Discover how we've helped businesses transform their operations and achieve remarkable results through innovative AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.duration}</span>
                        <span className="text-gray-400 text-sm">{study.team}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <TrendingUp className="w-16 h-16 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Key Metrics</h4>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">300%</div>
                            <div className="text-sm text-gray-300">ROI Increase</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">50%</div>
                            <div className="text-sm text-gray-300">Cost Reduction</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">90%</div>
                            <div className="text-sm text-gray-300">Efficiency Gain</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                            <div className="text-sm text-gray-300">Support</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default CaseStudiesPage