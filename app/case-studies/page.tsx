'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Slow loading times and poor user experience leading to high bounce rates',
      solution: 'Implemented AI-powered performance optimization and CDN integration',
      results: [
        '50% faster page load times',
        '30% increase in conversion rates',
        '40% reduction in bounce rates',
        '25% increase in revenue'
      ],
      duration: '3 months',
      teamSize: '8 developers',
      budget: '$150,000'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Large volumes of patient data needed intelligent analysis for better treatment outcomes',
      solution: 'Developed AI-powered analytics platform for patient data analysis',
      results: [
        '60% improvement in diagnosis accuracy',
        '35% reduction in treatment costs',
        '45% faster data processing',
        '90% patient satisfaction rate'
      ],
      duration: '6 months',
      teamSize: '12 developers',
      budget: '$300,000'
    },
    {
      id: 3,
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes were slow and error-prone',
      solution: 'Implemented AI-powered computer vision for automated quality control',
      results: [
        '70% reduction in quality control time',
        '85% improvement in defect detection',
        '50% reduction in manual labor costs',
        '95% accuracy in quality assessment'
      ],
      duration: '4 months',
      teamSize: '10 developers',
      budget: '$200,000'
    },
    {
      id: 4,
      title: 'Financial Services AI Chatbot',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'High customer service costs and long response times for customer inquiries',
      solution: 'Developed intelligent chatbot with natural language processing capabilities',
      results: [
        '80% reduction in customer service costs',
        '90% faster response times',
        '75% customer satisfaction rate',
        '24/7 availability for customers'
      ],
      duration: '2 months',
      teamSize: '6 developers',
      budget: '$100,000'
    },
    {
      id: 5,
      title: 'Supply Chain Optimization',
      client: 'Global Logistics Co.',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain management leading to delays and increased costs',
      solution: 'AI-powered supply chain optimization with predictive analytics',
      results: [
        '40% reduction in delivery times',
        '25% decrease in operational costs',
        '60% improvement in inventory management',
        '35% increase in customer satisfaction'
      ],
      duration: '5 months',
      teamSize: '15 developers',
      budget: '$400,000'
    },
    {
      id: 6,
      title: 'Educational Platform Personalization',
      client: 'EduTech Academy',
      industry: 'Education',
      challenge: 'One-size-fits-all learning approach was not effective for diverse student needs',
      solution: 'Implemented AI-powered personalized learning platform',
      results: [
        '45% improvement in student engagement',
        '55% increase in course completion rates',
        '65% improvement in learning outcomes',
        '80% student satisfaction rate'
      ],
      duration: '4 months',
      teamSize: '9 developers',
      budget: '$180,000'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <p className="text-lg text-purple-400 font-semibold mb-2">{study.client}</p>
                  </div>

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

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/5 rounded-lg p-3">
                      <Clock className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-400">Duration</p>
                      <p className="text-sm font-semibold text-white">{study.duration}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-400">Team Size</p>
                      <p className="text-sm font-semibold text-white">{study.teamSize}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <DollarSign className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-400">Budget</p>
                      <p className="text-sm font-semibold text-white">{study.budget}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View More Cases
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;