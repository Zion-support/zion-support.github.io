'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Award } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Support Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer support costs and long response times',
      solution: 'Implemented AI chatbot system with 95% accuracy',
      results: [
        '60% reduction in support costs',
        '95% customer satisfaction rate',
        '24/7 availability',
        '$2M annual savings'
      ],
      duration: '3 months',
      team: '8 specialists',
      technologies: ['AI Chatbots', 'NLP', 'Machine Learning', 'API Integration']
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration to AWS with zero downtime',
      results: [
        '99.9% uptime achieved',
        '40% cost reduction',
        'Enhanced security compliance',
        'Scalable infrastructure'
      ],
      duration: '6 months',
      team: '12 specialists',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and threat protection',
      solution: 'Comprehensive security suite with AI threat detection',
      results: [
        '100% HIPAA compliance',
        '90% reduction in security incidents',
        '24/7 monitoring',
        'Automated threat response'
      ],
      duration: '4 months',
      team: '10 specialists',
      technologies: ['SIEM', 'AI Security', 'Threat Intelligence', 'Compliance']
    },
    {
      id: 4,
      title: 'AI Analytics Platform for E-commerce',
      client: 'ShopSmart',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Poor data insights and low conversion rates',
      solution: 'AI-powered analytics and recommendation engine',
      results: [
        '300% increase in conversion rates',
        'Real-time insights',
        'Personalized recommendations',
        '50% increase in revenue'
      ],
      duration: '5 months',
      team: '15 specialists',
      technologies: ['Machine Learning', 'Big Data', 'Real-time Analytics', 'Recommendation Engine']
    },
    {
      id: 5,
      title: 'Process Automation for Manufacturing',
      client: 'ManufacturingCo',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Manual processes causing delays and errors',
      solution: 'End-to-end automation with RPA and AI',
      results: [
        '80% process automation',
        '70% reduction in errors',
        '50% faster processing',
        '$5M annual savings'
      ],
      duration: '8 months',
      team: '20 specialists',
      technologies: ['RPA', 'AI Automation', 'IoT Integration', 'Workflow Management']
    },
    {
      id: 6,
      title: 'Mobile App Development for Fintech',
      client: 'PayTech',
      industry: 'Fintech',
      image: '/api/placeholder/600/400',
      challenge: 'Need for secure, scalable mobile payment solution',
      solution: 'Native mobile app with advanced security features',
      results: [
        '1M+ downloads in first year',
        '99.9% security rating',
        'Sub-2-second load times',
        '4.8/5 app store rating'
      ],
      duration: '7 months',
      team: '18 specialists',
      technologies: ['React Native', 'Blockchain', 'Biometric Auth', 'Payment APIs']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Case Studies">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-text">
              Real success stories from businesses that transformed with our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{study.title}</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-cyan-400 font-semibold">{study.client}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-300">{study.industry}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Duration</div>
                      <div className="text-cyan-400 font-semibold">{study.duration}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 transition-colors duration-300">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Our Success Metrics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="cyber-card hologram-card p-8 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">500+</h3>
                <p className="text-gray-300">Successful Projects</p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-3xl font-bold text-green-400 mb-2">$50M+</h3>
                <p className="text-gray-300">Client Savings</p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">98%</h3>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-3xl font-bold text-purple-400 mb-2">300%</h3>
                <p className="text-gray-300">Average ROI</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of businesses that have transformed with our AI and IT solutions. 
                Let's create your success story together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-center py-4 px-8 group-hover:scale-105 transition-all duration-300">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
                </button>
                <button className="border border-cyan-500/30 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;