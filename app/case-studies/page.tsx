'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% improvement in customer satisfaction',
        '35% increase in average order value',
        '50% reduction in cart abandonment'
      ],
      technologies: ['Machine Learning', 'React', 'Node.js', 'MongoDB'],
      duration: '6 months'
    },
    {
      id: 2,
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Outdated security systems vulnerable to modern threats',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture',
      results: [
        '99.9% security incident reduction',
        '100% compliance with industry standards',
        '50% faster threat detection',
        '24/7 automated monitoring'
      ],
      technologies: ['Zero Trust', 'SIEM', 'Cloud Security', 'AI Monitoring'],
      duration: '4 months'
    },
    {
      id: 3,
      title: 'Cloud Migration & Optimization',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'On-premise infrastructure limiting scalability and efficiency',
      solution: 'Complete cloud migration with automated scaling and cost optimization',
      results: [
        '70% reduction in infrastructure costs',
        '90% improvement in system reliability',
        '5x faster deployment times',
        '99.9% uptime achieved'
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
      duration: '8 months'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT implementations across various industries. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real results from real clients. Explore our successful AI and IT implementations across various industries.
            </p>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Overview */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.duration}</span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-white mb-4">
                        {study.title}
                      </h2>
                      
                      <p className="text-lg text-purple-400 mb-6">
                        {study.client}
                      </p>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, index) => (
                            <span key={index} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Results */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Results Achieved</h3>
                      <div className="space-y-4">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                            <span className="text-gray-300 text-lg">{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group">
                          Read Full Case Study
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CaseStudiesPage;
