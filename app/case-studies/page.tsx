'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Platform',
      description: 'Transformed a traditional e-commerce business with AI-driven personalization and automation.',
      results: ['40% increase in conversion rates', '60% reduction in manual tasks', '25% improvement in customer satisfaction'],
      industry: 'E-commerce',
      duration: '6 months'
    },
    {
      title: 'Healthcare Data Analytics',
      description: 'Implemented advanced AI analytics for a major healthcare provider to improve patient outcomes.',
      results: ['30% faster diagnosis', '50% reduction in errors', '20% cost savings'],
      industry: 'Healthcare',
      duration: '8 months'
    },
    {
      title: 'Financial Services Automation',
      description: 'Automated complex financial processes for a leading bank using AI and machine learning.',
      results: ['70% process automation', '90% accuracy improvement', '35% operational cost reduction'],
      industry: 'Financial Services',
      duration: '12 months'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | AI & IT Solutions Success Stories</title>
        <meta name="description" content="Discover how we've helped businesses transform their operations with AI and IT solutions. Real success stories and measurable results." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
      </Helmet>
      
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
                Discover how we've helped businesses transform their operations with AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                      <span className="text-sm text-gray-400">{study.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{study.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to learn how we can help transform your business with AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;