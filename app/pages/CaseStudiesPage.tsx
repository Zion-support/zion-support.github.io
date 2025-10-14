import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom
import { ArrowRightIcon,
  CheckIcon,'
  ChartBarIcon,;';}
  TrendingUpIcon,';}
  ClockIcon,';}
  CurrencyDollarIcon'}
} from '@heroicons/react/24/outline
const CaseStudiesPage: React.FC = () => {'
  const caseStudies = [']
    {'
      title: 'E-commerce Platform AI Optimization','
      client: 'TechRetail Inc.','
      industry: 'E-commerce','}
      challenge: 'Low conversion rates and high cart abandonment','}
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',}
      results: ['}
        { metric: 'Conversion Rate', value: '+45%', icon: TrendingUpIcon },'
        { metric: 'Cart Abandonment', value: '-30%', icon: TrendingUpIcon },']
        { metric: 'Revenue Growth', value: '+60%', icon: CurrencyDollarIcon }]
      ],'
      duration: '6 months','
      image: '/.jpg'
    },
    {'
      title: 'Cybersecurity Infrastructure Overhaul','
      client: 'FinanceCorp','
      industry: 'Financial Services','}
      challenge: 'Outdated security systems vulnerable to modern threats','}
      solution: 'Deployed comprehensive cybersecurity suite with real-time threat detection',}
      results: ['}
        { metric: 'Security Incidents', value: '-95%', icon: CheckIcon },'
        { metric: 'Response Time', value: '-80%', icon: ClockIcon },']
        { metric: 'Compliance Score', value: '100%', icon: ChartBarIcon }]
      ],'
      duration: '4 months','
      image: '/case-studies/cybersecurity.jpg'
    },
    {'
      title: 'Cloud Migration & Optimization','
      client: 'ManufacturingPro','
      industry: 'Manufacturing','}
      challenge: 'On-premise infrastructure limiting scalability and performance','}
      solution: 'Migrated to cloud infrastructure with auto-scaling and performance optimization',}
      results: ['}
        { metric: 'Performance', value: '+200%', icon: TrendingUpIcon },'
        { metric: 'Cost Savings', value: '-40%', icon: CurrencyDollarIcon },']
        { metric: 'Uptime', value: '99.9%', icon: CheckIcon }]
      ],'
      duration: '8 months','
      image: '/.jpg'
    },
    {'
      title: 'AI-Powered Customer Service','
      client: 'ServiceMax','
      industry: 'Customer Service','}
      challenge: 'High support costs and slow response times','}
      solution: 'Implemented AI chatbot and automated ticket routing system',}
      results: ['}
        { metric: 'Response Time', value: '-70%', icon: ClockIcon },'
        { metric: 'Customer Satisfaction', value: '+85%', icon: TrendingUpIcon },']
        { metric: 'Support Costs', value: '-50%', icon: CurrencyDollarIcon }]
      ],'
      duration: '3 months','
      image: '/.jpg'
    }
  ]
