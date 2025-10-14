'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  Building, 
  Users, 
  DollarSign 
} from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce AI Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% reduction in cart abandonment',
        '35% increase in average order value',
        '50% improvement in customer satisfaction'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop'
    },
    {
      title: 'Healthcare Data Analytics',
      company: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and treatment optimization',
      solution: 'AI-powered data analytics platform for predictive healthcare',
      results: [
        '30% faster diagnosis times',
        '25% reduction in readmission rates',
        '45% improvement in treatment outcomes',
        '60% cost savings in data processing'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop'
    },
    {
      title: 'Manufacturing Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control and production inefficiencies',
      solution: 'AI-powered quality control and predictive maintenance system',
      results: [
        '50% reduction in defects',
        '35% increase in production efficiency',
        '40% reduction in maintenance costs',
        '25% improvement in overall equipment effectiveness'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop'
    }
  ]

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8 text-green-400" /> },
    { value: '99.9%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8 text-yellow-400" /> },
    { value: '300%', label: 'Average ROI', icon: <TrendingUp className="w-8 h-8 text-blue-400" /> },
    { value: '24/7', label: 'Support Available', icon: <Clock className="w-8 h-8 text-purple-400" /> }
  ]

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results with our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world examples of how our solutions have transformed businesses across industries
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <Building className="w-6 h-6 text-cyan-400 mr-2" />
                        <span className="text-cyan-400 font-semibold">{study.industry}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-lg text-gray-300 mb-4">{study.company}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Results:</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/services" 
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CaseStudiesPage