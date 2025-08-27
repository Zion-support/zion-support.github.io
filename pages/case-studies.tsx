import React from 'react'
import Link from 'next/link'
import { CheckCircle, TrendingUp, Users, DollarSign, Clock, Target, ArrowRight } from 'lucide-react'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes were causing 15% defect rates and production delays.',
      solution: 'Implemented computer vision AI system with real-time quality monitoring and automated defect detection.',
      results: [
        'Reduced defect rates by 85%',
        'Increased production efficiency by 40%',
        'ROI achieved in 8 months',
        'Scaled to 12 production facilities'
      ],
      metrics: {
        efficiency: '40%',
        savings: '$2.4M',
        timeframe: '8 months'
      },
      category: 'AI & Automation'
    },
    {
      id: 'cloud-migration-financial',
      title: 'Enterprise Cloud Migration',
      client: 'Regional Bank Network',
      industry: 'Financial Services',
      challenge: 'Legacy on-premise systems were limiting scalability and increasing operational costs.',
      solution: 'Migrated core banking systems to cloud-native architecture with zero-downtime deployment.',
      results: [
        '99.99% uptime achieved',
        'Reduced infrastructure costs by 60%',
        'Improved transaction processing by 300%',
        'Enhanced security compliance'
      ],
      metrics: {
        uptime: '99.99%',
        savings: '60%',
        performance: '300%'
      },
      category: 'Cloud & Infrastructure'
    },
    {
      id: 'cybersecurity-healthcare',
      title: 'Healthcare Cybersecurity Transformation',
      client: 'Multi-State Hospital System',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements for patient data protection.',
      solution: 'Implemented zero-trust security architecture with advanced threat detection and response.',
      results: [
        'Zero security breaches in 18 months',
        'Achieved HIPAA compliance certification',
        'Reduced security incident response time by 80%',
        'Enhanced patient data protection'
      ],
      metrics: {
        breaches: '0',
        compliance: '100%',
        response: '80%'
      },
      category: 'Cybersecurity'
    },
    {
      id: 'retail-ai-optimization',
      title: 'Retail AI Customer Experience',
      client: 'National Retail Chain',
      industry: 'Retail',
      challenge: 'Poor customer experience and declining sales due to inefficient inventory management.',
      solution: 'AI-powered demand forecasting and personalized customer recommendation engine.',
      results: [
        'Increased sales by 25%',
        'Improved inventory turnover by 35%',
        'Enhanced customer satisfaction scores',
        'Reduced operational costs by 20%'
      ],
      metrics: {
        sales: '25%',
        inventory: '35%',
        costs: '20%'
      },
      category: 'AI & Analytics'
    }
  ]

  const categories = ['All', 'AI & Automation', 'Cloud & Infrastructure', 'Cybersecurity', 'AI & Analytics', 'Digital Transformation']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Success Stories &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how we've helped organizations transform their operations, reduce costs, and achieve remarkable results through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Real Results</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Proven outcomes across industries
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our solutions have delivered measurable results for organizations of all sizes, from startups to Fortune 500 companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-500">{study.industry}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">Client: {study.client}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Challenge</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Solution</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{study.metrics.efficiency || study.metrics.uptime || study.metrics.sales}</div>
                      <div className="text-xs text-gray-500">Improvement</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{study.metrics.savings}</div>
                      <div className="text-xs text-gray-500">Cost Savings</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{study.metrics.timeframe || study.metrics.compliance || study.metrics.performance}</div>
                      <div className="text-xs text-gray-500">Time/Performance</div>
                    </div>
                  </div>
                  
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Ready to write your success story?
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Let's discuss how our solutions can help you achieve similar results and transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-200"
              >
                Start Your Project
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}