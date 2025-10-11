'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '300% increase in conversion rates',
        '45% reduction in cart abandonment',
        '$2.5M additional revenue in 6 months'
      ],
      duration: '3 months',
      team: '8 developers'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Transformation',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and treatment recommendations',
      solution: 'Built comprehensive AI analytics platform for patient data processing',
      results: [
        '60% faster diagnosis times',
        '85% improvement in treatment accuracy',
        '40% reduction in operational costs'
      ],
      duration: '6 months',
      team: '12 developers'
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      client: 'FinanceFlow Corp',
      industry: 'Fintech',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'Developed AI-powered automated loan processing system',
      results: [
        '90% reduction in processing time',
        '95% accuracy in risk assessment',
        '50% increase in loan approvals'
      ],
      duration: '4 months',
      team: '10 developers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">
                      <strong>Client:</strong> {study.client}
                    </p>
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
                    <div className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start space-x-3">
                          <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{study.team}</span>
                        </div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how our AI and IT solutions can transform your business and deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <DollarSign className="mr-2 h-5 w-5" />
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center">
                View Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;