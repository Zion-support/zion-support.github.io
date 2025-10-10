'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Users, Clock, TrendingUp } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      duration: '3 months',
      team: '8 specialists',
      image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      technologies: ['AI Chatbot', 'Machine Learning', 'Natural Language Processing', 'API Integration']
    },
    {
      id: 2,
      title: 'Cloud Migration & Security Enhancement',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      duration: '6 months',
      team: '12 specialists',
      image: '/images/case-studies/cloud-migration.jpg',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: [
        '99.9% uptime achieved',
        '50% faster processing times',
        'Zero security breaches',
        '40% reduction in operational costs'
      ],
      technologies: ['AWS Cloud', 'Docker', 'Kubernetes', 'Security Hardening']
    },
    {
      id: 3,
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      duration: '4 months',
      team: '10 specialists',
      image: '/images/case-studies/data-analytics.jpg',
      challenge: 'Lack of real-time insights and data-driven decision making',
      solution: 'Built comprehensive BI platform with predictive analytics',
      results: [
        '35% increase in sales',
        '25% improvement in inventory management',
        'Real-time dashboard implementation',
        'Predictive demand forecasting'
      ],
      technologies: ['Python', 'Tableau', 'Machine Learning', 'Big Data Processing']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful AI and IT implementations. Real case studies showcasing measurable results for clients across industries." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, client results, project portfolio" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success <span className="text-cyan-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions. 
            Real projects, real results, real impact.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20 relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {study.team}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Impact in Numbers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$2M+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven AI and IT solutions. 
              Join the ranks of our successful clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Your Project
              </button>
              <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
