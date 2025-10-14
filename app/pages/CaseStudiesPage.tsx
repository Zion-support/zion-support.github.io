import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRightIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  ClockIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce AI Optimization',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '25% reduction in cart abandonment',
        '60% improvement in customer engagement',
        '$2.5M additional revenue generated'
      ],
      duration: '6 months',
      team: '8 specialists'
    },
    {
      title: 'Healthcare Data Analytics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and treatment optimization',
      solution: 'Developed comprehensive AI analytics platform for patient data processing',
      results: [
        '35% faster diagnosis times',
        '50% improvement in treatment accuracy',
        '30% reduction in operational costs',
        '95% patient satisfaction rate'
      ],
      duration: '8 months',
      team: '12 specialists'
    },
    {
      title: 'Manufacturing IoT Integration',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Outdated production monitoring and quality control systems',
      solution: 'Implemented IoT sensors and AI-powered predictive maintenance',
      results: [
        '45% reduction in downtime',
        '30% improvement in product quality',
        '25% increase in production efficiency',
        '40% cost savings in maintenance'
      ],
      duration: '10 months',
      team: '15 specialists'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
        <meta name="keywords" content="case studies, AI solutions, IT solutions, success stories, Zion Tech Group" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Explore our successful case studies showcasing AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Case Studies
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover how we've helped businesses across various industries achieve remarkable results 
                with our AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <ChartBarIcon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                          <p className="text-purple-400">{study.company}</p>
                          <p className="text-gray-400 text-sm">{study.industry}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-2">Solution:</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-4">Results:</h4>
                      <ul className="space-y-3 mb-6">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <ArrowRightIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2 text-gray-300">
                          <ClockIcon className="w-5 h-5 text-purple-400" />
                          <span className="text-sm">Duration: {study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <UserGroupIcon className="w-5 h-5 text-purple-400" />
                          <span className="text-sm">Team: {study.team}</span>
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
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
