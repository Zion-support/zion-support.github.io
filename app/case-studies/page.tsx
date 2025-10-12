'use client';

import React from 'react';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '80% reduction in response time',
        '60% cost savings',
        '95% customer satisfaction rate'
      ],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'DataFlow Solutions',
      industry: 'Financial Services',
      challenge: 'Legacy systems limiting scalability and performance',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '300% improvement in performance',
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved'
      ],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Discover how Zion Tech Group has helped businesses transform with AI, cloud computing, and cybersecurity solutions through real-world case studies." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real results from real clients. See how we've helped businesses transform with cutting-edge technology.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="mb-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 md:h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-gray-400 mb-4"><strong>Client:</strong> {study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
