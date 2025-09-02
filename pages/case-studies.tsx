import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform Migration to Cloud',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Legacy system causing performance issues and high maintenance costs',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '75% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster page load times',
        '300% increase in concurrent users'
      ],
      image: '/case-studies/ecommerce-migration.jpg',
      slug: 'ecommerce-platform-cloud-migration'
    },
    {
      title: 'AI-Powered Customer Support Automation',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'High volume of customer inquiries overwhelming support team',
      solution: 'Custom AI chatbot with natural language processing',
      results: [
        '80% reduction in support ticket volume',
        '24/7 customer support availability',
        '95% customer satisfaction rate',
        '60% faster response times'
      ],
      image: '/case-studies/ai-customer-support.jpg',
      slug: 'ai-customer-support-automation'
    },
    {
      title: 'Micro SaaS Development for Project Management',
      client: 'StartupHub',
      industry: 'SaaS',
      challenge: 'Need for specialized project management tool for remote teams',
      solution: 'Custom micro SaaS platform with real-time collaboration',
      results: [
        '40% increase in team productivity',
        '90% user adoption rate',
        '50% reduction in project delays',
        'ROI achieved in 6 months'
      ],
      image: '/case-studies/micro-saas-project-management.jpg',
      slug: 'micro-saas-project-management'
    },
    {
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'HealthTech Systems',
      industry: 'Healthcare',
      challenge: 'Compliance requirements and increasing security threats',
      solution: 'Comprehensive security audit and infrastructure upgrade',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents in 12 months',
        '99.8% system availability',
        '50% reduction in security-related downtime'
      ],
      image: '/case-studies/cybersecurity-healthcare.jpg',
      slug: 'cybersecurity-healthcare-infrastructure'
    },
    {
      title: 'Data Analytics Platform Implementation',
      client: 'ManufacturingCorp',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time insights into production processes',
      solution: 'Custom analytics platform with predictive modeling',
      results: [
        '25% improvement in production efficiency',
        '30% reduction in waste',
        'Real-time monitoring capabilities',
        'Predictive maintenance implementation'
      ],
      image: '/case-studies/data-analytics-manufacturing.jpg',
      slug: 'data-analytics-manufacturing-platform'
    },
    {
      title: 'Digital Transformation for Legacy Systems',
      client: 'LogisticsPro',
      industry: 'Logistics',
      challenge: 'Outdated systems hindering growth and efficiency',
      solution: 'Complete digital transformation with modern architecture',
      results: [
        '60% improvement in operational efficiency',
        '45% reduction in manual processes',
        'Real-time tracking capabilities',
        'Scalable infrastructure for growth'
      ],
      image: '/case-studies/digital-transformation-logistics.jpg',
      slug: 'digital-transformation-logistics'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '$2M+', label: 'Cost Savings Delivered' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore real-world success stories and see how we've helped businesses transform their operations with cutting-edge technology solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover how we've helped businesses across industries achieve their goals through 
            innovative technology solutions and strategic implementation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how our technology solutions have transformed 
              businesses across various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
                    <span className="bg-blue-100 px-2 py-1 rounded-full text-xs font-medium">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-1">Client:</h4>
                    <p className="text-gray-600 text-sm">{study.client}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-1">Key Results:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Start Your Project
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudies;