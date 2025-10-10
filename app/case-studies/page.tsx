'use client'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Users, TrendingUp } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Optimization',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '25% improvement in customer satisfaction',
        '60% reduction in cart abandonment'
      ],
      image: '/images/case-study-1.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data management and analysis',
      solution: 'Developed comprehensive data analytics platform with predictive insights',
      results: [
        '50% faster patient diagnosis',
        '30% reduction in operational costs',
        '95% accuracy in predictive analytics'
      ],
      image: '/images/case-study-2.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Implemented AI-driven automation and quality control systems',
      results: [
        '70% reduction in production time',
        '45% decrease in quality issues',
        '80% improvement in efficiency'
      ],
      image: '/images/case-study-3.jpg'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform with our AI and IT solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <Building className="w-16 h-16 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-cyan-400 font-medium">{study.company}</p>
                <p className="text-gray-400 text-sm">{study.industry}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                
                <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                <ul className="space-y-1">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-700/50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;