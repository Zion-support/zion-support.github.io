'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce AI Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '25% reduction in cart abandonment',
        '60% improvement in customer satisfaction'
      ],
      duration: '6 months',
      teamSize: '8 developers'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient diagnosis processes',
      solution: 'Built comprehensive AI analytics platform for patient data integration and predictive diagnosis',
      results: [
        '50% faster diagnosis times',
        '35% improvement in accuracy',
        '30% reduction in operational costs'
      ],
      duration: '8 months',
      teamSize: '12 developers'
    },
    {
      title: 'Financial Services Automation',
      company: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'Developed AI-powered loan processing system with automated risk assessment',
      results: [
        '70% reduction in processing time',
        '45% decrease in manual errors',
        '80% improvement in customer satisfaction'
      ],
      duration: '4 months',
      teamSize: '6 developers'
    },
    {
      title: 'Manufacturing IoT Integration',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production monitoring and quality control',
      solution: 'Implemented IoT sensors with AI analytics for real-time production monitoring',
      results: [
        '25% increase in production efficiency',
        '40% reduction in defects',
        '50% improvement in predictive maintenance'
      ],
      duration: '10 months',
      teamSize: '15 developers'
    },
    {
      title: 'Education Learning Platform',
      company: 'EduTech Academy',
      industry: 'Education',
      challenge: 'Low student engagement and poor learning outcomes',
      solution: 'Created AI-powered personalized learning platform with adaptive content delivery',
      results: [
        '60% increase in student engagement',
        '45% improvement in learning outcomes',
        '35% reduction in dropout rates'
      ],
      duration: '7 months',
      teamSize: '10 developers'
    },
    {
      title: 'Logistics Optimization System',
      company: 'LogiFlow Corp',
      industry: 'Logistics',
      challenge: 'Inefficient route planning and high transportation costs',
      solution: 'Developed AI-driven route optimization and demand forecasting system',
      results: [
        '30% reduction in transportation costs',
        '20% improvement in delivery times',
        '50% increase in route efficiency'
      ],
      duration: '5 months',
      teamSize: '7 developers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb items={[{ label: 'Case Studies' }]} />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">$2M+</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-cyan-400 mb-2">{study.company}</p>
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
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {study.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {study.teamSize}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;