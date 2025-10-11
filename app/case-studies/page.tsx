'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform AI Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-Commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: {
        conversion: '+45%',
        revenue: '+$2.3M',
        satisfaction: '94%',
        timeframe: '6 months'
      },
      image: '/images/case-studies/ecommerce-ai.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient reporting',
      solution: 'Built comprehensive data analytics platform with AI insights',
      results: {
        efficiency: '+60%',
        accuracy: '+35%',
        cost: '-$500K',
        timeframe: '8 months'
      },
      image: '/images/case-studies/healthcare-analytics.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing IoT & Predictive Maintenance',
      company: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Unexpected equipment failures and high maintenance costs',
      solution: 'Deployed IoT sensors and AI-powered predictive maintenance',
      results: {
        downtime: '-70%',
        maintenance: '-40%',
        productivity: '+25%',
        timeframe: '12 months'
      },
      image: '/images/case-studies/manufacturing-iot.jpg'
    },
    {
      id: 4,
      title: 'Financial Services Fraud Detection',
      company: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Increasing fraud incidents and false positives',
      solution: 'Implemented AI-powered fraud detection system',
      results: {
        fraud: '-85%',
        false: '-60%',
        savings: '+$1.8M',
        timeframe: '4 months'
      },
      image: '/images/case-studies/fraud-detection.jpg'
    },
    {
      id: 5,
      title: 'Cloud Migration & DevOps Transformation',
      company: 'StartupTech',
      industry: 'Technology',
      challenge: 'Legacy infrastructure and slow deployment cycles',
      solution: 'Complete cloud migration with CI/CD pipeline implementation',
      results: {
        deployment: '+300%',
        uptime: '99.9%',
        cost: '-35%',
        timeframe: '5 months'
      },
      image: '/images/case-studies/cloud-migration.jpg'
    },
    {
      id: 6,
      title: 'Supply Chain Optimization',
      company: 'LogisticsPro',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain and high operational costs',
      solution: 'AI-powered supply chain optimization and automation',
      results: {
        efficiency: '+50%',
        cost: '-30%',
        delivery: '+40%',
        timeframe: '10 months'
      },
      image: '/images/case-studies/supply-chain.jpg'
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: TrendingUp },
    { label: 'Average ROI', value: '340%', icon: DollarSign },
    { label: 'Years Experience', value: '10+', icon: Clock }
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
                Discover how we've helped businesses transform their operations with AI and IT solutions.
                Real results from real clients.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
                      <span className="text-white/50 text-sm">Case Study Image</span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.company}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(study.results).map(([key, value], index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View More Cases
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