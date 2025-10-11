import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment rate',
      solution: 'AI-powered recommendation engine and modern cloud architecture',
      results: [
        '60% reduction in cart abandonment',
        '35% increase in conversion rate',
        '50% improvement in page load speed'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Manual data processing taking 20+ hours per week',
      solution: 'AI-driven data processing and predictive analytics platform',
      results: [
        '90% reduction in processing time',
        'Real-time insights and reporting',
        'Improved patient care outcomes'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Manufacturing Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control causing 15% defect rate',
      solution: 'Computer vision AI for automated quality inspection',
      results: [
        '80% reduction in defect rate',
        '24/7 automated inspection',
        '30% increase in production efficiency'
      ],
      image: '/api/placeholder/600/400'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Discover how Zion Tech Group has helped businesses transform their operations with AI and IT solutions. Real success stories and measurable results." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, business results" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
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

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-blue-400 font-semibold">{study.company}</p>
                    <p className="text-gray-400 text-sm">{study.industry}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge: </h4>
                    <p className="text-gray-400 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution: </h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Results: </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default CaseStudiesPage