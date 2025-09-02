import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Migration to Cloud',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Legacy system performance issues and scalability limitations',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '300% improvement in page load times',
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Seamless handling of 10x traffic spikes'
      ],
      duration: '3 months',
      team: '8 developers',
      image: '/case-studies/ecommerce-migration.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'AI-Powered Customer Service Automation',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'High customer service costs and response time delays',
      solution: 'Custom AI chatbot with natural language processing',
      results: [
        '80% reduction in support ticket volume',
        '24/7 customer support availability',
        '90% customer satisfaction rate',
        '60% cost savings on support operations'
      ],
      duration: '2 months',
      team: '5 developers',
      image: '/case-studies/ai-customer-service.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and lack of insights',
      solution: 'Integrated data analytics platform with predictive modeling',
      results: [
        '40% improvement in patient outcomes',
        'Real-time data processing capabilities',
        'Compliance with HIPAA regulations',
        '30% reduction in operational costs'
      ],
      duration: '4 months',
      team: '10 developers',
      image: '/case-studies/healthcare-analytics.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual production monitoring and quality control',
      solution: 'IoT sensors and real-time monitoring system',
      results: [
        '25% increase in production efficiency',
        '99% quality control accuracy',
        'Predictive maintenance capabilities',
        '20% reduction in downtime'
      ],
      duration: '5 months',
      team: '12 developers',
      image: '/case-studies/manufacturing-iot.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Micro SaaS Project Management Tool',
      client: 'StartupHub',
      industry: 'SaaS',
      challenge: 'Need for affordable project management solution',
      solution: 'Custom micro SaaS application with team collaboration',
      results: [
        '500+ active users in first 6 months',
        '$50K MRR achieved',
        '95% user retention rate',
        'Scalable architecture for growth'
      ],
      duration: '2 months',
      team: '4 developers',
      image: '/case-studies/micro-saas-pm.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'SecureBank',
      industry: 'Banking',
      challenge: 'Outdated security systems and compliance requirements',
      solution: 'Comprehensive cybersecurity framework implementation',
      results: [
        'Zero security incidents post-implementation',
        'Full compliance with banking regulations',
        '24/7 threat monitoring capabilities',
        '50% reduction in security response time'
      ],
      duration: '6 months',
      team: '15 developers',
      image: '/case-studies/cybersecurity-banking.jpg',
      featured: false
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Users className="w-8 h-8" /> },
    { number: '$2M+', label: 'Cost Savings Delivered', icon: <DollarSign className="w-8 h-8" /> },
    { number: '99.9%', label: 'Average Uptime', icon: <TrendingUp className="w-8 h-8" /> }
  ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful technology implementations and see how we've helped businesses transform their operations with innovative solutions."
      keywords="case studies, success stories, technology implementations, client results, project outcomes"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover how we've helped businesses across industries transform their operations 
            and achieve remarkable results with our technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Study</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful project that showcases the transformative power of our solutions.
            </p>
          </div>
          
          {caseStudies.filter(study => study.featured).map((study) => (
            <div key={study.id} className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4">🚀</div>
                        <p className="text-lg font-medium">{study.industry}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-600 font-medium">{study.industry}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <p className="text-gray-600 mb-6"><strong>Client:</strong> {study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="space-y-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span>Team: {study.team}</span>
                      </div>
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete portfolio of successful technology implementations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => !study.featured).map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💼</div>
                    <p className="text-sm font-medium">{study.industry}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 text-sm font-medium">{study.industry}</span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{study.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4"><strong>Client:</strong> {study.client}</p>
                  <p className="text-gray-600 mb-4 text-sm">{study.challenge}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Results:</h4>
                    <div className="space-y-1">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Team: {study.team}</span>
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let us help you achieve similar results with our proven technology solutions and expert implementation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudiesPage;