'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Optimization',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor user experience',
      solution: 'Implemented AI-powered recommendation engine and optimized checkout process',
      results: [
        '40% increase in conversion rates',
        '60% reduction in cart abandonment',
        '35% increase in average order value'
      ],
      image: '/case-studies/ecommerce-optimization.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data management and analysis',
      solution: 'Developed comprehensive data analytics platform with predictive modeling',
      results: [
        '50% faster patient diagnosis',
        '30% reduction in operational costs',
        '95% accuracy in predictive analytics'
      ],
      image: '/case-studies/healthcare-analytics.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Implemented IoT sensors and AI-driven automation systems',
      results: [
        '45% increase in production efficiency',
        '70% reduction in defects',
        '25% decrease in operational costs'
      ],
      image: '/case-studies/manufacturing-automation.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 text-sm font-semibold">{study.industry}</span>
                    <span className="text-gray-400 text-sm">{study.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Read Full Case Study
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300">
              Numbers that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">150+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">$2M+</h3>
              <p className="text-gray-300">Cost Savings Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;