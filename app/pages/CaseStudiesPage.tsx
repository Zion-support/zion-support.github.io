import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform Optimization',
      company: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'High bounce rates and slow loading times affecting sales',
      solution: 'Implemented AI-powered recommendation engine and optimized cloud infrastructure',
      results: [
        '40% increase in conversion rates',
        '60% reduction in page load times',
        '25% increase in average order value',
        '50% improvement in customer satisfaction'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Healthcare Data Analytics',
      company: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Manual data processing and lack of predictive insights',
      solution: 'Developed AI-powered analytics platform for patient data and treatment outcomes',
      results: [
        '35% reduction in data processing time',
        '20% improvement in treatment accuracy',
        '30% cost savings in operations',
        '90% increase in data-driven decisions'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Manufacturing Process Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and quality control issues',
      solution: 'Implemented IoT sensors and AI-powered quality control systems',
      results: [
        '45% increase in production efficiency',
        '30% reduction in defects',
        '25% decrease in operational costs',
        '50% improvement in quality metrics'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Financial Services AI Integration',
      company: 'FinTech Innovations',
      industry: 'Financial Services',
      challenge: 'Manual fraud detection and customer service bottlenecks',
      solution: 'Deployed AI-powered fraud detection and chatbot systems',
      results: [
        '80% reduction in false positives',
        '60% faster fraud detection',
        '40% improvement in customer response time',
        '35% increase in customer satisfaction'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Educational Platform Enhancement',
      company: 'EduTech Academy',
      industry: 'Education',
      challenge: 'Low student engagement and personalized learning needs',
      solution: 'Created AI-driven personalized learning platform with adaptive content',
      results: [
        '55% increase in student engagement',
        '30% improvement in learning outcomes',
        '40% reduction in dropout rates',
        '70% increase in course completion'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Supply Chain Optimization',
      company: 'Global Logistics Corp',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain management and inventory optimization',
      solution: 'Implemented AI-powered demand forecasting and inventory management system',
      results: [
        '25% reduction in inventory costs',
        '40% improvement in demand accuracy',
        '30% decrease in stockouts',
        '20% increase in operational efficiency'
      ],
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT solutions, business transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform and achieve remarkable results 
                through innovative AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{study.company.charAt(0)}</div>
                      <div className="text-sm text-gray-300">{study.industry}</div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{study.title}</h3>
                      <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a href="/contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-block">
              Start Your Project
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;