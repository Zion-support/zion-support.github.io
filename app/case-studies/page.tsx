import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle } from 'lucide-react';

import { ArrowRight, TrendingUp, Zap, BarChart3, Clock, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform AI Transformation",
      company: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Manual inventory management and customer service bottlenecks",
      solution: "AI-powered inventory optimization and automated customer support",
      results: [
        "60% reduction in inventory costs",
        "40% increase in customer satisfaction",
        "80% faster response times",
        "35% increase in sales"
      ],
      image: "/images/case-studies/ecommerce-ai.jpg",
      duration: "6 months",
      services: ["AI Analytics", "AI Customer Support", "Data Analytics"],
      image: "/api/placeholder/600/400",
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, Users, TrendingUp, Award, CheckCircle, Star, Zap } from 'lucide-react';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 8 },
    { id: 'ai', name: 'AI Solutions', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 },
    { id: 'cloud', name: 'Cloud Migration', count: 2 },
    { id: 'development', name: 'Custom Development', count: 1 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      category: 'ai',
      duration: '6 months',
      teamSize: '8 developers',
      challenge: 'TechCorp was struggling with high customer service costs and long response times. Their traditional support system couldn\'t handle the increasing volume of inquiries.',
      solution: 'We implemented an AI-powered chatbot system with natural language processing capabilities, integrated with their existing CRM system.',
      results: [
        '60% reduction in customer service costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '50% increase in first-call resolution'
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'CRM Integration', 'Cloud Infrastructure'],
      image: '/api/placeholder/600/400',
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
      featured: true
    },
    {
      id: 2,
<<<<<<< HEAD
      title: "Healthcare Data Analytics Implementation",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and treatment optimization",
      solution: "Advanced AI analytics platform for predictive healthcare insights",
      results: [
        "45% improvement in diagnosis accuracy",
        "30% reduction in treatment costs",
        "50% faster data processing",
        "25% increase in patient outcomes"
      ],
      duration: "8 months",
      services: ["AI Analytics", "Data Engineering", "Machine Learning"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "Manufacturing Process Automation",
      company: "Industrial Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and quality control issues",
      solution: "AI-driven process optimization and automated quality monitoring",
      results: [
        "55% increase in production efficiency",
        "70% reduction in defects",
        "40% decrease in downtime",
        "25% cost savings"
      ],
      duration: "10 months",
      services: ["AI Automation", "IoT Solutions", "Process Optimization"],
      image: "/api/placeholder/600/400",
=======
      title: 'Enterprise Cybersecurity Overhaul',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      category: 'cybersecurity',
      duration: '4 months',
      teamSize: '12 security experts',
      challenge: 'Global Finance needed to strengthen their security posture to meet new regulatory requirements and protect against sophisticated cyber threats.',
      solution: 'We implemented a comprehensive zero-trust security architecture with advanced threat detection and response capabilities.',
      results: [
        '99.9% security uptime achieved',
        'Zero security breaches in 12 months',
        '100% compliance with new regulations',
        '40% reduction in security incidents'
      ],
      technologies: ['Zero Trust Architecture', 'SIEM', 'Endpoint Detection', 'Identity Management'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      category: 'cloud',
      duration: '8 months',
      teamSize: '15 engineers',
      challenge: 'RetailMax needed to migrate their legacy on-premises infrastructure to the cloud while maintaining business continuity during peak shopping seasons.',
      solution: 'We designed and executed a phased cloud migration strategy using AWS, implementing auto-scaling and disaster recovery solutions.',
      results: [
        '70% reduction in infrastructure costs',
        '99.99% uptime during peak seasons',
        '50% faster application deployment',
        'Unlimited scalability achieved'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      image: '/api/placeholder/600/400',
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
      featured: false
    },
    {
      id: 4,
<<<<<<< HEAD
      title: "Financial Services Risk Management",
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Manual fraud detection and risk assessment processes",
      solution: "AI-powered fraud detection and real-time risk analysis",
      results: [
        "85% improvement in fraud detection",
        "60% reduction in false positives",
        "90% faster risk assessment",
        "50% decrease in financial losses"
      ],
      duration: "7 months",
      services: ["AI Fraud Detection", "Risk Analytics", "Cybersecurity"],
      image: "/api/placeholder/600/400",
=======
      title: 'AI-Driven Business Intelligence Platform',
      client: 'ManufacturingPro Ltd.',
      industry: 'Manufacturing',
      category: 'ai',
      duration: '5 months',
      teamSize: '10 developers',
      challenge: 'ManufacturingPro needed real-time insights into their production processes to optimize efficiency and reduce waste.',
      solution: 'We developed an AI-powered analytics platform that processes IoT data from production lines and provides predictive insights.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in waste',
        'Real-time monitoring capabilities',
        'Predictive maintenance implementation'
      ],
      technologies: ['Machine Learning', 'IoT Integration', 'Real-time Analytics', 'Predictive Modeling'],
      image: '/api/placeholder/600/400',
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
      featured: false
    },
    {
      id: 5,
<<<<<<< HEAD
      title: "Retail Customer Experience Enhancement",
      company: "RetailMax",
      industry: "Retail",
      challenge: "Personalized customer experience and inventory management",
      solution: "AI-driven personalization and demand forecasting",
      results: [
        "65% increase in customer engagement",
        "40% improvement in inventory turnover",
        "50% boost in average order value",
        "30% increase in customer retention"
      ],
      duration: "5 months",
      services: ["AI Marketing", "Recommendation Engine", "Data Analytics"],
      image: "/api/placeholder/600/400",
=======
      title: 'Secure Healthcare Data Management',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      category: 'cybersecurity',
      duration: '3 months',
      teamSize: '6 security specialists',
      challenge: 'MediCare needed to secure patient data and ensure HIPAA compliance while improving data accessibility for healthcare providers.',
      solution: 'We implemented a secure, encrypted data management system with role-based access controls and audit logging.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero data breaches',
        '50% faster data retrieval',
        'Complete audit trail implementation'
      ],
      technologies: ['Data Encryption', 'HIPAA Compliance', 'Role-Based Access', 'Audit Logging'],
      image: '/api/placeholder/600/400',
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
      featured: false
    },
    {
      id: 6,
<<<<<<< HEAD
      title: "Logistics Optimization with 5G",
      company: "LogiTech",
      industry: "Logistics",
      challenge: "Real-time tracking and route optimization challenges",
      solution: "5G-enabled IoT network with AI-powered route optimization",
      results: [
        "45% reduction in delivery times",
        "35% decrease in fuel costs",
        "80% improvement in tracking accuracy",
        "25% increase in customer satisfaction"
      ],
      duration: "9 months",
      services: ["5G Solutions", "IoT Integration", "AI Analytics"],
      image: "/api/placeholder/600/400",
=======
      title: 'E-commerce Platform Development',
      client: 'StyleHub Fashion',
      industry: 'Fashion Retail',
      category: 'development',
      duration: '7 months',
      teamSize: '12 developers',
      challenge: 'StyleHub needed a modern, scalable e-commerce platform to replace their outdated system and support international expansion.',
      solution: 'We built a custom e-commerce platform with multi-language support, payment processing, and inventory management.',
      results: [
        '300% increase in online sales',
        'Support for 15+ countries',
        'Mobile-first responsive design',
        'Integrated payment processing'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Integration', 'Multi-language Support'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 7,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'LogisticsPlus',
      industry: 'Logistics',
      category: 'ai',
      duration: '6 months',
      teamSize: '9 data scientists',
      challenge: 'LogisticsPlus needed to optimize their supply chain operations to reduce costs and improve delivery times.',
      solution: 'We developed an AI-powered optimization system that analyzes shipping routes, inventory levels, and demand patterns.',
      results: [
        '35% reduction in shipping costs',
        '25% improvement in delivery times',
        'Real-time route optimization',
        'Predictive demand forecasting'
      ],
      technologies: ['Machine Learning', 'Optimization Algorithms', 'Real-time Data Processing', 'Predictive Analytics'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 8,
      title: 'Multi-Cloud Infrastructure Strategy',
      client: 'DataFlow Enterprises',
      industry: 'Data Services',
      category: 'cloud',
      duration: '9 months',
      teamSize: '18 cloud architects',
      challenge: 'DataFlow needed to implement a multi-cloud strategy to avoid vendor lock-in and optimize costs across different cloud providers.',
      solution: 'We designed and implemented a multi-cloud architecture using AWS, Azure, and GCP with unified management and monitoring.',
      results: [
        '40% cost optimization achieved',
        'Zero vendor lock-in',
        '99.9% availability across clouds',
        'Unified management dashboard'
      ],
      technologies: ['Multi-Cloud', 'AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes'],
      image: '/api/placeholder/600/400',
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
      featured: false
    }
  ];

<<<<<<< HEAD
  const stats = [
    { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

=======
  const filteredStudies = caseStudies.filter(study => 
    selectedCategory === 'all' || study.category === selectedCategory
  );

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Transformations</title>
        <meta name="description" content="Explore our successful projects and client transformations across various industries. See how we've helped businesses achieve their goals with innovative technology solutions." />
        <meta name="keywords" content="case studies, success stories, client projects, technology solutions, AI implementation, cloud migration, cybersecurity" />
        <meta property="og:title" content="Case Studies - Zion Tech Group | Success Stories & Client Transformations" />
        <meta property="og:description" content="Explore our successful projects and client transformations across various industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Award className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Case Studies</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across various industries transform their operations, 
              improve efficiency, and achieve their goals through innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {selectedCategory === 'all' && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Featured Success Stories
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredStudies.map((study) => (
                  <div key={study.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Award className="w-16 h-16 text-cyan-400/50" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          {categories.find(cat => cat.id === study.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">•</span>
                        <span className="text-gray-400 text-sm">{study.industry}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        <strong>Client:</strong> {study.client}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {study.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {study.teamSize}
                          </div>
                        </div>
                        <Link
                          to={`/case-studies/${study.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Case Studies */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'all' ? 'All Case Studies' : categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <div className="text-gray-400">
                {filteredStudies.length} case stud{filteredStudies.length !== 1 ? 'ies' : 'y'} found
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <div key={study.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="w-12 h-12 text-cyan-400/50" />
                    </div>
                    {study.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {categories.find(cat => cat.id === study.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{study.industry}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2 text-sm">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {study.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {study.teamSize}
                        </div>
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                      >
                        Read
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
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
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let us help you achieve similar results. Contact our team to discuss your project 
              and discover how we can transform your business with innovative technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Zap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}