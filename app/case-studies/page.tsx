import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react'

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI recommendation engine and personalized shopping experience',
      results: ['40% increase in conversion rates', '25% reduction in cart abandonment', '60% improvement in customer satisfaction'],
      image: '/images/case-study-1.jpg'
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFlow Ltd.',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security and scalability',
      results: ['99.9% uptime achieved', '50% reduction in operational costs', '3x faster processing speeds'],
      image: '/images/case-study-2.jpg'
    },
    {
      title: 'AI Cybersecurity Implementation',
      client: 'SecureCorp',
      industry: 'Cybersecurity',
      challenge: 'Increasing cyber threats and manual security monitoring',
      solution: 'AI-powered threat detection and automated response system',
      results: ['90% reduction in false positives', 'Real-time threat detection', '24/7 automated monitoring'],
      image: '/images/case-study-3.jpg'
    }
  ]

  const stats = [
    { number: '95%', label: 'Client Satisfaction' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full mr-4">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.client}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">{study.title}</h2>
                    <p className="text-gray-300 mb-6">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudiesPage