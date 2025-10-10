'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Clock, CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  team: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'High customer service costs and inconsistent response quality',
      solution: 'Implemented AI chatbot system with natural language processing',
      results: [
        '60% reduction in customer service costs',
        '85% improvement in response time',
        '90% customer satisfaction rate'
      ],
      duration: '6 months',
      team: '8 specialists',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration and Digital Transformation',
      client: 'Financial Services Company',
      industry: 'Finance',
      challenge: 'Legacy systems limiting scalability and innovation',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster deployment cycles'
      ],
      duration: '12 months',
      team: '15 specialists',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement and Compliance',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Security vulnerabilities and HIPAA compliance requirements',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents',
        '40% reduction in security management overhead'
      ],
      duration: '8 months',
      team: '12 specialists',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories and Client Results</title>
        <meta name="description" content="Explore our successful client projects and case studies. See how we've helped businesses achieve their goals with AI, cloud computing, and digital transformation." />
        <meta name="keywords" content="case studies, client success stories, AI implementation, cloud migration, digital transformation, business results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries achieve 
                remarkable results with our AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Case Study</h2>
              {caseStudies.filter(study => study.featured).map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                        <span className="text-cyan-400 text-sm">{study.industry}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-lg text-gray-300 mb-6">
                        <strong>Client:</strong> {study.client}
                      </p>
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
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {study.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {study.team}
                        </div>
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Results</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">More Success Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.filter(study => !study.featured).map((study) => (
                <article key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-cyan-400 text-sm font-semibold">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <p className="text-gray-300 mb-6">{study.challenge}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {study.team}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help your business achieve similar results 
              with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-lg"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors text-lg"
              >
                <Award className="w-5 h-5 mr-2" />
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;