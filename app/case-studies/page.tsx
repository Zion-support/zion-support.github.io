'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing Company',
      challenge: 'Inefficient supply chain operations leading to 30% inventory waste and delayed deliveries',
      solution: 'AI-powered supply chain optimization with predictive analytics and automated inventory management',
      results: [
        'Reduced inventory costs by 25%',
        'Improved delivery times by 40%',
        'Eliminated 95% of stockouts',
        'Generated $2.5M annual savings'
      ],
      industry: 'Manufacturing',
      duration: '6 months',
      teamSize: '12 people',
      client: 'Global Manufacturing Corp',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Provider Network',
      challenge: 'Manual patient data processing causing 60% longer wait times and increased errors',
      solution: 'AI document processing and patient flow optimization with automated data extraction',
      results: [
        'Reduced processing time by 70%',
        'Improved patient satisfaction by 45%',
        'Eliminated 99% of data entry errors',
        'Saved 2,000 hours monthly'
      ],
      industry: 'Healthcare',
      duration: '4 months',
      teamSize: '8 people',
      client: 'Regional Health System',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      challenge: 'Low conversion rates and high customer churn due to poor personalization',
      solution: 'AI-powered recommendation engine and customer behavior analytics with real-time personalization',
      results: [
        'Increased conversion rates by 180%',
        'Reduced customer churn by 50%',
        'Boosted average order value by 35%',
        'Generated $5M additional revenue'
      ],
      industry: 'E-commerce',
      duration: '3 months',
      teamSize: '6 people',
      client: 'Tech Retail Inc',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Financial Services Firm',
      challenge: 'Manual fraud detection missing 40% of fraudulent transactions',
      solution: 'AI cybersecurity monitoring with real-time threat detection and automated response systems',
      results: [
        'Detected 99.5% of fraudulent activities',
        'Reduced false positives by 80%',
        'Prevented $3M in potential losses',
        'Improved response time by 90%'
      ],
      industry: 'Financial Services',
      duration: '5 months',
      teamSize: '10 people',
      client: 'SecureBank Financial',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Real Estate Agency',
      challenge: 'Inefficient lead qualification and property matching leading to 70% lost opportunities',
      solution: 'AI lead generation and property recommendation system with automated follow-ups',
      results: [
        'Qualified 300% more leads',
        'Increased sales by 150%',
        'Reduced time-to-close by 40%',
        'Generated $8M additional revenue'
      ],
      industry: 'Real Estate',
      duration: '4 months',
      teamSize: '7 people',
      client: 'Premier Properties Group',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Educational Institution',
      challenge: 'Low student engagement and high dropout rates in online courses',
      solution: 'AI personal trainer for education with adaptive learning paths and intelligent tutoring',
      results: [
        'Improved student engagement by 200%',
        'Reduced dropout rates by 60%',
        'Increased course completion by 85%',
        'Enhanced learning outcomes by 70%'
      ],
      industry: 'Education',
      duration: '6 months',
      teamSize: '9 people',
      client: 'University of Innovation',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average ROI', value: '300%', icon: TrendingUp },
    { label: 'Time Saved', value: '50,000+', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Results</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses achieve 300% ROI with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Case Studies</h2>
            <div className="space-y-12">
              {caseStudies.filter(study => study.featured).map((study) => (
                <article key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <div className="text-white text-6xl">📊</div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.duration}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300 mb-4">{study.challenge}</p>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300 mb-4">{study.solution}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          <div>Client: {study.client}</div>
                          <div>Team: {study.teamSize}</div>
                        </div>
                        <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map((study) => (
                <article key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <div className="text-white text-4xl">📈</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-xs">{study.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-400">
                        {study.client}
                      </div>
                      <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                        <span>Read More</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;