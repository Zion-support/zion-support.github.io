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
      challenge: 'TechCorp was struggling with high customer service costs and long response times, handling over 10,000 support tickets monthly with an average resolution time of 48 hours.',
      solution: 'We implemented an AI-powered chatbot system integrated with their existing CRM, using natural language processing to handle 80% of common inquiries automatically.',
      results: [
        'Reduced response time by 75% (from 48 hours to 12 hours)',
        'Decreased support costs by 60%',
        'Improved customer satisfaction scores by 40%',
        'Handled 3x more inquiries with the same team size'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '5 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'A legacy on-premises infrastructure was limiting scalability and causing frequent downtime, affecting critical financial operations and customer trust.',
      solution: 'We designed and executed a comprehensive cloud migration strategy, moving their entire infrastructure to AWS with a hybrid cloud approach for compliance requirements.',
      results: [
        'Achieved 99.9% uptime (up from 95%)',
        'Reduced infrastructure costs by 45%',
        'Improved system performance by 300%',
        'Enabled rapid scaling during peak periods'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Healthcare Plus needed to achieve HIPAA compliance and strengthen their security posture after a data breach that exposed 50,000 patient records.',
      solution: 'We conducted a comprehensive security audit and implemented a multi-layered security framework including encryption, access controls, and continuous monitoring.',
      results: [
        'Achieved full HIPAA compliance',
        'Reduced security incidents by 90%',
        'Implemented zero-trust architecture',
        'Passed all security audits with flying colors'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Machine Learning Analytics Platform',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'RetailMax had vast amounts of customer data but lacked the tools to extract meaningful insights for business decisions and personalized marketing.',
      solution: 'We built a comprehensive ML analytics platform that processes real-time data streams and provides predictive insights for inventory, customer behavior, and sales forecasting.',
      results: [
        'Increased sales by 25% through better targeting',
        'Reduced inventory costs by 30%',
        'Improved customer retention by 40%',
        'Enabled real-time decision making'
      ],
      image: '/images/case-studies/ml-analytics.jpg',
      duration: '5 months',
      team: '7 specialists'
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, value: '150+', label: 'Projects Completed' },
    { icon: <Award className="h-8 w-8 text-yellow-600" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="h-8 w-8 text-green-600" />, value: '300%', label: 'Average ROI' },
    { icon: <Shield className="h-8 w-8 text-purple-600" />, value: '100%', label: 'Security Compliance' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories | Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformations across various industries. See how we've helped businesses achieve their goals." />
        <meta name="keywords" content="case studies, success stories, AI implementation, cloud migration, cybersecurity, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform their operations, 
                improve efficiency, and achieve remarkable results through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses achieve their goals 
                through innovative technology solutions.
              </p>
            </div>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`bg-white rounded-lg shadow-sm overflow-hidden ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex`}>
                  <div className="lg:w-1/2">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      <span className="text-blue-600 font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Client: {study.client}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {study.team}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          {study.duration}
                        </span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Read Full Case Study
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;