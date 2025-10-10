'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, CheckCircle, TrendingUp, Users, Clock, Target } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        '75% reduction in response time',
        '60% cost savings in customer service',
        '95% customer satisfaction rate',
        '50% increase in ticket resolution efficiency'
      ],
      duration: '6 months',
      team: '8 members',
      image: '/case-studies/techcorp.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Migration',
      company: 'FinanceFlow',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing downtime and security concerns',
      solution: 'Complete cloud migration with enhanced security measures',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        'Enhanced security compliance',
        '50% faster application deployment'
      ],
      duration: '4 months',
      team: '12 members',
      image: '/case-studies/financeflow.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard Implementation',
      company: 'RetailMax',
      industry: 'Retail',
      challenge: 'Lack of real-time insights into business performance',
      solution: 'Custom analytics dashboard with predictive modeling',
      results: [
        'Real-time business insights',
        '25% increase in sales',
        '30% improvement in inventory management',
        'Data-driven decision making'
      ],
      duration: '3 months',
      team: '6 members',
      image: '/case-studies/retailmax.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Enhancement',
      company: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security framework and threat detection system',
      results: [
        'Zero security breaches',
        '100% compliance achievement',
        '24/7 threat monitoring',
        'Reduced security incidents by 90%'
      ],
      duration: '5 months',
      team: '10 members',
      image: '/case-studies/healthcare.jpg',
      featured: false
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI and IT solutions across various industries." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT projects, business transformation, client results" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Success <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {caseStudies.filter(study => study.featured).map(study => (
        <section key={study.id} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Case Study</h2>
              <p className="text-xl text-gray-300">See how we transformed a business with our solutions</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {study.title}
                  </h3>
                  <p className="text-blue-100 text-lg mb-6">
                    <strong>Company:</strong> {study.company}
                  </p>
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-blue-100">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-blue-100">{study.solution}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-blue-100 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{study.team}</span>
                    </div>
                  </div>
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 group">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="bg-white/10 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <p>Case Study Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* All Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-300">Explore our complete portfolio of successful projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map(study => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="bg-white/10 rounded-xl h-48 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6" />
                    </div>
                    <p className="text-sm">Case Study Image</p>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
                  {study.industry}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  <strong>Company:</strong> {study.company}
                </p>
                <div className="space-y-2 mb-6">
                  <h4 className="text-white font-semibold text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 3).map((result, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{study.team}</span>
                  </div>
                </div>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center space-x-1 group">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;