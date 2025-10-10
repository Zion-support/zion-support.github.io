'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
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
  const caseStudies: CaseStudy[] = [
    {
id: '1',
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  Search,
  Filter,
  ExternalLink
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies = [
    {
      id: 1,
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing',
      results: [
        '85% reduction in response time',
        '60% cost savings',
        '95% customer satisfaction rate'
      ],
      duration: '6 months',
      teamSize: '12 people',
      image: '/case-studies/techcorp.jpg',
      featured: true
    },
    {
<<<<<<< HEAD
      id: '2',
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.',
=======
      id: 2,
      title: 'Cloud Migration for Financial Services',
      company: 'FinanceFirst Bank',
      industry: 'Finance',
      challenge: 'Legacy systems causing performance issues',
      solution: 'Complete cloud migration with microservices architecture',
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
      results: [
        '99.9% uptime achieved',
        '50% faster transaction processing',
        '40% reduction in infrastructure costs'
      ],
      duration: '8 months',
      teamSize: '20 people',
      image: '/case-studies/financefirst.jpg',
      featured: false
    },
    {
<<<<<<< HEAD
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'HealthTech Systems',
      industry: 'Healthcare',
      challenge: 'Critical security vulnerabilities and non-compliance with HIPAA regulations.',
      solution: 'Comprehensive security audit, implementation of zero-trust architecture, and compliance framework.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents post-implementation',
        '90% reduction in security vulnerabilities',
        'Automated compliance monitoring'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
    }
  ];
  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const stats = [
    { icon: <Building2 className="w-8 h-8 text-blue-600" />, value: '150+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8 text-green-600" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-600" />, value: '40%', label: 'Average Cost Reduction' },
    { icon: <Shield className="w-8 h-8 text-red-600" />, value: '99.9%', label: 'Uptime Achieved' }
  ]return (
    <div className="min-h-screen bg-gray-50">
=======
      id: 3,
      title: 'AI-Driven Supply Chain Optimization',
      company: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain and inventory management',
      solution: 'AI-powered demand forecasting and inventory optimization',
      results: [
        '30% reduction in inventory costs',
        '25% improvement in delivery times',
        '90% accuracy in demand forecasting'
      ],
      duration: '4 months',
      teamSize: '8 people',
      image: '/case-studies/global-manufacturing.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Enhancement for Healthcare',
      company: 'MedSecure Health',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security suite with AI threat detection',
      results: [
        '99.8% threat detection accuracy',
        'Zero security breaches',
        'Full HIPAA compliance achieved'
      ],
      duration: '3 months',
      teamSize: '15 people',
      image: '/case-studies/medsecure.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics Platform for Retail',
      company: 'RetailMax Stores',
      industry: 'Retail',
      challenge: 'Lack of insights from customer data',
      solution: 'Advanced analytics platform with real-time dashboards',
      results: [
        '35% increase in sales',
        '20% improvement in customer retention',
        '50% better inventory management'
      ],
      duration: '5 months',
      teamSize: '10 people',
      image: '/case-studies/retailmax.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'AI-Powered Content Generation',
      company: 'MediaPro Agency',
      industry: 'Media',
      challenge: 'High content creation costs and time constraints',
      solution: 'AI content generation and optimization platform',
      results: [
        '70% reduction in content creation time',
        '40% cost savings',
        '300% increase in content output'
      ],
      duration: '2 months',
      teamSize: '6 people',
      image: '/case-studies/mediapro.jpg',
      featured: false
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'Technology', name: 'Technology' },
    { id: 'Finance', name: 'Finance' },
    { id: 'Manufacturing', name: 'Manufacturing' },
    { id: 'Healthcare', name: 'Healthcare' },
    { id: 'Retail', name: 'Retail' },
    { id: 'Media', name: 'Media' }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const featuredStudy = caseStudies.find(study => study.featured);
  const regularStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. See how we've helped businesses transform their operations and achieve remarkable results." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, business transformation, success stories" />
      </Helmet>
<<<<<<< HEAD
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
  </
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
=======

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Success <span className="text-cyan-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform their operations 
            with cutting-edge AI and IT solutions.
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Case Study</h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-lg">Case Study</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">{featuredStudy.industry}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredStudy.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{featuredStudy.company}</p>
                  <p className="text-gray-300 mb-6">{featuredStudy.challenge}</p>
                  <div className="space-y-2 mb-6">
                    {featuredStudy.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredStudy.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {featuredStudy.teamSize}
                      </div>
                    </div>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStudies.map((study) => (
              <article key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📈</div>
                    <p className="text-sm">Case Study</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-slate-700 text-cyan-400 text-xs font-medium px-2 py-1 rounded">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-xs">{study.duration}</span>
                  </div>
<<<<<<< HEAD
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-green-400" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Case Studies</h1>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Explore our successful implementations and see how we've helped businesses transform with AI and IT solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="aspect-video bg-gray-700 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.client} - {study.industry}</p>
                  <Link 
                    to={`/case-studies/${index}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="flex items-center text-purple-400 hover:text-purple-300 font-semibold group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Share
  </
                  </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
</div>
      </section>
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Our Services
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
=======
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{study.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{study.company}</p>
                  <p className="text-gray-300 mb-4 line-clamp-3">{study.challenge}</p>
                  <div className="space-y-2 mb-4">
                    {study.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {study.teamSize}
                      </div>
                    </div>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions. 
              Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Our Services
              </button>
            </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  )}
export default CaseStudiesPage
  </button>
  </div>
  </div>
  </div>
  </section>
  </h1>
  </div>
=======
  );
};

export default CaseStudiesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
