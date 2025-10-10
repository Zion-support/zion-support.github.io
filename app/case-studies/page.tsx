'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot system with natural language processing',
      results: [
        '85% reduction in response time',
        '60% cost savings on customer service',
        '95% customer satisfaction rate',
        '300% increase in query resolution speed'
      ],
      duration: '6 months',
      investment: '$150,000',
      roi: '400%'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing operational inefficiencies',
      solution: 'Complete cloud migration with AI-powered analytics',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Real-time fraud detection implemented',
        'Compliance requirements fully met'
      ],
      duration: '8 months',
      investment: '$500,000',
      roi: '250%'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive AI-driven security suite implementation',
      results: [
        'Zero security breaches in 12 months',
        '99.8% threat detection accuracy',
        'HIPAA compliance fully automated',
        '50% reduction in security incidents'
      ],
      duration: '4 months',
      investment: '$200,000',
      roi: '300%'
    },
    {
      id: 4,
      title: 'AI-Driven Supply Chain Optimization',
      client: 'Manufacturing Inc',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Inefficient supply chain causing delays and waste',
      solution: 'AI-powered demand forecasting and inventory optimization',
      results: [
        '30% reduction in inventory costs',
        '25% improvement in delivery times',
        '40% reduction in waste',
        'Real-time supply chain visibility'
      ],
      duration: '5 months',
      investment: '$300,000',
      roi: '350%'
    },
    {
      id: 5,
      title: 'Quantum Computing Research Platform',
      client: 'Research University',
      industry: 'Education',
      image: '/api/placeholder/600/400',
      challenge: 'Need for advanced computing power for research',
      solution: 'Custom quantum computing platform development',
      results: [
        '1000x faster computation for research',
        'Breakthrough discoveries in 3 months',
        'International recognition achieved',
        'Grant funding increased by 200%'
      ],
      duration: '12 months',
      investment: '$1,000,000',
      roi: '500%'
    },
    {
      id: 6,
      title: 'AI-Powered Marketing Automation',
      client: 'E-commerce Giant',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Manual marketing processes and low conversion rates',
      solution: 'End-to-end AI marketing automation platform',
      results: [
        '200% increase in conversion rates',
        '80% reduction in marketing costs',
        'Personalized customer experiences',
        'Real-time campaign optimization'
      ],
      duration: '3 months',
      investment: '$100,000',
      roi: '600%'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study) => (
              <article key={study.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-medium text-sm">{study.industry}</span>
                    <span className="text-green-400 font-bold text-lg">{study.roi} ROI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                    <div className="text-white font-semibold text-sm">{study.duration}</div>
                    <div className="text-gray-400 text-xs">Duration</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <DollarSign className="w-5 h-5 text-green-400 mx-auto mb-1" />
                    <div className="text-white font-semibold text-sm">{study.investment}</div>
                    <div className="text-gray-400 text-xs">Investment</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <TrendingUp className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                    <div className="text-white font-semibold text-sm">{study.roi}</div>
                    <div className="text-gray-400 text-xs">ROI</div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="flex-1 cyber-button text-center py-3 flex items-center justify-center"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button className="px-4 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Success Story?</h3>
              <p className="text-gray-300 mb-6">
                Let us help you achieve similar results. Contact our team to discuss your project and get a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center py-3 px-8"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
