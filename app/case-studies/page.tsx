'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '85% reduction in response time',
        '60% cost savings on customer service',
        '95% customer satisfaction rate',
        '$2.3M annual savings'
      ],
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems limiting scalability and security concerns',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: [
        '99.9% uptime achieved',
        '40% faster processing speeds',
        '50% reduction in infrastructure costs',
        '100% compliance with financial regulations'
      ],
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Increasing cyber threats and HIPAA compliance requirements',
      solution: 'Comprehensive security suite with AI threat detection',
      results: [
        'Zero security breaches in 18 months',
        '99.8% threat detection accuracy',
        '100% HIPAA compliance',
        '75% reduction in security incidents'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: 4,
      title: 'AI Analytics for E-commerce Optimization',
      client: 'ShopSmart Global',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Low conversion rates and poor customer insights',
      solution: 'AI-powered analytics and personalization engine',
      results: [
        '45% increase in conversion rates',
        '30% boost in average order value',
        '60% improvement in customer retention',
        '$5.2M additional revenue'
      ],
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: 5,
      title: 'Process Automation for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Manual processes causing delays and errors',
      solution: 'End-to-end automation with AI quality control',
      results: [
        '70% reduction in manual errors',
        '50% faster production cycles',
        '35% increase in productivity',
        '$3.8M cost savings annually'
      ],
      duration: '7 months',
      team: '15 specialists'
    },
    {
      id: 6,
      title: 'AI Content Generation for Marketing',
      client: 'MarketingMax',
      industry: 'Marketing',
      image: '/api/placeholder/600/400',
      challenge: 'High content creation costs and inconsistent quality',
      solution: 'AI content generation and optimization platform',
      results: [
        '80% reduction in content creation time',
        '65% cost savings on content production',
        '40% increase in engagement rates',
        '90% improvement in content consistency'
      ],
      duration: '3 months',
      team: '5 specialists'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <article key={study.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{study.team}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-4">
                      {study.client}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                      Results:
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="cyber-button w-full">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our AI and IT solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;