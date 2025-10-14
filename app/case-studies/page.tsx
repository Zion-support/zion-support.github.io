'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Globe, Zap } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'RetailCorp',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment rate',
      solution: 'Implemented AI-powered recommendation engine and modern cloud infrastructure',
      results: [
        '60% increase in conversion rate',
        '45% reduction in page load time',
        '80% improvement in user engagement',
        '50% increase in average order value'
      ],
      image: '/images/case-studies/ecommerce.jpg',
      duration: '6 months',
      team: '12 developers'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems',
      solution: 'Built unified data platform with AI-powered analytics and predictive modeling',
      results: [
        '90% reduction in data processing time',
        '75% improvement in diagnostic accuracy',
        '60% cost savings in data management',
        '100% compliance with HIPAA regulations'
      ],
      image: '/images/case-studies/healthcare.jpg',
      duration: '8 months',
      team: '15 developers'
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      client: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Implemented RPA and AI-driven automation for loan processing and risk assessment',
      results: [
        '85% reduction in processing time',
        '95% accuracy in risk assessment',
        '70% cost reduction in operations',
        '50% increase in customer satisfaction'
      ],
      image: '/images/case-studies/fintech.jpg',
      duration: '10 months',
      team: '20 developers'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Industry Awards', value: '25+', icon: Award }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with our innovative solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
