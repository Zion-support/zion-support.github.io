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
        '99.9% uptime achieved',
        '60% reduction in infrastructure costs',
        '3x faster page load times',
        '50% increase in conversion rates'
      ],
      duration: '6 months',
      teamSize: '12 developers',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'React', 'Node.js'],
      image: '/case-studies/ecommerce-migration.jpg'
    },
    {
      title: 'AI-Powered Customer Service Automation',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated workflow system',
      results: [
        '80% reduction in support tickets',
        '24/7 customer support availability',
        '90% customer satisfaction rate',
        '40% cost savings on support operations'
      ],
      duration: '4 months',
      teamSize: '8 developers',
      technologies: ['Python', 'TensorFlow', 'AWS Lambda', 'React', 'MongoDB'],
      image: '/case-studies/ai-customer-service.jpg'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems',
      solution: 'Unified data platform with advanced analytics and reporting',
      results: [
        'Real-time patient insights',
        '30% improvement in diagnosis accuracy',
        'Compliance with HIPAA regulations',
        'Streamlined workflow for medical staff'
      ],
      duration: '8 months',
      teamSize: '15 developers',
      technologies: ['Python', 'Apache Spark', 'PostgreSQL', 'React', 'D3.js'],
      image: '/case-studies/healthcare-analytics.jpg'
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'Industrial Dynamics',
      industry: 'Manufacturing',
      challenge: 'Manual monitoring and maintenance processes',
      solution: 'IoT sensors and predictive maintenance system',
      results: [
        '25% reduction in downtime',
        'Predictive maintenance alerts',
        'Real-time production monitoring',
        '15% increase in overall efficiency'
      ],
      duration: '5 months',
      teamSize: '10 developers',
      technologies: ['IoT Sensors', 'Python', 'AWS IoT', 'React', 'Time Series DB'],
      image: '/case-studies/manufacturing-iot.jpg'
    }
  ];

  const industries = [
    'All Industries',
    'E-commerce',
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Education',
    'Logistics'
  ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and see how we've helped businesses transform their operations with cutting-edge technology solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover how we've helped businesses across industries achieve their digital transformation goals.
          </p>
        </div>
      </section>

      {/* Case Studies Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {study.industry}
                    </span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2">Client:</h3>
                    <p className="text-gray-600">{study.client}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2">Challenge:</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2">Solution:</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-3">Results:</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
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
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudies;