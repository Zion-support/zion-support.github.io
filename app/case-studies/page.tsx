import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, TrendingUp, Shield, Zap, Users, DollarSign, Clock, CheckCircle } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Healthcare Diagnostics',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Reducing diagnostic time while maintaining accuracy in medical imaging analysis.',
      solution: 'Implemented advanced computer vision AI to analyze medical images with 99.2% accuracy.',
      results: [
        '85% reduction in diagnostic time',
        '99.2% accuracy rate',
        '40% cost savings',
        '50% improvement in patient satisfaction'
      ],
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Healthcare', 'Computer Vision', 'Machine Learning']
    },
    {
      title: 'Enterprise Cybersecurity Transformation',
      client: 'Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Securing sensitive financial data across multiple global offices and cloud environments.',
      solution: 'Deployed comprehensive cybersecurity suite with AI-powered threat detection and response.',
      results: [
        '99.9% threat detection rate',
        '60% faster incident response',
        'Zero security breaches',
        '30% reduction in security costs'
      ],
      image: '/api/placeholder/600/400',
      tags: ['Cybersecurity', 'AI', 'Financial Services', 'Compliance']
    },
    {
      title: 'Smart Manufacturing Optimization',
      client: 'Industrial Manufacturing Co',
      industry: 'Manufacturing',
      challenge: 'Optimizing production efficiency and reducing waste in complex manufacturing processes.',
      solution: 'Implemented AI-driven predictive analytics and IoT integration for real-time optimization.',
      results: [
        '25% increase in production efficiency',
        '35% reduction in waste',
        '20% decrease in downtime',
        '15% improvement in quality metrics'
      ],
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Manufacturing', 'IoT', 'Predictive Analytics']
    },
    {
      title: 'Cloud Migration & Digital Transformation',
      client: 'Retail Chain Inc',
      industry: 'Retail',
      challenge: 'Modernizing legacy systems and migrating to cloud infrastructure for better scalability.',
      solution: 'Complete cloud migration with microservices architecture and AI-powered customer analytics.',
      results: [
        '50% improvement in system performance',
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '60% faster deployment cycles'
      ],
      image: '/api/placeholder/600/400',
      tags: ['Cloud Migration', 'Digital Transformation', 'Microservices', 'AI Analytics']
    },
    {
      title: 'AI-Powered Customer Service',
      client: 'E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Handling high volume of customer inquiries while maintaining quality service.',
      solution: 'Deployed AI chatbot system with natural language processing and human handoff capabilities.',
      results: [
        '80% of inquiries resolved automatically',
        '90% customer satisfaction rate',
        '24/7 availability',
        '50% reduction in support costs'
      ],
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Customer Service', 'NLP', 'Automation']
    },
    {
      title: 'Financial Fraud Detection System',
      client: 'Regional Bank',
      industry: 'Banking',
      challenge: 'Detecting and preventing fraudulent transactions in real-time.',
      solution: 'Advanced AI fraud detection system with machine learning algorithms and real-time monitoring.',
      results: [
        '95% fraud detection accuracy',
        'Real-time transaction monitoring',
        '80% reduction in false positives',
        'Millions saved in prevented fraud'
      ],
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Fraud Detection', 'Banking', 'Real-time Analytics']
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '50%', label: 'Average Cost Savings' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies across various industries." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT projects" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-400">{study.client}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Challenge:</h4>
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Solution:</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-white/10 text-white text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage