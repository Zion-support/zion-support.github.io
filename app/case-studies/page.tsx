'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp,
  Shield,
  Cloud,
  Brain,
  BarChart3,
  Users,
  Clock,
  Award,
  Target,
  Globe
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbots and automated ticket routing',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate',
        '24/7 support availability'
      ],
      image: '/api/placeholder/600/400',
      duration: '3 months',
      team: '5 AI specialists',
      technologies: ['AI Chatbots', 'NLP', 'Machine Learning', 'CRM Integration'],
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security and compliance',
      results: [
        '99.9% uptime achieved',
        '50% improvement in performance',
        'Enhanced security compliance',
        '30% reduction in operational costs'
      ],
      image: '/api/placeholder/600/400',
      duration: '6 months',
      team: '8 cloud specialists',
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Security'],
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance and protecting patient data',
      solution: 'Comprehensive security audit and implementation of advanced security measures',
      results: [
        '100% HIPAA compliance',
        'Zero security incidents',
        'Advanced threat detection',
        'Automated compliance reporting'
      ],
      image: '/api/placeholder/600/400',
      duration: '4 months',
      team: '6 security experts',
      technologies: ['SIEM', 'Firewall', 'Encryption', 'Compliance', 'Monitoring'],
      featured: false
    },
    {
      id: 4,
      title: 'E-commerce AI Optimization',
      client: 'ShopSmart',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'AI-powered recommendation engine and personalization',
      results: [
        '35% increase in conversion rates',
        '25% boost in average order value',
        '50% improvement in customer engagement',
        '40% reduction in cart abandonment'
      ],
      image: '/api/placeholder/600/400',
      duration: '5 months',
      team: '7 AI engineers',
      technologies: ['Machine Learning', 'Recommendation Engine', 'Personalization', 'Analytics'],
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time insights and data-driven decision making',
      solution: 'Custom analytics dashboard with predictive maintenance',
      results: [
        'Real-time production monitoring',
        '20% reduction in downtime',
        'Predictive maintenance alerts',
        'Data-driven decision making'
      ],
      image: '/api/placeholder/600/400',
      duration: '4 months',
      team: '6 data scientists',
      technologies: ['Data Analytics', 'IoT', 'Machine Learning', 'Dashboard', 'Predictive Analytics'],
      featured: false
    },
    {
      id: 6,
      title: 'Mobile App Development for Healthcare',
      client: 'HealthConnect',
      industry: 'Healthcare',
      challenge: 'Need for patient engagement and telemedicine capabilities',
      solution: 'Native mobile app with telemedicine and AI-powered health insights',
      results: [
        '50,000+ app downloads',
        '4.8/5 app store rating',
        '90% patient satisfaction',
        'Reduced hospital visits by 30%'
      ],
      image: '/api/placeholder/600/400',
      duration: '8 months',
      team: '10 mobile developers',
      technologies: ['React Native', 'iOS', 'Android', 'Telemedicine', 'AI Health'],
      featured: false
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
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
              Discover how we've helped businesses transform with our AI and IT solutions. 
              Real results from real clients.
            </p>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-cyan-400" />
              Featured Case Studies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{study.client}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Globe className="w-4 h-4" />
                          <span>{study.industry}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
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
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-4">
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
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              All Case Studies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Globe className="w-4 h-4" />
                        <span>{study.industry}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                      {study.results.length > 2 && (
                        <li className="text-gray-400 text-sm">
                          +{study.results.length - 2} more results
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Target className="w-5 h-5" />
                  <span>Start Your Project</span>
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View Our Services
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