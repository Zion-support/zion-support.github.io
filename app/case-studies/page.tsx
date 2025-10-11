'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Star, Award, Clock, Target } from 'lucide-react';

import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';
const CaseStudiesPage: React.FC = () => {
  const features = [
    {
id: 1,
title: 'E-commerce AI Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        '40% increase in conversion rates',
        '60% reduction in customer service tickets',
        '25% increase in average order value'
      ],
      duration: '6 months',
      team: '8 developers',
      image: '/case-studies/techretail.jpg'

    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data management and analysis',
      solution: 'Built comprehensive data analytics platform with predictive models',
      results: [
        '50% faster patient diagnosis',
        '30% reduction in readmission rates',
        '90% improvement in data accuracy'
      ],
      duration: '8 months',
      team: '12 developers',
      image: '/case-studies/medicare.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Poor equipment monitoring and maintenance scheduling',
      solution: 'Deployed IoT sensors and AI-powered predictive maintenance',
      results: [
        '35% reduction in downtime',
        '20% increase in production efficiency',
        '50% decrease in maintenance costs'
      ],
      duration: '4 months',
      team: '6 developers',
      image: '/case-studies/autoparts.jpg'

    }
  ]

  const stats = [
    { icon: Users, value: '150+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
    { icon: DollarSign, value: '$2M+', label: 'Cost Savings Generated' },
    { icon: Award, value: '50+', label: 'Industry Awards' }
icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart automation', 'Predictive analytics', 'Intelligent insights', 'Automated processes']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Data visualization', 'Custom reports']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing with optimized algorithms and infrastructure.',
      benefits: ['Fast processing', 'Optimized algorithms', 'Scalable infrastructure', 'High availability']
    },
    {
      icon: Shield,
      title: 'Secure  & Reliable',
      description: 'Enterprise-grade security and reliability for mission-critical applications.',
      benefits: ['Data encryption', 'Access control', 'Audit logging', 'Compliance ready']
    }
  ]

  const benefits = [
    'Enhanced productivity and efficiency',
    'Reduced operational costs',
    'Improved decision making',
    'Scalable solutions',
    '24/7 availability',
    'Expert support'
];

  return (
<></>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        </div><section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                </div>
<div key={index} className="text-center">
                  </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
<div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
<div className="text-gray-300">{stat.label}</div>
                </div>
              ))}

            </div>
          </div>
        </section>

{/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                </div>
<div
                  key={study.id}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  </div>
<div className="flex items-center mb-6">
                    </div>
<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <Star className="w-6 h-6 text-white" />
                    </div>
<div>
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      <p className="text-cyan-400">{study.client} • {study.industry}</p>
                    </div>
                  </div>
<div className="space-y-4 mb-6">
                    </div>
<div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
<div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>
<div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-gray-300 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {result}

                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
<div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    </div>
<div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{study.duration}</span>
                    </div>
<div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{study.team}</span>
                    </div>
                  </div>

                  <button className="w-full cyber-button">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story ? </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to transform your business and achieve remarkable results.
            </p>
            </div>
<div className="flex flex-col sm : flex-row gap-4 justify-center">
              <button className="cyber-button">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="cyber-button-secondary">
                Schedule Consultation
                <Target className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      </div><section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        </section>
<div className="container mx-auto px-4">
          </div>
<div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md: text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        </section>
<div className="container mx-auto">
          </div>
<div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real businesses
            </p>
          </div>
<div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              </div>
<div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                </div>
<div className="mb-6">
                  </div>
<div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 text-sm font-semibold">{study.industry}</span>
                    <span className="text-gray-400 text-sm">{study.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                </div>
<div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                </div>
<div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Read Full Case Study
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black/20">
        </section>
<div className="container mx-auto">
          </div>
<div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300">
              Numbers that speak for themselves
            </p>
          </div>
<div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            </div>
<div className="text-center">
              </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">150+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
<div className="text-center">
              </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
<div className="text-center">
              </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">$2M+</h3>
              <p className="text-gray-300">Cost Savings Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        </section>
<div className="container mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-white transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
      
<Footer />
    </>
  )
}

export default CaseStudiesPage