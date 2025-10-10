'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

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
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy on-premise systems causing scalability issues and high maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with zero-downtime deployment and enhanced security measures.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster application deployment',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Blockchain Supply Chain Optimization',
      client: 'Global Logistics Inc',
      industry: 'Logistics',
      challenge: 'Lack of transparency and traceability in supply chain operations.',
      solution: 'Developed blockchain-based supply chain management system with smart contracts and real-time tracking.',
      results: [
        '100% supply chain transparency',
        '30% reduction in fraud cases',
        'Real-time tracking capabilities',
        'Automated compliance reporting'
      ],
      image: '/images/case-studies/blockchain-supply-chain.jpg',
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: '4',
      title: 'AI-Driven Predictive Analytics Platform',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Difficulty in predicting customer behavior and inventory management.',
      solution: 'Built comprehensive AI platform with machine learning models for demand forecasting and customer analytics.',
      results: [
        '85% accuracy in demand forecasting',
        '25% reduction in inventory costs',
        '40% increase in sales conversion',
        'Real-time customer insights'
      ],
      image: '/images/case-studies/ai-analytics.jpg',
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: '5',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Critical security vulnerabilities in patient data management systems.',
      solution: 'Implemented comprehensive cybersecurity framework with advanced threat detection and compliance measures.',
      results: [
        'Zero security breaches',
        'HIPAA compliance achieved',
        '99.9% system availability',
        'Advanced threat detection'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '6',
      title: 'IoT Integration for Smart Manufacturing',
      client: 'ManufacturingPro Ltd',
      industry: 'Manufacturing',
      challenge: 'Manual processes and lack of real-time monitoring in production lines.',
      solution: 'Deployed IoT sensors and AI-powered analytics platform for smart manufacturing optimization.',
      results: [
        '20% increase in production efficiency',
        '35% reduction in equipment downtime',
        'Real-time production monitoring',
        'Predictive maintenance capabilities'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '7 months',
      team: '14 specialists'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing our expertise in AI, cloud computing, blockchain, and cybersecurity solutions." />
        <meta name="keywords" content="case studies, AI projects, cloud migration, blockchain solutions, cybersecurity, success stories" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI, cloud, and blockchain solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-cyan-400">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>100+ Projects</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>50+ Clients</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500 to-blue-500">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Client: {study.client}</h4>
                      <p className="text-gray-300 text-sm mb-2">
                        <strong>Duration:</strong> {study.duration}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/consultation"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;