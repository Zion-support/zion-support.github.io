import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% reduction in cart abandonment',
        '35% boost in average order value'
      ],
      duration: '3 months',
      team: '8 specialists',
      image: '/images/case-studies/ecommerce-ai.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Data Security Enhancement',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Compliance with HIPAA and protecting sensitive patient data',
      solution: 'Comprehensive cybersecurity framework and AI-powered threat detection',
      results: [
        '99.9% security uptime achieved',
        'Zero data breaches in 12 months',
        '50% faster threat response time'
      ],
      duration: '6 months',
      team: '12 specialists',
      image: '/images/case-studies/healthcare-security.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing Process Optimization',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and high operational costs',
      solution: 'AI-driven predictive maintenance and IoT integration',
      results: [
        '25% reduction in downtime',
        '30% increase in production efficiency',
        '20% decrease in maintenance costs'
      ],
      duration: '4 months',
      team: '10 specialists',
      image: '/images/case-studies/manufacturing-ai.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, business results" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <div className="text-6xl text-cyan-400/50">📊</div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {study.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6">
                        <strong>Client:</strong> {study.client}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300">
                              <TrendingUp className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {study.team}
                        </div>
                        <Link
                          to={`/case-studies/${study.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                        >
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-cyan-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-cyan-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-cyan-100">Industries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-cyan-100">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help your business achieve similar results with our proven AI and IT solutions.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;