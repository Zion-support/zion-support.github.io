'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  image?: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'TechStore Inc',
      industry: 'E-commerce',
      image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service volume and need for 24/7 support across multiple channels.',
      solution: 'Implemented AI-powered chatbot system with natural language processing and seamless human handoff.',
      results: [
        '75% reduction in response time',
        '90% customer satisfaction rate',
        '60% cost savings on support',
        '24/7 multilingual support'
      ],
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated CI/CD pipelines.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Enhanced security compliance'
      ],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      challenge: 'Increasing cyber threats and need for HIPAA compliance in healthcare data management.',
      solution: 'Implemented comprehensive security framework with zero-trust architecture and advanced threat detection.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents',
        'Real-time threat monitoring',
        'Automated compliance reporting'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'ManufacturingPro Inc',
      industry: 'Manufacturing',
      image: '/images/case-studies/iot-manufacturing.jpg',
      challenge: 'Need for real-time monitoring and predictive maintenance in manufacturing operations.',
      solution: 'Developed comprehensive IoT platform with sensors, edge computing, and predictive analytics.',
      results: [
        '30% reduction in downtime',
        '25% increase in production efficiency',
        'Predictive maintenance accuracy of 95%',
        'Real-time operational insights'
      ],
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics Dashboard for Retail',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      image: '/images/case-studies/data-analytics-retail.jpg',
      challenge: 'Lack of real-time insights into customer behavior and sales performance across multiple channels.',
      solution: 'Built comprehensive analytics platform with real-time dashboards and machine learning insights.',
      results: [
        '40% increase in sales conversion',
        'Real-time inventory optimization',
        'Customer behavior insights',
        'Automated reporting system'
      ],
      duration: '3 months',
      team: '7 specialists'
    },
    {
      id: '6',
      title: 'DevOps Transformation for E-commerce',
      client: 'ShopOnline Ltd',
      industry: 'E-commerce',
      image: '/images/case-studies/devops-ecommerce.jpg',
      challenge: 'Slow deployment cycles and frequent production issues affecting customer experience.',
      solution: 'Implemented modern DevOps practices with containerization, CI/CD, and automated testing.',
      results: [
        '80% faster deployment cycles',
        '90% reduction in production issues',
        'Automated testing coverage of 95%',
        'Improved team collaboration'
      ],
      duration: '4 months',
      team: '9 specialists'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Average Project Duration', value: '4 months', icon: Clock },
    { label: 'Team Members', value: '50+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful AI and IT projects. Real case studies showing measurable results for clients across industries. See how we deliver value." />
        <meta name="keywords" content="case studies, success stories, AI projects, IT solutions, client results, project portfolio" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Explore our successful AI and IT projects with real results" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses across industries achieve their goals with innovative AI and IT solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real projects, real results - see how we've helped businesses across industries achieve their goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{study.industry.charAt(0)}</div>
                    <div className="text-sm opacity-90">{study.industry}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {study.duration}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
                  {study.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm">
                  <strong>Client:</strong> {study.client}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-300 line-clamp-2">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-sm text-gray-300 line-clamp-2">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Key Results:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {study.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {result}
                      </li>
                    ))}
                    {study.results.length > 2 && (
                      <li className="text-gray-400 text-xs">
                        +{study.results.length - 2} more results
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Team: {study.team}
                  </span>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 text-sm">
                    Read Full Case Study
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight size={20} />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;