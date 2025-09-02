import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, Target } from 'lucide-react';
import Link from 'next/link';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Migration to Cloud',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Legacy system performance issues and scalability limitations',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '300% improvement in page load times',
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Seamless handling of 10x traffic spikes'
      ],
      duration: '6 months',
      teamSize: '8 developers',
      image: '/case-studies/ecommerce-migration.jpg',
      href: '/case-studies/ecommerce-cloud-migration'
    },
    {
      id: 2,
      title: 'AI-Powered Customer Service Automation',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'High customer service costs and response time delays',
      solution: 'Custom AI chatbot with natural language processing',
      results: [
        '80% reduction in support ticket volume',
        '24/7 customer support availability',
        '90% customer satisfaction rate',
        '60% cost savings on support operations'
      ],
      duration: '4 months',
      teamSize: '6 AI specialists',
      image: '/case-studies/ai-customer-service.jpg',
      href: '/case-studies/ai-customer-service-automation'
    },
    {
      id: 3,
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and lack of actionable insights',
      solution: 'Integrated analytics platform with predictive modeling',
      results: [
        '40% improvement in patient outcomes',
        'Real-time data processing capabilities',
        'Compliance with HIPAA regulations',
        '30% reduction in operational costs'
      ],
      duration: '8 months',
      teamSize: '12 developers',
      image: '/case-studies/healthcare-analytics.jpg',
      href: '/case-studies/healthcare-data-analytics'
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'SmartManufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Manual production monitoring and equipment downtime',
      solution: 'IoT sensor network with predictive maintenance',
      results: [
        '25% reduction in equipment downtime',
        'Real-time production monitoring',
        'Predictive maintenance capabilities',
        '15% increase in overall efficiency'
      ],
      duration: '5 months',
      teamSize: '10 IoT engineers',
      image: '/case-studies/manufacturing-iot.jpg',
      href: '/case-studies/manufacturing-iot-integration'
    },
    {
      id: 5,
      title: 'SaaS Platform Development',
      client: 'StartupTech Ventures',
      industry: 'Technology',
      challenge: 'Need for scalable project management solution',
      solution: 'Custom micro SaaS platform with advanced features',
      results: [
        '500+ active users in first 6 months',
        '99.5% user satisfaction rate',
        'Scalable architecture supporting growth',
        'Profitable from month 3'
      ],
      duration: '7 months',
      teamSize: '9 developers',
      image: '/case-studies/saas-platform.jpg',
      href: '/case-studies/saas-platform-development'
    },
    {
      id: 6,
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'SecureCorp Industries',
      industry: 'Security',
      challenge: 'Outdated security systems and compliance requirements',
      solution: 'Comprehensive security framework with monitoring',
      results: [
        'Zero security breaches post-implementation',
        'Full compliance with industry standards',
        '24/7 security monitoring',
        '50% reduction in security incidents'
      ],
      duration: '3 months',
      teamSize: '7 security experts',
      image: '/case-studies/cybersecurity-overhaul.jpg',
      href: '/case-studies/cybersecurity-infrastructure'
    }
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
            Discover how we've helped businesses across industries achieve their digital transformation goals 
            with innovative technology solutions and expert implementation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how we've delivered exceptional results for our clients across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4"><strong>Client:</strong> {study.client}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={study.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600">
                We analyze your business needs, challenges, and goals to create a tailored solution strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">
                Detailed project planning with clear milestones, timelines, and resource allocation.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Expert development and deployment with regular updates and transparent communication.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">
                Ongoing maintenance, optimization, and support to ensure continued success.
              </p>
            </div>
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Start Your Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudies;