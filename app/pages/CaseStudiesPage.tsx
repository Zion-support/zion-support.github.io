import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [{
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '25% reduction in cart abandonment',
        '60% improvement in customer engagement'
      ],
      duration: '3 months',
      team: '5 specialists'
    },
    {
      title: 'Cloud Migration & Security Enhancement',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Legacy system migration and security compliance',
      solution: 'Complete cloud migration with advanced security measures and compliance framework',
      results: [
        '99.9% uptime achieved',
        '50% reduction in operational costs',
        'Full compliance with industry regulations'
      ],
      duration: '6 months',
      team: '8 specialists'
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production monitoring and quality control',
      solution: 'IoT sensors and AI-powered predictive maintenance system',
      results: [
        '30% reduction in downtime',
        '20% increase in production efficiency',
        '15% improvement in product quality'
      ],
      duration: '4 months',
      team: '6 specialists'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client transformations. See how we've helped businesses achieve their goals with our technology solutions." />
        <meta name="keywords" content="case studies, success stories, client projects, AI solutions, cloud migration, digital transformation" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable results 
            through our innovative technology solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {study.industry}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-300">{study.client}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-300 mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-4">Results</h4>
                  <ul className="space-y-3 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-3 text-gray-300">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{study.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{study.team}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help transform your business with our proven technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;