import React from 'react'

import { ArrowLeft } from 'lucide-react'
import { CheckCircle, TrendingUp, Helmet } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
import {ArrowLeft, CheckCircle, TrendingUp, Helmet} from 'lucide-react';;
constCaseStudiesPage: React.FC= () =>{constcaseStudies= [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'AI-powered personalization and dynamic pricing optimization',
      results: {
        roi: '34 0%',
        conversion: '+8 5%',
        costReduction: '-6 5%',
        revenue: '+$2.3 M'
     },
      image: '🛒',
      description: 'Transformed a struggling e-commerce platform using AI-driven personalization and dynamic pricing strategies.'
    },
    {id: 2,
      title: 'Financial Services Automation',
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'AI-powered do cument processing and risk assessment automation',
      results: {
        roi: '28 0%',
        processingTime: '-8 0%',
        accuracy: '+9 5%',
        costSavings: '$1.8 M'
     },
      image: '🏦',
      description: 'Automated complex financial processes using advanced AI algorithms for do cument processing and risk assessment.'
    },
    {id: 3,
      title: 'Healthcare Data Analytics',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'AI-powered data integration and predictive analytics for treatment optimization',
      results: {
        roi: '42 0%',
        patientOutcomes: '+7 0%',
        efficiency: '+9 0%',
        costSavings: '$3.2 M'
     },
      image: '🏥',
      description: 'Revolutionized healthcare data management with AI-driven analytics and predictive treatment models.'
    },
    {id: 4,
      title: 'Manufacturing Optimization',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'AI-powered predictive maintenance and quality control automation',
      results: {
        roi: '31 0%',
        efficiency: '+7 5%',
        defects: '-9 0%',
        do wntime: '-8 5%'
     },
      image: '🏭',
      description: 'Optimized manufacturing processes using AI for predictive maintenance and automated quality control.'
    }
  ]
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our successful AI implementation case studies. See how we've helped companies achieve 300%+ ROI with our AI solutions.&quot; />
      </Helmet>
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&quot;></div>
        {/* Header */}
        <header className=&quot;bg-white shadow-sm border-b&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4&quot;></div>
            <a href=&quot;/&quot; className=&quot;inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200&quot;>
              <ArrowLeft className=&quot;w-4 h-4 mr-2&quot; />
              Back to Home
            </a>
          </div>
        </header>
        {/* Hero Section */}
        <section className=&quot;py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
                Success Stories
              </h1>
              <p className=&quot;text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto&quot;>
                Real results from real companies using our AI solutions
              </p>
              <p className=&quot;text-lg mb-8 text-gray-300 max-w-4xl mx-auto&quot;>
                Discover how leading companies across industries have transformed their operations
                and achieved remarkable ROI with our cutting-edge AI technology.
              </p>
            </div>
          </div>
        </section>
        {/* Case Studies Grid */}
        <section className=&quot;py-16&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;></div>
              {caseStudies.map((study) => (
                <div key={study.id} className=&quot;bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200&quot;></div>
                  <div className=&quot;p-8&quot;></div>
                    <div className=&quot;flex items-center mb-4&quot;></div>
                      <div className=&quot;text-4xl mr-4&quot;>{study.image}</div>
                      <div></div>
                        <h3 className=&quot;text-2xl font-bold text-gray-900 mb-1&quot;>{study.title}</h3>
                        <p className=&quot;text-blue-600 font-semibold&quot;>{study.company}</p>
                        <p className=&quot;text-gray-500 text-sm&quot;>{study.industry}</p>
                      </div>
                    </div>
                    <p className=&quot;text-gray-600 mb-6&quot;>{study.description}</p>
                    <div className=&quot;mb-6&quot;></div>
                      <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Challenge:</h4>
                      <p className=&quot;text-gray-600 text-sm&quot;>{study.challenge}</p>
                    </div>
                    <div className=&quot;mb-6&quot;></div>
                      <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Solution:</h4>
                      <p className=&quot;text-gray-600 text-sm&quot;>{study.solution}</p>
                    </div>
                    <div className=&quot;mb-6&quot;></div>
                      <h4 className=&quot;font-semibold text-gray-900 mb-4&quot;>Results:</h4>
                      <div className=&quot;grid grid-cols-2 gap-4&quot;></div>
                        <div className=&quot;text-center p-3 bg-green-50 rounded-lg&quot;></div>
                          <div className=&quot;text-2xl font-bold text-green-600&quot;>{study.results.roi}</div>
                          <div className=&quot;text-sm text-gray-600&quot;>ROI</div>
                        </div>
                        <div className=&quot;text-center p-3 bg-blue-50 rounded-lg&quot;></div>
                          <div className=&quot;text-2xl font-bold text-blue-600&quot;></div>
                            {Object.values(study.results)[1]}
                          </div>
                          <div className=&quot;text-sm text-gray-600&quot;></div>
                            {Object.keys(study.results)[1].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=&quot;flex items-center justify-between&quot;></div>
                      <a href=&quot;/contact&quot;
                        className=&quot;bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200&quot;
                      >
                        Learn More
                      </a>
                      <div className=&quot;flex items-center text-green-600&quot;></div>
                        <CheckCircle className=&quot;w-4 h-4 mr-1&quot; />
                        <span className=&quot;text-sm font-semibold&quot;>Verified Results</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Proven Track Record
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Our AI solutions deliver consistent, measurable results
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8&quot;></div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;text-4xl font-bold text-blue-600 mb-2&quot;>300%+</div>
                <div className=&quot;text-gray-600&quot;>Average ROI</div>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;text-4xl font-bold text-green-600 mb-2&quot;>150+</div>
                <div className=&quot;text-gray-600&quot;>Projects Completed</div>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;text-4xl font-bold text-purple-600 mb-2&quot;>95%</div>
                <div className=&quot;text-gray-600&quot;>Client Satisfaction</div>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;text-4xl font-bold text-orange-600 mb-2&quot;>$50M+</div>
                <div className=&quot;text-gray-600&quot;>Cost Savings Generated</div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Ready to Create Your Success Story?
            </h2>
            <p className=&quot;text-xl mb-8 text-blue-100&quot;>
              Join the companies that have transformed their business with our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a href=&quot;/contact&quot;
                className=&quot;bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center&quot;
              >
                Start Your Project
                <TrendingUp className=&quot;w-4 h-4 ml-2&quot; />
              </a>
              <a href=&quot;/services&quot;
                className=&quot;border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200&quot;
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default CaseStudiesPage
