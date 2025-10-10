'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, TrendingUp, Clock } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Automation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate'
      ],
      image: '/api/placeholder/400/250',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Cloud Migration for E-commerce Platform',
      client: 'ShopFast Ltd.',
      industry: 'E-commerce',
      challenge: 'Legacy infrastructure causing performance issues',
      solution: 'Complete migration to AWS with microservices architecture',
      results: [
        '300% performance improvement',
        '99.9% uptime achieved',
        '50% reduction in operational costs'
      ],
      image: '/api/placeholder/400/250',
      duration: '6 months'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Financial Services',
      client: 'SecureBank',
      industry: 'Financial Services',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security audit and implementation of advanced threat detection',
      results: [
        'Zero security breaches',
        '100% compliance achieved',
        '24/7 threat monitoring'
      ],
      image: '/api/placeholder/400/250',
      duration: '4 months'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, client results" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries 
              achieve remarkable results with our AI and IT solutions.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {study.industry}
                      </span>
                      <span className="flex items-center text-gray-300 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {study.title}
                    </h2>
                    
                    <p className="text-cyan-400 font-semibold mb-6">
                      Client: {study.client}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-white font-semibold mb-2">Challenge:</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-semibold mb-2">Solution:</h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-white font-semibold mb-3">Results:</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="aspect-video bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">Case Study Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results 
              with our AI and IT solutions.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;