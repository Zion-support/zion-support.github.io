'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Users, Award, Building2, Shield, Zap } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration',
      client: 'Global Finance Inc',
      industry: 'Financial Services',
      challenge: 'Legacy on-premise infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated scaling.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '300% improvement in scalability',
        'Zero downtime migration'
      ],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement',
      client: 'Healthcare Plus',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements for patient data protection.',
      solution: 'Implemented comprehensive security framework with AI-powered threat detection and compliance monitoring.',
      results: [
        '100% compliance with HIPAA',
        'Zero security breaches',
        'Real-time threat detection',
        'Automated compliance reporting'
      ],
      duration: '4 months',
      team: '6 specialists'
    }
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8 text-cyan-400" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Award className="w-8 h-8 text-green-400" /> },
    { value: '500+', label: 'Team Members', icon: <Users className="w-8 h-8 text-blue-400" /> },
    { value: '15+', label: 'Industries Served', icon: <Building2 className="w-8 h-8 text-purple-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-enhanced">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card-enhanced text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="cyber-card-enhanced hover-lift group">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-400">{study.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-cyan-400 font-medium">{study.client}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                  
                  <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 3).map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                    {study.results.length > 3 && (
                      <li className="text-sm text-cyan-400 font-medium">
                        +{study.results.length - 3} more results
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Team: {study.team}</span>
                  <span>Duration: {study.duration}</span>
                </div>

                <a
                  href={`/case-studies/${study.id}`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center text-sm inline-flex items-center justify-center futuristic-btn"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Read Full Case Study
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results with our proven AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 futuristic-btn"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Your Project
            </a>
            <a
              href="/contact"
              className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              <Shield className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage
