'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Transformation',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% improvement in customer satisfaction',
        '35% boost in average order value'
      ],
      image: '/api/placeholder/600/400',
      duration: '6 months'
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinSecure Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and high maintenance costs',
      solution: 'Complete cloud migration with microservices architecture and enhanced security',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '80% faster application deployment'
      ],
      image: '/api/placeholder/600/400',
      duration: '8 months'
    },
    {
      title: 'Machine Learning for Healthcare Analytics',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Manual data analysis leading to delayed insights and treatment decisions',
      solution: 'Deployed ML models for predictive analytics and automated patient risk assessment',
      results: [
        '70% faster diagnosis times',
        '45% reduction in readmission rates',
        '90% accuracy in risk prediction'
      ],
      image: '/api/placeholder/600/400',
      duration: '4 months'
    },
    {
      title: 'IoT Integration for Manufacturing',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time monitoring and predictive maintenance capabilities',
      solution: 'Implemented IoT sensors and AI-driven predictive maintenance system',
      results: [
        '30% reduction in downtime',
        '25% decrease in maintenance costs',
        '95% improvement in equipment efficiency'
      ],
      image: '/api/placeholder/600/400',
      duration: '5 months'
    },
    {
      title: 'Cybersecurity Enhancement for Government',
      client: 'City of Techville',
      industry: 'Government',
      challenge: 'Increasing cyber threats and outdated security infrastructure',
      solution: 'Comprehensive security audit and implementation of advanced threat detection systems',
      results: [
        '99.8% threat detection accuracy',
        'Zero security breaches in 12 months',
        '50% faster incident response time'
      ],
      image: '/api/placeholder/600/400',
      duration: '3 months'
    },
    {
      title: 'Data Analytics Platform for Logistics',
      client: 'Global Logistics Corp',
      industry: 'Logistics',
      challenge: 'Inefficient route planning and lack of real-time visibility',
      solution: 'Built comprehensive analytics platform with real-time tracking and optimization',
      results: [
        '35% improvement in delivery efficiency',
        '20% reduction in fuel costs',
        '85% increase in customer satisfaction'
      ],
      image: '/api/placeholder/600/400',
      duration: '7 months'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI, cloud computing, and innovative IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, cloud migration, digital transformation, client results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{study.title}</h2>
                    <p className="text-cyan-400 font-medium mb-4">{study.client}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-300">
                            <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read Full Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;