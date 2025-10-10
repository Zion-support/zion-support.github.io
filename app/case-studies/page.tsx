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
  metrics: {
    improvement: string;
    savings: string;
    efficiency: string;
  };
  image: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'High customer service costs and inconsistent response times across multiple channels.',
      solution: 'Implemented AI-powered chatbots and automated customer service workflows with natural language processing.',
      results: [
        'Reduced customer service costs by 60%',
        'Improved response time by 85%',
        'Increased customer satisfaction to 94%',
        'Handled 3x more inquiries with same staff'
      ],
      metrics: {
        improvement: '85%',
        savings: '$2.3M',
        efficiency: '300%'
      },
      image: '/images/case-studies/customer-service.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing for Financial Risk Analysis',
      client: 'Investment Bank',
      industry: 'Finance',
      challenge: 'Complex risk calculations taking days to complete, limiting real-time decision making.',
      solution: 'Deployed quantum computing algorithms for portfolio optimization and risk assessment.',
      results: [
        'Reduced calculation time from 3 days to 2 hours',
        'Improved risk accuracy by 40%',
        'Enabled real-time portfolio adjustments',
        'Generated $15M in additional returns'
      ],
      metrics: {
        improvement: '97%',
        savings: '$15M',
        efficiency: '36x'
      },
      image: '/images/case-studies/quantum-finance.jpg',
      featured: true
    },
    {
      id: '3',
      title: 'Autonomous Manufacturing System',
      client: 'Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays and inconsistencies in production.',
      solution: 'Implemented AI-powered computer vision and robotic automation for quality control.',
      results: [
        'Reduced defect rate by 75%',
        'Increased production speed by 45%',
        'Eliminated 90% of manual quality checks',
        'Achieved 99.8% accuracy in defect detection'
      ],
      metrics: {
        improvement: '75%',
        savings: '$8.5M',
        efficiency: '45%'
      },
      image: '/images/case-studies/autonomous-manufacturing.jpg',
      featured: false
    },
    {
      id: '4',
      title: 'AI-Driven Healthcare Diagnostics',
      client: 'Regional Hospital Network',
      industry: 'Healthcare',
      challenge: 'Radiologist shortage causing delays in medical imaging diagnosis.',
      solution: 'Deployed AI-powered medical imaging analysis with deep learning algorithms.',
      results: [
        'Reduced diagnosis time by 70%',
        'Improved diagnostic accuracy by 25%',
        'Enabled 24/7 image analysis',
        'Reduced false negatives by 60%'
      ],
      metrics: {
        improvement: '70%',
        savings: '$3.2M',
        efficiency: '4x'
      },
      image: '/images/case-studies/healthcare-ai.jpg',
      featured: false
    },
    {
      id: '5',
      title: 'Smart City IoT Implementation',
      client: 'Metropolitan City',
      industry: 'Government',
      challenge: 'Inefficient traffic management and resource allocation across the city.',
      solution: 'Deployed comprehensive IoT network with AI analytics for smart city management.',
      results: [
        'Reduced traffic congestion by 35%',
        'Improved emergency response time by 50%',
        'Reduced energy consumption by 20%',
        'Increased citizen satisfaction to 89%'
      ],
      metrics: {
        improvement: '35%',
        savings: '$12M',
        efficiency: '50%'
      },
      image: '/images/case-studies/smart-city.jpg',
      featured: false
    },
    {
      id: '6',
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Logistics Company',
      industry: 'Logistics',
      challenge: 'Complex supply chain with frequent disruptions and high operational costs.',
      solution: 'Implemented AI-driven demand forecasting and route optimization algorithms.',
      results: [
        'Reduced supply chain costs by 30%',
        'Improved delivery accuracy by 95%',
        'Reduced inventory levels by 40%',
        'Minimized disruptions by 80%'
      ],
      metrics: {
        improvement: '30%',
        savings: '$25M',
        efficiency: '95%'
      },
      image: '/images/case-studies/supply-chain.jpg',
      featured: false
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Real-world success stories of AI and IT implementations" />
        <meta name="keywords" content="AI case studies, IT success stories, digital transformation examples" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories of AI and IT implementations" />
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
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Case Studies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredStudies.map(study => (
                <article key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{study.metrics.improvement}</div>
                      <div className="text-sm text-gray-400">Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{study.metrics.savings}</div>
                      <div className="text-sm text-gray-400">Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{study.metrics.efficiency}</div>
                      <div className="text-sm text-gray-400">Efficiency</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularStudies.map(study => (
                <article key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">📈</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-cyan-400">{study.metrics.improvement}</div>
                      <div className="text-xs text-gray-400">Improvement</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-400">{study.metrics.savings}</div>
                      <div className="text-xs text-gray-400">Savings</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-400">{study.metrics.efficiency}</div>
                      <div className="text-xs text-gray-400">Efficiency</div>
                    </div>
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-gray-300 mb-6">
                Let us help you achieve similar results with our AI and IT solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Free Consultation
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;