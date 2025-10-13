import React from 'react'.

import Link from 'next/link'.
import React, { ArrowLeft, TrendingUp, CheckCircle } from 'lucide-react'.
const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'AI-powered personalization and dynamic pricing optimization',
      results: {
        roi: '340%',
        conversion: '+85%',
        costReduction: '-65%',
        revenue: '+$2.3M'
      },
      image: '🛒',
      description: 'Transformed a struggling e-commerce platform using AI-driven personalization and dynamic pricing strategies.'
    },
    {
      id: 2,
      title: 'Financial Services Automation',
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'AI-powered document processing and risk assessment automation',
      results: {
        roi: '280%',
        processingTime: '-80%',
        accuracy: '+95%',
        costSavings: '$1.8M'
      },
      image: '🏦',
      description: 'Automated complex financial processes using advanced AI algorithms for document processing and risk assessment.'
    },
    {
      id: 3,
      title: 'Healthcare Data Analytics',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'AI-powered data integration and predictive analytics for treatment optimization',
      results: {
        roi: '420%',
        patientOutcomes: '+70%',
        efficiency: '+90%',
        costSavings: '$3.2M'
      },
      image: '🏥',
      description: 'Revolutionized healthcare data management with AI-driven analytics and predictive treatment models.'
    },
    {
      id: 4,
      title: 'Manufacturing Optimization',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'AI-powered predictive maintenance and quality control automation',
      results: {
        roi: '310%',
        efficiency: '+75%',
        defects: '-90%',
        downtime: '-85%'
      },
      image: '🏭',
      description: 'Optimized manufacturing processes using AI for predictive maintenance and automated quality control.'
    }
  ];
  return (
    <div>
  )
    </div>
  ).
  ).
  )
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">"
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">"
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home.
            </Link>
          </div>
        </header>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center">"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories.
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Real results from real companies using our AI solutions.
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
                Discover how leading companies across industries have transformed their operations .
                and achieved remarkable ROI with our cutting-edge AI technology.
              </p>
            </div>
          </div>
        </section>
        {/* Case Studies Grid */}
        <section className="py-16">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">"
                  <div className="p-8">"
                    <div className="flex items-center mb-4">"
                      <div className="text-4xl mr-4">{study.image}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{study.title}</h3>"
                        <p className="text-blue-600 font-semibold">{study.company}</p>"
                        <p className="text-gray-500 text-sm">{study.industry}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{study.description}</p>"
                    <div className="mb-6">"
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>"
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div className="mb-6">"
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>"
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div className="mb-6">"
                      <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>"
                      <div className="grid grid-cols-2 gap-4">"
                        <div className="text-center p-3 bg-green-50 rounded-lg">"
                          <div className="text-2xl font-bold text-green-600">{study.results.roi}</div>"
                          <div className="text-sm text-gray-600">ROI</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">"
                          <div className="text-2xl font-bold text-blue-600">
                            {Object.values(study.results)[1]}
                          </div>
                          <div className="text-sm text-gray-600">"
                            {Object.keys(study.results)[1].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link 
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        Learn More.
                      </Link>
                      <div className="flex items-center text-green-600">"
                        <CheckCircle className="w-4 h-4 mr-1" />"
                        <span className="text-sm font-semibold">Verified Results</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-16 bg-white">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-12">"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proven Track Record.
              </h2>
              <p className="text-xl text-gray-600">
                Our AI solutions deliver consistent, measurable results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
              <div className="text-center">"
                <div className="text-4xl font-bold text-blue-600 mb-2">300%+</div>"
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div className="text-center">"
                <div className="text-4xl font-bold text-green-600 mb-2">150+</div>"
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">"
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>"
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">"
                <div className="text-4xl font-bold text-orange-600 mb-2">$50M+</div>"
                <div className="text-gray-600">Cost Savings Generated</div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join the companies that have transformed their business with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Start Your Project
                <TrendingUp className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Our Services.
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div.
                key={study.id}
                className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">"
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {study.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{study.title}</h3>"
                    <p className="text-cyan-400 font-semibold">{study.client}</p>
                  </div>
                </div>

                <div className="mb-4">"
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-1">Challenge:</h4>"
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-1">Solution:</h4>"
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-4">"
                  <h4 className="text-gray-300 font-semibold mb-2">Results:</h4>"
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="text-green-400 text-sm flex items-center">"
                        <Award className="w-4 h-4 mr-2 text-green-500" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">"
                  <h4 className="text-gray-300 font-semibold mb-2">Technologies:</h4>"
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span.
                        key={index}
                        className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">"
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">"
              Let's discuss how we can help transform your business with cutting-edge technology solutions.'
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2 text-lg"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
  const Component = () => {
  
    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Case Studies - Zion Tech Group | Success Stories & Client Results"
        description="Explore our successful case studies and client results. See how Zion Tech Group has helped businesses transform with AI, cybersecurity, and digital solutions."
        keywords="case studies, success stories, client results, AI implementation, cybersecurity solutions, digital transformation, business automation"
        canonical="https://ziontechgroup.com/case-studies"
      />
      <FuturisticBackground />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">"
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>"
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">"
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">"
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />"
            <span className="text-cyan-400 text-sm font-medium">Real Results, Real Impact</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Case Studies.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">"
            Discover how we've helped businesses transform their operations with cutting-edge technology solutions. '
            Real stories, real results, real impact.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">"
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>"
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  ).
  ).
  ).
};

export default CaseStudiesPage.
    </>
  ).
};

export default CaseStudiesPage.
