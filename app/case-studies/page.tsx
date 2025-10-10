'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Giant Achieves 300% ROI with AI-Powered Personalization',
      company: 'TechRetail Corp',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer engagement',
      solution: 'Implemented AI-powered recommendation engine and dynamic pricing',
      results: {
        roi: '300%',
        conversion: '+85%',
        revenue: '+$2.5M',
        customers: '+40%'
      },
      image: '/images/case-studies/ecommerce-ai.jpg'
    },
    {
      id: 2,
      title: 'Manufacturing Company Reduces Costs by 70% with IoT and AI',
      company: 'Global Manufacturing Ltd',
      industry: 'Manufacturing',
      challenge: 'High operational costs and equipment downtime',
      solution: 'Deployed IoT sensors and AI predictive maintenance system',
      results: {
        roi: '250%',
        conversion: '+60%',
        revenue: '+$1.8M',
        customers: '+35%'
      },
      image: '/images/case-studies/manufacturing-iot.jpg'
    },
    {
      id: 3,
      title: 'Healthcare Provider Improves Patient Outcomes with AI Analytics',
      company: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Inefficient patient care and high readmission rates',
      solution: 'Built AI-powered patient monitoring and predictive analytics platform',
      results: {
        roi: '400%',
        conversion: '+90%',
        revenue: '+$3.2M',
        customers: '+50%'
      },
      image: '/images/case-studies/healthcare-ai.jpg'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Discover how our clients achieved remarkable results with our AI and IT solutions. Real case studies with measurable ROI and business impact." />
        <meta name="keywords" content="case studies, success stories, AI ROI, client results, business transformation, technology solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Success
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our clients achieved remarkable results with our AI and IT solutions. 
              Real projects, real results, real impact.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4">
                      {study.title}
                    </h2>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Challenge:</h3>
                      <p className="text-gray-300 mb-4">{study.challenge}</p>
                      
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Solution:</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{study.results.roi}</div>
                        <div className="text-sm text-gray-300">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{study.results.conversion}</div>
                        <div className="text-sm text-gray-300">Conversion</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{study.results.revenue}</div>
                        <div className="text-sm text-gray-300">Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{study.results.customers}</div>
                        <div className="text-sm text-gray-300">Customers</div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>Read Full Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-4">{study.results.roi}</div>
                      <div className="text-2xl font-semibold mb-2">Return on Investment</div>
                      <div className="text-lg opacity-75 mb-8">{study.company}</div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                          <div className="text-xl font-bold">{study.results.conversion}</div>
                          <div className="text-sm opacity-75">Conversion Rate</div>
                        </div>
                        <div className="text-center">
                          <DollarSign className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                          <div className="text-xl font-bold">{study.results.revenue}</div>
                          <div className="text-sm opacity-75">Revenue Increase</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;