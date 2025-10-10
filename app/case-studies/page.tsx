'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and inconsistent response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '95% customer satisfaction rate',
        '50% increase in issue resolution rate'
      ],
      duration: '6 months',
      team: '8 specialists',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing security vulnerabilities and scalability issues',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        'Enhanced security compliance',
        '50% faster application deployment'
      ],
      duration: '8 months',
      team: '12 specialists',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Increasing cyber threats targeting patient data',
      solution: 'Comprehensive cybersecurity framework with AI monitoring',
      results: [
        'Zero security breaches',
        '99.8% threat detection accuracy',
        'HIPAA compliance maintained',
        '30% faster incident response'
      ],
      duration: '4 months',
      team: '6 specialists',
      featured: false
    },
    {
      id: 4,
      title: 'Quantum Computing Integration',
      client: 'QuantumTech Labs',
      industry: 'Research & Development',
      image: '/api/placeholder/600/400',
      challenge: 'Complex computational problems requiring quantum solutions',
      solution: 'Custom quantum computing algorithms and hybrid systems',
      results: [
        '1000x faster computation',
        'Breakthrough in optimization',
        'Patent applications filed',
        'Research publication ready'
      ],
      duration: '12 months',
      team: '15 specialists',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Transformation for Manufacturing',
      client: 'AutoManufacturing Inc',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Outdated processes and lack of real-time monitoring',
      solution: 'IoT integration with AI-powered predictive maintenance',
      results: [
        '25% increase in production efficiency',
        '40% reduction in downtime',
        'Predictive maintenance accuracy: 92%',
        'ROI achieved in 8 months'
      ],
      duration: '10 months',
      team: '10 specialists',
      featured: false
    },
    {
      id: 6,
      title: 'AI-Driven E-commerce Optimization',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'AI recommendation engine and personalized shopping experience',
      results: [
        '45% increase in conversion rate',
        '35% boost in average order value',
        '60% improvement in customer retention',
        '200% increase in mobile sales'
      ],
      duration: '5 months',
      team: '7 specialists',
      featured: false
    }
  ];

  const featuredCaseStudy = caseStudies.find(study => study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results, real impact." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span> & <span className="text-purple-400">Results</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions. 
              Real projects, real results, real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>50+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span>Average 60% ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-pink-400" />
                <span>95% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Success Story</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredCaseStudy.image}
                      alt={featuredCaseStudy.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredCaseStudy.industry}
                      </span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{featuredCaseStudy.client}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredCaseStudy.title}</h3>
                    <p className="text-gray-300 mb-6">
                      <strong>Challenge:</strong> {featuredCaseStudy.challenge}
                    </p>
                    <p className="text-gray-300 mb-6">
                      <strong>Solution:</strong> {featuredCaseStudy.solution}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{featuredCaseStudy.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{featuredCaseStudy.team}</span>
                      </div>
                    </div>
                    <Link
                      to={`/case-studies/${featuredCaseStudy.id}`}
                      className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-400 text-xs">{study.client}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="text-xs text-gray-300 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Create Your Success Story?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can help transform your business with our AI and IT solutions. 
                Join the ranks of our successful clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/consultation"
                  className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;