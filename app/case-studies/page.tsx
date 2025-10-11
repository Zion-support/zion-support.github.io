import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Optimization',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'AI-powered recommendation engine and personalized shopping experience',
      results: [
        '300% increase in conversion rates',
        '45% reduction in cart abandonment',
        '$2.5M additional revenue in 6 months'
      ],
      image: '🛒'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and treatment recommendations',
      solution: 'Machine learning algorithms for predictive analytics and treatment optimization',
      results: [
        '60% faster diagnosis times',
        '35% improvement in treatment outcomes',
        '40% reduction in operational costs'
      ],
      image: '🏥'
    },
    {
      id: 3,
      title: 'Financial Risk Management',
      company: 'SecureBank Ltd.',
      industry: 'Finance',
      challenge: 'Manual fraud detection processes and high false positive rates',
      solution: 'AI-powered fraud detection system with real-time monitoring',
      results: [
        '85% reduction in false positives',
        '90% faster fraud detection',
        '$10M saved in prevented fraud'
      ],
      image: '💰'
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
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative AI and IT solutions.
            </p>
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
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.company}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-300">
                            <TrendingUp className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                    Read Full Case Study
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
                
                <div className={`bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-8xl mb-6">{study.image}</div>
                    <h4 className="text-2xl font-bold text-white mb-4">{study.company}</h4>
                    <p className="text-gray-300">{study.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-gray-300">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
              <p className="text-gray-300">Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage