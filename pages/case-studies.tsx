import React from 'react';
import Head from 'next/head';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '60% reduction in customer service costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '5 developers'
    },
    {
      id: 2,
      title: 'Cloud Migration and DevOps Implementation',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing downtime and security concerns',
      solution: 'Complete cloud migration with automated CI/CD pipelines',
      results: [
        '99.9% uptime achieved',
        '50% reduction in deployment time',
        'Enhanced security compliance',
        '40% cost savings on infrastructure'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '8 developers'
    },
    {
      id: 3,
      title: 'Micro SaaS Platform Development',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Need for scalable inventory management solution',
      solution: 'Custom micro SaaS platform with real-time analytics',
      results: [
        '300% increase in inventory accuracy',
        'Real-time analytics dashboard',
        'Scalable to 1000+ stores',
        'ROI achieved in 6 months'
      ],
      image: '/images/case-studies/micro-saas.jpg',
      duration: '4 months',
      team: '6 developers'
    },
    {
      id: 4,
      title: 'IoT Smart Manufacturing Implementation',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Manual processes and lack of real-time monitoring',
      solution: 'IoT sensors and predictive maintenance system',
      results: [
        '25% reduction in downtime',
        'Predictive maintenance alerts',
        'Real-time production monitoring',
        '15% increase in overall efficiency'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '5 months',
      team: '7 developers'
    },
    {
      id: 5,
      title: 'Blockchain Supply Chain Solution',
      client: 'GlobalLogistics',
      industry: 'Logistics',
      challenge: 'Supply chain transparency and fraud prevention',
      solution: 'Blockchain-based tracking and verification system',
      results: [
        '100% supply chain transparency',
        'Zero fraud incidents',
        'Faster customs clearance',
        'Enhanced customer trust'
      ],
      image: '/images/case-studies/blockchain-supply.jpg',
      duration: '7 months',
      team: '9 developers'
    },
    {
      id: 6,
      title: 'AI-Powered Data Analytics Platform',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Large volumes of patient data without actionable insights',
      solution: 'AI-driven analytics platform with predictive modeling',
      results: [
        '40% improvement in patient outcomes',
        'Real-time health monitoring',
        'Predictive health risk assessment',
        'Streamlined clinical workflows'
      ],
      image: '/images/case-studies/ai-healthcare.jpg',
      duration: '8 months',
      team: '10 developers'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '6 Months', label: 'Average ROI' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and client success stories. See how we've helped businesses transform with AI, IT services, and micro SaaS solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform their operations 
                with cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
              <p className="text-lg text-gray-600">
                Real results from real clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">
                      {study.title.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{study.team}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-blue-600 font-medium mb-4">{study.client}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href="/contact"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600">
                Proven expertise across multiple sectors
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {['Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Logistics'].map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 rounded-lg p-6 mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}