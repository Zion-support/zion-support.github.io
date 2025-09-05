import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Building, Users } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Customer Service Transformation',
    company: 'TechCorp Solutions',
    industry: 'Technology',
    challenge: 'High customer service costs and long response times',
    solution: 'Implemented AI chatbots and automated ticketing system',
    results: 'Reduced response time by 80% and cut costs by 60%',
    readTime: '5 min read',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Migration Success Story',
    company: 'FinanceFirst Bank',
    industry: 'Financial Services',
    challenge: 'Legacy system limitations and scalability issues',
    solution: 'Complete cloud migration with microservices architecture',
    results: 'Improved performance by 300% and reduced infrastructure costs',
    readTime: '7 min read',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 3,
    title: 'Cybersecurity Implementation',
    company: 'HealthCare Plus',
    industry: 'Healthcare',
    challenge: 'Data security compliance and threat protection',
    solution: 'Comprehensive security framework and monitoring system',
    results: 'Achieved 100% compliance and zero security incidents',
    readTime: '6 min read',
    image: '/api/placeholder/600/400',
    featured: false
  }
]

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Real-world case studies showcasing our successful technology implementations." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  {study.featured && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Building className="text-blue-600 mr-2" size={16} />
                    <span className="text-sm text-gray-600">{study.industry}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h2>
                  <p className="text-gray-600 mb-4">{study.company}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="font-medium text-gray-900">Challenge:</span>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Solution:</span>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Results:</span>
                      <p className="text-sm text-gray-600">{study.results}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1" size={16} />
                      {study.readTime}
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}