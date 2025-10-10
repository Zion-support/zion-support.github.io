'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  Star
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Global',
      industry: 'Technology',
      duration: '6 months',
      teamSize: '12 developers',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and inconsistent response times across multiple channels.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '60% decrease in customer service costs',
        '95% customer satisfaction rate',
        '50% increase in first-call resolution'
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Computing', 'API Integration'],
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      duration: '8 months',
      teamSize: '15 developers',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated CI/CD pipelines.',
      results: [
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '300% improvement in deployment speed',
        '50% reduction in security incidents'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      duration: '4 months',
      teamSize: '8 security experts',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance requirements and increasing cyber threats targeting healthcare data.',
      solution: 'Comprehensive security audit and implementation of AI-powered threat detection system.',
      results: [
        '100% HIPAA compliance achieved',
        '90% reduction in security incidents',
        '24/7 automated threat monitoring',
        'Zero data breaches since implementation'
      ],
      technologies: ['AI Security', 'Threat Detection', 'Compliance Monitoring', 'SIEM'],
      featured: false
    },
    {
      id: 4,
      title: 'E-commerce Platform Optimization',
      client: 'RetailMax',
      industry: 'Retail',
      duration: '5 months',
      teamSize: '10 developers',
      image: '/api/placeholder/600/400',
      challenge: 'Slow website performance and low conversion rates affecting revenue.',
      solution: 'Performance optimization, AI-powered recommendation engine, and mobile-first redesign.',
      results: [
        '60% improvement in page load speed',
        '35% increase in conversion rate',
        '45% boost in mobile traffic',
        '25% increase in average order value'
      ],
      technologies: ['React', 'Node.js', 'AI/ML', 'CDN', 'Performance Optimization'],
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      duration: '3 months',
      teamSize: '6 data scientists',
      image: '/api/placeholder/600/400',
      challenge: 'Lack of real-time visibility into production metrics and quality control.',
      solution: 'Real-time data analytics platform with predictive maintenance and quality control algorithms.',
      results: [
        '30% reduction in equipment downtime',
        '20% improvement in product quality',
        'Real-time production monitoring',
        'Predictive maintenance accuracy of 85%'
      ],
      technologies: ['Data Analytics', 'Machine Learning', 'IoT', 'Real-time Processing'],
      featured: false
    },
    {
      id: 6,
      title: 'Mobile App Development for Logistics',
      client: 'LogiTech Solutions',
      industry: 'Logistics',
      duration: '7 months',
      teamSize: '14 developers',
      image: '/api/placeholder/600/400',
      challenge: 'Inefficient delivery tracking and driver management system.',
      solution: 'Cross-platform mobile app with GPS tracking, route optimization, and driver management features.',
      results: [
        '25% improvement in delivery efficiency',
        '40% reduction in fuel costs',
        'Real-time tracking for customers',
        '90% driver satisfaction rate'
      ],
      technologies: ['React Native', 'GPS Tracking', 'Route Optimization', 'Real-time Updates'],
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-scan-line">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions. Real results from real clients.
            </p>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Featured Case Studies
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study) => (
                <article key={study.id} className="quantum-card p-8 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:translate-x-1"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              All Case Studies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <article key={study.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {study.challenge}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 3).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                      {study.results.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{study.results.length - 3} more results
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="text-gray-400 text-xs">+{study.technologies.length - 3}</span>
                      )}
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:translate-x-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="quantum-card p-12">
              <h2 className="text-4xl font-bold text-white mb-4 holographic-text">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and IT solutions.
                Join the ranks of our successful clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center"
                >
                  Start Your Project
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