'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

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
    timeframe: string;
    team: string;
    budget: string;
  };
  image: string;
  tags: string[];
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Company',
      industry: 'retail',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI chatbot system with natural language processing and automated ticket routing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      metrics: {
        improvement: '75%',
        timeframe: '3 months',
        team: '5 developers',
        budget: '$150K'
      },
      image: '/images/case-studies/customer-service.jpg',
      tags: ['AI', 'Customer Service', 'Automation']
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration & Optimization',
      client: 'Financial Services Firm',
      industry: 'finance',
      challenge: 'Legacy on-premise infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Complete migration to cloud infrastructure with microservices architecture and automated scaling.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment times',
        'Enhanced security compliance'
      ],
      metrics: {
        improvement: '50%',
        timeframe: '6 months',
        team: '8 engineers',
        budget: '$300K'
      },
      image: '/images/case-studies/cloud-migration.jpg',
      tags: ['Cloud', 'Migration', 'Infrastructure']
    },
    {
      id: '3',
      title: 'Predictive Analytics for Supply Chain',
      client: 'Manufacturing Company',
      industry: 'manufacturing',
      challenge: 'Supply chain disruptions and inventory management inefficiencies.',
      solution: 'AI-powered predictive analytics platform for demand forecasting and inventory optimization.',
      results: [
        '30% reduction in inventory costs',
        '95% forecast accuracy',
        '40% reduction in stockouts',
        'Real-time supply chain visibility'
      ],
      metrics: {
        improvement: '30%',
        timeframe: '4 months',
        team: '6 data scientists',
        budget: '$200K'
      },
      image: '/images/case-studies/supply-chain.jpg',
      tags: ['AI', 'Analytics', 'Supply Chain']
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'retail', name: 'Retail & E-commerce' },
    { id: 'finance', name: 'Financial Services' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'technology', name: 'Technology' }
  ];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies. See how Zion Tech Group has helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, projects, AI solutions, cloud migration, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform with our AI and technology solutions. 
                Real results from real clients.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-white/10'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        <ExternalLink className="w-5 h-5 text-cyan-400" />
                      </div>
                      <p className="text-cyan-400 font-semibold mb-6">{study.client}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <Star className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <TrendingUp className="w-4 h-4 text-cyan-400 mr-2" />
                            <span className="text-sm text-gray-400">Improvement</span>
                          </div>
                          <p className="text-2xl font-bold text-white">{study.metrics.improvement}</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                            <span className="text-sm text-gray-400">Timeframe</span>
                          </div>
                          <p className="text-2xl font-bold text-white">{study.metrics.timeframe}</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <Users className="w-4 h-4 text-cyan-400 mr-2" />
                            <span className="text-sm text-gray-400">Team Size</span>
                          </div>
                          <p className="text-2xl font-bold text-white">{study.metrics.team}</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <DollarSign className="w-4 h-4 text-cyan-400 mr-2" />
                            <span className="text-sm text-gray-400">Budget</span>
                          </div>
                          <p className="text-2xl font-bold text-white">{study.metrics.budget}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/services"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View Our Services
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