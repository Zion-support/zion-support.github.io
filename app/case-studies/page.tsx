'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment and poor user experience',
      solution: 'Complete platform rebuild with AI-powered recommendations and real-time analytics',
      results: [
        '60% increase in conversion rate',
        '45% reduction in cart abandonment',
        '80% improvement in page load speed',
        '200% increase in mobile traffic'
      ],
      duration: '6 months',
      team: '12 developers',
      image: '/api/placeholder/600/400',
      tags: ['E-commerce', 'AI', 'Mobile', 'Performance']
    },
    {
      id: 2,
      title: 'Healthcare AI Implementation',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Manual patient data analysis taking 8+ hours per case',
      solution: 'AI-powered diagnostic assistance system with machine learning algorithms',
      results: [
        '75% reduction in analysis time',
        '90% accuracy in preliminary diagnoses',
        '50% improvement in patient outcomes',
        '60% cost savings in diagnostic processes'
      ],
      duration: '8 months',
      team: '8 developers',
      image: '/api/placeholder/600/400',
      tags: ['Healthcare', 'AI', 'Machine Learning', 'Diagnostics']
    },
    {
      id: 3,
      title: 'Financial Services Security Upgrade',
      client: 'SecureBank Corp',
      industry: 'Financial Services',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive cybersecurity suite with real-time threat detection',
      results: [
        '99.9% threat detection accuracy',
        'Zero security breaches in 12 months',
        '40% reduction in security incidents',
        '100% compliance with industry standards'
      ],
      duration: '4 months',
      team: '6 developers',
      image: '/api/placeholder/600/400',
      tags: ['Cybersecurity', 'Compliance', 'Real-time', 'Financial']
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'SmartManufacturing Ltd',
      industry: 'Manufacturing',
      challenge: 'Inefficient production monitoring and predictive maintenance',
      solution: 'IoT sensor network with AI-powered predictive analytics',
      results: [
        '30% reduction in downtime',
        '25% increase in production efficiency',
        '50% reduction in maintenance costs',
        '90% accuracy in failure prediction'
      ],
      duration: '10 months',
      team: '15 developers',
      image: '/api/placeholder/600/400',
      tags: ['IoT', 'Manufacturing', 'Predictive Analytics', 'Efficiency']
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <TrendingUp className="w-8 h-8" /> },
    { number: '50+', label: 'Industry Experts', icon: <Users className="w-8 h-8" /> },
    { number: '$2M+', label: 'Cost Savings Generated', icon: <DollarSign className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Success Stories & Client Results | Zion Tech Group</title>
        <meta name="description" content="Explore our success stories and see how we've helped businesses transform with cutting-edge technology solutions." />
        <meta name="keywords" content="case studies, success stories, client results, AI implementation, digital transformation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              and achieve remarkable results with our technology solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how our solutions have transformed businesses across different industries.
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                  <div className="flex-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm rounded-full">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.duration}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300 mb-4">{study.challenge}</p>
                        
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300 mb-4">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center group">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl overflow-hidden">
                      <div className="w-full h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-6xl">📊</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven technology solutions. 
              Join the ranks of our successful clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;