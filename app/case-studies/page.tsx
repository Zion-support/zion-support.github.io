'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Zap, CheckCircle, Award } from 'lucide-react';

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
  featured: boolean;
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
      team: '8 specialists',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and high maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated scaling.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster application performance',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Critical security vulnerabilities and compliance requirements for patient data protection.',
      solution: 'Implemented comprehensive security framework with zero-trust architecture and advanced threat detection.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security breaches in 12 months',
        'Real-time threat monitoring',
        'Automated incident response'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      duration: '4 months',
      team: '6 specialists',
      featured: false
    },
    {
      id: '4',
      title: 'Machine Learning for Supply Chain Optimization',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Inefficient inventory management leading to stockouts and overstock situations.',
      solution: 'Developed ML models for demand forecasting and automated inventory optimization.',
      results: [
        '30% reduction in inventory costs',
        '95% reduction in stockouts',
        '25% improvement in cash flow',
        'Automated reorder processes'
      ],
      image: '/images/case-studies/ml-supply-chain.jpg',
      duration: '5 months',
      team: '10 specialists',
      featured: false
    },
    {
      id: '5',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Industrial Dynamics',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time visibility into production processes and equipment performance.',
      solution: 'Built comprehensive IoT platform with real-time monitoring and predictive maintenance capabilities.',
      results: [
        '40% reduction in equipment downtime',
        '25% increase in production efficiency',
        'Predictive maintenance accuracy of 95%',
        'Real-time production insights'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '8 months',
      team: '15 specialists',
      featured: true
    },
    {
      id: '6',
      title: 'Blockchain for Supply Chain Transparency',
      client: 'EcoFoods Ltd.',
      industry: 'Food & Beverage',
      challenge: 'Need for complete transparency in food supply chain for quality and safety assurance.',
      solution: 'Implemented blockchain-based tracking system for end-to-end supply chain visibility.',
      results: [
        'Complete supply chain traceability',
        '50% reduction in food safety incidents',
        'Enhanced brand trust and reputation',
        'Automated compliance reporting'
      ],
      image: '/images/case-studies/blockchain-supply-chain.jpg',
      duration: '6 months',
      team: '9 specialists',
      featured: false
    }
  ];

  const industries = ['All', 'Technology', 'Financial Services', 'Healthcare', 'Retail', 'Manufacturing', 'Food & Beverage'];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how Zion Tech Group has helped businesses transform with AI, cloud, and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, cloud migration, cybersecurity, IT consulting" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Discover how we've helped businesses achieve their goals" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI, cloud, and IT solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>50+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>100+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Industry Recognition</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-400/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📊</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Challenge</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Solution</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{study.team}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-400/20 flex items-center justify-center">
                    <div className="text-4xl opacity-50">📈</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                      {study.featured && (
                        <span className="bg-cyan-400 text-slate-900 px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-white">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-xs">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{study.team}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
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
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven solutions and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;