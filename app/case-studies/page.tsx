'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap, Star, Clock, Target } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  image: string
  duration: string
  team: string
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '60% reduction in customer service costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '24/7 availability'
      ],
      image: '/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '5 developers'
    },
    {
      id: '2',
      title: 'Cloud Migration and Security Enhancement',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing security vulnerabilities and scalability issues.',
      solution: 'Migrated to secure cloud infrastructure with advanced cybersecurity measures and compliance automation.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in security incidents',
        '40% cost savings on infrastructure',
        'Full compliance with financial regulations'
      ],
      image: '/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '3',
      title: 'E-commerce AI Optimization',
      client: 'RetailMax Online',
      industry: 'Retail',
      challenge: 'Low conversion rates and poor customer experience on e-commerce platform.',
      solution: 'Deployed AI-powered recommendation engine, dynamic pricing, and personalized shopping experience.',
      results: [
        '35% increase in conversion rates',
        '45% boost in average order value',
        '60% improvement in customer engagement',
        '25% reduction in cart abandonment'
      ],
      image: '/case-studies/ecommerce-ai.jpg',
      duration: '4 months',
      team: '6 developers'
    },
    {
      id: '4',
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning processes.',
      solution: 'Built comprehensive data analytics platform with AI-powered insights for treatment optimization.',
      results: [
        '30% improvement in treatment outcomes',
        '50% reduction in data processing time',
        '90% accuracy in predictive analytics',
        'Significant cost savings in operations'
      ],
      image: '/case-studies/healthcare-analytics.jpg',
      duration: '8 months',
      team: '10 specialists'
    },
    {
      id: '5',
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing inefficiencies and quality control issues.',
      solution: 'Implemented AI-driven process automation with real-time quality monitoring and predictive maintenance.',
      results: [
        '40% increase in production efficiency',
        '70% reduction in quality defects',
        '25% decrease in maintenance costs',
        'Real-time process optimization'
      ],
      image: '/case-studies/manufacturing-automation.jpg',
      duration: '5 months',
      team: '7 engineers'
    },
    {
      id: '6',
      title: 'Educational Platform AI Integration',
      client: 'EduTech Academy',
      industry: 'Education',
      challenge: 'Low student engagement and ineffective learning outcomes.',
      solution: 'Developed AI-powered personalized learning platform with adaptive content and progress tracking.',
      results: [
        '55% improvement in student engagement',
        '40% increase in learning outcomes',
        'Personalized learning paths',
        'Real-time progress monitoring'
      ],
      image: '/case-studies/education-ai.jpg',
      duration: '6 months',
      team: '9 developers'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Industries Served', icon: Building2 },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 glow-cyan">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Real <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries transform their operations 
              and achieve remarkable success with our AI and IT solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center floating" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text-enhanced">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our solutions have transformed businesses and delivered measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{study.client}</p>
                    </div>
                  </div>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {study.industry}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-red-400" />
                      Challenge
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                      Solution
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                    Results
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 border-t border-white/10 pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{study.team}</span>
                    </div>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 group-hover:translate-x-1 transition-all duration-300">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Write Your <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Success Story?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to transform your business and achieve the same level of success as our featured clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center glow-cyan"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage