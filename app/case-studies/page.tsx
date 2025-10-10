'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Users, TrendingUp, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      description: 'Implemented an AI chatbot system that reduced customer service response time by 75% and increased customer satisfaction scores by 40%.',
      results: [
        '75% reduction in response time',
        '40% increase in customer satisfaction',
        '60% reduction in support costs',
        '24/7 availability achieved'
      ]
    },
    {
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      description: 'Successfully migrated legacy systems to cloud infrastructure, improving scalability and reducing operational costs by 50%.',
      results: [
        '50% reduction in operational costs',
        '99.9% uptime achieved',
        '3x faster deployment times',
        'Enhanced security compliance'
      ]
    },
    {
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'Financial Services Group',
      industry: 'Finance',
      description: 'Developed a comprehensive data analytics platform that provided real-time insights and improved decision-making processes.',
      results: [
        'Real-time data processing',
        '30% improvement in decision speed',
        'Automated reporting system',
        'Enhanced data security'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. See how we've helped businesses transform their operations." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, success stories, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
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

        {/* CTA Section */}
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Started Today
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;