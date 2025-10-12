'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Transformation',
      client: 'TechCorp Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        '300% increase in conversion rates',
        '40% reduction in customer support tickets',
        '$2M additional annual revenue',
        '95% customer satisfaction score'
      ],
      duration: '6 months',
      team: '8 developers',
      featured: true
    },
    {
      title: 'Healthcare Data Analytics Revolution',
      client: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and diagnosis',
      solution: 'Built AI-powered analytics platform for medical data',
      results: [
        '60% faster diagnosis times',
        '85% accuracy in early disease detection',
        '50% reduction in misdiagnosis',
        'Compliance with HIPAA regulations'
      ],
      duration: '8 months',
      team: '12 developers',
      featured: false
    },
    {
      title: 'Financial Services Automation',
      client: 'Global Finance Ltd.',
      industry: 'Finance',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Automated financial workflows with AI and RPA',
      results: [
        '80% reduction in processing time',
        '99.9% accuracy in transactions',
        '40% cost savings',
        'Real-time fraud detection'
      ],
      duration: '4 months',
      team: '6 developers',
      featured: false
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time monitoring and predictive maintenance',
      solution: 'IoT sensors with AI-powered predictive analytics',
      results: [
        '30% reduction in downtime',
        '25% increase in production efficiency',
        'Predictive maintenance accuracy of 92%',
        'ROI achieved in 8 months'
      ],
      duration: '10 months',
      team: '15 developers',
      featured: false
    },
    {
      title: 'Retail Customer Experience Enhancement',
      client: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Poor customer engagement and inventory management',
      solution: 'AI-powered personalization and inventory optimization',
      results: [
        '45% increase in customer engagement',
        '35% reduction in inventory costs',
        'Personalized recommendations with 78% click-through rate',
        'Real-time inventory optimization'
      ],
      duration: '5 months',
      team: '10 developers',
      featured: false
    },
    {
      title: 'Education Platform Modernization',
      client: 'EduTech University',
      industry: 'Education',
      challenge: 'Outdated learning management system',
      solution: 'Modern cloud-based LMS with AI tutoring',
      results: [
        '50% improvement in student performance',
        '24/7 AI tutoring availability',
        '90% student satisfaction rate',
        'Scalable to 50,000+ students'
      ],
      duration: '7 months',
      team: '14 developers',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies across various industries." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT projects, client results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
            </p>
          </div>

          {/* Featured Case Study */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Case Study</h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">{caseStudies[0].industry}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{caseStudies[0].title}</h3>
                  <p className="text-gray-300 mb-6">
                    <strong>Client:</strong> {caseStudies[0].client}
                  </p>
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-gray-300">{caseStudies[0].challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                      <p className="text-gray-300">{caseStudies[0].solution}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {caseStudies[0].duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {caseStudies[0].team}
                    </div>
                  </div>
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="md:w-1/2 p-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                  <h4 className="text-xl font-bold text-white mb-6">Results Achieved</h4>
                  <div className="space-y-4">
                    {caseStudies[0].results.map((result, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(1).map((study, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/10 text-cyan-400 text-sm font-semibold rounded-full">
                    {study.industry}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  <strong>Client:</strong> {study.client}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">Challenge</h4>
                    <p className="text-gray-300 text-sm line-clamp-2">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">Solution</h4>
                    <p className="text-gray-300 text-sm line-clamp-2">{study.solution}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400">Key Results</h4>
                  {study.results.slice(0, 2).map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {study.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {study.team}
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Client ROI Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help your business achieve similar results with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/consultation"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;