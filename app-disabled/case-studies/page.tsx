<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client;

<<<<<<< HEAD
import React from 'react;
=======
'use client';
<<<<<<< HEAD

import React from 'react';
=======
import React from 'react';
<<<<<<< HEAD:app/case-studies/page.tsx
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
=======
import Link from 'next/link';
import { ArrowLeft, TrendingUp, CheckCircle } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e:app-disabled/case-studies/page.tsx

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case <span className="text-cyan-400">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-world success stories from our clients.
          </p>
        </div>
      </div>
    </div>
  );
};
import { ArrowRight, CheckCircle, Star, Building, Target, Award, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react;

interface CaseStudy {}
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

const CaseStudiesPage: React.FC = () => {}
  const caseStudies: CaseStudy[] = [
<<<<<<< HEAD
    {
<<<<<<< HEAD
      id: '1,
      title: 'AI-Powered Customer Service Transformation,
      client: 'TechCorp Solutions,
      industry: 'Technology,
      challenge: 'High customer service costs and long response times affecting customer satisfaction.,
      solution: 'Implemented AI-powered chatbots and automated ticket routing system.,
      results: [
        'Reduced response time by 80%,
        'Cut customer service costs by 60%,
        'Improved customer satisfaction by 45%,
        Handled 10x more inquiries with same team size
=======
    {}
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system.',
      results: []
        'Reduced response time by 80%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction by 45%',
        'Handled 10x more inquiries with same team size'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      image: '/images/case-studies/customer-service.jpg,
      duration: '6 months,
      team: AI & Customer Experience Team
=======
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '85% reduction in response time',
        '60% cost savings on customer service',
        '95% customer satisfaction rate',
        '$2.3M annual savings'
      ],
      duration: '6 months',
      team: '8 specialists'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
    },
<<<<<<< HEAD
    {
<<<<<<< HEAD
      id: '2,
      title: 'Cybersecurity Infrastructure Overhaul,
      client: 'Financial Services Company,
      industry: 'Finance,
      challenge: 'Outdated security systems vulnerable to modern cyber threats.,
      solution: 'Complete security infrastructure redesign with AI-powered threat detection.,
      results: [
        'Zero security breaches in 12 months,
        '99.9% threat detection accuracy,
        'Reduced false positives by 70%,
        Compliance with all regulatory requirements
=======
    {}
      id: '2',
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'Financial Services Company',
      industry: 'Finance',
      challenge: 'Outdated security systems vulnerable to modern cyber threats.',
      solution: 'Complete security infrastructure redesign with AI-powered threat detection.',
      results: []
        'Zero security breaches in 12 months',
        '99.9% threat detection accuracy',
        'Reduced false positives by 70%',
        'Compliance with all regulatory requirements'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      image: '/images/case-studies/cybersecurity.jpg,
      duration: '8 months,
      team: Cybersecurity & Compliance Team
    },
<<<<<<< HEAD
    {
      id: '3,
      title: 'Cloud Migration & Optimization,
      client: 'Manufacturing Corporation,
      image: '/images/case-studies/ai-customer-service.jpg,
      duration: '3 months,
      team: '8 specialists
      imag,
    e: /api/placeholder/600
      image: '/images/case-studies/ai-customer-service.jpg',      challenge: 'High customer service costs and long response times,
      solution: 'Implemented AI chatbot and automated ticketing system,
      results: [
        '60% reduction in response time,
        '40% cost savings,
        95% customer satisfaction rate
=======
    {}
      id: '3',
      title: 'Cloud Migration & Optimization',
      client: 'Manufacturing Corporation',
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '8 specialists'
      imag,
    e: '/api/placeholder/600
      image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: []
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      duration: '3 months,
      team: '5 specialists
      image: '/images/case-studies/ecommerce-ai.jpg
    },
<<<<<<< HEAD
      team: '8 specialists});)},
    {
      id: 2,
      title: 'Cloud Migration for Financial Services,
      company: 'FinanceFlow Ltd.,
      industry: 'Financial Services,
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.,
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.,
      challenge: 'Legacy systems causing performance issues and security concerns,
      solution: 'Complete cloud migration with enhanced security measures,
      results: [
        '50% improvement in system performance,
        '99.9% uptime achieved,
        30% reduction in operational costs
=======
      team: '8 specialists'});;)
},
    {}
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
      id: 2,
      title: 'Cloud Migration for Financial Services',
      company: 'FinanceFlow Ltd.',
      industry: 'Financial Services',
<<<<<<< HEAD
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security measures',
      results: []
        '50% improvement in system performance',
        '99.9% uptime achieved',
        '30% reduction in operational costs'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      image: '/images/case-studies/cloud-migration.jpg,
      duration: '6 months,
      team: '12 specialists
=======
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems limiting scalability and security concerns',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: [
        '99.9% uptime achieved',
        '40% faster processing speeds',
        '50% reduction in infrastructure costs',
        '100% compliance with financial regulations'
      ],
      duration: '8 months',
      team: '12 specialists'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
    },
      team: '12 specialists});)},
    {
<<<<<<< HEAD
      id: '3,
      title: 'Cybersecurity Enhancement for Healthcare,
      client: 'MediCare Plus,
      industry: 'Healthcare,
      challenge: 'Increasing cyber threats and need for HIPAA compliance in patient data protection.,
      solution: 'Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection.,
      results: [
        '100% HIPAA compliance achieved,
        'Zero security breaches in 12 months,
        'Real-time threat detection and response,
        Automated compliance reporting
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg,
      duration: '4 months,
      team: '10 specialists});)
},
<<<<<<< HEAD
    {
      id: '4,
      title: 'Machine Learning for Predictive Analytics,
      client: 'RetailMax,
      industry: 'Retail,
      challenge: 'Inventory management inefficiencies leading to stockouts and overstock situations.,
      solution: 'ML-powered demand forecasting system with real-time inventory optimization.,
      results: [
        '40% reduction in stockouts,
        '25% decrease in excess inventory,
        '15% increase in revenue,
        Real-time demand prediction accuracy of 92%
=======
    {}
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and need for HIPAA compliance in patient data protection.',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection.',
      results: []
        '100% HIPAA compliance achieved',
        'Zero security breaches in 12 months',
        'Real-time threat detection and response',
        'Automated compliance reporting'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      image: '/images/case-studies/ml-predictive-analytics.jpg,
      duration: '5 months,
      team: '6 specialists});)
},
<<<<<<< HEAD
    {
      id: '5,
      title: 'Digital Transformation for Manufacturing,
      client: 'ManufacturingPro,
      industry: 'Manufacturing,
      challenge: 'Legacy systems causing operational inefficiencies and high maintenance costs.,
      solution: 'Complete cloud migration with microservices architecture and AI optimization.,
      results: [
        '50% reduction in infrastructure costs,
        '99.9% uptime achieved,
        '3x faster application deployment,
        Scalable infrastructure for future growth
      ],
      image: '/images/case-studies/digital-transformation.jpg,
      duration: '8 months,
      team: '15 specialists    },
    {
      id: '6,
      title: 'Blockchain Integration for Supply Chain,
      client: 'GlobalLogistics,
      industry: 'Logistics,
      challenge: 'Lack of transparency and traceability in complex supply chain operations.,
      solution: 'Blockchain-based supply chain tracking system with smart contracts and real-time verification.,
      results: [
        'Complete supply chain transparency,
        '60% reduction in disputes,
        'Real-time shipment tracking,
        'Automated compliance verification
      ],
      image: '/images/case-studies/blockchain-supply-chain.jpg,
      duration: '7 months,
      team: '11 specialists    }

=======
    {}
      id: '4',
      title: 'Machine Learning for Predictive Analytics',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Inventory management inefficiencies leading to stockouts and overstock situations.',
      solution: 'ML-powered demand forecasting system with real-time inventory optimization.',
      results: []
        '40% reduction in stockouts',
        '25% decrease in excess inventory',
        '15% increase in revenue',
        'Real-time demand prediction accuracy of 92%'
      ],
      image: '/images/case-studies/ml-predictive-analytics.jpg',
      duration: '5 months',
      team: '6 specialists'});;)
},
    {}
      id: '5',
      title: 'Digital Transformation for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Legacy systems causing operational inefficiencies and high maintenance costs.',
      solution: 'Complete cloud migration with microservices architecture and AI optimization.',
      results: []
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster application deployment',
        'Scalable infrastructure for future growth'
      ],
      image: '/images/case-studies/digital-transformation.jpg',
      duration: '8 months',
      team: '15 specialists'
    },
    {}
      id: '6',
      title: 'Blockchain Integration for Supply Chain',
      client: 'GlobalLogistics',
      industry: 'Logistics',
      challenge: 'Lack of transparency and traceability in complex supply chain operations.',
      solution: 'Blockchain-based supply chain tracking system with smart contracts and real-time verification.',
      results: []
        'Complete supply chain transparency',
        '60% reduction in disputes',
        'Real-time shipment tracking',
        'Automated compliance verification'
      ],
      image: '/images/case-studies/blockchain-supply-chain.jpg',
      duration: '7 months',
      team: '11 specialists'
