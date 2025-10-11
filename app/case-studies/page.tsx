'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: 'E-commerce AI Optimization',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: ['40% increase in conversion rates', '25% reduction in cart abandonment', '60% improvement in customer satisfaction'],
      image: '/case-study-1.jpg'
    },
    {
      title: 'Manufacturing Process Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and quality control issues',
      solution: 'Deployed AI-driven quality control systems and automated production workflows',
      results: ['30% increase in production efficiency', '50% reduction in defects', '20% cost savings'],
      image: '/case-study-2.jpg'
    },
    {
      title: 'Healthcare Data Analytics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'Created comprehensive AI analytics platform for patient data integration',
      results: ['35% faster diagnosis', '45% improvement in treatment accuracy', '25% reduction in costs'],
      image: '/case-study-3.jpg'
    }
  ];

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      number: '150+',
      label: 'Projects Completed'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      number: '200+',
      label: 'Happy Clients'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      number: '95%',
      label: 'Success Rate'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      number: '24/7',
      label: 'Support Available'
    }
  ];

  const industries = [
    { name: 'Technology', count: 45, icon: <Zap className="w-5 h-5" /> },
    { name: 'Healthcare', count: 32, icon: <Shield className="w-5 h-5" /> },
    { name: 'Financial Services', count: 28, icon: <Building2 className="w-5 h-5" /> },
    { name: 'Manufacturing', count: 25, icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'E-commerce', count: 20, icon: <Users className="w-5 h-5" /> }
  ];

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
              Discover how we've helped businesses transform their operations with our AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.company}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">{study.title}</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 text-center">
                    <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Impact Summary</h3>
                    <p className="text-gray-300">
                      This project demonstrates the transformative power of AI and IT solutions in modern business operations.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our proven AI and IT solutions.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5 h-5 mr-2" />
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage