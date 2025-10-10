'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times were impacting customer satisfaction and business growth.',
      solution: 'Implemented an AI-powered chatbot system with natural language processing and automated ticket routing.',
      results: [
        'Reduced response time by 75%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction by 40%',
        'Handled 10x more inquiries simultaneously'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '5 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Legacy systems were causing downtime and limiting scalability for a growing manufacturing operation.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated monitoring.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster application deployment',
        'Improved security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Financial Services Group',
      industry: 'Finance',
      challenge: 'Increasing cyber threats and regulatory compliance requirements needed immediate attention.',
      solution: 'Implemented comprehensive security framework with threat detection, incident response, and compliance monitoring.',
      results: [
        'Zero security breaches in 12 months',
        '100% compliance with regulations',
        '50% faster threat detection',
        'Reduced security incidents by 90%'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'Retail Chain Corp',
      industry: 'Retail',
      challenge: 'Lack of data insights was preventing informed decision-making and growth opportunities.',
      solution: 'Built comprehensive analytics platform with real-time dashboards and predictive modeling.',
      results: [
        '30% increase in sales',
        '25% improvement in inventory management',
        '40% better customer targeting',
        'Real-time business insights'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '7 specialists'
    },
    {
      id: '5',
      title: 'Mobile App Development & Digital Transformation',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Outdated patient management systems were causing inefficiencies and poor patient experience.',
      solution: 'Developed comprehensive mobile app with patient portal, appointment scheduling, and telemedicine features.',
      results: [
        '60% reduction in appointment no-shows',
        '40% improvement in patient satisfaction',
        'Streamlined administrative processes',
        'Enhanced patient engagement'
      ],
      image: '/images/case-studies/mobile-app.jpg',
      duration: '7 months',
      team: '9 specialists'
    },
    {
      id: '6',
      title: 'AI-Powered Marketing Automation',
      client: 'E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Manual marketing processes were limiting growth and personalization capabilities.',
      solution: 'Implemented AI-driven marketing automation with personalized campaigns and predictive analytics.',
      results: [
        '200% increase in conversion rates',
        '50% reduction in marketing costs',
        '3x improvement in customer engagement',
        'Automated campaign optimization'
      ],
      image: '/images/case-studies/marketing-automation.jpg',
      duration: '4 months',
      team: '6 specialists'
    }
  ];

  const industries = ['all', 'Technology', 'Manufacturing', 'Finance', 'Retail', 'Healthcare', 'E-commerce'];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedIndustry === 'all' || study.industry === selectedIndustry
  );

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Technology': return Building2;
      case 'Manufacturing': return Zap;
      case 'Finance': return Shield;
      case 'Retail': return TrendingUp;
      case 'Healthcare': return Users;
      case 'E-commerce': return Award;
      default: return Building2;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing AI and IT solutions that transformed businesses." />
        <meta name="keywords" content="case studies, success stories, AI projects, IT solutions, business transformation, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => {
                const IndustryIcon = getIndustryIcon(study.industry);
                return (
                  <div key={study.id} className="bg-slate-800/50 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                    <div className="h-48 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-6xl text-cyan-400/50">📊</div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                          <IndustryIcon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <span>{study.duration}</span>
                            <span>•</span>
                            <span>{study.team}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-2">Client: {study.client}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          <strong>Challenge:</strong> {study.challenge}
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                        <span>View Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-gray-300">Numbers that speak for themselves</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;