=======
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Increasing cyber threats and HIPAA compliance requirements',
      solution: 'Comprehensive security suite with AI threat detection',
      results: [
        'Zero security breaches in 18 months',
        '99.8% threat detection accuracy',
        '100% HIPAA compliance',
        '75% reduction in security incidents'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: 4,
      title: 'AI Analytics for E-commerce Optimization',
      client: 'ShopSmart Global',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Low conversion rates and poor customer insights',
      solution: 'AI-powered analytics and personalization engine',
      results: [
        '45% increase in conversion rates',
        '30% boost in average order value',
        '60% improvement in customer retention',
        '$5.2M additional revenue'
      ],
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: 5,
      title: 'Process Automation for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Manual processes causing delays and errors',
      solution: 'End-to-end automation with AI quality control',
      results: [
        '70% reduction in manual errors',
        '50% faster production cycles',
        '35% increase in productivity',
        '$3.8M cost savings annually'
      ],
      duration: '7 months',
      team: '15 specialists'
    },
    {
      id: 6,
      title: 'AI Content Generation for Marketing',
      client: 'MarketingMax',
      industry: 'Marketing',
      image: '/api/placeholder/600/400',
      challenge: 'High content creation costs and inconsistent quality',
      solution: 'AI content generation and optimization platform',
      results: [
        '80% reduction in content creation time',
        '65% cost savings on content production',
        '40% increase in engagement rates',
        '90% improvement in content consistency'
      ],
      duration: '3 months',
      team: '5 specialists'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  ];

