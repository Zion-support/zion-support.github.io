'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and high operational costs',
      solution: 'AI-powered automation and predictive analytics',
      results: [
        '40% reduction in production costs',
        '60% improvement in efficiency',
        '$2M annual savings',
        '99.9% uptime achieved'
      ],
      duration: '6 months',
      team: '12 members'
    },
    {
      id: 2,
      title: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Patient data management and compliance requirements',
      solution: 'Secure cloud infrastructure and AI-powered analytics',
      results: [
        '95% improvement in data accuracy',
        '50% faster patient processing',
        '100% compliance achievement',
        '30% cost reduction'
      ],
      duration: '4 months',
      team: '8 members'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      industry: 'Retail',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'AI-powered recommendation engine and chatbot',
      results: [
        '200% increase in conversion rates',
        '80% improvement in customer satisfaction',
        '150% growth in revenue',
        '90% reduction in support tickets'
      ],
      duration: '3 months',
      team: '6 members'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              and achieve unprecedented growth with our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {study.duration} • {study.team} team
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-4">Results Achieved</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <DollarSign className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">$50M+</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
              <div className="text-center">
                <Clock className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the hundreds of businesses that have transformed their operations with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;