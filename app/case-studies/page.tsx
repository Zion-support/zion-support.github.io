'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, BarChart3, Users, Clock, CheckCircle, Star } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  duration: string;
  teamSize: string;
  technologies: string[];
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'The client was struggling with high customer service costs and long response times, handling over 100,000 customer inquiries monthly.',
      solution: 'We implemented an AI-powered chatbot system with natural language processing, integrated with their existing CRM, and provided 24/7 multilingual support.',
      results: [
        'Reduced customer service costs by 60%',
        'Improved response time from 24 hours to 2 minutes',
        'Increased customer satisfaction by 40%',
        'Handled 80% of inquiries without human intervention'
      ],
      metrics: [
        { label: 'Cost Reduction', value: '60%', improvement: 'vs. previous year' },
        { label: 'Response Time', value: '2 min', improvement: 'from 24 hours' },
        { label: 'Satisfaction', value: '95%', improvement: '+40% increase' },
        { label: 'Automation', value: '80%', improvement: 'of inquiries handled' }
      ],
      duration: '3 months',
      teamSize: '8 developers',
      technologies: ['AI/ML', 'NLP', 'Chatbot', 'CRM Integration'],
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration & Optimization',
      client: 'Financial Services Company',
      industry: 'Finance',
      challenge: 'Legacy on-premises infrastructure was causing scalability issues and high maintenance costs, limiting growth potential.',
      solution: 'We designed and implemented a comprehensive cloud migration strategy using AWS, including microservices architecture and automated scaling.',
      results: [
        'Reduced infrastructure costs by 45%',
        'Improved system performance by 300%',
        'Achieved 99.9% uptime',
        'Enabled rapid scaling for peak loads'
      ],
      metrics: [
        { label: 'Cost Savings', value: '45%', improvement: 'infrastructure costs' },
        { label: 'Performance', value: '300%', improvement: 'faster response' },
        { label: 'Uptime', value: '99.9%', improvement: 'availability' },
        { label: 'Scalability', value: '10x', improvement: 'peak capacity' }
      ],
      duration: '6 months',
      teamSize: '12 engineers',
      technologies: ['AWS', 'Kubernetes', 'Microservices', 'DevOps'],
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'The organization needed to strengthen its security posture and achieve HIPAA compliance while maintaining operational efficiency.',
      solution: 'We implemented a comprehensive security framework including threat detection, encryption, access controls, and compliance monitoring.',
      results: [
        'Achieved 100% HIPAA compliance',
        'Reduced security incidents by 90%',
        'Implemented zero-trust architecture',
        'Established 24/7 security monitoring'
      ],
      metrics: [
        { label: 'Compliance', value: '100%', improvement: 'HIPAA certified' },
        { label: 'Security Incidents', value: '90%', improvement: 'reduction' },
        { label: 'Monitoring', value: '24/7', improvement: 'real-time' },
        { label: 'Response Time', value: '5 min', improvement: 'threat detection' }
      ],
      duration: '4 months',
      teamSize: '6 specialists',
      technologies: ['Cybersecurity', 'HIPAA', 'Zero Trust', 'SIEM'],
      featured: false
    },
    {
      id: '4',
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'The company had vast amounts of operational data but lacked the tools to extract actionable insights for decision-making.',
      solution: 'We built a comprehensive data analytics platform with real-time dashboards, predictive analytics, and automated reporting.',
      results: [
        'Improved operational efficiency by 35%',
        'Reduced equipment downtime by 50%',
        'Enabled data-driven decision making',
        'Generated $2M in cost savings'
      ],
      metrics: [
        { label: 'Efficiency', value: '35%', improvement: 'operational gains' },
        { label: 'Downtime', value: '50%', improvement: 'reduction' },
        { label: 'Cost Savings', value: '$2M', improvement: 'annual savings' },
        { label: 'Data Processing', value: 'Real-time', improvement: 'analytics' }
      ],
      duration: '5 months',
      teamSize: '10 analysts',
      technologies: ['Data Analytics', 'Machine Learning', 'BI', 'IoT'],
      featured: false
    }
  ];

  const industries = ['all', 'E-commerce', 'Finance', 'Healthcare', 'Manufacturing', 'Technology'];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories | Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our successful client projects and case studies. See how Zion Tech Group has helped businesses transform with AI, cloud, and cybersecurity solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client projects, AI implementation, cloud migration, cybersecurity, business transformation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI, cloud, and cybersecurity solutions.
            </p>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Featured Case Studies
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium mr-3">
                        Featured
                      </span>
                      <span className="text-sm text-gray-400">{study.industry}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.slice(0, 4).map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                        <div className="text-sm text-gray-300">{metric.label}</div>
                        <div className="text-xs text-gray-400">{metric.improvement}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              All Case Studies
            </h2>
            <div className="space-y-8">
              {filteredCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        {study.featured && (
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium mr-3">
                            Featured
                          </span>
                        )}
                        <span className="text-sm text-gray-400">{study.industry}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-gray-300 mb-4">
                        <strong>Client:</strong> {study.client}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.teamSize}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl font-bold text-cyan-400">{metric.value}</div>
                          <div className="text-sm text-gray-300">{metric.label}</div>
                          <div className="text-xs text-gray-400">{metric.improvement}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let us help you achieve similar results. Contact our team to discuss how we can 
              transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;