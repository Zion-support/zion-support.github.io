'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '60% reduction in customer service costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '50% increase in first-call resolution'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '5 AI engineers, 2 UX designers'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration',
      client: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Legacy on-premise systems causing scalability issues and high maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with auto-scaling and disaster recovery capabilities.',
      results: [
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster application deployment',
        'Zero data loss during migration'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '8 cloud engineers, 3 DevOps specialists'
    },
    {
      id: '3',
      title: 'AI-Powered Supply Chain Optimization',
      client: 'RetailChain Ltd.',
      industry: 'Retail',
      challenge: 'Inefficient inventory management leading to stockouts and overstock situations.',
      solution: 'Developed AI-driven demand forecasting and inventory optimization system.',
      results: [
        '30% reduction in inventory costs',
        '25% decrease in stockouts',
        '20% improvement in cash flow',
        '15% increase in sales'
      ],
      image: '/images/case-studies/supply-chain-ai.jpg',
      duration: '4 months',
      team: '6 AI engineers, 4 data scientists'
    },
    {
      id: '4',
      title: 'Cybersecurity Enhancement',
      client: 'Financial Services Group',
      industry: 'Finance',
      challenge: 'Increasing cyber threats and compliance requirements in the financial sector.',
      solution: 'Implemented comprehensive security framework with AI-powered threat detection.',
      results: [
        '99.8% threat detection accuracy',
        'Zero security breaches',
        '100% compliance achievement',
        '50% reduction in security incidents'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '5 months',
      team: '7 security experts, 3 AI engineers'
    },
    {
      id: '5',
      title: 'AI-Powered Marketing Automation',
      client: 'E-commerce Startup',
      industry: 'E-commerce',
      challenge: 'Manual marketing processes limiting growth and personalization capabilities.',
      solution: 'Built AI-driven marketing automation platform with personalized customer journeys.',
      results: [
        '200% increase in email open rates',
        '150% improvement in conversion rates',
        '80% reduction in manual work',
        '300% ROI on marketing spend'
      ],
      image: '/images/case-studies/marketing-automation.jpg',
      duration: '2 months',
      team: '4 AI engineers, 2 marketing specialists'
    },
    {
      id: '6',
      title: 'Predictive Maintenance System',
      client: 'Industrial Equipment Corp.',
      industry: 'Manufacturing',
      challenge: 'Unexpected equipment failures causing production delays and high maintenance costs.',
      solution: 'Developed AI-powered predictive maintenance system using IoT sensors and machine learning.',
      results: [
        '70% reduction in unplanned downtime',
        '40% decrease in maintenance costs',
        '90% accuracy in failure prediction',
        '25% increase in equipment lifespan'
      ],
      image: '/images/case-studies/predictive-maintenance.jpg',
      duration: '6 months',
      team: '8 AI engineers, 4 IoT specialists'
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'Technology', name: 'Technology' },
    { id: 'Manufacturing', name: 'Manufacturing' },
    { id: 'Retail', name: 'Retail' },
    { id: 'Finance', name: 'Finance' },
    { id: 'E-commerce', name: 'E-commerce' }
  ];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedIndustry === 'all' || study.industry === selectedIndustry
  );

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: CheckCircle },
    { number: '95%', label: 'Client Satisfaction', icon: Award },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT projects. See how we've helped businesses transform with our innovative solutions." />
        <meta name="keywords" content="case studies, AI projects, IT solutions, success stories, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Case
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              Real success stories from our clients. See how we've transformed businesses with AI and technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.client}
                      </span>
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      {study.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </span>
                  </div>
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-300">Try selecting a different industry filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Let us help you achieve similar results with our AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;