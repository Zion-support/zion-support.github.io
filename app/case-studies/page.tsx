'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Optimize production efficiency and reduce costs',
      solution: 'Implemented AI-powered predictive maintenance and automated quality control systems',
      results: [
        '40% reduction in downtime',
        '25% increase in production efficiency',
        '$2.5M annual cost savings'
      ],
      icon: TrendingUp
    },
    {
      title: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Improve patient care and operational efficiency',
      solution: 'Deployed AI-driven patient monitoring and automated administrative workflows',
      results: [
        '30% faster patient processing',
        '50% reduction in administrative errors',
        '95% patient satisfaction rate'
      ],
      icon: Users
    },
    {
      title: 'Financial Services Firm',
      industry: 'Financial Services',
      challenge: 'Enhance fraud detection and compliance',
      solution: 'Built advanced AI fraud detection system with real-time monitoring',
      results: [
        '99.5% fraud detection accuracy',
        '60% reduction in false positives',
        '$10M prevented fraud losses'
      ],
      icon: DollarSign
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Discover how Zion Tech Group has helped businesses transform with AI and IT solutions. Read our success stories." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how we've helped businesses transform with our AI and IT solutions
            </p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        <p className="text-cyan-400 font-medium">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;