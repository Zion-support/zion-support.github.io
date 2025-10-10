'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink, Building, Users, TrendingUp } from 'lucide-react';

interface CaseStudy {
  id?: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  description: string;
  results: string[];
  challenge?: string;
  solution?: string;
  duration?: string;
  team?: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI chatbots and automated customer service solutions resulting in 40% reduction in response time.',
      results: ['40% faster response time', '60% cost reduction', '95% customer satisfaction']
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Migrated legacy systems to cloud infrastructure with zero downtime and enhanced security.',
      results: ['Zero downtime migration', '50% cost savings', 'Enhanced security compliance']
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Implemented comprehensive cybersecurity solutions to protect sensitive patient data.',
      results: ['100% compliance achieved', 'Zero security breaches', 'Reduced risk by 80%'],
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated CI/CD pipelines.',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Blockchain Supply Chain Optimization',
      client: 'Global Logistics Inc.',
      industry: 'Logistics',
      image: '/images/case-studies/blockchain-supply-chain.jpg',
      challenge: 'Lack of transparency and traceability in supply chain operations.',
      solution: 'Deployed blockchain-based tracking system with smart contracts for automated verification.',
      results: [
        '100% supply chain transparency',
        '40% reduction in disputes',
        '25% faster transaction processing',
        'Real-time tracking capabilities'
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
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industry Awards' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies across various industries." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, success stories, client results" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Building className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-sm opacity-80">{study.industry}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <Users className="w-4 h-4" />
                    <span>{study.client}</span>
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-green-400" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Our Services
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;