'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
      solution: 'Implemented an AI-powered chatbot system with natural language processing and integrated it with existing CRM systems.',
      results: [
        'Reduced customer service costs by 60%',
        'Improved response time from 24 hours to 2 minutes',
        'Increased customer satisfaction score by 40%',
        'Handled 80% of inquiries without human intervention'
      ],
      image: '/images/case-study-1.jpg',
      duration: '3 months',
      team: '5 developers'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration',
      client: 'FinanceFlow Inc',
      industry: 'Finance',
      challenge: 'Legacy on-premise infrastructure was causing scalability issues and high maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with auto-scaling, implemented DevOps practices, and enhanced security measures.',
      results: [
        'Reduced infrastructure costs by 45%',
        'Improved system performance by 300%',
        'Achieved 99.9% uptime',
        'Reduced deployment time from days to minutes'
      ],
      image: '/images/case-study-2.jpg',
      duration: '6 months',
      team: '8 engineers'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Healthcare data security compliance and threat protection needed significant improvement.',
      solution: 'Implemented comprehensive cybersecurity framework including threat detection, data encryption, and compliance monitoring.',
      results: [
        'Achieved 100% HIPAA compliance',
        'Reduced security incidents by 95%',
        'Implemented real-time threat monitoring',
        'Passed all security audits with flying colors'
      ],
      image: '/images/case-study-3.jpg',
      duration: '4 months',
      team: '6 security specialists'
    },
    {
      id: '4',
      title: 'Machine Learning Analytics Platform',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Need for predictive analytics to optimize inventory, pricing, and customer behavior insights.',
      solution: 'Built custom ML platform with predictive models for inventory management, dynamic pricing, and customer segmentation.',
      results: [
        'Increased revenue by 25% through dynamic pricing',
        'Reduced inventory costs by 30%',
        'Improved customer retention by 35%',
        'Generated $2M in additional profit'
      ],
      image: '/images/case-study-4.jpg',
      duration: '5 months',
      team: '7 data scientists'
    },
    {
      id: '5',
      title: 'Process Automation Implementation',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Manual processes were causing delays, errors, and inefficiencies in production workflows.',
      solution: 'Implemented RPA solutions and workflow automation to streamline manufacturing processes and quality control.',
      results: [
        'Reduced manual processing time by 70%',
        'Eliminated 95% of human errors',
        'Increased production efficiency by 40%',
        'Saved 200+ hours per month'
      ],
      image: '/images/case-study-5.jpg',
      duration: '4 months',
      team: '4 automation specialists'
    },
    {
      id: '6',
      title: 'Mobile App Development',
      client: 'EduTech Solutions',
      industry: 'Education',
      challenge: 'Need for a comprehensive mobile learning platform with AI-powered personalization.',
      solution: 'Developed cross-platform mobile app with AI-driven content recommendations and interactive learning features.',
      results: [
        'Achieved 4.8/5 app store rating',
        'Increased user engagement by 150%',
        'Reduced course completion time by 30%',
        'Generated $500K in additional revenue'
      ],
      image: '/images/case-study-6.jpg',
      duration: '6 months',
      team: '10 developers'
    }
  ];

  const industries = ['all', 'Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing', 'Education'];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const stats = [
    { icon: TrendingUp, value: '300%', label: 'Average Performance Improvement' },
    { icon: Users, value: '50+', label: 'Successful Projects' },
    { icon: Award, value: '99%', label: 'Client Satisfaction Rate' },
    { icon: Building2, value: '15+', label: 'Industries Served' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, client results, testimonials" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Success
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform their operations 
            with our AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {industry === 'all' ? 'All Industries' : industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1" />
                        {study.client}
                      </span>
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {study.results.slice(0, 3).map((result, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                    {study.results.length > 3 && (
                      <li className="text-sm text-cyan-400">
                        +{study.results.length - 3} more results
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </span>
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center group"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;