'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, TrendingUp, Users, Zap, Shield } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  results: string[];
  image: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      description: 'Implemented AI chatbot and automation system that reduced response time by 80% and improved customer satisfaction.',
      results: [
        '80% reduction in response time',
        '95% customer satisfaction rate',
        '60% cost reduction in support operations',
        '24/7 automated customer support'
      ],
      image: '/images/case-study-1.jpg'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      description: 'Successfully migrated legacy systems to cloud infrastructure with enhanced security and compliance.',
      results: [
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved',
        'Enhanced security compliance',
        '50% faster deployment times'
      ],
      image: '/images/case-study-2.jpg'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      description: 'Implemented comprehensive cybersecurity solution to protect patient data and ensure HIPAA compliance.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security breaches',
        'Advanced threat detection',
        'Automated security monitoring'
      ],
      image: '/images/case-study-3.jpg'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
    { icon: Zap, value: '40%', label: 'Average Cost Savings' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and client results from our AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Success
            </span>
            <br />
            <span className="text-white">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Discover how we've helped businesses transform with our AI and IT solutions. 
            Real results from real clients.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real projects, real results, real impact on business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{study.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;