const CaseStudiesPage: "React.FC = () => {
  return (
    <></>
      <Helmet>title</Helmet>
      <title>Case Studies - Zion Tech Group</title>'
        <meta name=description content=Explore our successful case studies and see how we've helped businesses transform with AI", cybersecurity, cloud infrastructure, and IT solutions." /></meta>}
        <meta name="keywords" content="case studies, success stories, AI solutions, cybersecurity, cloud infrastructure, IT solutions, business transformation" /></meta>}
      </Helmet>}
}
      {/* Hero Section */}
      <section>div</section>
      <div></div>
        </div>
        
        <div>h1</div>
      <h1></h1>
              Success Stories)
            </h1>
            <p className="text-xl" md:text-2xl text-gray-300 mb-8 leading-relaxed></p>
              Real Results for Real Businesses
            </p>
            <p className="text-lg" text-gray-400 mb-12 max-w-3xl mx-auto></p>'
              Discover how we've helped businesses across various industries transform their operations 
              and achieve remarkable growth with our technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */"}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Our Case Studies
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              See how our solutions have transformed businesses across different industries
            </p>
          </div>
          )
          <div className="space-y-16"></div>)
            {caseStudies.map((study", index) => ('}
              <div key="{index}" className="{`grid" lg: "grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''`"}``}></div>'
                <div>div</div>
      <div>span</div>
      <span></span>
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-purple-400 font-semibold mb-6">{study.client}</p>
                    
                    <div>h4</div>
      <h4>Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>h4</div>
      <h4>Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div>h4</div>
      <h4>Results</h4>)
                        <div className="grid grid-cols-1 md: "grid-cols-3 gap-4></div>)
                          {study.results.map((result", resultIndex) => (}
                            <div>result</div>
      <result></result>
                              </div>
                              <div className="text-2xl font-bold text-white">{result.value}</div>
                              <div className="text-gray-400 text-sm">{result.metric}</div>)
                            </div>)
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                '
                <div>div</div>
                        <ChartBarIcon className="w-16 h-16 text-white" /></ChartBarIcon>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Project Overview</h4>
                      <p className="text-gray-300"></p>
                        This case study demonstrates our expertise in delivering measurable results 
                        that drive business growth and operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )})
        
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm: "flex-row gap-4 justify-center>
              <button className="bg-gradient-to-r" from-violet-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center>
                Start Your Project
                <ArrowRight className="w-5" h-5 ml-2 />
              </button>
              <button className="border" border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300>
                View More Cases
const CaseStudiesPage: React.FC = () => {
  return (
<>
      <div></div>
    </>
      <Helmet>title</Helmet>
      <title>Case Studies - Zion Tech Group</title>
        <meta name=description content=Explore our successful projects and case studies at Zion Tech Group. />
      </Helmet>
      <div className="min-h-screen" bg-white>
        <div className="container" mx-auto px-4 py-16>
          <div className="text-center">
            <h1>
              Case Studies)
            </h1>
            <p>
              Discover how we've helped businesses transform with our AI and IT solutions.'
            </p>
            <div className="grid" md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12>
              <div className="bg-blue-50" border border-blue-200 rounded-lg p-6>
                <h3 className="text-lg" font-semibold text-blue-900 mb-2>
                  AI Implementation
                </h3>
                <p>
                  How we helped a Fortune 500 company implement AI solutions.
                </p>
              </div>
              <div className="bg-green-50" border border-green-200 rounded-lg p-6>
                <h3 className="text-lg" font-semibold text-green-900 mb-2>
                  Cloud Migration
                </h3>
                <p>
                  Successful cloud infrastructure migration for a growing startup.
                </p>
              </div>
              <div className="bg-purple-50" border border-purple-200 rounded-lg p-6>
                <h3 className="text-lg" font-semibold text-purple-900 mb-2>
                  Cybersecurity
                </h3>
                <p>
                  Comprehensive security overhaul for a financial services company.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-blue-600" text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors>
                View All Case Studies
              </button>
            </div>)
          </div>;)
const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
    </>
        <title>CaseStudiesPage - Zion Tech Group</title>
        <meta name=description content=CaseStudiesPage - Zion Tech Group />
      </Helmet>
      <div className="min-h-screen" bg-slate-900 text-white flex items-center justify-center>
        <div className="text-center">
          <h1>CaseStudiesPage</h1>
          <p>This page is under construction.</p>
        </div>"}
      </section>}
}
}
      {/* CTA Section */}
      <section>div</section>
      <div>h2</div>
      <h2>
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl" text-gray-300 mb-8></p>'
            Let's discuss how we can help transform your business with our proven solutions)
          </p>
          <div>Link</div>
      <Link></Link>
              Start Your Project
            </Link>
            <Link
              to=/demo
              className="border-2" border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300
            ></Link>
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>)
    </>)
  )
"}
export default CaseStudiesPage
'