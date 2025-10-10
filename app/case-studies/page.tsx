'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react'
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
      challenge: 'High customer service costs and inconsistent response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing capabilities.',
      results: [
        '60% reduction in customer service costs',
        '45% improvement in response times',
        '85% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy on-premise infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Complete migration to AWS cloud with microservices architecture and automated CI/CD pipelines.',
      results: [
        '70% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster deployment cycles',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'HealthTech Systems',
      industry: 'Healthcare',
      challenge: 'Critical security vulnerabilities and non-compliance with HIPAA regulations.',
      solution: 'Comprehensive security audit, implementation of zero-trust architecture, and compliance framework.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents post-implementation',
        '90% reduction in security vulnerabilities',
        'Automated compliance monitoring'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Digital Transformation & Process Automation',
      client: 'Manufacturing Plus',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing inefficiencies and data silos across departments.',
      solution: 'End-to-end digital transformation with RPA, data integration, and real-time analytics dashboard.',
      results: [
        '40% increase in operational efficiency',
        'Real-time data visibility across all departments',
        '30% reduction in manual errors',
        'Automated reporting and analytics'
      ],
      image: '/images/case-studies/digital-transformation.jpg',
      duration: '10 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'E-commerce Platform Optimization',
      client: 'RetailMax Online',
      industry: 'Retail',
      challenge: 'Slow website performance and poor user experience affecting sales conversion.',
      solution: 'Complete platform optimization with performance tuning, CDN implementation, and UX improvements.',
      results: [
        '65% improvement in page load speed',
        '35% increase in conversion rates',
        '50% reduction in bounce rate',
        'Mobile-first responsive design'
      ],
      image: '/images/case-studies/ecommerce-optimization.jpg',
      duration: '3 months',
      team: '5 specialists'
    },
    {
      id: '6',
      title: 'Data Analytics & Business Intelligence',
      client: 'Logistics Pro',
      industry: 'Logistics',
      challenge: 'Lack of data-driven insights for route optimization and cost management.',
      solution: 'Advanced analytics platform with machine learning algorithms for predictive analytics and optimization.',
      results: [
        '25% reduction in fuel costs',
        '20% improvement in delivery times',
        'Real-time route optimization',
        'Predictive maintenance capabilities'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '7 specialists'
    }
  ]
  const industries = ['All', 'Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 'Retail', 'Logistics']
  const [selectedIndustry, setSelectedIndustry] = React.useState('All')
  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry)
  const stats = [
    { icon: <Building2 className="w-8 h-8 text-blue-600" />, value: '150+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8 text-green-600" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-600" />, value: '40%', label: 'Average Cost Reduction' },
    { icon: <Shield className="w-8 h-8 text-red-600" />, value: '99.9%', label: 'Uptime Achieved' }
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover how we've helped businesses transform and achieve their goals through innovative technology solutions
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Industry Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedIndustry === industry
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {selectedIndustry === 'All' ? 'All Case Studies' : `${selectedIndustry} Case Studies`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                      <p className="text-blue-100 text-sm">{study.client}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{study.challenge}</p>
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 2).map((result, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{study.team}</span>
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No case studies found for the selected industry.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help transform your business with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default CaseStudiesPage