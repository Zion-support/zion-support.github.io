'use client';
import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Target, BarChart, Clock, Globe, Brain, Cloud, Shield, Code, Database, Smartphone, Settings, Lock, Zap, Star, Phone, Mail, Eye, MessageSquare, Share2, Download, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing Company: AI-Powered Quality Control',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes were causing delays and inconsistencies, leading to 15% defect rates and customer complaints.',
      solution: 'Implemented AI-powered computer vision system for automated quality inspection with real-time defect detection.',
      results: [
        '95% reduction in defect rates',
        '300% increase in inspection speed',
        '$2.5M annual cost savings',
        '99.8% accuracy in defect detection'
      ],
      technologies: ['Computer Vision', 'Machine Learning', 'Real-time Processing', 'IoT Integration'],
      duration: '6 months',
      teamSize: '8 specialists',
      image: '/case-studies/manufacturing-ai.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Provider: AI-Driven Patient Care Optimization',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Patient care coordination was inefficient, leading to longer wait times and suboptimal resource allocation.',
      solution: 'Developed AI system for patient flow optimization, predictive analytics for resource planning, and automated scheduling.',
      results: [
        '40% reduction in patient wait times',
        '25% improvement in resource utilization',
        '60% decrease in scheduling conflicts',
        '98% patient satisfaction rate'
      ],
      technologies: ['Predictive Analytics', 'Natural Language Processing', 'Workflow Automation', 'Data Integration'],
      duration: '8 months',
      teamSize: '12 specialists',
      image: '/case-studies/healthcare-ai.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Financial Services: AI-Powered Fraud Detection System',
      client: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'Traditional fraud detection methods were missing 30% of fraudulent transactions, costing millions in losses.',
      solution: 'Implemented advanced AI fraud detection system with real-time transaction monitoring and behavioral analysis.',
      results: [
        '85% reduction in false positives',
        '95% fraud detection accuracy',
        '$5M prevented fraud losses',
        '50% faster transaction processing'
      ],
      technologies: ['Machine Learning', 'Real-time Analytics', 'Behavioral Analysis', 'Risk Assessment'],
      duration: '4 months',
      teamSize: '6 specialists',
      image: '/case-studies/finance-ai.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'E-commerce Platform: AI-Powered Personalization Engine',
      client: 'Online Retailer',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer engagement due to generic product recommendations.',
      solution: 'Built AI-powered personalization engine with recommendation system, customer segmentation, and dynamic pricing.',
      results: [
        '150% increase in conversion rates',
        '200% improvement in average order value',
        '80% increase in customer engagement',
        '35% reduction in cart abandonment'
      ],
      technologies: ['Recommendation Systems', 'Customer Analytics', 'Dynamic Pricing', 'A/B Testing'],
      duration: '5 months',
      teamSize: '10 specialists',
      image: '/case-studies/ecommerce-ai.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Logistics Company: AI-Driven Route Optimization',
      client: 'National Logistics Corp',
      industry: 'Logistics',
      challenge: 'Inefficient route planning was causing fuel waste, delivery delays, and increased operational costs.',
      solution: 'Developed AI-powered route optimization system with real-time traffic analysis and dynamic routing.',
      results: [
        '30% reduction in fuel costs',
        '25% improvement in delivery times',
        '40% increase in driver efficiency',
        '20% reduction in carbon emissions'
      ],
      technologies: ['Route Optimization', 'Real-time Data Processing', 'Predictive Analytics', 'IoT Integration'],
      duration: '7 months',
      teamSize: '9 specialists',
      image: '/case-studies/logistics-ai.jpg',
      featured: true
    },
    {
      id: 6,
      title: 'IT Services: Cloud Migration and Infrastructure Modernization',
      client: 'Technology Company',
      industry: 'Technology',
      challenge: 'Legacy infrastructure was causing performance issues, security vulnerabilities, and high maintenance costs.',
      solution: 'Executed comprehensive cloud migration with modern infrastructure, security enhancements, and automation.',
      results: [
        '99.9% uptime achievement',
        '50% reduction in infrastructure costs',
        '300% improvement in performance',
        '100% security compliance'
      ],
      technologies: ['Cloud Migration', 'DevOps', 'Security Hardening', 'Infrastructure Automation'],
      duration: '10 months',
      teamSize: '15 specialists',
      image: '/case-studies/cloud-migration.jpg',
      featured: false
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const allStudies = caseStudies;

  const industries = [
    { name: 'Manufacturing', count: 12, icon: '🏭' },
    { name: 'Healthcare', count: 8, icon: '🏥' },
    { name: 'Financial Services', count: 15, icon: '💰' },
    { name: 'E-commerce', count: 10, icon: '🛒' },
    { name: 'Logistics', count: 6, icon: '🚛' },
    { name: 'Technology', count: 20, icon: '💻' }
  ];

  const stats = [
    { number: '50+', label: 'Successful Projects' },
    { number: '100+', label: 'Happy Clients' },
    { number: '300%', label: 'Average ROI' },
    { number: '99.9%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Case Studies
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform their operations 
            with cutting-edge AI and IT solutions. Real results, real impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Star className="w-8 h-8 text-yellow-400 mr-3" />
            Featured Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStudies.map((study) => (
              <div key={study.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-gray-400">{study.industry}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-cyan-400 font-medium mb-4">{study.client}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Duration: {study.duration}</span>
                  <span>Team: {study.teamSize}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allStudies.map((study) => (
              <div key={study.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                  {study.featured && (
                    <Star className="w-4 h-4 text-yellow-400" />
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{study.title}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.client}</p>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {study.technologies.slice(0, 2).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-cyan-400 text-sm">{industry.count} projects</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the growing number of businesses that trust Zion Tech Group for their AI and IT needs. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;