'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '5 specialists'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration',
      client: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Legacy on-premises infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Complete migration to AWS with microservices architecture and automated scaling.',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        '3x faster application deployment',
        'Improved disaster recovery capabilities'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '8 engineers'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement Program',
      client: 'Financial Services Group',
      industry: 'Finance',
      challenge: 'Increasing cyber threats and compliance requirements for financial data protection.',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture with AI threat detection.',
      results: [
        '100% compliance with financial regulations',
        '95% reduction in security incidents',
        'Real-time threat detection and response',
        'Enhanced data protection measures'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 security experts'
    },
    {
      id: '4',
      title: 'Data Analytics Platform Development',
      client: 'Retail Chain Corporation',
      industry: 'Retail',
      challenge: 'Lack of real-time insights into customer behavior and inventory management.',
      solution: 'Built comprehensive analytics platform with machine learning for predictive insights.',
      results: [
        '30% increase in sales through better targeting',
        '25% reduction in inventory costs',
        'Real-time business intelligence dashboards',
        'Predictive analytics for demand forecasting'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '7 developers'
    },
    {
      id: '5',
      title: 'Mobile App Development & Optimization',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Need for patient engagement app with telemedicine capabilities and HIPAA compliance.',
      solution: 'Developed cross-platform mobile app with secure video conferencing and patient data management.',
      results: [
        '50% increase in patient engagement',
        'Reduced no-show rates by 35%',
        'HIPAA-compliant data handling',
        'Seamless telemedicine experience'
      ],
      image: '/images/case-studies/mobile-app.jpg',
      duration: '4 months',
      team: '6 mobile developers'
    },
    {
      id: '6',
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Logistics Solutions Ltd.',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain operations leading to delays and increased costs.',
      solution: 'Implemented AI-driven demand forecasting and route optimization algorithms.',
      results: [
        '20% reduction in delivery times',
        '15% decrease in transportation costs',
        'Improved inventory management',
        'Enhanced customer satisfaction'
      ],
      image: '/images/case-studies/supply-chain.jpg',
      duration: '6 months',
      team: '9 specialists'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. Real results from real clients across various industries." />
        <meta name="keywords" content="AI case studies, IT success stories, digital transformation examples, technology implementation" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Explore our successful AI and IT implementation case studies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients have achieved remarkable results across various industries. 
              Here are some of our most successful implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{study.client}</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Duration: {study.duration}
                    </div>
                    <Link 
                      to={`/case-studies/${study.id}`}
                      className="text-cyan-600 hover:text-cyan-700 font-medium inline-flex items-center"
                    >
                      Read More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join the ranks of successful businesses that have transformed their operations with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;