'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react'
const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain management leading to 30% waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
      results: [
        '40% reduction in inventory costs',
        '25% improvement in delivery times',
        '60% decrease in stockouts',
        '35% increase in overall efficiency'
      ],
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Cybersecurity Transformation',
      client: 'Financial Services Inc',
      industry: 'Finance',
      challenge: 'Frequent security breaches and compliance issues affecting customer trust',
      solution: 'Deployed comprehensive security framework with AI-powered threat detection',
      results: [
        '90% reduction in security incidents',
        '100% compliance with regulations',
        '50% faster incident response',
        'Zero data breaches in 12 months'
      ],
      duration: '4 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'AI Customer Service Automation',
      client: 'E-commerce Platform',
      industry: 'Retail',
      challenge: 'High customer service costs and inconsistent response times',
      solution: 'Deployed AI-powered chatbots and automated ticket routing system',
      results: [
        '70% reduction in support costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '3 months',
      team: '6 specialists'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Migration',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Outdated on-premise systems causing downtime and scalability issues',
      solution: 'Migrated to cloud infrastructure with automated scaling and monitoring',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster application deployment',
        'Enhanced data security and compliance'
      ],
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: 5,
      title: 'Data Analytics Platform',
      client: 'Marketing Agency',
      industry: 'Marketing',
      challenge: 'Lack of actionable insights from client data affecting campaign performance',
      solution: 'Built custom analytics platform with real-time reporting and predictive modeling',
      results: [
        '300% improvement in campaign ROI',
        'Real-time performance monitoring',
        'Predictive analytics for better targeting',
        'Automated reporting and insights'
      ],
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: 6,
      title: 'Process Automation Implementation',
      client: 'Insurance Company',
      industry: 'Insurance',
      challenge: 'Manual processes causing delays and errors in claims processing',
      solution: 'Implemented RPA and AI-powered document processing system',
      results: [
        '75% reduction in processing time',
        '90% decrease in manual errors',
        '60% cost savings in operations',
        'Improved customer satisfaction'
      ],
      duration: '4 months',
      team: '8 specialists'
    }
  ]
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, value: '100+', label: 'Projects Completed' },
    { icon: <Award className="w-8 h-8 text-green-600" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-600" />, value: '40%', label: 'Average Cost Savings' },
    { icon: <Clock className="w-8 h-8 text-yellow-600" />, value: '6 months', label: 'Average Project Duration' }
  ]
  return (
    <>
      <Helmet> </Helmet><title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta> </meta><meta> </meta></Helmet>

      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><div> </div><h1>Success </h1><span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p>Discover how we've helped businesses across industries transform their operations 
                with cutting-edge AI and IT solutions. Real results, real impact.
              </p></p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section> </section><div> </div><div>{stats.map((stat, index) => (
                </div><div> </div><div>{stat.icon}
                  </div></div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Featured Case Studies</h2>
              <p>Explore detailed case studies showcasing our expertise and the transformative 
                impact of our solutions across different industries.
              </p></p>
            </div>

            <div>{caseStudies.map((study) => (
                </div><div> </div><div> </div><div> </div><span>{study.industry}
                      </span></span>
                      <div> </div><Clock> </Clock><span>{study.duration}</span>
                      </div>
                    </div>
                    
                    <h3>{study.title}
                    </h3></h3>
                    
                    <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                  </div>

                  <div> </div><div> </div><h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div> </div><h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div> </div><h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul>{study.results.map((result, index) => (
                        </ul><li> </li><CheckCircle>{result}
                        </CheckCircle></li>
                      ))}
                    </ul>
                  </div>

                  <div> </div><div> </div><Users> </Users><span>{study.team}</span>
                    </div>
                    <button>Read Full Case Study
                      </button><ArrowRight> </ArrowRight></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section> </section><div> </div><h2>Ready to Write Your Success Story?
            </h2></h2>
            <p>Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p></p>
            <div> </div><a> </a><span className="relative z-10">Start Your Project</span>
                <div> </div></a>
              <a>Explore Our Services
              </a></a>
            </div>
          </div>
        </section>
      </main>

      <Footer> </Footer></>
  )
}
export default CaseStudiesPage