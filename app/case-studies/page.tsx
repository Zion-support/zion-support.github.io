import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Optimization',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '300% increase in conversion rates',
        '45% reduction in cart abandonment',
        '250% increase in average order value',
        '60% improvement in customer satisfaction'
      ],
      duration: '3 months',
      team: '8 specialists',
      image: '/images/case-study-1.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data management and treatment optimization',
      solution: 'Deployed AI-powered analytics platform for patient data insights and treatment recommendations',
      results: [
        '40% reduction in diagnosis time',
        '35% improvement in treatment accuracy',
        '50% decrease in administrative costs',
        '80% increase in patient outcomes'
      ],
      duration: '6 months',
      team: '12 specialists',
      image: '/images/case-study-2.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing Process Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing delays and quality issues',
      solution: 'Implemented AI-driven automation and quality control systems',
      results: [
        '70% reduction in production time',
        '90% decrease in quality defects',
        '50% reduction in operational costs',
        '200% increase in production capacity'
      ],
      duration: '4 months',
      team: '10 specialists',
      image: '/images/case-study-3.jpg'
    },
    {
      id: 4,
      title: 'Financial Services AI Platform',
      company: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual fraud detection and risk assessment processes',
      solution: 'Built comprehensive AI platform for real-time fraud detection and risk analysis',
      results: [
        '95% accuracy in fraud detection',
        '80% reduction in false positives',
        '60% faster risk assessment',
        '45% reduction in financial losses'
      ],
      duration: '5 months',
      team: '15 specialists',
      image: '/images/case-study-4.jpg'
    },
    {
      id: 5,
      title: 'Supply Chain Optimization',
      company: 'Global Logistics Co.',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain management and inventory optimization',
      solution: 'Deployed AI-powered supply chain optimization and predictive analytics',
      results: [
        '35% reduction in inventory costs',
        '50% improvement in delivery times',
        '40% decrease in supply chain disruptions',
        '25% increase in customer satisfaction'
      ],
      duration: '4 months',
      team: '9 specialists',
      image: '/images/case-study-5.jpg'
    },
    {
      id: 6,
      title: 'Customer Service AI Assistant',
      company: 'ServicePro Inc.',
      industry: 'Customer Service',
      challenge: 'High support ticket volume and slow response times',
      solution: 'Implemented AI-powered chatbot and automated customer service system',
      results: [
        '85% reduction in response time',
        '70% decrease in support costs',
        '90% customer query resolution rate',
        '60% improvement in customer satisfaction'
      ],
      duration: '2 months',
      team: '6 specialists',
      image: '/images/case-study-6.jpg'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
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
                Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300">
                Real results from real businesses across various industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-cyan-400 font-semibold">{study.industry}</span>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{study.company}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                    <p className="text-gray-400 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Success
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View All Case Studies
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