<<<<<<< HEAD:app/case-studies/page.tsx
  const stats = [;
    { label: 'Projects Completed', value: '150+, icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%, icon: TrendingUp },
    { label: 'Team Members', value: '50+, icon: Users },
    { label: 'Industry Awards', value: '25+, icon: Award }  ];
=======
  return (
    <>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </header>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e:app-disabled/case-studies/page.tsx

<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
  return (

    <>
=======
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, business transformation, Zion Tech Group" />
      </Helmet>

<<<<<<< HEAD
{/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
    <>
  </>
    <div className="min-h-screen bg-gray-50">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
      <Helmet>
<<<<<<< HEAD
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses transform their operations and achieve remarkable results. />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, business results, client testimonials />
        <meta property="og:title" content="Case Studies - Zion Tech Group />
        <meta property="og:description" content="Success stories from our AI and IT solutions />
        <meta property="og:type" content="website />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12>
              Discover how weve helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
            </p>
<<<<<<< HEAD
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
<<<<<<< HEAD

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8>
=======
      {/* Category Filter */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category.label} ({category.count})
              </button>
      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {study.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {result}
=======
        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <article key={study.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
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
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-4">
                      {study.client}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                      Results:
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          <span>{result}</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
                        </li>
                      ))}
                    </ul>
                  </div>

<<<<<<< HEAD
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <span className="block">Team: {study.teamSize}</span>
                      <span className="block">Duration: {study.duration}</span>
                    </div>
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
<div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-4">{study.results.roi}</div>
                      <div className="text-2xl font-semibold mb-2">Return on Investment</div>
                      <div className="text-lg opacity-75 mb-8">{study.company}</div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                          <div className="text-xl font-bold">{study.results.conversion}</div>
                          <div className="text-sm opacity-75">Conversion Rate</div>
                        </div>
                        <div className="text-center">
                          <DollarSign className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                          <div className="text-xl font-bold">{study.results.revenue}</div>
                          <div className="text-sm opacity-75">Revenue Increase</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
              {stats.map((stat, index) => (

                <div key={index} className="text-center>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4>
                    <stat.icon className="w-8 h-8 text-white />
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (}
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                  </div>
                  <div className="text-3xl font-bold text-white mb-2>{stat.value}</div>
                  <div className="text-gray-400>{stat.label}</div>
                </div>
=======
                  <button className="cyber-button w-full">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </article>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
              ))}

            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Case Studies Grid */}
<<<<<<< HEAD

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8>
              {caseStudies.map((study) => (

                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group>
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative>
                    <div className="absolute inset-0 bg-black/20></div>
                    <div className="absolute bottom-4 left-4 right-4>
                      <div className="flex items-center gap-2 text-white text-sm>
                        <span className="bg-purple-500 px-3 py-1 rounded-full>{study.industry}</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full>{study.duration}</span>
                      </div>                    </div>
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (}
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <span className="bg-purple-500 px-3 py-1 rounded-full">{study.industry}</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">{study.duration}</span>
                      </div>
                    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                  </div>
                  
                  <div className="p-8>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors>
                      {study.title}

                    </h3>
                    
                    <div className="mb-6>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2>Client: {study.client}</h4>
                      <p className="text-gray-300 text-sm mb-4>{study.team}</p>
                    </div>

                    <div className="mb-6>
                      <h4 className="text-lg font-semibold text-white mb-2>Challenge</h4>
                      <p className="text-gray-300 text-sm mb-4>{study.challenge}</p>
                    </div>

                    <div className="mb-6>
                      <h4 className="text-lg font-semibold text-white mb-2>Solution</h4>
                      <p className="text-gray-300 text-sm mb-4>{study.solution}</p>
                    </div>

<<<<<<< HEAD
                    <div className="mb-6>
                      <h4 className="text-lg font-semibold text-white mb-3>Results</h4>
                      <ul className="space-y-2>
                        {study.results.map((result, index) => (

                          <li key={index} className="flex items-center text-gray-300 text-sm>
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 />
=======
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (}
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                            {result}

                          </li>
                        ))}

                      </ul>
                    </div>

                    <div className="flex items-center justify-between>
                      <Link
                        to={`/case-studies/${study.id}}

                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 />
                      </Link>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors>
                        <ExternalLink className="w-4 h-4 />
                        Share
                      </button>
                    </div>                  </div>
                </div>
              ))}

=======
        {/* Statistics Section */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20>
              <h2 className="text-3xl font-bold text-white mb-6>
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8>
                Lets discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <Link
                  to="/contact
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105
                >
                  Get Started Today
                  <ExternalLink className="w-5 h-5 />
                </Link>
                <Link
                  to="/services
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
<<<<<<< HEAD
=======
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">We analyze your current challenges and identify opportunities for improvement.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-600">We develop a comprehensive strategy tailored to your specific needs and goals.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">Our expert team implements the solution with minimal disruption to your operations.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600">We continuously monitor and optimize the solution to ensure maximum performance.</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our AI and IT solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
        </section>
      </div>
    </>
  );
<<<<<<< HEAD

  );  ));)
=======
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Case studies from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};

<<<<<<< HEAD
export default CaseStudiesPage;
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
export default CaseStudiesPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
