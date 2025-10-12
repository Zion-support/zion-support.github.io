import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock, Target, CheckCircle } from 'lucide-react';
'use client';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      duration: '6 months',
      team: '8 members',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbot system with natural language processing and machine learning capabilities.',
      results: [
        '60% reduction in customer service costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '50% increase in first-call resolution'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'Docker'],
      image: '/images/case-studies/ai-customer-service.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      duration: '8 months',
      team: '12 members',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing operational costs.',
      solution: 'Complete migration to AWS cloud with microservices architecture and automated CI/CD pipelines.',
      results: [
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment times',
        'Enhanced security compliance'
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'PostgreSQL'],
      image: '/images/case-studies/cloud-migration.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      duration: '4 months',
      team: '6 members',
      challenge: 'Critical security vulnerabilities and compliance issues in patient data management.',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents in 12 months',
        '50% reduction in security alerts',
        'Enhanced patient data protection'
      ],
      technologies: ['Zero Trust', 'SIEM', 'MFA', 'Encryption', 'Monitoring'],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'E-commerce Platform Modernization',
      client: 'RetailMax',
      industry: 'Retail',
      duration: '10 months',
      team: '15 members',
      challenge: 'Outdated e-commerce platform with poor performance and limited scalability.',
      solution: 'Complete platform rebuild with modern architecture, microservices, and advanced analytics.',
      results: [
        '5x increase in page load speed',
        '300% increase in conversion rates',
        '99.8% uptime during peak seasons',
        'Real-time analytics and insights'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Kubernetes'],
      image: '/images/case-studies/ecommerce-modernization.jpg',
      featured: false
    }
  ];

  const industries = ['All', 'Technology', 'Financial Services', 'Healthcare', 'Retail', 'Manufacturing', 'Education'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies. See how we've helped businesses transform with AI, cloud, and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, cybersecurity, digital transformation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Success
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Stories
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform and achieve their goals 
            with cutting-edge AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Case Study</h2>
          {caseStudies.filter(study => study.featured).map((study) => (
            <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.duration}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{study.solution}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      {study.team}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      {study.duration}
                    </div>
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                  >
                    Read Full Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-400">Case Study Image</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful projects across different industries and technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {caseStudies.filter(study => !study.featured).map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-400 text-sm">Case Study Image</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold rounded">
                    {study.industry}
                  </span>
                  <span className="text-gray-400 text-xs">{study.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{study.solution}</p>
                
                <div className="space-y-2 mb-6">
                  {study.results.slice(0, 2).map((result, index) => (
                    <div key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {result}
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Read Full Case Study
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to transform your business and achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;